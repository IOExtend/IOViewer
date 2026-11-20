using System.Globalization;
using System.Text;
using System.Text.Json;
using IOScene;

namespace IOViewer.Exporters;

internal sealed class ViewerProperties
{
    private readonly Dictionary<int, ScenePropertySet> _sets = [];
    private readonly HashSet<int> _referenced = [];
    private readonly HashSet<string> _names = [];
    private readonly Dictionary<string, int> _nextSuffix = [];

    public ViewerProperties(SceneDocument scene)
    {
        foreach (var set in scene.PropertySets) _sets.TryAdd(set.Id, set);
    }

    public void Write(Utf8JsonWriter writer, SceneElement element)
    {
        writer.WriteStartObject();
        _referenced.Clear();
        var groups = element.PropertySetIds.Where(_referenced.Add).Select(id => _sets.GetValueOrDefault(id))
            .OfType<ScenePropertySet>().GroupBy(set => Written(set.Name));
        foreach (var group in groups)
        {
            writer.WriteStartObject(group.Key);
            _names.Clear();
            _nextSuffix.Clear();
            foreach (var property in group.SelectMany(set => set.Properties))
            {
                string name = Written(property.Name);
                if (!_names.Add(name))
                {
                    string prefix = name;
                    int next = _nextSuffix.GetValueOrDefault(prefix, 2);
                    while (!_names.Add(name = string.Create(CultureInfo.InvariantCulture, $"{prefix} ({next})"))) next++;
                    _nextSuffix[prefix] = next + 1;
                }
                writer.WriteString(name, property.Value.Text);
            }
            writer.WriteEndObject();
        }
        writer.WriteEndObject();
    }

    // JSON replaces unpaired surrogates, so names differing only in such a surrogate share a display key.
    private static string Written(string name) =>
        name.AsSpan().ContainsAnyInRange('\uD800', '\uDFFF') ? Encoding.UTF8.GetString(Encoding.UTF8.GetBytes(name)) : name;
}
