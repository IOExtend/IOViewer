using System.Text;
using IOScene;
using IOViewer.Importers;
using Xunit;

namespace IOViewer.Tests;

/// <summary>
/// Reads the frozen IOViewer 0.2.0 snapshots in tests/fixtures/legacy-0.2 and checks the scene they map to.
/// </summary>
public class LegacyFixtureTests
{
    private static Model.ViewerDocument Fixture(string file) =>
        JsonViewerImporter.Load(Path.Combine(AppContext.BaseDirectory, "legacy-0.2", file));

    private static Model.ViewerDocument Map(Legacy.ViewerDocument old) => Legacy.LegacySnapshot.ToViewerDocument(old);

    private static IEnumerable<SceneDiagnostic> Errors(SceneDocument scene) =>
        scene.Validate().Where(d => d.Severity == SceneSeverity.Error);

    // Elements include one stand-in per mesh without an element: building.json has one, the fifth file three.
    [Theory]
    [InlineData("building.json", 66, 67, 7, 3, 3)]
    [InlineData("empty.json", 0, 0, 0, 0, 1)]
    [InlineData("escaping.json", 3, 3, 0, 0, 1)]
    [InlineData("textured.json", 2, 2, 0, 0, 1)]
    [InlineData("meshes-without-elements.json", 3, 4, 1, 1, 2)]
    public void LegacySnapshot_MapsToAValidScene(string file, int elements, int instances, int tasks, int clashes, int models)
    {
        var scene = Fixture(file).Scene;

        Assert.Empty(Errors(scene));
        Assert.Equal(elements, scene.Elements.Count);
        Assert.Equal(instances, scene.Instances.Count);
        Assert.Equal(tasks, TestScenes.CountTasks(scene.Schedules.SelectMany(s => s.Tasks)));
        Assert.Equal(clashes, scene.ClashTests.Sum(t => t.Clashes.Count));
        Assert.Equal(models, scene.Models.Count);
        Assert.Equal("model", scene.Models[0].Key); // the snapshots have no SourcePath
    }

    [Fact]
    public void Building_KeepsLinksLevelsPropertiesAndSharedGeometry()
    {
        var doc = Fixture("building.json");
        var scene = doc.Scene;

        Assert.Equal("Two-Storey Frame Building", doc.Title);
        Assert.Equal(["model", "Structure.rvt", "MEP.rvt"], scene.Models.Select(m => m.Key));
        Assert.Empty(doc.HiddenModelKeys);
        var duct = scene.Elements.Single(e => e.Id == 300063);
        Assert.Equal(3, duct.ModelId);
        Assert.Equal(["Level 1", "Level 2", "Roof"], scene.Levels.Select(l => l.Name).Distinct().Order());
        var slab = scene.Elements.Single(e => e.Id == 300001);
        Assert.Equal((1, "Level 1"), (slab.ModelId, scene.Levels.Single(l => l.Id == slab.LevelId).Name));
        Assert.Equal(["Identity Data", "Constraints"], slab.PropertySetIds.Select(id => scene.PropertySets.Single(s => s.Id == id).Name));
        Assert.Equal(SceneValue.FromText("Ground Slab"), scene.PropertySets.Single(s => s.Id == slab.PropertySetIds[0]).Properties[0].Value);

        // The two shared geometries keep their ids and are placed 26 and 34 times; the 7 own meshes are placed once.
        var uses = scene.Instances.GroupBy(i => i.GeometryId).ToDictionary(g => g.Key, g => g.Count());
        Assert.Equal((26, 34), (uses[1], uses[2]));
        Assert.Equal(7, uses.Values.Count(n => n == 1));

        // The curtain wall (mesh 62) has mesh opacity 0.35: its colour alpha is the nearest byte, 89.
        Assert.Equal(("Curtain Wall South", (byte)89), (scene.Instances[62].Name, scene.Instances[62].Color!.Value.A));

        var marker = scene.Elements[^1];
        Assert.Equal((64L, "Survey Marker"), (marker.Id, marker.Name));
    }

