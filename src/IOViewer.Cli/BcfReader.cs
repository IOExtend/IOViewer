using System.Globalization;
using System.IO.Compression;
using System.Xml;
using System.Xml.Linq;
using IOScene;
using IOViewer.Model;

namespace IOViewer.Cli;

internal static class BcfReader
{
    private const int MaxArchiveBytes = 64 * 1024 * 1024;
    private const int MaxEntries = 4096;
    private const int MaxXmlBytes = 2 * 1024 * 1024;
    private const int MaxTotalXmlBytes = 32 * 1024 * 1024;
    private const int MaxPlanes = 6;

    internal static List<ViewerBcfTopic> Read(string path, SceneDocument scene, Action<string> warn)
    {
        using var file = File.OpenRead(path);
        if (file.Length > MaxArchiveBytes) throw new InvalidDataException("The BCF archive exceeds 64 MiB.");
        using var zip = new ZipArchive(file, ZipArchiveMode.Read);
        if (zip.Entries.Count > MaxEntries) throw new InvalidDataException("The BCF archive exceeds 4096 entries.");
        var entries = new Dictionary<string, ZipArchiveEntry>(StringComparer.OrdinalIgnoreCase);
        foreach (var entry in zip.Entries)
        {
            string name = entry.FullName;
            if (!ValidPath(name.TrimEnd('/'))) throw new InvalidDataException("The BCF archive contains an invalid entry path.");
            if (!entries.TryAdd(name, entry)) throw new InvalidDataException("The BCF archive contains duplicate entry paths.");
        }

        int remaining = MaxTotalXmlBytes;
        if (!entries.TryGetValue("bcf.version", out var version)
            || ReadXml(version, ref remaining) is not { } root || root.Name != "Version"
            || (string?)root.Attribute("VersionId") != "2.1")
            throw new InvalidDataException("Expected a bcf.version file declaring BCF 2.1.");

        var bounds = scene.ComputeBounds();
        var index = new Components(scene);
        var topics = new List<ViewerBcfTopic>();
        foreach (var entry in entries.Values.Where(e => e.Name.Equals("markup.bcf", StringComparison.OrdinalIgnoreCase))
                     .OrderBy(e => e.FullName, StringComparer.Ordinal))
        {
            string[] segments = entry.FullName.Split('/');
            if (segments.Length != 2 || !Guid.TryParseExact(segments[0], "D", out var folder)) continue;
            var markup = ReadTopicXml(entry, ref remaining, warn);
            if (markup is null || markup.Name != "Markup" || markup.Element("Topic") is not { } topic
                || !Guid.TryParseExact((string?)topic.Attribute("Guid"), "D", out var id) || id != folder
                || topic.Element("Title")?.Value.Trim() is not { Length: > 0 } title)
            {
                warn($"Skipped invalid topic {folder}.");
                continue;
            }
            var result = new ViewerBcfTopic
            {
                Id = id.ToString("D"), Title = title,
                Status = (string?)topic.Attribute("TopicStatus"), Description = (string?)topic.Element("Description"),
            };
            var visited = new HashSet<string>(StringComparer.OrdinalIgnoreCase);
            foreach (var reference in markup.Elements("Viewpoints").OrderBy(ViewIndex))
            {
                string? name = reference.Element("Viewpoint")?.Value.Trim();
                if (string.IsNullOrEmpty(name)) continue; // A snapshot-only viewpoint is allowed.
                if (!ValidPath(name) || name.Contains('/') || !name.EndsWith(".bcfv", StringComparison.OrdinalIgnoreCase)
                    || !entries.TryGetValue($"{segments[0]}/{name}", out var viewFile))
                {
                    warn($"Topic '{title}' has a missing or invalid viewpoint reference.");
                    continue;
                }
                if (!visited.Add(name)) continue;
                var view = ReadTopicXml(viewFile, ref remaining, warn);
                if (view is null || view.Name != "VisualizationInfo" || !TryCamera(view, bounds, out var camera, out double? height))
                {
                    warn($"Topic '{title}' contains a viewpoint without a supported camera.");
                    continue;
                }
                var saved = new ViewerBcfViewpoint
                {
                    Camera = camera, OrthographicHeight = height, State = new()
                    {
                        SectionPlanes = ReadPlanes(view, title, warn),
                    },
                };
                index.Apply(view.Element("Components"), saved, title, warn);
                result.Viewpoints.Add(saved);
            }
            topics.Add(result);
        }
        if (topics.Count == 0) throw new InvalidDataException("The BCF archive has no readable topics.");
        return topics;
    }

