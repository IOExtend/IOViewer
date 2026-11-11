using System.Text;
using System.Text.RegularExpressions;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Generates standalone, single-file interactive 3D WebGL HTML BIM/CAD model viewers.
/// </summary>
public static class HtmlViewerExporter
{
    public static void Save(ViewerDocument doc, string filePath, HtmlViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(filePath);

        // Validated before the file is opened, so invalid data never truncates an existing page.
        var payload = ViewerPayloadWriter.Create(doc, options ?? new HtmlViewerOptions());
        using var fs = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None);
        Write(payload, fs);
    }

    public static void Export(ViewerDocument doc, Stream stream, HtmlViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(stream);

        Write(ViewerPayloadWriter.Create(doc, options ?? new HtmlViewerOptions()), stream);
    }

    private static void Write(ViewerPayloadWriter payload, Stream stream)
    {
        string shell = ReadResourceText("IOViewer.Viewer.index.html");

        (string Token, Action<Stream> Write)[] placeholders =
        [
            ("/*IOVIEWER:CSS*/", s => WriteText(s, EscapeEndTag(ReadResourceText("IOViewer.Viewer.viewer.css"), "style"))),
            ("/*IOVIEWER:JS*/", s => WriteText(s, EscapeEndTag(ReadResourceText("IOViewer.Viewer.viewer.js"), "script"))),
            ("<!--IOVIEWER:META-->", payload.WriteMeta),
            ("<!--IOVIEWER:BIN-->", payload.WriteBin),
            ("<!--IOVIEWER:PROPS-->", payload.WriteProps),
        ];

        var ordered = placeholders
            .Select(p => (Index: shell.IndexOf(p.Token, StringComparison.Ordinal), p.Token, p.Write))
            .OrderBy(p => p.Index)
            .ToList();
        if (ordered[0].Index < 0)
        {
            throw new InvalidOperationException($"The embedded viewer page has no '{ordered[0].Token}' placeholder.");
        }

        int position = 0;
        foreach (var (index, token, write) in ordered)
        {
            WriteText(stream, shell[position..index]);
            write(stream);
            position = index + token.Length;
        }
        WriteText(stream, shell[position..]);
        stream.Flush();
    }

    public static string ExportToString(ViewerDocument doc, HtmlViewerOptions? options = null)
    {
        using var ms = new MemoryStream();
        Export(doc, ms, options);
        return Encoding.UTF8.GetString(ms.ToArray());
    }

    private static void WriteText(Stream stream, string text) => stream.Write(Encoding.UTF8.GetBytes(text));

    private static Stream OpenResource(string name) =>
        typeof(HtmlViewerExporter).Assembly.GetManifestResourceStream(name)
        ?? throw new InvalidOperationException($"Embedded resource '{name}' is missing.");

    private static string ReadResourceText(string name)
    {
        using var reader = new StreamReader(OpenResource(name), Encoding.UTF8);
        return reader.ReadToEnd();
    }

    /// <summary>Escapes <c>&lt;/tag</c> in any letter case so inlined code cannot close its own <c>&lt;script&gt;</c> or <c>&lt;style&gt;</c> element.</summary>
    internal static string EscapeEndTag(string text, string tag) =>
        Regex.Replace(text, "</(" + tag + ")", @"<\/$1", RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
}
