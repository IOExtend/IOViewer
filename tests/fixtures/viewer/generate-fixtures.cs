// Regenerates building.json, empty.json, escaping.json and textured.json; run from the repository root: dotnet run tests/fixtures/viewer/generate-fixtures.cs -- tests/fixtures/viewer
#:project ../../../src/IOViewer/IOViewer.csproj
#:property PublishAot=false
#:property JsonSerializerIsReflectionEnabledByDefault=true
using IOScene;
using IOViewer.Exporters;
using IOViewer.Importers;
using IOViewer.Model;

// Synthetic two-storey frame building for the viewer e2e fixtures.
if (args.Length != 1)
{
    Console.Error.WriteLine("Usage: dotnet run generate-fixtures.cs -- <output directory>");
    return 1;
}
string outDir = args[0];
Directory.CreateDirectory(outDir);

var scene = new SceneDocument { Title = "Two-Storey Frame Building" };
// The host model, then the two linked files; elements of a linked file belong to its model.
scene.Models.Add(new SceneModel { Id = 1, Key = "model", Name = scene.Title, Author = "IOViewer", CreatedAt = "2026-11-11T12:00:00Z" });
const int host = 1, structure = 2, mep = 3;
scene.Models.Add(new SceneModel { Id = structure, Key = "Structure.rvt", Name = "Structure", Path = "Structure.rvt" });
scene.Models.Add(new SceneModel { Id = mep, Key = "MEP.rvt", Name = "MEP", Path = "MEP.rvt" });
var concrete = new RgbaColor(185, 183, 178);
var steel = new RgbaColor(110, 122, 140);
var glass = new RgbaColor(150, 200, 230, 89); // 35 % opaque
var mullion = new RgbaColor(80, 82, 88);
var ductColor = new RgbaColor(205, 215, 225);

double[] xs = [0, 6, 12, 18];
string[] xNames = ["A", "B", "C", "D"];
double[] ys = [0, 6, 12];
string[] yNames = ["1", "2", "3"];
const double storey = 3.6, slab = 0.2, beamDepth = 0.3, beamWidth = 0.2;

long nextId = 300001;
var levels = new Dictionary<(int, string), int>();
SceneElement Element(string name, string category, string type, string level, int model)
{
    if (!levels.TryGetValue((model, level), out int levelId))
    {
        levelId = scene.Levels.Count + 1;
        scene.Levels.Add(new SceneLevel { Id = levelId, ModelId = model, Name = level });
        levels.Add((model, level), levelId);
    }
    var e = new SceneElement { Id = nextId++, ModelId = model, Name = name, Category = category, TypeName = type, LevelId = levelId };
    scene.Elements.Add(e);
    Property(scene, e, "Identity Data", "Mark", name);
    Property(scene, e, "Constraints", "Level", level);
    return e;
}
void Place(SceneElement e, int geometry, Transform3d? transform, RgbaColor color) =>
    scene.Instances.Add(new SceneInstance { ElementId = e.Id, GeometryId = geometry, Transform = transform, Color = color, Name = e.Name });

// Shared geometries: column (0.4 x 0.4 x storey-slab, centred in XY) and a 6 m beam along X (centred in Y).
var (cv, ci, cn) = Box(new(-0.2, -0.2, 0), new(0.2, 0.2, storey - slab));
scene.Geometries.Add(new SceneGeometry { Id = 1, Vertices = cv, Indices = ci, Normals = cn });
var (bv, bi, bn) = Box(new(0, -beamWidth / 2, -beamDepth), new(6, beamWidth / 2, 0));
scene.Geometries.Add(new SceneGeometry { Id = 2, Vertices = bv, Indices = bi, Normals = bn });

SceneElement groundSlab = Element("Ground Slab", "Floors", "Concrete 300", "Level 1", host);
AddBox(scene, groundSlab, new(-1, -1, -0.3), new(19, 13, 0), concrete);