    private static int ViewIndex(XElement view) => int.TryParse(view.Element("Index")?.Value,
        NumberStyles.Integer, CultureInfo.InvariantCulture, out int index) ? index : int.MaxValue;

    private static bool ValidPath(string name) =>
        !name.Contains('\\') && !name.Contains(':') && !name.Any(char.IsControl)
        && name.Split('/').All(part => part.Length > 0 && part is not "." and not "..");

    private static XElement? ReadTopicXml(ZipArchiveEntry entry, ref int remaining, Action<string> warn)
    {
        try { return ReadXml(entry, ref remaining); }
        catch (XmlException) { warn($"Malformed XML in '{entry.FullName}'."); return null; }
    }

    private static XElement? ReadXml(ZipArchiveEntry entry, ref int remaining)
    {
        if (entry.Length > MaxXmlBytes || entry.Length > remaining)
            throw new InvalidDataException("BCF XML exceeds the 2 MiB per file or 32 MiB total limit.");
        int length = (int)entry.Length;
        remaining -= length;
        using var data = entry.Open();
        byte[] buffer = new byte[length];
        data.ReadExactly(buffer);
        if (data.ReadByte() != -1) throw new InvalidDataException("BCF entry exceeds its declared size.");
        using var xml = XmlReader.Create(new MemoryStream(buffer), new XmlReaderSettings
        {
            DtdProcessing = DtdProcessing.Prohibit, XmlResolver = null, MaxCharactersInDocument = MaxXmlBytes,
        });
        return XDocument.Load(xml).Root;
    }

    private static bool TryCamera(XElement view, BoundingBox3d bounds, out SceneCamera camera, out double? height)
    {
        camera = new SceneCamera();
        height = null;
        var ortho = view.Element("OrthogonalCamera");
        var perspective = view.Element("PerspectiveCamera");
        var source = ortho ?? perspective;
        if (source is null || (ortho is not null && perspective is not null)
            || !TryVector(source.Element("CameraViewPoint"), out var position)
            || !TryVector(source.Element("CameraDirection"), out var direction) || !Unit(direction, out direction)
            || !TryVector(source.Element("CameraUpVector"), out var up) || !Unit(up, out up)
            || !Unit(Vector3d.Cross(direction, up), out _)) return false;

        if (ortho is not null)
        {
            if (!Number(ortho.Element("ViewToWorldScale"), out double scale) || scale <= 0) return false;
            height = scale;
            camera.Projection = SceneProjection.Orthographic;
        }
        else
        {
            if (!Number(source.Element("FieldOfView"), out double fov) || fov is < 45 or > 60) return false;
            camera.FieldOfView = fov * Math.PI / 180;
        }
        double depth = bounds.IsEmpty ? 0 : Vector3d.Dot(bounds.Center - position, direction);
        camera.Position = position;
        camera.Target = position + direction * (double.IsFinite(depth) && depth > 0 ? depth : 1);
        camera.Up = up;
        return camera.Target != position && Finite(camera.Target);
    }

    private static List<ViewerSectionPlane> ReadPlanes(XElement view, string title, Action<string> warn)
    {
        var planes = new List<ViewerSectionPlane>();
        foreach (var plane in view.Element("ClippingPlanes")?.Elements("ClippingPlane") ?? [])
        {
            if (planes.Count == MaxPlanes)
            {
                warn($"Topic '{title}' exceeds the six clipping planes supported by the viewer.");
                break;
            }
            if (TryVector(plane.Element("Location"), out var location)
                && TryVector(plane.Element("Direction"), out var direction) && Unit(direction, out var normal)
                && double.IsFinite(Vector3d.Dot(normal, location)))
                planes.Add(new() { Axis = ViewerSectionAxis.Custom, Normal = normal, Offset = Vector3d.Dot(normal, location) });
            else warn($"Topic '{title}' contains an invalid clipping plane.");
        }
        return planes;
    }

