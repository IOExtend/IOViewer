using System.Text.Json;
using IOScene;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class ClusterSourceTests
{
    [Fact]
    public void KeepsWorldCoordinatesWhenAReusableTemplateWouldLoseDetail()
    {
        var scene = new SceneDocument();
        scene.Geometries.Add(new SceneGeometry { Id = 1,
            Vertices = [new(1_000_000, 0, 0), Vector3d.Zero, new(0.01, 1, 0)], Indices = [0, 1, 2] });
        scene.Geometries.Add(new SceneGeometry { Id = 2,
            Vertices = [new(-1_000_000, 0, 0), new(-1_000_000, 1, 0), new(-1_000_000, 0, 1)], Indices = [0, 1, 2] });
        for (int i = 1; i <= 3; i++)
        {
            scene.Elements.Add(new SceneElement { Id = i, ModelId = 1 });
            scene.Instances.Add(new SceneInstance { ElementId = i, GeometryId = i < 3 ? 1 : 2,
                Transform = Transform3d.Identity with { Translation = new Vector3d(0, i * 10, 0) } });
        }
        var directory = Directory.CreateTempSubdirectory();
        var path = Path.Combine(directory.FullName, "world-precision.ivmesh");
        try
        {
            Assert.Equal(3, ClusterSourceWriter.Save(new ViewerDocument(scene), path, new HtmlViewerOptions()));
            using var reader = new BinaryReader(File.OpenRead(path));
            Assert.Equal("IMS4"u8.ToArray(), reader.ReadBytes(4));
            Assert.Equal(0, reader.ReadDouble());
            reader.BaseStream.Position = 36 + 56;
            Assert.Equal(-1, reader.ReadInt64());
            reader.BaseStream.Position = 36 + 76 + 24;
            Assert.Equal(0.01f, reader.ReadSingle());
        }
        finally
        {
            File.Delete(path);
            directory.Delete();
        }
    }

    [Fact]
    public void SharesOnlyIdenticalSourceMeshesAndKeepsPlacementsIndependent()
    {
        var mesh = new SceneGeometry
        {
            Id = 1, Vertices = [Vector3d.Zero, Vector3d.UnitX, Vector3d.UnitY], Indices = [0, 1, 2],
            Normals = [Vector3d.UnitZ, Vector3d.UnitZ, Vector3d.UnitZ], UVs = [new(0, 0), new(1, 0), new(0, 1)],
        };
        var scene = new SceneDocument();
        SceneGeometry Copy(int id, Vector3d[]? points = null, int[]? indices = null, Vector3d[]? normals = null, Vector2d[]? uvs = null) => new()
        {
            Id = id, Vertices = points is null ? [.. mesh.Vertices] : [.. points],
            Indices = indices is null ? [.. mesh.Indices] : [.. indices],
            Normals = normals is null ? [.. mesh.Normals!] : [.. normals],
            UVs = uvs is null ? [.. mesh.UVs!] : [.. uvs],
        };
        scene.Geometries.AddRange([
            mesh, Copy(2), Copy(3, points: [Vector3d.Zero, new(Math.BitIncrement(1d), 0, 0), Vector3d.UnitY]),
            Copy(4, indices: [0, 2, 1]), Copy(5, normals: [Vector3d.UnitX, Vector3d.UnitZ, Vector3d.UnitZ]),
            Copy(6, uvs: [new(0, 0), new(Math.BitIncrement(1d), 0), new(0, 1)]),
        ]);
        int[] geometryIds = [1, 1, 2, 3, 4, 5, 6, 1];
        for (int i = 0; i < geometryIds.Length; i++)
        {
            long id = 100 + i;
            scene.Elements.Add(new SceneElement { Id = id, ModelId = 1, Name = $"Part {i}" });
            var t = Transform3d.Identity with { Translation = new Vector3d(i * 10, 0, 0) };
            if (i == geometryIds.Length - 1) t = t with { XAxis = -Vector3d.UnitX };
            scene.Instances.Add(new SceneInstance { GeometryId = geometryIds[i], ElementId = id, Transform = t,
                Color = new RgbaColor((byte)i, 30, 80) });
        }
        var directory = Directory.CreateTempSubdirectory();
        var path = Path.Combine(directory.FullName, "shared.ivmesh");
        try
        {
            Assert.Equal(geometryIds.Length, ClusterSourceWriter.Save(new ViewerDocument(scene), path, new HtmlViewerOptions()));
            using var reader = new BinaryReader(File.OpenRead(path));
            Assert.Equal("IMS4"u8.ToArray(), reader.ReadBytes(4));
            reader.BaseStream.Position = 28;
            long end = reader.ReadInt64();
            long first = reader.BaseStream.Position;
            float? x = null;
            for (int i = 0; i < geometryIds.Length; i++)
            {
                long start = reader.BaseStream.Position;
                reader.BaseStream.Position += 24;
                int vertices = reader.ReadInt32(), indices = reader.ReadInt32();
                Assert.Equal(i, reader.ReadByte());
                reader.BaseStream.Position += 3;
                int normals = reader.ReadInt32();
                Assert.Equal(100 + i, reader.ReadInt64());
                reader.ReadInt32();
                int flags = reader.ReadInt32();
                long shape = reader.ReadInt64();
                float shiftX = reader.ReadSingle();
                reader.BaseStream.Position += 8;
                Assert.Equal(i < 3 ? first : -1L, shape);
                if (i < 3)
                {
                    x ??= shiftX;
                    Assert.Equal(i * 10, shiftX - x.Value);
                }
                if (shape == -1 || shape == start)
                    reader.BaseStream.Position += vertices * (12 * (1 + normals) + ((flags & 2) != 0 ? 8 : 0)) + indices * 4;
            }
            Assert.Equal(end, reader.BaseStream.Position);
        }
        finally
        {
            File.Delete(path);
            directory.Delete();
        }
    }

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
