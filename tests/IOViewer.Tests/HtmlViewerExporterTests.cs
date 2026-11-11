using System.Diagnostics;
using System.Globalization;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class HtmlViewerExporterTests
{
    private const double OffsetX = 500_000.0;
    private const double OffsetY = 2_000_000.0;

    // A georeferenced slab with one element, viewpoint, grids, 4D schedule and a clash.
    private static ViewerDocument GeoreferencedModel()
    {
        var doc = new ViewerDocument("Commercial Center 3D")
        {
            Author = "IOExtend",
            CreatedAt = "2026-11-11T12:00:00Z"
        };

        doc.Meshes.Add(new ViewerMesh
        {
            Id = 1,
            Name = "Structural Slab",
            ElementId = 101,
            Vertices = [
                new(OffsetX + 0, OffsetY + 0, 0),
                new(OffsetX + 10, OffsetY + 0, 0),
                new(OffsetX + 10, OffsetY + 15, 0),
                new(OffsetX + 0, OffsetY + 15, 0)
            ],
            Indices = [0, 1, 2, 0, 2, 3],
            Color = new RgbaColor(180, 180, 190)
        });

        var el = new ViewerElement
        {
            Id = 101,
            Name = "Ground Floor Slab",
            Category = "Floors",
            TypeName = "Generic 300mm",
            Level = "Level 1"
        };
        el.AddProperty("Dimensions", "Thickness", "300 mm");
        el.MeshIndices.Add(0);
        doc.Elements.Add(el);

        doc.Viewpoints.Add(new ViewerViewpoint("Isometric Overview", new ViewerCamera
        {
            Position = new Vector3d(OffsetX + 25, OffsetY - 25, 30),
            Target = new Vector3d(OffsetX + 5, OffsetY + 7.5, 0)
        }));

        var grids = new ViewerGridSystem { Name = "Structural Grids" };
        grids.Lines.Add(new ViewerGridLine("Axis 1", new(OffsetX, OffsetY, 0), new(OffsetX + 10, OffsetY, 0)));
        doc.Grids = grids;

        var schedule = new ViewerTimeLinerSchedule("4D Construction");
        var task = new ViewerTimeLinerTask("T1", "Pour Slab",
            DateTimeOffset.Parse("2026-06-01T08:00:00Z", CultureInfo.InvariantCulture),
            DateTimeOffset.Parse("2026-06-10T17:00:00Z", CultureInfo.InvariantCulture),
            ViewerTimeLinerTaskType.Construct);
        task.AttachedElementIds.Add(101);
        schedule.Tasks.Add(task);
        doc.TimeLiner = schedule;

        var clashTest = new ViewerClashTest("Hard Clashes");
        clashTest.Clashes.Add(new ViewerClashResult("C1", "Slab vs Column", "Ground Floor Slab", "Column C1",
            new Vector3d(OffsetX + 5, OffsetY + 5, 0), -0.02));
        doc.ClashTests.Add(clashTest);

        doc.LinkedFiles.Add(new ViewerLinkedFile("Structure", "structure.rvt"));
        return doc;
    }

    private static readonly Vector3d[] CubeVertices =
    [
        new(0, 0, 0), new(1, 0, 0), new(1, 1, 0), new(0, 1, 0),
        new(0, 0, 1), new(1, 0, 1), new(1, 1, 1), new(0, 1, 1)
    ];

    private static readonly int[] CubeIndices =
    [
        0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4,
        1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7
    ];

    private static ViewerMesh Cube(int id, Vector3d at) => new()
    {
        Id = id,
        Vertices = CubeVertices.Select(v => v + at).ToArray(),
        Indices = CubeIndices
    };

    private static double[] Vec(System.Text.Json.JsonElement array) =>
        array.EnumerateArray().Select(e => e.GetDouble()).ToArray();

    [Fact]
    public void Meta_HasFormat2AndRtcOffset()
    {
        var view = ViewerHtml.Export(GeoreferencedModel(), new HtmlViewerOptions { Title = "Commercial Center 3D" });
        var meta = view.Meta;

        Assert.Equal(2, meta.GetProperty("format").GetInt32());
        Assert.Equal([500005, 2000007.5, 0], Vec(meta.GetProperty("rtcOffset")));
        Assert.Equal([-5, -7.5, 0], Vec(meta.GetProperty("bbox").GetProperty("min")));
        Assert.Equal([5, 7.5, 0], Vec(meta.GetProperty("bbox").GetProperty("max")));
        Assert.Equal("Commercial Center 3D", meta.GetProperty("title").GetString());
        Assert.Equal("IOExtend", meta.GetProperty("author").GetString());
        Assert.Equal(System.Text.Json.JsonValueKind.Null, meta.GetProperty("truncated").ValueKind);

        // The slab is written in RTC: its translation is min - rtcOffset, positions relative to min.
        Assert.Equal(1, view.InstanceCount);
        var matrix = view.Instances("matrix");
        Assert.Equal([1, 0, 0, 0, 1, 0, 0, 0, 1, -5, -7.5, 0], matrix);
        var positions = view.Read(view.Geometries[0].GetProperty("positions"));
        Assert.Equal([0, 0, 0, 10, 0, 0, 10, 15, 0, 0, 15, 0], positions);
        Assert.Equal([0, 1, 2, 0, 2, 3], view.Read(view.Geometries[0].GetProperty("indices")));
        Assert.Equal("u16", view.Geometries[0].GetProperty("indices").GetProperty("t").GetString());

        var material = meta.GetProperty("materials")[0];
        Assert.Equal(180 / 255.0, material.GetProperty("color")[0].GetDouble(), 6);
        Assert.Equal(1.0, material.GetProperty("opacity").GetDouble());
        Assert.Equal([0], view.Instances("material"));

        var element = meta.GetProperty("elements")[0];
        Assert.Equal(101, element.GetProperty("id").GetInt64());
        Assert.Equal("Ground Floor Slab", element.GetProperty("name").GetString());
        Assert.Equal("Generic 300mm", element.GetProperty("type").GetString());
        Assert.Equal(System.Text.Json.JsonValueKind.Null, element.GetProperty("link").ValueKind);
        Assert.Equal([0], view.Instances("element"));
        Assert.Equal("300 mm", view.Props.GetProperty("101").GetProperty("Dimensions").GetProperty("Thickness").GetString());

        var camera = meta.GetProperty("viewpoints")[0].GetProperty("camera");
        Assert.Equal([20, -32.5, 30], Vec(camera.GetProperty("position")));
        Assert.Equal([-5, -7.5, 0], Vec(meta.GetProperty("grids")[0].GetProperty("start")));
        Assert.Equal("Pour Slab", meta.GetProperty("timeliner").GetProperty("tasks")[0].GetProperty("name").GetString());
        var clash = meta.GetProperty("clashTests")[0].GetProperty("clashes")[0];
        Assert.Equal("Slab vs Column", clash.GetProperty("name").GetString());
        Assert.Equal([0, -2.5, 0], Vec(clash.GetProperty("point")));
        Assert.Equal("structure.rvt", meta.GetProperty("linkedFiles")[0].GetProperty("path").GetString());
    }

    [Fact]
    public void Save_WritesSameHtmlAsExportToString()
    {
        var doc = GeoreferencedModel();
        string tempPath = Path.Combine(Path.GetTempPath(), $"ioviewer_test_{Guid.NewGuid():N}.html");
        try
        {
            HtmlViewerExporter.Save(doc, tempPath);
            Assert.Equal(HtmlViewerExporter.ExportToString(doc), File.ReadAllText(tempPath));
        }
        finally
        {
            if (File.Exists(tempPath)) File.Delete(tempPath);
        }
    }

    [Fact]
    public void TranslatedDuplicates_ShareOneGeometry()
    {
        var doc = new ViewerDocument();
        for (int i = 0; i < 100; i++)
        {
            doc.Meshes.Add(Cube(i, new Vector3d(i * 3, i * 7 % 11, 0)));
        }

        var view = ViewerHtml.Export(doc);

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal(100, view.InstanceCount);
        Assert.All(view.Instances("geometry"), g => Assert.Equal(0, g));
    }

    [Fact]
    public void DifferentShapes_AreNotMerged()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(Cube(0, Vector3d.Zero));
        var stretched = Cube(1, Vector3d.Zero);
        stretched.Vertices = stretched.Vertices.Select(v => new Vector3d(v.X * 2, v.Y, v.Z)).ToArray();
        doc.Meshes.Add(stretched);

        var view = ViewerHtml.Export(doc);

        Assert.Equal(2, view.Geometries.GetArrayLength());
        Assert.Equal([0, 1], view.Instances("geometry"));
    }

    [Fact]
    public void SharedGeometry_WritesTransformMatrixInRtc()
    {
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 7, Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 7, Transform = Transform3d.Translate(new(1_000_000, 2_000_000, 0)) });
        doc.Meshes.Add(new ViewerMesh { Id = 2, GeometryId = 7, Transform = Transform3d.Translate(new(1_000_010, 2_000_000, 0)) });

        var view = ViewerHtml.Export(doc);

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal(2, view.InstanceCount);
        var m = view.Instances("matrix");
        double x0 = m[9], x1 = m[12 + 9];
        Assert.Equal(10, x1 - x0);
        Assert.True(Math.Abs(x0) < 20 && Math.Abs(x1) < 20, $"translations {x0}, {x1} are not in RTC");
        Assert.True(Math.Abs(m[10]) < 20 && Math.Abs(m[12 + 10]) < 20);
        Assert.Equal([1, 0, 0, 0, 1, 0, 0, 0, 1], m[..9]);
        Assert.Equal([0, 0, 0, 1, 0, 0, 0, 1, 0], view.Read(view.Geometries[0].GetProperty("positions")));
    }

    [Fact]
    public void OwnVertices_WithTransform_AreBakedAndNormalsRotated()
    {
        // Rotation by 90 degrees around Z: X -> Y.
        var rotate = new Transform3d(Vector3d.UnitY, -Vector3d.UnitX, Vector3d.UnitZ, new Vector3d(5, 0, 0));
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh
        {
            Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 0, 1)],
            Indices = [0, 1, 2],
            Normals = [new(0, -1, 0), new(0, -1, 0), new(0, -1, 0)],
            UVs = [new(0, 0), new(1, 0), new(0, 1)],
            Transform = rotate
        });

        var view = ViewerHtml.Export(doc);
        var geometry = view.Geometries[0];

        Assert.Equal([0, 0, 0, 0, 1, 0, 0, 0, 1], view.Read(geometry.GetProperty("positions")));
        Assert.Equal([1, 0, 0, 1, 0, 0, 1, 0, 0], view.Read(geometry.GetProperty("normals")));
        Assert.Equal([0, 0, 1, 0, 0, 1], view.Read(geometry.GetProperty("uvs")));
    }

    [Fact]
    public void MissingNormals_AreNull()
    {
        var doc = new ViewerDocument();
        var cube = Cube(0, Vector3d.Zero);
        cube.Normals = [Vector3d.UnitZ];
        doc.Meshes.Add(cube);

        var geometry = ViewerHtml.Export(doc).Geometries[0];

        Assert.Equal(System.Text.Json.JsonValueKind.Null, geometry.GetProperty("normals").ValueKind);
        Assert.Equal(System.Text.Json.JsonValueKind.Null, geometry.GetProperty("uvs").ValueKind);
    }

    [Fact]
    public void ScriptInNames_IsEscaped()
    {
        const string evil = "</script><script>alert(1)</script>";
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { ElementId = 1, Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], Indices = [0, 1, 2] });
        var el = new ViewerElement { Id = 1, Name = evil };
        el.AddProperty(evil, evil, evil);
        doc.Elements.Add(el);

        var view = ViewerHtml.Export(doc, new HtmlViewerOptions { Title = evil });

        Assert.DoesNotContain("</script><script>alert", view.Html, StringComparison.Ordinal);
        Assert.Equal(evil, view.Meta.GetProperty("elements")[0].GetProperty("name").GetString());
        Assert.Equal(evil, view.Meta.GetProperty("title").GetString());
        Assert.Equal(evil, view.Props.GetProperty("1").GetProperty(evil).GetProperty(evil).GetString());
    }

    [Fact]
    public void LargeMesh_UsesUint32Indices()
    {
        var vertices = new Vector3d[70_000];
        for (int i = 0; i < vertices.Length; i++) vertices[i] = new Vector3d(i, i % 2, 0);
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Vertices = vertices, Indices = [0, 1, 69_999] });

        var view = ViewerHtml.Export(doc);
        var indices = view.Geometries[0].GetProperty("indices");

        Assert.Equal("u32", indices.GetProperty("t").GetString());
        Assert.Equal([0, 1, 69_999], view.Read(indices));
    }

    [Fact]
    public void MaxMeshVertices_Exceeded_SetsTruncated()
    {
        var doc = new ViewerDocument();
        for (int i = 0; i < 10; i++) doc.Meshes.Add(Cube(i, new Vector3d(i * 2, 0, 0)));

        var view = ViewerHtml.Export(doc, new HtmlViewerOptions { MaxMeshVertices = 20 });
        var truncated = view.Meta.GetProperty("truncated");

        Assert.Equal(10, truncated.GetProperty("totalMeshes").GetInt32());
        Assert.Equal(2, truncated.GetProperty("meshes").GetInt32());
        Assert.Equal(2, view.InstanceCount);
    }

    [Fact]
    public void MaxMeshVertices_DefaultsToNoLimit()
    {
        Assert.Equal(int.MaxValue, new HtmlViewerOptions().MaxMeshVertices);
    }

    [Fact]
    public void MissingGeometryId_Throws()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Id = 3, GeometryId = 42 });

        var ex = Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(doc));
        Assert.Contains("42", ex.Message, StringComparison.Ordinal);
    }

    [Fact]
    public void GeometryIdWithOwnVertices_Throws()
    {
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = [new(0, 0, 0)], Indices = [] });
        doc.Meshes.Add(new ViewerMesh { GeometryId = 1, Vertices = [new(0, 0, 0)] });

        Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(doc));
    }

    [Fact]
    public void IndexOutOfRange_Throws()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], Indices = [0, 1, 3] });

        Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(doc));
    }

    [Fact]
    public void SharedGeometryIndexOutOfRange_Throws()
    {
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = [new(0, 0, 0)], Indices = [0, -1, 0] });
        doc.Meshes.Add(new ViewerMesh { GeometryId = 1 });

        Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(doc));
    }

    [Fact]
    public void Props_OnlyWhenIncludeProperties()
    {
        var doc = GeoreferencedModel();

        var without = ViewerHtml.Export(doc, new HtmlViewerOptions { IncludeProperties = false });
        var with = ViewerHtml.Export(doc, new HtmlViewerOptions { IncludeProperties = true });

        Assert.Equal("{}", without.Props.GetRawText());
        Assert.Equal(1, without.Meta.GetProperty("elements").GetArrayLength());
        Assert.True(with.Props.TryGetProperty("101", out _));
    }

    [Fact]
    public void Materials_AreDeduplicated()
    {
        var doc = new ViewerDocument();
        doc.Materials.Add(new ViewerMaterial { Id = 5, Color = new RgbaColor(10, 20, 30), Opacity = 0.5 });
        var red = new RgbaColor(255, 0, 0);
        doc.Meshes.Add(Cube(0, Vector3d.Zero));
        var m1 = Cube(1, Vector3d.Zero); m1.Color = red; doc.Meshes.Add(m1);
        var m2 = Cube(2, Vector3d.Zero); m2.Color = red; doc.Meshes.Add(m2);
        var m3 = Cube(3, Vector3d.Zero); m3.MaterialId = 5; doc.Meshes.Add(m3);
        var m4 = Cube(4, Vector3d.Zero); m4.Color = new RgbaColor(255, 0, 0, 51); m4.Opacity = 0.5; doc.Meshes.Add(m4);

        var view = ViewerHtml.Export(doc);
        var materials = view.Meta.GetProperty("materials");

        Assert.Equal(4, materials.GetArrayLength());
        Assert.Equal([0, 1, 1, 2, 3], view.Instances("material"));
        Assert.Equal([200 / 255.0, 200 / 255.0, 200 / 255.0], Vec(materials[0].GetProperty("color")));
        Assert.Equal([10 / 255.0, 20 / 255.0, 30 / 255.0], Vec(materials[2].GetProperty("color")));
        Assert.Equal(0.5, materials[2].GetProperty("opacity").GetDouble());
        Assert.Equal(0.1, materials[3].GetProperty("opacity").GetDouble(), 9);
        Assert.Equal(System.Text.Json.JsonValueKind.Null, materials[0].GetProperty("texture").ValueKind);
    }

    [Fact]
    public void MeshWithoutElement_HasElementIndexMinusOne()
    {
        var doc = new ViewerDocument();
        doc.Elements.Add(new ViewerElement { Id = 9 });
        var a = Cube(0, Vector3d.Zero); a.ElementId = 9; doc.Meshes.Add(a);
        doc.Meshes.Add(Cube(1, Vector3d.Zero));
        var c = Cube(2, Vector3d.Zero); c.ElementId = 404; doc.Meshes.Add(c);

        Assert.Equal([0, -1, -1], ViewerHtml.Export(doc).Instances("element"));
    }

    [Fact]
    public void EmptyDocument_WritesEmptyPayload()
    {
        var view = ViewerHtml.Export(new ViewerDocument());

        Assert.Equal(0, view.InstanceCount);
        Assert.Equal(0, view.Geometries.GetArrayLength());
        Assert.Equal([0, 0, 0], Vec(view.Meta.GetProperty("rtcOffset")));
        Assert.Equal([0, 0, 0], Vec(view.Meta.GetProperty("bbox").GetProperty("min")));
    }

    [Fact]
    public void Shell_PlaceholdersAreReplaced()
    {
        var html = ViewerHtml.Export(GeoreferencedModel()).Html;

        Assert.DoesNotContain("IOVIEWER:", html, StringComparison.Ordinal);
        Assert.StartsWith("<!DOCTYPE html>", html, StringComparison.Ordinal);
    }

    [Fact]
    public void InlinedCode_DoesNotCloseItsTagEarly()
    {
        using var shellStream = typeof(HtmlViewerExporter).Assembly.GetManifestResourceStream("IOViewer.Viewer.index.html")!;
        string shell = new StreamReader(shellStream).ReadToEnd();
        var html = ViewerHtml.Export(GeoreferencedModel()).Html;

        Assert.Equal(CountIgnoreCase(shell, "<script"), CountIgnoreCase(html, "</script"));
        Assert.Equal(CountIgnoreCase(shell, "<style"), CountIgnoreCase(html, "</style"));
    }

    [Theory]
    [InlineData("a</script>b", "script", @"a<\/script>b")]
    [InlineData("x</SCRIPT y</Script", "script", @"x<\/SCRIPT y<\/Script")]
    [InlineData("p::after{content:'</style>'}", "style", @"p::after{content:'<\/style>'}")]
    [InlineData("</styles are fine</scrip", "script", "</styles are fine</scrip")]
    public void EscapeEndTag_EscapesClosingTagIgnoringCase(string text, string tag, string expected) =>
        Assert.Equal(expected, HtmlViewerExporter.EscapeEndTag(text, tag));

    private static int CountIgnoreCase(string text, string value) =>
        System.Text.RegularExpressions.Regex.Count(text, System.Text.RegularExpressions.Regex.Escape(value),
            System.Text.RegularExpressions.RegexOptions.IgnoreCase);

    [Fact]
    public void ClashIds_AreWritten()
    {
        var doc = GeoreferencedModel();
        var clash = doc.ClashTests[0].Clashes[0];
        clash.Element1Id = 101;

        var written = ViewerHtml.Export(doc).Meta.GetProperty("clashTests")[0].GetProperty("clashes")[0];

        Assert.Equal("C1", written.GetProperty("id").GetString());
        Assert.Equal(101, written.GetProperty("element1Id").GetInt64());
        Assert.Equal(System.Text.Json.JsonValueKind.Null, written.GetProperty("element2Id").ValueKind);
        Assert.Equal("Ground Floor Slab", written.GetProperty("element1Name").GetString());
        Assert.Equal("Column C1", written.GetProperty("element2Name").GetString());
        Assert.Equal("Active", written.GetProperty("status").GetString());
    }

    [Fact]
    public void Export_200kElements_DoesNotBuildWholeString()
    {
        const int count = 200_000;
        var doc = new ViewerDocument();
        for (int i = 0; i < count; i++)
        {
            double x = i % 1000 * 2, y = i / 1000 * 2;
            doc.Meshes.Add(new ViewerMesh
            {
                Id = i,
                ElementId = i,
                Vertices = [new(x, y, 0), new(x + 1, y, 0), new(x, y + 1, 0)],
                Indices = [0, 1, 2]
            });
            doc.Elements.Add(new ViewerElement { Id = i, Name = $"Element {i}", Category = "Walls" });
        }

        var sw = Stopwatch.StartNew();
        using var stream = new MemoryStream();
        HtmlViewerExporter.Export(doc, stream);
        sw.Stop();

        Assert.True(stream.Length > 0);
        Assert.True(sw.Elapsed < TimeSpan.FromSeconds(60), $"export took {sw.Elapsed}");
        var view = ViewerHtml.Parse(System.Text.Encoding.UTF8.GetString(stream.ToArray()));
        Assert.Equal(count, view.InstanceCount);
        Assert.Equal(count, view.Meta.GetProperty("elements").GetArrayLength());
        Assert.Equal(1, view.Geometries.GetArrayLength());
    }

    [Fact]
    public void GlbImport_ExportsAllInstances()
    {
        var doc = GlbSharedGeometryTests.Import("""{ "mesh": 0, "translation": [0,0,0] }, { "mesh": 0, "translation": [10,0,0] }""", "0, 1");

        var view = ViewerHtml.Export(doc);

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal(2, view.InstanceCount);
    }
}
