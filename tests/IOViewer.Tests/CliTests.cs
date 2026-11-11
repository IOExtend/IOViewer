using IOViewer.Cli;
using Xunit;

namespace IOViewer.Tests;

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
            Assert.Contains("ioviewer <input.glb|input.obj|input.json>", output);
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
}