var storeys = new[] { ("Level 1", 0.0), ("Level 2", storey) };
var columnsByLevel = new List<long>[2];
var beamsByLevel = new List<long>[2];
var clashBeams = new List<SceneElement>();
for (int l = 0; l < 2; l++)
{
    var (levelName, z0) = storeys[l];
    columnsByLevel[l] = [];
    beamsByLevel[l] = [];
    for (int i = 0; i < xs.Length; i++)
    {
        for (int j = 0; j < ys.Length; j++)
        {
            var c = Element($"Column {xNames[i]}{yNames[j]} {levelName}", "Structural Columns", "Concrete 400x400", levelName, structure);
            Property(scene, c, "Dimensions", "Section", "400 x 400 mm");
            Place(c, 1, Transform3d.Translate(new(xs[i], ys[j], z0)), concrete);
            columnsByLevel[l].Add(c.Id);
        }
    }

    double top = z0 + storey - slab;
    string beamLevel = l == 0 ? "Level 2" : "Roof";
    for (int j = 0; j < ys.Length; j++)
    {
        for (int i = 0; i < xs.Length - 1; i++)
        {
            var b = Element($"Beam {xNames[i]}-{xNames[i + 1]}/{yNames[j]} {beamLevel}", "Structural Framing", "Steel I 300", beamLevel, structure);
            Place(b, 2, Transform3d.Translate(new(xs[i], ys[j], top)), steel);
            beamsByLevel[l].Add(b.Id);
            if (l == 0 && i == 1) clashBeams.Add(b);
        }
    }
    var alongY = new Transform3d(Vector3d.UnitY, -Vector3d.UnitX, Vector3d.UnitZ, Vector3d.Zero);
    for (int i = 0; i < xs.Length; i++)
    {
        for (int j = 0; j < ys.Length - 1; j++)
        {
            var b = Element($"Beam {xNames[i]}/{yNames[j]}-{yNames[j + 1]} {beamLevel}", "Structural Framing", "Steel I 300", beamLevel, structure);
            Place(b, 2, alongY.Then(Transform3d.Translate(new(xs[i], ys[j], top))), steel);
            beamsByLevel[l].Add(b.Id);
        }
    }
}

var slab2 = Element("Floor Slab Level 2", "Floors", "Concrete 200", "Level 2", host);
AddBox(scene, slab2, new(-0.5, -0.5, storey - slab), new(18.5, 12.5, storey), concrete);
var roof = Element("Roof Slab", "Roofs", "Concrete 200", "Roof", host);
AddBox(scene, roof, new(-0.5, -0.5, 2 * storey - slab), new(18.5, 12.5, 2 * storey), concrete);

// Element made of two meshes: opaque mullion frame + transparent glazing.
var curtain = Element("Curtain Wall South", "Curtain Walls", "Storefront", "Level 1", host);
Property(scene, curtain, "Materials", "Glazing", "Clear glass 35 %");
AddBox(scene, curtain, new(0, -0.75, 0), new(18, -0.65, 0.1), mullion);
AddBox(scene, curtain, new(0, -0.72, 0.1), new(18, -0.68, 2 * storey), glass);

var duct = Element("Supply Duct SA-1", "Ducts", "Rectangular 600x400", "Level 2", mep);
duct.SourceId = "2xQ$n5SLP5MBLyL442paFx"; // IFC GlobalId style
Property(scene, duct, "Mechanical", "System", "Supply Air");
AddBox(scene, duct, new(8.7, -1, storey - slab - 0.4), new(9.3, 13, storey - slab), ductColor);

// A survey marker pyramid without normals, on an element with nothing but a name, as a 0.2 snapshot's mesh without
// an element now loads.
var marker = new SceneElement { Id = nextId++, ModelId = host, Name = "Survey Marker" };
scene.Elements.Add(marker);
scene.Geometries.Add(new SceneGeometry
{
    Id = scene.Geometries.Count + 1,
    Vertices = [new(-3.3, -3.3, 0), new(-2.7, -3.3, 0), new(-2.7, -2.7, 0), new(-3.3, -2.7, 0), new(-3, -3, 0.8)],
    Indices = [0, 2, 1, 0, 3, 2, 0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4],
});
Place(marker, scene.Geometries.Count, null, new RgbaColor(220, 60, 40));

// Twin columns in front of the building; the second is mirrored (scale -1 along X) and must shade like the first.
var twin = Element("Column Twin", "Structural Columns", "Concrete 400x400", "Level 1", structure);
Place(twin, 1, Transform3d.Translate(new(22, -3, 0)), concrete);
var mirroredTwin = Element("Column Twin Mirrored", "Structural Columns", "Concrete 400x400", "Level 1", structure);
Place(mirroredTwin, 1, new Transform3d(-Vector3d.UnitX, Vector3d.UnitY, Vector3d.UnitZ, new(24, -3, 0)), concrete);

