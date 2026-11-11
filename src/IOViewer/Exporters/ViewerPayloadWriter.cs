using System.Globalization;
using System.Runtime.InteropServices;
using System.Text.Json;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Builds the META, BIN and PROPS blocks of the HTML viewer (format 2) from a <see cref="ViewerDocument"/>.
/// All input is validated and the binary blob is assembled by <see cref="Create"/>, before anything is written.
/// </summary>
internal sealed class ViewerPayloadWriter
{
    private const int FlushThreshold = 1 << 16;
    private static readonly RgbaColor DefaultColor = new(200, 200, 200);

    private readonly ViewerDocument _doc;
    private readonly HtmlViewerOptions _options;
    private readonly BinaryBlobBuilder _blob = new();
    private readonly List<GeometryEntry> _geometries = [];
    private readonly Dictionary<int, List<int>> _geometriesByHash = [];
    private readonly List<MaterialKey> _materials = [];
    private readonly Dictionary<MaterialKey, int> _materialIndex = [];
    private readonly Dictionary<int, ViewerMaterial> _materialsById = [];
    private readonly List<uint> _instanceGeometry = [];
    private readonly List<uint> _instanceMaterial = [];
    private readonly List<int> _instanceElement = [];
    private readonly List<float> _instanceMatrix = [];
    private BoundingBox3d _bounds;
    private Vector3d _rtcOffset;
    private int _writtenMeshes;
    private InstanceViews _instances;

    private ViewerPayloadWriter(ViewerDocument doc, HtmlViewerOptions options)
    {
        _doc = doc;
        _options = options;
    }

    /// <summary>Validates <paramref name="doc"/> and lays out all geometry and instance arrays.</summary>
    /// <exception cref="InvalidDataException">The document references missing geometry or has invalid indices.</exception>
    public static ViewerPayloadWriter Create(ViewerDocument doc, HtmlViewerOptions options)
    {
        var writer = new ViewerPayloadWriter(doc, options);
        writer.Build();
        return writer;
    }

    private void Build()
    {
        var shared = new Dictionary<int, ViewerGeometry>();
        foreach (var geometry in _doc.Geometries)
        {
            if (!shared.TryAdd(geometry.Id, geometry))
            {
                throw new InvalidDataException($"Geometry id {geometry.Id} is used by more than one geometry.");
            }
            CheckIndices(geometry.Indices, geometry.Vertices.Count, $"Geometry {geometry.Id}");
        }

        foreach (var mesh in _doc.Meshes)
        {
            if (mesh.GeometryId is int id)
            {
                if (!shared.ContainsKey(id))
                {
                    throw new InvalidDataException($"Mesh {mesh.Id} references geometry {id}, which is not in the document.");
                }
                if (mesh.Vertices.Count > 0)
                {
                    throw new InvalidDataException($"Mesh {mesh.Id} has both geometry {id} and its own vertices.");
                }
            }
            else
            {
                CheckIndices(mesh.Indices, mesh.Vertices.Count, $"Mesh {mesh.Id}");
            }
        }

        foreach (var material in _doc.Materials) _materialsById.TryAdd(material.Id, material);
        var elementIndex = new Dictionary<long, int>();
        for (int i = 0; i < _doc.Elements.Count; i++) elementIndex.TryAdd(_doc.Elements[i].Id, i);

        _bounds = _doc.ComputeBoundingBox();
        _rtcOffset = _bounds.IsEmpty ? Vector3d.Zero : _bounds.Center;

        var sharedOutput = new Dictionary<int, int>();
        long totalVertices = 0;
        foreach (var mesh in _doc.Meshes)
        {
            var geometry = mesh.GeometryId is int id ? shared[id] : null;
            int vertexCount = geometry?.Vertices.Count ?? mesh.Vertices.Count;
            if (totalVertices + vertexCount > _options.MaxMeshVertices) break;
            totalVertices += vertexCount;

            var transform = mesh.Transform ?? Transform3d.Identity;
            int geometryIndex;
            if (geometry is not null)
            {
                if (!sharedOutput.TryGetValue(geometry.Id, out geometryIndex))
                {
                    geometryIndex = AddSharedGeometry(geometry);
                    sharedOutput.Add(geometry.Id, geometryIndex);
                }
            }
            else
            {
                (geometryIndex, var min) = AddOwnGeometry(mesh, transform);
                transform = Transform3d.Translate(min);
            }

            _instanceGeometry.Add((uint)geometryIndex);
            _instanceMaterial.Add((uint)MaterialIndex(mesh));
            _instanceElement.Add(mesh.ElementId is long e && elementIndex.TryGetValue(e, out int index) ? index : -1);
            AddMatrix(transform);
            _writtenMeshes++;
        }

        _instances = new InstanceViews(
            _blob.Add(CollectionsMarshal.AsSpan(_instanceGeometry)),
            _blob.Add(CollectionsMarshal.AsSpan(_instanceMaterial)),
            _blob.Add(CollectionsMarshal.AsSpan(_instanceElement)),
            _blob.Add(CollectionsMarshal.AsSpan(_instanceMatrix)));
    }

