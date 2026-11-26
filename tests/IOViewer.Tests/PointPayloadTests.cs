using System.Text;
using IOScene;
using IOViewer.Cli;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using PclIO;
using SkiaSharp;
using Xunit;

namespace IOViewer.Tests;

public class PointPayloadTests
{
    private static SceneDocument Cloud()
    {
        var scene = new SceneDocument();
        scene.Models.Add(new SceneModel { Id = 1, Key = "cloud", Name = "cloud" });
        scene.Elements.Add(new SceneElement { Id = 1, ModelId = 1, Name = "scan", Category = "Point Cloud" });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 1,
            Topology = SceneTopology.Points,
            Vertices = [new Vector3d(0, 0, 0), new Vector3d(1, 0, 0), new Vector3d(0, 1, 0)],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 1, GeometryId = 1 });
        return scene;
    }

    [Fact]
    public void Points_Are_Written_As_Format4_Points_And_Not_Skipped()
    {
        var scene = Cloud();
        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(4, view.Meta.GetProperty("format").GetInt32());
        Assert.Equal(0, view.InstanceCount);
        Assert.Equal(1, view.Meta.GetProperty("points").GetProperty("count").GetInt32());
        Assert.Equal("points", view.Geometries[0].GetProperty("kind").GetString());
        Assert.Equal(0, ViewerPayloadWriter.UndrawnInstances(scene));
        Assert.Equal([0, 0, 0, 1, 0, 0, 0, 1, 0], view.Positions(view.Geometries[0]));
    }

    [Fact]
    public void Point_Rgb_And_Panorama_Roundtrip_And_Use_The_Viewer_Binary_Block()
    {
        byte[] colors = [255, 0, 0, 0, 128, 0, 0, 0, 255];
        byte[] image = [0xff, 0xd8, 0xff, 0xd9];
        byte[] intensityImage = [0xff, 0xd8, 0x6c, 0xff, 0xd9];
        var source = new ViewerDocument(Cloud())
        {
            PointColors = new() { [1] = colors },
            PointIntensities = new() { [1] = [85, 0, 210] },
            Panoramas = [new ViewerPanorama(1, new Vector3d(0.5, 0.5, 1), image)
                { Name = "Camera 3", IntensityJpeg = intensityImage }],
        };
        using var json = new MemoryStream(Encoding.UTF8.GetBytes(JsonViewerExporter.ExportToString(source)));
        var view = ViewerHtml.Export(JsonViewerImporter.Load(json));

        var rgb = view.Geometries[0].GetProperty("colors");
        Assert.Equal(colors, view.Bin.AsSpan(rgb.GetProperty("o").GetInt32(), rgb.GetProperty("n").GetInt32()).ToArray());
        var signals = view.Geometries[0].GetProperty("intensities");
        Assert.Equal(new byte[] { 85, 0, 210 },
            view.Bin.AsSpan(signals.GetProperty("o").GetInt32(), signals.GetProperty("n").GetInt32()).ToArray());
        var panorama = view.Meta.GetProperty("panoramas")[0];
        Assert.Equal(0, panorama.GetProperty("element").GetInt32());
        Assert.Equal("Camera 3", panorama.GetProperty("name").GetString());
        Assert.Equal([0.0, 0.0, 1.0], panorama.GetProperty("position").EnumerateArray().Select(x => x.GetDouble()));
        var jpeg = panorama.GetProperty("image");
        Assert.Equal(image, view.Bin.AsSpan(jpeg.GetProperty("o").GetInt32(), jpeg.GetProperty("n").GetInt32()).ToArray());
        var intensity = panorama.GetProperty("intensity");
        Assert.Equal(intensityImage, view.Bin.AsSpan(intensity.GetProperty("o").GetInt32(), intensity.GetProperty("n").GetInt32()).ToArray());
    }

    [Fact]
    public void Point_Intensity_Length_Must_Match_Vertex_Count()
    {
        var doc = new ViewerDocument(Cloud()) { PointIntensities = new() { [1] = [24, 125] } };
        Assert.Throws<InvalidDataException>(() => ViewerHtml.Export(doc));
    }

    [Fact]
    public void Leica_Cube_Selects_A_Common_Level_In_Face_Order()
    {
        using var cube = new MemoryStream();
        cube.Write("CUBE"u8);
        SKColor[] colors = [SKColors.Red, SKColors.Green, SKColors.Blue, SKColors.Gold, SKColors.Fuchsia, SKColors.Teal];
        foreach (SKColor color in colors)
        {
            WriteFace(8, color);
            WriteFace(4, SKColors.Black);
        }

        byte[][] faces = ScanPhotographs.ReadCube(cube.ToArray());
        Assert.Equal(colors.Length, faces.Length);
        for (int i = 0; i < faces.Length; i++)
        {
            using var bitmap = SKBitmap.Decode(faces[i]);
            Assert.Equal(8, bitmap.Width);
            var actual = bitmap.GetPixel(0, 0);
            Assert.InRange(Math.Abs(actual.Red - colors[i].Red), 0, 3);
            Assert.InRange(Math.Abs(actual.Green - colors[i].Green), 0, 3);
            Assert.InRange(Math.Abs(actual.Blue - colors[i].Blue), 0, 3);
        }

        Assert.Throws<InvalidDataException>(() => ScanPhotographs.ReadCube(cube.ToArray().AsSpan()[..^4]));

        void WriteFace(int size, SKColor color)
        {
            using var bitmap = new SKBitmap(size, size);
            bitmap.Erase(color);
            using var image = SKImage.FromBitmap(bitmap);
            using var jpeg = image.Encode(SKEncodedImageFormat.Jpeg, 100);
            // A comment segment can contain the same byte sequence as an end-of-image marker.
            byte[] bytes = jpeg.ToArray();
            cube.Write(bytes.AsSpan(0, 20));
            cube.Write([0xFF, 0xFE, 0, 4, 0xFF, 0xD9]);
            cube.Write(bytes.AsSpan(20));
        }
    }

    [Fact]
    public void Leica_Jpeg_Xr_Cube_Skips_Face_Trailers_And_Rejects_A_Truncated_Face()
    {
        using var cube = new MemoryStream();
        using var writer = new BinaryWriter(cube);
        writer.Write("CUBE"u8);
        for (byte face = 0; face < 6; face++)
        {
            writer.Write(new byte[] { 0x49, 0x49, 0xbc, 1 });
            writer.Write(8u);
            writer.Write((ushort)2);
            writer.Write((ushort)0xbcc0);
            writer.Write((ushort)4);
            writer.Write(1u);
            writer.Write(34u);
            writer.Write((ushort)0xbcc1);
            writer.Write((ushort)4);
            writer.Write(1u);
            writer.Write(3u);
            writer.Write(new byte[] { 0x18, face, 0x38 });
            if (face != 5) writer.Write(new byte[] { 1, 2, 3, 4 });
        }
        byte[][] faces = ScanPhotographs.ReadCube(cube.ToArray());
        Assert.Equal(new byte[] { 0, 1, 2, 3, 4, 5 }, faces.Select(image => image[35]));
        Assert.Throws<InvalidDataException>(() => ScanPhotographs.ReadCube(cube.ToArray().AsSpan()[..^1]));
    }

    [Fact]
    public void Leica_Panorama_Places_Opposite_Faces_And_Orients_The_Poles()
    {
        SKColor[] colors = [SKColors.Red, SKColors.Green, SKColors.Blue, SKColors.Gold, SKColors.Fuchsia, SKColors.Teal];
        var faces = new byte[6][];
        for (int i = 0; i < faces.Length; i++)
        {
            using var bitmap = new SKBitmap(64, 64);
            bitmap.Erase(colors[i]);
            if (i >= 4)
            {
                using var canvas = new SKCanvas(bitmap);
                using var paint = new SKPaint { Color = SKColors.White };
                canvas.DrawRect(0, 0, 32, 64, paint);
            }

            using var source = SKImage.FromBitmap(bitmap);
            using var jpeg = source.Encode(SKEncodedImageFormat.Jpeg, 100);
            faces[i] = jpeg.ToArray();
        }

        using var panorama = SKBitmap.Decode(ScanPhotographs.ProjectLeicaCube(faces, System.Numerics.Quaternion.Identity));
        int equator = panorama.Height / 2;
        AssertColor(panorama, colors[0], panorama.Width * 3 / 4, equator);
        AssertColor(panorama, colors[1], panorama.Width / 4, equator);
        AssertColor(panorama, colors[2], 0, equator);
        AssertColor(panorama, colors[3], panorama.Width / 2, equator);
        AssertColor(panorama, colors[4], panorama.Width / 2, panorama.Height / 8);
        AssertColor(panorama, colors[5], panorama.Width / 2, panorama.Height * 7 / 8);
        AssertColor(panorama, SKColors.White, 0, panorama.Height / 8);
        AssertColor(panorama, SKColors.White, 0, panorama.Height * 7 / 8);

        // Rotate around a different axis to check that the station pose is applied after the cube basis.
        var tilt = System.Numerics.Quaternion.CreateFromAxisAngle(System.Numerics.Vector3.UnitX, MathF.PI / 2);
        using var tilted = SKBitmap.Decode(ScanPhotographs.ProjectLeicaCube(faces, tilt));
        AssertColor(tilted, colors[0], tilted.Width / 2, tilted.Height / 8);
        AssertColor(tilted, colors[1], tilted.Width / 2, tilted.Height * 7 / 8);
        AssertColor(tilted, colors[3], tilted.Width / 2, equator);

        static void AssertColor(SKBitmap panorama, SKColor expected, int x, int y)
        {
            SKColor actual = panorama.GetPixel(x, y);
            Assert.InRange(Math.Abs(actual.Red - expected.Red), 0, 8);
            Assert.InRange(Math.Abs(actual.Green - expected.Green), 0, 8);
            Assert.InRange(Math.Abs(actual.Blue - expected.Blue), 0, 8);
        }
    }

    [Fact]
    public void Leica_Point_Display_Uses_Intensity_And_Preserves_Existing_Rgb()
    {
        var point = new PclPoint(PclVector3.Zero, Intensity: 0.25f);
        Assert.Equal(new PclColor(128, 128, 128), Program.DisplayColor(point, true, out bool hasIntensity));
        Assert.True(hasIntensity);

        var rgb = new PclColor(23, 56, 201);
        Assert.Equal(rgb, Program.DisplayColor(point with { Color = rgb }, true, out bool hasRgb));
        Assert.True(hasRgb);

        _ = Program.DisplayColor(point with { Intensity = float.NaN }, true, out bool hasInvalidIntensity);
        Assert.False(hasInvalidIntensity);
    }

    [Fact]
    public void Point_Rgb_Requires_One_Triplet_Per_Vertex_And_Panorama_Requires_Known_Element()
    {
        var source = new ViewerDocument(Cloud()) { PointColors = new() { [1] = [0, 0, 0] } };
        Assert.Throws<InvalidDataException>(() => ViewerHtml.Export(source));

        source.PointColors.Clear();
        source.Panoramas = [new ViewerPanorama(99, Vector3d.Zero, [0xff, 0xd8, 0xff, 0xd9])];
        Assert.Throws<InvalidDataException>(() => ViewerHtml.Export(source));
    }

    [Fact]
    public void Triangles_And_Points_Coexist_In_Format4()
    {
        var scene = Cloud();
        scene.Elements.Add(new SceneElement { Id = 2, ModelId = 1, Name = "box" });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 2,
            Topology = SceneTopology.Triangles,
            Vertices = [new Vector3d(0, 0, 0), new Vector3d(1, 0, 0), new Vector3d(0, 1, 0)],
            Indices = [0, 1, 2],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 2, GeometryId = 2 });
        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(4, view.Meta.GetProperty("format").GetInt32());
        Assert.Equal(1, view.InstanceCount);
        Assert.Equal(1, view.Meta.GetProperty("points").GetProperty("count").GetInt32());
        Assert.Equal(0, ViewerPayloadWriter.UndrawnInstances(scene));
    }

    [Fact]
    public void Triangles_Only_Stay_Format3_Without_Points()
    {
        var scene = new SceneDocument();
        scene.Models.Add(new SceneModel { Id = 1, Key = "m", Name = "m" });
        scene.Elements.Add(new SceneElement { Id = 1, ModelId = 1, Name = "tri" });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 1,
            Topology = SceneTopology.Triangles,
            Vertices = [new Vector3d(0, 0, 0), new Vector3d(1, 0, 0), new Vector3d(0, 1, 0)],
            Indices = [0, 1, 2],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 1, GeometryId = 1 });
        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(3, view.Meta.GetProperty("format").GetInt32());
        Assert.False(view.Meta.TryGetProperty("points", out _));
        Assert.Equal(1, view.InstanceCount);
    }
}
