using System.Buffers.Binary;
using System.Globalization;
using System.Numerics;
using System.Xml.Linq;
using IOScene;
using IOViewer.Model;
using Microsoft.Data.Sqlite;
using PclIO;
using PclIO.Formats.Leica;
#if PCLIO_SOURCE
using PclIO.Formats.E57;
using PclIO.Formats.Faro;
#endif
using SkiaSharp;

namespace IOViewer.Cli;

internal static class ScanPhotographs
{
    private const int Width = 2048;
    private const int MaxImageSide = 8192;
    private const string LeicaCameraPrefix = "SETUP-camera-";

    internal static int SubsampleStep(PclDocument cloud)
    {
        bool hasPanoramas = cloud is LgsxDocument;
#if PCLIO_SOURCE
        hasPanoramas |= cloud is FaroFlsDocument ||
            cloud is E57Document e57 && e57.XmlContent.Contains("pinholeRepresentation", StringComparison.Ordinal);
#endif
        if (!hasPanoramas) return 1;
        long? count = null;
#if PCLIO_SOURCE
        if (cloud is LgsxDocument leica) count = leica.GetEncodedPointCount();
#endif
        // Sample within every block so the geometry surrounds all the camera stations.
        return (int)Math.Clamp(Math.Ceiling((count ?? cloud.TotalPointCount) / 700_000.0), 1, int.MaxValue);
    }

    internal static void Add(PclDocument cloud, ViewerDocument viewer, List<SceneDiagnostic> diagnostics)
    {
        try
        {
            IEnumerable<ViewerPanorama> photos = cloud switch
            {
                LgsxDocument leica => ReadLeica(leica, diagnostics),
#if PCLIO_SOURCE
                FaroFlsDocument faro => ReadFaro(faro),
                E57Document e57 => ReadE57(e57),
#endif
                _ => [],
            };
            foreach (var photo in photos) viewer.Panoramas.Add(photo);
        }
        catch (Exception ex) when (ex is IOException or InvalidDataException or SqliteException or
                                   FormatException or OverflowException)
        {
            diagnostics.Add(new SceneDiagnostic(SceneSeverity.Warning, "scan-photographs", ex.Message));
        }
    }

    private static IEnumerable<ViewerPanorama> ReadLeica(LgsxDocument cloud, List<SceneDiagnostic> diagnostics)
    {
        var entries = cloud.Entries.Where(e => e.Name.StartsWith(LeicaCameraPrefix, StringComparison.Ordinal)).ToArray();
        if (entries.Length == 0) yield break;

        var database = cloud.Entries.FirstOrDefault(e => e.Name == "ProjectDatabase")
            ?? throw new InvalidDataException("The Leica camera stations have no project database.");
        using var source = File.OpenRead(cloud.FilePath);
        var poses = ReadLeicaPoses(ReadEntry(source, database, 64 * 1024 * 1024));

        var elements = cloud.Scans.Select((scan, i) => (scan.Id, Element: i + 2L))
            .ToDictionary(item => item.Id, item => item.Element, StringComparer.Ordinal);

        foreach (var entry in entries)
        {
            string id = entry.Name[LeicaCameraPrefix.Length..];
            if (!long.TryParse(id, NumberStyles.None, CultureInfo.InvariantCulture, out long station) ||
                !poses.TryGetValue(station, out var pose) ||
                !elements.TryGetValue(id, out long element) && !elements.TryGetValue("unified-cloud", out element))
            {
                diagnostics.Add(new SceneDiagnostic(SceneSeverity.Warning, "scan-photographs",
                    $"Leica station {id} has no usable placement or scene element."));
                continue;
            }

            byte[] jpeg;
            try
            {
                byte[][] faces = ReadCube(ReadEntry(source, entry, 32 * 1024 * 1024));
                jpeg = ProjectLeicaCube(faces, pose.Rotation);
            }
            catch (InvalidDataException ex)
            {
                diagnostics.Add(new SceneDiagnostic(SceneSeverity.Warning, "scan-photographs",
                    $"Leica station {id}: {ex.Message}"));
                continue;
            }

            yield return new ViewerPanorama(element, pose.Position, jpeg) { Name = pose.Name };
        }
    }