    private static void CheckIndices(IReadOnlyList<int> indices, int vertexCount, string owner)
    {
        for (int i = 0; i < indices.Count; i++)
        {
            if ((uint)indices[i] >= (uint)vertexCount)
            {
                throw new InvalidDataException(
                    $"{owner}: index {indices[i]} at position {i} is outside the {vertexCount} vertices.");
            }
        }
    }

    private int AddSharedGeometry(ViewerGeometry geometry)
    {
        var vertices = geometry.Vertices;
        var positions = new float[vertices.Count * 3];
        for (int i = 0; i < vertices.Count; i++) SetVector(positions, i, vertices[i]);
        float[]? normals = null;
        if (geometry.Normals is { } n && n.Count == vertices.Count)
        {
            normals = new float[n.Count * 3];
            for (int i = 0; i < n.Count; i++) SetVector(normals, i, n[i]);
        }
        return AddGeometry(positions, geometry.Indices, normals, Uvs(geometry.UVs, vertices.Count), geometry.ComputeBoundingBox());
    }

    // Bakes the mesh transform into its vertices and moves them to the mesh's own minimum corner.
    private (int Index, Vector3d Min) AddOwnGeometry(ViewerMesh mesh, Transform3d transform)
    {
        var vertices = mesh.Vertices;
        var world = new Vector3d[vertices.Count];
        var box = BoundingBox3d.Empty;
        for (int i = 0; i < world.Length; i++)
        {
            world[i] = transform.Apply(vertices[i]);
            box = box.Encapsulate(world[i]);
        }
        var min = box.IsEmpty ? Vector3d.Zero : box.Min;

        var positions = new float[world.Length * 3];
        for (int i = 0; i < world.Length; i++) SetVector(positions, i, world[i] - min);

        float[]? normals = null;
        if (mesh.Normals is { } n && n.Count == vertices.Count)
        {
            normals = new float[n.Count * 3];
            for (int i = 0; i < n.Count; i++)
            {
                SetVector(normals, i, mesh.Transform is null ? n[i] : TransformNormal(transform, n[i]));
            }
        }

        var local = box.IsEmpty ? box : new BoundingBox3d(Vector3d.Zero, box.Max - min);
        return (AddGeometry(positions, mesh.Indices, normals, Uvs(mesh.UVs, vertices.Count), local), min);
    }

    // Multiplies by the inverse transpose of the linear part, so normals stay perpendicular under any affine map.
    private static Vector3d TransformNormal(Transform3d t, Vector3d n)
    {
        var bc = Vector3d.Cross(t.YAxis, t.ZAxis);
        var r = bc * n.X + Vector3d.Cross(t.ZAxis, t.XAxis) * n.Y + Vector3d.Cross(t.XAxis, t.YAxis) * n.Z;
        return (Vector3d.Dot(t.XAxis, bc) < 0 ? -r : r).Normalized();
    }

