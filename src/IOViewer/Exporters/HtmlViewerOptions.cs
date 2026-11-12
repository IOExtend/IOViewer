namespace IOViewer.Exporters;

/// <summary>
/// Configuration options for standalone 3D HTML viewer generation.
/// </summary>
public sealed class HtmlViewerOptions
{
    public string Title { get; set; } = "3D BIM Viewer";
    public bool IncludeProperties { get; set; } = true;
    public bool IncludeViewpoints { get; set; } = true;
    public bool IncludeGrids { get; set; } = true;
    public bool IncludeTimeLiner { get; set; } = true;
    public bool IncludeClashes { get; set; } = true;
    public bool InitialWireframe { get; set; }
    public bool InitialWhiteMode { get; set; }

    /// <summary>
    /// Maximum total number of mesh vertices written to the viewer (each mesh counts the vertices it draws).
    /// When the model exceeds it, meshes are written in order while they fit, the rest are left out, and the
    /// viewer shows that the model was truncated. Defaults to <see cref="int.MaxValue"/> (no limit).
    /// </summary>
    public int MaxMeshVertices { get; set; } = int.MaxValue;
}
