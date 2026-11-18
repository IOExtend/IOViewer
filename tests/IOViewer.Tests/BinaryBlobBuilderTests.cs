using System.Text;
using IOViewer.Exporters;
using Xunit;

namespace IOViewer.Tests;

public class BinaryBlobBuilderTests
{
    [Fact]
    public void CheckAppend_IncludesAlignmentAtTheArrayLimit()
    {
        int lastAligned = Array.MaxLength & ~3;
        Assert.Equal((lastAligned - 4, lastAligned), BinaryBlobBuilder.CheckAppend(lastAligned - 6, 1, sizeof(float)));

        var error = Assert.Throws<InvalidDataException>(() => BinaryBlobBuilder.CheckAppend(lastAligned - 2, 1, sizeof(float)));
        Assert.Equal($"The HTML viewer binary buffer requires {(long)lastAligned + 4} bytes, exceeding the limit of {Array.MaxLength} bytes.", error.Message);
    }

    [Fact]
    public void CheckAppend_ReportsTheSizeOfAnArrayThatExceedsInt32Bytes()
    {
        const long required = (long)int.MaxValue * sizeof(float);
        var error = Assert.Throws<InvalidDataException>(() => BinaryBlobBuilder.CheckAppend(0, int.MaxValue, sizeof(float)));
        Assert.Equal($"The HTML viewer binary buffer requires {required} bytes, exceeding the limit of {Array.MaxLength} bytes.", error.Message);
    }

    [Fact]
    public void CheckByteCount_RejectsAByteSpanOverInt32MaxValue()
    {
        const long required = (long)int.MaxValue + 1;
        Assert.Equal(int.MaxValue, BinaryBlobBuilder.CheckByteCount(int.MaxValue, int.MaxValue));
        var error = Assert.Throws<InvalidDataException>(() => BinaryBlobBuilder.CheckByteCount(required, int.MaxValue));
        Assert.Equal($"The HTML viewer binary buffer requires {required} bytes, exceeding the limit of {int.MaxValue} bytes.", error.Message);
    }

    [Fact]
    public void Add_PreservesTypedOffsetsAndZeroPadding()
    {
        var blob = new BinaryBlobBuilder();
        Assert.Equal(new BlobView(0, 1, "i16"), blob.Add(new short[] { -1 }));
        Assert.Equal(new BlobView(4, 0, "u16"), blob.Add(ReadOnlySpan<ushort>.Empty));
        Assert.Equal(new BlobView(4, 1, "f32"), blob.Add(new float[] { 1 }));

        using var output = new MemoryStream();
        blob.WriteBase64(output);
        byte[] expected = [255, 255, 0, 0, 0, 0, 128, 63];
        Assert.Equal(expected, Convert.FromBase64String(Encoding.ASCII.GetString(output.ToArray())));
    }
}
