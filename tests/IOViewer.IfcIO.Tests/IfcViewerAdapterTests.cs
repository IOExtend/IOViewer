using System.Globalization;
using IfcIO;
using IfcIO.Geometry;
using IfcIO.Model;
using IfcIO.Schema;
using IOViewer.Exporters;
using IOViewer.Model;
using IOViewer.Tests;
using Xunit;

namespace IOViewer.IfcIO.Tests;

public class IfcViewerAdapterTests
{
    private const string Millimetre = "#11=IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.);";
    private const string Foot = """
        #11=IFCCONVERSIONBASEDUNIT(#12,.LENGTHUNIT.,'FOOT',#13);
        #12=IFCDIMENSIONALEXPONENTS(1,0,0,0,0,0,0);
        #13=IFCMEASUREWITHUNIT(IFCLENGTHMEASURE(0.3048),#14);
        #14=IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);
        """;
    private const string Hostile = "\"></script><script>window.__xss=1</script>";

    // Site far from the origin; storey 3000 up; Panel placed at (10,20,0) in the storey and styled red.
    // Fitting A and B draw one representation map (origin (0,0,100)); B's mapping moves it by (0,250,0).
    private static string PlacedIfc(string lengthUnit) => $"""
        ISO-10303-21;
        HEADER;
        FILE_DESCRIPTION((''),'2;1');
        FILE_NAME('adapter.ifc','2026-01-01T00:00:00',(''),(''),'','','');
        FILE_SCHEMA(('IFC2X3'));
        ENDSEC;
        DATA;
        #1=IFCPROJECT('0AdapterProject0000001',$,'Adapter',$,$,$,$,(#20),#10);
        #10=IFCUNITASSIGNMENT((#11));
        {lengthUnit}
        #20=IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05,#21,$);
        #21=IFCAXIS2PLACEMENT3D(#22,$,$);
        #22=IFCCARTESIANPOINT((0.,0.,0.));
        #30=IFCSITE('0AdapterSite0000000001',$,'Site',$,$,#31,$,$,.ELEMENT.,$,$,$,$,$);
        #31=IFCLOCALPLACEMENT($,#32);
        #32=IFCAXIS2PLACEMENT3D(#33,$,$);
        #33=IFCCARTESIANPOINT((412345678.,2000.,0.));
        #40=IFCBUILDINGSTOREY('0AdapterStorey00000001',$,'Level 1',$,$,#41,$,$,.ELEMENT.,3000.);
        #41=IFCLOCALPLACEMENT(#31,#42);
        #42=IFCAXIS2PLACEMENT3D(#43,$,$);
        #43=IFCCARTESIANPOINT((0.,0.,3000.));
        #100=IFCBUILDINGELEMENTPROXY('1AdapterPanel000000001',$,'Panel',$,$,#101,#103,$,$);
        #101=IFCLOCALPLACEMENT(#41,#102);
        #102=IFCAXIS2PLACEMENT3D(#104,$,$);
        #104=IFCCARTESIANPOINT((10.,20.,0.));
        #103=IFCPRODUCTDEFINITIONSHAPE($,$,(#105));
        #105=IFCSHAPEREPRESENTATION(#20,'Body','Brep',(#106));
        #106=IFCFACETEDBREP(#107);
        #107=IFCCLOSEDSHELL((#108));
        #108=IFCFACE((#109));
        #109=IFCFACEOUTERBOUND(#110,.T.);
        #110=IFCPOLYLOOP((#22,#111,#112));
        #111=IFCCARTESIANPOINT((100.,0.,0.));
        #112=IFCCARTESIANPOINT((0.,100.,0.));
        #120=IFCCOLOURRGB($,1.,0.,0.);
        #121=IFCSURFACESTYLESHADING(#120);
        #122=IFCSURFACESTYLE('Red',.BOTH.,(#121));
        #123=IFCSTYLEDITEM(#106,(#122),$);
        #200=IFCREPRESENTATIONMAP(#201,#203);
        #201=IFCAXIS2PLACEMENT3D(#202,$,$);
        #202=IFCCARTESIANPOINT((0.,0.,100.));
        #203=IFCSHAPEREPRESENTATION(#20,'Body','Brep',(#204));
        #204=IFCFACETEDBREP(#107);
        #300=IFCFLOWFITTING('1AdapterFittingA000001',$,'Fitting A',$,$,#301,#303,$);
        #301=IFCLOCALPLACEMENT($,#302);
        #302=IFCAXIS2PLACEMENT3D(#304,$,$);
        #304=IFCCARTESIANPOINT((500.,0.,0.));
        #303=IFCPRODUCTDEFINITIONSHAPE($,$,(#305));
        #305=IFCSHAPEREPRESENTATION(#20,'Body','MappedRepresentation',(#306));
        #306=IFCMAPPEDITEM(#200,#307);
        #307=IFCCARTESIANTRANSFORMATIONOPERATOR3D($,$,#22,$,$);
        #310=IFCFLOWFITTING('1AdapterFittingB000001',$,'Fitting B',$,$,#301,#313,$);
        #313=IFCPRODUCTDEFINITIONSHAPE($,$,(#315));
        #315=IFCSHAPEREPRESENTATION(#20,'Body','MappedRepresentation',(#316));
        #316=IFCMAPPEDITEM(#200,#317);
        #317=IFCCARTESIANTRANSFORMATIONOPERATOR3D($,$,#318,$,$);
        #318=IFCCARTESIANPOINT((0.,250.,0.));
        #400=IFCRELCONTAINEDINSPATIALSTRUCTURE('2AdapterContainment001',$,$,$,(#100,#300,#310),#40);
        ENDSEC;
        END-ISO-10303-21;
        """;