    [Fact]
    public void MeshesWithoutElements_BecomeStandInElementsAsTheReadmeDescribes()
    {
        var doc = Fixture("meshes-without-elements.json");
        var scene = doc.Scene;

        // Meshes 1 and 2 share ElementId 100, mesh 3 has 200, mesh 4 none: it gets its mesh id.
        Assert.Equal([100L, 200L, 4L], scene.Elements.Select(e => e.Id));
        Assert.Equal(["Pane A", "Slab", "Loose Mesh"], scene.Elements.Select(e => e.Name));
        Assert.Equal([100L, 100L, 200L, 4L], scene.Instances.Select(i => i.ElementId));
        // The task also names 4, the loose mesh's id, which 0.2.0 never matched to a mesh: it is dropped.
        Assert.Equal([100L, 200L], scene.Schedules.Single().Tasks.Single().ElementIds);
        var clash = scene.ClashTests.Single().Clashes.Single();
        Assert.Equal((100L, 200L, SceneClashStatus.New), (clash.Element1Id, clash.Element2Id, clash.Status));

        // Opacity: material 1 has opacity 0.5, mesh 1 opacity 0.8; their product is the instance alpha.
        var glass = scene.Materials.Single(m => m.Id == 1);
        Assert.Equal(new RgbaColor(150, 200, 230, 128), glass.Color);
        Assert.Equal((1, new RgbaColor(150, 200, 230, 102)), (scene.Instances[0].MaterialId, scene.Instances[0].Color!.Value));
        Assert.Equal((2, (RgbaColor?)null), (scene.Instances[1].MaterialId, scene.Instances[1].Color));

        // Texture: mesh 3 draws material 2 with texture 0, so it gets a copy of material 2 that carries the texture.
        var texture = Assert.Single(scene.Textures);
        Assert.Equal(("image/png", 70), (texture.MimeType, texture.Data.Length));
        var copy = scene.Materials.Single(m => m.Id == scene.Instances[2].MaterialId);
        Assert.Equal(("Concrete", new RgbaColor(185, 183, 178), (int?)texture.Id), (copy.Name, copy.Color, copy.TextureId));
        Assert.Null(scene.Materials.Single(m => m.Id == 2).TextureId);
        Assert.Null(scene.Instances[2].Color);

        Assert.Equal((null, new RgbaColor(200, 60, 60)), (scene.Instances[3].MaterialId, scene.Instances[3].Color!.Value));

        // The linked file listed as not visible is hidden at start.
        var link = scene.Models[1];
        Assert.Equal(("structure.glb", "Structure", "links/structure.glb"), (link.Key, link.Name, link.Path));
        Assert.Equal(["structure.glb"], doc.HiddenModelKeys);
        Assert.Equal(("IOViewer", "2026-11-12T12:00:00Z", "IOViewer 0.2.0"), (scene.Models[0].Author, scene.Models[0].CreatedAt, scene.Models[0].Application));
    }

    [Fact]
    public void MeshStandIn_WhoseIdIsTaken_IsRenumberedAndOnlyElementReferencesAreKept()
    {
        var old = new Legacy.ViewerDocument();
        old.Elements.Add(new Legacy.ViewerElement { Id = 1, Name = "Real" });
        old.Meshes.Add(Triangle(id: 1, elementId: null, "A"));   // mesh id 1 is element 1's id
        old.Meshes.Add(Triangle(id: 7, elementId: null, "C"));   // mesh id 7 is the ElementId of a later mesh
        old.Meshes.Add(Triangle(id: 5, elementId: 7, "B"));
        old.Meshes.Add(Triangle(id: 3, elementId: null, "D"));   // free: keeps its mesh id
        old.Meshes.Add(Triangle(id: 3, elementId: null, "E"));   // the same mesh id again
        var task = new Legacy.ViewerTimeLinerTask { Id = "T" };
        task.AttachedElementIds.AddRange([1, 7, 3, 99]);
        old.TimeLiner = new Legacy.ViewerTimeLinerSchedule();
        old.TimeLiner.Tasks.Add(task);
        var test = new Legacy.ViewerClashTest();
        test.Clashes.Add(new Legacy.ViewerClashResult { Id = "c", Element1Id = 7, Element2Id = 99 });
        old.ClashTests.Add(test);

        var scene = Map(old).Scene;

        Assert.Empty(Errors(scene));
        Assert.Equal([1L, 8L, 9L, 7L, 3L, 10L], scene.Elements.Select(e => e.Id));
        Assert.Equal(["Real", "A", "C", "B", "D", "E"], scene.Elements.Select(e => e.Name));
        Assert.Equal([8L, 9L, 7L, 3L, 10L], scene.Instances.Select(i => i.ElementId));
        // The snapshot has elements, so 0.2.0 resolved references to element 1 only: 7 (an ElementId without element),
        // 3 (mesh D's id) and 99 named nothing and are dropped.
        Assert.Equal([1L], scene.Schedules.Single().Tasks.Single().ElementIds);
        var clash = scene.ClashTests.Single().Clashes.Single();
        Assert.Equal(((long?)null, (long?)null), (clash.Element1Id, clash.Element2Id));
    }

    [Fact]
    public void SnapshotWithoutElements_KeepsElementIdReferencesAndDropsMeshIds()
    {
        // 0.2.0 matched references to ElementId groups here, never to a mesh's own id.
        var old = new Legacy.ViewerDocument();
        old.Meshes.Add(Triangle(id: 5, elementId: null, "loose"));
        old.Meshes.Add(Triangle(id: 6, elementId: 8, "grouped"));
        var task = new Legacy.ViewerTimeLinerTask { Id = "T" };
        task.AttachedElementIds.AddRange([5, 8]);
        old.TimeLiner = new Legacy.ViewerTimeLinerSchedule();
        old.TimeLiner.Tasks.Add(task);
        var test = new Legacy.ViewerClashTest();
        test.Clashes.Add(new Legacy.ViewerClashResult { Id = "c", Element1Id = 5, Element2Id = 8 });
        old.ClashTests.Add(test);

        var scene = Map(old).Scene;

        Assert.Empty(Errors(scene));
        Assert.Equal([5L, 8L], scene.Elements.Select(e => e.Id));
        Assert.Equal([8L], scene.Schedules.Single().Tasks.Single().ElementIds);
        var clash = scene.ClashTests.Single().Clashes.Single();
        Assert.Equal(((long?)null, (long?)8), (clash.Element1Id, clash.Element2Id));
    }