    internal static byte[] ProjectLeicaCube(byte[][] faces, Quaternion rotation)
    {
        Vector3 x = Vector3.UnitX, y = Vector3.UnitY, z = Vector3.UnitZ;
        // Leica stores opposite sides consecutively. The last two faces use the same horizontal axis.
        Vector3[] directions = [x, -x, y, -y, z, -z];
        Vector3[] right = [-y, y, x, -x, -y, -y];
        Vector3[] down = [-z, -z, -z, -z, x, -x];

        var frames = new Frame[6];
        for (int i = 0; i < frames.Length; i++)
        {
            var basis = (Vector3.Transform(directions[i], rotation), Vector3.Transform(right[i], rotation),
                Vector3.Transform(down[i], rotation));
            using var image = LoadJpeg(faces[i]);
            float half = image.Width * .5f;
            frames[i] = new Frame(image, basis, half, half, half - .5f, half - .5f);
        }

        return Project(frames);
    }

    private static Dictionary<long, (string Name, Vector3d Position, Quaternion Rotation)> ReadLeicaPoses(byte[] database)
    {
        string path = Path.GetTempFileName();
        try
        {
            File.WriteAllBytes(path, database);
            using var connection = new SqliteConnection(new SqliteConnectionStringBuilder
            {
                DataSource = path, Mode = SqliteOpenMode.ReadOnly, Pooling = false
            }.ToString());
            connection.Open();
            using var command = connection.CreateCommand();
            command.CommandText = "PRAGMA trusted_schema=OFF";
            command.ExecuteNonQuery();
            command.CommandText = """
                SELECT r.mSetupId, s.mName, r.mPositionX, r.mPositionY, r.mPositionZ,
                       r.mRotationX, r.mRotationY, r.mRotationZ, r.mRotationW
                FROM Hds_OdbSetupRef r JOIN Hds_OdbSetup s ON s.mId = r.mSetupId
                ORDER BY r.mSetupId, r.mId
                """;

            using var reader = command.ExecuteReader();
            var poses = new Dictionary<long, (string, Vector3d, Quaternion)>();
            while (reader.Read())
            {
                if (Enumerable.Range(2, 7).Any(reader.IsDBNull)) continue;
                var position = new Vector3d(reader.GetDouble(2), reader.GetDouble(3), reader.GetDouble(4));
                if (!double.IsFinite(position.X) || !double.IsFinite(position.Y) || !double.IsFinite(position.Z)) continue;
                Quaternion rotation = UnitQuaternion(reader.GetDouble(5), reader.GetDouble(6), reader.GetDouble(7), reader.GetDouble(8));
                long id = reader.GetInt64(0);
                string name = reader.IsDBNull(1) ? id.ToString(CultureInfo.InvariantCulture) : reader.GetString(1);
                poses.TryAdd(id, (name, position, rotation));
            }

            return poses;
        }
        finally
        {
            File.Delete(path);
        }
    }

    private static byte[] ReadEntry(FileStream stream, LgsxEntry entry, int maxSize)
    {
        if (entry.Size is 0 || entry.Size > (ulong)maxSize || entry.Offset > (ulong)stream.Length ||
            entry.Size > (ulong)stream.Length - entry.Offset)
            throw new InvalidDataException("A Leica photo entry exceeds its allowed size or lies outside the file.");
        stream.Position = (long)entry.Offset;
        var bytes = new byte[(int)entry.Size];
        stream.ReadExactly(bytes);
        return bytes;
    }

