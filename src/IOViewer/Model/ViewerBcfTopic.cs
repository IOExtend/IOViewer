using IOScene;

namespace IOViewer.Model;

/// <summary>A read-only summary imported from a BCF topic.</summary>
public sealed class ViewerBcfTopic
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string? Status { get; set; }
    public string? Description { get; set; }
    public List<ViewerBcfViewpoint> Viewpoints { get; set; } = [];
}

/// <summary>A BCF camera and its supported state in scene coordinates.</summary>
public sealed class ViewerBcfViewpoint
{
    public SceneCamera Camera { get; set; } = new();
    public double? OrthographicHeight { get; set; }
    public ViewerViewpointState State { get; set; } = new();
    public int MissingComponents { get; set; }
    public int AmbiguousComponents { get; set; }
}
