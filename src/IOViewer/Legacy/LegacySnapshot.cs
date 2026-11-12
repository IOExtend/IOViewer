using System.Text.Json;
using System.Text.Json.Serialization;
using IOScene;
using S = IOScene;

namespace IOViewer.Legacy;

/// <summary>
/// Reads an IOViewer 0.1 or 0.2 JSON snapshot (a file without <c>Kind</c>) and turns it into a scene.
/// </summary>
/// <remarks>
/// The mapping: the document metadata becomes the first model, each linked file and each other link name a model
/// (a linked file listed as not visible is hidden at start), level names a level table, property groups property sets
/// of text values, a mesh with its own vertices a geometry placed once, the product of the colour alpha and the
/// material and mesh opacities the instance colour alpha, a mesh texture a copy of the material that carries it,
/// the grid system, the TimeLiner and the clash tests one-item lists. A mesh without vertex indices draws nothing in
/// 0.2.0 and becomes a geometry of points, which the viewer does not draw either. Stored bounding boxes and
/// <c>MeshIndices</c> are ignored. A mesh without an element gets one (see <see cref="ToViewerDocument"/>).
/// </remarks>
internal static class LegacySnapshot
{
    private static readonly JsonSerializerOptions Options = new()
    {
        NumberHandling = JsonNumberHandling.AllowNamedFloatingPointLiterals
    };

    private static readonly S.RgbaColor DefaultColor = new(200, 200, 200);

    public static Model.ViewerDocument Read(byte[] json)
    {
        var old = JsonSerializer.Deserialize<ViewerDocument>(json, Options)
            ?? throw new InvalidDataException("Not an IOViewer snapshot: the JSON root is null.");
        return ToViewerDocument(old);
    }