    private static int ReadJpegLength(ReadOnlySpan<byte> image)
    {
        int offset = 2;
        bool inScan = false;
        while (offset < image.Length)
        {
            if (inScan)
            {
                int next = image[offset..].IndexOf((byte)0xFF);
                if (next < 0) break;
                offset += next;
            }
            if (image[offset++] != 0xFF) break;
            while (offset < image.Length && image[offset] == 0xFF) offset++;
            if (offset == image.Length) break;

            byte marker = image[offset++];
            if (marker == 0xD9) return offset;
            if (inScan && (marker == 0 || marker is >= 0xD0 and <= 0xD7)) continue;
            if (marker is 0 or 0xD8 || image.Length - offset < 2) break;

            // Segment payloads can contain marker bytes, so skip by their stored length.
            int length = BinaryPrimitives.ReadUInt16BigEndian(image[offset..]);
            if (length < 2 || length > image.Length - offset) break;
            offset += length;
            inScan = marker == 0xDA;
        }

        throw new InvalidDataException("A Leica JPEG is incomplete or has an invalid marker.");
    }

    internal static byte[][] ReadCube(ReadOnlySpan<byte> data)
    {
        if (!data.StartsWith("CUBE"u8)) throw new InvalidDataException("Missing Leica cube header.");
        data = data[4..];
        ReadOnlySpan<byte> start = [0xFF, 0xD8, 0xFF, 0xE0, 0, 16, 0x4a, 0x46, 0x49, 0x46, 0];
        var levels = new SortedDictionary<int, List<byte[]>>();
        while (true)
        {
            int offset = data.IndexOf(start);
            if (offset < 0) break;
            data = data[offset..];
            var jpeg = data[..ReadJpegLength(data)];
            byte[] image = jpeg.ToArray();
            using var codec = OpenCodec(image);
            var info = codec.Info;
            if (info.Width == info.Height && info.Width is >= 2 and <= MaxImageSide)
            {
                if (!levels.TryGetValue(info.Width, out var faces)) levels.Add(info.Width, faces = []);
                faces.Add(image);
            }
            data = data[jpeg.Length..];
        }

        // Pick one common level from the six face pyramids, near the output's angular resolution.
        var selected = levels.Where(pair => pair.Value.Count == 6)
            .OrderBy(pair => Math.Abs(Math.Log2(pair.Key / 1024.0))).FirstOrDefault();
        return selected.Value?.ToArray() ?? throw new InvalidDataException("A Leica panorama needs six matching JPEG faces.");
    }

#if PCLIO_SOURCE
    private static IEnumerable<ViewerPanorama> ReadFaro(FaroFlsDocument cloud)
    {
        if (cloud.ReadColorPanorama(Width) is not { } rgb) yield break;
        var pixels = new SKColor[rgb.Length / 3];
        for (int i = 0; i < pixels.Length; i++) pixels[i] = new SKColor(rgb[i * 3], rgb[i * 3 + 1], rgb[i * 3 + 2]);
        PclVector3 origin = cloud.Scans[0].Transform.TransformPoint(PclVector3.Zero);
        yield return new ViewerPanorama(2, new Vector3d(origin.X, origin.Y, origin.Z), Encode(pixels));
    }

