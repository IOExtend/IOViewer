using System.Globalization;
using IfcIO;
using IfcIO.Model;
using IfcIO.Model.Sequence;
using IfcIO.Schema;
using IOViewer.Model;

namespace IOViewer.IfcIO;

/// <summary>
/// Converts an <see cref="IfcModel"/> read by IfcIO into a <see cref="ViewerDocument"/>.
/// </summary>
/// <remarks>
/// <para>
/// The adapter works on the model in memory and never reads the file again. Geometry is IfcIO's world mesh of each
/// element (<see cref="IfcElement.GetEffectiveMesh"/>), scaled from <see cref="IfcModel.LengthUnit"/> to metres by an
/// exact factor; IFC is Z up like the viewer, so axes are not swapped. Coordinates stay doubles; the HTML exporter
/// moves them relative to the model centre.
/// </para>
/// <para>
/// Each element of <see cref="IfcModel.AllElements"/> (and of <see cref="IfcModel.AllSpaces"/> with
/// <see cref="IfcViewerOptions.IncludeSpaces"/>) becomes one <see cref="ViewerElement"/>, except the type objects
/// (for example <c>IFCWALLTYPE</c>, <c>IFCDOORSTYLE</c>) and lining and panel properties that IfcIO also lists there:
/// <see cref="ViewerElement.Id"/> is <see cref="IfcElement.Id"/>, which for a model opened with
/// <see cref="IfcModel.Open(string)"/> is the element's STEP entity id (<c>#123</c> gives 123), stable for a given file;
/// <see cref="ViewerElement.SourceId"/> is the GlobalId; <see cref="ViewerElement.Category"/> is the IFC class as IfcIO
/// reports it (upper case, for example <c>IFCWALL</c>); <see cref="ViewerElement.Level"/> is the name of the IfcIO
/// storey that holds it. IfcIO places an element in a storey only through <c>IfcRelContainedInSpatialStructure</c>, so
/// elements contained in the site or building, and spaces aggregated to a storey (<c>IfcRelAggregates</c>, which IfcIO
/// does not read), get the first storey's name. Property sets and quantity sets become property groups named after the set; quantity values are
/// written as IfcIO reads them, in the file's units, with invariant formatting.
/// </para>
/// <para>
/// Colour and transparency come from <see cref="IfcElement.Material"/> (IfcIO reads the colour of
/// <c>IfcSurfaceStyleShading</c>); elements without one get a default colour for their IFC class. IfcIO's 4D work
/// schedules become <see cref="ViewerDocument.TimeLiner"/>. Openings are not converted.
/// </para>
/// </remarks>
public static class IfcViewerAdapter
{
    /// <summary>
    /// Converts <paramref name="model"/> into a viewer document.
    /// </summary>
    /// <param name="model">The model, for example from <see cref="IfcModel.Open(string)"/>.</param>
    /// <param name="options">Conversion options; null uses the defaults.</param>
    /// <returns>The document, in metres with Z up.</returns>
    /// <exception cref="ArgumentException">Two converted elements have the same <see cref="IfcElement.Id"/>.</exception>
    public static ViewerDocument ToViewerDocument(IfcModel model, IfcViewerOptions? options = null) =>
        Convert(model, options).Document;

    /// <summary>
    /// Converts <paramref name="model"/> into a viewer document and reports what was converted.
    /// </summary>
    /// <param name="model">The model, for example from <see cref="IfcModel.Open(string)"/>.</param>
    /// <param name="options">Conversion options; null uses the defaults.</param>
    /// <returns>The document with a report of elements without geometry, meshes, units and skipped 4D tasks.</returns>
    /// <exception cref="ArgumentException">Two converted elements have the same <see cref="IfcElement.Id"/>.</exception>
    public static IfcViewerConversion Convert(IfcModel model, IfcViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(model);
        options ??= new IfcViewerOptions();

        double scale = MetresPerUnit(model.LengthUnit);
        var doc = new ViewerDocument(model.ProjectName);
        var withoutGeometry = new List<IfcViewerElementWithoutGeometry>();
        var materials = new Dictionary<IfcMaterial, int>(ReferenceEqualityComparer.Instance);
        var converted = new Dictionary<IfcElement, long>(ReferenceEqualityComparer.Instance);
        var ids = new HashSet<long>();

        foreach (var storey in model.Storeys)
        {
            var elements = options.IncludeSpaces ? storey.Elements.Concat(storey.Spaces) : storey.Elements;
            foreach (var element in elements)
            {
                if (IsNotProduct(element.IfcType)) continue;

                // Mesh ElementIds, 4D tasks and clashes all key on Id, so a repeat would merge two elements.
                if (!ids.Add(element.Id))
                {
                    throw new ArgumentException(
                        $"Element id {element.Id} ('{element.Name}') is used twice. Ids are unique in models read with IfcModel.Open; "
                        + "a model built in memory numbers elements per storey, so save and reopen it first.",
                        nameof(model));
                }

                converted.Add(element, element.Id);
                var issue = AddElement(doc, element, storey.Name, scale, materials);
                if (issue is { } reason)
                {
                    withoutGeometry.Add(new IfcViewerElementWithoutGeometry(element.Id, element.GlobalId, reason));
                }
            }
        }

        int skippedTasks = AddSchedule(doc, model.WorkSchedules, converted);
        doc.ComputeBoundingBox();
        return new IfcViewerConversion(doc, model.LengthUnit, scale, withoutGeometry, skippedTasks);
    }

