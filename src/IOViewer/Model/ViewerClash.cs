namespace IOViewer.Model;

public enum ViewerClashStatus
{
    New = 0,
    Active = 1,
    Reviewed = 2,
    Approved = 3,
    Resolved = 4
}

/// <summary>
/// A detected geometric collision between two BIM/CAD elements.
/// </summary>
public sealed class ViewerClashResult
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Element1Name { get; set; } = string.Empty;
    public string Element2Name { get; set; } = string.Empty;
    public Vector3d Point { get; set; }
    public double Distance { get; set; }
    public ViewerClashStatus Status { get; set; } = ViewerClashStatus.Active;

    public ViewerClashResult() { }

    public ViewerClashResult(string id, string name, string el1, string el2, Vector3d point, double distance, ViewerClashStatus status = ViewerClashStatus.Active)
    {
        Id = id;
        Name = name;
        Element1Name = el1;
        Element2Name = el2;
        Point = point;
        Distance = distance;
        Status = status;
    }
}

/// <summary>
/// A clash detection coordination test suite.
/// </summary>
public sealed class ViewerClashTest
{
    public string Name { get; set; } = "Clash Test";
    public List<ViewerClashResult> Clashes { get; } = [];

    public ViewerClashTest() { }

    public ViewerClashTest(string name)
    {
        Name = name;
    }
}

/// <summary>
/// External linked model reference.
/// </summary>
public sealed class ViewerLinkedFile
{
    public string Name { get; set; } = string.Empty;
    public string Path { get; set; } = string.Empty;
    public bool Visible { get; set; } = true;

    public ViewerLinkedFile() { }

    public ViewerLinkedFile(string name, string path, bool visible = true)
    {
        Name = name;
        Path = path;
        Visible = visible;
    }
}
