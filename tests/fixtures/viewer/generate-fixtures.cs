// Regenerates building.json and empty.json; run from the repository root: dotnet run tests/fixtures/viewer/generate-fixtures.cs -- tests/fixtures/viewer
#:project ../../../src/IOViewer/IOViewer.csproj
#:property PublishAot=false
#:property JsonSerializerIsReflectionEnabledByDefault=true
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

var doc = new ViewerDocument("Two-Storey Frame Building") { Author = "IOViewer", CreatedAt = "2026-11-11T12:00:00Z" };
var concrete = new RgbaColor(185, 183, 178);
var steel = new RgbaColor(110, 122, 140);
var glass = new RgbaColor(150, 200, 230);
var mullion = new RgbaColor(80, 82, 88);
var ductColor = new RgbaColor(205, 215, 225);

double[] xs = [0, 6, 12, 18];
string[] xNames = ["A", "B", "C", "D"];
double[] ys = [0, 6, 12];
string[] yNames = ["1", "2", "3"];
const double storey = 3.6, slab = 0.2, beamDepth = 0.3, beamWidth = 0.2;

long nextId = 300001;
int nextMesh = 0;
ViewerElement Element(string name, string category, string type, string level, string? link)
{
    var e = new ViewerElement { Id = nextId++, Name = name, Category = category, TypeName = type, Level = level, LinkName = link };
    e.AddProperty("Identity Data", "Mark", name);
    e.AddProperty("Constraints", "Level", level);
    doc.Elements.Add(e);
    return e;
}
void AddMesh(ViewerElement? e, ViewerMesh m)
{
    m.Id = nextMesh;
    m.ElementId = e?.Id;
    e?.MeshIndices.Add(nextMesh);
    doc.Meshes.Add(m);
    nextMesh++;
}

// Shared geometries: column (0.4 x 0.4 x storey-slab, centred in XY) and a 6 m beam along X (centred in Y).
var (cv, ci, cn) = Box(new(-0.2, -0.2, 0), new(0.2, 0.2, storey - slab));
doc.Geometries.Add(new ViewerGeometry { Id = 1, Vertices = cv, Indices = ci, Normals = cn });
var (bv, bi, bn) = Box(new(0, -beamWidth / 2, -beamDepth), new(6, beamWidth / 2, 0));
doc.Geometries.Add(new ViewerGeometry { Id = 2, Vertices = bv, Indices = bi, Normals = bn });

ViewerElement groundSlab = Element("Ground Slab", "Floors", "Concrete 300", "Level 1", null);
AddBox(groundSlab, new(-1, -1, -0.3), new(19, 13, 0), concrete);

var levels = new[] { ("Level 1", 0.0), ("Level 2", storey) };
var columnsByLevel = new List<long>[2];
var beamsByLevel = new List<long>[2];
var clashBeams = new List<ViewerElement>();
for (int l = 0; l < 2; l++)
{
    var (levelName, z0) = levels[l];
    columnsByLevel[l] = [];
    beamsByLevel[l] = [];
    for (int i = 0; i < xs.Length; i++)
    {
        for (int j = 0; j < ys.Length; j++)
        {
            var c = Element($"Column {xNames[i]}{yNames[j]} {levelName}", "Structural Columns", "Concrete 400x400", levelName, "Structure.rvt");
            c.AddProperty("Dimensions", "Section", "400 x 400 mm");
            AddMesh(c, new ViewerMesh { Name = c.Name, GeometryId = 1, Transform = Transform3d.Translate(new(xs[i], ys[j], z0)), Color = concrete });
            columnsByLevel[l].Add(c.Id);
        }
    }

    double top = z0 + storey - slab;
    string beamLevel = l == 0 ? "Level 2" : "Roof";
    for (int j = 0; j < ys.Length; j++)
    {
        for (int i = 0; i < xs.Length - 1; i++)
        {
            var b = Element($"Beam {xNames[i]}-{xNames[i + 1]}/{yNames[j]} {beamLevel}", "Structural Framing", "Steel I 300", beamLevel, "Structure.rvt");
            AddMesh(b, new ViewerMesh { Name = b.Name, GeometryId = 2, Transform = Transform3d.Translate(new(xs[i], ys[j], top)), Color = steel });
            beamsByLevel[l].Add(b.Id);
            if (l == 0 && i == 1) clashBeams.Add(b);
        }
    }
    var alongY = new Transform3d(Vector3d.UnitY, -Vector3d.UnitX, Vector3d.UnitZ, Vector3d.Zero);
    for (int i = 0; i < xs.Length; i++)
    {
        for (int j = 0; j < ys.Length - 1; j++)
        {
            var b = Element($"Beam {xNames[i]}/{yNames[j]}-{yNames[j + 1]} {beamLevel}", "Structural Framing", "Steel I 300", beamLevel, "Structure.rvt");
            AddMesh(b, new ViewerMesh { Name = b.Name, GeometryId = 2, Transform = alongY.Then(Transform3d.Translate(new(xs[i], ys[j], top))), Color = steel });
            beamsByLevel[l].Add(b.Id);
        }
    }
}

var slab2 = Element("Floor Slab Level 2", "Floors", "Concrete 200", "Level 2", null);
AddBox(slab2, new(-0.5, -0.5, storey - slab), new(18.5, 12.5, storey), concrete);
var roof = Element("Roof Slab", "Roofs", "Concrete 200", "Roof", null);
AddBox(roof, new(-0.5, -0.5, 2 * storey - slab), new(18.5, 12.5, 2 * storey), concrete);

