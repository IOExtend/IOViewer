namespace IOViewer.Model;

public enum ViewerProjection
{
    Perspective = 0,
    Orthographic = 1
}

/// <summary>
/// Camera position, orientation, and lens parameters.
/// </summary>
public sealed class ViewerCamera
{
    public Vector3d Position { get; set; } = new(10, 10, 10);
    public Vector3d Target { get; set; } = Vector3d.Zero;
    public Vector3d Up { get; set; } = Vector3d.UnitZ;
    public double FieldOfView { get; set; } = 0.785; // ~45 deg in rad
    public double AspectRatio { get; set; } = 1.6;
    public double NearDistance { get; set; } = 0.1;
    public double FarDistance { get; set; } = 1000.0;
    public ViewerProjection Projection { get; set; } = ViewerProjection.Perspective;
}

/// <summary>
/// Saved viewpoint representation.
/// </summary>
public sealed class ViewerViewpoint
{
    public string Name { get; set; } = "Viewpoint";
    public ViewerCamera Camera { get; set; } = new();

    public ViewerViewpoint() { }

    public ViewerViewpoint(string name, ViewerCamera camera)
    {
        Name = name;
        Camera = camera;
    }
}
