using System.Text.Json.Serialization;

namespace IOViewer.Model;

/// <summary>
/// Root container representing a 3D BIM/CAD model scene graph ready for interactive 3D WebGL viewing.
/// </summary>
public sealed class ViewerDocument
{
    public string Title { get; set; } = "3D BIM Model";
    public string? SourcePath { get; set; }
    public string? Author { get; set; }
    public string? CreatedAt { get; set; }
    public string? Application { get; set; }

    /// <summary>
    /// Calculated or specified bounding box encompassing all model geometry.
    /// </summary>
    public BoundingBox3d BoundingBox { get; set; } = BoundingBox3d.Empty;

    /// <summary>
    /// List of BIM elements with hierarchical category, type, and parameter properties.
    /// </summary>
    public List<ViewerElement> Elements { get; set; } = [];

    /// <summary>
    /// List of 3D polygonal meshes and geometries.
    /// </summary>
    public List<ViewerMesh> Meshes { get; set; } = [];

    /// <summary>
    /// Geometries shared between meshes via <see cref="ViewerMesh.GeometryId"/>.
    /// </summary>
    public List<ViewerGeometry> Geometries { get; set; } = [];

    /// <summary>
    /// Material definitions with colors, opacity, and surface properties.
    /// </summary>
    public List<ViewerMaterial> Materials { get; set; } = [];

    /// <summary>
    /// Diffuse textures embedded as Base64 raster data with real-world dimensions.
    /// </summary>
    public List<ViewerTexture> Textures { get; set; } = [];

    /// <summary>
    /// Optional spatial grid coordinate system (building grid lines).
    /// </summary>
    public ViewerGridSystem? Grids { get; set; }

    /// <summary>
    /// List of saved camera viewpoints for guided walkthroughs and inspections.
    /// </summary>
    public List<ViewerViewpoint> Viewpoints { get; set; } = [];

    /// <summary>
    /// Active or predefined cutting planes.
    /// </summary>
    public List<ViewerSectionPlane> SectionPlanes { get; set; } = [];

    /// <summary>
    /// Optional 6-sided Section Box (bounding volume clipping).
    /// </summary>
    public ViewerSectionBox? SectionBox { get; set; }

    /// <summary>
    /// Optional 4D TimeLiner construction schedule simulation.
    /// </summary>
    public ViewerTimeLinerSchedule? TimeLiner { get; set; }

    /// <summary>
    /// List of clash detection coordination test results.
    /// </summary>
    public List<ViewerClashTest> ClashTests { get; set; } = [];

    /// <summary>
    /// Optional list of linked/federated external reference models.
    /// </summary>
    public List<ViewerLinkedFile> LinkedFiles { get; set; } = [];

    public ViewerDocument() { }

    public ViewerDocument(string title)
    {
        Title = title;
    }

    /// <summary>
    /// Computes and updates the overall 3D bounding box from all meshes, including shared geometry and mesh transforms.
    /// </summary>
    public BoundingBox3d ComputeBoundingBox()
    {
        var geometries = new Dictionary<int, ViewerGeometry>();
        foreach (var g in Geometries)
        {
            geometries[g.Id] = g;
        }

        var box = BoundingBox3d.Empty;
        foreach (var mesh in Meshes)
        {
            mesh.ComputeBoundingBox();
            var transform = mesh.Transform ?? Transform3d.Identity;
            foreach (var v in mesh.Vertices)
            {
                box = box.Encapsulate(transform.Apply(v));
            }
            if (mesh.GeometryId is int id && geometries.TryGetValue(id, out var geometry))
            {
                foreach (var v in geometry.Vertices)
                {
                    box = box.Encapsulate(transform.Apply(v));
                }
            }
        }
        BoundingBox = box;
        return box;
    }
}
