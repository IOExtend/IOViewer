using System.Text;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;
using Xunit;

namespace IOViewer.Tests;

public class SharedGeometryModelTests
{
    private static readonly Transform3d RotZ90 =
        new(new Vector3d(0, 1, 0), new Vector3d(-1, 0, 0), new Vector3d(0, 0, 1), new Vector3d(10, 0, 0));

    private static ViewerGeometry Cube() => new()
    {
        Id = 3,
        Vertices = [new(0, 0, 0), new(1, 0, 0), new(1, 1, 0), new(0, 1, 1)],
        Indices = [0, 1, 2, 0, 2, 3]
    };

    [Fact]
    public void Transform3d_Apply_RotatesThenTranslates()
    {
        Assert.Equal(new Vector3d(10, 1, 0), RotZ90.Apply(new Vector3d(1, 0, 0)));
    }

    [Fact]
    public void Transform3d_Then_ComposesInOrder()
    {
        var rot = new Transform3d(new Vector3d(0, 1, 0), new Vector3d(-1, 0, 0), new Vector3d(0, 0, 1), Vector3d.Zero);
        var composed = Transform3d.Translate(new Vector3d(1, 0, 0)).Then(rot);

        Assert.Equal(new Vector3d(0, 1, 0), composed.Apply(Vector3d.Zero));
        Assert.Equal(new Vector3d(0, 2, 0), composed.Apply(new Vector3d(1, 0, 0)));
    }

    [Fact]
    public void ComputeBoundingBox_UsesSharedGeometryWithTransform()
    {
        var doc = new ViewerDocument();
        doc.Geometries.Add(Cube());
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 3, Transform = Transform3d.Translate(new Vector3d(5, 0, 0)) });
        doc.Meshes.Add(new ViewerMesh { Id = 2, GeometryId = 3, Transform = Transform3d.Translate(new Vector3d(0, 7, 0)) });

        var box = doc.ComputeBoundingBox();

        Assert.Equal(new Vector3d(0, 0, 0), box.Min);
        Assert.Equal(new Vector3d(6, 8, 1), box.Max);
    }

    [Fact]
    public void ComputeBoundingBox_AppliesTransformToOwnVerticesAndIgnoresUnknownGeometry()
    {
        var doc = new ViewerDocument();
        doc.Meshes.Add(new ViewerMesh
        {
            Vertices = [new(0, 0, 0), new(1, 0, 0)],
            GeometryId = 99,
            Transform = Transform3d.Translate(new Vector3d(0, 0, 4))
        });

        var box = doc.ComputeBoundingBox();

        Assert.Equal(new Vector3d(0, 0, 4), box.Min);
        Assert.Equal(new Vector3d(1, 0, 4), box.Max);
    }

    [Fact]
    public void JsonRoundTrip_PreservesGeometriesTransformsAndClashIds()
    {
        var doc = new ViewerDocument();
        doc.Geometries.Add(Cube());
        doc.Meshes.Add(new ViewerMesh { Id = 1, GeometryId = 3, Transform = RotZ90 });
        var test = new ViewerClashTest("T");
        test.Clashes.Add(new ViewerClashResult { Id = "c1", Element1Id = 11, Element2Id = 22 });
        doc.ClashTests.Add(test);

        var json = JsonViewerExporter.ExportToString(doc);
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(json));
        var loaded = JsonViewerImporter.Load(ms);

        var geometry = Assert.Single(loaded.Geometries);
        Assert.Equal(3, geometry.Id);
        Assert.Equal(4, geometry.Vertices.Count);
        Assert.Equal(6, geometry.Indices.Count);
        var mesh = Assert.Single(loaded.Meshes);
        Assert.Equal(3, mesh.GeometryId);
        Assert.Equal(RotZ90, mesh.Transform);
        var clash = Assert.Single(Assert.Single(loaded.ClashTests).Clashes);
        Assert.Equal(11L, clash.Element1Id);
        Assert.Equal(22L, clash.Element2Id);
    }

    [Fact]
    public void OldJsonWithoutNewFields_LoadsWithDefaults()
    {
        const string json = """
            {"Title":"Old","Meshes":[{"Id":1,"Name":"m","Vertices":[{"X":0,"Y":0,"Z":0}],"Indices":[0]}],
             "ClashTests":[{"Name":"T","Clashes":[{"Id":"c","Name":"n"}]}]}
            """;
        using var ms = new MemoryStream(Encoding.UTF8.GetBytes(json));

        var loaded = JsonViewerImporter.Load(ms);

        Assert.Empty(loaded.Geometries);
        var mesh = Assert.Single(loaded.Meshes);
        Assert.Null(mesh.GeometryId);
        Assert.Null(mesh.Transform);
    }
}