    /// <summary>Maps a snapshot to a document whose scene passes <see cref="SceneDocument.Validate"/> when the snapshot is consistent.</summary>
    /// <remarks>
    /// Every instance of a scene belongs to an element, so a mesh without one gets a stand-in element: meshes that
    /// share an <c>ElementId</c> that no element has get one element with that id, named after the first such mesh
    /// (else <c>Element {id}</c>); a mesh without an <c>ElementId</c> gets its own element with the mesh id, named
    /// after the mesh (else <c>Mesh {id}</c>). Stand-ins follow the elements in mesh order. Elements and
    /// <c>ElementId</c> groups keep their ids, and a mesh stand-in whose id is taken is renumbered above every id in the
    /// snapshot. A 4D task or clash keeps only the references that 0.2.0 resolved: an element id, or in a snapshot
    /// without elements a mesh <c>ElementId</c>. Any other reference, a mesh stand-in's id included, named nothing in
    /// 0.2.0 and is dropped.
    /// </remarks>
    internal static Model.ViewerDocument ToViewerDocument(ViewerDocument old)
    {
        var scene = new SceneDocument { Title = old.Title ?? string.Empty };
        var result = new Model.ViewerDocument(scene)
        {
            SectionPlanes = [.. old.SectionPlanes.Select(p => new Model.ViewerSectionPlane
            {
                Axis = (Model.ViewerSectionAxis)p.Axis,
                Normal = Map(p.Normal),
                Offset = p.Offset,
                Enabled = p.Enabled,
                Inverted = p.Inverted,
            })],
            SectionBox = old.SectionBox is { } box ? new Model.ViewerSectionBox(Map(box.Min), Map(box.Max), box.Enabled, box.Inverted) : null,
        };

        // Models: the document, its linked files, then link names that match no linked file.
        var keys = new HashSet<string>(StringComparer.Ordinal);
        string UniqueKey(string? path, string? fallback)
        {
            string key = FileName(path) is { Length: > 0 } name ? name : string.IsNullOrEmpty(fallback) ? "model" : fallback;
            string unique = key;
            for (int n = 2; !keys.Add(unique); n++) unique = FormattableString.Invariant($"{key}#{n}");
            return unique;
        }

        scene.Models.Add(new SceneModel
        {
            Id = 1,
            Key = UniqueKey(old.SourcePath, null),
            Name = old.Title ?? string.Empty,
            Path = Empty(old.SourcePath),
            Application = old.Application,
            Author = old.Author,
            CreatedAt = old.CreatedAt,
        });
        foreach (var file in old.LinkedFiles)
        {
            var model = new SceneModel { Id = scene.Models.Count + 1, Key = UniqueKey(file.Path, file.Name), Name = file.Name ?? string.Empty, Path = Empty(file.Path) };
            scene.Models.Add(model);
            if (!file.Visible) result.HiddenModelKeys.Add(model.Key);
        }

        var linkModels = new Dictionary<string, int>(StringComparer.Ordinal);
        int ModelOf(string? linkName)
        {
            if (string.IsNullOrEmpty(linkName)) return 1;
            if (linkModels.TryGetValue(linkName, out int id)) return id;
            // As the 0.2.0 viewer matched them: a link name is a linked file's name or path.
            var model = scene.Models.Skip(1).FirstOrDefault(m => m.Name == linkName || m.Path == linkName);
            if (model is null)
            {
                model = new SceneModel { Id = scene.Models.Count + 1, Key = UniqueKey(linkName, linkName), Name = linkName };
                scene.Models.Add(model);
            }
            linkModels.Add(linkName, model.Id);
            return model.Id;
        }

        var levels = new Dictionary<(int Model, string Name), int>();
        int? LevelOf(int modelId, string? name)
        {
            if (string.IsNullOrEmpty(name)) return null;
            if (!levels.TryGetValue((modelId, name), out int id))
            {
                id = scene.Levels.Count + 1;
                scene.Levels.Add(new SceneLevel { Id = id, ModelId = modelId, Name = name });
                levels.Add((modelId, name), id);
            }
            return id;
        }

        var elementIds = new HashSet<long>();
        foreach (var source in old.Elements)
        {
            int modelId = ModelOf(source.LinkName);
            var element = new SceneElement
            {
                Id = source.Id,
                ModelId = modelId,
                Name = source.Name ?? string.Empty,
                Category = source.Category ?? string.Empty,
                TypeName = source.TypeName ?? string.Empty,
                LevelId = LevelOf(modelId, source.Level),
            };
            foreach (var (group, values) in source.Properties)
            {
                var set = new ScenePropertySet { Id = scene.PropertySets.Count + 1, Name = group };
                foreach (var (name, value) in values) set.Properties.Add(new SceneProperty { Name = name, Value = SceneValue.FromText(value ?? string.Empty) });
                scene.PropertySets.Add(set);
                element.PropertySetIds.Add(set.Id);
            }
            scene.Elements.Add(element);
            elementIds.Add(element.Id);
        }

        // Stand-in elements for meshes without one; ElementId groups keep their ids, mesh ids give way (see remarks).
        var taken = new HashSet<long>(elementIds);
        foreach (var mesh in old.Meshes)
        {
            if (mesh.ElementId is long id) taken.Add(id);
        }
        long next = taken.Count == 0 ? 1 : taken.Max() + 1;
        var groups = new HashSet<long>();
        long ElementOf(ViewerMesh mesh)
        {
            if (mesh.ElementId is long id)
            {
                if (!elementIds.Contains(id) && groups.Add(id))
                {
                    scene.Elements.Add(new SceneElement { Id = id, ModelId = 1, Name = string.IsNullOrEmpty(mesh.Name) ? $"Element {id}" : mesh.Name });
                }
                return id;
            }
            long own = mesh.Id;
            if (!taken.Add(own))
            {
                while (!taken.Add(next)) next++;
                own = next;
            }
            scene.Elements.Add(new SceneElement { Id = own, ModelId = 1, Name = string.IsNullOrEmpty(mesh.Name) ? $"Mesh {mesh.Id}" : mesh.Name });
            return own;
        }

        for (int i = 0; i < old.Textures.Count; i++)
        {
            var texture = old.Textures[i];
            byte[] data;
            try
            {
                data = Convert.FromBase64String(texture.Base64Data ?? string.Empty);
            }
            catch (FormatException e)
            {
                throw new InvalidDataException($"Texture {i}: Base64Data is not base64.", e);
            }
            scene.Textures.Add(new SceneTexture { Id = i + 1, MimeType = texture.MimeType ?? "image/png", Data = data, ScaleX = texture.ScaleX, ScaleY = texture.ScaleY });
        }
        int? TextureOf(int? index) => index is int i && (uint)i < (uint)old.Textures.Count ? i + 1 : null;

        // 0.2.0 drew a mesh with the first material of its id; the material opacity becomes the colour alpha.
        var materials = new Dictionary<int, (ViewerMaterial Old, SceneMaterial New)>();
        foreach (var material in old.Materials)
        {
            if (materials.ContainsKey(material.Id)) continue;
            var mapped = new SceneMaterial
            {
                Id = material.Id,
                Name = material.Name ?? string.Empty,
                Color = Map(material.Color, material.Color.Af * material.Opacity),
                Roughness = material.Roughness,
                Metalness = material.Metalness,
                TextureId = TextureOf(material.TextureIndex),
            };
            scene.Materials.Add(mapped);
            materials.Add(material.Id, (material, mapped));
        }
        int nextMaterial = materials.Count == 0 ? 1 : materials.Keys.Max() + 1;
        var copies = new Dictionary<(int? Material, int? Texture), int>();
        int CopyWithTexture(SceneMaterial? material, int? texture)
        {
            if (!copies.TryGetValue((material?.Id, texture), out int id))
            {
                id = nextMaterial++;
                scene.Materials.Add(new SceneMaterial
                {
                    Id = id,
                    Name = material?.Name ?? "Texture",
                    Color = material?.Color ?? DefaultColor,
                    Roughness = material?.Roughness ?? 0.5,
                    Metalness = material?.Metalness ?? 0.1,
                    TextureId = texture,
                });
                copies.Add((material?.Id, texture), id);
            }
            return id;
        }

        int nextGeometry = old.Geometries.Count == 0 ? 1 : old.Geometries.Max(g => g.Id) + 1;
        foreach (var geometry in old.Geometries)
        {
            scene.Geometries.Add(Geometry(geometry.Id, geometry.Vertices, geometry.Indices, geometry.Normals, geometry.UVs));
        }

        foreach (var mesh in old.Meshes)
        {
            int geometryId;
            if (mesh.GeometryId is int shared)
            {
                if (mesh.Vertices.Count > 0) throw new InvalidDataException($"Mesh {mesh.Id} has both geometry {shared} and its own vertices.");
                geometryId = shared;
            }
            else
            {
                geometryId = nextGeometry++;
                scene.Geometries.Add(Geometry(geometryId, mesh.Vertices, mesh.Indices, mesh.Normals, mesh.UVs));
            }

            // The colour and opacity 0.2.0 drew: the mesh colour, else its material's, times the opacities.
            (ViewerMaterial Old, SceneMaterial New)? material = mesh.Color is null && mesh.MaterialId is int m && materials.TryGetValue(m, out var found) ? found : null;
            var color = mesh.Color ?? material?.Old.Color ?? new RgbaColor(200, 200, 200);
            var drawn = Map(color, color.Af * (material?.Old.Opacity ?? 1) * mesh.Opacity);
            int? texture = TextureOf(material is { } used ? mesh.TextureIndex ?? used.Old.TextureIndex : mesh.TextureIndex);
            int? materialId = material is { } drawnWith
                ? texture == drawnWith.New.TextureId ? drawnWith.New.Id : CopyWithTexture(drawnWith.New, texture)
                : texture is null ? null : CopyWithTexture(null, texture);

            scene.Instances.Add(new SceneInstance
            {
                ElementId = ElementOf(mesh),
                GeometryId = geometryId,
                Transform = mesh.Transform is { } t ? new S.Transform3d(Map(t.XAxis), Map(t.YAxis), Map(t.ZAxis), Map(t.Translation)) : null,
                MaterialId = materialId,
                Color = mesh.Color is null && drawn == (material?.New.Color ?? DefaultColor) ? null : drawn,
                Name = Empty(mesh.Name),
            });
        }

        // The ids 0.2.0 resolved: its viewer matched references to elements only, and to the ElementId groups it shows
        // as elements when the snapshot has none; never to a per-mesh stand-in.
        var ids = old.Elements.Count > 0 ? elementIds : [.. old.Meshes.Select(m => m.ElementId).OfType<long>()];
        long? Known(long? id) => id is long known && ids.Contains(known) ? known : null;

        if (old.Grids is { } grids)
        {
            scene.Grids.Add(new SceneGridSystem
            {
                ModelId = 1,
                Name = grids.Name ?? string.Empty,
                Lines = [.. grids.Lines.Select(l => new SceneGridLine { Name = l.Name ?? string.Empty, Start = Map(l.Start), End = Map(l.End), Elevation = l.Elevation })],
            });
        }

        foreach (var viewpoint in old.Viewpoints)
        {
            var c = viewpoint.Camera ?? new ViewerCamera();
            scene.Viewpoints.Add(new SceneViewpoint
            {
                Name = viewpoint.Name ?? string.Empty,
                Camera = new SceneCamera
                {
                    Position = Map(c.Position),
                    Target = Map(c.Target),
                    Up = Map(c.Up),
                    FieldOfView = c.FieldOfView,
                    AspectRatio = c.AspectRatio,
                    NearDistance = c.NearDistance,
                    FarDistance = c.FarDistance,
                    Projection = (SceneProjection)c.Projection,
                },
            });
        }

        if (old.TimeLiner is { } schedule)
        {
            SceneTask Task(ViewerTimeLinerTask t) => new()
            {
                Id = t.Id ?? string.Empty,
                Name = t.Name ?? string.Empty,
                TaskType = (SceneTaskType)t.TaskType,
                PlannedStart = t.PlannedStart,
                PlannedEnd = t.PlannedEnd,
                ActualStart = t.ActualStart,
                ActualEnd = t.ActualEnd,
                PlannedCost = t.PlannedCost,
                ActualCost = t.ActualCost,
                Progress = t.Progress,
                ElementIds = [.. t.AttachedElementIds.Where(ids.Contains)],
                Children = [.. t.Children.Select(Task)],
            };
            scene.Schedules.Add(new SceneSchedule { Name = schedule.Name ?? string.Empty, Tasks = [.. schedule.Tasks.Select(Task)] });
        }

        foreach (var test in old.ClashTests)
        {
            scene.ClashTests.Add(new SceneClashTest
            {
                Name = test.Name ?? string.Empty,
                Clashes = [.. test.Clashes.Select(c => new SceneClashResult
                {
                    Id = c.Id ?? string.Empty,
                    Name = c.Name ?? string.Empty,
                    Element1Id = Known(c.Element1Id),
                    Element2Id = Known(c.Element2Id),
                    Element1Name = c.Element1Name ?? string.Empty,
                    Element2Name = c.Element2Name ?? string.Empty,
                    Point = Map(c.Point),
                    Distance = c.Distance,
                    Status = (SceneClashStatus)c.Status,
                })],
            });
        }

        return result;
    }

    private static SceneGeometry Geometry(int id, IReadOnlyList<Vector3d> vertices, IReadOnlyList<int> indices, IReadOnlyList<Vector3d>? normals, IReadOnlyList<Vector2d>? uvs) => new()
    {
        Id = id,
        Topology = indices.Count == 0 && vertices.Count > 0 ? SceneTopology.Points : SceneTopology.Triangles,
        Vertices = [.. vertices.Select(Map)],
        Indices = [.. indices],
        Normals = normals is null ? null : [.. normals.Select(Map)],
        UVs = uvs is null ? null : [.. uvs.Select(v => new S.Vector2d(v.X, v.Y))],
    };

    private static S.Vector3d Map(Vector3d v) => new(v.X, v.Y, v.Z);

    // The alpha byte nearest to an opacity from 0 to 1.
    private static S.RgbaColor Map(RgbaColor c, double opacity) =>
        new(c.R, c.G, c.B, (byte)Math.Round(Math.Clamp(opacity, 0, 1) * 255, MidpointRounding.AwayFromZero));

    private static string? Empty(string? text) => string.IsNullOrEmpty(text) ? null : text;

    private static string? FileName(string? path) => path?[(path.LastIndexOfAny(['/', '\\']) + 1)..];
}