    private static float[]? Uvs(IReadOnlyList<Vector2d>? uvs, int vertexCount)
    {
        if (uvs is null || uvs.Count != vertexCount) return null;
        var result = new float[uvs.Count * 2];
        for (int i = 0; i < uvs.Count; i++)
        {
            result[i * 2] = (float)uvs[i].X;
            result[i * 2 + 1] = (float)uvs[i].Y;
        }
        return result;
    }

    private static void SetVector(float[] target, int index, Vector3d v)
    {
        target[index * 3] = (float)v.X;
        target[index * 3 + 1] = (float)v.Y;
        target[index * 3 + 2] = (float)v.Z;
    }

    // Returns the index of an identical geometry written before, or writes this one.
    private int AddGeometry(float[] positions, IReadOnlyList<int> indices, float[]? normals, float[]? uvs, BoundingBox3d bounds)
    {
        ushort[]? indices16 = null;
        uint[]? indices32 = null;
        if (positions.Length / 3 <= ushort.MaxValue)
        {
            indices16 = new ushort[indices.Count];
            for (int i = 0; i < indices.Count; i++) indices16[i] = (ushort)indices[i];
        }
        else
        {
            indices32 = new uint[indices.Count];
            for (int i = 0; i < indices.Count; i++) indices32[i] = (uint)indices[i];
        }

        var hasher = new HashCode();
        hasher.AddBytes(Bytes(positions));
        hasher.AddBytes(Bytes(indices16));
        hasher.AddBytes(Bytes(indices32));
        hasher.Add(normals is null);
        hasher.AddBytes(Bytes(normals));
        hasher.Add(uvs is null);
        hasher.AddBytes(Bytes(uvs));
        int hash = hasher.ToHashCode();

        if (!_geometriesByHash.TryGetValue(hash, out var candidates))
        {
            candidates = [];
            _geometriesByHash.Add(hash, candidates);
        }
        foreach (int candidate in candidates)
        {
            var entry = _geometries[candidate];
            if (Same(positions, entry.Positions)
                && (indices16 is not null ? Same(indices16, entry.Indices) : Same(indices32, entry.Indices))
                && Same(normals, entry.Normals)
                && Same(uvs, entry.Uvs))
            {
                return candidate;
            }
        }

        var written = new GeometryEntry(
            _blob.Add(positions),
            indices16 is not null ? _blob.Add(indices16) : _blob.Add(indices32),
            normals is null ? null : _blob.Add(normals),
            uvs is null ? null : _blob.Add(uvs),
            bounds);
        _geometries.Add(written);
        candidates.Add(_geometries.Count - 1);
        return _geometries.Count - 1;
    }

    private bool Same<T>(T[]? values, BlobView? view) where T : struct =>
        values is null ? view is null : view is { } v && Bytes(values).SequenceEqual(_blob.Bytes(v));

    private static ReadOnlySpan<byte> Bytes<T>(T[]? values) where T : struct =>
        values is null ? default : MemoryMarshal.AsBytes(values.AsSpan());

    private int MaterialIndex(ViewerMesh mesh)
    {
        MaterialKey key;
        if (mesh.Color is null && mesh.MaterialId is int id && _materialsById.TryGetValue(id, out var material))
        {
            var c = material.Color;
            key = new MaterialKey(c.R, c.G, c.B, Math.Clamp(c.Af * material.Opacity * mesh.Opacity, 0, 1),
                mesh.TextureIndex ?? material.TextureIndex);
        }
        else
        {
            var c = mesh.Color ?? DefaultColor;
            key = new MaterialKey(c.R, c.G, c.B, Math.Clamp(c.Af * mesh.Opacity, 0, 1), mesh.TextureIndex);
        }

        if (!_materialIndex.TryGetValue(key, out int index))
        {
            index = _materials.Count;
            _materials.Add(key);
            _materialIndex.Add(key, index);
        }
        return index;
    }

