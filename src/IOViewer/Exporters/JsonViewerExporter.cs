using System.Text.Json;
using IOScene;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Writes a <see cref="ViewerDocument"/> as viewer JSON: <c>{ "Kind": "ioviewer", "Format": 2, "Scene": {...},
/// "SectionPlanes", "SectionBox", "HiddenModelKeys" }</c>, with the scene in the encoding of scene JSON.
/// </summary>
/// <remarks>A scene alone is written as a scene file with <see cref="SceneJson"/>.</remarks>
public static class JsonViewerExporter
{
    private static readonly JsonSerializerOptions DefaultOptions = Options(indented: true);

    private static readonly JsonSerializerOptions CompactOptions = Options(indented: false);

    /// <summary>
    /// Writes viewer JSON to a file. The data is serialized once before the file is opened, so data the serializer
    /// rejects, such as a non-finite coordinate, leaves an existing file as it was. The file is then rewritten in place
    /// and keeps its permissions.
    /// </summary>
    public static void Save(ViewerDocument doc, string filePath, bool indented = true)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(filePath);

        var file = ViewerJsonFile.From(doc);
        var options = indented ? DefaultOptions : CompactOptions;
        // A pass that writes nothing: the serializer throws here, before the target is truncated, as it would below.
        JsonSerializer.Serialize(Stream.Null, file, options);
        using var fs = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None);
        JsonSerializer.Serialize(fs, file, options);
    }

    public static void Export(ViewerDocument doc, Stream stream, bool indented = true)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(stream);

        JsonSerializer.Serialize(stream, ViewerJsonFile.From(doc), indented ? DefaultOptions : CompactOptions);
    }

    public static string ExportToString(ViewerDocument doc, bool indented = true)
    {
        ArgumentNullException.ThrowIfNull(doc);
        return JsonSerializer.Serialize(ViewerJsonFile.From(doc), indented ? DefaultOptions : CompactOptions);
    }

    private static JsonSerializerOptions Options(bool indented)
    {
        var options = SceneJson.CreateOptions();
        options.WriteIndented = indented;
        return options;
    }
}

/// <summary>The root of a viewer JSON file, in the order the file lists its members.</summary>
internal sealed class ViewerJsonFile
{
    public const string FileKind = "ioviewer";
    public const int CurrentFormat = 2;

    public string Kind { get; set; } = FileKind;
    public int Format { get; set; } = CurrentFormat;
    public SceneDocument Scene { get; set; } = new();
    public List<ViewerSectionPlane> SectionPlanes { get; set; } = [];
    public ViewerSectionBox? SectionBox { get; set; }
    public List<string> HiddenModelKeys { get; set; } = [];

    public static ViewerJsonFile From(ViewerDocument doc) => new()
    {
        Scene = doc.Scene,
        SectionPlanes = doc.SectionPlanes,
        SectionBox = doc.SectionBox,
        HiddenModelKeys = doc.HiddenModelKeys,
    };

    public ViewerDocument ToDocument() => new(Scene)
    {
        SectionPlanes = SectionPlanes,
        SectionBox = SectionBox,
        HiddenModelKeys = HiddenModelKeys,
    };
}
