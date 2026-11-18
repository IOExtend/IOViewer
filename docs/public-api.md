# Public API Overview

`IOViewer` provides classes and methods for creating, manipulating, and exporting 3D BIM/CAD models into self-contained HTML/WebGL viewers and structured JSON.

## Key Types

### Scene model (`IOScene` package)

The model data is the IOScene scene model, referenced by the `IOViewer` package. Its contract
([docs/contract.md](https://github.com/IOExtend/IOScene/blob/main/docs/contract.md)) defines every type; in short:

- `SceneDocument`: models, elements, instances, geometries, materials, textures, property sets, levels, grids,
  viewpoints, 4D schedules and clash tests, in metres with Z up. `AddMesh` adds one element drawn by one mesh,
  `ComputeBounds()` returns the box of what is placed, and `Validate()` lists what breaks the contract.
- `SceneModel`: one source file or linked file, with a unique `Key`. IOViewer shows the first model as the host and the
  others as linked files.
- `SceneElement`: one element (Revit element, IFC product, Navisworks node) with name, category, type, level, property
  sets and an optional `SourceId`, its id in the source format, which the viewer shows and finds in the tree search.
- `SceneInstance`: places a `SceneGeometry` for an element, with an optional `Transform3d`, material and colour. The
  colour alpha is the only opacity.
- `SceneGeometry`: vertices, indices, normals and UVs with a topology. The viewer draws `Triangles` and skips the rest.
- `SceneMaterial`, `SceneTexture`: colour, roughness, metalness and an optional texture with its real-world size in
  metres, which scales the UVs.
- `SceneViewpoint`, `SceneGridSystem`, `SceneSchedule` (tasks with `ElementIds`) and `SceneClashTest` (results with
  `Element1Id` and `Element2Id`; without them the viewer matches an element by name only when the name is unique).

### Viewer document (`IOViewer.Model`)

- `ViewerDocument` holds the scene, startup clipping, and the model keys hidden at start in `HiddenModelKeys`.
  `ShowHostInModelList` adds the first model to the Linked files controls so it can be hidden independently.
  `ViewpointStates` adds optional state to saved cameras. `BcfTopics` holds imported summaries and viewpoints
  with cameras already in scene coordinates. `Title` reads and writes `Scene.Title`.
- `ViewerSectionPlane`: Cutting plane defined by axis or custom normal. `Offset` is the signed distance in metres
  from the scene origin along its unit normal. By default the plane cuts the side the normal points to. `Inverted`
  cuts the opposite side.
- `ViewerSectionBox`: 6-sided clipping volume in scene coordinates. `Inverted` cuts inside the box.
  Exported HTML opens in box mode when the box is enabled, or in planes mode with the first six enabled planes.
  Both are available if the document supplies both. Editing handles start hidden.

#### Saved viewpoint state

Use a unique `SceneViewpoint.Id` and the same key in `ViewerDocument.ViewpointStates`. A `ViewerViewpointState` can
restore clipping, element visibility and linked-file checkboxes. The view list and the tour apply the same state.
`SelectedElementIds` replaces the selection when supplied. `VisibleElementIds` isolates a set of elements
and is exclusive with `HiddenElementIds`. All three lists use scene element IDs.

```csharp
doc.Scene.Viewpoints.Add(new SceneViewpoint
{
    Id = "mep-review",
    Name = "MEP review",
    Camera = new SceneCamera { Position = new(8, -12, 6), Target = new(0, 0, 2) },
});
doc.ViewpointStates["mep-review"] = new ViewerViewpointState
{
    SectionPlanes = [new ViewerSectionPlane(ViewerSectionAxis.Z, 4)],
    HiddenElementIds = [42],
    HiddenModelKeys = ["structure.rvt"],
};
```

IDs refer to `SceneElement.Id`, and linked models use `SceneModel.Key`. The example assumes element `42` and linked
model `structure.rvt` already exist in the scene. Each supplied list replaces its layer. Use an empty list to clear
its hides, or `null` to preserve the current layer. Use `SectionPlanes = []` with no box to clear clipping, or leave
both clipping properties null to keep it. An enabled section box takes priority over the planes. The 4D schedule
continues to control its own layer. Viewer JSON keeps the state, and old camera-only views preserve current clipping
and visibility.

### Exporters (`IOViewer.Exporters`)

- `HtmlViewerExporter`: Generates self-contained, offline-ready 3D HTML viewers using packed Base64 binary buffers. Takes a `ViewerDocument` or a `SceneDocument`. The page is written to the output stream as it is produced.
  Embedded element IDs and their clash and schedule references use decimal strings outside JavaScript's safe integer range.
- `HtmlViewerOptions`: Title, which data to include (properties, viewpoints, grids, 4D schedule, clashes), the initial display mode (`InitialWireframe`, `InitialWhiteMode`), and `MaxMeshVertices`, which is unlimited by default; when a lower limit leaves meshes out, the viewer shows how many were written.
- `JsonViewerExporter`: Writes a `ViewerDocument` as viewer JSON (`"Kind": "ioviewer"`, `"Format": 2`). A scene alone is written with IOScene's `SceneJson`.

### Compute and export clash results

Add [IOCoord](https://www.nuget.org/packages/IOCoord/0.1.0-preview.1) to the application alongside `IOViewer`. The
queries take an IOScene document and two sets of scene element IDs and return a `SceneClashTest`.

```csharp
using IOCoord;
using IOScene;
using IOViewer.Exporters;

var scene = SceneJson.Load("building.scene.json");
long[] walls = scene.Elements.Where(e => e.Category == "Walls").Select(e => e.Id).ToArray();
long[] floors = scene.Elements.Where(e => e.Category == "Floors").Select(e => e.Id).ToArray();

scene.ClashTests.Add(SceneClash.FindHardClashes(scene, walls, floors));
scene.ClashTests.Add(SceneClash.FindSurfaceClearances(scene, walls, floors, maxClearanceMetres: 0.05));
HtmlViewerExporter.Save(scene, "clashes.html");
```

### Importers (`IOViewer.Importers`)

- `GlbViewerImporter`: Reads binary glTF 2.0 (`.glb`) files into a `ViewerDocument` with one model. Each glTF mesh primitive becomes one `SceneGeometry`, and each node that uses it a `SceneInstance` per primitive with the node's world transform, converted from glTF's Y-up to the viewer's Z-up. Each such node also becomes a `SceneElement` (category `GLB`, named after the node, else the mesh) that all its instances belong to. A material's base colour factor is linear in glTF and becomes an sRGB colour with the same alpha. A node hierarchy that is not a tree (a node referenced twice or a cycle) is rejected with `InvalidDataException`.
- `ObjViewerImporter`: Reads Wavefront OBJ geometry into a `ViewerDocument` as is, without changing the up axis. Each object or group (`o`/`g`) becomes one `SceneGeometry` holding only the vertices its faces use, one `SceneInstance` and one `SceneElement` (category `OBJ`) with its name. Material (`.mtl`) files are not read.
- `JsonViewerImporter`: Reads viewer JSON (format 2), IOScene scene files and IOViewer 0.1/0.2 snapshots (files without `Kind`) into a `ViewerDocument`. A 0.1/0.2 mesh without an element gets an element of its own. A newer format or an unknown kind is rejected with `InvalidDataException`.
