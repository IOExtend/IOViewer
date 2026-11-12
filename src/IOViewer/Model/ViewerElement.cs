using System.Text.Json.Serialization;

namespace IOViewer.Model;

/// <summary>
/// Represents a semantic BIM/CAD element (e.g. Wall, Column, Pipe, Equipment, Door).
/// </summary>
public sealed class ViewerElement
{
    public long Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = "General";
    public string TypeName { get; set; } = string.Empty;
    public string Level { get; set; } = string.Empty;
    public string? LinkName { get; set; }

    /// <summary>
    /// Parameters grouped by property category (e.g. "Identity Data", "Dimensions", "Phasing").
    /// </summary>
    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public Dictionary<string, Dictionary<string, string>> Properties { get; } = new(StringComparer.OrdinalIgnoreCase);

    /// <summary>
    /// Indices of associated meshes in ViewerDocument.Meshes.
    /// </summary>
    [JsonObjectCreationHandling(JsonObjectCreationHandling.Populate)]
    public List<int> MeshIndices { get; } = [];

    public BoundingBox3d BoundingBox { get; set; } = BoundingBox3d.Empty;

    public void AddProperty(string category, string name, string value)
    {
        if (string.IsNullOrEmpty(category)) category = "General";
        if (!Properties.TryGetValue(category, out var dict))
        {
            dict = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            Properties[category] = dict;
        }
        dict[name] = value;
    }
}
