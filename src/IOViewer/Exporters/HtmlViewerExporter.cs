using System.Security.AccessControl;
using System.Text;
using System.Text.RegularExpressions;
using IOScene;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Generates standalone, single-file interactive 3D WebGL HTML BIM/CAD model viewers.
/// </summary>
public static class HtmlViewerExporter
{
    /// <summary>Writes the viewer page of a scene, with no section and every model shown, to a file.</summary>
    public static void Save(SceneDocument scene, string filePath, HtmlViewerOptions? options = null) =>
        Save(new ViewerDocument(scene), filePath, options);

    /// <summary>Writes the viewer page of a scene, with no section and every model shown, to a stream.</summary>
    public static void Export(SceneDocument scene, Stream stream, HtmlViewerOptions? options = null) =>
        Export(new ViewerDocument(scene), stream, options);

    /// <summary>Returns the viewer page of a scene, with no section and every model shown.</summary>
    public static string ExportToString(SceneDocument scene, HtmlViewerOptions? options = null) =>
        ExportToString(new ViewerDocument(scene), options);

    /// <summary>Writes a complete viewer page to a temporary file next to the destination before replacing it.</summary>
    /// <exception cref="InvalidDataException">The document contains invalid viewer data.</exception>
    public static void Save(ViewerDocument doc, string filePath, HtmlViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(doc.Scene);
        ArgumentNullException.ThrowIfNull(filePath);

        var payload = ViewerPayloadWriter.Create(doc, options ?? new HtmlViewerOptions());
        var target = new FileInfo(filePath);
        if (target.LinkTarget is not null && target.ResolveLinkTarget(returnFinalTarget: true) is { } linked)
            target = new FileInfo(linked.FullName);
        bool replace = target.Exists;
        if (replace)
        {
            // Check write access and sharing before the rename, which can ignore write permissions on Unix.
            using var existing = target.Open(FileMode.Open, FileAccess.Write, FileShare.None);
        }

        var temporary = new FileInfo(Path.Combine(target.DirectoryName!, $".ioviewer-{Guid.NewGuid():N}.tmp"));
        var stream = OpenTemporary(temporary, replace ? target : null);
        bool moved = false;
        try
        {
            using (stream)
            {
                Write(payload, stream);
                if (replace && !OperatingSystem.IsWindows())
                    File.SetUnixFileMode(stream.SafeFileHandle, File.GetUnixFileMode(target.FullName));
            }
            File.Move(temporary.FullName, target.FullName, overwrite: replace);
            moved = true;
        }
        finally
        {
            if (!moved) temporary.Delete();
        }
    }

    private static FileStream OpenTemporary(FileInfo temporary, FileInfo? target)
    {
        if (target is null) return temporary.Open(FileMode.CreateNew, FileAccess.Write, FileShare.None);
        if (OperatingSystem.IsWindows())
        {
            var access = target.GetAccessControl(AccessControlSections.Access);
            return temporary.Create(FileMode.CreateNew, FileSystemRights.Write, FileShare.None, 4096, FileOptions.None, access);
        }

        // A replacement may be more private than its parent directory.
        return temporary.Open(new FileStreamOptions
        {
            Mode = FileMode.CreateNew,
            Access = FileAccess.Write,
            Share = FileShare.None,
            UnixCreateMode = UnixFileMode.UserRead | UnixFileMode.UserWrite,
        });
    }

    public static void Export(ViewerDocument doc, Stream stream, HtmlViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(doc.Scene);
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
