#:project ../../src/IOViewer/IOViewer.csproj
#:property TargetFramework=net10.0
#:property PublishAot=false

// Writes a deterministic synthetic pipe network as an exported HTML viewer, for performance measurements:
//   dotnet run tools/SyntheticModel/SyntheticModel.cs -- --elements 200000 --out synthetic-200k.html
// Without --out it writes <temp>/ioviewer-perf/synthetic-<N>.html.
// Pipes and joints share 20 geometries (about 100 triangles each) placed by rotated transforms; one element per mesh,
// five systems (one of them transparent wells), a few properties per element and a 4D schedule over the network.
// --unique gives every mesh its own copy of its geometry, already placed, as exporters without instancing write it.
// --textured gives every geometry cylindrical UVs (metres) and the first system a 64 x 64 checker texture.

using System.Diagnostics;
using System.Globalization;
using IOViewer.Exporters;
using IOViewer.Model;

int elements = 0;
string? output = null;
bool unique = false;
bool textured = false;
for (int a = 0; a < args.Length; a++)
{
    switch (args[a])
    {
        case "--elements" when a + 1 < args.Length:
            elements = int.Parse(args[++a], CultureInfo.InvariantCulture);
            break;
        case "--out" when a + 1 < args.Length:
            output = args[++a];
            break;
        case "--unique":
            unique = true;
            break;
        case "--textured":
            textured = true;
            break;
        default:
            Console.Error.WriteLine($"Unknown or incomplete argument '{args[a]}'.");
            return 2;
    }
}
if (elements <= 0)
{
    Console.Error.WriteLine("Usage: SyntheticModel --elements N [--out file.html] [--unique] [--textured]");
    return 2;
}
if (output is null)
{
    string folder = Path.Combine(Path.GetTempPath(), "ioviewer-perf");
    Directory.CreateDirectory(folder);
    output = Path.Combine(folder, string.Create(CultureInfo.InvariantCulture, $"synthetic-{elements}{(unique ? "-unique" : "")}{(textured ? "-textured" : "")}.html"));
}

var watch = Stopwatch.StartNew();
var doc = PipeNetwork.Build(elements, textured);
if (unique) PipeNetwork.Unshare(doc);
Console.WriteLine($"Built {doc.Elements.Count} elements, {doc.Meshes.Count} meshes, {doc.Geometries.Count} geometries, " +
    $"{PipeNetwork.Triangles(doc):N0} triangles in {watch.Elapsed.TotalSeconds:F1} s");
watch.Restart();
HtmlViewerExporter.Save(doc, output, new HtmlViewerOptions { Title = doc.Title });
Console.WriteLine($"Wrote {output} ({new FileInfo(output).Length / 1048576.0:F1} MB) in {watch.Elapsed.TotalSeconds:F1} s");
return 0;

static class PipeNetwork
{
    private const int Segments = 24; // pipe: 24 side quads + two 22-triangle caps = 92 triangles
    private static readonly double[] Diameters = [0.1, 0.15, 0.2, 0.3, 0.5];
    private static readonly double[] Lengths = [2, 4, 6];
    private static readonly (string Name, RgbaColor Color, double Opacity)[] Systems =
    [
        ("Water supply", new RgbaColor(40, 120, 220), 1),
        ("Sewer", new RgbaColor(150, 100, 60), 1),
        ("Storm water", new RgbaColor(60, 170, 90), 1),
        ("Heating", new RgbaColor(210, 60, 50), 1),
        ("Wells", new RgbaColor(170, 170, 180), 0.5),
    ];

    public static long Triangles(ViewerDocument doc)
    {
        var perGeometry = doc.Geometries.ToDictionary(g => g.Id, g => g.Indices.Count / 3);
        return doc.Meshes.Sum(m => (long)perGeometry[m.GeometryId!.Value]);
    }

