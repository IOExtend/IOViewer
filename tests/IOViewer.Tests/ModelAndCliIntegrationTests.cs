using System.Globalization;
using System.Text;
using IOViewer.Cli;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class ModelAndCliIntegrationTests
{
    [Fact]
    public void MathTypes_VectorAndBoundingBox_WorkCorrectly()
    {
        var v1 = new Vector3d(1, 2, 3);
        var v2 = new Vector3d(4, 5, 6);
        var sum = v1 + v2;
        Assert.Equal(new Vector3d(5, 7, 9), sum);

        var cross = Vector3d.Cross(Vector3d.UnitX, Vector3d.UnitY);
        Assert.Equal(Vector3d.UnitZ, cross);

        var dot = Vector3d.Dot(Vector3d.UnitX, Vector3d.UnitY);
        Assert.Equal(0, dot);

        var box = new BoundingBox3d(new(0, 0, 0), new(10, 20, 30));
        Assert.False(box.IsEmpty);
        Assert.Equal(new Vector3d(5, 10, 15), box.Center);
        Assert.Equal(new Vector3d(10, 20, 30), box.Size);

        var enc = box.Encapsulate(new Vector3d(-5, 25, 10));
        Assert.Equal(new Vector3d(-5, 0, 0), enc.Min);
        Assert.Equal(new Vector3d(10, 25, 30), enc.Max);

        var color = new RgbaColor(255, 128, 0, 200);
        Assert.Equal("#ff8000", color.ToHex());
        Assert.Equal(1.0, color.Rf, precision: 2);
    }

    [Fact]
    public void ViewerTimeLinerSchedule_ComputesOverallDates()
    {
        var schedule = new ViewerTimeLinerSchedule("Project 4D");
        var task1 = new ViewerTimeLinerTask("1", "Early Task",
            DateTimeOffset.Parse("2026-01-10T08:00:00Z", CultureInfo.InvariantCulture),
            DateTimeOffset.Parse("2026-01-20T17:00:00Z", CultureInfo.InvariantCulture));

        var parentTask = new ViewerTimeLinerTask("2", "Parent Task",
            DateTimeOffset.Parse("2026-02-01T08:00:00Z", CultureInfo.InvariantCulture),
            DateTimeOffset.Parse("2026-03-01T17:00:00Z", CultureInfo.InvariantCulture));

        var childTask = new ViewerTimeLinerTask("2.1", "Late Child Task",
            DateTimeOffset.Parse("2026-02-15T08:00:00Z", CultureInfo.InvariantCulture),
            DateTimeOffset.Parse("2026-05-30T17:00:00Z", CultureInfo.InvariantCulture));

        parentTask.Children.Add(childTask);
        schedule.Tasks.Add(task1);
        schedule.Tasks.Add(parentTask);

        Assert.Equal(DateTimeOffset.Parse("2026-01-10T08:00:00Z", CultureInfo.InvariantCulture), schedule.GetOverallStart());
        Assert.Equal(DateTimeOffset.Parse("2026-05-30T17:00:00Z", CultureInfo.InvariantCulture), schedule.GetOverallEnd());
    }

    [Fact]
    public void Cli_ConvertObjToHtml_CreatesValidViewerFile()
    {
        const string objData = """
            o TriangularPyramid
            v 0 0 0
            v 5 0 0
            v 2.5 5 0
            v 2.5 2.5 4
            f 1 2 3
            f 1 2 4
            f 2 3 4
            f 3 1 4
            """;

        var tempObj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        try
        {
            File.WriteAllText(tempObj, objData);

            int code = Program.Main(new[] { tempObj, "-o", tempHtml, "--title", "Pyramid Test", "--wireframe" });
            Assert.Equal(0, code);

            Assert.True(File.Exists(tempHtml));
            var view = ViewerHtml.Parse(File.ReadAllText(tempHtml));
            Assert.Equal("Pyramid Test", view.Meta.GetProperty("title").GetString());
            Assert.True(view.Meta.GetProperty("options").GetProperty("initialWireframe").GetBoolean());
            Assert.Equal(1, view.InstanceCount);
            Assert.Equal(12, view.Positions(view.Geometries[0]).Length);
            Assert.Equal(12, view.Read(view.Geometries[0].GetProperty("indices")).Length);
        }
        finally
        {
            if (File.Exists(tempObj)) File.Delete(tempObj);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
        }
    }

    [Fact]
    public void Cli_ConvertObjToJson_CreatesValidJsonSnapshot()
    {
        const string objData = """
            o SamplePart
            v 1 1 1
            v 2 1 1
            v 1 2 1
            f 1 2 3
            """;

        var tempObj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        var tempJson = Path.Combine(Path.GetTempPath(), $"test_snapshot_{Guid.NewGuid():N}.json");
        try
        {
            File.WriteAllText(tempObj, objData);

            int code = Program.Main(new[] { tempObj, "-o", tempJson, "--title", "Snapshot Test" });
            Assert.Equal(0, code);

            Assert.True(File.Exists(tempJson));
            string json = File.ReadAllText(tempJson);
            Assert.Contains("Snapshot Test", json);
            Assert.Contains("SamplePart", json);
        }
        finally
        {
            if (File.Exists(tempObj)) File.Delete(tempObj);
            if (File.Exists(tempJson)) File.Delete(tempJson);
        }
    }

    [Fact]
    public void Cli_InvalidGeometry_ReturnsDataErrorAndKeepsExistingOutput()
    {
        const string objData = """
            v 0 0 0
            v 1 0 0
            v 0 1 0
            f 1 2 9
            """;

        var tempObj = Path.Combine(Path.GetTempPath(), $"test_model_{Guid.NewGuid():N}.obj");
        var tempHtml = Path.Combine(Path.GetTempPath(), $"test_viewer_{Guid.NewGuid():N}.html");
        using var errors = new StringWriter();
        var origErr = Console.Error;
        try
        {
            File.WriteAllText(tempObj, objData);
            File.WriteAllText(tempHtml, "previous export");
            Console.SetError(errors);

            int code = Program.Main(new[] { tempObj, "-o", tempHtml });

            Assert.Equal(3, code);
            Assert.Equal("previous export", File.ReadAllText(tempHtml));
            string message = errors.ToString().TrimEnd();
            Assert.Contains("outside the 3 vertices", message, StringComparison.Ordinal);
            Assert.DoesNotContain(Environment.NewLine, message, StringComparison.Ordinal);
        }
        finally
        {
            Console.SetError(origErr);
            if (File.Exists(tempObj)) File.Delete(tempObj);
            if (File.Exists(tempHtml)) File.Delete(tempHtml);
        }
    }
}