    private static readonly Vector3d[] Triangle = [new(0, 0, 0), new(100, 0, 0), new(0, 100, 0)];

    [Theory]
    [InlineData(Millimetre, IfcLengthUnit.Millimetre, 0.001)]
    [InlineData(Foot, IfcLengthUnit.Foot, 0.3048)]
    public void Convert_PlacedAndMappedElements_LandInWorldMetres(string lengthUnit, IfcLengthUnit expectedUnit, double metres)
    {
        var model = OpenText(PlacedIfc(lengthUnit));

        var conversion = IfcViewerAdapter.Convert(model);
        var doc = conversion.Document;

        Assert.Equal(expectedUnit, conversion.LengthUnit);
        Assert.Equal(metres, conversion.MetresPerUnit);
        AssertPoints(Offset(new(412345678 + 10, 2000 + 20, 3000), metres), MeshOf(doc, 100).Vertices);
        AssertPoints(Offset(new(500, 0, 100), metres), MeshOf(doc, 300).Vertices);
        AssertPoints(Offset(new(500, 250, 100), metres), MeshOf(doc, 310).Vertices);

        // IfcIO bakes mapped items into world meshes: the two fittings are two own meshes, nothing is shared.
        Assert.Empty(doc.Geometries);
        Assert.Equal(3, conversion.OwnMeshes);
        Assert.All(doc.Meshes, m => Assert.Null(m.Transform));

        var panel = Assert.Single(doc.Elements, e => e.Id == 100);
        Assert.Equal("1AdapterPanel000000001", panel.SourceId);
        Assert.Equal("IFCBUILDINGELEMENTPROXY", panel.Category);
        Assert.Equal("Level 1", panel.Level);
        var red = Assert.Single(doc.Materials);
        Assert.Equal(new RgbaColor(255, 0, 0), red.Color);
        Assert.Equal(red.Id, MeshOf(doc, 100).MaterialId);
    }