    // Random walks of pipes with a joint after each one, mostly horizontal, sometimes a riser; seeded, so every run is equal.
    public static ViewerDocument Build(int count, bool textured)
    {
        var random = new Random(20261111);
        var doc = new ViewerDocument($"Synthetic pipe network ({count.ToString("N0", CultureInfo.InvariantCulture)} elements)");
        for (int d = 0; d < Diameters.Length; d++)
        {
            for (int l = 0; l < Lengths.Length; l++) doc.Geometries.Add(Pipe(d * Lengths.Length + l, Diameters[d] / 2, Lengths[l]));
        }
        int jointBase = doc.Geometries.Count;
        for (int d = 0; d < Diameters.Length; d++) doc.Geometries.Add(Joint(jointBase + d, Diameters[d] * 0.7));
        if (textured) doc.Textures.Add(Checker());
        else foreach (var g in doc.Geometries) g.UVs = null; // the untextured page stays as it was

        double side = Math.Sqrt(count / 2.0) * 6; // metres; keeps the density about the same at any count
        Vector3d[] directions = [Vector3d.UnitX, -Vector3d.UnitX, Vector3d.UnitY, -Vector3d.UnitY];
        var schedule = new ViewerTimeLinerSchedule("Construction");
        int tasks = Math.Clamp(count / 5000, 1, 40);
        var start = new DateTimeOffset(2027, 1, 1, 0, 0, 0, TimeSpan.Zero);
        for (int t = 0; t < tasks; t++)
        {
            schedule.Tasks.Add(new ViewerTimeLinerTask($"T{t + 1}", $"Stage {t + 1}", start.AddDays(t * 10), start.AddDays(t * 10 + 14)));
        }
        doc.TimeLiner = schedule;

        var point = Vector3d.Zero;
        var direction = Vector3d.UnitX;
        int system = 0, diameter = 0, walkLeft = 0;
        for (int i = 0; i < count; i++)
        {
            if (walkLeft == 0)
            {
                walkLeft = random.Next(50, 400);
                system = random.Next(Systems.Length);
                diameter = random.Next(Diameters.Length);
                point = new Vector3d(random.NextDouble() * side, random.NextDouble() * side, -2 - random.Next(3));
                direction = directions[random.Next(4)];
            }
            walkLeft--;
            bool joint = i % 2 == 1;
            int geometry;
            Transform3d transform;
            string type;
            if (joint)
            {
                geometry = jointBase + diameter;
                transform = Place(Vector3d.UnitZ, Vector3d.UnitX, point, mirrored: false);
                type = $"Joint DN{Diameters[diameter] * 1000:F0}";
                if (random.NextDouble() < 0.3) direction = directions[random.Next(4)];
                else if (random.NextDouble() < 0.03) direction = direction.Z == 0 ? Vector3d.UnitZ : directions[random.Next(4)];
            }
            else
            {
                int length = random.Next(Lengths.Length);
                geometry = diameter * Lengths.Length + length;
                // A random roll about the pipe axis, and now and then a mirrored placement, as BIM families have.
                double roll = random.NextDouble() * Math.Tau;
                var normal = Math.Abs(direction.Z) > 0.5 ? Vector3d.UnitX : Vector3d.UnitZ;
                var across = Vector3d.Cross(direction, normal);
                var up = normal * Math.Cos(roll) + across * Math.Sin(roll);
                transform = Place(direction, up, point, mirrored: random.NextDouble() < 0.01);
                point += direction * Lengths[length];
                type = $"Pipe DN{Diameters[diameter] * 1000:F0}";
            }
            var (systemName, color, opacity) = Systems[system];
            long id = 1_000_000 + i;
            doc.Meshes.Add(new ViewerMesh
            {
                Id = i, ElementId = id, GeometryId = geometry, Transform = transform, Color = color, Opacity = opacity,
                TextureIndex = textured && system == 0 ? 0 : null,
            });
            var element = new ViewerElement
            {
                Id = id, Name = $"{type} {i}", Category = systemName, TypeName = type, Level = $"Zone {(i / 10000) + 1}",
            };
            element.MeshIndices.Add(i);
            element.AddProperty("Identity", "Mark", $"M-{i}");
            element.AddProperty("Dimensions", "Diameter", $"{Diameters[diameter] * 1000:F0} mm");
            doc.Elements.Add(element);
            schedule.Tasks[(int)((long)i * tasks / count)].AttachedElementIds.Add(id);
        }
        return doc;
    }

    // Replaces each mesh's shared geometry by its own placed copy (positions and normals transformed, no Transform).
    public static void Unshare(ViewerDocument doc)
    {
        var shared = doc.Geometries.ToDictionary(g => g.Id);
        doc.Geometries = [];
        foreach (var mesh in doc.Meshes)
        {
            var source = shared[mesh.GeometryId!.Value];
            var t = mesh.Transform!.Value;
            doc.Geometries.Add(new ViewerGeometry
            {
                Id = mesh.Id,
                Vertices = source.Vertices.Select(t.Apply).ToList(),
                Normals = source.Normals!.Select(n => (t.Apply(n) - t.Translation).Normalized()).ToList(),
                UVs = source.UVs,
                // A mirrored placement turns the triangles inside out unless their winding is reversed too.
                Indices = Vector3d.Dot(Vector3d.Cross(t.XAxis, t.YAxis), t.ZAxis) < 0
                    ? source.Indices.Chunk(3).SelectMany(f => new[] { f[0], f[2], f[1] }).ToList()
                    : source.Indices,
            });
            mesh.GeometryId = mesh.Id;
            mesh.Transform = null;
        }
    }

    // Local +X along `axis`, local +Z towards `up` (perpendicular to axis); mirrored flips local Y.
    private static Transform3d Place(Vector3d axis, Vector3d up, Vector3d origin, bool mirrored)
    {
        var y = Vector3d.Cross(up, axis);
        return new Transform3d(axis, mirrored ? -y : y, up, origin);
    }

