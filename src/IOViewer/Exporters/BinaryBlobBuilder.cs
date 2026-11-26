using System.Buffers;
using System.Buffers.Text;
using System.Runtime.CompilerServices;
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

    public BlobView Add(ReadOnlySpan<float> values) => Add(values, "f32");

    public BlobView Add(ReadOnlySpan<byte> values) => Add(values, "u8");

    public BlobView Add(ReadOnlySpan<ushort> values) => Add(values, "u16");

    public BlobView Add(ReadOnlySpan<short> values) => Add(values, "i16");

    public BlobView Add(ReadOnlySpan<uint> values) => Add(values, "u32");

    public BlobView Add(ReadOnlySpan<int> values) => Add(values, "i32");

    /// <summary>Returns the bytes of a previously added array.</summary>
    public ReadOnlySpan<byte> Bytes(BlobView view)
    {
        int size = view.Type is "u16" or "i16" ? 2 : 4;
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

    private BlobView Add<T>(ReadOnlySpan<T> values, string type) where T : unmanaged
    {
        int written = _buffer.WrittenCount;
        var (offset, end) = CheckAppend(written, values.Length, Unsafe.SizeOf<T>());
        int added = end - written;
        if (added > 0)
        {
            int padding = offset - written;
            var target = _buffer.GetSpan(added);
            target[..padding].Clear();
            MemoryMarshal.AsBytes(values).CopyTo(target[padding..]);
            _buffer.Advance(added);
        }
        return new BlobView(offset, values.Length, type);
    }

    internal static (int Offset, int End) CheckAppend(int written, int count, int elementSize)
    {
        long offset = (written + 3L) & ~3L;
        int end = CheckByteCount(offset + (long)count * elementSize, Array.MaxLength);
        return ((int)offset, end);
    }

    internal static int CheckByteCount(long required, int limit)
    {
        if (required > limit)
        {
            throw new InvalidDataException($"The HTML viewer binary buffer requires {required} bytes, exceeding the limit of {limit} bytes.");
        }
        return (int)required;
    }
}
