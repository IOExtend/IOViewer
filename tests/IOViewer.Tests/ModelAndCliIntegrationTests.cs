using IOScene;
using IOViewer.Cli;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class ModelAndCliIntegrationTests
{
    [Fact]
    public void Cli_ConvertObjToHtml_CreatesValidViewerFile()
    {
        const string objData = """
            o TriangularPyramid
            v 0 0 0
            v 5 0 0
            v 2.5 5 0
            v 2.5 2.5 4
            f 1 2 3
            f 1 2 4
            f 2 3 4
            f 3 1 4
            """;

        var tempObj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        try
        {
            File.WriteAllText(tempObj, objData);

            int code = Program.Main(new[] { tempObj, "-o", tempHtml, "--title", "Pyramid Test", "--wireframe" });
            Assert.Equal(0, code);

            Assert.True(File.Exists(tempHtml));
            var view = ViewerHtml.Parse(File.ReadAllText(tempHtml));
            Assert.Equal("Pyramid Test", view.Meta.GetProperty("title").GetString());
            Assert.True(view.Meta.GetProperty("options").GetProperty("initialWireframe").GetBoolean());
            Assert.Equal(1, view.InstanceCount);
            Assert.Equal(12, view.Positions(view.Geometries[0]).Length);
            Assert.Equal(12, view.Read(view.Geometries[0].GetProperty("indices")).Length);
        }
        finally
        {
            if (File.Exists(tempObj)) File.Delete(tempObj);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
        }
    }

    [Fact]
    public void Cli_ConvertObjToJson_CreatesValidJsonSnapshot()
    {
        const string objData = """
            o SamplePart
            v 1 1 1
            v 2 1 1
            v 1 2 1
            f 1 2 3
            """;

        var tempObj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        var tempJson = Path.Combine(Path.GetTempPath(), $"test_snapshot_{Guid.NewGuid():N}.json");
        try
        {
            File.WriteAllText(tempObj, objData);

            int code = Program.Main(new[] { tempObj, "-o", tempJson, "--title", "Snapshot Test" });
            Assert.Equal(0, code);

            Assert.True(File.Exists(tempJson));
            string json = File.ReadAllText(tempJson);
            Assert.Contains("Snapshot Test", json);
            Assert.Contains("SamplePart", json);
        }
        finally
        {
            if (File.Exists(tempObj)) File.Delete(tempObj);
            if (File.Exists(tempJson)) File.Delete(tempJson);
        }
    }

    [Fact]
    public void Cli_InvalidObjFace_FailsAtLoadAndKeepsExistingOutput()
    {
        // The OBJ importer rejects the face itself, so this covers the load-time failure path.
        const string objData = """
            v 0 0 0
            v 1 0 0
            v 0 1 0
            f 1 2 9
            """;

        var tempObj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            File.WriteAllText(tempObj, objData);
            File.WriteAllText(tempHtml, "previous export");
            Console.SetError(errors);

            int code = Program.Main(new[] { tempObj, "-o", tempHtml });

            Assert.Equal(3, code);
            Assert.Equal("previous export", File.ReadAllText(tempHtml));
            string message = errors.ToString().TrimEnd();
            Assert.Contains("outside the 3 vertices", message, StringComparison.Ordinal);
            Assert.DoesNotContain(Environment.NewLine, message, StringComparison.Ordinal);
        }
        finally
        {
            Console.SetError(origErr);
            if (File.Exists(tempObj)) File.Delete(tempObj);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
        }
    }

    [Fact]
    public void Cli_InvalidGeometryInJson_FailsAtExportAndKeepsExistingOutput()
    {
        // The JSON importer does not validate indices, so the HTML writer is the one that rejects them.
        var scene = TestScenes.Empty("Bad indices");
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 9]);
        var doc = new ViewerDocument(scene);

        var tempJson = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.json");
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            JsonViewerExporter.Save(doc, tempJson);
            File.WriteAllText(tempHtml, "previous export");
            Console.SetError(errors);

            int code = Program.Main(new[] { tempJson, "-o", tempHtml });

            Assert.Equal(3, code);
            Assert.Equal("previous export", File.ReadAllText(tempHtml));
            string message = errors.ToString().TrimEnd();
            Assert.StartsWith("Error: Failed to export", message, StringComparison.Ordinal);
            Assert.Contains("outside the 3 vertices", message, StringComparison.Ordinal);
        }
        finally
        {
            Console.SetError(origErr);
            if (File.Exists(tempJson)) File.Delete(tempJson);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
        }
    }

    [Theory]
    [InlineData("viewer")]
    [InlineData("scene")]
    [InlineData("legacy")]
    public void Cli_ConvertsEveryJsonKindToHtml(string kind)
    {
        var scene = TestScenes.Empty("Json kinds");
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.Place(scene.Geometry([new(0, 0, 0), new(0, 0, 1)], [], topology: SceneTopology.Lines));

        var tempJson = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.json");
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            switch (kind)
            {
                case "viewer": JsonViewerExporter.Save(new ViewerDocument(scene), tempJson); break;
                case "scene": SceneJson.Save(scene, tempJson); break;
                default: File.Copy(Path.Combine(AppContext.BaseDirectory, "legacy-0.2", "escaping.json"), tempJson); break;
            }
            Console.SetError(errors);

            int code = Program.Main([tempJson, "-o", tempHtml]);

            Assert.Equal(0, code);
            var view = ViewerHtml.Parse(File.ReadAllText(tempHtml));
            Assert.Equal(kind == "legacy" ? 3 : 1, view.InstanceCount);
            Assert.Equal(kind == "legacy" ? "" : "Warning: 1 meshes of lines, points or an unknown kind are not shown; the viewer draws triangles only.",
                errors.ToString().Trim());
        }
        finally
        {
            Console.SetError(origErr);
            if (File.Exists(tempJson)) File.Delete(tempJson);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
        }
    }
}
