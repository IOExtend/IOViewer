using System.Buffers.Binary;
using System.Text.Json;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

/// <summary>Reads the data blocks of an exported viewer HTML page (format 2 or 3).</summary>
internal sealed class ViewerHtml
{
    public string Html { get; }
    public JsonElement Meta { get; }
    public JsonElement Props { get; }
    public byte[] Bin { get; }

    private ViewerHtml(string html)
    {
        Html = html;
        Meta = ParseJson(Block(html, "ioviewer-meta"));
        Props = ParseJson(Block(html, "ioviewer-props"));
        Bin = Convert.FromBase64String(Block(html, "ioviewer-bin"));
    }

    public static ViewerHtml Parse(string html) => new(html);

    public static ViewerHtml Export(ViewerDocument doc, HtmlViewerOptions? options = null) =>
        new(HtmlViewerExporter.ExportToString(doc, options));

    public int InstanceCount => Meta.GetProperty("instances").GetProperty("count").GetInt32();

    public JsonElement Geometries => Meta.GetProperty("geometries");

    /// <summary>Returns the instance array <paramref name="name"/> (geometry, material, element, matrix) as doubles.</summary>
    public double[] Instances(string name) => Read(Meta.GetProperty("instances").GetProperty(name));

    /// <summary>Decodes a <c>{o, n, t}</c> view from the BIN block.</summary>
    public double[] Read(JsonElement view)
    {
        int offset = view.GetProperty("o").GetInt32();
        int count = view.GetProperty("n").GetInt32();
        string type = view.GetProperty("t").GetString()!;
        Assert.Equal(0, offset % 4);
        var span = Bin.AsSpan(offset);
        var result = new double[count];
        for (int i = 0; i < count; i++)
        {
            result[i] = type switch
            {
                "f32" => BinaryPrimitives.ReadSingleLittleEndian(span[(i * 4)..]),
                "u16" => BinaryPrimitives.ReadUInt16LittleEndian(span[(i * 2)..]),
                "i16" => BinaryPrimitives.ReadInt16LittleEndian(span[(i * 2)..]),
                "u32" => BinaryPrimitives.ReadUInt32LittleEndian(span[(i * 4)..]),
                "i32" => BinaryPrimitives.ReadInt32LittleEndian(span[(i * 4)..]),
                _ => throw new InvalidDataException($"Unknown view type '{type}'."),
            };
        }
        return result;
    }

    /// <summary>Positions of a META geometry in its local space: <c>o + q·s</c> for u16 views with <c>q</c>, else f32 as written.</summary>
    public double[] Positions(JsonElement geometry)
    {
        var view = geometry.GetProperty("positions");
        var values = Read(view);
        if (!geometry.TryGetProperty("q", out var q))
        {
            Assert.Equal("f32", view.GetProperty("t").GetString());
            return values;
        }
        Assert.Equal("u16", view.GetProperty("t").GetString());
        var origin = q.GetProperty("o").EnumerateArray().Select(e => e.GetDouble()).ToArray();
        double step = q.GetProperty("s").GetDouble();
        for (int i = 0; i < values.Length; i++) values[i] = origin[i % 3] + values[i] * step;
        return values;
    }

    /// <summary>Unit normals of a META geometry (3 per vertex), decoded from octahedral i16 pairs or f32 as written; null when absent.</summary>
    public double[]? Normals(JsonElement geometry)
    {
        var view = geometry.GetProperty("normals");
        if (view.ValueKind == JsonValueKind.Null) return null;
        var values = Read(view);
        if (view.GetProperty("t").GetString() == "f32") return values;
        Assert.Equal("i16", view.GetProperty("t").GetString());
        var result = new double[values.Length / 2 * 3];
        for (int v = 0; v < values.Length / 2; v++)
        {
            double x = Math.Max(values[v * 2] / short.MaxValue, -1), y = Math.Max(values[v * 2 + 1] / short.MaxValue, -1);
            double z = 1 - Math.Abs(x) - Math.Abs(y);
            if (z < 0) (x, y) = ((1 - Math.Abs(y)) * (x < 0 ? -1 : 1), (1 - Math.Abs(x)) * (y < 0 ? -1 : 1));
            double length = Math.Sqrt(x * x + y * y + z * z);
            result[v * 3] = x / length;
            result[v * 3 + 1] = y / length;
            result[v * 3 + 2] = z / length;
        }
        return result;
    }

    private static JsonElement ParseJson(string json)
    {
        using var document = JsonDocument.Parse(json);
        return document.RootElement.Clone();
    }

    private static string Block(string html, string id)
    {
        int tag = html.IndexOf($"<script id=\"{id}\"", StringComparison.Ordinal);
        Assert.True(tag >= 0, $"Block '{id}' not found.");
        int start = html.IndexOf('>', tag) + 1;
        int end = html.IndexOf("</script>", start, StringComparison.Ordinal);
        return html[start..end];
    }
}
