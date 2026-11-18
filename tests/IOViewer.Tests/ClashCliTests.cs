using IOScene;
using IOViewer.Cli;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

[Collection("Console")]
public sealed class ClashCliTests : IDisposable
{
    private readonly DirectoryInfo _scratch = Directory.CreateTempSubdirectory("ioviewer-clash-");

    [Fact]
    public void HardClashes_CheckPlacedModelsAndPreserveExistingResults()
    {
        var host = Model("Walls");
        host.ClashTests.Add(new() { Name = "Previous check" });
        string input = Save("host", host);
        string addition = Save("services", Model("Mechanical Equipment"));
        string html = InScratch("results.html");
        string snapshot = InScratch("results.json");

        Assert.Equal(0, Program.Main([input, "--add", addition, "--placement", "0.25,0,0,0",
            "--clash", "Walls", "Mechanical Equipment", "-o", html, "--json", snapshot]));

        var tests = JsonViewerImporter.Load(snapshot).Scene.ClashTests;
        Assert.Equal("Previous check", tests[0].Name);
        var result = Assert.Single(tests[1].Clashes);
        Assert.Equal((1L, 2L), (result.Element1Id, result.Element2Id));
        Assert.Equal(-0.75, result.Distance);
        Assert.InRange(result.Point.X, 0.25, 1);
        Assert.Equal(SceneClashStatus.New, result.Status);

        var view = ViewerHtml.Parse(File.ReadAllText(html));
        var embedded = view.Meta.GetProperty("clashTests")[1].GetProperty("clashes")[0];
        Assert.Equal(1, embedded.GetProperty("element1Id").GetInt64());
        Assert.Equal(2, embedded.GetProperty("element2Id").GetInt64());
        Assert.Equal(result.Distance, embedded.GetProperty("distance").GetDouble());
        Assert.Equal(result.Point.X, embedded.GetProperty("point")[0].GetDouble()
            + view.Meta.GetProperty("rtcOffset")[0].GetDouble(), 8);
    }

    [Theory]
    [InlineData("0.125", true)]
    [InlineData("0.124", false)]
    public void Clearance_UsesInclusiveSurfaceDistanceAndStoresGapMidpoint(string limit, bool found)
    {
        var scene = Model("Walls");
        scene.Place(scene.Geometries[0], Transform3d.Translate(new(1.125, 0, 0)));
        scene.Elements[1].Category = "Floors";
        string input = Save("source", scene);
        string output = InScratch("results.json");

        Assert.Equal(0, Program.Main([input, "--clash-clearance", limit, "--clash", "Walls", "Floors", "-o", output]));

        var results = Assert.Single(JsonViewerImporter.Load(output).Scene.ClashTests).Clashes;
        if (found)
        {
            var result = Assert.Single(results);
            Assert.Equal((1L, 2L), (result.Element1Id, result.Element2Id));
            Assert.Equal(0.125, result.Distance);
            Assert.Equal(new Vector3d(1.0625, 0, 0), result.Point);
        }
        else Assert.Empty(results);
    }

    [Fact]
    public void SameCategory_ReportsAnUnorderedPairOnce()
    {
        var scene = Model("Walls");
        scene.Place(scene.Geometries[0], Transform3d.Translate(new(0.25, 0, 0)));
        scene.Elements[1].Category = "Walls";
        string input = Save("source", scene);
        string output = InScratch("results.json");

        Assert.Equal(0, Program.Main([input, "--clash", "Walls", "Walls", "-o", output]));

        var result = Assert.Single(Assert.Single(JsonViewerImporter.Load(output).Scene.ClashTests).Clashes);
        Assert.Equal((1L, 2L), (result.Element1Id, result.Element2Id));
    }

    [Theory]
    [InlineData("--clash", "Walls")]
    [InlineData("--clash-clearance", "0.125")]
    [InlineData("--clash", "Walls", "missing category")]
    [InlineData("--clash", "Walls", "Walls", "--clash", "Walls", "Walls")]
    [InlineData("--clash", "Walls", "Walls", "--clash-clearance", "NaN")]
    [InlineData("--clash", "Walls", "Walls", "--clash-clearance", "-1")]
    public void InvalidClashArguments_LeaveAnExistingOutputUntouched(params string[] options)
    {
        string input = Save("source", Model("Walls"));
        string output = InScratch("results.json");
        File.WriteAllText(output, "existing");

        Assert.Equal(1, Program.Main([input, "-o", output, .. options]));
        Assert.Equal("existing", File.ReadAllText(output));
    }

    [Fact]
    public void InvalidScene_LeavesAnExistingOutputUntouched()
    {
        var scene = Model("Walls");
        scene.Elements[0].ParentId = 42;
        string input = Save("source", scene);
        string output = InScratch("results.json");
        File.WriteAllText(output, "existing");

        Assert.Equal(3, Program.Main([input, "--clash", "Walls", "Walls", "-o", output]));
        Assert.Equal("existing", File.ReadAllText(output));
    }

    private static SceneDocument Model(string category)
    {
        var scene = TestScenes.Empty(category);
        scene.Mesh([Vector3d.Zero, Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ],
            [0, 2, 1, 0, 1, 3, 0, 3, 2, 1, 2, 3]);
        scene.Elements[0].Category = category;
        return scene;
    }

    private string InScratch(string name) => Path.Combine(_scratch.FullName, name);

    private string Save(string name, SceneDocument scene)
    {
        string path = InScratch(name + ".json");
        JsonViewerExporter.Save(new ViewerDocument(scene), path);
        return path;
    }

    public void Dispose() => _scratch.Delete(recursive: true);
}