// Element made of two meshes: opaque mullion frame + transparent glazing.
var curtain = Element("Curtain Wall South", "Curtain Walls", "Storefront", "Level 1", null);
curtain.AddProperty("Materials", "Glazing", "Clear glass 35 %");
AddBox(curtain, new(0, -0.75, 0), new(18, -0.65, 0.1), mullion);
AddBox(curtain, new(0, -0.72, 0.1), new(18, -0.68, 2 * storey), glass, 0.35);

var duct = Element("Supply Duct SA-1", "Ducts", "Rectangular 600x400", "Level 2", "MEP.rvt");
duct.AddProperty("Mechanical", "System", "Supply Air");
AddBox(duct, new(8.7, -1, storey - slab - 0.4), new(9.3, 13, storey - slab), ductColor);

// Mesh without ElementId and without normals: a survey marker pyramid.
AddMesh(null, new ViewerMesh
{
    Name = "Survey Marker",
    Vertices = [new(-3.3, -3.3, 0), new(-2.7, -3.3, 0), new(-2.7, -2.7, 0), new(-3.3, -2.7, 0), new(-3, -3, 0.8)],
    Indices = [0, 2, 1, 0, 3, 2, 0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0, 4],
    Color = new RgbaColor(220, 60, 40)
});

var grids = new ViewerGridSystem { Name = "Structural Grids" };
for (int i = 0; i < xs.Length; i++) grids.Lines.Add(new ViewerGridLine(xNames[i], new(xs[i], -2, 0), new(xs[i], 14, 0)));
for (int j = 0; j < ys.Length; j++) grids.Lines.Add(new ViewerGridLine(yNames[j], new(-2, ys[j], 0), new(20, ys[j], 0)));
doc.Grids = grids;

doc.Viewpoints.Add(new ViewerViewpoint("Isometric", new ViewerCamera { Position = new(36, -24, 24), Target = new(9, 6, 3.6) }));
doc.Viewpoints.Add(new ViewerViewpoint("Front", new ViewerCamera { Position = new(9, -40, 3.6), Target = new(9, 6, 3.6) }));
doc.Viewpoints.Add(new ViewerViewpoint("Top", new ViewerCamera { Position = new(9, 6, 50), Target = new(9, 6, 0), Up = Vector3d.UnitY }));
doc.Viewpoints.Add(new ViewerViewpoint("Duct Clash", new ViewerCamera { Position = new(14, -4, 5), Target = new(9, 3, 3.2) }));

var schedule = new ViewerTimeLinerSchedule("Construction Schedule");
DateTimeOffset start = new(2026, 3, 2, 8, 0, 0, TimeSpan.Zero);
void Task(string id, string name, int fromDay, int days, IEnumerable<long> ids)
{
    var t = new ViewerTimeLinerTask(id, name, start.AddDays(fromDay), start.AddDays(fromDay + days)) { PlannedCost = 10000m * days };
    t.AttachedElementIds.AddRange(ids);
    schedule.Tasks.Add(t);
}
Task("T1", "Ground slab", 0, 10, [groundSlab.Id]);
Task("T2", "Columns Level 1", 10, 8, columnsByLevel[0]);
Task("T3", "Beams and slab Level 2", 18, 12, [.. beamsByLevel[0], slab2.Id]);
Task("T4", "Columns Level 2", 30, 8, columnsByLevel[1]);
Task("T5", "Beams and roof slab", 38, 12, [.. beamsByLevel[1], roof.Id]);
Task("T6", "Curtain wall", 50, 10, [curtain.Id]);
Task("T7", "Supply duct", 55, 5, [duct.Id]);
doc.TimeLiner = schedule;

var clashTest = new ViewerClashTest("Duct vs Structure");
for (int k = 0; k < clashBeams.Count; k++)
{
    var beam = clashBeams[k];
    clashTest.Clashes.Add(new ViewerClashResult($"CL{k + 1}", $"Clash {k + 1}", duct.Name, beam.Name,
        new(9, ys[k], storey - slab - 0.15), -0.15)
    { Element1Id = duct.Id, Element2Id = beam.Id, Status = ViewerClashStatus.New });
}
doc.ClashTests.Add(clashTest);

doc.LinkedFiles.Add(new ViewerLinkedFile("Structure", "Structure.rvt"));
doc.LinkedFiles.Add(new ViewerLinkedFile("MEP", "MEP.rvt"));

string buildingPath = Path.Combine(outDir, "building.json");
JsonViewerExporter.Save(doc, buildingPath);
JsonViewerExporter.Save(new ViewerDocument("Empty Model"), Path.Combine(outDir, "empty.json"));

// Round-trip check: everything the viewer needs must survive JsonViewerImporter.
var back = JsonViewerImporter.Load(buildingPath);
Console.WriteLine($"elements {back.Elements.Count}, meshes {back.Meshes.Count}, geometries {back.Geometries.Count}, " +
    $"grid lines {back.Grids?.Lines.Count}, viewpoints {back.Viewpoints.Count}, tasks {back.TimeLiner?.Tasks.Count}, " +
    $"task0 attached {back.TimeLiner?.Tasks.FirstOrDefault()?.AttachedElementIds.Count}, clashes {back.ClashTests[0].Clashes.Count}, clash0 ids {back.ClashTests[0].Clashes.FirstOrDefault()?.Element1Id}/{back.ClashTests[0].Clashes.FirstOrDefault()?.Element2Id}, " +
    $"linked {back.LinkedFiles.Count}, props0 {back.Elements[0].Properties.Count}, no-element meshes {back.Meshes.Count(m => m.ElementId is null)}");

return 0;

void AddBox(ViewerElement e, Vector3d min, Vector3d max, RgbaColor color, double opacity = 1)
{
    var (v, i, n) = Box(min, max);
    AddMesh(e, new ViewerMesh { Name = e.Name, Vertices = v, Indices = i, Normals = n, Color = color, Opacity = opacity });
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
