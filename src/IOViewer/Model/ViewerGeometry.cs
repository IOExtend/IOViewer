namespace IOViewer.Model;

/// <summary>
/// Triangle geometry shared by several meshes; each mesh places it with its own <see cref="ViewerMesh.Transform"/>.
/// </summary>
public sealed class ViewerGeometry
{
    /// <summary>Identifier referenced by <see cref="ViewerMesh.GeometryId"/>.</summary>
    public int Id { get; set; }

    /// <summary>Vertex positions in the geometry's local coordinates.</summary>
    public IReadOnlyList<Vector3d> Vertices { get; set; } = [];

    /// <summary>Triangle vertex indices (three per triangle).</summary>
    public IReadOnlyList<int> Indices { get; set; } = [];

    /// <summary>Optional per-vertex normals.</summary>
    public IReadOnlyList<Vector3d>? Normals { get; set; }

    /// <summary>Optional per-vertex texture coordinates.</summary>
    public IReadOnlyList<Vector2d>? UVs { get; set; }

    /// <summary>Computes the bounding box of <see cref="Vertices"/> in local coordinates.</summary>
    public BoundingBox3d ComputeBoundingBox()
    {
        var box = BoundingBox3d.Empty;
        foreach (var v in Vertices)
        {
            box = box.Encapsulate(v);
        }
        return box;
    }
}
