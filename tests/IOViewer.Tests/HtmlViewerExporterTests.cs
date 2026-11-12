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
    public void Meta_HasFormat3AndRtcOffset()
    {
        var view = ViewerHtml.Export(GeoreferencedModel(), new HtmlViewerOptions { Title = "Commercial Center 3D" });
        var meta = view.Meta;

        Assert.Equal(3, meta.GetProperty("format").GetInt32());
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
        var positions = view.Positions(view.Geometries[0]);
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
    public void Meta_WritesSourceIdOnlyWhenSet()
    {
        const string hostile = "\"></script><script>window.__xss=1</script>";
        var doc = new ViewerDocument("Source ids");
        doc.Elements.Add(new ViewerElement { Id = 1, Name = "Wall", SourceId = "2xQ$n5SLP5MBLyL442paFx" });
        doc.Elements.Add(new ViewerElement { Id = 2, Name = "Door" });
        doc.Elements.Add(new ViewerElement { Id = 3, Name = "Empty", SourceId = "" });
        doc.Elements.Add(new ViewerElement { Id = 4, Name = "Hostile", SourceId = hostile });

        var view = ViewerHtml.Export(doc);
        var elements = view.Meta.GetProperty("elements");

        Assert.Equal("2xQ$n5SLP5MBLyL442paFx", elements[0].GetProperty("sourceId").GetString());
        Assert.False(elements[1].TryGetProperty("sourceId", out _));
        Assert.False(elements[2].TryGetProperty("sourceId", out _));
        Assert.Equal(hostile, elements[3].GetProperty("sourceId").GetString());
        // The value is escaped inside the META block: the markup never reaches the page as is.
        Assert.DoesNotContain(hostile, view.Html);
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
        Assert.Equal([0, 0, 0, 1, 0, 0, 0, 1, 0], view.Positions(view.Geometries[0]));
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

        Assert.Equal([0, 0, 0, 0, 1, 0, 0, 0, 1], view.Positions(geometry));
        Assert.Equal([1, 0, 0, 1, 0, 0, 1, 0, 0], view.Normals(geometry)!);
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
    public void Save_InvalidData_LeavesExistingFileUntouched()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], Indices = [0, 1, 3] });
        string tempPath = Path.Combine(Path.GetTempPath(), $"ioviewer_test_{Guid.NewGuid():N}.html");
        byte[] previous = [0x3C, 0x68, 0x74, 0x6D, 0x6C, 0x3E, 0x00, 0xFF];
        try
        {
            File.WriteAllBytes(tempPath, previous);
            Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.Save(doc, tempPath));
            Assert.Equal(previous, File.ReadAllBytes(tempPath));
        }
        finally
        {
            if (File.Exists(tempPath)) File.Delete(tempPath);
        }
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
    public void DocumentWithoutElements_WritesOneElementPerMesh()
    {
        var doc = new ViewerDocument();
        var pipe = Cube(5, Vector3d.Zero); pipe.Name = "Pipe"; doc.Meshes.Add(pipe);
        doc.Meshes.Add(Cube(7, new Vector3d(3, 0, 0)));

        var view = ViewerHtml.Export(doc);

        Assert.Equal([0, 1], view.Instances("element"));
        var elements = view.Meta.GetProperty("elements").EnumerateArray().ToArray();
        Assert.Equal([5L, 7L], elements.Select(e => e.GetProperty("id").GetInt64()));
        Assert.Equal(["Pipe", "Mesh 7"], elements.Select(e => e.GetProperty("name").GetString()));
        Assert.All(elements, e => Assert.True(e.GetProperty("mesh").GetBoolean())); // mesh ids: no task or clash matches them
        Assert.Empty(doc.Elements); // the document itself is not changed
    }

    [Fact]
    public void DocumentWithoutElements_GroupsMeshesByTheirElementId()
    {
        var doc = new ViewerDocument();
        var a = Cube(1, Vector3d.Zero); a.ElementId = 2; a.Name = "Wall part"; doc.Meshes.Add(a);
        var b = Cube(2, new Vector3d(3, 0, 0)); b.ElementId = 2; doc.Meshes.Add(b);
        var c = Cube(3, new Vector3d(6, 0, 0)); c.ElementId = 1; doc.Meshes.Add(c);
        doc.Meshes.Add(Cube(4, new Vector3d(9, 0, 0)));

        var view = ViewerHtml.Export(doc);

        // Element ids stay the ids 4D tasks and clashes refer to; only the mesh without one is a per-mesh stand-in.
        Assert.Equal([0, 0, 1, 2], view.Instances("element"));
        var elements = view.Meta.GetProperty("elements").EnumerateArray().ToArray();
        Assert.Equal([2L, 1L, 4L], elements.Select(e => e.GetProperty("id").GetInt64()));
        Assert.Equal(["Wall part", "Element 1", "Mesh 4"], elements.Select(e => e.GetProperty("name").GetString()));
        Assert.Equal([false, false, true], elements.Select(e => e.TryGetProperty("mesh", out var m) && m.GetBoolean()));
    }

    [Fact]
    public void DocumentWithoutElements_ListsOnlyWrittenMeshes()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(Cube(1, Vector3d.Zero));
        doc.Meshes.Add(Cube(2, new Vector3d(3, 0, 0)));

        var view = ViewerHtml.Export(doc, new HtmlViewerOptions { MaxMeshVertices = CubeVertices.Length });

        Assert.Equal([0], view.Instances("element"));
        Assert.Equal(1, view.Meta.GetProperty("elements").GetArrayLength());
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
    public void Viewpoints_WriteProjection()
    {
        var doc = GeoreferencedModel();
        doc.Viewpoints.Add(new ViewerViewpoint("Plan", new ViewerCamera
        {
            Position = new Vector3d(OffsetX + 5, OffsetY + 7.5, 50),
            Target = new Vector3d(OffsetX + 5, OffsetY + 7.5, 0),
            Projection = ViewerProjection.Orthographic
        }));

        var viewpoints = ViewerHtml.Export(doc).Meta.GetProperty("viewpoints");

        Assert.Equal("perspective", viewpoints[0].GetProperty("camera").GetProperty("projection").GetString());
        Assert.Equal("orthographic", viewpoints[1].GetProperty("camera").GetProperty("projection").GetString());
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

    private const double Step = 1.0 / 1024;

    [Fact]
    public void Format3_QuantizesSmallGeometry()
    {
        Vector3d[] vertices = [new(-1.2345678, 0.3, 2.000123), new(3.14159, -2.71828, 0.5), new(0.1, 7.777777, -3.3)];
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = vertices, Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 1 });

        var view = ViewerHtml.Export(doc);
        var geometry = view.Geometries[0];

        Assert.Equal(3, view.Meta.GetProperty("format").GetInt32());
        Assert.Equal("u16", geometry.GetProperty("positions").GetProperty("t").GetString());
        Assert.Equal(Step, geometry.GetProperty("q").GetProperty("s").GetDouble());
        Assert.Equal([0, 0, 0], Vec(geometry.GetProperty("q").GetProperty("o"))); // the instance translation holds the origin
        AssertPlaced(view, 0, vertices, Step / 2 + 1e-6); // plus float32 rounding of the translation
    }

    [Fact]
    public void Format3_KeepsF32ForOver64m()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Vertices = [new(0, 0, 0), new(100, 0, 0), new(0, 1, 0)], Indices = [0, 1, 2] });

        var geometry = ViewerHtml.Export(doc).Geometries[0];

        Assert.Equal("f32", geometry.GetProperty("positions").GetProperty("t").GetString());
        Assert.False(geometry.TryGetProperty("q", out _));
    }

    [Fact]
    public void Format3_OwnMeshesShareGridVertices()
    {
        // Two georeferenced meshes off the grid that meet at a corner; each is placed by its own translation.
        var corner = new Vector3d(OffsetX + 1.2345678, OffsetY + 2.3456789, 0.1234567);
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Vertices = [corner, corner + new Vector3d(-2.5, 0.1, 0), corner + new Vector3d(0, -1.7, 0.3)], Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh
        {
            Vertices = [corner + new Vector3d(1.1, 0.9, 0), corner, corner + new Vector3d(3.3, 0, 0.2), corner + new Vector3d(0, 2, 1)],
            Indices = [0, 1, 2, 0, 2, 3],
        });

        var view = ViewerHtml.Export(doc);
        var matrix = view.Instances("matrix");
        var geometries = view.Instances("geometry");
        double[] World(int instance, int vertex)
        {
            var p = view.Positions(view.Geometries[(int)geometries[instance]]);
            return [.. Enumerable.Range(0, 3).Select(k => matrix[instance * 12 + 9 + k] + p[vertex * 3 + k])];
        }

        var fromFirst = World(0, 0);
        Assert.Equal(fromFirst, World(1, 1)); // exactly the same point
        var rtc = Vec(view.Meta.GetProperty("rtcOffset"));
        Assert.InRange(Math.Abs(fromFirst[0] - (corner.X - rtc[0])), 0, Step / 2);
        Assert.InRange(Math.Abs(fromFirst[1] - (corner.Y - rtc[1])), 0, Step / 2);
        Assert.InRange(Math.Abs(fromFirst[2] - (corner.Z - rtc[2])), 0, Step / 2);
    }

    [Fact]
    public void Format3_OctNormals_MatchSharedVectors()
    {
        // The same table is in the viewer's quantize.test.js.
        Vector3d[] normals = [new(1, 0, 0), new(0, -1, 0), new(0, 0, 1), new(0, 0, -1), new(1, 1, 1), new(1, -2, -3)];
        double[] expected = [32767, 0, 0, -32767, 0, 0, 32767, 32767, 10922, 10922, 21845, -27306];
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry
        {
            Id = 1,
            Vertices = [.. Enumerable.Range(0, 6).Select(i => new Vector3d(i, i % 2, 0))],
            Normals = normals,
            Indices = [0, 1, 2, 3, 4, 5],
        });
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 1 });

        var view = ViewerHtml.Export(doc);
        var written = view.Geometries[0].GetProperty("normals");

        Assert.Equal("i16", written.GetProperty("t").GetString());
        Assert.Equal(expected, view.Read(written));
    }

    [Fact]
    public void Format3_DedupesTranslatedCopies()
    {
        Vector3d[] shape = [new(0.1234, 0.5678, 0.9012), new(1.3456, 0.2345, 0.1111), new(0.4444, 2.3333, 0.7777)];
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Vertices = shape, Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Vertices = [.. shape.Select(v => v + new Vector3d(3.0, 0, 0))], Indices = [0, 1, 2] });

        var view = ViewerHtml.Export(doc);

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal([0, 0], view.Instances("geometry"));
        Assert.Equal(3.0, view.Instances("matrix")[12 + 9] - view.Instances("matrix")[9]);
    }

    // Decoded vertices of instance i in RTC: matrix linear part · (o + q·s or f32) + matrix translation.
    private static double[] DecodedWorld(ViewerHtml view, int instance)
    {
        var m = view.Instances("matrix").AsSpan(instance * 12, 12).ToArray();
        var p = view.Positions(view.Geometries[(int)view.Instances("geometry")[instance]]);
        var world = new double[p.Length];
        for (int v = 0; v < p.Length / 3; v++)
        {
            for (int k = 0; k < 3; k++)
            {
                world[v * 3 + k] = m[k] * p[v * 3] + m[3 + k] * p[v * 3 + 1] + m[6 + k] * p[v * 3 + 2] + m[9 + k];
            }
        }
        return world;
    }

    // Asserts that instance i decodes to transform(vertices) - rtcOffset within tolerance per coordinate.
    private static void AssertPlaced(ViewerHtml view, int instance, IEnumerable<Vector3d> worldVertices, double tolerance)
    {
        var rtc = Vec(view.Meta.GetProperty("rtcOffset"));
        var decoded = DecodedWorld(view, instance);
        var expected = worldVertices.SelectMany(v => new[] { v.X - rtc[0], v.Y - rtc[1], v.Z - rtc[2] }).ToArray();
        Assert.Equal(expected.Length, decoded.Length);
        for (int k = 0; k < expected.Length; k++) Assert.InRange(Math.Abs(decoded[k] - expected[k]), 0, tolerance);
    }

    [Fact]
    public void Format3_ScaledSharedInstance_KeepsF32()
    {
        // A unit primitive scaled x100: grid steps in local units would be 100 x coarser in the world.
        Vector3d[] vertices = [new(0.12345, 0.6789, 0.4321), new(1, 0.25, 0.5), new(0.5, 1, 0.98765)];
        var scaled = new Transform3d(Vector3d.UnitX * 100, Vector3d.UnitY * 100, Vector3d.UnitZ * 100, new Vector3d(OffsetX + 3.3, OffsetY + 4.4, 5.5));
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = vertices, Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 1, Transform = Transform3d.Translate(new(OffsetX, OffsetY, 0)) });
        doc.Meshes.Add(new ViewerMesh { Id = 2, GeometryId = 1, Transform = scaled });

        var view = ViewerHtml.Export(doc);
        var geometry = view.Geometries[0];

        Assert.Equal("f32", geometry.GetProperty("positions").GetProperty("t").GetString());
        Assert.False(geometry.TryGetProperty("q", out _));
        AssertPlaced(view, 1, vertices.Select(scaled.Apply), 1e-4); // float32 of ~100 m values
    }

    [Fact]
    public void Format3_UnscaledSharedInstance_IsQuantized()
    {
        Vector3d[] vertices = [new(0.12345, 0.6789, 0.4321), new(1.111, 0.25, 0.5), new(0.5, 1.9, 0.98765)];
        var half = new Transform3d(Vector3d.UnitX * 0.5, Vector3d.UnitY * 0.5, Vector3d.UnitZ * 0.5, new Vector3d(OffsetX + 1.234567, OffsetY + 2.345678, 0.345678));
        var moved = Transform3d.Translate(new Vector3d(OffsetX + 3.210987, OffsetY + 0.123456, 1.987654));
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = vertices, Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 1, Transform = moved });
        doc.Meshes.Add(new ViewerMesh { Id = 2, GeometryId = 1, Transform = half });

        var view = ViewerHtml.Export(doc);
        var geometry = view.Geometries[0];

        Assert.Equal("u16", geometry.GetProperty("positions").GetProperty("t").GetString());
        Assert.True(geometry.TryGetProperty("q", out _));
        AssertPlaced(view, 0, vertices.Select(moved.Apply), Step / 2 + 1e-6);
        AssertPlaced(view, 1, vertices.Select(half.Apply), Step / 2 + 1e-6);
    }

    [Fact]
    public void Format3_F32Placement_RoundTrips()
    {
        // Over 64 m, so f32 on both paths: a georeferenced own mesh, an off-grid translated twin of it, and a shared
        // geometry placed by a georeferenced translation.
        Vector3d[] own = [new(OffsetX + 0.1234, OffsetY + 0.5678, 1.2345), new(OffsetX + 100.9876, OffsetY + 3.21, 2.5), new(OffsetX + 7.7, OffsetY + 80.08, 0.3)];
        var shift = new Vector3d(1.2345678, -2.3456789, 0.3456789);
        Vector3d[] local = [new(0.111, 0.222, 0.333), new(90.5, 1.25, 0.75), new(3.3, 70.7, 4.4)];
        var place = Transform3d.Translate(new Vector3d(OffsetX - 20.4321, OffsetY + 10.9876, 3.21));
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Id = 1, Vertices = own, Indices = [0, 1, 2] });
        doc.Geometries.Add(new ViewerGeometry { Id = 7, Vertices = local, Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Id = 2, GeometryId = 7, Transform = place });
        doc.Meshes.Add(new ViewerMesh { Id = 3, Vertices = [.. own.Select(v => v + shift)], Indices = [0, 1, 2] });

        var view = ViewerHtml.Export(doc);

        Assert.Equal([0, 1, 0], view.Instances("geometry"));
        Assert.All(view.Geometries.EnumerateArray(), g => Assert.Equal("f32", g.GetProperty("positions").GetProperty("t").GetString()));
        const double tolerance = 2e-5; // float32 of RTC values up to ~100 m
        AssertPlaced(view, 0, own, tolerance);
        AssertPlaced(view, 1, local.Select(place.Apply), tolerance);
        AssertPlaced(view, 2, own.Select(v => v + shift), tolerance);
    }

    [Theory]
    [InlineData(false)]
    [InlineData(true)]
    public void Format3_SharedGeometryInWorldCoordinates_KeepsPrecision(bool f32)
    {
        // A 1 cm x 2 mm triangle stored in georeferenced coordinates, placed as is and rotated about a nearby point; the
        // f32 variant has one more vertex 100 m away, over the 64 m that u16 steps cover.
        var a = new Vector3d(500_000.123, 6_000_000.456, 100.789);
        List<Vector3d> vertices = [a, a + new Vector3d(0.01, 0, 0), a + new Vector3d(0, 0.002, 0)];
        List<int> indices = [0, 1, 2];
        if (f32)
        {
            vertices.Add(a + new Vector3d(100, 0, 0));
            indices.AddRange([1, 3, 2]);
        }
        var axes = new Transform3d(new Vector3d(Math.Cos(0.5), Math.Sin(0.5), 0), new Vector3d(-Math.Sin(0.5), Math.Cos(0.5), 0), Vector3d.UnitZ, Vector3d.Zero);
        var rotated = axes with { Translation = a - axes.Apply(a) };
        var doc = new ViewerDocument();
        doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = vertices, Indices = indices });
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 1, Transform = Transform3d.Identity });
        doc.Meshes.Add(new ViewerMesh { Id = 2, GeometryId = 1, Transform = rotated });

        var view = ViewerHtml.Export(doc);
        var geometry = view.Geometries[0];

        Assert.Equal(f32 ? "f32" : "u16", geometry.GetProperty("positions").GetProperty("t").GetString());
        if (geometry.TryGetProperty("q", out var q)) Assert.All(Vec(q.GetProperty("o")), o => Assert.InRange(Math.Abs(o), 0, 1e5));
        var matrix = view.Instances("matrix");
        foreach (var (instance, transform) in new[] { (0, Transform3d.Identity), (1, rotated) })
        {
            for (int k = 0; k < 3; k++) Assert.InRange(Math.Abs(matrix[instance * 12 + 9 + k]), 0, 1e5);
            AssertPlaced(view, instance, vertices.Select(transform.Apply), Step / 2 + 1e-4);
            var world = DecodedWorld(view, instance);
            double Edge(int v) => Math.Sqrt(Enumerable.Range(0, 3).Sum(k => Math.Pow(world[v * 3 + k] - world[k], 2)));
            Assert.True(Edge(1) > 0 && Edge(2) > 0, $"instance {instance}: thin edges {Edge(1)}, {Edge(2)}");
        }
    }

    [Fact]
    public void OwnVertices_MirroredTransform_KeepsWindingWithNormals()
    {
        // Triangles of own vertices with +Z normals, once mirrored in X and once only translated: the face normal from
        // the decoded winding must agree with the decoded vertex normal in both.
        Vector3d[] triangle = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)];
        Vector3d[] up = [Vector3d.UnitZ, Vector3d.UnitZ, Vector3d.UnitZ];
        var mirror = new Transform3d(-Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ, new Vector3d(5, 0, 0));
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Id = 1, Vertices = triangle, Indices = [0, 1, 2], Normals = up, Transform = mirror });
        doc.Meshes.Add(new ViewerMesh { Id = 2, Vertices = triangle, Indices = [0, 1, 2], Normals = up, Transform = Transform3d.Translate(new(-5, 0, 0)) });

        var view = ViewerHtml.Export(doc);

        for (int instance = 0; instance < 2; instance++)
        {
            var geometry = view.Geometries[(int)view.Instances("geometry")[instance]];
            var p = DecodedWorld(view, instance);
            var normals = view.Normals(geometry)!;
            var index = view.Read(geometry.GetProperty("indices")).Select(i => (int)i).ToArray();
            Vector3d At(double[] values, int v) => new(values[v * 3], values[v * 3 + 1], values[v * 3 + 2]);
            var face = Vector3d.Cross(At(p, index[1]) - At(p, index[0]), At(p, index[2]) - At(p, index[0]));
            Assert.True(Vector3d.Dot(face, At(normals, index[0])) > 0, $"instance {instance}: winding against the normal");
        }
    }

    [Fact]
    public void OwnVertices_MirroredTwin_DoesNotReuseUnmirroredWinding()
    {
        // In the YZ plane a mirror in X only moves the triangle, so both bake to the same positions; the mirrored one
        // must still get its own geometry with the reversed winding.
        Vector3d[] triangle = [new(0, 0, 0), new(0, 1, 0), new(0, 0, 1)];
        var mirror = new Transform3d(-Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ, new Vector3d(3, 0, 0));
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh { Id = 1, Vertices = triangle, Indices = [0, 1, 2] });
        doc.Meshes.Add(new ViewerMesh { Id = 2, Vertices = triangle, Indices = [0, 1, 2], Transform = mirror });

        var view = ViewerHtml.Export(doc);

        Assert.Equal([0, 1], view.Instances("geometry"));
        Assert.Equal([0, 1, 2], view.Read(view.Geometries[0].GetProperty("indices")));
        Assert.Equal([0, 2, 1], view.Read(view.Geometries[1].GetProperty("indices")));
    }

    [Fact]
    public void Format3_DedupesOffGridTranslatedCopies()
    {
        // Copies at millimetre offsets are off the 2^-10 m grid; they still share the first copy's geometry, placed by
        // an exact (unsnapped) translation. Offsets stay within ±5 m of the RTC origin, so float32 adds < 1e-6 m.
        var random = new Random(7);
        var shape = Enumerable.Range(0, 100)
            .Select(_ => new Vector3d(random.Next(0, 3000) / 1000.0, random.Next(0, 3000) / 1000.0, random.Next(0, 3000) / 1000.0)).ToArray();
        int[] indices = [.. Enumerable.Range(0, 99)];
        var doc = new ViewerDocument();
        for (int i = 0; i < 1000; i++)
        {
            var shift = new Vector3d(OffsetX + random.Next(0, 10000) / 1000.0, OffsetY + random.Next(0, 10000) / 1000.0, random.Next(0, 10000) / 1000.0);
            doc.Meshes.Add(new ViewerMesh { Id = i, Vertices = [.. shape.Select(p => p + shift)], Indices = indices });
        }

        var view = ViewerHtml.Export(doc);

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal(1000, view.InstanceCount);
        var rtc = Vec(view.Meta.GetProperty("rtcOffset"));
        var p = view.Positions(view.Geometries[0]);
        var matrix = view.Instances("matrix");
        for (int i = 0; i < 1000; i++)
        {
            var vertices = doc.Meshes[i].Vertices;
            for (int v = 0; v < vertices.Count; v++)
            {
                double[] exact = [vertices[v].X - rtc[0], vertices[v].Y - rtc[1], vertices[v].Z - rtc[2]];
                for (int k = 0; k < 3; k++)
                {
                    Assert.InRange(Math.Abs(matrix[i * 12 + 9 + k] + p[v * 3 + k] - exact[k]), 0, Step / 2 + 1e-6);
                }
            }
        }
    }
}
