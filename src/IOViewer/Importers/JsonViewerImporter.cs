using System.Text.Json;
using IOViewer.Model;

namespace IOViewer.Importers;

/// <summary>
/// Deserializes a ViewerDocument snapshot from JSON.
/// </summary>
public static class JsonViewerImporter
{
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowNamedFloatingPointLiterals
    };

    public static ViewerDocument Load(string filePath)
    {
        ArgumentNullException.ThrowIfNull(filePath);
        using var fs = File.OpenRead(filePath);
        return Load(fs);
    }

    public static ViewerDocument Load(Stream stream)
    {
        ArgumentNullException.ThrowIfNull(stream);
        var doc = JsonSerializer.Deserialize<ViewerDocument>(stream, JsonOptions);
        if (doc is null) throw new InvalidDataException("Failed to deserialize ViewerDocument from JSON stream.");
        return doc;
    }
}
