using System.Globalization;
using System.Numerics;
using IOScene;
using IOViewer.Model;

namespace IOViewer.Cli;

internal static class SceneFederation
{
    internal static bool TryParsePlacement(string value, out Transform3d placement)
    {
        placement = default;
        string[] tokens = value.Split(',');
        if (tokens.Length != 4) return false;
        Span<double> coordinates = stackalloc double[4];
        for (int i = 0; i < tokens.Length; i++)
        {
            if (!double.TryParse(tokens[i], NumberStyles.Float, CultureInfo.InvariantCulture, out coordinates[i])
                || !double.IsFinite(coordinates[i])) return false;
        }

        double angle = Math.IEEERemainder(coordinates[3], 360);
        var (sin, cos) = angle switch
        {
            0 => (0d, 1d),
            90 => (1d, 0d),
            -90 => (-1d, 0d),
            180 or -180 => (0d, -1d),
            _ => Math.SinCos(angle * Math.PI / 180),
        };
        placement = new(new(cos, sin, 0), new(-sin, cos, 0), Vector3d.UnitZ,
            new(coordinates[0], coordinates[1], coordinates[2]));
        return true;
    }

    internal static void SetInputPath(SceneDocument scene, string path)
    {
        if (scene.Models.Count == 0) throw new InvalidDataException("A federated source must contain a model.");
        if (string.IsNullOrEmpty(scene.Models[0].Path)) scene.Models[0].Path = path;
    }

