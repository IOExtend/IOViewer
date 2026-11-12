namespace IOViewer.Model;

/// <summary>
/// Represents a 3D polygonal triangle mesh.
/// </summary>
public sealed class ViewerMesh
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public long? ElementId { get; set; }

    public IReadOnlyList<Vector3d> Vertices { get; set; } = [];
    public IReadOnlyList<int> Indices { get; set; } = [];
    public IReadOnlyList<Vector3d>? Normals { get; set; }
    public IReadOnlyList<Vector2d>? UVs { get; set; }

    /// <summary>Id of a <see cref="ViewerGeometry"/> in <see cref="ViewerDocument.Geometries"/> drawn by this mesh, if any.</summary>
    public int? GeometryId { get; set; }

    /// <summary>Placement of this mesh's own <see cref="Vertices"/> and of the shared geometry; null means identity.</summary>
    public Transform3d? Transform { get; set; }

    public int? MaterialId { get; set; }
    public RgbaColor? Color { get; set; }
    public double Opacity { get; set; } = 1.0;
    public int? TextureIndex { get; set; }

    public BoundingBox3d BoundingBox { get; set; } = BoundingBox3d.Empty;

    public BoundingBox3d ComputeBoundingBox()
    {
        if (Vertices.Count == 0) return BoundingBox3d.Empty;
        var box = BoundingBox3d.Empty;
        foreach (var v in Vertices)
        {
            box = box.Encapsulate(v);
        }
        BoundingBox = box;
        return box;
    }
}