    [Theory]
    [InlineData(IfcLengthUnit.Millimetre, 0.001)]
    [InlineData(IfcLengthUnit.Metre, 1.0)]
    public void Convert_SavedModel_ScalesFromItsLengthUnit(IfcLengthUnit unit, double metres)
    {
        var model = IfcModel.Create("Units");
        model.LengthUnit = unit;
        model.AddMesh("Slab", [new(1000, 0, 0), new(2000, 0, 0), new(1000, 1500, 250)], [0, 1, 2], ifcType: "IFCSLAB");
        var opened = SaveAndOpen(model);

        var conversion = IfcViewerAdapter.Convert(opened);

        Assert.Equal(unit, conversion.LengthUnit);
        var source = Assert.Single(opened.AllElements).Mesh!.Vertices;
        var vertices = Assert.Single(conversion.Document.Meshes).Vertices;
        Assert.Equal(source.Select(v => new Vector3d(v.X * metres, v.Y * metres, v.Z * metres)), vertices);
        Assert.Equal(new Vector3d(2000 * metres, 1500 * metres, 250 * metres), conversion.Document.BoundingBox.Max);
    }

    [Fact]
    public void Convert_SavedModel_KeepsPropertiesQuantitiesGlobalIdsAndReportsElementsWithoutGeometry()
    {
        var model = IfcModel.Create("Properties");
        var storey = model.AddStorey("Level 2", 3000);
        var wall = model.AddMesh("Wall", Mm(Triangle), [0, 1, 2], new IfcMaterial { Name = "Brick", R = 1, G = 0.5, B = 0 }, storey, "IFCWALL");
        wall.GetOrCreatePropertySet("Pset_WallCommon").Add("FireRating", "EI 60");
        wall.GetOrCreateQuantitySet("Qto_WallBaseQuantities").AddLength("Length", 3000.5);
        model.AddElement(new IfcElement { Id = 2, Name = "Annotation" }, storey);
        var opened = SaveAndOpen(model);
        var openedWall = Assert.Single(opened.AllElements, e => e.Name == "Wall");
        var openedEmpty = Assert.Single(opened.AllElements, e => e.Name == "Annotation");

        var conversion = IfcViewerAdapter.Convert(opened);
        var doc = conversion.Document;

        var element = Assert.Single(doc.Elements, e => e.Id == openedWall.Id);
        Assert.False(string.IsNullOrEmpty(openedWall.GlobalId));
        Assert.Equal(openedWall.GlobalId, element.SourceId);
        Assert.Equal("IFCWALL", element.Category);
        Assert.Equal("Level 2", element.Level);
        Assert.Equal("EI 60", element.Properties["Pset_WallCommon"]["FireRating"]);
        Assert.Equal("3000.5", element.Properties["Qto_WallBaseQuantities"]["Length"]);
        var brick = Assert.Single(doc.Materials);
        Assert.Equal(new RgbaColor(255, 128, 0), brick.Color);
        Assert.Equal(1.0, brick.Opacity);

        Assert.Equal(2, conversion.ElementCount);
        Assert.Equal(1, conversion.ElementsWithGeometry);
        Assert.Equal(
            new IfcViewerElementWithoutGeometry(openedEmpty.Id, openedEmpty.GlobalId, IfcViewerGeometryIssue.NoGeometry),
            Assert.Single(conversion.ElementsWithoutGeometry));
        Assert.Empty(Assert.Single(doc.Elements, e => e.Id == openedEmpty.Id).MeshIndices);

        var view = ViewerHtml.Export(doc);
        string id = openedWall.Id.ToString(CultureInfo.InvariantCulture);
        Assert.Equal("EI 60", view.Props.GetProperty(id).GetProperty("Pset_WallCommon").GetProperty("FireRating").GetString());
        var meta = Assert.Single(view.Meta.GetProperty("elements").EnumerateArray(), e => e.GetProperty("id").GetInt64() == openedWall.Id);
        Assert.Equal(openedWall.GlobalId, meta.GetProperty("sourceId").GetString());
    }

    [Fact]
    public void Convert_HostileStrings_AreEscapedInHtml()
    {
        var model = IfcModel.Create("Hostile");
        var wall = model.AddMesh(Hostile, Mm(Triangle), [0, 1, 2], ifcType: "IFCWALL");
        wall.GetOrCreatePropertySet(Hostile).Add(Hostile, Hostile);
        var opened = SaveAndOpen(model);
        var openedWall = Assert.Single(opened.AllElements);

        var view = ViewerHtml.Export(IfcViewerAdapter.ToViewerDocument(opened));

        string id = openedWall.Id.ToString(CultureInfo.InvariantCulture);
        Assert.Equal(Hostile, view.Props.GetProperty(id).GetProperty(Hostile).GetProperty(Hostile).GetString());
        Assert.Equal(Hostile, Assert.Single(view.Meta.GetProperty("elements").EnumerateArray()).GetProperty("name").GetString());
        Assert.DoesNotContain(Hostile, view.Html, StringComparison.Ordinal);
    }