    // Matrix4.elements[0,1,2,4,5,6,8,9,10,12,13,14]: the three axes, then the translation in RTC space.
    private void AddMatrix(Transform3d t)
    {
        foreach (var axis in (ReadOnlySpan<Vector3d>)[t.XAxis, t.YAxis, t.ZAxis, t.Translation - _rtcOffset])
        {
            _instanceMatrix.Add((float)axis.X);
            _instanceMatrix.Add((float)axis.Y);
            _instanceMatrix.Add((float)axis.Z);
        }
    }

    public void WriteBin(Stream output) => _blob.WriteBase64(output);

    public void WriteProps(Stream output)
    {
        using var w = new Utf8JsonWriter(output);
        w.WriteStartObject();
        if (_options.IncludeProperties)
        {
            foreach (var el in _doc.Elements)
            {
                if (el.Properties.Count == 0) continue;
                w.WriteStartObject(el.Id.ToString(CultureInfo.InvariantCulture));
                foreach (var group in el.Properties)
                {
                    w.WriteStartObject(group.Key);
                    foreach (var prop in group.Value) w.WriteString(prop.Key, prop.Value);
                    w.WriteEndObject();
                }
                w.WriteEndObject();
                FlushIfLarge(w);
            }
        }
        w.WriteEndObject();
    }

    public void WriteMeta(Stream output)
    {
        using var w = new Utf8JsonWriter(output);
        w.WriteStartObject();
        w.WriteNumber("format", 2);
        w.WriteString("title", _options.Title);
        w.WriteString("author", _doc.Author ?? "IOViewer");
        w.WriteString("createdAt", _doc.CreatedAt ?? DateTimeOffset.UtcNow.ToString("O", CultureInfo.InvariantCulture));
        WriteVector(w, "rtcOffset", _rtcOffset);
        WriteBox(w, "bbox", _bounds, _rtcOffset);

        w.WriteStartObject("options");
        w.WriteBoolean("initialWireframe", _options.InitialWireframe);
        w.WriteBoolean("initialWhiteMode", _options.InitialWhiteMode);
        w.WriteEndObject();

        if (_writtenMeshes < _doc.Meshes.Count)
        {
            w.WriteStartObject("truncated");
            w.WriteNumber("meshes", _writtenMeshes);
            w.WriteNumber("totalMeshes", _doc.Meshes.Count);
            w.WriteEndObject();
        }
        else
        {
            w.WriteNull("truncated");
        }

        w.WriteStartArray("materials");
        foreach (var m in _materials)
        {
            w.WriteStartObject();
            w.WriteStartArray("color");
            w.WriteNumberValue(m.R / 255.0);
            w.WriteNumberValue(m.G / 255.0);
            w.WriteNumberValue(m.B / 255.0);
            w.WriteEndArray();
            w.WriteNumber("opacity", m.Opacity);
            if (m.Texture is int texture) w.WriteNumber("texture", texture);
            else w.WriteNull("texture");
            w.WriteEndObject();
        }
        w.WriteEndArray();

        w.WriteStartArray("textures");
        foreach (var tex in _doc.Textures)
        {
            w.WriteStartObject();
            w.WriteString("mime", tex.MimeType);
            w.WriteString("data", tex.Base64Data);
            w.WriteNumber("sx", tex.ScaleX);
            w.WriteNumber("sy", tex.ScaleY);
            w.WriteEndObject();
            FlushIfLarge(w);
        }
        w.WriteEndArray();

        w.WriteStartArray("geometries");
        foreach (var g in _geometries)
        {
            w.WriteStartObject();
            w.WritePropertyName("positions");
            g.Positions.WriteTo(w);
            w.WritePropertyName("indices");
            g.Indices.WriteTo(w);
            WriteView(w, "normals", g.Normals);
            WriteView(w, "uvs", g.Uvs);
            WriteBox(w, "bbox", g.Bounds, Vector3d.Zero);
            w.WriteEndObject();
            FlushIfLarge(w);
        }
        w.WriteEndArray();

        w.WriteStartObject("instances");
        w.WriteNumber("count", _writtenMeshes);
        w.WritePropertyName("geometry");
        _instances.Geometry.WriteTo(w);
        w.WritePropertyName("material");
        _instances.Material.WriteTo(w);
        w.WritePropertyName("element");
        _instances.Element.WriteTo(w);
        w.WritePropertyName("matrix");
        _instances.Matrix.WriteTo(w);
        w.WriteEndObject();

        w.WriteStartArray("elements");
        foreach (var el in _doc.Elements)
        {
            w.WriteStartObject();
            w.WriteNumber("id", el.Id);
            w.WriteString("name", el.Name);
            w.WriteString("category", string.IsNullOrEmpty(el.Category) ? "General" : el.Category);
            w.WriteString("type", el.TypeName);
            w.WriteString("level", el.Level);
            if (string.IsNullOrEmpty(el.LinkName)) w.WriteNull("link");
            else w.WriteString("link", el.LinkName);
            w.WriteEndObject();
            FlushIfLarge(w);
        }
        w.WriteEndArray();

        WriteViewpoints(w);
        WriteGrids(w);
        WriteTimeLiner(w);
        WriteLinkedFiles(w);
        WriteClashTests(w);

        w.WriteEndObject();
    }

