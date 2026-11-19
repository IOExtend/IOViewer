using IOScene;
using IOViewer.Cli;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

[Collection("Console")]
public sealed class FederatedCliTests : IDisposable
{
    private readonly DirectoryInfo _scratch = Directory.CreateTempSubdirectory("ioviewer-federation-");

    private string Save(string name, ViewerDocument doc)
    {
        string path = Path.Combine(_scratch.FullName, name + ".json");
        JsonViewerExporter.Save(doc, path);
        return path;
    }

    private static ViewerDocument Model(string name)
    {
        var scene = TestScenes.Empty(name);
        scene.Levels.Add(new() { Id = 1, ModelId = 1, Name = "Level 1", Elevation = 1 });
        scene.Textures.Add(new() { Id = 1, MimeType = "image/png", Data = [1, 2, 3] });
        scene.Materials.Add(new() { Id = 1, Name = name, TextureId = 1 });
        scene.PropertySets.Add(new()
        {
            Id = 1, Name = "Source",
            Properties = [new() { Name = "Discipline", Value = SceneValue.FromText(name) }],
        });
        var shape = scene.Geometry([Vector3d.Zero, new(2, 0, 0), Vector3d.UnitY], [0, 1, 2]);
        scene.Place(shape, Transform3d.Translate(new(2, 0, 1)));
        scene.Place(shape, Transform3d.Translate(new(4, 0, 2)));
        foreach (var instance in scene.Instances) instance.MaterialId = 1;
        scene.Elements[0].Name = name;
        scene.Elements[0].SourceId = "source-1";
        scene.Elements[0].LevelId = 1;
        scene.Elements[0].PropertySetIds = [1];
        scene.Elements[1].ParentId = 1;
        scene.Viewpoints.Add(new() { Id = "front", Camera = new() { Position = new(2, 0, 1), Target = Vector3d.UnitX } });
        return new(scene);
    }

    [Fact]
    public void Export_MapsSourceIdentityAndReferencesAndPlacesTheAdditionalModel()
    {
        string host = Save("architecture", Model("Architecture"));
        var services = Model("Services");
        services.Scene.Grids.Add(new()
        {
            ModelId = 1,
            Lines = [new() { Start = Vector3d.Zero, End = Vector3d.UnitX, Elevation = 1 }],
            Paths = [new() { Name = "Arc", Points = [new(0, 0, 0), new(1, 0, 0), new(2, 1, 0)] }],
        });
        services.Scene.Schedules.Add(new()
        {
            ModelId = 1,
            Tasks = [new() { Id = "parent", Children = [new() { Id = "child", ElementIds = [1, 2] }] }],
        });
        services.Scene.ClashTests.Add(new()
        {
            Clashes =
            [
                new() { Id = "test", Element1Id = 1, Element2Id = 2, Point = Vector3d.UnitX },
                new() { Id = "by-name", Element1Name = "Services", Element2Name = "Architecture" },
            ],
        });
        services.ViewpointStates.Add("front", new()
        {
            HiddenElementIds = [1],
            SectionPlanes = [new(ViewerSectionAxis.X, 2)],
            SectionBox = new(new(0, 0, 0), new(2, 1, 1)),
        });
        string addition = Save("services", services);
        string output = Path.Combine(_scratch.FullName, "combined.html");
        string snapshot = Path.Combine(_scratch.FullName, "combined.json");
        Assert.Equal(0, Program.Main([host, "--add", addition, "--placement", "10,20,3,90", "-o", output, "--json", snapshot]));

        var combined = JsonViewerImporter.Load(snapshot);
        Assert.True(combined.ShowHostInModelList);
        var scene = combined.Scene;
        Assert.Equal(["model", "model#2"], scene.Models.Select(model => model.Key));
        Assert.Equal([host, addition], scene.Models.Select(model => model.Path));
        Assert.Equal([1L, 2L, 3L, 4L], scene.Elements.Select(element => element.Id));
        Assert.Equal(["source-1", "source-1"], scene.Elements.Select(element => element.SourceId).OfType<string>());
        var added = scene.Elements[2];
        Assert.Equal(scene.Models[1].Id, added.ModelId);
        Assert.Equal(3, scene.Elements[3].ParentId);
        Assert.Equal(scene.Levels[1].Id, added.LevelId);
        Assert.Equal(4, scene.Levels[1].Elevation);
        Assert.Equal(scene.PropertySets[1].Id, Assert.Single(added.PropertySetIds));
        Assert.Equal(scene.Materials[1].Id, scene.Instances[2].MaterialId);
        Assert.Equal(scene.Textures[1].Id, scene.Materials[1].TextureId);
        Assert.Equal(scene.Instances[2].GeometryId, scene.Instances[3].GeometryId);
        Assert.NotEqual(scene.Instances[0].GeometryId, scene.Instances[2].GeometryId);
        Assert.Equal(new Vector3d(10, 22, 4), scene.Instances[2].Transform!.Value.Translation);
        Assert.Equal(new Vector3d(10, 24, 4), scene.Instances[2].Transform!.Value.Apply(new(2, 0, 0)));
        Assert.Equal(new Vector3d(10, 21, 3), Assert.Single(Assert.Single(scene.Grids).Lines).End);
        Assert.Equal([new(10, 20, 3), new(10, 21, 3), new(9, 22, 3)], Assert.Single(scene.Grids[0].Paths!).Points);
        Assert.Equal([3L, 4L], scene.Schedules[0].Tasks[0].Children[0].ElementIds);
        var clash = scene.ClashTests[0].Clashes[0];
        Assert.Equal((3L, 4L), (clash.Element1Id, clash.Element2Id));
        Assert.Equal(new Vector3d(10, 21, 3), clash.Point);
        var byName = scene.ClashTests[0].Clashes[1];
        Assert.Equal(3, byName.Element1Id);
        Assert.DoesNotContain(scene.Elements, element => element.Id == byName.Element2Id);
        Assert.Equal("front#2", scene.Viewpoints[1].Id);
        Assert.Equal(new Vector3d(10, 22, 4), scene.Viewpoints[1].Camera.Position);
        var state = combined.ViewpointStates["front#2"];
        Assert.Equal([3L], state.HiddenElementIds);
        Assert.Equal(Vector3d.UnitY, state.SectionPlanes![0].Normal);
        Assert.Equal(22, state.SectionPlanes[0].Offset);
        Assert.Equal(new Vector3d(9, 20, 3), state.SectionBox!.Min);
        Assert.Equal(new Vector3d(10, 22, 4), state.SectionBox.Max);

        var view = ViewerHtml.Parse(File.ReadAllText(output));
        Assert.Equal(4, view.InstanceCount);
        var files = view.Meta.GetProperty("linkedFiles");
        Assert.Equal([0, 1], files[0].GetProperty("members").EnumerateArray().Select(member => member.GetInt32()));
        Assert.Equal([2, 3], files[1].GetProperty("members").EnumerateArray().Select(member => member.GetInt32()));
        Assert.Equal("Architecture", view.Props.GetProperty("1").GetProperty("Source").GetProperty("Discipline").GetString());
        Assert.Equal("Services", view.Props.GetProperty("3").GetProperty("Source").GetProperty("Discipline").GetString());

        // A combined snapshot can be exported again with the same independent host visibility.
        Assert.Equal(2, ViewerHtml.Export(combined).Meta.GetProperty("linkedFiles").GetArrayLength());
    }

