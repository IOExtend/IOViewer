#:project ../../../src/IOViewer/IOViewer.csproj
#:property TargetFramework=net10.0
#:property PublishAot=false

using System.Globalization;
using System.Text.Json;
using IOScene;
using IOViewer.Exporters;

const long defaultBytes = 15_000_000_000;
const int columns = 40, levels = 4, tilesPerRow = 12;
const int elementsPerTile = columns * columns * levels;
const int rings = 17, sides = 32;
const int seed = 20261120;
const double tilePitch = 256, spacing = 6, levelPitch = 12;

long target = defaultBytes;
if (args.Length is < 1 or > 2 || (args.Length == 2 &&
    (!long.TryParse(args[1], NumberStyles.None, CultureInfo.InvariantCulture, out target) || target < 1)))
{
    Console.Error.WriteLine("Usage: TiledSyntheticModel <empty-output-directory> [target-bytes]");
    return 2;
}

var output = Directory.CreateDirectory(args[0]);
if (output.EnumerateFileSystemInfos().Any())
{
    Console.Error.WriteLine("The output directory must be empty.");
    return 2;
}

var indices = MakeIndices();
double[] angles = Enumerable.Range(0, sides).Select(i => i * Math.Tau / sides).ToArray();
double[] cos = angles.Select(Math.Cos).ToArray(), sin = angles.Select(Math.Sin).ToArray();
double[] profile = [0.68, 0.91, 1.0, 1.07, 1.0, 1.0, 1.0, 1.0, 1.05, 1.0, 1.0, 1.0, 1.0, 1.07, 1.0, 0.91, 0.68];
var random = new Random(seed);
var tiles = new List<Tile>();
long totalBytes = 0, elements = 0, triangles = 0;
var bounds = BoundingBox3d.Empty;
// Estimate the first tile and use its actual bytes per element to size the final tile.
double bytesPerElement = 14_000;
while (totalBytes < target)
{
    int count = (int)Math.Clamp(Math.Ceiling((target - totalBytes) / bytesPerElement), 1, elementsPerTile);
    int tile = tiles.Count;
    int x = tile % tilesPerRow, y = tile / tilesPerRow;
    string file = FormattableString.Invariant($"tile-{tile + 1:D4}.html");
    string title = FormattableString.Invariant($"Synthetic industrial plant ({x + 1}, {y + 1})");
    var scene = Build(count, x, y, elements + 1, title);
    var box = scene.ComputeBounds();
    long bytes;
    using (var stream = new FileStream(Path.Combine(output.FullName, file), FileMode.CreateNew, FileAccess.Write))
    {
        HtmlViewerExporter.Export(scene, stream, new HtmlViewerOptions { Title = title });
        bytes = stream.Length;
    }

    long tileTriangles = (long)count * (indices.Length / 3);
    tiles.Add(new Tile(file, x, y, bytes, elements + 1, count, tileTriangles, Point(box.Center), Point(box.Min), Point(box.Max)));
    bounds = bounds.Encapsulate(box);
    totalBytes += bytes;
    triangles += tileTriangles;
    elements += count;
    bytesPerElement = (double)bytes / count;
    Console.WriteLine(FormattableString.Invariant($"{file} {bytes} bytes; total {totalBytes} / {target}"));
}

using (var index = new FileStream(Path.Combine(output.FullName, "index.html"), FileMode.CreateNew, FileAccess.Write))
using (var html = new StreamWriter(index))
{
    html.WriteLine("<!doctype html><html lang=\"en\"><meta charset=\"utf-8\"><title>Synthetic industrial plant</title>");
    html.WriteLine("<h1>Synthetic industrial plant</h1><p>Open an area in IOViewer. <a href=\"manifest.json\">Model manifest</a></p><ol>");
    foreach (var tile in tiles)
        html.WriteLine(FormattableString.Invariant($"<li><a href=\"{tile.File}\">Area {tile.X + 1}, {tile.Y + 1}</a> ({tile.Elements} elements)</li>"));
    html.WriteLine("</ol></html>");
}

