using System.Text.Json.Serialization;
using IOScene;

namespace IOViewer.Model;

/// <summary>
/// What the HTML viewer shows: a scene, plus the viewer's own state at start (section planes, section box and the
/// models hidden at start).
/// </summary>
/// <remarks>
/// The model data is <see cref="Scene"/>, in metres, right-handed, Z up, as the IOScene contract defines it. Section
/// planes and the section box are in the same coordinates.
/// </remarks>
public sealed class ViewerDocument
{
    public ViewerDocument() { }

    public ViewerDocument(string title)
    {
        Title = title;
    }

    public ViewerDocument(SceneDocument scene)
    {
        ArgumentNullException.ThrowIfNull(scene);
        Scene = scene;
    }

    /// <summary>The model data.</summary>
    public SceneDocument Scene { get; set; } = new();

    /// <summary>Cutting planes active at start.</summary>
    public List<ViewerSectionPlane> SectionPlanes { get; set; } = [];

    /// <summary>Section box (clipping volume) at start, or null.</summary>
    public ViewerSectionBox? SectionBox { get; set; }

    /// <summary>
    /// Keys (<see cref="SceneModel.Key"/>) of the models hidden at start. This applies to models listed in the viewer.
    /// </summary>
    public List<string> HiddenModelKeys { get; set; } = [];

    /// <summary>Include the first model in the viewer's model visibility list, as in a federated export.</summary>
    public bool ShowHostInModelList { get; set; }

    /// <summary>Optional viewer state keyed by a unique, non-null <see cref="SceneViewpoint.Id"/> in this scene.</summary>
    public Dictionary<string, ViewerViewpointState> ViewpointStates { get; set; } = [];

    /// <summary>Imported BCF topic summaries and viewpoints in this scene.</summary>
    public List<ViewerBcfTopic> BcfTopics { get; set; } = [];

    /// <summary>Title of the scene: reads and writes <see cref="SceneDocument.Title"/>.</summary>
    [JsonIgnore]
    public string Title
    {
        get => Scene.Title;
        set => Scene.Title = value;
    }
}
