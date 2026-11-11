namespace IOViewer.Model;

/// <summary>
/// Represents a building spatial grid coordinate system.
/// </summary>
public sealed class ViewerGridSystem
{
    public string Name { get; set; } = "Grids";
    public List<ViewerGridLine> Lines { get; } = [];
}

/// <summary>
/// A single 3D grid line / axis (e.g., Axis 1, Axis 2, Axis A, Axis B).
/// </summary>
public sealed class ViewerGridLine
{
    public string Name { get; set; } = string.Empty;
    public Vector3d Start { get; set; }
    public Vector3d End { get; set; }
    public double Elevation { get; set; }

    public ViewerGridLine() { }

    public ViewerGridLine(string name, Vector3d start, Vector3d end, double elevation = 0)
    {
        Name = name;
        Start = start;
        End = end;
        Elevation = elevation;
    }
}