    private void WriteViewpoints(Utf8JsonWriter w)
    {
        w.WriteStartArray("viewpoints");
        if (_options.IncludeViewpoints)
        {
            foreach (var vp in _doc.Viewpoints)
            {
                w.WriteStartObject();
                w.WriteString("name", vp.Name);
                w.WriteStartObject("camera");
                WriteVector(w, "position", vp.Camera.Position - _rtcOffset);
                WriteVector(w, "target", vp.Camera.Target - _rtcOffset);
                w.WriteEndObject();
                w.WriteEndObject();
            }
        }
        w.WriteEndArray();
    }

    private void WriteGrids(Utf8JsonWriter w)
    {
        w.WriteStartArray("grids");
        if (_options.IncludeGrids && _doc.Grids is not null)
        {
            foreach (var line in _doc.Grids.Lines)
            {
                w.WriteStartObject();
                w.WriteString("name", line.Name);
                WriteVector(w, "start", line.Start - _rtcOffset);
                WriteVector(w, "end", line.End - _rtcOffset);
                w.WriteEndObject();
            }
        }
        w.WriteEndArray();
    }

    private void WriteTimeLiner(Utf8JsonWriter w)
    {
        var schedule = _doc.TimeLiner;
        if (!_options.IncludeTimeLiner || schedule is null || schedule.Tasks.Count == 0)
        {
            w.WriteNull("timeliner");
            return;
        }

        const string dateFormat = "yyyy-MM-ddTHH:mm:ssZ";
        w.WriteStartObject("timeliner");
        w.WriteString("name", schedule.Name);
        w.WriteString("start", schedule.GetOverallStart().ToString(dateFormat, CultureInfo.InvariantCulture));
        w.WriteString("end", schedule.GetOverallEnd().ToString(dateFormat, CultureInfo.InvariantCulture));

        w.WriteStartArray("tasks");
        void WriteTask(ViewerTimeLinerTask t)
        {
            w.WriteStartObject();
            w.WriteString("id", t.Id);
            w.WriteString("name", t.Name);
            w.WriteString("type", t.TaskType.ToString().ToLowerInvariant());
            w.WriteString("start", t.PlannedStart.ToString(dateFormat, CultureInfo.InvariantCulture));
            w.WriteString("end", t.PlannedEnd.ToString(dateFormat, CultureInfo.InvariantCulture));
            if (t.PlannedCost.HasValue) w.WriteNumber("cost", t.PlannedCost.Value);
            w.WriteNumber("progress", t.Progress);
            w.WriteStartArray("attachedElements");
            foreach (var id in t.AttachedElementIds) w.WriteNumberValue(id);
            w.WriteEndArray();
            w.WriteEndObject();
            foreach (var child in t.Children) WriteTask(child);
        }
        foreach (var task in schedule.Tasks) WriteTask(task);
        w.WriteEndArray();
        w.WriteEndObject();
    }