    // The CLI owns both documents. Move the imported records and keep geometry buffers shared.
    internal static void Append(ViewerDocument target, ViewerDocument source, string path, Transform3d placement)
    {
        var to = target.Scene;
        var from = source.Scene;
        SetInputPath(from, path);
        string sourceHost = from.Models[0].Key;
        ResolveClashNames(to);
        ResolveClashNames(from);
        // Reserve references as well as definitions so an orphan never attaches to a different source.
        var modelIds = RemapIds(to.Models.Select(m => m.Id).Concat(to.Elements.Select(e => e.ModelId))
            .Concat(to.Levels.Select(l => l.ModelId)).Concat(to.Grids.Select(g => g.ModelId))
            .Concat(to.Schedules.Select(s => s.ModelId).OfType<int>()), from.Models.Select(m => m.Id));
        var levelIds = RemapIds(to.Levels.Select(l => l.Id).Concat(to.Elements.Select(e => e.LevelId).OfType<int>()),
            from.Levels.Select(l => l.Id));
        var geometryIds = RemapIds(to.Geometries.Select(g => g.Id).Concat(to.Instances.Select(i => i.GeometryId)),
            from.Geometries.Select(g => g.Id));
        var materialIds = RemapIds(to.Materials.Select(m => m.Id).Concat(to.Instances.Select(i => i.MaterialId).OfType<int>()),
            from.Materials.Select(m => m.Id));
        var textureIds = RemapIds(to.Textures.Select(t => t.Id).Concat(to.Materials.Select(m => m.TextureId).OfType<int>()),
            from.Textures.Select(t => t.Id));
        var propertyIds = RemapIds(to.PropertySets.Select(p => p.Id).Concat(to.Elements.SelectMany(e => e.PropertySetIds)),
            from.PropertySets.Select(p => p.Id));
        var sourceElements = from.Elements.ToDictionary(e => e.Id);
        var elementIds = RemapIds(ElementReferences(to).Concat(target.ViewpointStates.Values.SelectMany(s => s?.HiddenElementIds ?? [])),
            ElementReferences(from).Distinct());
        var rotation = placement with { Translation = Vector3d.Zero };

        var keys = to.Models.Select(m => m.Key).ToHashSet(StringComparer.Ordinal);
        target.HiddenModelKeys.RemoveAll(key => !keys.Contains(key) || (!target.ShowHostInModelList && key == to.Models[0].Key));
        keys.UnionWith(target.ViewpointStates.Values.SelectMany(s => s?.HiddenModelKeys ?? []));
        var reservedKeys = from.Models.Select(m => m.Key).ToHashSet(StringComparer.Ordinal);
        var modelKeys = new Dictionary<string, string>(StringComparer.Ordinal);
        foreach (var model in from.Models)
        {
            model.Id = modelIds[model.Id];
            string original = model.Key;
            model.Key = Unique(original, keys, reservedKeys);
            modelKeys.Add(original, model.Key);
        }
        foreach (var level in from.Levels)
        {
            level.Id = levelIds[level.Id];
            level.ModelId = modelIds[level.ModelId];
            level.Elevation += placement.Translation.Z;
        }
        foreach (var geometry in from.Geometries) geometry.Id = geometryIds[geometry.Id];
        foreach (var texture in from.Textures) texture.Id = textureIds[texture.Id];
        foreach (var material in from.Materials)
        {
            material.Id = materialIds[material.Id];
            if (material.TextureId is int texture) material.TextureId = textureIds[texture];
        }
        foreach (var propertySet in from.PropertySets) propertySet.Id = propertyIds[propertySet.Id];
        foreach (var element in from.Elements)
        {
            element.Id = elementIds[element.Id];
            element.ModelId = modelIds[element.ModelId];
            if (element.LevelId is int level) element.LevelId = levelIds[level];
            if (element.ParentId is long parent) element.ParentId = elementIds[parent];
            element.PropertySetIds = element.PropertySetIds.Select(id => propertyIds[id]).ToList();
        }
        foreach (var instance in from.Instances)
        {
            instance.ElementId = elementIds[instance.ElementId];
            instance.GeometryId = geometryIds[instance.GeometryId];
            if (instance.MaterialId is int material) instance.MaterialId = materialIds[material];
            var oriented = (instance.Transform ?? Transform3d.Identity).Then(rotation);
            instance.Transform = oriented with { Translation = oriented.Translation + placement.Translation };
        }
        foreach (var grid in from.Grids)
        {
            grid.ModelId = modelIds[grid.ModelId];
            foreach (var line in grid.Lines)
            {
                line.Start = placement.Apply(line.Start);
                line.End = placement.Apply(line.End);
                line.Elevation += placement.Translation.Z;
            }
        }
        foreach (var schedule in from.Schedules)
        {
            if (schedule.ModelId is int model) schedule.ModelId = modelIds[model];
            foreach (var task in AllTasks(schedule.Tasks))
                task.ElementIds = task.ElementIds.Select(id => elementIds[id]).ToList();
        }
        foreach (var clash in from.ClashTests.SelectMany(test => test.Clashes))
        {
            if (clash.Element1Id is long first) clash.Element1Id = elementIds[first];
            if (clash.Element2Id is long second) clash.Element2Id = elementIds[second];
            clash.Point = placement.Apply(clash.Point);
        }

        var viewIds = to.Viewpoints.Select(v => v.Id).OfType<string>().ToHashSet(StringComparer.Ordinal);
        viewIds.UnionWith(target.ViewpointStates.Keys);
        var reservedViews = from.Viewpoints.Select(v => v.Id).OfType<string>().ToHashSet(StringComparer.Ordinal);
        var states = new Dictionary<string, ViewerViewpointState>(source.ViewpointStates, StringComparer.Ordinal);
        if (from.Viewpoints.GroupBy(view => view.Id).Any(group =>
            group.Key is { } id && states.ContainsKey(id) && group.Skip(1).Any()))
            throw new InvalidDataException("A saved viewpoint state matches more than one camera.");
        foreach (var view in from.Viewpoints)
        {
            view.Camera.Position = placement.Apply(view.Camera.Position);
            view.Camera.Target = placement.Apply(view.Camera.Target);
            view.Camera.Up = rotation.Apply(view.Camera.Up);
            if (view.Id is not { } oldId) continue;
            view.Id = Unique(oldId, viewIds, reservedViews);
            if (!states.Remove(oldId, out var state)) continue;
            if (state is null) throw new InvalidDataException($"Viewpoint '{oldId}' has a null state.");
            if (state.HiddenElementIds?.Any(id => !sourceElements.ContainsKey(id)) == true)
                throw new InvalidDataException($"Viewpoint '{oldId}' references an unknown element.");
            state.HiddenElementIds = state.HiddenElementIds?.Select(id => elementIds[id]).ToList();
            state.HiddenModelKeys = state.HiddenModelKeys?.Select(key => modelKeys[key]).ToList();
            TransformSections(state, placement, rotation);
            target.ViewpointStates.Add(view.Id, state);
        }
        if (states.Count != 0) throw new InvalidDataException("A saved viewpoint state has no matching camera.");

        target.HiddenModelKeys.AddRange(source.HiddenModelKeys
            .Where(key => (source.ShowHostInModelList || key != sourceHost) && modelKeys.ContainsKey(key))
            .Select(key => modelKeys[key]));
        target.ShowHostInModelList = true;
        to.Models.AddRange(from.Models);
        to.Levels.AddRange(from.Levels);
        to.Geometries.AddRange(from.Geometries);
        to.Materials.AddRange(from.Materials);
        to.Textures.AddRange(from.Textures);
        to.PropertySets.AddRange(from.PropertySets);
        to.Elements.AddRange(from.Elements);
        to.Instances.AddRange(from.Instances);
        to.Grids.AddRange(from.Grids);
        to.Schedules.AddRange(from.Schedules);
        to.Viewpoints.AddRange(from.Viewpoints);
        to.ClashTests.AddRange(from.ClashTests);
    }

