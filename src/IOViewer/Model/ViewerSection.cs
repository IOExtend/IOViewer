using IOScene;

namespace IOViewer.Model;

public enum ViewerSectionAxis
{
    X = 0,
    Y = 1,
    Z = 2,
    Custom = 3
}

/// <summary>
/// A 3D cutting plane.
/// </summary>
public sealed class ViewerSectionPlane
{
    public ViewerSectionAxis Axis { get; set; } = ViewerSectionAxis.X;
    public Vector3d Normal { get; set; } = Vector3d.UnitX;
    public double Offset { get; set; }
    public bool Enabled { get; set; } = true;
    public bool Inverted { get; set; }

    public ViewerSectionPlane() { }

    public ViewerSectionPlane(ViewerSectionAxis axis, double offset, bool inverted = false)
    {
        Axis = axis;
        Offset = offset;
        Inverted = inverted;
        Normal = axis switch
        {
            ViewerSectionAxis.X => Vector3d.UnitX,
            ViewerSectionAxis.Y => Vector3d.UnitY,
            ViewerSectionAxis.Z => Vector3d.UnitZ,
            _ => Vector3d.UnitX
        };
    }
}

/// <summary>
/// A 6-sided Section Box (clipping volume).
/// </summary>
public sealed class ViewerSectionBox
{
    public Vector3d Min { get; set; } = new(-10, -10, -10);
    public Vector3d Max { get; set; } = new(10, 10, 10);
    public bool Enabled { get; set; } = true;
    public bool Inverted { get; set; }

    public ViewerSectionBox() { }

    public ViewerSectionBox(Vector3d min, Vector3d max, bool enabled = true, bool inverted = false)
    {
        Min = min;
        Max = max;
        Enabled = enabled;
        Inverted = inverted;
    }
}