    [Fact]
    public void Convert_MaterialAlpha_BecomesOpacityAndElementsWithoutMaterialGetClassColour()
    {
        // IfcIO does not read transparency from files yet, so the material is set in memory.
        var model = IfcModel.Create("Glass");
        model.AddMesh("Pane", Mm(Triangle), [0, 1, 2], new IfcMaterial { Name = "Glass", R = 0.2, G = 0.4, B = 0.6, Alpha = 0.35 }, ifcType: "IFCPLATE");
        model.AddMesh("Window", Mm(Triangle), [0, 1, 2], ifcType: "IFCWINDOW");

        var doc = IfcViewerAdapter.ToViewerDocument(model);

        var glass = Assert.Single(doc.Materials);
        Assert.Equal(0.35, glass.Opacity);
        Assert.Equal(new RgbaColor(51, 102, 153), glass.Color);
        var window = Assert.Single(doc.Meshes, m => m.Name == "Window");
        Assert.Null(window.MaterialId);
        Assert.Equal(0.5, window.Opacity);
        Assert.Contains(
            ViewerHtml.Export(doc).Meta.GetProperty("materials").EnumerateArray(),
            m => Math.Abs(m.GetProperty("opacity").GetDouble() - 0.35) < 1e-9);
    }

    [Fact]
    public void Convert_SpacesOnlyWhenIncluded()
    {
        var model = IfcModel.Create("Spaces");
        model.AddMesh("Wall", Mm(Triangle), [0, 1, 2], ifcType: "IFCWALL");
        var space = model.AddSpace("Room 1", mesh: IfcMesh.Create(1, "Room 1", Mm(Triangle), [0, 1, 2]));

        Assert.DoesNotContain(IfcViewerAdapter.ToViewerDocument(model).Elements, e => e.Id == space.Id);

        var doc = IfcViewerAdapter.ToViewerDocument(model, new IfcViewerOptions { IncludeSpaces = true });
        Assert.Equal("IFCSPACE", Assert.Single(doc.Elements, e => e.Id == space.Id).Category);
        Assert.Equal(0.3, Assert.Single(doc.Meshes, m => m.ElementId == space.Id).Opacity);
    }

    [Fact]
    public void Convert_DuplicateElementIds_Throws()
    {
        // A model built in memory numbers elements per storey, so two storeys both start at 1.
        var model = IfcModel.Create("Duplicates");
        model.AddMesh("A", Mm(Triangle), [0, 1, 2]);
        model.AddMesh("B", Mm(Triangle), [0, 1, 2], storey: model.AddStorey("Level 2", 3000));

        var ex = Assert.Throws<ArgumentException>(() => IfcViewerAdapter.Convert(model));
        Assert.Contains("used twice", ex.Message, StringComparison.Ordinal);
    }

    [Fact]
    public void Convert_InvalidMesh_IsReportedNotDrawn()
    {
        var model = IfcModel.Create("Invalid");
        var bad = model.AddMesh("Bad", Mm(Triangle), [0, 1, 7]);
        var empty = model.AddMesh("Empty", Mm(Triangle), []);

        var conversion = IfcViewerAdapter.Convert(model);

        Assert.Empty(conversion.Document.Meshes);
        Assert.Equal(
            [
                new IfcViewerElementWithoutGeometry(bad.Id, null, IfcViewerGeometryIssue.InvalidMesh),
                new IfcViewerElementWithoutGeometry(empty.Id, null, IfcViewerGeometryIssue.EmptyMesh),
            ],
            conversion.ElementsWithoutGeometry);
    }

