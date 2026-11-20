using System.Text.Json;
using IOScene;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class ClusterSourceTests
{
    [Fact]
    public void WritesRebasedMirroredGeometryAndPreservesMaterialAlpha()
    {
        const long elementId = 9_007_199_254_740_993;
        var scene = new SceneDocument();
        scene.PropertySets.Add(new ScenePropertySet
        {
            Id = 1, Name = "Dimensions",
            Properties = [new SceneProperty { Name = "Thickness", Value = SceneValue.FromText("300 mm") }],
        });
        scene.Elements.Add(new SceneElement { Id = elementId, ModelId = 1, Name = "Slab", PropertySetIds = [1] });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 1, Vertices = [Vector3d.Zero, Vector3d.UnitX, Vector3d.UnitY], Indices = [0, 1, 2],
            Normals = [Vector3d.UnitZ, Vector3d.UnitZ, Vector3d.UnitZ],
        });
        scene.Instances.Add(new SceneInstance
        {
            GeometryId = 1, ElementId = elementId, Color = new RgbaColor(40, 80, 120, 160),
            Transform = new(-Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ, new Vector3d(1_000_000, 0, 0)),
        });
        var directory = Directory.CreateTempSubdirectory();
        var path = Path.Combine(directory.FullName, "model.ivmesh");
        try
        {
            var doc = new ViewerDocument(scene);
            var options = new HtmlViewerOptions { Title = "Cluster review" };
            Assert.Equal(1, ClusterSourceWriter.Save(doc, path, options));
            Assert.Throws<IOException>(() => ClusterSourceWriter.Save(doc, path, options));
            using var reader = new BinaryReader(File.OpenRead(path));
            Assert.Equal("IMS3"u8.ToArray(), reader.ReadBytes(4));
            Assert.Equal(999_999.5, reader.ReadDouble());
            Assert.Equal(0.5, reader.ReadDouble());
            Assert.Equal(0, reader.ReadDouble());
            long geometryEnd = reader.ReadInt64();
            Assert.Equal(new float[] { -0.5f, -0.5f, 0, 0.5f, 0.5f, 0 }, Enumerable.Range(0, 6).Select(_ => reader.ReadSingle()));
            Assert.Equal(3, reader.ReadInt32());
            Assert.Equal(3, reader.ReadInt32());
            Assert.Equal(new byte[] { 40, 80, 120, 160 }, reader.ReadBytes(4));
            Assert.Equal(1, reader.ReadInt32());
            Assert.Equal(elementId, reader.ReadInt64());
            Assert.Equal(-1, reader.ReadInt32());
            Assert.Equal(0, reader.ReadInt32());
            Assert.Equal(new float[] { 0.5f, -0.5f, 0, 0.5f, 0.5f, 0, -0.5f, -0.5f, 0 }, Enumerable.Range(0, 9).Select(_ => reader.ReadSingle()));
            Assert.Equal(new float[] { 0, 0, 1, 0, 0, 1, 0, 0, 1 }, Enumerable.Range(0, 9).Select(_ => reader.ReadSingle()));
            Assert.Equal(0, reader.ReadInt32());
            Assert.Equal(1, reader.ReadInt32());
            Assert.Equal(2, reader.ReadInt32());
            Assert.Equal(geometryEnd, reader.BaseStream.Position);
            using var review = JsonDocument.Parse(reader.ReadBytes(reader.ReadInt32()));
            Assert.Equal("Cluster review", review.RootElement.GetProperty("title").GetString());
            Assert.Equal("9007199254740993", review.RootElement.GetProperty("elements")[0].GetProperty("id").GetString());
            Assert.Equal(elementId, reader.ReadInt64());
            using var element = JsonDocument.Parse(reader.ReadBytes(reader.ReadInt32()));
            Assert.Equal("9007199254740993", element.RootElement.GetProperty("id").GetString());
            Assert.Equal("Slab", element.RootElement.GetProperty("name").GetString());
            Assert.Equal("300 mm", element.RootElement.GetProperty("properties").GetProperty("Dimensions").GetProperty("Thickness").GetString());
            Assert.Equal(reader.BaseStream.Length, reader.BaseStream.Position);
        }
        finally
        {
            File.Delete(path);
            directory.Delete();
        }
    }
}
