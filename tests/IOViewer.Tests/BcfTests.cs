using System.IO.Compression;
using IOScene;
using IOViewer.Cli;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

[Collection("Console")]
public sealed class BcfTests : IDisposable
{
    private static readonly string Fixture = Path.Combine(AppContext.BaseDirectory, "bcf", "review.bcfzip");
    private readonly DirectoryInfo _scratch = Directory.CreateTempSubdirectory("ioviewer-bcf-");

    private static SceneDocument Scene()
    {
        var scene = TestScenes.Empty("BCF model");
        scene.Models[0].SourceFormat = "rvt";
        for (var i = 0; i < 5; i++)
            scene.AddMesh($"Element {i + 1}", [new(i, 0, 0), new(i + 1, 0, 0), new(i, 1, 0)], [0, 1, 2]);
        scene.Elements[0].IfcGuid = "2xQ$n5SLP5MBLyL442paFx";
        scene.Elements[1].IfcGuid = "1111111111111111111111";
        scene.Elements[2].IfcGuid = scene.Elements[3].IfcGuid = "3333333333333333333333";
        scene.Elements[4].SourceId = "11111111-0000-4000-8000-000000000000-00000001";
        return scene;
    }

    [Fact]
    public void Bcf_CliKeepsReferenceWarningsAndAppliesSupportedViewpointState()
    {
        string input = Path.Combine(_scratch.FullName, "scene.json");
        string output = Path.Combine(_scratch.FullName, "scene.html");
        string snapshot = Path.Combine(_scratch.FullName, "snapshot.json");
        JsonViewerExporter.Save(new ViewerDocument(Scene()), input);

        using var warnings = new StringWriter();
        var previous = Console.Error;
        try
        {
            Console.SetError(warnings);
            Assert.Equal(0, Program.Main([input, "--bcf", Fixture, "-o", output, "--json", snapshot]));
        }
        finally { Console.SetError(previous); }
        Assert.Contains("1 missing and 1 ambiguous", warnings.ToString());
        Assert.Contains("missing or invalid viewpoint reference", warnings.ToString());

        var parsed = ViewerHtml.Parse(File.ReadAllText(output));
        var topics = parsed.Meta.GetProperty("bcfTopics");
        Assert.Equal("Inspect supply duct <review>", topics[0].GetProperty("title").GetString());
        Assert.Equal("Open", topics[0].GetProperty("status").GetString());
        Assert.Equal(0, topics[1].GetProperty("viewpoints").GetArrayLength());
        var views = topics[0].GetProperty("viewpoints");
        Assert.Equal(55, views[0].GetProperty("camera").GetProperty("fov").GetDouble(), 9);
        Assert.Equal([0, 4], views[0].GetProperty("selectedElements").EnumerateArray().Select(e => e.GetInt32()).Order());
        Assert.Equal(1, views[0].GetProperty("hiddenElements")[0].GetInt32());
        Assert.Equal(1, views[0].GetProperty("sections").GetProperty("planes").GetArrayLength());
        Assert.Equal(12, views[1].GetProperty("camera").GetProperty("orthographicHeight").GetDouble());
        Assert.Equal(0, views[1].GetProperty("visibleElements")[0].GetInt32());
        Assert.Equal(0, views[1].GetProperty("sections").GetProperty("planes").GetArrayLength());
        Assert.Equal(0, parsed.Meta.GetProperty("viewpoints").GetArrayLength());

        var reexported = ViewerHtml.Export(JsonViewerImporter.Load(snapshot));
        Assert.Equal(topics.GetRawText(), reexported.Meta.GetProperty("bcfTopics").GetRawText());
    }

    [Theory]
    [InlineData("version")]
    [InlineData("size")]
    [InlineData("entries")]
    [InlineData("xml")]
    public void Bcf_InvalidArchiveLeavesAnExistingOutputUntouched(string problem)
    {
        string input = Path.Combine(_scratch.FullName, "scene.json");
        string output = Path.Combine(_scratch.FullName, "view.html");
        string archive = Path.Combine(_scratch.FullName, "bad.bcfzip");
        JsonViewerExporter.Save(new ViewerDocument(Scene()), input);
        File.WriteAllText(output, "previous view");
        using (var zip = ZipFile.Open(archive, ZipArchiveMode.Create))
        {
            using (var version = new StreamWriter(zip.CreateEntry("bcf.version").Open()))
                version.Write(problem == "version" ? "<Version VersionId=\"3.0\"/>" : "<Version VersionId=\"2.1\"/>");
            if (problem == "entries")
                for (int i = 0; i < 4096; i++) zip.CreateEntry($"snapshot-{i}.png");
            else
            {
                using var entry = new StreamWriter(zip.CreateEntry("10000000-0000-4000-8000-000000000001/markup.bcf").Open());
                entry.Write(problem == "size" ? new string(' ', 2 * 1024 * 1024 + 1) : "<!DOCTYPE Markup><Markup/>");
            }
        }
        Assert.Equal(3, Program.Main([input, "--bcf", archive, "-o", output]));
        Assert.Equal("previous view", File.ReadAllText(output));
    }

    public void Dispose() => _scratch.Delete(recursive: true);
}
