using System.Buffers.Binary;
using System.Text;
using IOScene;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class JsonAndImportTests
{
    private static ViewerDocument SampleDocument()
    {
        var scene = TestScenes.Empty("Test Document");
        scene.Models[0].Author = "IOExtend";
        scene.Models.Add(new SceneModel { Id = 2, Key = "mep.rvt", Name = "MEP", Path = "mep.rvt" });
        scene.Mesh([new(0, 0, 0), new(1, 0, 0), new(1, 1, 0)], [0, 1, 2], Transform3d.Translate(new(5, 0, 0))).Color = new RgbaColor(255, 0, 0);
        scene.PropertySets.Add(new ScenePropertySet
        {
            Id = 1,
            Name = "Dimensions",
            Properties = [new SceneProperty { Name = "Width", Value = SceneValue.FromNumber(0.2, "m", "200 mm") }],
        });
        scene.Elements[0].PropertySetIds.Add(1);
        scene.Elements[0].SourceId = "2xQ$n5SLP5MBLyL442paFx";
        scene.Grids.Add(new SceneGridSystem { ModelId = 1, Lines = [new SceneGridLine { Name = "A", End = new(0, 10, 0) }] });
        scene.Schedules.Add(new SceneSchedule
        {
            Name = "4D",
            Tasks = [new SceneTask { Id = "T1", Name = "Build", ElementIds = [1], Children = [new SceneTask { Id = "T1.1", Name = "Sub" }] }],
        });
        scene.ClashTests.Add(new SceneClashTest { Name = "T", Clashes = [new SceneClashResult { Id = "c1", Element1Id = 1, Status = SceneClashStatus.Reviewed }] });
        return new ViewerDocument(scene)
        {
            SectionPlanes = [new ViewerSectionPlane(ViewerSectionAxis.Z, 2.5, inverted: true)],
            SectionBox = new ViewerSectionBox(new(-1, -2, -3), new(4, 5, 6), enabled: false),
            HiddenModelKeys = ["mep.rvt"],
        };
    }

    [Fact]
    public void ViewerJson_Format2_RoundTrips()
    {
        var doc = SampleDocument();

        string json = JsonViewerExporter.ExportToString(doc);
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(json));
        var imported = JsonViewerImporter.Load(ms);

        Assert.StartsWith("{\n  \"Kind\": \"ioviewer\",\n  \"Format\": 2,\n  \"Scene\": {\n    \"Kind\": \"ioscene\",", json.ReplaceLineEndings("\n"), StringComparison.Ordinal);
        Assert.Equal(SceneJson.Write(doc.Scene), SceneJson.Write(imported.Scene));
        Assert.Equal("Test Document", imported.Title);
        var plane = Assert.Single(imported.SectionPlanes);
        Assert.Equal((ViewerSectionAxis.Z, Vector3d.UnitZ, 2.5, true, true), (plane.Axis, plane.Normal, plane.Offset, plane.Enabled, plane.Inverted));
        Assert.Equal((new Vector3d(-1, -2, -3), new Vector3d(4, 5, 6), false), (imported.SectionBox!.Min, imported.SectionBox.Max, imported.SectionBox.Enabled));
        Assert.Equal(["mep.rvt"], imported.HiddenModelKeys);
        Assert.Contains("\"SectionBox\": {\n    \"Min\": [\n      -1,", json.ReplaceLineEndings("\n"), StringComparison.Ordinal); // vectors are arrays
    }

    [Fact]
    public void ViewerJson_CompactAndFile_ReadBack()
    {
        var doc = SampleDocument();
        doc.SectionBox = null;
        string compact = JsonViewerExporter.ExportToString(doc, indented: false);
        string path = Path.Combine(Path.GetTempPath(), $"ioviewer_test_{Guid.NewGuid():N}.json");
        try
        {
            JsonViewerExporter.Save(doc, path, indented: false);

            Assert.Equal(compact, File.ReadAllText(path));
            Assert.StartsWith("{\"Kind\":\"ioviewer\",\"Format\":2,", compact, StringComparison.Ordinal);
            Assert.DoesNotContain("SectionBox", compact, StringComparison.Ordinal);
            var imported = JsonViewerImporter.Load(path);
            Assert.Null(imported.SectionBox);
            Assert.Equal(SceneJson.Write(doc.Scene), SceneJson.Write(imported.Scene));
        }
        finally
        {
            if (File.Exists(path)) File.Delete(path);
        }
    }

    [Theory]
    [InlineData("""{"Kind":"ioviewer","Format":3,"Scene":{"Kind":"ioscene","Format":1}}""", "IOViewer JSON format 3 is newer than this version reads")]
    [InlineData("""{"Format":2,"Kind":"ioviewer","Scene":{"Kind":"ioscene","Format":99}}""", "IOScene format 99 is not supported")]
    [InlineData("""{"Kind":"ioviewer","Scene":{"Kind":"ioscene","Format":1}}""", "Format is missing")]
    [InlineData("""{"Kind":"ioviewer","Format":1}""", "Format is 1, expected 2")]
    [InlineData("""{"Kind":"ioscene","Format":2}""", "IOScene format 2 is not supported")]
    [InlineData("""{"Kind":"other","Format":1}""", "Unknown JSON kind 'other'")]
    [InlineData("""{"Kind":7}""", "Kind is not a string")]
    [InlineData("""[1, 2]""", "the root is not an object")]
    [InlineData("""{"Kind":"ioviewer","Format":2""", "Not a readable IOViewer JSON file")]
    public void UnreadableJson_IsRejectedWithAClearMessage(string json, string message)
    {
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(json));

        var ex = Assert.Throws<InvalidDataException>(() => JsonViewerImporter.Load(ms));
        Assert.Contains(message, ex.Message, StringComparison.Ordinal);
    }

    // A member larger than the read buffer before Kind, a BOM, and a stream that cannot seek.
    [Theory]
    [InlineData(false, false)]
    [InlineData(true, false)]
    [InlineData(false, true)]
    [InlineData(true, true)]
    public void ViewerJson_WithLongMemberBeforeKind_LoadsFromAnyStream(bool bom, bool seekable)
    {
        string json = JsonViewerExporter.ExportToString(SampleDocument(), indented: false);
        json = $$"""{"Note":"{{new string('x', 200_000)}}",{{json[1..]}}""";
        byte[] bytes = [.. bom ? (byte[])[0xEF, 0xBB, 0xBF] : [], .. Encoding.UTF8.GetBytes(json)];
        using var ms = new MemoryStream(bytes);
        using Stream input = seekable ? ms : new ForwardOnlyStream(ms);

        var doc = JsonViewerImporter.Load(input);

        Assert.Equal(SceneJson.Write(SampleDocument().Scene), SceneJson.Write(doc.Scene));
        Assert.Equal(["mep.rvt"], doc.HiddenModelKeys);
    }

    [Fact]
    public void SeekableStream_IsReadFromItsPosition()
    {
        byte[] json = Encoding.UTF8.GetBytes(JsonViewerExporter.ExportToString(SampleDocument()));
        using var ms = new MemoryStream([.. "junk"u8, .. json]) { Position = 4 };

        Assert.Equal("Test Document", JsonViewerImporter.Load(ms).Title);
    }

    private sealed class ForwardOnlyStream(Stream inner) : Stream
    {
        public override bool CanRead => true;
        public override bool CanSeek => false;
        public override bool CanWrite => false;
        public override long Length => throw new NotSupportedException();
        public override long Position { get => throw new NotSupportedException(); set => throw new NotSupportedException(); }
        public override int Read(byte[] buffer, int offset, int count) => inner.Read(buffer, offset, Math.Min(count, 1000));
        public override void Flush() { }
        public override long Seek(long offset, SeekOrigin origin) => throw new NotSupportedException();
        public override void SetLength(long value) => throw new NotSupportedException();
        public override void Write(byte[] buffer, int offset, int count) => throw new NotSupportedException();
    }

    [Fact]
    public void SceneFile_LoadsAsDocumentWithoutSectionsAndExportsToHtml()
    {
        var scene = SampleDocument().Scene;
        using var ms = new MemoryStream();
        SceneJson.Write(scene, ms);
        ms.Position = 0;

        var doc = JsonViewerImporter.Load(ms);

        Assert.Equal(SceneJson.Write(scene), SceneJson.Write(doc.Scene));
        Assert.Empty(doc.SectionPlanes);
        Assert.Null(doc.SectionBox);
        Assert.Empty(doc.HiddenModelKeys);
        var view = ViewerHtml.Export(doc);
        Assert.Equal(1, view.InstanceCount);
        Assert.Equal("2xQ$n5SLP5MBLyL442paFx", view.Meta.GetProperty("elements")[0].GetProperty("sourceId").GetString());
        Assert.Equal("200 mm", view.Props.GetProperty("1").GetProperty("Dimensions").GetProperty("Width").GetString());
        Assert.True(view.Meta.GetProperty("linkedFiles")[0].GetProperty("visible").GetBoolean());
    }

    [Fact]
    public void ObjViewerImporter_ParsesWavefrontObj()
    {
        const string objData = """
            # Wavefront OBJ test
            o TestBox
            v 0.0 0.0 0.0
            v 2.0 0.0 0.0
            v 2.0 3.0 0.0
            v 0.0 3.0 0.0
            f 1 2 3
            f 1 3 4
            """;

        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(objData));
        var doc = ObjViewerImporter.Load(ms, "OBJ Model");

        var scene = doc.Scene;
        Assert.Empty(scene.Validate());
        var model = Assert.Single(scene.Models);
        Assert.Equal(("model", "OBJ Model", "obj"), (model.Key, model.Name, model.SourceFormat));
        var instance = Assert.Single(scene.Instances);
        var mesh = Assert.Single(scene.Geometries);
        Assert.Equal(mesh.Id, instance.GeometryId);
        Assert.Equal("TestBox", instance.Name);
        Assert.Equal(new RgbaColor(180, 180, 180), instance.Color);
        Assert.Equal(4, mesh.Vertices.Count);
        Assert.Equal(6, mesh.Indices.Count);
        Assert.Equal(new Vector3d(0, 0, 0), mesh.Vertices[0]);
        Assert.Equal(new Vector3d(2, 0, 0), mesh.Vertices[1]);
        Assert.Equal(new Vector3d(2, 3, 0), mesh.Vertices[2]);
        Assert.Equal(new Vector3d(0, 3, 0), mesh.Vertices[3]);
        var element = Assert.Single(scene.Elements);
        Assert.Equal(("TestBox", "OBJ", element.Id), (element.Name, element.Category, instance.ElementId));
    }

    [Fact]
    public void ObjViewerImporter_FromFile_KeysTheModelByFileName()
    {
        string path = Path.Combine(Path.GetTempPath(), $"ioviewer_test_{Guid.NewGuid():N}.obj");
        try
        {
            File.WriteAllText(path, TwoBoxesObj);
            var model = Assert.Single(ObjViewerImporter.Load(path).Scene.Models);
            Assert.Equal((Path.GetFileName(path), Path.GetFileNameWithoutExtension(path), path), (model.Key, model.Name, model.Path));
        }
        finally
        {
            if (File.Exists(path)) File.Delete(path);
        }
    }

    private const string TwoBoxesObj = """
        o Box1
        v 0 0 0
        v 1 0 0
        v 0 1 0
        f 1 2 3
        o Box2
        v 10 0 0
        v 11 0 0
        v 10 1 0
        f 4 5 6
        f -3 -2 -1
        """;

    [Fact]
    public void ObjViewerImporter_CreatesOneElementPerObject()
    {
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(TwoBoxesObj));
        var scene = ObjViewerImporter.Load(ms).Scene;

        Assert.Empty(scene.Validate());
        Assert.Equal(["Box1", "Box2"], scene.Elements.Select(e => e.Name));
        Assert.All(scene.Elements, e => Assert.Equal("OBJ", e.Category));
        Assert.Equal(2, scene.Elements.Select(e => e.Id).Distinct().Count());
        Assert.Equal(scene.Elements.Select(e => e.Id), scene.Instances.Select(i => i.ElementId));

        // Box2 carries only its own three vertices, reindexed; negative (relative) indices resolve to the same ones.
        var box2 = Assert.Single(scene.Geometries, g => g.Id == scene.Instances[1].GeometryId);
        Assert.Equal([new Vector3d(10, 0, 0), new Vector3d(11, 0, 0), new Vector3d(10, 1, 0)], box2.Vertices);
        Assert.Equal([0, 1, 2, 0, 1, 2], box2.Indices);
    }

    [Fact]
    public void ObjViewerImporter_FacesBeforeAnyObjectGetDefaultElement()
    {
        const string objData = """
            v 0 0 0
            v 1 0 0
            v 0 1 0
            f 1 2 3
            """;

        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(objData));
        var doc = ObjViewerImporter.Load(ms);

        Assert.Equal("DefaultMesh", Assert.Single(doc.Scene.Elements).Name);
    }

    [Fact]
    public void ObjViewerImporter_FaceVertexNotYetRead_Throws()
    {
        const string objData = """
            o A
            v 0 0 0
            v 1 0 0
            f 1 2 3
            o B
            v 0 1 0
            """;

        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(objData));
        var ex = Assert.Throws<InvalidDataException>(() => ObjViewerImporter.Load(ms));
        Assert.Contains("face vertex 3 is outside the 2 vertices", ex.Message, StringComparison.Ordinal);
    }

    [Fact]
    public void ObjImport_ExportedInstancesReferenceElements()
    {
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(TwoBoxesObj));
        var view = ViewerHtml.Export(ObjViewerImporter.Load(ms));

        var elements = view.Instances("element");
        Assert.Equal(2, elements.Length);
        Assert.All(elements, e => Assert.True(e >= 0));
        Assert.Equal(2, elements.Distinct().Count());
        Assert.Equal(2, view.Meta.GetProperty("elements").GetArrayLength());
    }

    [Fact]
    public void GlbViewerImporter_CreatesOneElementPerNode()
    {
        var doc = GlbSharedGeometryTests.Import(
            """{ "name": "Left", "mesh": 0 }, { "name": "Right", "mesh": 0, "translation": [10,0,0] }, { "mesh": 0 }""", "0, 1, 2");

        // Two named nodes share one mesh and still select separately; an unnamed node takes the mesh name.
        var scene = doc.Scene;
        Assert.Empty(scene.Validate());
        Assert.Equal(["Left", "Right", "Tri"], scene.Elements.Select(e => e.Name));
        Assert.All(scene.Elements, e => Assert.Equal("GLB", e.Category));
        Assert.Equal(3, scene.Elements.Select(e => e.Id).Distinct().Count());
        Assert.Equal(scene.Elements.Select(e => e.Id), scene.Instances.Select(i => i.ElementId));
        Assert.All(scene.Instances, i => Assert.Equal(scene.Geometries[0].Id, i.GeometryId));
        Assert.All(scene.Instances, i => Assert.Equal(new RgbaColor(200, 200, 200), i.Color)); // no glTF material
    }

    [Fact]
    public void GlbViewerImporter_ParsesBinaryGltf()
    {
        // Construct minimal valid GLB in memory
        // 3 vertices: (0,0,0), (1,0,0), (0,1,0) = 36 bytes float
        // 3 indices: 0, 1, 2 (ushort) = 6 bytes + 2 pad = 8 bytes
        var posBytes = new byte[36];
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(0, 4), 0.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(4, 4), 0.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(8, 4), 0.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(12, 4), 1.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(16, 4), 0.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(20, 4), 0.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(24, 4), 0.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(28, 4), 1.0f);
        BinaryPrimitives.WriteSingleLittleEndian(posBytes.AsSpan(32, 4), 0.0f);

        var idxBytes = new byte[8];
        BinaryPrimitives.WriteUInt16LittleEndian(idxBytes.AsSpan(0, 2), 0);
        BinaryPrimitives.WriteUInt16LittleEndian(idxBytes.AsSpan(2, 2), 1);
        BinaryPrimitives.WriteUInt16LittleEndian(idxBytes.AsSpan(4, 2), 2);

        var binBuffer = new byte[44];
        Buffer.BlockCopy(posBytes, 0, binBuffer, 0, 36);
        Buffer.BlockCopy(idxBytes, 0, binBuffer, 36, 8);

        string json = """
        {
          "asset": { "version": "2.0" },
          "buffers": [{ "byteLength": 44 }],
          "bufferViews": [
            { "buffer": 0, "byteOffset": 0, "byteLength": 36, "target": 34962 },
            { "buffer": 0, "byteOffset": 36, "byteLength": 6, "target": 34963 }
          ],
          "accessors": [
            { "bufferView": 0, "byteOffset": 0, "componentType": 5126, "count": 3, "type": "VEC3", "max": [1,1,0], "min": [0,0,0] },
            { "bufferView": 1, "byteOffset": 0, "componentType": 5123, "count": 3, "type": "SCALAR", "max": [2], "min": [0] }
          ],
          "meshes": [
            {
              "name": "GlbTriangle",
              "primitives": [{ "attributes": { "POSITION": 0 }, "indices": 1, "material": 0 }]
            }
          ],
          "materials": [{ "name": "Orange glass", "pbrMetallicRoughness": { "baseColorFactor": [1, 0.5, 0, 0.5] } }]
        }
        """;

        byte[] jsonBytes = Encoding.UTF8.GetBytes(json);
        // Pad JSON to 4-byte boundary
        int jsonPadding = (4 - (jsonBytes.Length % 4)) % 4;
        byte[] paddedJson = new byte[jsonBytes.Length + jsonPadding];
        Buffer.BlockCopy(jsonBytes, 0, paddedJson, 0, jsonBytes.Length);
        for (int i = 0; i < jsonPadding; i++) paddedJson[jsonBytes.Length + i] = 0x20;

        uint totalLen = 12 + 8 + (uint)paddedJson.Length + 8 + (uint)binBuffer.Length;

        using var ms = new MemoryStream();
        using var bw = new BinaryWriter(ms);
        // Header
        bw.Write(0x46546C67u); // Magic
        bw.Write(2u);          // Version
        bw.Write(totalLen);    // Length

        // Chunk 0 (JSON)
        bw.Write((uint)paddedJson.Length);
        bw.Write(0x4E4F534Au); // "JSON"
        bw.Write(paddedJson);

        // Chunk 1 (BIN)
        bw.Write((uint)binBuffer.Length);
        bw.Write(0x004E4942u); // "BIN\0"
        bw.Write(binBuffer);

        bw.Flush();
        ms.Position = 0;

        var scene = GlbViewerImporter.Load(ms, "Sample GLB").Scene;
        Assert.Empty(scene.Validate());
        var model = Assert.Single(scene.Models);
        Assert.Equal(("model", "Sample GLB", "glb"), (model.Key, model.Name, model.SourceFormat));
        var mesh = Assert.Single(scene.Instances);
        Assert.Equal("GlbTriangle", mesh.Name);
        var geometry = Assert.Single(scene.Geometries);
        Assert.Equal(geometry.Id, mesh.GeometryId);
        Assert.Equal(3, geometry.Vertices.Count);
        Assert.Equal(3, geometry.Indices.Count);
        Assert.Equal(new Vector3d(1, 0, 0), geometry.Vertices[1]);
        var material = Assert.Single(scene.Materials);
        Assert.Equal((material.Id, (RgbaColor?)null), (mesh.MaterialId, mesh.Color));
        Assert.Equal(new RgbaColor(255, 127, 0, 127), material.Color); // the base colour factor, alpha once

        // Without a scene graph the element is named after the mesh.
        var element = Assert.Single(scene.Elements);
        Assert.Equal(("GlbTriangle", "GLB", element.Id), (element.Name, element.Category, mesh.ElementId));
    }
}
