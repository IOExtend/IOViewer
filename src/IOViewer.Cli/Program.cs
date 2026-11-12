using System.Diagnostics;
using System.Net;
using System.Reflection;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;

namespace IOViewer.Cli;

internal static class Program
{
    private const string UsageText = """
        Usage: ioviewer <input.glb|input.obj|input.json> [output.html] [options]
               ioviewer --help | --version

        Generates standalone interactive 3D WebGL / HTML BIM & CAD model viewers
        from 3D models (glTF/GLB, Wavefront OBJ, JSON). The HTML file has no
        external dependencies and works offline. JSON input is viewer JSON, an
        IOScene scene file or an IOViewer 0.1/0.2 snapshot.

        Arguments:
          <input>            Path to input 3D model (.glb, .obj, or .json).
          [output]           Destination path for exported file (.html or .json).
                             Default: <input-without-ext>.html.

        Options:
          -o, --output <file> Destination path for exported HTML or JSON file.
          --title <title>     Page title shown in the browser tab.
          --wireframe         Enable wireframe display mode by default.
          --white-mode        Enable white/clay architectural rendering mode by default.
          --no-properties     Exclude element properties to reduce the file size.
          --no-grids          Exclude spatial grid lines.
          --no-timeliner      Exclude 4D TimeLiner schedule simulation.
          --json <file.json>  Export the document as viewer JSON.
          --serve [port]      Start local HTTP preview server and open in default browser.
          -h, --help          Show this help message and exit.
          -v, --version       Show version information and exit.

        Exit codes:
          0  Success
          1  Usage error (missing or invalid arguments)
          2  File not found
          3  Data format error or parsing failure
        """;

    public static int Main(string[] args)
    {
        if (args.Length == 0 || args.Contains("--help") || args.Contains("-h"))
        {
            Console.WriteLine(UsageText);
            return args.Length == 0 ? 1 : 0;
        }

        if (args.Contains("--version") || args.Contains("-v"))
        {
            var version = typeof(Program).Assembly
                .GetCustomAttribute<AssemblyInformationalVersionAttribute>()?.InformationalVersion
                ?? typeof(Program).Assembly.GetName().Version?.ToString()
                ?? "0.1.0";
            Console.WriteLine($"ioviewer {version}");
            return 0;
        }

        string? inputPath = null;
        string? outputPath = null;
        string? customTitle = null;
        string? explicitJsonPath = null;
        bool wireframe = false;
        bool whiteMode = false;
        bool includeProps = true;
        bool includeGrids = true;
        bool includeTimeLiner = true;
        bool serve = false;
        int servePort = 8080;

        for (int i = 0; i < args.Length; i++)
        {
            var arg = args[i];
            switch (arg)
            {
                case "-o":
                case "--output":
                    if (i + 1 >= args.Length)
                    {
                        Console.Error.WriteLine("Error: Missing argument for --output.");
                        return 1;
                    }
                    outputPath = args[++i];
                    break;
                case "--title":
                    if (i + 1 >= args.Length)
                    {
                        Console.Error.WriteLine("Error: Missing argument for --title.");
                        return 1;
                    }
                    customTitle = args[++i];
                    break;
                case "--wireframe":
                    wireframe = true;
                    break;
                case "--white-mode":
                    whiteMode = true;
                    break;
                case "--no-properties":
                    includeProps = false;
                    break;
                case "--no-grids":
                    includeGrids = false;
                    break;
                case "--no-timeliner":
                    includeTimeLiner = false;
                    break;
                case "--json":
                    if (i + 1 >= args.Length)
                    {
                        Console.Error.WriteLine("Error: Missing argument for --json.");
                        return 1;
                    }
                    explicitJsonPath = args[++i];
                    break;
                case "--serve":
                    serve = true;
                    if (i + 1 < args.Length && int.TryParse(args[i + 1], out int p))
                    {
                        servePort = p;
                        i++;
                    }
                    break;
                default:
                    if (arg.StartsWith('-'))
                    {
                        Console.Error.WriteLine($"Error: Unknown option '{arg}'.");
                        return 1;
                    }
                    if (inputPath is null) inputPath = arg;
                    else if (outputPath is null) outputPath = arg;
                    else
                    {
                        Console.Error.WriteLine($"Error: Unexpected extra argument '{arg}'.");
                        return 1;
                    }
                    break;
            }
        }

        if (string.IsNullOrEmpty(inputPath))
        {
            Console.Error.WriteLine("Error: Input file must be specified.");
            return 1;
        }

        if (!File.Exists(inputPath))
        {
            Console.Error.WriteLine($"Error: File not found: '{inputPath}'.");
            return 2;
        }

        outputPath ??= Path.ChangeExtension(inputPath, ".html");

        var sw = Stopwatch.StartNew();
        ViewerDocument doc;
        try
        {
            string ext = Path.GetExtension(inputPath).ToLowerInvariant();
            doc = ext switch
            {
                ".glb" => GlbViewerImporter.Load(inputPath),
                ".obj" => ObjViewerImporter.Load(inputPath),
                ".json" => JsonViewerImporter.Load(inputPath),
                _ => throw new NotSupportedException($"Unsupported input file extension: '{ext}'. Supported: .glb, .obj, .json.")
            };
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"Error: Failed to load '{inputPath}': {ex.Message}");
            return 3;
        }

