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

- `ViewerDocument`: a `Scene` plus what only the viewer uses: `SectionPlanes`, `SectionBox` and `HiddenModelKeys`, the
  keys of the linked models hidden at start. `Title` reads and writes `Scene.Title`.
- `ViewerSectionPlane`: Cutting plane defined by axis or normal vector with offset and flip direction.
- `ViewerSectionBox`: 6-sided 3D clipping volume. Section planes and boxes are kept in viewer JSON; the HTML viewer does not apply them when it opens.

### Exporters (`IOViewer.Exporters`)

- `HtmlViewerExporter`: Generates self-contained, offline-ready 3D HTML viewers using packed Base64 binary buffers. Takes a `ViewerDocument` or a `SceneDocument`. The page is written to the output stream as it is produced.
- `HtmlViewerOptions`: Title, which data to include (properties, viewpoints, grids, 4D schedule, clashes), the initial display mode (`InitialWireframe`, `InitialWhiteMode`), and `MaxMeshVertices`, which is unlimited by default; when a lower limit leaves meshes out, the viewer shows how many were written.
- `JsonViewerExporter`: Writes a `ViewerDocument` as viewer JSON (`"Kind": "ioviewer"`, `"Format": 2`). A scene alone is written with IOScene's `SceneJson`.

### Importers (`IOViewer.Importers`)

- `GlbViewerImporter`: Reads binary glTF 2.0 (`.glb`) files into a `ViewerDocument` with one model. Each glTF mesh primitive becomes one `SceneGeometry`, and each node that uses it a `SceneInstance` per primitive with the node's world transform, converted from glTF's Y-up to the viewer's Z-up. Each such node also becomes a `SceneElement` (category `GLB`, named after the node, else the mesh) that all its instances belong to. A material's base colour factor is linear in glTF and becomes an sRGB colour with the same alpha. A node hierarchy that is not a tree (a node referenced twice or a cycle) is rejected with `InvalidDataException`.
- `ObjViewerImporter`: Reads Wavefront OBJ geometry into a `ViewerDocument` as is, without changing the up axis. Each object or group (`o`/`g`) becomes one `SceneGeometry` holding only the vertices its faces use, one `SceneInstance` and one `SceneElement` (category `OBJ`) with its name. Material (`.mtl`) files are not read.
- `JsonViewerImporter`: Reads viewer JSON (format 2), IOScene scene files and IOViewer 0.1/0.2 snapshots (files without `Kind`) into a `ViewerDocument`. A 0.1/0.2 mesh without an element gets an element of its own. A newer format or an unknown kind is rejected with `InvalidDataException`.
