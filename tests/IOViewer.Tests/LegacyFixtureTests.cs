using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

/// <summary>
/// Pins the frozen IOViewer 0.2.0 snapshots in tests/fixtures/legacy-0.2.
/// </summary>
public class LegacyFixtureTests
{
    [Theory]
    [InlineData("building.json", 65, 67, 7, 3)]
    [InlineData("empty.json", 0, 0, 0, 0)]
    [InlineData("escaping.json", 3, 3, 0, 0)]
    [InlineData("textured.json", 2, 2, 0, 0)]
    [InlineData("meshes-without-elements.json", 0, 4, 1, 1)]
    public void LegacySnapshot_LoadsWithExpectedCounts(string file, int elements, int meshes, int tasks, int clashes)
    {
        var doc = JsonViewerImporter.Load(Path.Combine(AppContext.BaseDirectory, "legacy-0.2", file));

        Assert.Equal(elements, doc.Elements.Count);
        Assert.Equal(meshes, doc.Meshes.Count);
        Assert.Equal(tasks, doc.TimeLiner is null ? 0 : CountTasks(doc.TimeLiner.Tasks));
        Assert.Equal(clashes, doc.ClashTests.Sum(t => t.Clashes.Count));
    }

    private static int CountTasks(IEnumerable<ViewerTimeLinerTask> tasks) => tasks.Sum(t => 1 + CountTasks(t.Children));
}
