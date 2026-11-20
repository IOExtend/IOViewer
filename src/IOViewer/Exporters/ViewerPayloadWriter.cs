using System.Globalization;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;
using IOScene;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Builds the META, BIN and PROPS blocks of the HTML viewer (format 3) from the scene of a <see cref="ViewerDocument"/>.
/// Geometry positions are written as u16 steps on the <see cref="GeometryQuantizer"/> grid (with META <c>q</c>) when
/// they span at most 65535 steps, else as f32; normals as octahedral i16 pairs.
/// All input is validated and the binary blob is assembled by <see cref="Create"/>, before anything is written.
/// </summary>
/// <remarks>
/// A geometry that one instance places is baked into scene coordinates on the global grid, and translated twins of
/// such geometries share one written geometry; a geometry that several instances place is written once in local
/// coordinates and placed by each instance's matrix. Only triangle geometries are drawn: instances of lines, points
/// or a topology this version does not know are skipped and counted in META <c>skipped</c>. The first model of the
/// scene is the host; listed models carry a link on their elements and can be hidden independently.
/// </remarks>
internal sealed class ViewerPayloadWriter
{
    private const int FlushThreshold = 1 << 16;
    private const int MaxSectionPlanes = 6; // Matches the viewer's MAX_PLANES.
    private const long MaxSafeElementId = (1L << 53) - 1;
    private static readonly RgbaColor DefaultColor = new(200, 200, 200);

    private readonly SceneDocument _scene;
    private readonly HashSet<string> _hiddenModels;
    private readonly int _firstListedModel;
    private readonly HtmlViewerOptions _options;
    private readonly BinaryBlobBuilder _blob = new();
    private readonly List<GeometryEntry> _geometries = [];
    private readonly Dictionary<int, List<int>> _geometriesByHash = [];
    private readonly Dictionary<int, List<OwnTwin>> _ownTwinsByHash = [];
    private readonly List<MaterialKey> _materials = [];
    private readonly Dictionary<MaterialKey, int> _materialIndex = [];
    private readonly Dictionary<int, SceneMaterial> _materialsById = [];
    private readonly Dictionary<int, int> _textureIndex = [];
    private readonly List<uint> _instanceGeometry = [];
    private readonly List<uint> _instanceMaterial = [];
    private readonly List<int> _instanceElement = [];
    private readonly List<float> _instanceMatrix = [];
    private readonly Dictionary<string, PreparedViewpoint> _viewpointStates = new(StringComparer.Ordinal);
    private readonly List<ViewerBcfTopic> _bcfTopics;
    private readonly Dictionary<ViewerBcfViewpoint, PreparedViewpoint> _bcfStates = [];
    private SectionState _sections;
    private BoundingBox3d _bounds;
    private Vector3d _rtcOffset;
    private int _drawable;
    private int _skipped;
    private int _writtenMeshes;
    private InstanceViews _instances;

    private ViewerPayloadWriter(ViewerDocument doc, HtmlViewerOptions options)
    {
        _scene = doc.Scene;
        _hiddenModels = [.. doc.HiddenModelKeys];
        _firstListedModel = doc.ShowHostInModelList ? 0 : 1;
        _bcfTopics = doc.BcfTopics;
        _options = options;
    }

    /// <summary>Validates the scene of <paramref name="doc"/> and lays out all geometry and instance arrays.</summary>
    /// <exception cref="InvalidDataException">The scene references missing geometry or has invalid indices.</exception>
    public static ViewerPayloadWriter Create(ViewerDocument doc, HtmlViewerOptions options)
    {
        var writer = new ViewerPayloadWriter(doc, options);
        var elementIndex = writer.Build();
        writer._sections = writer.BuildSections(doc.SectionPlanes, doc.SectionBox);
        writer.BuildViewpointStates(doc.ViewpointStates, elementIndex);
        writer.ValidateMetadata();
        return writer;
    }

    internal static void WriteClusterReview(ViewerDocument doc, HtmlViewerOptions options, Vector3d origin, Stream output)
    {
        var writer = new ViewerPayloadWriter(doc, options) { _rtcOffset = origin };
        var elementIndex = doc.Scene.Elements.Select((element, index) => (element.Id, index))
            .ToDictionary(element => element.Id, element => element.index);
        writer._sections = writer.BuildSections(doc.SectionPlanes, doc.SectionBox);
        writer.BuildViewpointStates(doc.ViewpointStates, elementIndex);
        writer.ValidateMetadata();
        using var w = new Utf8JsonWriter(output);
        w.WriteStartObject();
        w.WriteString("title", options.Title);
        writer.WriteOptions(w);
        writer.WriteTextures(w);
        writer.WriteReview(w);
        w.WriteEndObject();
    }

    private SectionState BuildSections(List<ViewerSectionPlane>? planes, ViewerSectionBox? sectionBox)
    {
        var output = new List<(string Axis, Vector3d Normal, double Offset, bool Flipped)>();
        foreach (var plane in planes ?? [])
        {
            if (plane is not { Enabled: true }) continue;
            var (axis, normal) = plane.Axis switch
            {
                ViewerSectionAxis.X => ("x", Vector3d.UnitX),
                ViewerSectionAxis.Y => ("y", Vector3d.UnitY),
                ViewerSectionAxis.Z => ("z", Vector3d.UnitZ),
                ViewerSectionAxis.Custom => ("custom", plane.Normal),
                _ => throw new InvalidDataException($"Unknown section plane axis: {plane.Axis}."),
            };
            double scale = Math.Max(Math.Abs(normal.X), Math.Max(Math.Abs(normal.Y), Math.Abs(normal.Z)));
            if (!double.IsFinite(scale) || scale == 0)
                throw new InvalidDataException("The section plane normal must be finite and nonzero.");
            normal = new Vector3d(normal.X / scale, normal.Y / scale, normal.Z / scale).Normalized();

            // n·p = offset in scene coordinates, and p = rtcPoint + rtcOffset.
            double offset = plane.Offset - Vector3d.Dot(normal, _rtcOffset);
            if (!double.IsFinite(offset)) throw new InvalidDataException("The section plane offset must be finite in viewer coordinates.");
            output.Add((axis, normal, offset, plane.Inverted));
            if (output.Count == MaxSectionPlanes) break;
        }

        if (sectionBox is not { Enabled: true } box) return new(output, null);
        var bounds = new BoundingBox3d(box.Min - _rtcOffset, box.Max - _rtcOffset);
        if (bounds.IsEmpty || !IsFinite(bounds.Min) || !IsFinite(bounds.Max))
            throw new InvalidDataException("The section box must have finite bounds with Min at or below Max on each axis.");
        return new(output, (bounds, box.Inverted));
    }