    private static bool TryVector(XElement? element, out Vector3d vector)
    {
        vector = default;
        if (!Number(element?.Element("X"), out double x) || !Number(element?.Element("Y"), out double y)
            || !Number(element?.Element("Z"), out double z)) return false;
        vector = new(x, y, z);
        return true;
    }

    private static bool Number(XElement? element, out double value) =>
        double.TryParse(element?.Value, NumberStyles.Float, CultureInfo.InvariantCulture, out value) && double.IsFinite(value);

    private static bool Finite(Vector3d v) => double.IsFinite(v.X) && double.IsFinite(v.Y) && double.IsFinite(v.Z);

    private static bool Unit(Vector3d vector, out Vector3d normal)
    {
        normal = default;
        double scale = Math.Max(Math.Abs(vector.X), Math.Max(Math.Abs(vector.Y), Math.Abs(vector.Z)));
        if (scale == 0 || !double.IsFinite(scale)) return false;
        normal = new Vector3d(vector.X / scale, vector.Y / scale, vector.Z / scale).Normalized();
        return true;
    }

    private sealed class Components
    {
        private readonly Dictionary<string, long?> _ifc = new(StringComparer.Ordinal);
        private readonly Dictionary<string, long?> _revit = new(StringComparer.OrdinalIgnoreCase);

        internal Components(SceneDocument scene)
        {
            var formats = scene.Models.ToDictionary(model => model.Id, model => model.SourceFormat);
            foreach (var element in scene.Elements)
            {
                string? format = formats.GetValueOrDefault(element.ModelId);
                Add(_ifc, element.IfcGuid ?? (format == "ifc" ? element.SourceId : null), element.Id);
                if (format == "rvt") Add(_revit, element.SourceId, element.Id);
            }
        }

        private static void Add(Dictionary<string, long?> index, string? identity, long id)
        {
            if (!string.IsNullOrEmpty(identity) && !index.TryAdd(identity, id)) index[identity] = null;
        }

        internal void Apply(XElement? components, ViewerBcfViewpoint view, string title, Action<string> warn)
        {
            view.State.SelectedElementIds = Match(components?.Element("Selection")?.Elements("Component") ?? [], view);
            if (components?.Element("Visibility") is { } visibility)
            {
                var refs = visibility.Element("Exceptions")?.Elements("Component").ToArray() ?? [];
                var exceptions = Match(refs, view);
                string? defaultVisibility = (string?)visibility.Attribute("DefaultVisibility");
                if (defaultVisibility is null or "true" or "1") view.State.HiddenElementIds = exceptions;
                else if (defaultVisibility is "false" or "0")
                {
                    if (refs.Length == 0 || exceptions.Count > 0) view.State.VisibleElementIds = exceptions;
                }
                else warn($"Topic '{title}' contains an invalid visibility default.");
            }
            if (view.MissingComponents > 0 || view.AmbiguousComponents > 0)
                warn($"Topic '{title}' has {view.MissingComponents} missing and {view.AmbiguousComponents} ambiguous component references.");
        }

        private List<long> Match(IEnumerable<XElement> components, ViewerBcfViewpoint view)
        {
            var found = new HashSet<long>();
            foreach (var component in components)
            {
                string? ifcGuid = (string?)component.Attribute("IfcGuid");
                string? system = component.Element("OriginatingSystem")?.Value.Trim();
                string? key = !string.IsNullOrEmpty(ifcGuid) ? ifcGuid
                    : string.Equals(system, "Autodesk Revit", StringComparison.OrdinalIgnoreCase)
                      || string.Equals(system, "Revit", StringComparison.OrdinalIgnoreCase)
                        ? component.Element("AuthoringToolId")?.Value.Trim()
                        : null;
                var index = !string.IsNullOrEmpty(ifcGuid) ? _ifc : _revit;
                if (key is null || !index.TryGetValue(key, out long? id)) view.MissingComponents++;
                else if (id is null) view.AmbiguousComponents++;
                else found.Add(id.Value);
            }
            return [.. found];
        }
    }
}
