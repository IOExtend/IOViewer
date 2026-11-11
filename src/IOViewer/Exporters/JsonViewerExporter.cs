using System.Text.Encodings.Web;
using System.Text.Json;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Serializes a ViewerDocument snapshot into structured JSON.
/// </summary>
public static class JsonViewerExporter
{
    private static readonly JsonSerializerOptions DefaultOptions = new()
    {
        WriteIndented = true,
        Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
        NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowNamedFloatingPointLiterals
    };

    private static readonly JsonSerializerOptions CompactOptions = new()
    {
        WriteIndented = false,
        Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
        NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowNamedFloatingPointLiterals
    };

    public static void Save(ViewerDocument doc, string filePath, bool indented = true)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(filePath);

        using var fs = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None);
        Export(doc, fs, indented);
    }

    public static void Export(ViewerDocument doc, Stream stream, bool indented = true)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(stream);

        var options = indented ? DefaultOptions : CompactOptions;
        JsonSerializer.Serialize(stream, doc, options);
    }

    public static string ExportToString(ViewerDocument doc, bool indented = true)
    {
        var options = indented ? DefaultOptions : CompactOptions;
        return JsonSerializer.Serialize(doc, options);
    }
}
