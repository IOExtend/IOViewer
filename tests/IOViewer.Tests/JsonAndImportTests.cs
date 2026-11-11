using System.Buffers.Binary;
using System.Text;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class JsonAndImportTests
{
    [Fact]
    public void JsonExportAndImport_RoundtripsSuccessfully()
    {
        var doc = new ViewerDocument("Test Document")
        {
            Author = "IOExtend",
            CreatedAt = "2026-11-11"
        };

        var mesh = new ViewerMesh
        {
            Id = 1,
            Name = "Cube",
            Vertices = [new(0, 0, 0), new(1, 0, 0), new(1, 1, 0)],
            Indices = [0, 1, 2],
            Color = new RgbaColor(255, 0, 0)
        };
        doc.Meshes.Add(mesh);

        var json = JsonViewerExporter.ExportToString(doc);
        Assert.Contains("Test Document", json);
        Assert.Contains("Cube", json);

        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(json));
        var imported = JsonViewerImporter.Load(ms);

        Assert.Equal("Test Document", imported.Title);
        Assert.Single(imported.Meshes);
        Assert.Equal("Cube", imported.Meshes[0].Name);
        Assert.Equal(3, imported.Meshes[0].Vertices.Count);
        Assert.Equal(3, imported.Meshes[0].Indices.Count);
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

        Assert.NotNull(doc);
        Assert.Single(doc.Meshes);
        var mesh = doc.Meshes[0];
        Assert.Equal("TestBox", mesh.Name);
        Assert.Equal(4, mesh.Vertices.Count);
        Assert.Equal(6, mesh.Indices.Count);
        Assert.Equal(new Vector3d(0, 0, 0), mesh.Vertices[0]);
        Assert.Equal(new Vector3d(2, 0, 0), mesh.Vertices[1]);
        Assert.Equal(new Vector3d(2, 3, 0), mesh.Vertices[2]);
        Assert.Equal(new Vector3d(0, 3, 0), mesh.Vertices[3]);
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
              "primitives": [{ "attributes": { "POSITION": 0 }, "indices": 1 }]
            }
          ]
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

        var doc = GlbViewerImporter.Load(ms, "Sample GLB");
        Assert.NotNull(doc);
        Assert.Single(doc.Meshes);
        var mesh = doc.Meshes[0];
        Assert.Equal("GlbTriangle", mesh.Name);
        Assert.Equal(3, mesh.Vertices.Count);
        Assert.Equal(3, mesh.Indices.Count);
        Assert.Equal(new Vector3d(1, 0, 0), mesh.Vertices[1]);
    }
}
