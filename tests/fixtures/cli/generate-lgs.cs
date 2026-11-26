// Generate a synthetic legacy LGS with four points and a JPEG panorama.
#:project ../../../src/IOViewer.Cli/IOViewer.Cli.csproj
#:property PublishAot=false
using System.Text;
using Microsoft.Data.Sqlite;
using SkiaSharp;

string path = args.Single();
string database = Path.ChangeExtension(path, ".db");
using (var connection = new SqliteConnection(new SqliteConnectionStringBuilder
{
    DataSource = database,
    Pooling = false,
}.ToString()))
{
    connection.Open();
    using var command = connection.CreateCommand();
    command.CommandText = """
        CREATE TABLE Hds_OdbSetup (mId INTEGER, mName TEXT);
        CREATE TABLE Hds_OdbSetupRef (
            mId INTEGER, mSetupId INTEGER, mPositionX REAL, mPositionY REAL, mPositionZ REAL,
            mRotationX REAL, mRotationY REAL, mRotationZ REAL, mRotationW REAL);
        INSERT INTO Hds_OdbSetup VALUES (1, 'Synthetic station');
        INSERT INTO Hds_OdbSetupRef VALUES (1, 1, -2.5, 2.5, 1, 0, 0, 0, 1);
        """;
    command.ExecuteNonQuery();
}

using var bitmap = new SKBitmap(8, 8);
bitmap.Erase(SKColors.CornflowerBlue);
using var image = SKImage.FromBitmap(bitmap);
using var jpeg = image.Encode(SKEncodedImageFormat.Jpeg, 90);
using var camera = new MemoryStream();
camera.Write("CUBE"u8);
for (int face = 0; face < 6; face++) camera.Write(jpeg.AsSpan());

(string Name, byte[] Data)[] entries =
[
    ("PointCloud", PointCloud()),
    ("ProjectDatabase", File.ReadAllBytes(database)),
    ("SETUP-camera-1", camera.ToArray()),
];
using var file = File.Create(path);
using var writer = new BinaryWriter(file);
writer.Write("wild::geosystems"u8);
var offsets = new long[entries.Length];
for (int i = 0; i < entries.Length; i++)
{
    offsets[i] = file.Position;
    writer.Write(entries[i].Data);
}

var descriptors = new long[entries.Length];
for (int i = 0; i < entries.Length; i++)
{
    descriptors[i] = file.Position;
    writer.Write(new byte[10]);
    WriteField(writer, entries[i].Name);
    writer.Write((byte)3);
    writer.Write(offsets[i]);
    writer.Write((long)entries[i].Data.Length);
    writer.Write(new byte[96]);
}

long toc = file.Position;
writer.Write(entries.Length);
foreach (long descriptor in descriptors) writer.Write(descriptor);
writer.Write("Leica Project File *"u8);
writer.Write(0u);
writer.Write(toc);

// Matches the synthetic four-point grid in PclIO's LegacyLgsTests.
static byte[] PointCloud()
{
    using var stream = new MemoryStream();
    using var writer = new BinaryWriter(stream);
    writer.Write("UDS4\u0007\0\0\0"u8);
    writer.Write(0u);
    writer.Write(4.0);
    writer.Write(1.0);
    writer.Write(3u);
    double[] grid = [1, 1, 1, -4, 2, 0, .5, .5, .5, .5, .5, .5, .5, .5, .5];
    foreach (double value in grid) writer.Write(value);
    writer.Write(2u);
    WriteField(writer, "UniquePointCount");
    WriteField(writer, "4");
    WriteField(writer, "ModelAttributes");
    WriteField(writer, "udIntensity:u16 udRGB:u32");
    long metadataEnd = stream.Position;
    stream.Position = 8;
    writer.Write((uint)(metadataEnd - 8));
    stream.Position = metadataEnd;
    uint[] layout = [2, 256, 0, 2, 3, 4, 1, 1];
    foreach (uint value in layout) writer.Write(value);
    writer.Write(new byte[16]);

    WriteBlockDescriptor(writer);
    writer.Write(0UL);
    writer.Write(0u);
    writer.Write(6u);
    writer.Write(0x10001u);
    WriteBlockDescriptor(writer);
    writer.Write(new byte[] { 0x81, 0x22, 0x0c });
    for (int i = 1; i <= 4; i++) writer.Write((ushort)(i * 1000));
    for (int i = 1; i <= 4; i++) writer.Write(new byte[] { 55, 70, (byte)(i * 10), 255 });
    stream.SetLength(3 * 1024);
    byte[] data = stream.ToArray();
    var mask = new byte[1024];
    new Random(42).NextBytes(mask);
    for (int i = 0; i < data.Length; i++) data[i] ^= mask[i % mask.Length];
    return data;
}

static void WriteField(BinaryWriter writer, string value)
{
    writer.Write((ushort)(value.Length + 1));
    writer.Write(Encoding.ASCII.GetBytes(value));
    writer.Write((byte)0);
}

static void WriteBlockDescriptor(BinaryWriter writer)
{
    const int blockBytes = 20 + 16 + 3 + 4 * 6;
    writer.Write(blockBytes);
    writer.Write(0u);
    writer.Write(8u);
    writer.Write(16u);
}
