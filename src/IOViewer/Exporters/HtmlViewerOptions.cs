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
    public int MaxMeshVertices { get; set; } = 5_000_000;
}