    private static IEnumerable<ViewerPanorama> ReadE57(E57Document cloud)
    {
        var root = XDocument.Parse(cloud.XmlContent).Root!;
        var ns = root.Name.Namespace;
        var images = root.Element(ns + "images2D")?.Elements();
        if (images == null) yield break;
        var byScan = images.ToLookup(e => e.Element(ns + "associatedData3DGuid")?.Value);
        for (int i = 0; i < cloud.Scans.Count; i++)
        {
            var scan = cloud.Scans[i];
            var registered = byScan[scan.Id].ToArray();
            var stations = new List<(Vector3d Position, List<Frame> Frames)>();
            foreach (var entry in registered)
            {
                var part = entry.Element(ns + "pinholeRepresentation");
                var pose = entry.Element(ns + "pose");
                var translation = pose?.Element(ns + "translation");
                var rotation = pose?.Element(ns + "rotation");
                if (part == null || translation == null || rotation == null) continue;
                var blob = part.Element(ns + "jpegImage") ?? part.Element(ns + "pngImage");
                if (blob == null) continue;

                double Field(XElement e, string key) => ParseDouble(e.Element(ns + key)?.Value);
                var position = new Vector3d(Field(translation, "x"), Field(translation, "y"), Field(translation, "z"));
                var frames = stations.FirstOrDefault(station => DistanceSquared(station.Position, position) <= 0.0001).Frames;
                if (frames == null)
                {
                    frames = [];
                    stations.Add((position, frames));
                }
                Quaternion q = UnitQuaternion(Field(rotation, "x"), Field(rotation, "y"), Field(rotation, "z"), Field(rotation, "w"));
                long offset = long.Parse(blob.Attribute("fileOffset")?.Value ?? "", CultureInfo.InvariantCulture);
                int length = int.Parse(blob.Attribute("length")?.Value ?? "", CultureInfo.InvariantCulture);
                if (offset < 0) throw new InvalidDataException("An E57 image offset is negative.");
                byte[] bytes = cloud.ReadImageBlob((ulong)offset, length);
                using var image = LoadImage(bytes);
                if (frames.Sum(frame => (long)frame.Pixels.Length) + (long)image.Width * image.Height > 64 * 1024 * 1024)
                    throw new InvalidDataException("One E57 photo station exceeds the total supported pixel count.");
                if (Field(part, "imageWidth") != image.Width || Field(part, "imageHeight") != image.Height)
                    throw new InvalidDataException("An E57 photograph differs from the dimensions in its calibration.");
                float focal = (float)Field(part, "focalLength");
                float fx = focal / (float)Field(part, "pixelWidth"), fy = focal / (float)Field(part, "pixelHeight");
                if (!float.IsFinite(fx) || !float.IsFinite(fy) || fx <= 0 || fy <= 0)
                    throw new InvalidDataException("An E57 image has invalid focal lengths.");
                frames.Add(new Frame(image, (Vector3.Transform(-Vector3.UnitZ, q), Vector3.Transform(Vector3.UnitX, q),
                    Vector3.Transform(-Vector3.UnitY, q)), fx, fy, (float)Field(part, "principalPointX"), (float)Field(part, "principalPointY")));
            }

            foreach (var station in stations.Where(station => CoversHorizon(station.Frames)))
                yield return new ViewerPanorama(i + 2L, station.Position, Project(station.Frames));
        }
    }

    private static bool CoversHorizon(List<Frame> frames)
    {
        for (int i = 0; i < 360; i++)
        {
            double angle = i * Math.Tau / 360;
            var ray = new Vector3((float)Math.Cos(angle), (float)Math.Sin(angle), 0);
            if (!frames.Any(frame => TryProject(ray, frame, 0, out _, out _, out _))) return false;
        }

        return true;
    }

    private static double DistanceSquared(Vector3d a, Vector3d b)
    {
        var d = a - b;
        return d.X * d.X + d.Y * d.Y + d.Z * d.Z;
    }

    private static double ParseDouble(string? value)
    {
        if (!double.TryParse(value, NumberStyles.Float, CultureInfo.InvariantCulture, out double parsed) || !double.IsFinite(parsed))
            throw new InvalidDataException("An E57 photo calibration value is invalid.");
        return parsed;
    }
#endif

    private static Quaternion UnitQuaternion(double x, double y, double z, double w)
    {
        var value = new Quaternion((float)x, (float)y, (float)z, (float)w);
        float length = value.LengthSquared();
        if (!float.IsFinite(length) || length < 1e-8f) throw new InvalidDataException("A photograph has an invalid rotation.");
        return Quaternion.Normalize(value);
    }

