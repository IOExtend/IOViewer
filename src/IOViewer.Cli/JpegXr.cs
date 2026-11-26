using System.Runtime.InteropServices;
using System.Runtime.Versioning;
using SkiaSharp;

namespace IOViewer.Cli;

[SupportedOSPlatform("windows")]
internal static class JpegXr
{
    private static readonly Guid DecoderClass = new("a26cec36-234c-4950-ae16-e34aace71d0d");
    private static readonly Guid Bgr24 = new("6fddc324-4e03-4bfe-b185-3d77768dc90c");
    private const int ChangedApartment = unchecked((int)0x80010106);

    internal static SKBitmap Decode(byte[] image, int maxSide)
    {
        int apartment = CoInitializeEx(0, 0);
        if (apartment != ChangedApartment) Marshal.ThrowExceptionForHR(apartment);
        nint stream = 0;
        Decoder? decoder = null;
        BitmapFrame? frame = null;
        try
        {
            stream = SHCreateMemStream(image, image.Length);
            if (stream == 0) throw new InvalidDataException("Could not open the JPEG XR memory stream.");
            Guid iid = typeof(Decoder).GUID;
            Marshal.ThrowExceptionForHR(CoCreateInstance(in DecoderClass, 0, 1, in iid, out decoder));
            decoder.Initialize(stream, 0);
            decoder.GetFrame(0, out frame);
            frame.GetSize(out uint width, out uint height);
            frame.GetPixelFormat(out Guid format);
            if (width < 2 || width != height || width > maxSide || (ulong)width * height > 32 * 1024 * 1024)
                throw new InvalidDataException("Invalid JPEG XR panorama face dimensions.");
            if (format != Bgr24) throw new InvalidDataException("The JPEG XR panorama face must carry 24-bit BGR.");

            int size = (int)width;
            int stride = 3 * size;
            var bytes = new byte[stride * size];
            frame.CopyPixels(0, stride, bytes.Length, bytes);
            var pixels = new SKColor[size * size];
            for (int i = 0; i < pixels.Length; i++)
                pixels[i] = new SKColor(bytes[3 * i + 2], bytes[3 * i + 1], bytes[3 * i]);
            return new SKBitmap(size, size) { Pixels = pixels };
        }
        catch (COMException ex)
        {
            throw new InvalidDataException("The Windows JPEG XR decoder could not read the panorama face.", ex);
        }
        finally
        {
            if (frame != null) Marshal.ReleaseComObject(frame);
            if (decoder != null) Marshal.ReleaseComObject(decoder);
            if (stream != 0) Marshal.Release(stream);
            if (apartment >= 0) CoUninitialize();
        }
    }

    [DllImport("ole32.dll", ExactSpelling = true)]
    private static extern int CoInitializeEx(nint reserved, int apartment);

    [DllImport("ole32.dll", ExactSpelling = true)]
    private static extern void CoUninitialize();

    [DllImport("ole32.dll", ExactSpelling = true)]
    private static extern int CoCreateInstance(in Guid clsid, nint outer, int context, in Guid iid,
        [MarshalAs(UnmanagedType.Interface)] out Decoder decoder);

    [DllImport("shlwapi.dll", ExactSpelling = true)]
    private static extern nint SHCreateMemStream(byte[] data, int size);

    [ComImport, Guid("9edde9e7-8dee-47ea-99df-e6faf2ed44bf"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface Decoder
    {
        void QueryCapability(nint stream, out uint capability);
        void Initialize(nint stream, int cacheOptions);
        void GetContainerFormat(out Guid format);
        void GetDecoderInfo(out nint info);
        void CopyPalette(nint palette);
        void GetMetadataQueryReader(out nint reader);
        void GetPreview(out nint preview);
        void GetColorContexts(uint count, nint contexts, out uint actual);
        void GetThumbnail(out nint thumbnail);
        void GetFrameCount(out uint count);
        void GetFrame(uint index, out BitmapFrame frame);
    }

    [ComImport, Guid("3b16811b-6a43-4ec9-a813-3d930c13b940"), InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface BitmapFrame
    {
        void GetSize(out uint width, out uint height);
        void GetPixelFormat(out Guid format);
        void GetResolution(out double dpiX, out double dpiY);
        void CopyPalette(nint palette);
        void CopyPixels(nint rectangle, int stride, int size, [Out, MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2)] byte[] bytes);
    }
}
