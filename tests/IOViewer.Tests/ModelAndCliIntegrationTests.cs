using IOScene;
using IOViewer.Cli;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using RvtIO.Scene;
using Xunit;

namespace IOViewer.Tests;

// Console.Error and Console.Out are process-wide: tests that redirect them share one collection, so they never run in parallel.
[Collection("Console")]
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

    private const string Triangle = """
        v 0 0 0
        v 1 0 0
        v 0 1 0
        f 1 2 3
        """;

    [Fact]
    public void Cli_AnOutputThatCannotBeWritten_GivesExitCode3()
    {
        string root = Path.Combine(Path.GetTempPath(), $"test_cli_{Guid.NewGuid():N}");
        string obj = Path.Combine(root, "model.obj");
        string html = Path.Combine(root, "viewer.html");
        string folderAsHtml = Path.Combine(root, "folder.html");
        string folderAsJson = Path.Combine(root, "folder.json");
        string fileAsFolder = Path.Combine(root, "file");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            Directory.CreateDirectory(folderAsHtml);
            Directory.CreateDirectory(folderAsJson);
            File.WriteAllText(obj, Triangle);
            File.WriteAllText(fileAsFolder, "");
            Console.SetError(errors);

            // The page, the JSON output, the --json file and the output folder: each where a file or folder cannot be written.
            string inFile = Path.Combine(fileAsFolder, "viewer.html");
            (string[] Args, string Target)[] runs =
            [
                ([obj, "-o", folderAsHtml], folderAsHtml),
                ([obj, "-o", folderAsJson], folderAsJson),
                ([obj, "-o", html, "--json", folderAsJson], folderAsJson),
                ([obj, "-o", inFile], inFile),
            ];
            foreach (var (args, target) in runs)
            {
                errors.GetStringBuilder().Clear();
                int code = Program.Main(args);
                Assert.True(code == 3, $"{string.Join(' ', args)}: exit code {code}, {errors}");
                // The error names the output that failed, also when the exception of a file move does not.
                Assert.StartsWith($"Error: Failed to export '{obj}' to '{target}': ", errors.ToString());
                Assert.Empty(Directory.GetFiles(root, "*.tmp"));
            }
        }
        finally
        {
            Console.SetError(origErr);
            if (Directory.Exists(root)) Directory.Delete(root, recursive: true);
        }
    }

    [Fact]
    public void Cli_ServeThatCannotStart_GivesExitCode5AfterThePageIsWritten()
    {
        string obj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        string html = Path.ChangeExtension(obj, ".html");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            File.WriteAllText(obj, Triangle);
            Console.SetError(errors);

            // No server listens on a port above 65535, so the preview server fails before it opens a browser.
            int code = Program.Main([obj, "-o", html, "--serve", "70000"]);

            Assert.Equal(5, code);
            Assert.True(File.Exists(html));
            Assert.Contains("HTTP Server error", errors.ToString());
        }
        finally
        {
            Console.SetError(origErr);
            if (File.Exists(obj)) File.Delete(obj);
            if (File.Exists(html)) File.Delete(html);
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

    private const string Hostile = "\"></script><script>window.__xss=1</script>";

    // Project, site, building and storey; a wall box with Pset_WallCommon, a window without a style (drawn
    // translucent by its IFC class) and a proxy whose name and property set are hostile strings. Lengths in mm.
    private const string SmokeIfc = $"""
        ISO-10303-21;
        HEADER;
        FILE_DESCRIPTION((''),'2;1');
        FILE_NAME('smoke.ifc','2026-01-01T00:00:00',(''),(''),'','','');
        FILE_SCHEMA(('IFC2X3'));
        ENDSEC;
        DATA;
        #1=IFCPROJECT('0SmokeProject000000001',$,'Smoke',$,$,$,$,(#20),#10);
        #10=IFCUNITASSIGNMENT((#11));
        #11=IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.);
        #20=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#21,$);
        #21=IFCAXIS2PLACEMENT3D(#22,$,$);
        #22=IFCCARTESIANPOINT((0.,0.,0.));
        #30=IFCSITE('0SmokeSite000000000001',$,'Site',$,$,#31,$,$,.ELEMENT.,$,$,$,$,$);
        #31=IFCLOCALPLACEMENT($,#21);
        #32=IFCBUILDING('0SmokeBuilding00000001',$,'Building',$,$,#33,$,$,.ELEMENT.,$,$,$);
        #33=IFCLOCALPLACEMENT(#31,#21);
        #40=IFCBUILDINGSTOREY('0SmokeStorey0000000001',$,'Level 1',$,$,#41,$,$,.ELEMENT.,0.);
        #41=IFCLOCALPLACEMENT(#33,#21);
        #50=IFCRELAGGREGATES('0SmokeAggregates000001',$,$,$,#1,(#30));
        #51=IFCRELAGGREGATES('0SmokeAggregates000002',$,$,$,#30,(#32));
        #52=IFCRELAGGREGATES('0SmokeAggregates000003',$,$,$,#32,(#40));
        #100=IFCWALL('1SmokeWall000000000001',$,'Wall',$,$,#101,#102,$);
        #101=IFCLOCALPLACEMENT(#41,#21);
        #102=IFCPRODUCTDEFINITIONSHAPE($,$,(#103));
        #103=IFCSHAPEREPRESENTATION(#20,'Body','Brep',(#104));
        #104=IFCFACETEDBREP(#105);
        #105=IFCCLOSEDSHELL((#110,#111,#112,#113,#114,#115));
        #110=IFCFACE((#120));
        #111=IFCFACE((#121));
        #112=IFCFACE((#122));
        #113=IFCFACE((#123));
        #114=IFCFACE((#124));
        #115=IFCFACE((#125));
        #120=IFCFACEOUTERBOUND(#130,.T.);
        #121=IFCFACEOUTERBOUND(#131,.T.);
        #122=IFCFACEOUTERBOUND(#132,.T.);
        #123=IFCFACEOUTERBOUND(#133,.T.);
        #124=IFCFACEOUTERBOUND(#134,.T.);
        #125=IFCFACEOUTERBOUND(#135,.T.);
        #130=IFCPOLYLOOP((#200,#203,#202,#201));
        #131=IFCPOLYLOOP((#204,#205,#206,#207));
        #132=IFCPOLYLOOP((#200,#201,#205,#204));
        #133=IFCPOLYLOOP((#201,#202,#206,#205));
        #134=IFCPOLYLOOP((#202,#203,#207,#206));
        #135=IFCPOLYLOOP((#203,#200,#204,#207));
        #200=IFCCARTESIANPOINT((0.,0.,0.));
        #201=IFCCARTESIANPOINT((4000.,0.,0.));
        #202=IFCCARTESIANPOINT((4000.,200.,0.));
        #203=IFCCARTESIANPOINT((0.,200.,0.));
        #204=IFCCARTESIANPOINT((0.,0.,3000.));
        #205=IFCCARTESIANPOINT((4000.,0.,3000.));
        #206=IFCCARTESIANPOINT((4000.,200.,3000.));
        #207=IFCCARTESIANPOINT((0.,200.,3000.));
        #300=IFCPROPERTYSINGLEVALUE('FireRating',$,IFCLABEL('EI 60'),$);
        #301=IFCPROPERTYSET('2SmokePsetWall00000001',$,'Pset_WallCommon',$,(#300));
        #302=IFCRELDEFINESBYPROPERTIES('2SmokeDefinesWall00001',$,$,$,(#100),#301);
        #400=IFCWINDOW('1SmokeWindow0000000001',$,'Window',$,$,#401,#402,$,1000.,1000.);
        #401=IFCLOCALPLACEMENT(#41,#403);
        #403=IFCAXIS2PLACEMENT3D(#404,$,$);
        #404=IFCCARTESIANPOINT((0.,-1000.,0.));
        #402=IFCPRODUCTDEFINITIONSHAPE($,$,(#405));
        #405=IFCSHAPEREPRESENTATION(#20,'Body','Brep',(#406));
        #406=IFCFACETEDBREP(#105);
        #500=IFCBUILDINGELEMENTPROXY('1SmokeHostile000000001',$,'{Hostile}',$,$,#501,#502,$,$);
        #501=IFCLOCALPLACEMENT(#41,#503);
        #503=IFCAXIS2PLACEMENT3D(#504,$,$);
        #504=IFCCARTESIANPOINT((0.,1000.,0.));
        #502=IFCPRODUCTDEFINITIONSHAPE($,$,(#505));
        #505=IFCSHAPEREPRESENTATION(#20,'Body','Brep',(#506));
        #506=IFCFACETEDBREP(#105);
        #510=IFCPROPERTYSINGLEVALUE('{Hostile}',$,IFCLABEL('{Hostile}'),$);
        #511=IFCPROPERTYSET('2SmokePsetHostile00001',$,'{Hostile}',$,(#510));
        #512=IFCRELDEFINESBYPROPERTIES('2SmokeDefinesHostile01',$,$,$,(#500),#511);
        #600=IFCRELCONTAINEDINSPATIALSTRUCTURE('2SmokeContainment00001',$,$,$,(#100,#400,#500),#40);
        ENDSEC;
        END-ISO-10303-21;
        """;

    [Fact]
    public void Cli_ConvertIfcToHtml_ReadsTheModelThroughIfcIO()
    {
        var tempIfc = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.ifc");
        var tempHtml = Path.ChangeExtension(tempIfc, ".html");
        var tempJson = Path.ChangeExtension(tempIfc, ".json");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            File.WriteAllText(tempIfc, SmokeIfc);
            Console.SetError(errors);

            int code = Program.Main([tempIfc, "--json", tempJson]);

            Assert.Equal(0, code);
            Assert.Equal("", errors.ToString());
            var scene = JsonViewerImporter.Load(tempJson).Scene;
            Assert.Empty(scene.Validate());
            Assert.Equal(Path.GetFileName(tempIfc), Assert.Single(scene.Models).Key);

            var view = ViewerHtml.Parse(File.ReadAllText(tempHtml));
            Assert.Equal("Smoke", view.Meta.GetProperty("title").GetString());
            Assert.Equal(3, view.InstanceCount);
            var elements = view.Meta.GetProperty("elements").EnumerateArray().ToList();

            // The wall's property set and GlobalId reach the page.
            Assert.Equal("EI 60", view.Props.GetProperty("100").GetProperty("Pset_WallCommon").GetProperty("FireRating").GetString());
            var wall = Assert.Single(elements, e => e.GetProperty("id").GetInt64() == 100);
            Assert.Equal("1SmokeWall000000000001", wall.GetProperty("sourceId").GetString());

            // Hostile names and values are kept as data and escaped in the page.
            Assert.Equal(Hostile, view.Props.GetProperty("500").GetProperty(Hostile).GetProperty(Hostile).GetString());
            Assert.Equal(Hostile, Assert.Single(elements, e => e.GetProperty("id").GetInt64() == 500).GetProperty("name").GetString());
            Assert.DoesNotContain(Hostile, view.Html, StringComparison.Ordinal);

            // The window has no style, so it is drawn in its class colour at half opacity (alpha 128 of 255).
            Assert.Contains(
                view.Meta.GetProperty("materials").EnumerateArray(),
                m => Math.Abs(m.GetProperty("opacity").GetDouble() - 128 / 255.0) < 1e-6);
        }
        finally
        {
            Console.SetError(origErr);
            foreach (var file in new[] { tempIfc, tempHtml, tempJson })
            {
                if (File.Exists(file)) File.Delete(file);
            }
        }
    }

    [Fact]
    public void Cli_AdapterDiagnostics_AreReportedOncePerSeverityAndKind()
    {
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            Console.SetError(errors);

            Program.FromScene("model.rvt", new SceneDocument(),
            [
                new(SceneSeverity.Error, "read-cut", "Cut one."),
                new(SceneSeverity.Error, "read-cut", "Cut two."),
                new(SceneSeverity.Warning, "read-cut", "Cut warning."),
                new(SceneSeverity.Warning, "no-geometry", "No geometry."),
                new(SceneSeverity.Info, "skipped", "Skipped."),
                new(SceneSeverity.Warning, "empty-mesh", "Element 'x\u001b]0;t\u0007\r\nError: forged‮gpj.exe' has no mesh."),
            ]);

            Assert.Equal(
                string.Join(Environment.NewLine,
                    "Error: read-cut: Cut one. (1 more)",
                    "Warning: read-cut: Cut warning.",
                    "Warning: no-geometry: No geometry.",
                    "Warning: empty-mesh: Element 'x?]0;t???Error: forged?gpj.exe' has no mesh.",
                    ""),
                errors.ToString());
        }
        finally
        {
            Console.SetError(origErr);
        }
    }

    [Fact]
    public void Cli_Printable_ReplacesControlAndFormatCharactersOnly()
    {
        Assert.Equal("Стена 1 «A» ?? ? ? ? ?? 😀", Program.Printable("Стена 1 «A» \t\n \u0085 ⁦ ​ \U000E0041\U000E007F 😀"));
    }

    [Fact]
    public void Cli_ExitCode_IsFourOnlyWhenTheAdapterReportedAnError()
    {
        Assert.Equal(0, Program.ExitCode([]));
        Assert.Equal(0, Program.ExitCode(
        [
            new(SceneSeverity.Warning, "no-geometry", "No geometry."),
            new(SceneSeverity.Info, "skipped", "Skipped."),
        ]));
        Assert.Equal(4, Program.ExitCode(
        [
            new(SceneSeverity.Warning, "no-geometry", "No geometry."),
            new(SceneSeverity.Error, "read-cut", "Cut."),
        ]));
    }

    // A real Revit file cannot be committed; run with IOVIEWER_RVT_FILE set to one before a release.
    [RvtFileFact]
    public void Cli_ConvertRvtToHtml_ReadsTheModelThroughRvtIO()
    {
        var rvt = Environment.GetEnvironmentVariable(RvtFileFactAttribute.Variable)!;
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        var tempJson = Path.ChangeExtension(tempHtml, ".json");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            Console.SetError(errors);
            int code = Program.Main([rvt, "-o", tempHtml, "--json", tempJson]);
            Console.SetError(origErr);

            // An engine error still writes both outputs and gives exit code 4; anything else must be a clean 0.
            bool engineError = RvtSceneReader.Read(rvt).Diagnostics.Any(d => d.Severity == SceneSeverity.Error);
            Assert.True(code == (engineError ? 4 : 0), $"exit code {code}: {errors}");
            Assert.Empty(JsonViewerImporter.Load(tempJson).Scene.Validate());
            Assert.True(ViewerHtml.Parse(File.ReadAllText(tempHtml)).InstanceCount > 0);
        }
        finally
        {
            Console.SetError(origErr);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
            if (File.Exists(tempJson)) File.Delete(tempJson);
        }
    }

    private sealed class RvtFileFactAttribute : FactAttribute
    {
        public const string Variable = "IOVIEWER_RVT_FILE";

        public RvtFileFactAttribute()
        {
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable(Variable)))
            {
                Skip = $"Set {Variable} to the path of a Revit 2022 file to run this test.";
            }
        }
    }
}