var grids = new SceneGridSystem { ModelId = host, Name = "Structural Grids" };
for (int i = 0; i < xs.Length; i++) grids.Lines.Add(new SceneGridLine { Name = xNames[i], Start = new(xs[i], -2, 0), End = new(xs[i], 14, 0) });
for (int j = 0; j < ys.Length; j++) grids.Lines.Add(new SceneGridLine { Name = yNames[j], Start = new(-2, ys[j], 0), End = new(20, ys[j], 0) });
scene.Grids.Add(grids);

scene.Viewpoints.Add(new SceneViewpoint { Name = "Isometric", Camera = new SceneCamera { Position = new(36, -24, 24), Target = new(9, 6, 3.6) } });
scene.Viewpoints.Add(new SceneViewpoint { Name = "Front", Camera = new SceneCamera { Position = new(9, -40, 3.6), Target = new(9, 6, 3.6) } });
scene.Viewpoints.Add(new SceneViewpoint { Name = "Top", Camera = new SceneCamera { Position = new(9, 6, 50), Target = new(9, 6, 0), Up = Vector3d.UnitY } });
scene.Viewpoints.Add(new SceneViewpoint { Name = "Duct Clash", Camera = new SceneCamera { Position = new(14, -4, 5), Target = new(9, 3, 3.2) } });
scene.Viewpoints.Add(new SceneViewpoint { Name = "Plan", Camera = new SceneCamera { Position = new(9, 6, 40), Target = new(9, 6, 0), Projection = SceneProjection.Orthographic } });

var schedule = new SceneSchedule { Name = "Construction Schedule" };
DateTimeOffset start = new(2026, 3, 2, 8, 0, 0, TimeSpan.Zero);
void Task(string id, string name, int fromDay, int days, IEnumerable<long> ids) => schedule.Tasks.Add(new SceneTask
{
    Id = id, Name = name, PlannedStart = start.AddDays(fromDay), PlannedEnd = start.AddDays(fromDay + days), PlannedCost = 10000m * days,
    ElementIds = [.. ids],
});
Task("T1", "Ground slab", 0, 10, [groundSlab.Id]);
Task("T2", "Columns Level 1", 10, 8, columnsByLevel[0]);
Task("T3", "Beams and slab Level 2", 18, 12, [.. beamsByLevel[0], slab2.Id]);
Task("T4", "Columns Level 2", 30, 8, columnsByLevel[1]);
Task("T5", "Beams and roof slab", 38, 12, [.. beamsByLevel[1], roof.Id]);
Task("T6", "Curtain wall", 50, 10, [curtain.Id]);
Task("T7", "Supply duct", 55, 5, [duct.Id]);
scene.Schedules.Add(schedule);

var clashTest = new SceneClashTest { Name = "Duct vs Structure" };
for (int k = 0; k < clashBeams.Count; k++)
{
    var beam = clashBeams[k];
    clashTest.Clashes.Add(new SceneClashResult
    {
        Id = $"CL{k + 1}", Name = $"Clash {k + 1}", Element1Name = duct.Name, Element2Name = beam.Name,
        // Clash 3 does not report a distance.
        Point = new(9, ys[k], storey - slab - 0.15), Distance = k == 2 ? null : -0.15, Element1Id = duct.Id, Element2Id = beam.Id, Status = SceneClashStatus.New,
    });
}
scene.ClashTests.Add(clashTest);

var empty = new SceneDocument { Title = "Empty Model" };
empty.Models.Add(new SceneModel { Id = 1, Key = "model", Name = empty.Title });
var files = new (string Name, SceneDocument Scene)[] { ("building", scene), ("empty", empty), ("escaping", Escaping()), ("textured", Textured()) };
foreach (var (name, document) in files)
{
    var issues = document.Validate();
    if (issues.Count > 0) throw new InvalidOperationException($"{name}: {string.Join("; ", issues.Select(i => $"{i.Code} {i.Message}"))}");
    JsonViewerExporter.Save(new ViewerDocument(document), Path.Combine(outDir, $"{name}.json"));
}