        if (!string.IsNullOrEmpty(customTitle))
        {
            doc.Title = customTitle;
        }

        EnsureParentDirectory(outputPath);
        var options = new HtmlViewerOptions
        {
            Title = doc.Title,
            InitialWireframe = wireframe,
            InitialWhiteMode = whiteMode,
            IncludeProperties = includeProps,
            IncludeGrids = includeGrids,
            IncludeTimeLiner = includeTimeLiner
        };

        if (outputPath.EndsWith(".json", StringComparison.OrdinalIgnoreCase))
        {
            JsonViewerExporter.Save(doc, outputPath);
            Console.WriteLine($"Exported JSON snapshot to '{outputPath}' ({doc.Scene.Instances.Count} meshes, {doc.Scene.Elements.Count} elements) in {sw.ElapsedMilliseconds} ms.");
        }
        else
        {
            try
            {
                HtmlViewerExporter.Save(doc, outputPath, options);
            }
            catch (Exception ex) when (ex is InvalidDataException or ArgumentException)
            {
                Console.Error.WriteLine($"Error: Failed to export '{inputPath}': {ex.Message}");
                return 3;
            }
            var fi = new FileInfo(outputPath);
            Console.WriteLine($"Exported standalone 3D HTML viewer to '{outputPath}' ({fi.Length / 1024:N0} KB, {doc.Scene.Instances.Count} meshes) in {sw.ElapsedMilliseconds} ms.");
            int undrawn = ViewerPayloadWriter.UndrawnInstances(doc.Scene);
            if (undrawn > 0)
            {
                Console.Error.WriteLine($"Warning: {undrawn} meshes of lines, points or an unknown kind are not shown; the viewer draws triangles only.");
            }
        }

        if (!string.IsNullOrEmpty(explicitJsonPath))
        {
            EnsureParentDirectory(explicitJsonPath);
            JsonViewerExporter.Save(doc, explicitJsonPath);
            Console.WriteLine($"Exported JSON snapshot to '{explicitJsonPath}'.");
        }

        if (serve)
        {
            StartServe(outputPath, servePort);
        }

        return 0;
    }

    private static void StartServe(string htmlPath, int port)
    {
        string url = $"http://localhost:{port}/";
        Console.WriteLine($"Starting local HTTP preview server at {url}...");

        try
        {
            using var listener = new HttpListener();
            listener.Prefixes.Add(url);
            listener.Start();

            // Try opening in default browser
            try
            {
                Process.Start(new ProcessStartInfo { FileName = url, UseShellExecute = true });
            }
            catch { }

            Console.WriteLine("Press Ctrl+C to terminate preview server.");

            while (listener.IsListening)
            {
                var context = listener.GetContext();
                byte[] htmlBytes = File.ReadAllBytes(htmlPath);
                context.Response.ContentType = "text/html; charset=utf-8";
                context.Response.ContentLength64 = htmlBytes.Length;
                context.Response.OutputStream.Write(htmlBytes, 0, htmlBytes.Length);
                context.Response.OutputStream.Close();
            }
        }
        catch (Exception ex)
        {
            Console.Error.WriteLine($"HTTP Server error: {ex.Message}");
        }
    }

    private static void EnsureParentDirectory(string path)
    {
        var dir = Path.GetDirectoryName(path);
        if (!string.IsNullOrEmpty(dir))
        {
            Directory.CreateDirectory(dir);
        }
    }
}
