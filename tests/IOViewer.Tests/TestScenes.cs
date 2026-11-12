using IOScene;

namespace IOViewer.Tests;

/// <summary>Builds small scenes for tests: one model with key <c>model</c>, elements numbered from 1.</summary>
internal static class TestScenes
{
    public static SceneDocument Empty(string title = "Test")
    {
        var scene = new SceneDocument { Title = title };
        scene.Models.Add(new SceneModel { Id = 1, Key = "model", Name = title });
        return scene;
    }

    /// <summary>Adds a geometry with the next free id and returns it.</summary>
    public static SceneGeometry Geometry(this SceneDocument scene, IReadOnlyList<Vector3d> vertices, IReadOnlyList<int> indices,
        IReadOnlyList<Vector3d>? normals = null, IReadOnlyList<Vector2d>? uvs = null, SceneTopology topology = SceneTopology.Triangles)
    {
        var geometry = new SceneGeometry
        {
            Id = scene.Geometries.Count == 0 ? 1 : scene.Geometries.Max(g => g.Id) + 1,
            Topology = topology,
            Vertices = vertices,
            Indices = indices,
            Normals = normals,
            UVs = uvs,
        };
        scene.Geometries.Add(geometry);
        return geometry;
    }

    /// <summary>Places <paramref name="geometry"/> for element <paramref name="element"/>, adding that element when it is new.</summary>
    public static SceneInstance Place(this SceneDocument scene, SceneGeometry geometry, Transform3d? transform = null, long? element = null)
    {
        long id = element ?? (scene.Elements.Count == 0 ? 1 : scene.Elements.Max(e => e.Id) + 1);
        if (!scene.Elements.Exists(e => e.Id == id))
        {
            scene.Elements.Add(new SceneElement { Id = id, ModelId = scene.Models[0].Id, Name = $"Element {id}" });
        }
        var instance = new SceneInstance { ElementId = id, GeometryId = geometry.Id, Transform = transform };
        scene.Instances.Add(instance);
        return instance;
    }

    /// <summary>Adds an element drawn by its own geometry, placed once, and returns the instance.</summary>
    public static SceneInstance Mesh(this SceneDocument scene, IReadOnlyList<Vector3d> vertices, IReadOnlyList<int> indices,
        Transform3d? transform = null, IReadOnlyList<Vector3d>? normals = null, IReadOnlyList<Vector2d>? uvs = null) =>
        scene.Place(scene.Geometry(vertices, indices, normals, uvs), transform);

    public static int CountTasks(IEnumerable<SceneTask> tasks) => tasks.Sum(t => 1 + CountTasks(t.Children));
}
