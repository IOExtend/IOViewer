using System.Buffers.Binary;
using System.Text;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class GlbSharedGeometryTests
{
    // One triangle mesh (first vertex configurable, others (1,0,0), (0,1,0)) plus the given nodes and scene roots.
    private static ViewerDocument Import(string nodesJson, string rootNodes, float[]? vertex0 = null)
    {
        var bin = new byte[44];
        float[] pos = [vertex0?[0] ?? 0, vertex0?[1] ?? 0, vertex0?[2] ?? 0, 1, 0, 0, 0, 1, 0];
        for (int i = 0; i < 9; i++) BinaryPrimitives.WriteSingleLittleEndian(bin.AsSpan(i * 4, 4), pos[i]);
        for (int i = 0; i < 3; i++) BinaryPrimitives.WriteUInt16LittleEndian(bin.AsSpan(36 + i * 2, 2), (ushort)i);

        string json = $$"""
        {
          "asset": { "version": "2.0" },
          "buffers": [{ "byteLength": 44 }],
          "bufferViews": [
            { "buffer": 0, "byteOffset": 0, "byteLength": 36 },
            { "buffer": 0, "byteOffset": 36, "byteLength": 6 }
          ],
          "accessors": [
            { "bufferView": 0, "componentType": 5126, "count": 3, "type": "VEC3" },
            { "bufferView": 1, "componentType": 5123, "count": 3, "type": "SCALAR" }
          ],
          "meshes": [{ "name": "Tri", "primitives": [{ "attributes": { "POSITION": 0 }, "indices": 1 }] }],
          "nodes": [{{nodesJson}}],
          "scenes": [{ "nodes": [{{rootNodes}}] }]
        }
        """;

        byte[] jsonBytes = Encoding.UTF8.GetBytes(json);
        byte[] paddedJson = new byte[(jsonBytes.Length + 3) / 4 * 4];
        Array.Fill(paddedJson, (byte)0x20);
        jsonBytes.CopyTo(paddedJson, 0);

        using var ms = new MemoryStream();
        using var bw = new BinaryWriter(ms);
        bw.Write(0x46546C67u);
        bw.Write(2u);
        bw.Write((uint)(12 + 8 + paddedJson.Length + 8 + bin.Length));
        bw.Write((uint)paddedJson.Length);
        bw.Write(0x4E4F534Au);
        bw.Write(paddedJson);
        bw.Write((uint)bin.Length);
        bw.Write(0x004E4942u);
        bw.Write(bin);
        bw.Flush();
        ms.Position = 0;
        return GlbViewerImporter.Load(ms, "Test");
    }

    private static void AssertNear(Vector3d expected, Vector3d actual)
    {
        Assert.True(Vector3d.Distance(expected, actual) < 1e-6, $"expected {expected}, got {actual}");
    }

    private static Vector3d World(ViewerDocument doc, int meshIndex)
    {
        var mesh = doc.Meshes[meshIndex];
        var geometry = doc.Geometries[mesh.GeometryId!.Value];
        return (mesh.Transform ?? Transform3d.Identity).Apply(geometry.Vertices[0]);
    }

    [Fact]
    public void TwoNodesSharingMesh_ProduceOneGeometryTwoMeshes()
    {
        var doc = Import("""{ "mesh": 0, "translation": [0,0,0] }, { "mesh": 0, "translation": [10,0,0] }""", "0, 1");

        Assert.Single(doc.Geometries);
        Assert.Equal(2, doc.Meshes.Count);
        Assert.Equal(doc.Meshes[0].GeometryId, doc.Meshes[1].GeometryId);
        Assert.Empty(doc.Meshes[0].Vertices);
        AssertNear(new Vector3d(10, 0, 0), World(doc, 1));
    }

    [Fact]
    public void YUp_IsConvertedToZUp()
    {
        var doc = Import("""{ "mesh": 0 }""", "0", [0, 1, 0]);

        AssertNear(new Vector3d(0, 0, 1), World(doc, 0));
    }

    [Fact]
    public void NodeRotationQuaternion_IsApplied()
    {
        var doc = Import("""{ "mesh": 0, "rotation": [0, 0.7071068, 0, 0.7071068] }""", "0", [1, 0, 0]);

        AssertNear(new Vector3d(0, 1, 0), World(doc, 0));
    }

    [Fact]
    public void NestedNodes_ComposeParentThenChild()
    {
        var doc = Import("""{ "translation": [0,5,0], "children": [1] }, { "mesh": 0, "translation": [1,0,0] }""", "0");

        AssertNear(new Vector3d(1, 0, 5), World(doc, 0));
    }

    [Fact]
    public void NodeMatrix_IsApplied()
    {
        var doc = Import("""{ "mesh": 0, "matrix": [1,0,0,0, 0,1,0,0, 0,0,1,0, 3,0,0,1] }""", "0");

        AssertNear(new Vector3d(3, 0, 0), World(doc, 0));
    }

    [Fact]
    public void NodeCycle_Throws()
    {
        Assert.Throws<InvalidDataException>(() => Import("""{ "children": [0] }""", "0"));
    }
}
