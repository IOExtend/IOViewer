using System.Reflection;
using System.Text.Json;
using IOScene;
using IOViewer.Exporters;
using IOViewer.Model;

namespace IOViewer.Importers;

/// <summary>
/// Reads JSON into a <see cref="ViewerDocument"/>: viewer JSON (<c>"Kind": "ioviewer"</c>, format 2), a scene file
/// (<c>"Kind": "ioscene"</c>), which gives a document with no sections, and a snapshot of IOViewer 0.1 or 0.2 (no
/// <c>Kind</c>), which is turned into a scene.
/// </summary>
public static class JsonViewerImporter
{
    public static ViewerDocument Load(string filePath)
    {
        ArgumentNullException.ThrowIfNull(filePath);
        using var fs = File.OpenRead(filePath);
        return Load(fs);
    }

    /// <exception cref="InvalidDataException">
    /// The JSON is damaged, of another kind, or of a format newer than this version reads.
    /// </exception>
    public static ViewerDocument Load(Stream stream)
    {
        ArgumentNullException.ThrowIfNull(stream);
        using var buffer = new MemoryStream();
        stream.CopyTo(buffer);
        byte[] json = buffer.ToArray();
        if (json.AsSpan().StartsWith((ReadOnlySpan<byte>)[0xEF, 0xBB, 0xBF])) json = json[3..];

        var (kind, format) = ReadRoot(json);
        try
        {
            return kind switch
            {
                null => Legacy.LegacySnapshot.Read(json),
                SceneDocument.DocumentKind => new ViewerDocument(SceneJson.Read(new MemoryStream(json, writable: false))),
                ViewerJsonFile.FileKind => ReadViewerJson(json, format),
                _ => throw new InvalidDataException(
                    $"Unknown JSON kind '{kind}': IOViewer reads 'ioviewer' and 'ioscene' files and IOViewer 0.1 and 0.2 snapshots."),
            };
        }
        catch (JsonException e)
        {
            throw new InvalidDataException($"Not a readable IOViewer JSON file: {e.Message}", e);
        }
        catch (TargetInvocationException e) when (e.InnerException is InvalidDataException rejected)
        {
            // Without dynamic code the serialiser calls the scene's Kind and Format setters through reflection.
            throw new InvalidDataException(rejected.Message, e);
        }
    }

    private static ViewerDocument ReadViewerJson(byte[] json, int? format)
    {
        if (format != ViewerJsonFile.CurrentFormat)
        {
            throw new InvalidDataException(format > ViewerJsonFile.CurrentFormat
                ? $"IOViewer JSON format {format} is newer than this version reads (format {ViewerJsonFile.CurrentFormat}); use a newer IOViewer."
                : format is null
                    ? "Not a readable IOViewer JSON file: Format is missing."
                    : $"Not a readable IOViewer JSON file: Format is {format}, expected {ViewerJsonFile.CurrentFormat}.");
        }
        var file = JsonSerializer.Deserialize<ViewerJsonFile>(json, SceneJson.CreateOptions())
            ?? throw new InvalidDataException("Not a readable IOViewer JSON file: the root is null.");
        return file.ToDocument();
    }

    // Kind and Format of the root object, wherever they stand in it; a file without Kind is a 0.1 or 0.2 snapshot.
    private static (string? Kind, int? Format) ReadRoot(byte[] json)
    {
        var reader = new Utf8JsonReader(json, new JsonReaderOptions { MaxDepth = 128 });
        string? kind = null;
        int? format = null;
        try
        {
            if (!reader.Read() || reader.TokenType != JsonTokenType.StartObject)
            {
                throw new InvalidDataException("Not a readable IOViewer JSON file: the root is not an object.");
            }
            while (reader.Read() && reader.TokenType == JsonTokenType.PropertyName)
            {
                bool isKind = reader.ValueTextEquals("Kind"u8);
                bool isFormat = reader.ValueTextEquals("Format"u8);
                reader.Read();
                if (isKind)
                {
                    kind = reader.TokenType == JsonTokenType.String
                        ? reader.GetString()
                        : throw new InvalidDataException("Not a readable IOViewer JSON file: Kind is not a string.");
                }
                else if (isFormat && reader.TokenType == JsonTokenType.Number && reader.TryGetInt32(out int number))
                {
                    format = number;
                }
                else
                {
                    reader.Skip();
                }
            }
        }
        catch (JsonException e)
        {
            throw new InvalidDataException($"Not a readable IOViewer JSON file: {e.Message}", e);
        }
        return (kind, format);
    }
}
