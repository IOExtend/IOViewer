using IOScene;
using IOViewer.Exporters;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class PointPayloadTests
{
    private static SceneDocument Cloud()
    {
        var scene = new SceneDocument();
        scene.Models.Add(new SceneModel { Id = 1, Key = "cloud", Name = "cloud" });
        scene.Elements.Add(new SceneElement { Id = 1, ModelId = 1, Name = "scan", Category = "Point Cloud" });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 1,
            Topology = SceneTopology.Points,
            Vertices = [new Vector3d(0, 0, 0), new Vector3d(1, 0, 0), new Vector3d(0, 1, 0)],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 1, GeometryId = 1 });
        return scene;
    }

    [Fact]
    public void Points_Are_Written_As_Format4_Points_And_Not_Skipped()
    {
        var scene = Cloud();
        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(4, view.Meta.GetProperty("format").GetInt32());
        Assert.Equal(0, view.InstanceCount);
        Assert.Equal(1, view.Meta.GetProperty("points").GetProperty("count").GetInt32());
        Assert.Equal("points", view.Geometries[0].GetProperty("kind").GetString());
        Assert.Equal(0, ViewerPayloadWriter.UndrawnInstances(scene));
        Assert.Equal([0, 0, 0, 1, 0, 0, 0, 1, 0], view.Positions(view.Geometries[0]));
    }

    [Fact]
    public void Triangles_And_Points_Coexist_In_Format4()
    {
        var scene = Cloud();
        scene.Elements.Add(new SceneElement { Id = 2, ModelId = 1, Name = "box" });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 2,
            Topology = SceneTopology.Triangles,
            Vertices = [new Vector3d(0, 0, 0), new Vector3d(1, 0, 0), new Vector3d(0, 1, 0)],
            Indices = [0, 1, 2],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 2, GeometryId = 2 });
        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(4, view.Meta.GetProperty("format").GetInt32());
        Assert.Equal(1, view.InstanceCount);
        Assert.Equal(1, view.Meta.GetProperty("points").GetProperty("count").GetInt32());
        Assert.Equal(0, ViewerPayloadWriter.UndrawnInstances(scene));
    }

    [Fact]
    public void Triangles_Only_Stay_Format3_Without_Points()
    {
        var scene = new SceneDocument();
        scene.Models.Add(new SceneModel { Id = 1, Key = "m", Name = "m" });
        scene.Elements.Add(new SceneElement { Id = 1, ModelId = 1, Name = "tri" });
        scene.Geometries.Add(new SceneGeometry
        {
            Id = 1,
            Topology = SceneTopology.Triangles,
            Vertices = [new Vector3d(0, 0, 0), new Vector3d(1, 0, 0), new Vector3d(0, 1, 0)],
            Indices = [0, 1, 2],
        });
        scene.Instances.Add(new SceneInstance { ElementId = 1, GeometryId = 1 });
        var view = ViewerHtml.Export(new ViewerDocument(scene));

        Assert.Equal(3, view.Meta.GetProperty("format").GetInt32());
        Assert.False(view.Meta.TryGetProperty("points", out _));
        Assert.Equal(1, view.InstanceCount);
    }
}
