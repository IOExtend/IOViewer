using System.Diagnostics;
using System.Globalization;
using System.Text;
using System.Text.Json;
using IOScene;
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
        var scene = new SceneDocument { Title = "Commercial Center 3D" };
        scene.Models.Add(new SceneModel { Id = 1, Key = "center", Name = "Commercial Center 3D", Author = "IOExtend", CreatedAt = "2026-11-11T12:00:00Z" });
        scene.Models.Add(new SceneModel { Id = 2, Key = "structure.rvt", Name = "Structure", Path = "structure.rvt" });
        scene.Levels.Add(new SceneLevel { Id = 1, ModelId = 1, Name = "Level 1" });
        scene.PropertySets.Add(new ScenePropertySet
        {
            Id = 1,
            Name = "Dimensions",
            Properties = [new SceneProperty { Name = "Thickness", Value = SceneValue.FromNumber(0.3, "m", "300 mm") }],
        });
        scene.Elements.Add(new SceneElement
        {
            Id = 101,
            ModelId = 1,
            Name = "Ground Floor Slab",
            Category = "Floors",
            TypeName = "Generic 300mm",
            LevelId = 1,
            PropertySetIds = [1],
        });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 1,
            Vertices = [
                new(OffsetX + 0, OffsetY + 0, 0),
                new(OffsetX + 10, OffsetY + 0, 0),
                new(OffsetX + 10, OffsetY + 15, 0),
                new(OffsetX + 0, OffsetY + 15, 0)
            ],
            Indices = [0, 1, 2, 0, 2, 3],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 101, GeometryId = 1, Color = new RgbaColor(180, 180, 190), Name = "Structural Slab" });

        scene.Viewpoints.Add(new SceneViewpoint
        {
            Name = "Isometric Overview",
            Camera = new SceneCamera { Position = new Vector3d(OffsetX + 25, OffsetY - 25, 30), Target = new Vector3d(OffsetX + 5, OffsetY + 7.5, 0) },
        });

        scene.Grids.Add(new SceneGridSystem
        {
            ModelId = 1,
            Name = "Structural Grids",
            Lines = [new SceneGridLine { Name = "Axis 1", Start = new(OffsetX, OffsetY, 0), End = new(OffsetX + 10, OffsetY, 0) }],
        });

        scene.Schedules.Add(new SceneSchedule
        {
            Name = "4D Construction",
            Tasks =
            [
                new SceneTask
                {
                    Id = "T1",
                    Name = "Pour Slab",
                    PlannedStart = DateTimeOffset.Parse("2026-06-01T08:00:00Z", CultureInfo.InvariantCulture),
                    PlannedEnd = DateTimeOffset.Parse("2026-06-10T17:00:00Z", CultureInfo.InvariantCulture),
                    TaskType = SceneTaskType.Construct,
                    ElementIds = [101],
                },
            ],
        });

        scene.ClashTests.Add(new SceneClashTest
        {
            Name = "Hard Clashes",
            Clashes =
            [
                new SceneClashResult
                {
                    Id = "C1",
                    Name = "Slab vs Column",
                    Element1Name = "Ground Floor Slab",
                    Element2Name = "Column C1",
                    Point = new Vector3d(OffsetX + 5, OffsetY + 5, 0),
                    Distance = -0.02,
                },
            ],
        });
        return new ViewerDocument(scene);
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

    private static SceneInstance Cube(SceneDocument scene, Vector3d at) =>
        scene.Mesh(CubeVertices.Select(v => v + at).ToArray(), CubeIndices);

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
        Assert.Equal("Level 1", element.GetProperty("level").GetString());
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
        var linked = meta.GetProperty("linkedFiles")[0];
        Assert.Equal(("Structure", "structure.rvt", true), (linked.GetProperty("name").GetString(), linked.GetProperty("path").GetString(), linked.GetProperty("visible").GetBoolean()));
        Assert.False(meta.TryGetProperty("skipped", out _));
    }

    [Fact]
    public void Meta_WritesSourceIdOnlyWhenSet()
    {
        const string hostile = "\"></script><script>window.__xss=1</script>";
        var scene = TestScenes.Empty("Source ids");
        scene.Elements.Add(new SceneElement { Id = 1, ModelId = 1, Name = "Wall", SourceId = "2xQ$n5SLP5MBLyL442paFx" });
        scene.Elements.Add(new SceneElement { Id = 2, ModelId = 1, Name = "Door" });
        scene.Elements.Add(new SceneElement { Id = 3, ModelId = 1, Name = "Empty", SourceId = "" });
        scene.Elements.Add(new SceneElement { Id = 4, ModelId = 1, Name = "Hostile", SourceId = hostile });

        var view = ViewerHtml.Export(new ViewerDocument(scene));
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

            // A scene alone is the document with no sections and every model shown.
            HtmlViewerExporter.Save(doc.Scene, tempPath);
            Assert.Equal(HtmlViewerExporter.ExportToString(doc), File.ReadAllText(tempPath));
            Assert.Equal(HtmlViewerExporter.ExportToString(doc), HtmlViewerExporter.ExportToString(doc.Scene));
            using var stream = new MemoryStream();
            HtmlViewerExporter.Export(doc.Scene, stream);
            Assert.Equal(HtmlViewerExporter.ExportToString(doc), System.Text.Encoding.UTF8.GetString(stream.ToArray()));
        }
        finally
        {
            if (File.Exists(tempPath)) File.Delete(tempPath);
        }
    }

    [Fact]
    public void TranslatedDuplicates_ShareOneGeometry()
    {
        var scene = TestScenes.Empty();
        for (int i = 0; i < 100; i++)
        {
            Cube(scene, new Vector3d(i * 3, i * 7 % 11, 0));
        }

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal(100, view.InstanceCount);
        Assert.All(view.Instances("geometry"), g => Assert.Equal(0, g));
    }

    [Fact]
    public void DifferentShapes_AreNotMerged()
    {
        var scene = TestScenes.Empty();
        Cube(scene, Vector3d.Zero);
        scene.Mesh(CubeVertices.Select(v => new Vector3d(v.X * 2, v.Y, v.Z)).ToArray(), CubeIndices);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(2, view.Geometries.GetArrayLength());
        Assert.Equal([0, 1], view.Instances("geometry"));
    }

    [Fact]
    public void SharedGeometry_WritesTransformMatrixInRtc()
    {
        var scene = TestScenes.Empty();
        var triangle = scene.Geometry([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.Place(triangle, Transform3d.Translate(new(1_000_000, 2_000_000, 0)));
        scene.Place(triangle, Transform3d.Translate(new(1_000_010, 2_000_000, 0)));

        var view = ViewerHtml.Export(new ViewerDocument(scene));

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
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 0, 1)], [0, 1, 2], rotate,
            normals: [new(0, -1, 0), new(0, -1, 0), new(0, -1, 0)], uvs: [new(0, 0), new(1, 0), new(0, 1)]);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
        var geometry = view.Geometries[0];

        Assert.Equal([0, 0, 0, 0, 1, 0, 0, 0, 1], view.Positions(geometry));
        Assert.Equal([1, 0, 0, 1, 0, 0, 1, 0, 0], view.Normals(geometry)!);
        Assert.Equal([0, 0, 1, 0, 0, 1], view.Read(geometry.GetProperty("uvs")));
    }

    [Fact]
    public void MissingNormals_AreNull()
    {
        var scene = TestScenes.Empty();
        scene.Mesh(CubeVertices, CubeIndices, normals: [Vector3d.UnitZ]);

        var geometry = ViewerHtml.Export(new ViewerDocument(scene)).Geometries[0];

        Assert.Equal(System.Text.Json.JsonValueKind.Null, geometry.GetProperty("normals").ValueKind);
        Assert.Equal(System.Text.Json.JsonValueKind.Null, geometry.GetProperty("uvs").ValueKind);
    }

    [Fact]
    public void ScriptInNames_IsEscaped()
    {
        const string evil = "</script><script>alert(1)</script>";
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.Elements[0].Name = evil;
        scene.PropertySets.Add(new ScenePropertySet { Id = 1, Name = evil, Properties = [new SceneProperty { Name = evil, Value = SceneValue.FromText(evil) }] });
        scene.Elements[0].PropertySetIds.Add(1);

        var view = ViewerHtml.Export(new ViewerDocument(scene), new HtmlViewerOptions { Title = evil });

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
        var scene = TestScenes.Empty();
        scene.Mesh(vertices, [0, 1, 69_999]);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
        var indices = view.Geometries[0].GetProperty("indices");

        Assert.Equal("u32", indices.GetProperty("t").GetString());
        Assert.Equal([0, 1, 69_999], view.Read(indices));
    }

    [Fact]
    public void MaxMeshVertices_Exceeded_SetsTruncated()
    {
        var scene = TestScenes.Empty();
        for (int i = 0; i < 10; i++) Cube(scene, new Vector3d(i * 2, 0, 0));

        var view = ViewerHtml.Export(new ViewerDocument(scene), new HtmlViewerOptions { MaxMeshVertices = 20 });
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
        var scene = TestScenes.Empty();
        scene.Elements.Add(new SceneElement { Id = 3, ModelId = 1 });
        scene.Instances.Add(new SceneInstance { ElementId = 3, GeometryId = 42 });

        var ex = Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(scene));
        Assert.Contains("42", ex.Message, StringComparison.Ordinal);
    }

    [Fact]
    public void DuplicateGeometryId_Throws()
    {
        var scene = TestScenes.Empty();
        scene.Geometries.Add(new SceneGeometry { Id = 1 });
        scene.Geometries.Add(new SceneGeometry { Id = 1 });

        Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(scene));
    }

    [Fact]
    public void IndexOutOfRange_Throws()
    {
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 3]);

        Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(scene));
    }

    [Fact]
    public void Save_InvalidData_LeavesExistingFileUntouched()
    {
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 3]);
        var doc = new ViewerDocument(scene);
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
        var scene = TestScenes.Empty();
        var geometry = scene.Geometry([new(0, 0, 0)], [0, -1, 0]);
        scene.Place(geometry);
        scene.Place(geometry);

        Assert.Throws<InvalidDataException>(() => HtmlViewerExporter.ExportToString(scene));
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

    // JsonDocument keeps duplicate members, but JSON.parse in the page keeps only the last one.
    private static void AssertNoDuplicateMembers(JsonElement json)
    {
        var reader = new Utf8JsonReader(Encoding.UTF8.GetBytes(json.GetRawText()));
        var objects = new Stack<HashSet<string>>();
        while (reader.Read())
        {
            if (reader.TokenType == JsonTokenType.StartObject) objects.Push([]);
            else if (reader.TokenType == JsonTokenType.EndObject) objects.Pop();
            else if (reader.TokenType == JsonTokenType.PropertyName)
            {
                string name = reader.GetString()!;
                Assert.True(objects.Peek().Add(name), $"Member '{name}' is written twice in one object.");
            }
        }
    }

    private static (string Name, string? Value)[] Members(JsonElement group) =>
        [.. group.EnumerateObject().Select(p => (p.Name, p.Value.GetString()))];

    private static ScenePropertySet Set(int id, string name, params (string Name, string Value)[] properties) =>
        new() { Id = id, Name = name, Properties = [.. properties.Select(p => new SceneProperty { Name = p.Name, Value = SceneValue.FromText(p.Value) })] };

    [Fact]
    public void Props_SetsWithTheSameName_AreOneGroup()
    {
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.PropertySets.Add(Set(1, "Dimensions", ("Height", "3000 mm")));
        scene.PropertySets.Add(Set(2, "Identity Data", ("Mark", "D1")));
        scene.PropertySets.Add(Set(3, "Dimensions", ("Width", "900 mm")));
        scene.Elements[0].PropertySetIds.AddRange([1, 2, 3, 1]);
        Assert.Empty(scene.Validate());

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        AssertNoDuplicateMembers(view.Props);
        var element = view.Props.GetProperty("1");
        Assert.Equal(["Dimensions", "Identity Data"], element.EnumerateObject().Select(p => p.Name));
        Assert.Equal([("Height", "3000 mm"), ("Width", "900 mm")], Members(element.GetProperty("Dimensions")));
        Assert.Equal([("Mark", "D1")], Members(element.GetProperty("Identity Data")));
    }

    [Fact]
    public void Props_RepeatedPropertyName_GetsNumberedSuffix()
    {
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.PropertySets.Add(Set(1, "Dimensions", ("Height", "a"), ("Height (2)", "b")));
        scene.PropertySets.Add(Set(2, "Dimensions", ("Height", "c"), ("Height", "d")));
        scene.Elements[0].PropertySetIds.AddRange([1, 2]);
        Assert.Empty(scene.Validate());

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        AssertNoDuplicateMembers(view.Props);
        Assert.Equal(
            [("Height", "a"), ("Height (2)", "b"), ("Height (3)", "c"), ("Height (4)", "d")],
            Members(view.Props.GetProperty("1").GetProperty("Dimensions")));
    }

    [Fact]
    public void Props_NameTakenAfterItsSuffixWasGiven_IsSkipped()
    {
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.PropertySets.Add(Set(1, "Dimensions", ("Height", "a"), ("Height", "b"), ("Height (3)", "c"), ("Height", "d"), ("Height", "e")));
        scene.Elements[0].PropertySetIds.Add(1);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        AssertNoDuplicateMembers(view.Props);
        Assert.Equal(
            [("Height", "a"), ("Height (2)", "b"), ("Height (3)", "c"), ("Height (4)", "d"), ("Height (5)", "e")],
            Members(view.Props.GetProperty("1").GetProperty("Dimensions")));
    }

    [Fact]
    public void Props_ManyEqualNames_AreAllKept()
    {
        const int count = 20_000;
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.PropertySets.Add(Set(1, "Dimensions", Enumerable.Range(0, count).Select(i => ("X", i.ToString(CultureInfo.InvariantCulture))).ToArray()));
        scene.Elements[0].PropertySetIds.Add(1);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        var members = Members(view.Props.GetProperty("1").GetProperty("Dimensions"));
        Assert.Equal(count, members.Length);
        Assert.Equal(("X", "0"), members[0]);
        Assert.Equal(($"X ({count})", (count - 1).ToString(CultureInfo.InvariantCulture)), members[^1]);
    }

    [Fact]
    public void Props_NamesWrittenAlike_AreMerged()
    {
        // Each lone surrogate is written as U+FFFD, so these names differ in the scene but not in the page.
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.PropertySets.Add(Set(1, "Group \uD800", ("Name \uD800", "a")));
        scene.PropertySets.Add(Set(2, "Group \uDC00", ("Name \uDC00", "b")));
        scene.Elements[0].PropertySetIds.AddRange([1, 2]);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        AssertNoDuplicateMembers(view.Props);
        Assert.Equal([("Name \uFFFD", "a"), ("Name \uFFFD (2)", "b")], Members(view.Props.GetProperty("1").GetProperty("Group \uFFFD")));
    }

    [Fact]
    public void Props_ElementsThatShareAnId_AreOneEntry()
    {
        // A scene Validate rejects, but the page finds properties by element id.
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2]);
        scene.Elements.Add(new SceneElement { Id = 1, ModelId = 1, Name = "Twin", PropertySetIds = [2] });
        scene.PropertySets.Add(Set(1, "Dimensions", ("Height", "3000 mm")));
        scene.PropertySets.Add(Set(2, "Identity Data", ("Mark", "D1")));
        scene.Elements[0].PropertySetIds.Add(1);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        AssertNoDuplicateMembers(view.Props);
        var element = view.Props.GetProperty("1");
        Assert.Equal([("Height", "3000 mm")], Members(element.GetProperty("Dimensions")));
        Assert.Equal([("Mark", "D1")], Members(element.GetProperty("Identity Data")));
    }

    [Fact]
    public void Materials_AreDeduplicated()
    {
        var scene = TestScenes.Empty();
        scene.Textures.Add(new SceneTexture { Id = 8, Data = [1, 2, 3] });
        scene.Textures.Add(new SceneTexture { Id = 9, MimeType = "image/jpeg", Data = [4, 5], ScaleX = 2, ScaleY = 3 });
        scene.Materials.Add(new SceneMaterial { Id = 5, Color = new RgbaColor(10, 20, 30, 102) });
        scene.Materials.Add(new SceneMaterial { Id = 6, Color = new RgbaColor(10, 20, 30), TextureId = 9 });
        var red = new RgbaColor(255, 0, 0);
        Cube(scene, Vector3d.Zero);
        Cube(scene, Vector3d.Zero).Color = red;
        Cube(scene, Vector3d.Zero).Color = red;
        Cube(scene, Vector3d.Zero).MaterialId = 5;
        Cube(scene, Vector3d.Zero).Color = new RgbaColor(255, 0, 0, 51);
        var textured = Cube(scene, Vector3d.Zero);
        textured.MaterialId = 6;
        textured.Color = red; // the instance colour overrides the material colour, the texture stays

        var view = ViewerHtml.Export(new ViewerDocument(scene));
        var materials = view.Meta.GetProperty("materials");

        Assert.Equal(5, materials.GetArrayLength());
        Assert.Equal([0, 1, 1, 2, 3, 4], view.Instances("material"));
        Assert.Equal([200 / 255.0, 200 / 255.0, 200 / 255.0], Vec(materials[0].GetProperty("color")));
        Assert.Equal([10 / 255.0, 20 / 255.0, 30 / 255.0], Vec(materials[2].GetProperty("color")));
        Assert.Equal(0.4, materials[2].GetProperty("opacity").GetDouble());
        Assert.Equal(0.2, materials[3].GetProperty("opacity").GetDouble(), 9);
        Assert.Equal(System.Text.Json.JsonValueKind.Null, materials[0].GetProperty("texture").ValueKind);
        Assert.Equal([1, 0, 0], Vec(materials[4].GetProperty("color")));
        Assert.Equal(1, materials[4].GetProperty("texture").GetInt32()); // index into the textures, not the id
        var texture = view.Meta.GetProperty("textures")[1];
        Assert.Equal(("image/jpeg", "BAU=", 2.0, 3.0), (texture.GetProperty("mime").GetString(), texture.GetProperty("data").GetString(),
            texture.GetProperty("sx").GetDouble(), texture.GetProperty("sy").GetDouble()));
    }

    [Fact]
    public void InstanceOfMissingElement_HasElementIndexMinusOne()
    {
        var scene = TestScenes.Empty();
        Cube(scene, Vector3d.Zero);
        Cube(scene, Vector3d.Zero).ElementId = 404;

        Assert.Equal([0, -1], ViewerHtml.Export(new ViewerDocument(scene)).Instances("element"));
    }

    [Fact]
    public void Elements_ListEveryElementWithLevelAndLink()
    {
        var scene = TestScenes.Empty();
        scene.Models.Add(new SceneModel { Id = 2, Key = "mep.rvt", Name = "MEP", Path = "links/mep.rvt" });
        scene.Models.Add(new SceneModel { Id = 3, Key = "arch", Name = "Arch" });
        scene.Levels.Add(new SceneLevel { Id = 4, ModelId = 2, Name = "L2" });
        Cube(scene, Vector3d.Zero);
        scene.Elements.Add(new SceneElement { Id = 2, ModelId = 2, Name = "Duct", LevelId = 4, Category = "Ducts" });
        scene.Elements.Add(new SceneElement { Id = 3, ModelId = 3, Name = "Wall", Kind = (SceneNodeKind)99 });
        var doc = new ViewerDocument(scene) { HiddenModelKeys = ["arch"] };

        var meta = ViewerHtml.Export(doc).Meta;
        var elements = meta.GetProperty("elements").EnumerateArray().ToArray();

        // Elements without geometry are listed too; a link is the model's path, else its name.
        Assert.Equal([1L, 2L, 3L], elements.Select(e => e.GetProperty("id").GetInt64()));
        Assert.Equal(["", "L2", ""], elements.Select(e => e.GetProperty("level").GetString()));
        Assert.Equal([null, "links/mep.rvt", "Arch"], elements.Select(e => e.GetProperty("link").GetString()));
        Assert.Equal(["General", "Ducts", "General"], elements.Select(e => e.GetProperty("category").GetString()));
        var files = meta.GetProperty("linkedFiles").EnumerateArray().ToArray();
        Assert.Equal(["MEP", "Arch"], files.Select(f => f.GetProperty("name").GetString()));
        Assert.Equal(["links/mep.rvt", ""], files.Select(f => f.GetProperty("path").GetString()));
        Assert.Equal([true, false], files.Select(f => f.GetProperty("visible").GetBoolean()));
    }

    [Fact]
    public void LinesAndPoints_AreSkippedAndCounted()
    {
        var scene = TestScenes.Empty();
        Cube(scene, Vector3d.Zero);
        scene.Place(scene.Geometry([new(0, 0, 0), new(5, 0, 0)], [], topology: SceneTopology.Lines));
        scene.Place(scene.Geometry([new(0, 0, 9)], [], topology: SceneTopology.Points));
        scene.Place(scene.Geometry([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2], topology: (SceneTopology)7));
        Cube(scene, new Vector3d(2, 0, 0));

        var view = ViewerHtml.Export(new ViewerDocument(scene), new HtmlViewerOptions { MaxMeshVertices = CubeVertices.Length });

        Assert.Equal(3, ViewerPayloadWriter.UndrawnInstances(scene));
        Assert.Equal(3, view.Meta.GetProperty("skipped").GetProperty("instances").GetInt32());
        Assert.Equal(1, view.InstanceCount);
        Assert.Equal(2, view.Meta.GetProperty("truncated").GetProperty("totalMeshes").GetInt32());
        Assert.Equal(5, view.Meta.GetProperty("elements").GetArrayLength());
        Assert.Equal(9, view.Meta.GetProperty("bbox").GetProperty("max")[2].GetDouble() * 2); // the scene bounds count every placed vertex
    }

    [Fact]
    public void NonIndexedTriangles_AreIndexedInOrder()
    {
        var scene = TestScenes.Empty();
        var triangles = scene.Geometry([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0), new(0, 0, 1), new(1, 0, 1), new(0, 1, 1)], []);
        scene.Place(triangles);
        scene.Place(triangles, Transform3d.Translate(new(5, 0, 0)));
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], []);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal([0, 1, 2, 3, 4, 5], view.Read(view.Geometries[0].GetProperty("indices")));
        Assert.Equal([0, 1, 2], view.Read(view.Geometries[1].GetProperty("indices")));
    }

    [Fact]
    public void Schedules_AreShownAsOneTimeLiner()
    {
        DateTimeOffset At(string text) => DateTimeOffset.Parse(text, CultureInfo.InvariantCulture);
        var scene = TestScenes.Empty();
        scene.Schedules.Add(new SceneSchedule { Name = "Empty" });
        scene.Schedules.Add(new SceneSchedule
        {
            Name = "Project 4D",
            Tasks =
            [
                new SceneTask { Id = "1", PlannedStart = At("2026-01-10T08:00:00Z"), PlannedEnd = At("2026-01-20T17:00:00Z") },
                new SceneTask
                {
                    Id = "2",
                    PlannedStart = At("2026-02-01T08:00:00Z"),
                    PlannedEnd = At("2026-03-01T17:00:00Z"),
                    Children = [new SceneTask { Id = "2.1", PlannedStart = At("2026-02-15T08:00:00Z"), PlannedEnd = At("2026-05-30T17:00:00Z"), TaskType = (SceneTaskType)9 }],
                },
            ],
        });
        scene.Schedules.Add(new SceneSchedule
        {
            Name = "Second",
            ModelId = 1,
            Tasks = [new SceneTask { Id = "3", PlannedStart = At("2025-12-01T08:00:00Z"), PlannedEnd = At("2026-01-01T08:00:00Z") }],
        });

        var timeliner = ViewerHtml.Export(new ViewerDocument(scene)).Meta.GetProperty("timeliner");

        Assert.Equal("Project 4D", timeliner.GetProperty("name").GetString());
        Assert.Equal("2025-12-01T08:00:00Z", timeliner.GetProperty("start").GetString());
        Assert.Equal("2026-05-30T17:00:00Z", timeliner.GetProperty("end").GetString());
        Assert.Equal(["1", "2", "2.1", "3"], timeliner.GetProperty("tasks").EnumerateArray().Select(t => t.GetProperty("id").GetString()));
        Assert.Equal("construct", timeliner.GetProperty("tasks")[2].GetProperty("type").GetString()); // a type this version does not know
        Assert.Equal(System.Text.Json.JsonValueKind.Null,
            ViewerHtml.Export(new ViewerDocument(scene), new HtmlViewerOptions { IncludeTimeLiner = false }).Meta.GetProperty("timeliner").ValueKind);
    }

    [Fact]
    public void EmptyDocument_WritesEmptyPayload()
    {
        var view = ViewerHtml.Export(new ViewerDocument());
        Assert.Equal("IOViewer", view.Meta.GetProperty("author").GetString());

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
        var clash = doc.Scene.ClashTests[0].Clashes[0];
        clash.Element1Id = 101;

        var written = ViewerHtml.Export(doc).Meta.GetProperty("clashTests")[0].GetProperty("clashes")[0];

        Assert.Equal("C1", written.GetProperty("id").GetString());
        Assert.Equal(101, written.GetProperty("element1Id").GetInt64());
        Assert.Equal(System.Text.Json.JsonValueKind.Null, written.GetProperty("element2Id").ValueKind);
        Assert.Equal("Ground Floor Slab", written.GetProperty("element1Name").GetString());
        Assert.Equal("Column C1", written.GetProperty("element2Name").GetString());
        Assert.Equal("Active", written.GetProperty("status").GetString());

        clash.Status = SceneClashStatus.Approved;
        Assert.Equal("Approved", StatusOf(doc));
        clash.Status = (SceneClashStatus)42; // a status this version does not know is shown as Active
        Assert.Equal("Active", StatusOf(doc));
    }

    [Fact]
    public void ClashDistance_IsNullWhenNotReported()
    {
        var doc = GeoreferencedModel();
        System.Text.Json.JsonElement Distance() => ViewerHtml.Export(doc).Meta.GetProperty("clashTests")[0].GetProperty("clashes")[0].GetProperty("distance");

        Assert.Equal(-0.02, Distance().GetDouble());
        doc.Scene.ClashTests[0].Clashes[0].Distance = null;
        Assert.Equal(System.Text.Json.JsonValueKind.Null, Distance().ValueKind);
    }

    private static string? StatusOf(ViewerDocument doc) =>
        ViewerHtml.Export(doc).Meta.GetProperty("clashTests")[0].GetProperty("clashes")[0].GetProperty("status").GetString();

    [Fact]
    public void Viewpoints_WriteProjection()
    {
        var doc = GeoreferencedModel();
        doc.Scene.Viewpoints.Add(new SceneViewpoint
        {
            Name = "Plan",
            Camera = new SceneCamera
            {
                Position = new Vector3d(OffsetX + 5, OffsetY + 7.5, 50),
                Target = new Vector3d(OffsetX + 5, OffsetY + 7.5, 0),
                Projection = SceneProjection.Orthographic
            },
        });
        doc.Scene.Viewpoints.Add(new SceneViewpoint { Name = "Later", Camera = new SceneCamera { Projection = (SceneProjection)4 } });

        var viewpoints = ViewerHtml.Export(doc).Meta.GetProperty("viewpoints");

        Assert.Equal("perspective", viewpoints[0].GetProperty("camera").GetProperty("projection").GetString());
        Assert.Equal("orthographic", viewpoints[1].GetProperty("camera").GetProperty("projection").GetString());
        Assert.Equal("perspective", viewpoints[2].GetProperty("camera").GetProperty("projection").GetString()); // a projection this version does not know
    }

    [Fact]
    public void Export_200kElements_DoesNotBuildWholeString()
    {
        const int count = 200_000;
        var scene = TestScenes.Empty();
        for (int i = 0; i < count; i++)
        {
            double x = i % 1000 * 2, y = i / 1000 * 2;
            scene.Geometries.Add(new SceneGeometry { Id = i, Vertices = [new(x, y, 0), new(x + 1, y, 0), new(x, y + 1, 0)], Indices = [0, 1, 2] });
            scene.Elements.Add(new SceneElement { Id = i, ModelId = 1, Name = $"Element {i}", Category = "Walls" });
            scene.Instances.Add(new SceneInstance { ElementId = i, GeometryId = i });
        }
        var doc = new ViewerDocument(scene);

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
        var scene = TestScenes.Empty();
        var shared = scene.Geometry(vertices, [0, 1, 2]);
        scene.Place(shared);
        scene.Place(shared);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
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
        var scene = TestScenes.Empty();
        scene.Mesh([new(0, 0, 0), new(100, 0, 0), new(0, 1, 0)], [0, 1, 2]);

        var geometry = ViewerHtml.Export(new ViewerDocument(scene)).Geometries[0];

        Assert.Equal("f32", geometry.GetProperty("positions").GetProperty("t").GetString());
        Assert.False(geometry.TryGetProperty("q", out _));
    }

    [Fact]
    public void Format3_OwnMeshesShareGridVertices()
    {
        // Two georeferenced meshes off the grid that meet at a corner; each is placed by its own translation.
        var corner = new Vector3d(OffsetX + 1.2345678, OffsetY + 2.3456789, 0.1234567);
        var scene = TestScenes.Empty();
        scene.Mesh([corner, corner + new Vector3d(-2.5, 0.1, 0), corner + new Vector3d(0, -1.7, 0.3)], [0, 1, 2]);
        scene.Mesh([corner + new Vector3d(1.1, 0.9, 0), corner, corner + new Vector3d(3.3, 0, 0.2), corner + new Vector3d(0, 2, 1)], [0, 1, 2, 0, 2, 3]);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
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
        var scene = TestScenes.Empty();
        var shared = scene.Geometry([.. Enumerable.Range(0, 6).Select(i => new Vector3d(i, i % 2, 0))], [0, 1, 2, 3, 4, 5], normals);
        scene.Place(shared);
        scene.Place(shared);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
        var written = view.Geometries[0].GetProperty("normals");

        Assert.Equal("i16", written.GetProperty("t").GetString());
        Assert.Equal(expected, view.Read(written));
    }

    [Fact]
    public void Format3_DedupesTranslatedCopies()
    {
        Vector3d[] shape = [new(0.1234, 0.5678, 0.9012), new(1.3456, 0.2345, 0.1111), new(0.4444, 2.3333, 0.7777)];
        var scene = TestScenes.Empty();
        scene.Mesh(shape, [0, 1, 2]);
        scene.Mesh([.. shape.Select(v => v + new Vector3d(3.0, 0, 0))], [0, 1, 2]);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

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
        var scene = TestScenes.Empty();
        var shared = scene.Geometry(vertices, [0, 1, 2]);
        scene.Place(shared, Transform3d.Translate(new(OffsetX, OffsetY, 0)));
        scene.Place(shared, scaled);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
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
        var scene = TestScenes.Empty();
        var shared = scene.Geometry(vertices, [0, 1, 2]);
        scene.Place(shared, moved);
        scene.Place(shared, half);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
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
        var scene = TestScenes.Empty();
        scene.Mesh(own, [0, 1, 2]);
        var shared = scene.Geometry(local, [0, 1, 2]);
        scene.Place(shared, place);
        scene.Mesh([.. own.Select(v => v + shift)], [0, 1, 2]);
        scene.Place(shared, place);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal([0, 1, 0, 1], view.Instances("geometry"));
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
        var scene = TestScenes.Empty();
        var shared = scene.Geometry(vertices, indices);
        scene.Place(shared, Transform3d.Identity);
        scene.Place(shared, rotated);

        var view = ViewerHtml.Export(new ViewerDocument(scene));
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
        var scene = TestScenes.Empty();
        scene.Mesh(triangle, [0, 1, 2], mirror, up);
        scene.Mesh(triangle, [0, 1, 2], Transform3d.Translate(new(-5, 0, 0)), up);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

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
        var scene = TestScenes.Empty();
        scene.Mesh(triangle, [0, 1, 2]);
        scene.Mesh(triangle, [0, 1, 2], mirror);

        var view = ViewerHtml.Export(new ViewerDocument(scene));

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
        var scene = TestScenes.Empty();
        for (int i = 0; i < 1000; i++)
        {
            var shift = new Vector3d(OffsetX + random.Next(0, 10000) / 1000.0, OffsetY + random.Next(0, 10000) / 1000.0, random.Next(0, 10000) / 1000.0);
            scene.Mesh([.. shape.Select(p => p + shift)], indices);
        }

        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(1, view.Geometries.GetArrayLength());
        Assert.Equal(1000, view.InstanceCount);
        var rtc = Vec(view.Meta.GetProperty("rtcOffset"));
        var p = view.Positions(view.Geometries[0]);
        var matrix = view.Instances("matrix");
        for (int i = 0; i < 1000; i++)
        {
            var vertices = scene.Geometries[i].Vertices;
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