    private void BuildViewpointStates(Dictionary<string, ViewerViewpointState>? states, Dictionary<long, int> elementIndex)
    {
        if (!_options.IncludeViewpoints || (states is not { Count: > 0 } && _bcfTopics.Count == 0)) return;

        var linkedKeys = _scene.Models.Skip(_firstListedModel).Select(model => model.Key).ToHashSet(StringComparer.Ordinal);
        foreach (var view in _scene.Viewpoints)
        {
            if (view.Id is not { } id || states is null || !states.TryGetValue(id, out var state)) continue;
            if (_viewpointStates.ContainsKey(id))
                throw new InvalidDataException($"Viewpoint state '{id}' matches more than one saved camera.");

            _viewpointStates.Add(id, PrepareViewpoint(state, id, elementIndex, linkedKeys));
        }

        foreach (string id in states?.Keys ?? Enumerable.Empty<string>())
        {
            if (!_viewpointStates.ContainsKey(id))
                throw new InvalidDataException($"Viewpoint state '{id}' has no saved camera.");
        }
        foreach (var topic in _bcfTopics)
        {
            foreach (var view in topic.Viewpoints)
            {
                var camera = view.Camera;
                if (!IsFinite(camera.Position - _rtcOffset) || !IsFinite(camera.Target - _rtcOffset)
                    || camera.Position == camera.Target || !IsFinite(camera.Up) || camera.Up == Vector3d.Zero
                    || !double.IsFinite(camera.FieldOfView) || camera.FieldOfView <= 0 || camera.FieldOfView >= Math.PI
                    || (camera.Projection == SceneProjection.Orthographic
                        && (view.OrthographicHeight is not double height || !double.IsFinite(height) || height <= 0
                            || !double.IsFinite((camera.Target - camera.Position).Length / height)))
                    || view.MissingComponents < 0 || view.AmbiguousComponents < 0)
                    throw new InvalidDataException($"BCF topic '{topic.Title}' has an invalid viewpoint.");
                _bcfStates.Add(view, PrepareViewpoint(view.State, topic.Title, elementIndex, linkedKeys));
            }
        }
    }

    private PreparedViewpoint PrepareViewpoint(ViewerViewpointState? state, string id,
        Dictionary<long, int> elementIndex, HashSet<string> linkedKeys)
    {
        if (state is null) throw new InvalidDataException($"Viewpoint '{id}' has a null state.");
        if (state.HiddenElementIds is not null && state.VisibleElementIds is not null)
            throw new InvalidDataException($"Viewpoint '{id}' specifies both hidden and visible elements.");
        SectionState? sections = state.SectionPlanes is not null || state.SectionBox is not null
            ? BuildSections(state.SectionPlanes, state.SectionBox) : null;
        int[]? Indices(List<long>? ids) => ids?.Select(elementId =>
            elementIndex.TryGetValue(elementId, out int index) ? index
                : throw new InvalidDataException($"Viewpoint '{id}' references unknown element {elementId}.")).ToArray();
        string[]? models = state.HiddenModelKeys?.ToArray();
        if (models?.Any(key => !linkedKeys.Contains(key)) == true)
            throw new InvalidDataException($"Viewpoint '{id}' references an unknown linked model or the host.");
        return new(sections, Indices(state.HiddenElementIds), Indices(state.VisibleElementIds),
            Indices(state.SelectedElementIds), models);
    }

    private static bool IsFinite(Vector3d v) => double.IsFinite(v.X) && double.IsFinite(v.Y) && double.IsFinite(v.Z);

    private void ValidateMetadata()
    {
        if (_options.IncludeViewpoints)
        {
            foreach (var view in _scene.Viewpoints)
            {
                if (!IsFinite(view.Camera.Position - _rtcOffset) || !IsFinite(view.Camera.Target - _rtcOffset))
                    throw new InvalidDataException($"Viewpoint '{view.Name}' has a non-finite camera position or target.");
            }
        }
        if (_options.IncludeGrids)
        {
            foreach (var line in _scene.Grids.SelectMany(g => g.Lines))
            {
                if (!IsFinite(line.Start - _rtcOffset) || !IsFinite(line.End - _rtcOffset))
                    throw new InvalidDataException($"Grid line '{line.Name}' has a non-finite endpoint.");
            }
            foreach (var path in _scene.Grids.SelectMany(g => g.Paths ?? []))
            {
                if (path.Points.Count < 2 || path.Points.Any(point => !IsFinite(point - _rtcOffset)))
                    throw new InvalidDataException($"Grid path '{path.Name}' needs at least two finite points.");
            }
        }
        if (_options.IncludeClashes)
        {
            foreach (var clash in _scene.ClashTests.SelectMany(test => test.Clashes))
            {
                if (!IsFinite(clash.Point - _rtcOffset) || clash.Distance is double distance && !double.IsFinite(distance))
                    throw new InvalidDataException($"Clash '{clash.Id}' has a non-finite point or distance.");
            }
        }
        if (_options.IncludeTimeLiner)
        {
            foreach (var schedule in _scene.Schedules)
            {
                var pending = new Stack<SceneTask>(schedule.Tasks);
                var visited = new HashSet<SceneTask>(ReferenceEqualityComparer.Instance);
                while (pending.TryPop(out var task))
                {
                    if (!visited.Add(task)) throw new InvalidDataException($"Task '{task.Id}' occurs more than once in schedule '{schedule.Name}'.");
                    if (!double.IsFinite(task.Progress)) throw new InvalidDataException($"Task '{task.Id}' has non-finite progress.");
                    foreach (var child in task.Children) pending.Push(child);
                }
            }
        }
    }