    // Capped cylinder along +X from 0 to length; caps have their own vertices so their normals stay flat.
    private static ViewerGeometry Pipe(int id, double radius, double length)
    {
        var vertices = new List<Vector3d>();
        var normals = new List<Vector3d>();
        var uvs = new List<Vector2d>();
        var indices = new List<int>();
        for (int s = 0; s < Segments; s++)
        {
            double angle = s * Math.Tau / Segments;
            var n = new Vector3d(0, Math.Cos(angle), Math.Sin(angle));
            vertices.Add(n * radius);
            vertices.Add(n * radius + new Vector3d(length, 0, 0));
            normals.Add(n);
            normals.Add(n);
            uvs.Add(new Vector2d(angle * radius, 0));
            uvs.Add(new Vector2d(angle * radius, length));
        }
        for (int s = 0; s < Segments; s++)
        {
            int a = s * 2, b = ((s + 1) % Segments) * 2;
            indices.AddRange([a, b, a + 1, a + 1, b, b + 1]);
        }
        foreach (double x in new[] { 0.0, length })
        {
            int first = vertices.Count;
            var n = new Vector3d(x == 0 ? -1 : 1, 0, 0);
            for (int s = 0; s < Segments; s++)
            {
                double angle = s * Math.Tau / Segments;
                vertices.Add(new Vector3d(x, Math.Cos(angle) * radius, Math.Sin(angle) * radius));
                normals.Add(n);
                uvs.Add(new Vector2d(angle * radius, x));
            }
            for (int s = 1; s < Segments - 1; s++) indices.AddRange([first, first + s, first + s + 1]);
        }
        return new ViewerGeometry { Id = id, Vertices = vertices, Normals = normals, Indices = indices, UVs = uvs };
    }

    // UV sphere, 10 x 6 bands: 100 triangles.
    private static ViewerGeometry Joint(int id, double radius)
    {
        const int around = 10, bands = 6;
        var vertices = new List<Vector3d>();
        var indices = new List<int>();
        for (int b = 0; b <= bands; b++)
        {
            double phi = b * Math.PI / bands;
            for (int a = 0; a <= around; a++)
            {
                double theta = a * Math.Tau / around;
                vertices.Add(new Vector3d(Math.Sin(phi) * Math.Cos(theta), Math.Sin(phi) * Math.Sin(theta), Math.Cos(phi)));
            }
        }
        for (int b = 0; b < bands; b++)
        {
            for (int a = 0; a < around; a++)
            {
                int p = b * (around + 1) + a, q = p + around + 1;
                if (b > 0) indices.AddRange([p, q, p + 1]);
                if (b < bands - 1) indices.AddRange([p + 1, q, q + 1]);
            }
        }
        return new ViewerGeometry
        {
            Id = id, Vertices = vertices.Select(v => v * radius).ToList(), Normals = vertices, Indices = indices,
            // Cylindrical about the local Z axis, in metres.
            UVs = vertices.Select(v => new Vector2d(Math.Atan2(v.Y, v.X) * radius, v.Z * radius)).ToList(),
        };
    }

    // 64 x 64 checker of 8 x 8 pixel squares as a 24-bit BMP, 0.5 m per repeat.
    private static ViewerTexture Checker()
    {
        const int size = 64, header = 54, pixels = size * size * 3;
        var bmp = new byte[header + pixels];
        bmp[0] = (byte)'B';
        bmp[1] = (byte)'M';
        BitConverter.TryWriteBytes(bmp.AsSpan(2), bmp.Length);
        BitConverter.TryWriteBytes(bmp.AsSpan(10), header);
        BitConverter.TryWriteBytes(bmp.AsSpan(14), 40); // BITMAPINFOHEADER
        BitConverter.TryWriteBytes(bmp.AsSpan(18), size);
        BitConverter.TryWriteBytes(bmp.AsSpan(22), size);
        BitConverter.TryWriteBytes(bmp.AsSpan(26), (short)1);
        BitConverter.TryWriteBytes(bmp.AsSpan(28), (short)24);
        BitConverter.TryWriteBytes(bmp.AsSpan(34), pixels);
        for (int y = 0; y < size; y++)
        {
            for (int x = 0; x < size; x++)
            {
                byte v = ((x / 8) + (y / 8)) % 2 == 0 ? (byte)235 : (byte)60;
                bmp.AsSpan(header + (y * size + x) * 3, 3).Fill(v); // rows of 192 bytes need no padding
            }
        }
        return new ViewerTexture { MimeType = "image/bmp", Base64Data = Convert.ToBase64String(bmp), ScaleX = 0.5, ScaleY = 0.5 };
    }
}