    private static void TransformSections(ViewerViewpointState state, Transform3d placement, Transform3d rotation)
    {
        foreach (var plane in state.SectionPlanes ?? [])
        {
            var normal = plane.Axis switch
            {
                ViewerSectionAxis.X => Vector3d.UnitX,
                ViewerSectionAxis.Y => Vector3d.UnitY,
                ViewerSectionAxis.Z => Vector3d.UnitZ,
                ViewerSectionAxis.Custom => plane.Normal,
                _ => throw new InvalidDataException($"Unknown section plane axis: {plane.Axis}."),
            };
            double scale = Math.Max(Math.Abs(normal.X), Math.Max(Math.Abs(normal.Y), Math.Abs(normal.Z)));
            if (!double.IsFinite(scale) || scale == 0)
                throw new InvalidDataException("The section plane normal must be finite and nonzero.");
            plane.Normal = rotation.Apply(new Vector3d(normal.X / scale, normal.Y / scale, normal.Z / scale).Normalized());
            plane.Offset += Vector3d.Dot(plane.Normal, placement.Translation);
            plane.Axis = ViewerSectionAxis.Custom;
        }
        if (state.SectionBox is not { } box) return;
        if (rotation.XAxis.X != 0 && rotation.XAxis.Y != 0)
            throw new InvalidDataException("A saved section box needs a placement yaw that is a multiple of 90 degrees.");
        var bounds = new BoundingBox3d(box.Min, box.Max);
        if (bounds.IsEmpty) throw new InvalidDataException("A saved section box has invalid bounds.");
        var moved = BoundingBox3d.Empty.Encapsulate(placement.Apply(box.Min)).Encapsulate(placement.Apply(box.Max));
        box.Min = moved.Min;
        box.Max = moved.Max;
    }

    private static void ResolveClashNames(SceneDocument scene)
    {
        // The viewer resolves names only when unique. Apply that rule within each source before other names are added.
        var unresolved = scene.ClashTests.SelectMany(test => test.Clashes)
            .Where(clash => clash.Element1Id is null || clash.Element2Id is null).ToArray();
        if (unresolved.Length == 0) return;
        var requested = new HashSet<string>(StringComparer.Ordinal);
        foreach (var clash in unresolved)
        {
            if (clash.Element1Id is null) requested.Add(clash.Element1Name);
            if (clash.Element2Id is null) requested.Add(clash.Element2Name);
        }
        var names = new Dictionary<string, long?>(StringComparer.Ordinal);
        var ids = scene.Elements.Select(element => element.Id).ToHashSet();
        long missing = -1;
        while (ids.Contains(missing)) missing--;
        foreach (var element in scene.Elements)
            if (element.Name is { } name && requested.Contains(name) && !names.TryAdd(name, element.Id))
                names[name] = null;
        foreach (var clash in unresolved)
        {
            clash.Element1Id ??= Find(clash.Element1Name);
            clash.Element2Id ??= Find(clash.Element2Name);
        }
        long Find(string? name) => name is not null ? names.GetValueOrDefault(name) ?? missing : missing;
    }

    private static IEnumerable<SceneTask> AllTasks(IEnumerable<SceneTask> tasks)
    {
        foreach (var task in tasks)
        {
            yield return task;
            foreach (var child in AllTasks(task.Children)) yield return child;
        }
    }

    private static IEnumerable<long> ElementReferences(SceneDocument scene)
    {
        foreach (var element in scene.Elements)
        {
            yield return element.Id;
            if (element.ParentId is long parent) yield return parent;
        }
        foreach (var instance in scene.Instances) yield return instance.ElementId;
        foreach (var task in scene.Schedules.SelectMany(s => AllTasks(s.Tasks)))
            foreach (var id in task.ElementIds) yield return id;
        foreach (var clash in scene.ClashTests.SelectMany(test => test.Clashes))
        {
            if (clash.Element1Id is long first) yield return first;
            if (clash.Element2Id is long second) yield return second;
        }
    }

    private static Dictionary<T, T> RemapIds<T>(IEnumerable<T> used, IEnumerable<T> incoming) where T : IBinaryInteger<T>
    {
        var taken = used.ToHashSet();
        var map = new Dictionary<T, T>();
        T next = T.One;
        foreach (T id in incoming)
        {
            while (!taken.Add(next)) next = checked(next + T.One);
            map.Add(id, next);
        }
        return map;
    }

    private static string Unique(string key, HashSet<string> used, HashSet<string> reserved)
    {
        if (used.Add(key)) return key;
        for (int i = 2; ; i++)
        {
            string candidate = FormattableString.Invariant($"{key}#{i}");
            if (!reserved.Contains(candidate) && used.Add(candidate)) return candidate;
        }
    }
}
