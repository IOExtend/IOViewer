using IfcIO;
using IfcIO.Schema;
using IOViewer.Model;

namespace IOViewer.IfcIO;

/// <summary>
/// The result of <see cref="IfcViewerAdapter.Convert"/>: the viewer document and what happened to the model's data.
/// </summary>
public sealed class IfcViewerConversion
{
    internal IfcViewerConversion(
        ViewerDocument document,
        IfcLengthUnit lengthUnit,
        double metresPerUnit,
        IReadOnlyList<IfcViewerElementWithoutGeometry> elementsWithoutGeometry,
        int skippedTasks)
    {
        Document = document;
        LengthUnit = lengthUnit;
        MetresPerUnit = metresPerUnit;
        ElementsWithoutGeometry = elementsWithoutGeometry;
        SkippedTasks = skippedTasks;
    }

    /// <summary>The converted document, in metres with Z up.</summary>
    public ViewerDocument Document { get; }

    /// <summary>The model's length unit (<see cref="IfcModel.LengthUnit"/>) the geometry was converted from.</summary>
    public IfcLengthUnit LengthUnit { get; }

    /// <summary>The exact factor applied to every coordinate: the length of one <see cref="LengthUnit"/> in metres.</summary>
    public double MetresPerUnit { get; }

    /// <summary>Number of converted elements, with or without geometry.</summary>
    public int ElementCount => Document.Elements.Count;

    /// <summary>Number of converted elements that have a mesh.</summary>
    public int ElementsWithGeometry => Document.Elements.Count - ElementsWithoutGeometry.Count;

    /// <summary>
    /// Number of meshes with their own vertices. IfcIO bakes mapped items (<c>IfcMappedItem</c>) into each element's
    /// world mesh and does not expose the shared representation, so every mesh is its own, one per element with
    /// geometry, and <see cref="ViewerDocument.Geometries"/> stays empty.
    /// </summary>
    public int OwnMeshes => Document.Meshes.Count;

    /// <summary>Converted elements that have no mesh, with the reason; they still appear in the model tree.</summary>
    public IReadOnlyList<IfcViewerElementWithoutGeometry> ElementsWithoutGeometry { get; }

    /// <summary>
    /// Number of 4D tasks left out of <see cref="ViewerDocument.TimeLiner"/> because they have no planned start and finish
    /// (IfcIO reads task times from IFC4 files only). Their subtasks are kept.
    /// </summary>
    public int SkippedTasks { get; }
}

/// <summary>
/// A converted element that has no mesh.
/// </summary>
/// <param name="ElementId">The element's <see cref="ViewerElement.Id"/>.</param>
/// <param name="GlobalId">The element's IFC GlobalId, if any.</param>
/// <param name="Reason">Why the element has no mesh.</param>
public sealed record IfcViewerElementWithoutGeometry(long ElementId, string? GlobalId, IfcViewerGeometryIssue Reason);

/// <summary>
/// Why a converted element has no mesh.
/// </summary>
public enum IfcViewerGeometryIssue
{
    /// <summary>IfcIO returned no geometry: the element has no representation, or none IfcIO can read.</summary>
    NoGeometry,

    /// <summary>The geometry has no triangles.</summary>
    EmptyMesh,

    /// <summary>The geometry has a non-finite coordinate, an index out of range or an index count not divisible by 3.</summary>
    InvalidMesh,
}
