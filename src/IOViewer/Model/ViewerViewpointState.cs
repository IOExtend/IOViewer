using IOScene;

namespace IOViewer.Model;

/// <summary>Optional clipping and visibility to restore along with a saved camera.</summary>
public sealed class ViewerViewpointState
{
    /// <summary>
    /// Cutting planes in scene coordinates. Null preserves clipping unless a section box is supplied.
    /// An empty list clears clipping when there is no enabled box.
    /// </summary>
    public List<ViewerSectionPlane>? SectionPlanes { get; set; }

    /// <summary>Section box in scene coordinates. An enabled box takes precedence over the planes.</summary>
    public ViewerSectionBox? SectionBox { get; set; }

    /// <summary>
    /// Scene element IDs to hide in the user's visibility layer. Null preserves that layer and an empty list shows
    /// all elements in it. Linked files and schedules still apply their own visibility.
    /// </summary>
    public List<long>? HiddenElementIds { get; set; }

    /// <summary>
    /// <see cref="SceneModel.Key"/> values of hidden linked models. Null preserves the linked-file checkboxes and an
    /// empty list checks all linked files with elements. The host is controlled through <see cref="HiddenElementIds"/>.
    /// </summary>
    public List<string>? HiddenModelKeys { get; set; }
}