    // shortcut: IfcIO picks products by class-name prefix (IFCWALL, IFCDOOR, ...), so type objects such as IfcWallType or
    // IfcDoorStyle and the door and window lining and panel properties arrive as elements without geometry; no product
    // class it matches ends like these. Remove once IfcIO reads only IfcProduct subtypes.
    private static bool IsNotProduct(string ifcType) =>
        ifcType.EndsWith("TYPE", StringComparison.OrdinalIgnoreCase)
        || ifcType.EndsWith("STYLE", StringComparison.OrdinalIgnoreCase)
        || ifcType.EndsWith("PROPERTIES", StringComparison.OrdinalIgnoreCase);

    // Exact lengths of the units IfcIO reports; it already converts any other file unit to metres while reading.
    private static double MetresPerUnit(IfcLengthUnit unit) => unit switch
    {
        IfcLengthUnit.Millimetre => 0.001,
        IfcLengthUnit.Metre => 1.0,
        IfcLengthUnit.Foot => 0.3048,
        IfcLengthUnit.Inch => 0.0254,
        _ => throw new ArgumentOutOfRangeException(nameof(unit), unit, "Unknown IFC length unit."),
    };

    private static IfcViewerGeometryIssue? AddElement(
        ViewerDocument doc, IfcElement element, string level, double scale, Dictionary<IfcMaterial, int> materials)
    {
        var viewerElement = new ViewerElement
        {
            Id = element.Id,
            Name = element.Name,
            Category = element.IfcType,
            TypeName = element.TypeProduct?.Name ?? string.Empty,
            Level = level,
            SourceId = element.GlobalId,
        };
        foreach (var pset in element.PropertySets)
        {
            foreach (var property in pset.Properties)
            {
                viewerElement.AddProperty(pset.Name, property.Name, property.Value);
            }
        }
        foreach (var qset in element.QuantitySets)
        {
            foreach (var quantity in qset.Quantities)
            {
                viewerElement.AddProperty(qset.Name, quantity.Name, quantity.Value.ToString(CultureInfo.InvariantCulture));
            }
        }
        doc.Elements.Add(viewerElement);

        var source = element.GetEffectiveMesh();
        if (source is null) return IfcViewerGeometryIssue.NoGeometry;
        if (source.Indices.Count == 0 || source.Vertices.Count == 0) return IfcViewerGeometryIssue.EmptyMesh;

        var vertices = new Vector3d[source.Vertices.Count];
        for (int i = 0; i < vertices.Length; i++)
        {
            var v = source.Vertices[i];
            if (!double.IsFinite(v.X) || !double.IsFinite(v.Y) || !double.IsFinite(v.Z)) return IfcViewerGeometryIssue.InvalidMesh;
            vertices[i] = new Vector3d(v.X * scale, v.Y * scale, v.Z * scale);
        }
        if (source.Indices.Count % 3 != 0 || source.Indices.Any(index => (uint)index >= (uint)vertices.Length))
        {
            return IfcViewerGeometryIssue.InvalidMesh;
        }

        var mesh = new ViewerMesh
        {
            Id = doc.Meshes.Count + 1,
            Name = element.Name,
            ElementId = element.Id,
            Vertices = vertices,
            Indices = [.. source.Indices],
        };
        if (element.Material is { } material)
        {
            mesh.MaterialId = MaterialId(doc, material, materials);
        }
        else
        {
            (mesh.Color, mesh.Opacity) = DefaultColor(element);
        }

        viewerElement.MeshIndices.Add(doc.Meshes.Count);
        doc.Meshes.Add(mesh);
        return null;
    }