    /// <summary>Counts the instances the viewer does not draw because their geometry is not made of triangles.</summary>
    public static int UndrawnInstances(SceneDocument scene)
    {
        var topology = new Dictionary<int, SceneTopology>();
        foreach (var geometry in scene.Geometries) topology.TryAdd(geometry.Id, geometry.Topology);
        return scene.Instances.Count(i => topology.TryGetValue(i.GeometryId, out var t) && t != SceneTopology.Triangles);
    }

    private Dictionary<long, int> Build()
    {
        var geometries = new Dictionary<int, SceneGeometry>();
        foreach (var geometry in _scene.Geometries)
        {
            if (!geometries.TryAdd(geometry.Id, geometry))
            {
                throw new InvalidDataException($"Geometry id {geometry.Id} is used by more than one geometry.");
            }
            if (geometry.Topology == SceneTopology.Triangles) CheckIndices(geometry.Indices, geometry.Vertices.Count, $"Geometry {geometry.Id}");
            if (!geometry.Vertices.All(IsFinite) || geometry.Normals?.All(IsFinite) == false
                || geometry.UVs?.All(uv => double.IsFinite(uv.X) && double.IsFinite(uv.Y)) == false)
                throw new InvalidDataException($"Geometry {geometry.Id} has a non-finite vertex, normal or UV coordinate.");
        }

        // Instances per geometry, and the largest axis length of any of them: grid steps in local units grow by it.
        var uses = new Dictionary<int, int>();
        var maxScale = new Dictionary<int, double>();
        foreach (var instance in _scene.Instances)
        {
            if (!geometries.ContainsKey(instance.GeometryId))
            {
                throw new InvalidDataException(
                    $"An instance of element {instance.ElementId} references geometry {instance.GeometryId}, which is not in the document.");
            }
            uses[instance.GeometryId] = uses.GetValueOrDefault(instance.GeometryId) + 1;
            if (instance.Transform is not { } t) continue;
            if (!IsFinite(t.XAxis) || !IsFinite(t.YAxis) || !IsFinite(t.ZAxis) || !IsFinite(t.Translation))
                throw new InvalidDataException($"Instance of element {instance.ElementId} has a non-finite transform.");
            double scale = Math.Max(t.XAxis.Length, Math.Max(t.YAxis.Length, t.ZAxis.Length));
            maxScale[instance.GeometryId] = Math.Max(maxScale.GetValueOrDefault(instance.GeometryId), scale);
        }

        for (int i = 0; i < _scene.Textures.Count; i++)
        {
            var texture = _scene.Textures[i];
            if (!double.IsFinite(texture.ScaleX) || !double.IsFinite(texture.ScaleY))
                throw new InvalidDataException($"Texture {texture.Id} has a non-finite scale.");
            _textureIndex.TryAdd(texture.Id, i);
        }
        foreach (var material in _scene.Materials)
        {
            if (material.TextureId is int textureId && !_textureIndex.ContainsKey(textureId))
                throw new InvalidDataException($"Material {material.Id} references missing texture {textureId}.");
            _materialsById.TryAdd(material.Id, material);
        }
        var elementIndex = new Dictionary<long, int>();
        for (int i = 0; i < _scene.Elements.Count; i++)
        {
            long id = _scene.Elements[i].Id;
            if (!elementIndex.TryAdd(id, i)) throw new InvalidDataException($"Element id {id} is used by more than one element.");
        }

        _bounds = _scene.ComputeBounds();
        _rtcOffset = _bounds.IsEmpty ? Vector3d.Zero : _bounds.Center;
        if (!IsFinite(_rtcOffset) || !_bounds.IsEmpty && (!IsFinite(_bounds.Min - _rtcOffset) || !IsFinite(_bounds.Max - _rtcOffset)))
            throw new InvalidDataException("The scene bounds are not finite in viewer coordinates.");

        var sharedOutput = new Dictionary<int, (int Index, Vector3d Origin)>();
        long totalVertices = 0;
        bool full = false;
        foreach (var instance in _scene.Instances)
        {
            var geometry = geometries[instance.GeometryId];
            if (geometry.Topology != SceneTopology.Triangles)
            {
                _skipped++;
                continue;
            }
            _drawable++;
            // Instances are written in order while they fit; the rest are left out.
            if (full || totalVertices + geometry.Vertices.Count > _options.MaxMeshVertices)
            {
                full = true;
                continue;
            }
            totalVertices += geometry.Vertices.Count;

            var transform = instance.Transform ?? Transform3d.Identity;
            int geometryIndex;
            Vector3d translation; // in RTC
            if (uses[geometry.Id] > 1)
            {
                if (!sharedOutput.TryGetValue(geometry.Id, out var written))
                {
                    written = AddSharedGeometry(geometry, maxScale.GetValueOrDefault(geometry.Id) <= 1 + 1e-6);
                    sharedOutput.Add(geometry.Id, written);
                }
                geometryIndex = written.Index;
                translation = transform.Apply(written.Origin) - _rtcOffset; // the written geometry starts at Origin
            }
            else
            {
                (geometryIndex, translation) = AddOwnGeometry(geometry, instance.Transform);
                transform = Transform3d.Identity;
            }

            _instanceGeometry.Add((uint)geometryIndex);
            _instanceMaterial.Add((uint)MaterialIndex(instance));
            _instanceElement.Add(elementIndex.TryGetValue(instance.ElementId, out int index) ? index : -1);
            AddMatrix(transform, translation);
            _writtenMeshes++;
        }

        _instances = new InstanceViews(
            _blob.Add(CollectionsMarshal.AsSpan(_instanceGeometry)),
            _blob.Add(CollectionsMarshal.AsSpan(_instanceMaterial)),
            _blob.Add(CollectionsMarshal.AsSpan(_instanceElement)),
            _blob.Add(CollectionsMarshal.AsSpan(_instanceMatrix)));
        return elementIndex;
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

    // Written relative to Origin = Snap(local minimum), which each instance's double translation absorbs: quantized
    // (with q.o = 0) when it fits and no instance scales it up (which would scale the Step/2 error with it), else f32.
    // Geometry in world coordinates thus never reaches f32 or the viewer's GPU decode as large numbers.
    private (int Index, Vector3d Origin) AddSharedGeometry(SceneGeometry geometry, bool quantize)
    {
        var vertices = geometry.Vertices.ToArray();
        var indices = TriangleIndices(geometry);
        var normals = geometry.Normals is { } n && n.Count == vertices.Length ? GeometryQuantizer.OctEncode(n) : null;
        var uvs = Uvs(geometry.UVs, vertices.Length);
        var bounds = BoundingBox3d.Empty;
        foreach (var v in vertices) bounds = bounds.Encapsulate(v);
        BoundingBox3d Local(Vector3d origin) => bounds.IsEmpty ? bounds : new BoundingBox3d(bounds.Min - origin, bounds.Max - origin);
        if (quantize && GeometryQuantizer.TryQuantize(vertices, out var origin, out var q))
        {
            return (AddGeometry(q, null, Vector3d.Zero, indices, normals, uvs, Local(origin)), origin);
        }
        var min = bounds.IsEmpty ? Vector3d.Zero : bounds.Min;
        origin = new Vector3d(GeometryQuantizer.Snap(min.X), GeometryQuantizer.Snap(min.Y), GeometryQuantizer.Snap(min.Z));
        return (AddGeometry(null, Floats(vertices, origin), null, indices, normals, uvs, Local(origin)), origin);
    }

    // Empty indices mean non-indexed: every three vertices are a triangle.
    private static IReadOnlyList<int> TriangleIndices(SceneGeometry geometry) =>
        geometry.Indices.Count > 0 ? geometry.Indices : [.. Enumerable.Range(0, geometry.Vertices.Count - geometry.Vertices.Count % 3)];

    // Returns the geometry of a geometry placed by one instance (an "own mesh") and the instance translation (RTC).
    // A translated twin of an earlier own mesh (format 2's dedupe: equal float32 positions relative to the exact minimum
    // corner, equal indices, normals and UVs) reuses that geometry with an exact, unsnapped translation; its vertices
    // are then within Step/2 plus float32 rounding of the truth, but no longer bit-identical to coinciding vertices of
    // other meshes. Otherwise the mesh gets its own geometry: quantized, the translation is the snapped minimum corner,
    // a point of the global RTC grid, and q has origin 0, so vertices that coincide in the world decode to the same
    // grid point in every mesh; over 64 m, the vertices are f32 relative to the exact minimum corner, as in format 2.
    private (int Index, Vector3d Translation) AddOwnGeometry(SceneGeometry mesh, Transform3d? transform)
    {
        var shape = Bake(mesh, transform);
        var hasher = new HashCode();
        hasher.AddBytes(Bytes(shape.Relative));
        foreach (int index in shape.Indices) hasher.Add(index);
        hasher.AddBytes(Bytes(shape.Normals));
        hasher.AddBytes(Bytes(shape.Uvs));
        int hash = hasher.ToHashCode();
        if (!_ownTwinsByHash.TryGetValue(hash, out var twins))
        {
            twins = [];
            _ownTwinsByHash.Add(hash, twins);
        }
        foreach (var twin in twins)
        {
            var other = Bake(twin.Mesh, twin.Transform); // rebaked on a hash match instead of keeping every mesh's floats in memory
            if (SameBytes(shape.Relative, other.Relative) && shape.Indices.SequenceEqual(other.Indices)
                && SameBytes(shape.Normals, other.Normals) && SameBytes(shape.Uvs, other.Uvs))
            {
                return (twin.Geometry, twin.Translation + (shape.Min - other.Min));
            }
        }

        int geometry;
        Vector3d translation;
        var box = shape.Box;
        if (GeometryQuantizer.TryQuantize(shape.Rtc, out var origin, out var q))
        {
            var local = box.IsEmpty ? box : new BoundingBox3d(box.Min - origin, box.Max - origin);
            (geometry, translation) = (AddGeometry(q, null, Vector3d.Zero, shape.Indices, shape.Normals, shape.Uvs, local), origin);
        }
        else
        {
            var bounds = new BoundingBox3d(Vector3d.Zero, box.Max - shape.Min); // not empty: no vertices always quantize
            (geometry, translation) = (AddGeometry(null, shape.Relative, null, shape.Indices, shape.Normals, shape.Uvs, bounds), shape.Min);
        }
        twins.Add(new OwnTwin(mesh, transform, geometry, translation));
        return (geometry, translation);
    }

    // Bakes the instance transform into the vertices (in RTC), normals and, for a mirroring transform, the winding.
    private OwnShape Bake(SceneGeometry mesh, Transform3d? placement)
    {
        var transform = placement ?? Transform3d.Identity;
        var vertices = mesh.Vertices;
        var rtc = new Vector3d[vertices.Count];
        var box = BoundingBox3d.Empty;
        for (int i = 0; i < rtc.Length; i++)
        {
            rtc[i] = transform.Apply(vertices[i]) - _rtcOffset;
            box = box.Encapsulate(rtc[i]);
        }
        var min = box.IsEmpty ? Vector3d.Zero : box.Min;

        short[]? normals = null;
        if (mesh.Normals is { } n && n.Count == vertices.Count)
        {
            normals = GeometryQuantizer.OctEncode(placement is null ? n : [.. n.Select(v => TransformNormal(transform, v))]);
        }

        // A mirroring transform (det < 0, as in TransformNormal) turns the triangles inside out unless their winding is
        // reversed too; the viewer only does that for shared geometry, from the instance matrix.
        var indices = TriangleIndices(mesh);
        if (Vector3d.Dot(transform.XAxis, Vector3d.Cross(transform.YAxis, transform.ZAxis)) < 0)
        {
            int[] flipped = [.. indices];
            for (int i = 0; i + 2 < flipped.Length; i += 3) (flipped[i + 1], flipped[i + 2]) = (flipped[i + 2], flipped[i + 1]);
            indices = flipped;
        }
        return new OwnShape(rtc, box, min, Floats(rtc, min), indices, normals, Uvs(mesh.UVs, vertices.Count));
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

    private static float[] Floats(Vector3d[] vertices, Vector3d offset)
    {
        var result = new float[vertices.Length * 3];
        for (int i = 0; i < vertices.Length; i++)
        {
            result[i * 3] = (float)(vertices[i].X - offset.X);
            result[i * 3 + 1] = (float)(vertices[i].Y - offset.Y);
            result[i * 3 + 2] = (float)(vertices[i].Z - offset.Z);
        }
        return result;
    }

    // Returns the index of an identical geometry written before (same bytes and origin), or writes this one. Positions
    // are either grid steps q from origin, or f32 positions (origin null).
    private int AddGeometry(ushort[]? q, float[]? positions, Vector3d? origin, IReadOnlyList<int> indices, short[]? normals, float[]? uvs, BoundingBox3d bounds)
    {
        int vertexCount = (q?.Length ?? positions!.Length) / 3;
        ushort[]? indices16 = null;
        uint[]? indices32 = null;
        if (vertexCount <= ushort.MaxValue)
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
        hasher.Add(origin);
        hasher.AddBytes(Bytes(q));
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
            if (entry.Origin == origin
                && (q is not null ? Same(q, entry.Positions) : Same(positions, entry.Positions))
                && (indices16 is not null ? Same(indices16, entry.Indices) : Same(indices32, entry.Indices))
                && Same(normals, entry.Normals)
                && Same(uvs, entry.Uvs))
            {
                return candidate;
            }
        }

        var written = new GeometryEntry(
            q is not null ? _blob.Add(q) : _blob.Add(positions),
            origin,
            indices16 is not null ? _blob.Add(indices16) : _blob.Add(indices32),
            normals is null ? null : _blob.Add(normals),
            uvs is null ? null : _blob.Add(uvs),
            bounds);
        _geometries.Add(written);
        candidates.Add(_geometries.Count - 1);
        return _geometries.Count - 1;
    }

    private static bool SameBytes<T>(T[]? a, T[]? b) where T : struct =>
        a is null ? b is null : b is not null && Bytes(a).SequenceEqual(Bytes(b));

    private bool Same<T>(T[]? values, BlobView? view) where T : struct =>
        values is null ? view is null : view is { } v && Bytes(values).SequenceEqual(_blob.Bytes(v));

    private static ReadOnlySpan<byte> Bytes<T>(T[]? values) where T : struct
    {
        if (values is null) return default;

        // Hashing needs a byte span before the geometry can be deduplicated and appended.
        BinaryBlobBuilder.CheckByteCount((long)values.Length * Unsafe.SizeOf<T>(), int.MaxValue);
        return MemoryMarshal.AsBytes(values.AsSpan());
    }

    // The instance colour overrides the material colour; the alpha of the colour drawn is the only opacity, and the
    // texture is the material's.
    private int MaterialIndex(SceneInstance instance)
    {
        var material = instance.MaterialId is int id ? _materialsById.GetValueOrDefault(id) : null;
        var c = instance.Color ?? material?.Color ?? DefaultColor;
        int? texture = material?.TextureId is int t && _textureIndex.TryGetValue(t, out int i) ? i : null;
        var key = new MaterialKey(c.R, c.G, c.B, c.Af, texture);

        if (!_materialIndex.TryGetValue(key, out int index))
        {
            index = _materials.Count;
            _materials.Add(key);
            _materialIndex.Add(key, index);
        }
        return index;
    }

    // Matrix4.elements[0,1,2,4,5,6,8,9,10,12,13,14]: the three axes of t, then the translation, already in RTC.
    private void AddMatrix(Transform3d t, Vector3d translation)
    {
        foreach (var axis in (ReadOnlySpan<Vector3d>)[t.XAxis, t.YAxis, t.ZAxis, translation])
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
            var properties = new ViewerProperties(_scene);
            foreach (var el in _scene.Elements)
            {
                if (el.PropertySetIds.Count == 0) continue;
                w.WritePropertyName(el.Id.ToString(CultureInfo.InvariantCulture));
                properties.Write(w, el);
                FlushIfLarge(w);
            }
        }
        w.WriteEndObject();
    }

