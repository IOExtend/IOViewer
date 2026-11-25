using IOViewer.Cli;
using Xunit;

namespace IOViewer.Tests;

// Redirects Console.Out and Console.Error; see ModelAndCliIntegrationTests.
[Collection("Console")]
public class CliTests
{
    private static readonly string[] HelpArgs = ["--help"];
    private static readonly string[] VersionArgs = ["--version"];

    [Fact]
    public void Cli_Help_ReturnsSuccessAndShowsUsage()
    {
        using var sw = new StringWriter();
        var origOut = Console.Out;
        try
        {
            Console.SetOut(sw);
            int code = Program.Main(HelpArgs);
            Assert.Equal(0, code);
            string output = sw.ToString();
            Assert.Contains("ioviewer <input.glb|input.obj|input.json|input.ifc|input.ifczip|input.rvt|input.nwc|point-cloud>", output);
            Assert.Contains("--wireframe", output);
            Assert.Contains("--white-mode", output);
            Assert.Contains("--serve", output);
        }
        finally
        {
            Console.SetOut(origOut);
        }
    }

    [Fact]
    public void Cli_Version_ReturnsSuccessAndShowsVersion()
    {
        using var sw = new StringWriter();
        var origOut = Console.Out;
        try
        {
            Console.SetOut(sw);
            int code = Program.Main(VersionArgs);
            Assert.Equal(0, code);
            string output = sw.ToString();
            Assert.Contains("ioviewer", output);
        }
        finally
        {
            Console.SetOut(origOut);
        }
    }

    [Fact]
    public void Cli_MissingArguments_ReturnsErrorCode()
    {
        using var sw = new StringWriter();
        var origErr = Console.Error;
        try
        {
            Console.SetError(sw);
            int code = Program.Main(Array.Empty<string>());
            Assert.Equal(1, code);
        }
        finally
        {
            Console.SetError(origErr);
        }
    }

    [Fact]
    public void Cli_PointCloud_Xyz_ExportsHtmlWithPoints()
    {
        string dir = Path.Combine(Path.GetTempPath(), "ioviewer-pcl-" + Guid.NewGuid().ToString("N"));
        Directory.CreateDirectory(dir);
        string input = Path.Combine(dir, "cloud.xyz");
        string output = Path.Combine(dir, "cloud.html");
        File.WriteAllText(input, "0 0 0\n1 0 0\n0 1 0\n0 0 1\n");
        var origOut = Console.Out;
        var origErr = Console.Error;
        try
        {
            using var sw = new StringWriter();
            using var se = new StringWriter();
            Console.SetOut(sw);
            Console.SetError(se);
            int code = Program.Main([input, "-o", output]);
            Assert.Equal(0, code);
            var view = ViewerHtml.Parse(File.ReadAllText(output));
            Assert.Equal(4, view.Meta.GetProperty("format").GetInt32());
            Assert.Equal(1, view.Meta.GetProperty("points").GetProperty("count").GetInt32());
        }
        finally
        {
            Console.SetOut(origOut);
            Console.SetError(origErr);
            Directory.Delete(dir, true);
        }
    }
}
