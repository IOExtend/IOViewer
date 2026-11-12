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

    /// <remarks>A stream that cannot seek is read into memory first; a seekable stream is read twice from its position.</remarks>
    /// <exception cref="InvalidDataException">
    /// The JSON is damaged, of another kind, or of a format newer than this version reads.
    /// </exception>
    public static ViewerDocument Load(Stream stream)
    {
        ArgumentNullException.ThrowIfNull(stream);
        // The root is read before the document, so a stream that cannot rewind is copied into memory first.
        using var copy = stream.CanSeek ? null : new MemoryStream();
        if (copy is not null)
        {
            stream.CopyTo(copy);
            copy.Position = 0;
        }
        var input = copy ?? stream;
        long start = input.Position;
        var (kind, format) = ReadRoot(input);
        input.Position = start;

        try
        {
            return kind switch
            {
                null => Legacy.LegacySnapshot.Read(input),
                SceneDocument.DocumentKind => new ViewerDocument(SceneJson.Read(input)),
                ViewerJsonFile.FileKind => ReadViewerJson(input, format),
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

    private static ViewerDocument ReadViewerJson(Stream json, int? format)
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
    // The stream is read in blocks, so the file is never held whole.
    private static (string? Kind, int? Format) ReadRoot(Stream stream)
    {
        byte[] buffer = new byte[64 * 1024];
        int length = stream.ReadAtLeast(buffer, 3, throwOnEndOfStream: false);
        int offset = buffer.AsSpan(0, length).StartsWith((ReadOnlySpan<byte>)[0xEF, 0xBB, 0xBF]) ? 3 : 0;
        bool final = length < 3; // ReadAtLeast stops short only at the end of the stream
        var state = new JsonReaderState(new JsonReaderOptions { MaxDepth = 128 });
        string? kind = null;
        int? format = null;
        bool started = false;
        int next = 0; // the root value that follows: 1 Kind, 2 Format, 0 any other
        try
        {
            while (true)
            {
                var reader = new Utf8JsonReader(buffer.AsSpan(offset, length - offset), final, state);
                while (reader.Read())
                {
                    if (!started)
                    {
                        if (reader.TokenType != JsonTokenType.StartObject)
                        {
                            throw new InvalidDataException("Not a readable IOViewer JSON file: the root is not an object.");
                        }
                        started = true;
                    }
                    else if (reader.CurrentDepth == 0)
                    {
                        return (kind, format); // the end of the root object
                    }
                    else if (reader.CurrentDepth == 1 && reader.TokenType == JsonTokenType.PropertyName)
                    {
                        next = reader.ValueTextEquals("Kind"u8) ? 1 : reader.ValueTextEquals("Format"u8) ? 2 : 0;
                    }
                    else if (next != 0)
                    {
                        if (next == 1)
                        {
                            kind = reader.TokenType == JsonTokenType.String
                                ? reader.GetString()
                                : throw new InvalidDataException("Not a readable IOViewer JSON file: Kind is not a string.");
                        }
                        else if (reader.TokenType == JsonTokenType.Number && reader.TryGetInt32(out int number))
                        {
                            format = number;
                        }
                        next = 0;
                    }
                }
                if (final) throw new InvalidDataException("Not a readable IOViewer JSON file: the root object is not closed.");

                // Keep the unread tail, grow the buffer when one token fills it, and append the next block.
                state = reader.CurrentState;
                offset += (int)reader.BytesConsumed;
                buffer.AsSpan(offset, length - offset).CopyTo(buffer);
                length -= offset;
                offset = 0;
                if (length == buffer.Length) Array.Resize(ref buffer, buffer.Length * 2);
                int read = stream.Read(buffer, length, buffer.Length - length);
                length += read;
                final = read == 0;
            }
        }
        catch (JsonException e)
        {
            throw new InvalidDataException($"Not a readable IOViewer JSON file: {e.Message}", e);
        }
    }
}
