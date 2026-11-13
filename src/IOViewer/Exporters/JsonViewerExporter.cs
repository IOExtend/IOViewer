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
    /// Writes viewer JSON to a file. The file is written beside the target first and moved over it when complete, so a
    /// failed write, such as data the serializer rejects, leaves an existing file as it was. It needs permission to
    /// create a file in the target's folder, and it replaces the target: a symbolic link is replaced, not written through.
    /// </summary>
    public static void Save(ViewerDocument doc, string filePath, bool indented = true)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentException.ThrowIfNullOrEmpty(filePath);

        string temporary = filePath + "." + Guid.NewGuid().ToString("N") + ".tmp";
        try
        {
            using (var fs = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None)) Export(doc, fs, indented);
            File.Move(temporary, filePath, overwrite: true);
        }
        catch
        {
            if (File.Exists(temporary)) File.Delete(temporary);
            throw;
        }
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