    private static SKBitmap LoadJpeg(byte[] bytes)
    {
        if (bytes.Length < 3 || bytes[0] != 255 || bytes[1] != 216 || bytes[2] != 255)
            throw new InvalidDataException("A photo face does not hold JPEG data.");
        return LoadImage(bytes);
    }

    private static SKCodec OpenCodec(byte[] bytes)
    {
        using var data = SKData.CreateCopy(bytes);
        return SKCodec.Create(data) ?? throw new InvalidDataException("A panorama image could not be identified.");
    }

    private static SKBitmap LoadImage(byte[] bytes)
    {
        using var codec = OpenCodec(bytes);
        var info = codec.Info;
        if (info.Width is < 1 or > MaxImageSide || info.Height is < 1 or > MaxImageSide ||
            (long)info.Width * info.Height > 32 * 1024 * 1024)
            throw new InvalidDataException("A photograph is larger than the supported pixel count.");
        return SKBitmap.Decode(codec) ?? throw new InvalidDataException("A panorama image could not be decoded.");
    }

    private sealed class Frame(SKBitmap image, (Vector3 Forward, Vector3 Right, Vector3 Down) basis,
        float fx, float fy, float cx, float cy)
    {
        public readonly int Width = image.Width;
        public readonly int Height = image.Height;
        public readonly Vector3 Forward = basis.Forward;
        public readonly Vector3 Right = basis.Right;
        public readonly Vector3 Down = basis.Down;
        public readonly float Fx = fx, Fy = fy, Cx = cx, Cy = cy;
        public readonly SKColor[] Pixels = image.Pixels;
    }

    private static byte[] Project(IReadOnlyList<Frame> frames)
    {
        const int Height = Width / 2;
        var pixels = new SKColor[Width * Height];
        var cos = new float[Width];
        var sin = new float[Width];
        for (int x = 0; x < Width; x++)
        {
            double angle = ((x + .5) / Width - .5) * Math.Tau;
            cos[x] = (float)Math.Cos(angle);
            sin[x] = (float)Math.Sin(angle);
        }

        Parallel.For(0, Height, y =>
        {
            double pitch = (.5 - (y + .5) / Height) * Math.PI;
            float radial = (float)Math.Cos(pitch), up = (float)Math.Sin(pitch);
            for (int x = 0; x < Width; x++)
            {
                var ray = new Vector3(radial * cos[x], radial * sin[x], up);
                float best = 0;
                SKColor color = SKColors.Black;
                foreach (var frame in frames)
                {
                    if (!TryProject(ray, frame, best, out float depth, out float u, out float v)) continue;
                    best = depth;
                    int col = Math.Clamp((int)MathF.Round(u), 0, frame.Width - 1);
                    int line = Math.Clamp((int)MathF.Round(v), 0, frame.Height - 1);
                    color = frame.Pixels[line * frame.Width + col];
                }

                pixels[y * Width + x] = color;
            }
        });

        return Encode(pixels);
    }

    private static bool TryProject(Vector3 ray, Frame frame, float closest, out float depth, out float u, out float v)
    {
        depth = Vector3.Dot(ray, frame.Forward);
        u = v = 0;
        if (depth <= closest) return false;

        u = frame.Cx + frame.Fx * Vector3.Dot(ray, frame.Right) / depth;
        v = frame.Cy + frame.Fy * Vector3.Dot(ray, frame.Down) / depth;
        return u >= -.5f && v >= -.5f && u <= frame.Width - .5f && v <= frame.Height - .5f;
    }

    private static byte[] Encode(SKColor[] pixels)
    {
        using var bitmap = new SKBitmap(Width, Width / 2) { Pixels = pixels };
        using var image = SKImage.FromBitmap(bitmap);
        using var jpeg = image.Encode(SKEncodedImageFormat.Jpeg, 88);
        return jpeg.ToArray();
    }
}