    private static Legacy.ViewerMesh Triangle(int id, long? elementId, string name) => new()
    {
        Id = id,
        ElementId = elementId,
        Name = name,
        Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)],
        Indices = [0, 1, 2],
    };

    [Fact]
    public void OldJsonWithoutNewerFields_LoadsWithDefaults()
    {
        const string json = """
            {"Title":"Old","Meshes":[{"Id":1,"Name":"m","Vertices":[{"X":0,"Y":0,"Z":0},{"X":1,"Y":0,"Z":0},{"X":0,"Y":1,"Z":0}],"Indices":[0,1,2]}],
             "ClashTests":[{"Name":"T","Clashes":[{"Id":"c","Name":"n"}]}]}
            """;
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(json));

        var scene = JsonViewerImporter.Load(ms).Scene;

        Assert.Empty(Errors(scene));
        var geometry = Assert.Single(scene.Geometries);
        var instance = Assert.Single(scene.Instances);
        Assert.Equal((geometry.Id, (Transform3d?)null, "m"), (instance.GeometryId, instance.Transform, instance.Name));
        var clash = Assert.Single(Assert.Single(scene.ClashTests).Clashes);
        Assert.Equal(((long?)null, (long?)null, SceneClashStatus.Active), (clash.Element1Id, clash.Element2Id, clash.Status));
    }

    [Fact]
    public void SharedGeometryAndOwnTransforms_AreKept()
    {
        var old = new Legacy.ViewerDocument();
        old.Geometries.Add(new Legacy.ViewerGeometry { Id = 4, Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], Indices = [0, 1, 2] });
        var move = new Legacy.Transform3d(new(0, 1, 0), new(-1, 0, 0), new(0, 0, 1), new(10, 0, 0));
        old.Meshes.Add(new Legacy.ViewerMesh { Id = 1, ElementId = 1, GeometryId = 4, Transform = move });
        var own = Triangle(2, 1, "own");
        own.Transform = move;
        own.Normals = [new(0, 0, 1), new(0, 0, 1), new(0, 0, 1)];
        own.UVs = [new(0, 0), new(1, 0), new(0, 1)];
        old.Meshes.Add(own);

        var scene = Map(old).Scene;

        Assert.Empty(Errors(scene));
        Assert.Equal([4, 5], scene.Geometries.Select(g => g.Id));
        var expected = new Transform3d(new(0, 1, 0), new(-1, 0, 0), new(0, 0, 1), new(10, 0, 0));
        Assert.All(scene.Instances, i => Assert.Equal(expected, i.Transform));
        Assert.Equal([new Vector2d(0, 0), new(1, 0), new(0, 1)], scene.Geometries[1].UVs);
        Assert.Equal(3, scene.Geometries[1].Normals!.Count);
        Assert.Equal("Element 1", Assert.Single(scene.Elements).Name); // the first mesh has no name
    }

    [Fact]
    public void MeshWithGeometryAndOwnVertices_IsRejected()
    {
        var old = new Legacy.ViewerDocument();
        old.Geometries.Add(new Legacy.ViewerGeometry { Id = 1, Vertices = [new(0, 0, 0)] });
        old.Meshes.Add(new Legacy.ViewerMesh { Id = 2, GeometryId = 1, Vertices = [new(0, 0, 0)] });

        var ex = Assert.Throws<InvalidDataException>(() => Map(old));
        Assert.Contains("Mesh 2 has both geometry 1", ex.Message, StringComparison.Ordinal);
    }

    [Fact]
    public void MeshWithoutIndices_StaysUndrawn()
    {
        // 0.2.0 drew nothing for vertices without indices; empty indices in a scene would mean triangles.
        var old = new Legacy.ViewerDocument();
        old.Meshes.Add(new Legacy.ViewerMesh { Id = 1, Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)] });

        var doc = Map(old);

        Assert.Equal(SceneTopology.Points, Assert.Single(doc.Scene.Geometries).Topology);
        Assert.Empty(Errors(doc.Scene));
        var view = ViewerHtml.Export(doc);
        Assert.Equal(0, view.InstanceCount);
        Assert.Equal([0.5, 0.5, 0], view.Meta.GetProperty("rtcOffset").EnumerateArray().Select(e => e.GetDouble()));
    }

    [Fact]
    public void BrokenTextureData_IsRejected()
    {
        var old = new Legacy.ViewerDocument();
        old.Textures.Add(new Legacy.ViewerTexture { Base64Data = "not base64!" });

        Assert.Throws<InvalidDataException>(() => Map(old));
    }
}