// Round-trip check: everything the viewer needs must survive JsonViewerImporter.
var back = JsonViewerImporter.Load(Path.Combine(outDir, "building.json")).Scene;
Console.WriteLine($"models {back.Models.Count}, elements {back.Elements.Count}, instances {back.Instances.Count}, geometries {back.Geometries.Count}, " +
    $"levels {back.Levels.Count}, property sets {back.PropertySets.Count}, grid lines {back.Grids.Sum(g => g.Lines.Count)}, viewpoints {back.Viewpoints.Count}, " +
    $"tasks {back.Schedules.Sum(s => s.Tasks.Count)}, task0 elements {back.Schedules[0].Tasks[0].ElementIds.Count}, clashes {back.ClashTests[0].Clashes.Count}, " +
    $"clash0 ids {back.ClashTests[0].Clashes[0].Element1Id}/{back.ClashTests[0].Clashes[0].Element2Id}, validate {back.Validate().Count}");

return 0;

static void Property(SceneDocument scene, SceneElement e, string group, string name, string value)
{
    var set = scene.PropertySets.Find(s => s.Name == group && e.PropertySetIds.Contains(s.Id));
    if (set is null)
    {
        set = new ScenePropertySet { Id = scene.PropertySets.Count + 1, Name = group };
        scene.PropertySets.Add(set);
        e.PropertySetIds.Add(set.Id);
    }
    set.Properties.Add(new SceneProperty { Name = name, Value = SceneValue.FromText(value) });
}

// A box drawn by its own geometry, placed once.
static void AddBox(SceneDocument scene, SceneElement e, Vector3d min, Vector3d max, RgbaColor color)
{
    var (v, i, n) = Box(min, max);
    var geometry = new SceneGeometry { Id = scene.Geometries.Count + 1, Vertices = v, Indices = i, Normals = n };
    scene.Geometries.Add(geometry);
    scene.Instances.Add(new SceneInstance { ElementId = e.Id, GeometryId = geometry.Id, Color = color, Name = e.Name });
}

// Hostile markup in an element name, source id and in a property group, name and value: the viewer must show it as text.
// No clashes, 4D, links or viewpoints, so the panels for them stay hidden.
SceneDocument Escaping()
{
    const string script = "</script><script>window.__xss=2</script>";
    const string sourceId = "\"><svg onload=\"window.__xss=3\">";
    var hostile = new SceneDocument { Title = "Escaping" };
    hostile.Models.Add(new SceneModel { Id = 1, Key = "model", Name = hostile.Title });
    hostile.Levels.Add(new SceneLevel { Id = 1, ModelId = 1, Name = "Level 1" });
    string[] names = ["<img src=x onerror=\"window.__xss=1\">", "Plain Wall", "Plain Slab"];
    for (int k = 0; k < names.Length; k++)
    {
        var e = new SceneElement { Id = 500001 + k, ModelId = 1, Name = names[k], Category = "Walls", TypeName = "Generic 200", LevelId = 1 };
        hostile.Elements.Add(e);
        if (k == 0)
        {
            Property(hostile, e, script, script, script);
            e.SourceId = sourceId;
        }
        else Property(hostile, e, "Identity Data", "Mark", names[k]);
        AddBox(hostile, e, new(k * 3, 0, 0), new(k * 3 + 2, 0.3, 3), concrete);
    }
    return hostile;
}

// A smooth, checker-textured cylinder (cylindrical UVs in metres, 0.5 m per checker repeat) next to an untextured box,
// for the textures display mode and smooth shading.
SceneDocument Textured()
{
    var textured = new SceneDocument { Title = "Textured" };
    textured.Models.Add(new SceneModel { Id = 1, Key = "model", Name = textured.Title });
    textured.Levels.Add(new SceneLevel { Id = 1, ModelId = 1, Name = "Level 1" });
    textured.Textures.Add(Checker());
    textured.Materials.Add(new SceneMaterial { Id = 1, Name = "Checker", Color = concrete, TextureId = 1 });
    const int sides = 48;
    const double radius = 2, height = 3;
    var v = new List<Vector3d>();
    var n = new List<Vector3d>();
    var uv = new List<Vector2d>();
    var idx = new List<int>();
    for (int k = 0; k <= sides; k++)
    {
        double a = k * Math.Tau / sides;
        var side = new Vector3d(Math.Cos(a), Math.Sin(a), 0);
        for (int z = 0; z < 2; z++)
        {
            v.Add(new Vector3d(side.X * radius, side.Y * radius, z * height));
            n.Add(side);
            uv.Add(new Vector2d(a * radius, z * height));
        }
        if (k < sides) idx.AddRange([k * 2, k * 2 + 2, k * 2 + 3, k * 2, k * 2 + 3, k * 2 + 1]);
    }
    var tank = new SceneElement { Id = 600001, ModelId = 1, Name = "Textured Tank", Category = "Equipment", TypeName = "Tank", LevelId = 1 };
    textured.Elements.Add(tank);
    textured.Geometries.Add(new SceneGeometry { Id = 1, Vertices = v, Indices = idx, Normals = n, UVs = uv });
    textured.Instances.Add(new SceneInstance { ElementId = tank.Id, GeometryId = 1, MaterialId = 1, Name = tank.Name });
    var plain = new SceneElement { Id = 600002, ModelId = 1, Name = "Plain Box", Category = "Walls", TypeName = "Generic 200", LevelId = 1 };
    textured.Elements.Add(plain);
    AddBox(textured, plain, new(3, -1, 0), new(5, 1, 2), steel);
    return textured;
}