    public void WriteMeta(Stream output)
    {
        using var w = new Utf8JsonWriter(output);
        w.WriteStartObject();
        w.WriteNumber("format", 3);
        w.WriteString("title", _options.Title);
        var host = _scene.Models.Count > 0 ? _scene.Models[0] : null;
        w.WriteString("author", host?.Author ?? "IOViewer");
        w.WriteString("createdAt", host?.CreatedAt ?? DateTimeOffset.UtcNow.ToString("O", CultureInfo.InvariantCulture));
        WriteVector(w, "rtcOffset", _rtcOffset);
        WriteBox(w, "bbox", _bounds, _rtcOffset);

        WriteOptions(w);

        if (_writtenMeshes < _drawable)
        {
            w.WriteStartObject("truncated");
            w.WriteNumber("meshes", _writtenMeshes);
            w.WriteNumber("totalMeshes", _drawable);
            w.WriteEndObject();
        }
        else
        {
            w.WriteNull("truncated");
        }

        if (_skipped > 0)
        {
            w.WriteStartObject("skipped");
            w.WriteNumber("instances", _skipped);
            w.WriteEndObject();
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

        WriteTextures(w);

        w.WriteStartArray("geometries");
        foreach (var g in _geometries)
        {
            w.WriteStartObject();
            w.WritePropertyName("positions");
            g.Positions.WriteTo(w);
            if (g.Origin is { } origin)
            {
                w.WriteStartObject("q");
                WriteVector(w, "o", origin);
                w.WriteNumber("s", GeometryQuantizer.Step);
                w.WriteEndObject();
            }
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

        WriteReview(w);
        w.WriteEndObject();
    }

    private void WriteOptions(Utf8JsonWriter w)
    {
        w.WriteStartObject("options");
        w.WriteBoolean("initialWireframe", _options.InitialWireframe);
        w.WriteBoolean("initialWhiteMode", _options.InitialWhiteMode);
        w.WriteEndObject();
    }

    private void WriteTextures(Utf8JsonWriter w)
    {
        w.WriteStartArray("textures");
        foreach (var tex in _scene.Textures)
        {
            w.WriteStartObject();
            w.WriteString("mime", tex.MimeType);
            w.WriteString("data", Convert.ToBase64String(tex.Data));
            w.WriteNumber("sx", tex.ScaleX);
            w.WriteNumber("sy", tex.ScaleY);
            w.WriteEndObject();
            FlushIfLarge(w);
        }
        w.WriteEndArray();
    }

    private void WriteReview(Utf8JsonWriter w)
    {
        var host = _scene.Models.Count > 0 ? _scene.Models[0] : null;
        // An element of a linked model carries the model's path, else its name, as the linked file list shows it.
        var links = new Dictionary<int, string?>();
        for (int i = _firstListedModel; i < _scene.Models.Count; i++)
        {
            var model = _scene.Models[i];
            links.TryAdd(model.Id, string.IsNullOrEmpty(model.Path) ? model.Name : model.Path);
        }
        var levels = new Dictionary<int, string>();
        foreach (var level in _scene.Levels) levels.TryAdd(level.Id, level.Name);

        w.WriteStartArray("models");
        foreach (var model in _scene.Models)
        {
            w.WriteStartObject();
            w.WriteNumber("id", model.Id);
            w.WriteString("name", model.Name ?? string.Empty);
            w.WriteEndObject();
        }
        w.WriteEndArray();

        w.WriteStartArray("elements");
        foreach (var el in _scene.Elements)
        {
            w.WriteStartObject();
            w.WritePropertyName("id");
            WriteElementId(w, el.Id);
            w.WriteString("name", el.Name);
            w.WriteString("category", string.IsNullOrEmpty(el.Category) ? "General" : el.Category);
            w.WriteString("type", el.TypeName);
            w.WriteString("level", el.LevelId is int level ? levels.GetValueOrDefault(level, string.Empty) : string.Empty);
            if (el.LevelId is int levelId) w.WriteNumber("levelId", levelId);
            // The first model is the default so single-source files do not repeat its ID on every element.
            if (el.ModelId != host?.Id) w.WriteNumber("modelId", el.ModelId);
            if ((_firstListedModel != 0 && el.ModelId == host?.Id)
                || links.GetValueOrDefault(el.ModelId) is not { Length: > 0 } link) w.WriteNull("link");
            else w.WriteString("link", link);
            if (!string.IsNullOrEmpty(el.SourceId)) w.WriteString("sourceId", el.SourceId);
            w.WriteEndObject();
            FlushIfLarge(w);
        }
        w.WriteEndArray();

        if (_sections.Planes.Count > 0 || _sections.Box is not null) WriteSections(w, _sections);
        WriteViewpoints(w);
        WriteBcfTopics(w);
        WriteGrids(w);
        WriteTimeLiner(w);
        WriteLinkedFiles(w);
        WriteClashTests(w);
    }

    private static void WriteSections(Utf8JsonWriter w, SectionState sections)
    {
        w.WriteStartObject("sections");
        w.WriteStartArray("planes");
        foreach (var plane in sections.Planes)
        {
            w.WriteStartObject();
            w.WriteString("axis", plane.Axis);
            WriteVector(w, "normal", plane.Normal);
            w.WriteNumber("offset", plane.Offset);
            w.WriteBoolean("flipped", plane.Flipped);
            w.WriteEndObject();
        }
        w.WriteEndArray();
        if (sections.Box is { } box)
        {
            WriteBox(w, "box", box.Bounds, Vector3d.Zero);
            w.WriteBoolean("cutInside", box.Inverted);
        }
        w.WriteEndObject();
    }

    private void WriteViewpoints(Utf8JsonWriter w)
    {
        w.WriteStartArray("viewpoints");
        if (_options.IncludeViewpoints)
        {
            foreach (var vp in _scene.Viewpoints)
            {
                w.WriteStartObject();
                w.WriteString("name", vp.Name);
                WriteCamera(w, vp.Camera, authored: false);
                if (vp.Id is { } id && _viewpointStates.TryGetValue(id, out var state))
                    WriteViewpointState(w, state);
                w.WriteEndObject();
            }
        }
        w.WriteEndArray();
    }

    private void WriteBcfTopics(Utf8JsonWriter w)
    {
        if (!_options.IncludeViewpoints || _bcfTopics.Count == 0) return;
        w.WriteStartArray("bcfTopics");
        foreach (var topic in _bcfTopics)
        {
            w.WriteStartObject();
            w.WriteString("id", topic.Id);
            w.WriteString("title", topic.Title);
            w.WriteString("status", topic.Status);
            w.WriteString("description", topic.Description);
            w.WriteStartArray("viewpoints");
            foreach (var view in topic.Viewpoints)
            {
                w.WriteStartObject();
                WriteCamera(w, view.Camera, authored: true, view.OrthographicHeight);
                WriteViewpointState(w, _bcfStates[view]);
                w.WriteNumber("missingComponents", view.MissingComponents);
                w.WriteNumber("ambiguousComponents", view.AmbiguousComponents);
                w.WriteEndObject();
            }
            w.WriteEndArray();
            w.WriteEndObject();
            FlushIfLarge(w);
        }
        w.WriteEndArray();
    }

    private void WriteCamera(Utf8JsonWriter w, SceneCamera camera, bool authored, double? orthographicHeight = null)
    {
        w.WriteStartObject("camera");
        WriteVector(w, "position", camera.Position - _rtcOffset);
        WriteVector(w, "target", camera.Target - _rtcOffset);
        w.WriteString("projection", camera.Projection == SceneProjection.Orthographic ? "orthographic" : "perspective");
        if (authored)
        {
            WriteVector(w, "up", camera.Up);
            if (camera.Projection == SceneProjection.Orthographic && orthographicHeight is double height)
                w.WriteNumber("orthographicHeight", height);
            else w.WriteNumber("fov", camera.FieldOfView * 180 / Math.PI);
        }
        w.WriteEndObject();
    }

    private static void WriteViewpointState(Utf8JsonWriter w, PreparedViewpoint state)
    {
        if (state.Sections is { } sections) WriteSections(w, sections);
        if (state.HiddenElements is { } hidden) WriteIndices(w, "hiddenElements", hidden);
        if (state.VisibleElements is { } visible) WriteIndices(w, "visibleElements", visible);
        if (state.SelectedElements is { } selected) WriteIndices(w, "selectedElements", selected);
        if (state.HiddenModels is { } models)
        {
            w.WriteStartArray("hiddenModelKeys");
            foreach (string key in models) w.WriteStringValue(key);
            w.WriteEndArray();
        }
    }

    private void WriteGrids(Utf8JsonWriter w)
    {
        w.WriteStartArray("grids");
        if (_options.IncludeGrids)
        {
            foreach (var line in _scene.Grids.SelectMany(g => g.Lines))
            {
                w.WriteStartObject();
                w.WriteString("name", line.Name);
                WriteVector(w, "start", line.Start - _rtcOffset);
                WriteVector(w, "end", line.End - _rtcOffset);
                w.WriteEndObject();
            }
            foreach (var path in _scene.Grids.SelectMany(g => g.Paths ?? []))
            {
                w.WriteStartObject();
                w.WriteString("name", path.Name);
                w.WriteStartArray("points");
                foreach (var point in path.Points)
                    WriteVector(w, null, point - _rtcOffset);
                w.WriteEndArray();
                w.WriteEndObject();
            }
        }
        w.WriteEndArray();
    }

    private void WriteTimeLiner(Utf8JsonWriter w)
    {
        // The viewer shows one schedule: the tasks of every schedule, under the name of the first one with tasks.
        var schedules = _scene.Schedules.Where(s => s.Tasks.Count > 0).ToList();
        if (!_options.IncludeTimeLiner || schedules.Count == 0)
        {
            w.WriteNull("timeliner");
            return;
        }

        var start = DateTimeOffset.MaxValue;
        var end = DateTimeOffset.MinValue;
        void Span(IEnumerable<SceneTask> tasks)
        {
            foreach (var t in tasks)
            {
                if (t.PlannedStart < start) start = t.PlannedStart;
                if (t.PlannedEnd > end) end = t.PlannedEnd;
                Span(t.Children);
            }
        }
        foreach (var s in schedules) Span(s.Tasks);
        if (start == DateTimeOffset.MaxValue) start = DateTimeOffset.UtcNow;
        if (end == DateTimeOffset.MinValue) end = DateTimeOffset.UtcNow.AddDays(30);

        const string dateFormat = "yyyy-MM-ddTHH:mm:ssZ";
        w.WriteStartObject("timeliner");
        w.WriteString("name", schedules[0].Name);
        w.WriteString("start", start.ToString(dateFormat, CultureInfo.InvariantCulture));
        w.WriteString("end", end.ToString(dateFormat, CultureInfo.InvariantCulture));

        w.WriteStartArray("tasks");
        void WriteTask(SceneTask t)
        {
            w.WriteStartObject();
            w.WriteString("id", t.Id);
            w.WriteString("name", t.Name);
            // A task type this version does not know is a construct task (the enum is open).
            w.WriteString("type", (Enum.IsDefined(t.TaskType) ? t.TaskType : SceneTaskType.Construct).ToString().ToLowerInvariant());
            w.WriteString("start", t.PlannedStart.ToString(dateFormat, CultureInfo.InvariantCulture));
            w.WriteString("end", t.PlannedEnd.ToString(dateFormat, CultureInfo.InvariantCulture));
            if (t.PlannedCost.HasValue) w.WriteNumber("cost", t.PlannedCost.Value);
            w.WriteNumber("progress", t.Progress);
            w.WriteStartArray("attachedElements");
            foreach (var id in t.ElementIds) WriteElementId(w, id);
            w.WriteEndArray();
            w.WriteEndObject();
            foreach (var child in t.Children) WriteTask(child);
        }
        foreach (var task in schedules.SelectMany(s => s.Tasks)) WriteTask(task);
        w.WriteEndArray();
        w.WriteEndObject();
    }

    private void WriteLinkedFiles(Utf8JsonWriter w)
    {
        w.WriteStartArray("linkedFiles");
        if (_scene.Models.Count <= _firstListedModel)
        {
            w.WriteEndArray();
            return;
        }
        int host = _scene.Models[0].Id;
        var members = _scene.Elements.Select((element, index) => (element.ModelId, index))
            .Where(member => _firstListedModel == 0 || member.ModelId != host)
            .ToLookup(member => member.ModelId, member => member.index);
        var listed = _scene.Models.Skip(_firstListedModel);
        var repeatedNames = _firstListedModel == 0
            ? listed.GroupBy(model => model.Name).Where(group => group.Skip(1).Any()).Select(group => group.Key).ToHashSet()
            : [];
        foreach (var model in listed)
        {
            w.WriteStartObject();
            w.WriteString("key", model.Key);
            string name = repeatedNames.Contains(model.Name) ? FormattableString.Invariant($"{model.Name} (#{model.Id})") : model.Name;
            w.WriteString("name", name);
            w.WriteString("path", model.Path ?? string.Empty);
            w.WriteBoolean("visible", !_hiddenModels.Contains(model.Key));
            WriteIndices(w, "members", members[model.Id]);
            w.WriteEndObject();
        }
        w.WriteEndArray();
    }

    private void WriteClashTests(Utf8JsonWriter w)
    {
        w.WriteStartArray("clashTests");
        if (_options.IncludeClashes)
        {
            foreach (var test in _scene.ClashTests)
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
                    w.WritePropertyName("element1Id");
                    WriteElementId(w, clash.Element1Id);
                    w.WritePropertyName("element2Id");
                    WriteElementId(w, clash.Element2Id);
                    WriteVector(w, "point", clash.Point - _rtcOffset);
                    // Null when the source does not report it.
                    if (clash.Distance is double distance) w.WriteNumber("distance", distance);
                    else w.WriteNull("distance");
                    // A status this version does not know is shown as Active.
                    w.WriteString("status", Enum.IsDefined(clash.Status) ? clash.Status.ToString() : nameof(SceneClashStatus.Active));
                    w.WriteEndObject();
                }
                w.WriteEndArray();
                w.WriteEndObject();
            }
        }
        w.WriteEndArray();
    }

