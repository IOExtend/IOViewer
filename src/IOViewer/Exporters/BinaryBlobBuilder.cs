using System.Buffers;
using System.Buffers.Text;
using System.Runtime.InteropServices;
using System.Text.Json;

namespace IOViewer.Exporters;

/// <summary>A typed array inside the binary blob: byte offset, element count and element type.</summary>
internal readonly record struct BlobView(long Offset, int Count, string Type)
{
    public void WriteTo(Utf8JsonWriter writer)
    {
        writer.WriteStartObject();
        writer.WriteNumber("o", Offset);
        writer.WriteNumber("n", Count);
        writer.WriteString("t", Type);
        writer.WriteEndObject();
    }
}

/// <summary>
/// Accumulates little-endian typed arrays, each aligned to 4 bytes, and streams them out as standard base64.
/// </summary>
internal sealed class BinaryBlobBuilder
{
    private readonly ArrayBufferWriter<byte> _buffer = new();

    public BinaryBlobBuilder()
    {
        if (!BitConverter.IsLittleEndian)
        {
            throw new PlatformNotSupportedException("The viewer payload is written on little-endian platforms only.");
        }
    }

    public BlobView Add(ReadOnlySpan<float> values) => Add(MemoryMarshal.AsBytes(values), values.Length, "f32");

    public BlobView Add(ReadOnlySpan<ushort> values) => Add(MemoryMarshal.AsBytes(values), values.Length, "u16");

    public BlobView Add(ReadOnlySpan<uint> values) => Add(MemoryMarshal.AsBytes(values), values.Length, "u32");

    public BlobView Add(ReadOnlySpan<int> values) => Add(MemoryMarshal.AsBytes(values), values.Length, "i32");

    /// <summary>Returns the bytes of a previously added array.</summary>
    public ReadOnlySpan<byte> Bytes(BlobView view)
    {
        int size = view.Type == "u16" ? 2 : 4;
        return _buffer.WrittenSpan.Slice(checked((int)view.Offset), view.Count * size);
    }

    /// <summary>Writes the whole blob to <paramref name="output"/> as base64 in chunks.</summary>
    public void WriteBase64(Stream output)
    {
        const int chunk = 3 * 16 * 1024;
        var source = _buffer.WrittenSpan;
        var encoded = ArrayPool<byte>.Shared.Rent(Base64.GetMaxEncodedToUtf8Length(chunk));
        try
        {
            while (!source.IsEmpty)
            {
                var part = source[..Math.Min(chunk, source.Length)];
                Base64.EncodeToUtf8(part, encoded, out _, out int written, isFinalBlock: part.Length == source.Length);
                output.Write(encoded, 0, written);
                source = source[part.Length..];
            }
        }
        finally
        {
            ArrayPool<byte>.Shared.Return(encoded);
        }
    }

    private BlobView Add(ReadOnlySpan<byte> bytes, int count, string type)
    {
        int padding = (4 - _buffer.WrittenCount % 4) % 4;
        _buffer.GetSpan(padding)[..padding].Clear();
        _buffer.Advance(padding);
        var view = new BlobView(_buffer.WrittenCount, count, type);
        _buffer.Write(bytes);
        return view;
    }
}