    private void WriteLinkedFiles(Utf8JsonWriter w)
    {
        w.WriteStartArray("linkedFiles");
        foreach (var file in _doc.LinkedFiles)
        {
            w.WriteStartObject();
            w.WriteString("name", file.Name);
            w.WriteString("path", file.Path);
            w.WriteBoolean("visible", file.Visible);
            w.WriteEndObject();
        }
        w.WriteEndArray();
    }

    private void WriteClashTests(Utf8JsonWriter w)
    {
        w.WriteStartArray("clashTests");
        if (_options.IncludeClashes)
        {
            foreach (var test in _doc.ClashTests)
            {
                w.WriteStartObject();
                w.WriteString("name", test.Name);
                w.WriteStartArray("clashes");
                foreach (var clash in test.Clashes)
                {
                    w.WriteStartObject();
                    w.WriteString("id", clash.Id);
                    w.WriteString("name", clash.Name);
                    w.WriteString("element1Name", clash.Element1Name);
                    w.WriteString("element2Name", clash.Element2Name);
                    WriteNullableNumber(w, "element1Id", clash.Element1Id);
                    WriteNullableNumber(w, "element2Id", clash.Element2Id);
                    WriteVector(w, "point", clash.Point - _rtcOffset);
                    w.WriteNumber("distance", clash.Distance);
                    w.WriteString("status", clash.Status.ToString());
                    w.WriteEndObject();
                }
                w.WriteEndArray();
                w.WriteEndObject();
            }
        }
        w.WriteEndArray();
    }

    private static void WriteNullableNumber(Utf8JsonWriter w, string name, long? value)
    {
        if (value is long v) w.WriteNumber(name, v);
        else w.WriteNull(name);
    }

    private static void WriteView(Utf8JsonWriter w, string name, BlobView? view)
    {
        w.WritePropertyName(name);
        if (view is { } v) v.WriteTo(w);
        else w.WriteNullValue();
    }

    private static void WriteVector(Utf8JsonWriter w, string name, Vector3d v)
    {
        w.WriteStartArray(name);
        w.WriteNumberValue(v.X);
        w.WriteNumberValue(v.Y);
        w.WriteNumberValue(v.Z);
        w.WriteEndArray();
    }

    // An empty box (no vertices) is written as a zero box so the viewer always gets finite numbers.
    private static void WriteBox(Utf8JsonWriter w, string name, BoundingBox3d box, Vector3d offset)
    {
        w.WriteStartObject(name);
        WriteVector(w, "min", box.IsEmpty ? Vector3d.Zero : box.Min - offset);
        WriteVector(w, "max", box.IsEmpty ? Vector3d.Zero : box.Max - offset);
        w.WriteEndObject();
    }

    private static void FlushIfLarge(Utf8JsonWriter w)
    {
        if (w.BytesPending > FlushThreshold) w.Flush();
    }

    private readonly record struct MaterialKey(byte R, byte G, byte B, double Opacity, int? Texture);

    private sealed record GeometryEntry(BlobView Positions, BlobView Indices, BlobView? Normals, BlobView? Uvs, BoundingBox3d Bounds);

    private readonly record struct InstanceViews(BlobView Geometry, BlobView Material, BlobView Element, BlobView Matrix);
}