    [Theory]
    [InlineData("0,0,0")]
    [InlineData("NaN,0,0,0")]
    [InlineData("0,0,0,Infinity")]
    public void Export_MissingOrInvalidPlacementIsAUsageError(string placement)
    {
        Assert.Equal(1, Program.Main(["base.obj", "--add", "other.obj"]));
        Assert.Equal(1, Program.Main(["base.obj", "--add", "other.obj", "--placement", placement]));
    }

    [Fact]
    public void Export_ARejectablePlacementLeavesAnExistingOutputUntouched()
    {
        string host = Save("host", Model("Host"));
        var services = Model("Services");
        services.ViewpointStates.Add("front", new() { SectionBox = new() });
        string addition = Save("services", services);
        string output = Path.Combine(_scratch.FullName, "existing.html");
        File.WriteAllText(output, "existing output");

        Assert.Equal(2, Program.Main([host, "--add", Path.Combine(_scratch.FullName, "missing.json"),
            "--placement", "0,0,0,0", "-o", output]));
        Assert.Equal(3, Program.Main([host, "--add", addition, "--placement", "0,0,0,45", "-o", output]));
        Assert.Equal("existing output", File.ReadAllText(output));
    }

    [Fact]
    public void Export_RepeatedInputKeepsEachPlacementIndependentlyIdentifiable()
    {
        string source = Save("source", Model("Structure"));
        string output = Path.Combine(_scratch.FullName, "repeated.html");
        Assert.Equal(0, Program.Main([source, "--add", source, "--placement", "10,0,0,0",
            "--add", source, "--placement", "-10,0,0,-90", "-o", output]));
        var view = ViewerHtml.Parse(File.ReadAllText(output));
        var sources = view.Meta.GetProperty("linkedFiles").EnumerateArray().ToArray();
        Assert.Equal(["model", "model#2", "model#3"], sources.Select(file => file.GetProperty("key").GetString()));
        Assert.Equal(["Structure (#1)", "Structure (#2)", "Structure (#3)"],
            sources.Select(file => file.GetProperty("name").GetString()));
    }

    [Fact]
    public void Export_AHostWithMissingGeometryCannotBorrowTheOtherSourcesGeometryId()
    {
        var broken = Model("Host");
        broken.Scene.Instances[0].GeometryId = 2;
        string host = Save("host", broken);
        string addition = Save("addition", Model("Services"));
        string output = Path.Combine(_scratch.FullName, "combined.html");

        Assert.Equal(3, Program.Main([host, "--add", addition, "--placement", "0,0,0,0", "-o", output]));
        Assert.False(File.Exists(output));
    }

    public void Dispose() => _scratch.Delete(recursive: true);
}