    [Fact]
    public void Convert_WorkSchedule_BecomesTimeLinerWithAttachedElements()
    {
        var model = IfcModel.Create("Schedule", IfcSchema.Ifc4);
        var wall = model.AddMesh("Wall", Mm(Triangle), [0, 1, 2], ifcType: "IFCWALL");
        var schedule = model.AddWorkSchedule("Build");
        var start = new DateTime(2026, 3, 1, 8, 0, 0, DateTimeKind.Utc);
        schedule.AddTask("Erect walls", "T1", start, start.AddDays(9)).AssignElement(wall);
        schedule.AddTask("Undated", "T2");
        var opened = SaveAndOpen(model);

        var conversion = IfcViewerAdapter.Convert(opened);

        var timeLiner = conversion.Document.TimeLiner;
        Assert.NotNull(timeLiner);
        Assert.Equal("Build", timeLiner.Name);
        var task = Assert.Single(timeLiner.Tasks);
        Assert.Equal("Erect walls", task.Name);
        Assert.Equal(new DateTimeOffset(start), task.PlannedStart);
        Assert.Equal(new DateTimeOffset(start.AddDays(9)), task.PlannedEnd);
        Assert.Equal([Assert.Single(opened.AllElements).Id], task.AttachedElementIds);
        Assert.Equal(1, conversion.SkippedTasks);
    }

    [IfcFileFact]
    public void Convert_ConfiguredIfcFile_ConvertsEveryElementAndExports()
    {
        var model = IfcModel.Open(Environment.GetEnvironmentVariable(IfcFileFactAttribute.Variable)!);

        var conversion = IfcViewerAdapter.Convert(model);

        Assert.Equal(model.AllElements.Count(), conversion.ElementCount);
        Assert.Equal(conversion.ElementsWithGeometry, conversion.OwnMeshes);
        Assert.All(conversion.Document.Elements, e => Assert.False(string.IsNullOrEmpty(e.SourceId)));
        Assert.NotEmpty(HtmlViewerExporter.ExportToString(conversion.Document));
    }

    private static IfcModel OpenText(string ifc)
    {
        string path = Path.Combine(Path.GetTempPath(), $"ioviewer_ifc_{Guid.NewGuid():N}.ifc");
        try
        {
            File.WriteAllText(path, ifc);
            return IfcModel.Open(path);
        }
        finally
        {
            File.Delete(path);
        }
    }

    // Models are saved as IFC2x3 (faceted breps) unless a test needs IFC4: IfcIO does not read back the
    // IfcTriangulatedFaceSet it writes for IFC4.
    private static IfcModel SaveAndOpen(IfcModel model)
    {
        string path = Path.Combine(Path.GetTempPath(), $"ioviewer_ifc_{Guid.NewGuid():N}.ifc");
        try
        {
            model.Save(path);
            return IfcModel.Open(path);
        }
        finally
        {
            File.Delete(path);
        }
    }

    private static IfcVector3[] Mm(Vector3d[] points) => [.. points.Select(p => new IfcVector3(p.X, p.Y, p.Z))];

    private static ViewerMesh MeshOf(ViewerDocument doc, long elementId) => Assert.Single(doc.Meshes, m => m.ElementId == elementId);

    private static Vector3d[] Offset(Vector3d origin, double metres) =>
        [.. Triangle.Select(p => (p + origin) * metres)];

    private static void AssertPoints(Vector3d[] expected, IReadOnlyList<Vector3d> actual)
    {
        Assert.Equal(expected.Length, actual.Count);
        for (int i = 0; i < expected.Length; i++)
        {
            // 1e-6 m: far tighter than float precision at 400 km from the origin, so doubles must be kept.
            Assert.True(Vector3d.Distance(expected[i], actual[i]) <= 1e-6, $"Vertex {i}: expected {expected[i]}, actual {actual[i]}");
        }
    }
}

/// <summary>Runs only when <see cref="Variable"/> names an IFC file; the repository ships none.</summary>
public sealed class IfcFileFactAttribute : FactAttribute
{
    public const string Variable = "IOVIEWER_IFC_FILE";

    public IfcFileFactAttribute()
    {
        if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable(Variable)))
        {
            Skip = $"Set {Variable} to an IFC file to run this test.";
        }
    }
}