    // Elements and their references use the same representation so the browser can match them exactly.
    private static void WriteElementId(Utf8JsonWriter w, long? id)
    {
        if (id is not long value) w.WriteNullValue();
        else if (value is >= -MaxSafeElementId and <= MaxSafeElementId) w.WriteNumberValue(value);
        else w.WriteStringValue(value.ToString(CultureInfo.InvariantCulture));
    }

    private static void WriteView(Utf8JsonWriter w, string name, BlobView? view)
    {
        w.WritePropertyName(name);
        if (view is { } v) v.WriteTo(w);
        else w.WriteNullValue();
    }

    private static void WriteIndices(Utf8JsonWriter w, string name, IEnumerable<int> values)
    {
        w.WriteStartArray(name);
        foreach (int index in values)
        {
            w.WriteNumberValue(index);
            FlushIfLarge(w);
        }
        w.WriteEndArray();
    }

    private static void WriteVector(Utf8JsonWriter w, string? name, Vector3d v)
    {
        if (!IsFinite(v)) throw new InvalidDataException($"The '{name}' vector is not finite in viewer coordinates.");
        if (name == null) w.WriteStartArray();
        else w.WriteStartArray(name);
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

    private readonly record struct SectionState(
        List<(string Axis, Vector3d Normal, double Offset, bool Flipped)> Planes, (BoundingBox3d Bounds, bool Inverted)? Box);

    private sealed record PreparedViewpoint(SectionState? Sections, int[]? HiddenElements, int[]? VisibleElements,
        int[]? SelectedElements, string[]? HiddenModels);

    private readonly record struct MaterialKey(byte R, byte G, byte B, double Opacity, int? Texture);

    // Origin is META q.o: set for u16 grid-step positions, null for f32.
    private sealed record GeometryEntry(BlobView Positions, Vector3d? Origin, BlobView Indices, BlobView? Normals, BlobView? Uvs, BoundingBox3d Bounds);

    // An own-vertex mesh baked into RTC: Relative = float32 positions relative to Min, the exact minimum corner; Indices
    // with the winding reversed under a mirroring transform.
    private sealed record OwnShape(Vector3d[] Rtc, BoundingBox3d Box, Vector3d Min, float[] Relative, IReadOnlyList<int> Indices, short[]? Normals, float[]? Uvs);

    // The first own mesh of a shape, the geometry written for it and its instance translation (RTC).
    private readonly record struct OwnTwin(SceneGeometry Mesh, Transform3d? Transform, int Geometry, Vector3d Translation);

    private readonly record struct InstanceViews(BlobView Geometry, BlobView Material, BlobView Element, BlobView Matrix);
}
