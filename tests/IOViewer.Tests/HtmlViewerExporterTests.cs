using System.Globalization;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class HtmlViewerExporterTests
{
    [Fact]
    public void ExportHtml_GeneratesSelfContainedViewerWithBase64AndRTC()
    {
        var doc = new ViewerDocument("Commercial Center 3D")
        {
            Author = "IOExtend",
            CreatedAt = "2026-11-11T12:00:00Z"
        };

        // Create large georeferenced coordinates to test RTC (Relative To Center)
        double offsetX = 500_000.0;
        double offsetY = 2_000_000.0;

        var mesh = new ViewerMesh
        {
            Id = 1,
            Name = "Structural Slab",
            Vertices = [
                new(offsetX + 0, offsetY + 0, 0),
                new(offsetX + 10, offsetY + 0, 0),
                new(offsetX + 10, offsetY + 15, 0),
                new(offsetX + 0, offsetY + 15, 0)
            ],
            Indices = [0, 1, 2, 0, 2, 3],
            Color = new RgbaColor(180, 180, 190)
        };
        doc.Meshes.Add(mesh);

        var el = new ViewerElement
        {
            Id = 101,
            Name = "Ground Floor Slab",
            Category = "Floors",
            TypeName = "Generic 300mm",
            Level = "Level 1"
        };
        el.AddProperty("Dimensions", "Thickness", "300 mm");
        el.AddProperty("Dimensions", "Area", "150 m2");
        el.MeshIndices.Add(0);
        doc.Elements.Add(el);
        mesh.ElementId = 101;

        // Viewpoints
        doc.Viewpoints.Add(new ViewerViewpoint("Isometric Overview", new ViewerCamera
        {
            Position = new Vector3d(offsetX + 25, offsetY - 25, 30),
            Target = new Vector3d(offsetX + 5, offsetY + 7.5, 0)
        }));

        // Grids
        var grids = new ViewerGridSystem { Name = "Structural Grids" };
        grids.Lines.Add(new ViewerGridLine("Axis 1", new(offsetX, offsetY, 0), new(offsetX + 10, offsetY, 0)));
        grids.Lines.Add(new ViewerGridLine("Axis A", new(offsetX, offsetY, 0), new(offsetX, offsetY + 15, 0)));
        doc.Grids = grids;

        // 4D TimeLiner
        var schedule = new ViewerTimeLinerSchedule("4D Construction");
        var task = new ViewerTimeLinerTask("T1", "Pour Slab",
            DateTimeOffset.Parse("2026-06-01T08:00:00Z", CultureInfo.InvariantCulture),
            DateTimeOffset.Parse("2026-06-10T17:00:00Z", CultureInfo.InvariantCulture),
            ViewerTimeLinerTaskType.Construct)
        {
            PlannedCost = 55000m,
            Progress = 0.5
        };
        task.AttachedElementIds.Add(101);
        schedule.Tasks.Add(task);
        doc.TimeLiner = schedule;

        // Section Box
        doc.SectionBox = new ViewerSectionBox(new(offsetX - 2, offsetY - 2, -2), new(offsetX + 12, offsetY + 17, 10));

        // Clashes
        var clashTest = new ViewerClashTest("Hard Clashes");
        clashTest.Clashes.Add(new ViewerClashResult("C1", "Slab vs Column", "Ground Floor Slab", "Column C1",
            new Vector3d(offsetX + 5, offsetY + 5, 0), -0.02));
        doc.ClashTests.Add(clashTest);

        string tempPath = Path.Combine(Path.GetTempPath(), $"ioviewer_test_{Guid.NewGuid():N}.html");
        try
        {
            HtmlViewerExporter.Save(doc, tempPath, new HtmlViewerOptions
            {
                Title = "Commercial Center 3D",
                IncludeProperties = true,
                IncludeViewpoints = true,
                IncludeGrids = true,
                IncludeTimeLiner = true,
                IncludeClashes = true
            });

            Assert.True(File.Exists(tempPath));
            string html = File.ReadAllText(tempPath);

            // Assert Packed Base64 & RTC offset
            Assert.Contains("\"rtcOffset\":[500005,2000007.5,0]", html);
            Assert.Contains("\"positions\":\"", html);
            Assert.Contains("\"indices\":\"", html);
            Assert.Contains("b64ToBuffer", html);

            // Assert ViewCube & Navigation
            Assert.Contains("id=\"viewcube\"", html);
            Assert.Contains("cube-face face-front", html);
            Assert.Contains("cube-face face-top", html);
            Assert.Contains("cube-arrow arrow-up", html);
            Assert.Contains("updateViewCube", html);

            // Assert Sectioning
            Assert.Contains("sec-mode-planes", html);
            Assert.Contains("sec-mode-box", html);
            Assert.Contains("clip-box-en", html);
            Assert.Contains("btn-fit-box", html);
            Assert.Contains("btn-reset-box", html);

            // Assert Camera Animations & Presentation
            Assert.Contains("btn-turntable", html);
            Assert.Contains("toggleTurntable", html);
            Assert.Contains("animateTurntable", html);
            Assert.Contains("btn-play-tour", html);
            Assert.Contains("startTour", html);
            Assert.Contains("animateCameraTo", html);

            // Assert BIM Hierarchy & Properties
            Assert.Contains("Ground Floor Slab", html);
            Assert.Contains("Generic 300mm", html);
            Assert.Contains("Thickness", html);
            Assert.Contains("btn-isolate", html);
            Assert.Contains("btn-hide", html);
            Assert.Contains("btn-show-all", html);

            // Assert 4D TimeLiner & Clashes & Grids
            Assert.Contains("timeliner-bar", html);
            Assert.Contains("Pour Slab", html);
            Assert.Contains("Axis 1", html);
            Assert.Contains("Slab vs Column", html);
        }
        finally
        {
            if (File.Exists(tempPath)) File.Delete(tempPath);
        }
    }
}