using (var manifest = new FileStream(Path.Combine(output.FullName, "manifest.json"), FileMode.CreateNew, FileAccess.Write))
{
    JsonSerializer.Serialize(manifest, new
    {
        format = "ioviewer-synthetic-tiles-1", seed, targetBytes = target, totalBytes, elements, triangles,
        unit = "metre", upAxis = "Z", min = Point(bounds.Min), max = Point(bounds.Max), tiles,
    }, new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase, WriteIndented = true });
}
return 0;

SceneDocument Build(int count, int x, int y, long firstId, string title)
{
    var scene = new SceneDocument { Title = title };
    scene.Models.Add(new SceneModel { Id = 1, Key = "synthetic-plant", Name = title, CreatedAt = "2026-11-20T00:00:00Z" });
    scene.Materials.Add(new SceneMaterial { Id = 1, Color = new RgbaColor(112, 150, 167) });
    scene.Materials.Add(new SceneMaterial { Id = 2, Color = new RgbaColor(190, 140, 82) });
    scene.Materials.Add(new SceneMaterial { Id = 3, Color = new RgbaColor(132, 150, 116) });
    for (int level = 1; level <= levels; level++)
        scene.Levels.Add(new SceneLevel { Id = level, ModelId = 1, Name = $"Level {level}" });

    for (int i = 0; i < count; i++)
    {
        int level = i / (columns * columns);
        double radius = 0.75 + 1.45 * random.NextDouble();
        double height = 3 + 6 * random.NextDouble();
        double oval = 0.8 + 0.2 * random.NextDouble();
        var vertices = new Vector3d[rings * sides];
        for (int ring = 0; ring < rings; ring++)
        {
            double r = radius * profile[ring];
            double z = height * ring / (rings - 1);
            for (int side = 0; side < sides; side++)
                vertices[ring * sides + side] = new Vector3d(r * cos[side], r * oval * sin[side], z);
        }

        long id = firstId + i;
        var origin = new Vector3d(x * tilePitch + i % columns * spacing, y * tilePitch + i / columns % columns * spacing, level * levelPitch);
        scene.Geometries.Add(new SceneGeometry { Id = i, Vertices = vertices, Indices = indices });
        scene.Instances.Add(new SceneInstance { ElementId = id, GeometryId = i, MaterialId = i % 3 + 1, Transform = Transform3d.Translate(origin) });
        var element = new SceneElement { Id = id, ModelId = 1, Category = "Process equipment", TypeName = "Vessel", Name = $"Vessel {id}", LevelId = level + 1 };
        var dimensions = new ScenePropertySet { Id = i + 1, Name = "Dimensions" };
        dimensions.Properties.Add(new SceneProperty { Name = "Height", Value = SceneValue.FromText(FormattableString.Invariant($"{height:F3} m")) });
        dimensions.Properties.Add(new SceneProperty { Name = "Diameter", Value = SceneValue.FromText(FormattableString.Invariant($"{2 * radius:F3} m")) });
        element.PropertySetIds.Add(dimensions.Id);
        scene.PropertySets.Add(dimensions);
        scene.Elements.Add(element);
    }
    return scene;
}

static int[] MakeIndices()
{
    var indices = new List<int>();
    for (int ring = 0; ring < rings - 1; ring++)
    {
        for (int side = 0; side < sides; side++)
        {
            int a = ring * sides + side, b = ring * sides + (side + 1) % sides;
            indices.AddRange([a, b, a + sides, b, b + sides, a + sides]);
        }
    }
    int top = (rings - 1) * sides;
    for (int side = 1; side < sides - 1; side++)
        indices.AddRange([0, side + 1, side, top, top + side, top + side + 1]);
    return [.. indices];
}

static double[] Point(Vector3d p) => [p.X, p.Y, p.Z];

internal sealed record Tile(string File, int X, int Y, long Bytes, long FirstElementId, int Elements, long Triangles,
    double[] RtcOffset, double[] Min, double[] Max);
