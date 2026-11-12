using System.Text.Json.Serialization;

// The JSON shape of IOViewer 0.1 and 0.2 snapshots: the 0.2.0 model classes, kept only to read old files. Members the
// mapper does not use (stored bounding boxes, MeshIndices) are left out, so the reader skips them.
namespace IOViewer.Legacy;

internal readonly record struct Vector2d(double X, double Y);

internal readonly record struct Vector3d(double X, double Y, double Z);

internal readonly record struct Transform3d(Vector3d XAxis, Vector3d YAxis, Vector3d ZAxis, Vector3d Translation);

internal readonly record struct RgbaColor(byte R, byte G, byte B, byte A = 255)
{
    public double Af => A / 255.0;
}

internal sealed class ViewerDocument
{
    public string Title { get; set; } = "3D BIM Model";
    public string? SourcePath { get; set; }
    public string? Author { get; set; }
    public string? CreatedAt { get; set; }
    public string? Application { get; set; }
    public List<ViewerElement> Elements { get; set; } = [];
    public List<ViewerMesh> Meshes { get; set; } = [];
    public List<ViewerGeometry> Geometries { get; set; } = [];
    public List<ViewerMaterial> Materials { get; set; } = [];
    public List<ViewerTexture> Textures { get; set; } = [];
    public ViewerGridSystem? Grids { get; set; }
    public List<ViewerViewpoint> Viewpoints { get; set; } = [];
    public List<ViewerSectionPlane> SectionPlanes { get; set; } = [];
    public ViewerSectionBox? SectionBox { get; set; }
    public ViewerTimeLinerSchedule? TimeLiner { get; set; }
    public List<ViewerClashTest> ClashTests { get; set; } = [];
    public List<ViewerLinkedFile> LinkedFiles { get; set; } = [];
}

internal sealed class ViewerElement
{
    public long Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = "General";
    public string TypeName { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public string? LinkName { get; set; }

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public Dictionary<string, Dictionary<string, string>> Properties { get; } = new(StringComparer.OrdinalIgnoreCase);
}

internal sealed class ViewerMesh
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public long? ElementId { get; set; }
    public IReadOnlyList<Vector3d> Vertices { get; set; } = [];
    public IReadOnlyList<int> Indices { get; set; } = [];
    public IReadOnlyList<Vector3d>? Normals { get; set; }
    public IReadOnlyList<Vector2d>? UVs { get; set; }
    public int? GeometryId { get; set; }
    public Transform3d? Transform { get; set; }
    public int? MaterialId { get; set; }
    public RgbaColor? Color { get; set; }
    public double Opacity { get; set; } = 1.0;
    public int? TextureIndex { get; set; }
}

internal sealed class ViewerGeometry
{
    public int Id { get; set; }
    public IReadOnlyList<Vector3d> Vertices { get; set; } = [];
    public IReadOnlyList<int> Indices { get; set; } = [];
    public IReadOnlyList<Vector3d>? Normals { get; set; }
    public IReadOnlyList<Vector2d>? UVs { get; set; }
}

internal sealed class ViewerMaterial
{
    public int Id { get; set; }
    public string Name { get; set; } = "Default";
    public RgbaColor Color { get; set; } = new(200, 200, 200);
    public double Opacity { get; set; } = 1.0;
    public double Roughness { get; set; } = 0.5;
    public double Metalness { get; set; } = 0.1;
    public int? TextureIndex { get; set; }
}

internal sealed class ViewerTexture
{
    public string MimeType { get; set; } = "image/png";
    public string Base64Data { get; set; } = string.Empty;
    public double ScaleX { get; set; } = 1.0;
    public double ScaleY { get; set; } = 1.0;
}

internal sealed class ViewerGridSystem
{
    public string Name { get; set; } = "Grids";

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public List<ViewerGridLine> Lines { get; } = [];
}

internal sealed class ViewerGridLine
{
    public string Name { get; set; } = string.Empty;
    public Vector3d Start { get; set; }
    public Vector3d End { get; set; }
    public double Elevation { get; set; }
}

internal sealed class ViewerCamera
{
    public Vector3d Position { get; set; } = new(10, 10, 10);
    public Vector3d Target { get; set; }
    public Vector3d Up { get; set; } = new(0, 0, 1);
    public double FieldOfView { get; set; } = 0.785;
    public double AspectRatio { get; set; } = 1.6;
    public double NearDistance { get; set; } = 0.1;
    public double FarDistance { get; set; } = 1000.0;
    public int Projection { get; set; }
}

internal sealed class ViewerViewpoint
{
    public string Name { get; set; } = "Viewpoint";
    public ViewerCamera Camera { get; set; } = new();
}

internal sealed class ViewerSectionPlane
{
    public int Axis { get; set; }
    public Vector3d Normal { get; set; } = new(1, 0, 0);
    public double Offset { get; set; }
    public bool Enabled { get; set; } = true;
    public bool Inverted { get; set; }
}

internal sealed class ViewerSectionBox
{
    public Vector3d Min { get; set; } = new(-10, -10, -10);
    public Vector3d Max { get; set; } = new(10, 10, 10);
    public bool Enabled { get; set; } = true;
    public bool Inverted { get; set; }
}

internal sealed class ViewerTimeLinerTask
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public int TaskType { get; set; }
    public DateTimeOffset PlannedStart { get; set; }
    public DateTimeOffset PlannedEnd { get; set; }
    public DateTimeOffset? ActualStart { get; set; }
    public DateTimeOffset? ActualEnd { get; set; }
    public decimal? PlannedCost { get; set; }
    public decimal? ActualCost { get; set; }
    public double Progress { get; set; }

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public List<long> AttachedElementIds { get; } = [];

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public List<ViewerTimeLinerTask> Children { get; } = [];
}

internal sealed class ViewerTimeLinerSchedule
{
    public string Name { get; set; } = "TimeLiner Schedule";

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public List<ViewerTimeLinerTask> Tasks { get; } = [];
}

internal sealed class ViewerClashResult
{
    public string Id { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Element1Name { get; set; } = string.Empty;
    public string Element2Name { get; set; } = string.Empty;
    public long? Element1Id { get; set; }
    public long? Element2Id { get; set; }
    public Vector3d Point { get; set; }
    public double Distance { get; set; }
    public int Status { get; set; } = 1;
}

internal sealed class ViewerClashTest
{
    public string Name { get; set; } = "Clash Test";

    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public List<ViewerClashResult> Clashes { get; } = [];
}

internal sealed class ViewerLinkedFile
{
    public string Name { get; set; } = string.Empty;
    public string Path { get; set; } = string.Empty;
    public bool Visible { get; set; } = true;
}
