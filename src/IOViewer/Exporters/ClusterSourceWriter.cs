using System.Buffers;
using System.Globalization;
using System.Text.Json;
using IOScene;
using IOViewer.Model;

namespace IOViewer.Exporters;

// Disk-backed handoff to the offline LOD builder. A record is at most 8,192 triangles.
internal static class ClusterSourceWriter
{
    private const int RecordIndices = 8192 * 3;
    private const uint Signature = 0x33534d49; // IMS3
    private const uint SharedSignature = 0x34534d49; // IMS4

    // shortcut: share translations within each baked linear transform, until streamed draws carry full matrices.
    private readonly record struct ShapeKey(int Geometry, Vector3d X, Vector3d Y, Vector3d Z);
    private readonly record struct ShapeRecord(long Offset, BoundingBox3d Bounds, int Vertices, int Indices, bool Closed);

    internal static long Save(ViewerDocument doc, string target, HtmlViewerOptions options)
    {
        string path = Path.GetFullPath(target);
        string temporary = Path.Combine(Path.GetDirectoryName(path)!, $".ioviewer-{Guid.NewGuid():N}.tmp");
        try
        {
            long triangles;
            using (var stream = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None, 65536))
            using (var writer = new BinaryWriter(stream))
                triangles = Write(doc, writer, options);
            File.Move(temporary, path);
            return triangles;
        }
        finally
        {
            File.Delete(temporary);
        }
    }

    private static long Write(ViewerDocument doc, BinaryWriter writer, HtmlViewerOptions options)
    {
        var scene = doc.Scene;
        var geometries = scene.Geometries.ToDictionary(geometry => geometry.Id);
        var materials = scene.Materials.ToDictionary(material => material.Id);
        var textures = scene.Textures.Select((texture, index) => (texture.Id, index)).ToDictionary(texture => texture.Id, texture => texture.index);
        var canonical = FindEqualMeshes(geometries, scene.Instances);
        ShapeKey Key(SceneInstance instance, Transform3d t) => new(canonical[instance.GeometryId], t.XAxis, t.YAxis, t.ZAxis);
        var uses = new Dictionary<ShapeKey, int>();
        foreach (var instance in scene.Instances)
        {
            if (!canonical.ContainsKey(instance.GeometryId)) continue;
            var key = Key(instance, instance.Transform ?? Transform3d.Identity);
            uses[key] = uses.GetValueOrDefault(key) + 1;
        }
        var templates = uses.Where(entry => entry.Value > 1).ToDictionary(entry => entry.Key, _ => new List<ShapeRecord>());
        bool sharedFormat = templates.Count > 0;
        var closed = new Dictionary<int, bool>();
        var bounds = scene.ComputeBounds();
        var origin = bounds.IsEmpty ? Vector3d.Zero : bounds.Center;
        if (!double.IsFinite(origin.X) || !double.IsFinite(origin.Y) || !double.IsFinite(origin.Z))
            throw new InvalidDataException("Non-finite scene origin.");
        writer.Write(sharedFormat ? SharedSignature : Signature);
        writer.Write(origin.X);
        writer.Write(origin.Y);
        writer.Write(origin.Z);
        long directoryOffset = writer.BaseStream.Position;
        writer.Write(0L);
        var remap = new Dictionary<int, int>();
        var vertices = new List<Vector3d>();
        var normals = new List<Vector3d>();
        var uvs = new List<Vector2d>();
        var indices = new List<int>();
        long triangles = 0;
        foreach (var instance in scene.Instances)
        {
            if (!geometries.TryGetValue(instance.GeometryId, out var geometry))
                throw new InvalidDataException($"Missing geometry {instance.GeometryId}.");
            if (geometry.Topology != SceneTopology.Triangles) continue;
            var material = instance.MaterialId is int id ? materials.GetValueOrDefault(id) : null;
            var color = instance.Color ?? material?.Color ?? new RgbaColor(200, 200, 200);
            int texture = material?.TextureId is int textureId && geometry.UVs?.Count == geometry.Vertices.Count
                ? textures.GetValueOrDefault(textureId, -1) : -1;
            var transform = instance.Transform ?? Transform3d.Identity;
            var rebased = transform with { Translation = transform.Translation - origin };
            var template = canonical.ContainsKey(geometry.Id) ? templates.GetValueOrDefault(Key(instance, transform)) : null;
            bool hasNormals = geometry.Normals?.Count == geometry.Vertices.Count;
            bool hasUvs = geometry.UVs?.Count == geometry.Vertices.Count;
            var shift = Vector3d.Zero;
            if (template is not null)
            {
                var anchor = geometry.Vertices[0];
                shift = RoundPoint(rebased.Apply(anchor));
                if (template.Count > 0)
                {
                    foreach (var record in template)
                    {
                        WriteHeader(record.Bounds, record.Vertices, record.Indices, record.Closed, record.Offset);
                        triangles += record.Indices / 3;
                    }
                    continue;
                }
                rebased = transform with { Translation = Vector3d.Zero };
            }
            var nx = Vector3d.Cross(transform.YAxis, transform.ZAxis);
            var ny = Vector3d.Cross(transform.ZAxis, transform.XAxis);
            var nz = Vector3d.Cross(transform.XAxis, transform.YAxis);
            bool mirrored = Vector3d.Dot(transform.XAxis, nx) < 0;
            bool hasIndices = geometry.Indices.Count != 0;
            int count = hasIndices ? geometry.Indices.Count : geometry.Vertices.Count / 3 * 3;
            if (count % 3 != 0) throw new InvalidDataException($"Invalid triangle indices in geometry {geometry.Id}.");
            if (!closed.TryGetValue(geometry.Id, out bool solid))
                closed.Add(geometry.Id, solid = IsClosed(geometry, count));
            for (int start = 0; start < count; )
            {
                int length = Math.Min(RecordIndices, count - start);
                var box = BoundingBox3d.Empty;
                remap.Clear();
                vertices.Clear();
                normals.Clear();
                uvs.Clear();
                indices.Clear();
                for (int i = 0; i < length; i++)
                {
                    int at = start + (mirrored && i % 3 != 0 ? i + (i % 3 == 1 ? 1 : -1) : i);
                    int index = hasIndices ? geometry.Indices[at] : at;
                    if ((uint)index >= (uint)geometry.Vertices.Count)
                        throw new InvalidDataException($"Invalid vertex index in geometry {geometry.Id}.");
                    if (!remap.TryGetValue(index, out int slot))
                    {
                        slot = vertices.Count;
                        remap.Add(index, slot);
                        var p = template is null ? geometry.Vertices[index] : geometry.Vertices[index] - geometry.Vertices[0];
                        var point = RoundPoint(rebased.Apply(p));
                        vertices.Add(point);
                        box = box.Encapsulate(point);
                        if (hasNormals)
                        {
                            var n = geometry.Normals![index];
                            normals.Add(((nx * n.X + ny * n.Y + nz * n.Z) * (mirrored ? -1 : 1)).Normalized());
                        }
                        if (texture >= 0 || (template is not null && hasUvs)) uvs.Add(geometry.UVs![index]);
                    }
                    indices.Add(slot);
                }
                long offset = template is null ? -1 : writer.BaseStream.Position;
                template?.Add(new ShapeRecord(offset, box, vertices.Count, length, solid));
                WriteHeader(box, vertices.Count, length, solid, offset);
                foreach (var p in vertices) WriteVector(writer, p);
                foreach (var n in normals) WriteVector(writer, n);
                foreach (int i in indices) writer.Write(i);
                foreach (var uv in uvs)
                {
                    if (!float.IsFinite((float)uv.X) || !float.IsFinite((float)uv.Y))
                        throw new InvalidDataException($"Non-finite UV in geometry {geometry.Id}.");
                    writer.Write((float)uv.X);
                    writer.Write((float)uv.Y);
                }
                triangles += length / 3;
                start += length;
            }

            void WriteHeader(BoundingBox3d box, int vertexCount, int indexCount, bool isClosed, long shapeOffset)
            {
                WriteVector(writer, template is null ? box.Min : RoundBounds(box.Min + shift, false));
                WriteVector(writer, template is null ? box.Max : RoundBounds(box.Max + shift, true));
                writer.Write(vertexCount);
                writer.Write(indexCount);
                writer.Write(color.R);
                writer.Write(color.G);
                writer.Write(color.B);
                writer.Write(color.A);
                writer.Write(hasNormals ? 1 : 0);
                writer.Write(instance.ElementId);
                writer.Write(texture);
                writer.Write((isClosed ? 1 : 0) | (sharedFormat && (texture >= 0 || (template is not null && hasUvs)) ? 2 : 0));
                if (sharedFormat)
                {
                    writer.Write(shapeOffset);
                    WriteVector(writer, shift);
                }
            }
        }
        if (triangles == 0) throw new InvalidDataException("The source contains no triangle geometry.");
        long geometryEnd = writer.BaseStream.Position;
        writer.BaseStream.Position = directoryOffset;
        writer.Write(geometryEnd);
        writer.BaseStream.Position = geometryEnd;
        writer.Write(0);
        ViewerPayloadWriter.WriteClusterReview(doc, options, origin, writer.BaseStream);
        long reviewEnd = writer.BaseStream.Position;
        writer.BaseStream.Position = geometryEnd;
        writer.Write(checked((int)(reviewEnd - geometryEnd - sizeof(int))));
        writer.BaseStream.Position = reviewEnd;
        if (options.IncludeProperties) WriteElements(scene, writer);
        return triangles;
    }

    private static Vector3d RoundPoint(Vector3d p)
    {
        var point = new Vector3d((float)p.X, (float)p.Y, (float)p.Z);
        if (!double.IsFinite(point.X) || !double.IsFinite(point.Y) || !double.IsFinite(point.Z))
            throw new InvalidDataException("Non-finite vertex or placement in clustered geometry.");
        return point;
    }

    private static Vector3d RoundBounds(Vector3d p, bool upper)
    {
        static float Outward(double value, bool upper)
        {
            var rounded = (float)value;
            return upper && rounded < value ? MathF.BitIncrement(rounded)
                : !upper && rounded > value ? MathF.BitDecrement(rounded) : rounded;
        }
        RoundPoint(p);
        return new(Outward(p.X, upper), Outward(p.Y, upper), Outward(p.Z, upper));
    }

    private static Dictionary<int, int> FindEqualMeshes(Dictionary<int, SceneGeometry> geometries, IEnumerable<SceneInstance> instances)
    {
        var used = instances.Select(instance => instance.GeometryId).Distinct().Select(id => geometries.GetValueOrDefault(id))
            .Where(mesh => mesh is { Topology: SceneTopology.Triangles } && mesh.Vertices.Count >= 3).Select(mesh => mesh!);
        var canonical = new Dictionary<int, int>();
        foreach (var group in used.GroupBy(mesh => (mesh.Vertices.Count, mesh.Indices.Count, mesh.Normals?.Count, mesh.UVs?.Count)))
        {
            if (!group.Skip(1).Any())
            {
                var mesh = group.First();
                canonical.Add(mesh.Id, mesh.Id);
                continue;
            }
            var candidates = new Dictionary<int, List<SceneGeometry>>();
            foreach (var mesh in group)
            {
                var hash = new HashCode();
                foreach (var vertex in mesh.Vertices) hash.Add(vertex);
                foreach (var index in mesh.Indices) hash.Add(index);
                if (mesh.Normals is { } normals) foreach (var normal in normals) hash.Add(normal);
                if (mesh.UVs is { } uvs) foreach (var uv in uvs) hash.Add(uv);
                var key = hash.ToHashCode();
                if (!candidates.TryGetValue(key, out var matches)) candidates.Add(key, matches = []);
                var equal = matches.Find(candidate => candidate.Vertices.SequenceEqual(mesh.Vertices)
                    && candidate.Indices.SequenceEqual(mesh.Indices) && Same(candidate.Normals, mesh.Normals) && Same(candidate.UVs, mesh.UVs));
                if (equal is null) matches.Add(mesh);
                canonical.Add(mesh.Id, equal?.Id ?? mesh.Id);
            }
        }
        return canonical;

        static bool Same<T>(IReadOnlyList<T>? a, IReadOnlyList<T>? b) => a is null ? b is null : b is not null && a.SequenceEqual(b);
    }

    // Tessellation can duplicate vertices at normal and UV seams.
    private static bool IsClosed(SceneGeometry geometry, int count)
    {
        if (count < 12) return false;
        var welded = new Dictionary<Vector3d, int>();
        var vertices = new int[geometry.Vertices.Count];
        for (int i = 0; i < vertices.Length; i++)
        {
            var p = geometry.Vertices[i];
            if (!welded.TryGetValue(p, out int id)) welded.Add(p, id = welded.Count);
            vertices[i] = id;
        }
        if (welded.Count < 4) return false;
        var edges = new Dictionary<(int, int), int>();
        int open = 0;
        int Corner(int i) => geometry.Indices.Count == 0 ? i : geometry.Indices[i];
        bool AddEdge(int a, int b)
        {
            var key = a < b ? (a, b) : (b, a);
            int direction = a < b ? 1 : -1;
            if (edges.TryAdd(key, direction)) { open++; return true; }
            if (edges[key] != -direction) return false;
            edges[key] = 0;
            open--;
            return true;
        }
        for (int i = 0; i < count; i += 3)
        {
            int a = Corner(i), b = Corner(i + 1), c = Corner(i + 2);
            if ((uint)a >= vertices.Length || (uint)b >= vertices.Length || (uint)c >= vertices.Length) return false;
            (a, b, c) = (vertices[a], vertices[b], vertices[c]);
            if (a != b && b != c && c != a && (!AddEdge(a, b) || !AddEdge(b, c) || !AddEdge(c, a))) return false;
        }
        return edges.Count != 0 && open == 0;
    }

    private static void WriteElements(SceneDocument scene, BinaryWriter writer)
    {
        var levels = scene.Levels.ToDictionary(level => level.Id);
        var properties = new ViewerProperties(scene);
        var buffer = new ArrayBufferWriter<byte>();
        using var json = new Utf8JsonWriter(buffer);
        foreach (var element in scene.Elements)
        {
            buffer.ResetWrittenCount();
            json.Reset(buffer);
            json.WriteStartObject();
            json.WriteString("id", element.Id.ToString(CultureInfo.InvariantCulture));
            json.WriteString("name", element.Name);
            json.WriteString("category", element.Category);
            json.WriteString("type", element.TypeName);
            json.WriteString("sourceId", element.SourceId);
            if (element.LevelId is int level && levels.TryGetValue(level, out var levelData)) json.WriteString("level", levelData.Name);
            json.WritePropertyName("properties");
            properties.Write(json, element);
            json.WriteEndObject();
            json.Flush();
            writer.Write(element.Id);
            writer.Write(buffer.WrittenCount);
            writer.Write(buffer.WrittenSpan);
        }
    }

    private static void WriteVector(BinaryWriter writer, Vector3d value)
    {
        writer.Write((float)value.X);
        writer.Write((float)value.Y);
        writer.Write((float)value.Z);
    }
}