// 64 x 64 checker of 8 x 8 pixel squares as a 24-bit BMP, 0.5 m per repeat.
static SceneTexture Checker()
{
    const int size = 64, header = 54, pixels = size * size * 3;
    var bmp = new byte[header + pixels];
    bmp[0] = (byte)'B';
    bmp[1] = (byte)'M';
    BitConverter.TryWriteBytes(bmp.AsSpan(2), bmp.Length);
    BitConverter.TryWriteBytes(bmp.AsSpan(10), header);
    BitConverter.TryWriteBytes(bmp.AsSpan(14), 40); // BITMAPINFOHEADER
    BitConverter.TryWriteBytes(bmp.AsSpan(18), size);
    BitConverter.TryWriteBytes(bmp.AsSpan(22), size);
    BitConverter.TryWriteBytes(bmp.AsSpan(26), (short)1);
    BitConverter.TryWriteBytes(bmp.AsSpan(28), (short)24);
    BitConverter.TryWriteBytes(bmp.AsSpan(34), pixels);
    for (int y = 0; y < size; y++)
    {
        for (int x = 0; x < size; x++)
        {
            byte value = ((x / 8) + (y / 8)) % 2 == 0 ? (byte)235 : (byte)60;
            bmp.AsSpan(header + (y * size + x) * 3, 3).Fill(value); // rows of 192 bytes need no padding
        }
    }
    return new SceneTexture { Id = 1, MimeType = "image/bmp", Data = bmp, ScaleX = 0.5, ScaleY = 0.5 };
}

// Axis-aligned box with 4 vertices per face so each face has its own flat normal.
static (Vector3d[] V, int[] I, Vector3d[] N) Box(Vector3d a, Vector3d b)
{
    Vector3d[][] faces =
    [
        [new(b.X, a.Y, a.Z), new(b.X, b.Y, a.Z), new(b.X, b.Y, b.Z), new(b.X, a.Y, b.Z)],
        [new(a.X, b.Y, a.Z), new(a.X, a.Y, a.Z), new(a.X, a.Y, b.Z), new(a.X, b.Y, b.Z)],
        [new(b.X, b.Y, a.Z), new(a.X, b.Y, a.Z), new(a.X, b.Y, b.Z), new(b.X, b.Y, b.Z)],
        [new(a.X, a.Y, a.Z), new(b.X, a.Y, a.Z), new(b.X, a.Y, b.Z), new(a.X, a.Y, b.Z)],
        [new(a.X, a.Y, b.Z), new(b.X, a.Y, b.Z), new(b.X, b.Y, b.Z), new(a.X, b.Y, b.Z)],
        [new(a.X, b.Y, a.Z), new(b.X, b.Y, a.Z), new(b.X, a.Y, a.Z), new(a.X, a.Y, a.Z)],
    ];
    Vector3d[] normals = [Vector3d.UnitX, -Vector3d.UnitX, Vector3d.UnitY, -Vector3d.UnitY, Vector3d.UnitZ, -Vector3d.UnitZ];
    var v = new List<Vector3d>();
    var n = new List<Vector3d>();
    var idx = new List<int>();
    for (int f = 0; f < 6; f++)
    {
        int s = v.Count;
        v.AddRange(faces[f]);
        n.AddRange(Enumerable.Repeat(normals[f], 4));
        idx.AddRange([s, s + 1, s + 2, s, s + 2, s + 3]);
    }
    return ([.. v], [.. idx], [.. n]);
}