    private static int MaterialId(ViewerDocument doc, IfcMaterial material, Dictionary<IfcMaterial, int> materials)
    {
        if (materials.TryGetValue(material, out int id)) return id;

        id = doc.Materials.Count + 1;
        doc.Materials.Add(new ViewerMaterial
        {
            Id = id,
            Name = material.Name,
            Color = new RgbaColor(Channel(material.R), Channel(material.G), Channel(material.B)),
            Opacity = Math.Clamp(material.Alpha, 0, 1),
        });
        materials.Add(material, id);
        return id;
    }

    private static byte Channel(double value) => (byte)Math.Round(Math.Clamp(value, 0, 1) * 255);

    // Fallback colours by IFC class family, matched on the class name prefix as IfcIO lists the classes it reads.
    private static (RgbaColor Color, double Opacity) DefaultColor(IfcElement element)
    {
        string type = element.IfcType.ToUpperInvariant();
        if (element is IfcSpace) return (new RgbaColor(150, 200, 235), 0.3);
        if (type.StartsWith("IFCWINDOW", StringComparison.Ordinal) || type.StartsWith("IFCCURTAINWALL", StringComparison.Ordinal))
        {
            return (new RgbaColor(140, 190, 225), 0.5);
        }
        if (type.StartsWith("IFCWALL", StringComparison.Ordinal)) return (new RgbaColor(215, 213, 205), 1);
        if (type.StartsWith("IFCSLAB", StringComparison.Ordinal) || type.StartsWith("IFCROOF", StringComparison.Ordinal)
            || type.StartsWith("IFCFOOTING", StringComparison.Ordinal))
        {
            return (new RgbaColor(190, 190, 190), 1);
        }
        if (type.StartsWith("IFCCOLUMN", StringComparison.Ordinal) || type.StartsWith("IFCBEAM", StringComparison.Ordinal)
            || type.StartsWith("IFCMEMBER", StringComparison.Ordinal))
        {
            return (new RgbaColor(120, 140, 185), 1);
        }
        if (type.StartsWith("IFCDOOR", StringComparison.Ordinal)) return (new RgbaColor(150, 105, 60), 1);
        if (type.StartsWith("IFCPIPE", StringComparison.Ordinal) || type.StartsWith("IFCFLOW", StringComparison.Ordinal))
        {
            return (new RgbaColor(225, 110, 60), 1);
        }
        if (type.StartsWith("IFCDUCT", StringComparison.Ordinal)) return (new RgbaColor(70, 190, 110), 1);
        return (new RgbaColor(180, 180, 180), 1);
    }

    private static int AddSchedule(ViewerDocument doc, List<IfcWorkSchedule> schedules, Dictionary<IfcElement, long> converted)
    {
        var withTasks = schedules.Where(s => s.RootTasks.Count > 0).ToList();
        if (withTasks.Count == 0) return 0;

        // The viewer shows one schedule, so the tasks of several work schedules go into one, side by side.
        var timeLiner = new ViewerTimeLinerSchedule(string.Join(", ", withTasks.Select(s => s.Name)));
        int skipped = 0;
        foreach (var task in withTasks.SelectMany(s => s.RootTasks))
        {
            AddTask(task, timeLiner.Tasks);
        }
        doc.TimeLiner = timeLiner.Tasks.Count > 0 ? timeLiner : null;
        return skipped;

        void AddTask(IfcTask task, List<ViewerTimeLinerTask> target)
        {
            if (task.Time?.PlannedStartDate is not { } start || task.Time.PlannedFinishDate is not { } finish)
            {
                skipped++;
                foreach (var sub in task.SubTasks) AddTask(sub, target);
                return;
            }

            var viewerTask = new ViewerTimeLinerTask(
                task.GlobalId,
                task.Name,
                Instant(start),
                Instant(finish),
                task.TaskType == IfcTaskType.Demolition ? ViewerTimeLinerTaskType.Demolish : ViewerTimeLinerTaskType.Construct)
            {
                ActualStart = task.Time.ActualStartDate is { } actualStart ? Instant(actualStart) : null,
                ActualEnd = task.Time.ActualFinishDate is { } actualEnd ? Instant(actualEnd) : null,
            };
            foreach (var element in task.AssignedElements)
            {
                if (converted.TryGetValue(element, out long id)) viewerTask.AttachedElementIds.Add(id);
            }
            target.Add(viewerTask);
            foreach (var sub in task.SubTasks) AddTask(sub, viewerTask.Children);
        }
    }

    // IfcIO reads IFC date-times as UTC (converted to local time); a date set in memory without a kind is taken as UTC too.
    private static DateTimeOffset Instant(DateTime value) =>
        value.Kind == DateTimeKind.Unspecified ? new DateTimeOffset(value, TimeSpan.Zero) : new DateTimeOffset(value).ToUniversalTime();
}
