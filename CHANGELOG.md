# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and the project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html); versions before 1.0 may change the
API between minor releases.

## [Unreleased]

Version 0.3.0 builds the viewer on the scene model of the [IOScene](https://github.com/IOExtend/IOScene) package
(`IOScene` `[0.1.0-preview.1, 0.2.0-0)`, a new dependency of the `IOViewer` package). This is a breaking change of the
library API. What breaks for existing users:

1. The model types move to namespace `IOScene` with `Scene*` names, `ViewerClash*` included; `doc.Elements` becomes
   `doc.Scene.Elements`, and the members in the table below change.
2. The documented quick start (a `ViewerMesh` with its own vertices) becomes `SceneDocument.AddMesh`.
3. Written JSON has a new shape. IOViewer 0.2.0 reads a 0.3.0 file as an empty document with exit code 0, because it
   ignores unknown members.
4. A page regenerated from an old snapshot shows each mesh without an element as an element (in the element count, the
   tree and hide).

Not broken: loading 0.1/0.2 JSON, existing HTML pages, the `ioviewer` arguments, the importer to exporter pipeline
(`GlbViewerImporter` to `HtmlViewerExporter`, `ViewerDocument.Title`) and the one-package install (`IOScene` comes with
the `IOViewer` package). The `IOViewer.Cli` tool only gains inputs.

### Migration from 0.2.0

| 0.2.0 (`IOViewer.Model`) | 0.3.0 |
|---|---|
| `Vector2d`, `Vector3d`, `BoundingBox3d`, `Transform3d`, `RgbaColor` | the same names in namespace `IOScene` |
| `Vector4d`, `Quaterniond` | removed, no replacement |
| `ViewerDocument.Elements`, `Meshes`, `Geometries`, `Materials`, `Textures`, `Viewpoints`, `ClashTests` | `ViewerDocument.Scene.Elements`, `Instances`, `Geometries`, `Materials`, `Textures`, `Viewpoints`, `ClashTests` |
| `ViewerDocument.SourcePath`, `Author`, `CreatedAt`, `Application` | `Scene.Models[0].Path`, `Author`, `CreatedAt`, `Application` |
| `ViewerDocument.Grids` (one grid system) | `Scene.Grids` (a list of `SceneGridSystem`, each with `ModelId`) |
| `ViewerDocument.TimeLiner` | `Scene.Schedules` (a list of `SceneSchedule`) |
| `ViewerDocument.LinkedFiles` (`ViewerLinkedFile` `Name`, `Path`, `Visible`) | `Scene.Models` (`SceneModel` with a unique `Key`, `Name`, `Path`); `Visible = false` is the model's key in `ViewerDocument.HiddenModelKeys` |
| `ViewerDocument.BoundingBox`, `ComputeBoundingBox()` | `Scene.ComputeBounds()` |
| `ViewerDocument.Title` (default `3D BIM Model`) | kept; it reads and writes `Scene.Title` (default empty) |
| `ViewerDocument.SectionPlanes`, `SectionBox`, `ViewerSectionPlane`, `ViewerSectionBox` | kept; their `Vector3d` is `IOScene.Vector3d` |
| - | `ViewerDocument.Scene`, `ViewerDocument.HiddenModelKeys`, `new ViewerDocument(SceneDocument)` |
| `ViewerElement` | `SceneElement` |
| `ViewerElement.LinkName` | `SceneElement.ModelId`, the id of a `SceneModel` |
| `ViewerElement.Level` (a string) | `SceneElement.LevelId`, the id of a `SceneLevel` in `Scene.Levels` |
| `ViewerElement.Properties`, `AddProperty(group, name, value)` | `ScenePropertySet` in `Scene.PropertySets` (`Name` = group), referenced by `SceneElement.PropertySetIds`; each `SceneProperty` has a `SceneValue` (`SceneValue.FromText` for a string) |
| `ViewerElement.MeshIndices`, `ViewerElement.BoundingBox` | removed; `SceneInstance.ElementId` links an element to its geometry |
| `ViewerMesh` | `SceneInstance`, which places a `SceneGeometry` for an element |
| `ViewerMesh.Vertices`, `Indices`, `Normals`, `UVs` (own geometry) | a `SceneGeometry` placed by one instance; `SceneDocument.AddMesh` adds both and the element |
| `ViewerMesh.ElementId` (optional) | `SceneInstance.ElementId` (required: every instance belongs to an element) |
| `ViewerMesh.GeometryId`, `Transform`, `MaterialId`, `Name` | `SceneInstance.GeometryId`, `Transform`, `MaterialId`, `Name` |
| `ViewerMesh.Color`, `ViewerMesh.Opacity`, `ViewerMaterial.Opacity` | the alpha of `SceneInstance.Color` or `SceneMaterial.Color`, the only opacity |
| `ViewerMesh.TextureIndex`, `ViewerMaterial.TextureIndex` | `SceneMaterial.TextureId`, the id of a `SceneTexture` |
| `ViewerMesh.Id`, `BoundingBox`, `ComputeBoundingBox()` | removed |
| `ViewerGeometry` | `SceneGeometry`, with `Topology` (`Triangles`, `Lines`, `Points`); empty `Indices` means non-indexed |
| `ViewerMaterial` | `SceneMaterial` |
| `ViewerTexture` (`Base64Data` string) | `SceneTexture` (`Data` bytes) |
| `ViewerGridSystem`, `ViewerGridLine` | `SceneGridSystem`, `SceneGridLine` |
| `ViewerViewpoint`, `ViewerCamera`, `ViewerProjection` | `SceneViewpoint`, `SceneCamera`, `SceneProjection` |
| `ViewerTimeLinerSchedule` | `SceneSchedule`; `GetOverallStart()` and `GetOverallEnd()` are removed |
| `ViewerTimeLinerTask`, `ViewerTimeLinerTaskType` | `SceneTask`, `SceneTaskType` |
| `ViewerTimeLinerTask.AttachedElementIds` | `SceneTask.ElementIds` |
| `ViewerTimeLinerTask.AttachedSetName` | removed |
| `ViewerClashTest`, `ViewerClashResult`, `ViewerClashStatus` | `SceneClashTest`, `SceneClashResult`, `SceneClashStatus` |
| constructors with parameters (`new ViewerViewpoint(name, camera)` and others) | object initializers |

### Added
- `HtmlViewerExporter.Save`, `Export` and `ExportToString` take a `SceneDocument` too.
- `JsonViewerImporter` and the `ioviewer` tool read three kinds of JSON: viewer JSON (`"Kind": "ioviewer"`), IOScene
  scene files (`"Kind": "ioscene"`) and IOViewer 0.1/0.2 snapshots (no `Kind`). In a snapshot, meshes that share an
  `ElementId` no element has get one element with that id, and each other mesh without an element gets one of its own.
  A newer format, a missing or wrong `Format` and an unknown kind are rejected with `InvalidDataException`.
- The HTML viewer shows `SceneElement.SourceId`, the element's id in its source format (such as a Revit UniqueId or an
  IFC GlobalId), as its own row in the properties panel ("Source ID" / "ID источника"), and the model tree search finds
  it. It is written to the page's element list only when set.

### Changed
- `JsonViewerExporter` writes viewer JSON format 2: `{ "Kind": "ioviewer", "Format": 2, "Scene", "SectionPlanes",
  "SectionBox", "HiddenModelKeys" }`, with the scene in the encoding of IOScene's `SceneJson`.
- `GlbViewerImporter` and `ObjViewerImporter` return documents whose scene has one model and passes
  `SceneDocument.Validate()`.
- The viewer draws triangles only: instances of line or point geometry are skipped, and the `ioviewer` tool prints a
  warning with their number.
- Opacity is a colour alpha byte, so an opacity that is not a multiple of 1/255 is rounded (0.35 becomes 89/255).
- In an IOViewer 0.1/0.2 snapshot, an element `LinkName` that matches no linked file becomes a model of the scene, so
  a page made from the snapshot lists it in the linked files panel, where its elements can be hidden.
- The documentation states the model's units and axes: all coordinates and lengths are in metres, with Z up.

## [0.2.0] - 2026-11-12

### Fixed
- `JsonViewerImporter` keeps grid lines, 4D tasks with their attached element ids and child tasks, clash results,
  element properties and element mesh indices; they were silently dropped on load.
- The `IOViewer` package now includes the XML documentation file, so existing API comments show in IntelliSense.
- The release workflow runs only for version tags again, fails on any `gh release` error and no longer overwrites assets of an existing release.
- `tools/pack-release.ps1` fails when creating the source archive fails.
- Documentation no longer claims `.mtl` material support or mesh simplification, neither of which exists.
- The logo on the documentation site no longer covers half of the page; it is sized to the navigation bar.
- `GlbViewerImporter` and `ObjViewerImporter` create elements: one `ViewerElement` per GLB node that draws a mesh
  (category `GLB`) and per OBJ object or group (category `OBJ`), so converted models have a model tree and can be
  selected, hidden and isolated. Each OBJ mesh keeps only the vertices its faces use instead of every vertex read so
  far, and a face that references a vertex not yet read throws `InvalidDataException` on load.
- A document without elements (built through the API or loaded from older JSON) can still be listed, selected, hidden
  and isolated in the HTML viewer: meshes that share an `ElementId` appear as one element with that id, which 4D tasks
  and clashes match, and each other mesh appears on its own with its mesh id and name, as in 0.1.0. The document itself
  is not changed.

### Added
- A new HTML viewer built on three.js 0.186.1, embedded in the page, which still works offline without network requests:
  - floating panels (model tree with search, properties, views, sections, clashes, 4D, linked files), a toolbar with
    labelled groups, a status bar with selected and total counts, and a context menu;
  - Navisworks-style mouse: orbit around the point under the cursor, pan with the middle or right button, zoom to the
    cursor, Ctrl+click, window (left to right) and crossing (right to left) box selection; hotkeys H, I, Shift+H, F, Esc;
  - a view cube drawn from the camera orientation, with face clicks, 90° arrows and a home button;
  - up to six section planes moved and rotated with an in-scene gizmo, or a section box that keeps or cuts its inside,
    with face handles, a centre handle and a box around the selection;
  - distance measurement, display modes (materials, textures, white, wireframe), grid lines, global opacity,
    perspective or orthographic camera and fullscreen;
  - saved viewpoints with a tour, a clash list that flies to the clash and selects both elements, a 4D schedule player
    and linked-file visibility;
  - Russian or English interface, chosen from the browser language;
  - a message instead of a blank page when the browser has no WebGL 2, the model data cannot be read, the graphics
    context is lost or the model has more objects than the GPU can address.
- Shared geometry: `ViewerDocument.Geometries`, `ViewerGeometry`, `ViewerMesh.GeometryId`, `ViewerMesh.Transform` and
  the `Transform3d` affine transform. The HTML exporter writes each shared geometry once and also writes meshes that
  are exact translated copies of each other once.
- `ViewerClashResult.Element1Id` and `Element2Id`. The viewer selects clashing elements by Id, and by name only when the
  name is unique.
- The HTML exporter writes the projection of saved viewpoints, so orthographic viewpoints open orthographic.
- `THIRD-PARTY-NOTICES.md` with the three.js license, included in the NuGet packages and the release archives.
- A CI job for the viewer: it rebuilds the bundle, checks that the committed `dist/viewer.js` matches the sources and
  runs the unit and Playwright end-to-end tests. Dependabot also updates the viewer's npm packages.
- Links to the DeepWiki overview of the repository in the README and on the documentation site.

### Changed
- `GlbViewerImporter` keeps node transforms and shared meshes (one `ViewerGeometry` per mesh primitive, one
  `ViewerMesh` per node that uses it) and converts glTF's Y-up to the viewer's Z-up, so GLB models no longer lie on
  their side. A node hierarchy that is not a tree (a node referenced twice, or a cycle) now throws
  `InvalidDataException`.
- `HtmlViewerExporter` throws `InvalidDataException` for indices outside a mesh's or geometry's vertices, a
  `GeometryId` that is not in the document, a duplicate geometry id or a mesh with both a `GeometryId` and its own
  vertices, instead of writing broken geometry. `Save` checks these references before it opens the file, so reference
  validation failures leave an existing file as it was, and the CLI reports such input with exit code 3.
- `HtmlViewerOptions.MaxMeshVertices` defaults to no limit (was 5,000,000) and no longer cuts the model silently: when a
  lower limit leaves meshes out, the viewer shows a banner with the number of meshes written.
- The HTML payload uses format 3: one base64 binary block, positions quantized to 16-bit steps of 2⁻¹⁰ m (error at most
  0.49 mm, 0.85 mm for rotated shared geometry) and octahedral 16-bit normals. Geometry larger than about 64 m, and
  shared geometry that any instance scales up, stays 32-bit float. For a real 746 MB IFC water-supply model (via GLB)
  the page is 44.4 MB, about the size 0.1.0 wrote (44.1 MB) although it now also carries normals; with
  32-bit float positions and normals it would be 57.5 MB. The HTML is written to the output stream as it is produced.
- The viewer merges geometry into spatial chunks per material and keeps per-object state (hidden, selected, tint) in a
  texture, so hide, isolate, selection and 4D colouring never rebuild geometry. When merged data would exceed
  384 MiB, repeated shapes are drawn as instanced copies in spatially bounded cells instead.
- Measured on an integrated 2-CU AMD GPU: a model of 200,000 elements and 19.2 million triangles opens in about 1.3 s,
  orbits at 30 fps at full detail (60 fps on an RTX 4080), draws a full frame in 30.3 ms and shows a click, hide or
  show all in about 52 ms, using about 327 MB of GPU memory. A model of 1,000,000 elements opens in about 2.2 s, draws
  a full frame in 0.21 s and uses about 88 MB of GPU memory; it orbits at 20 fps (95th percentile), picking an object
  takes about 22 ms and a still frame costs about 23 ms of CPU time.
- Transparent objects are sorted back to front per chunk or cell, not per object.
- Package descriptions and documentation say "no external dependencies, works offline" instead of "zero-dependency".
- Tests run on both .NET 8 and .NET 10.
- `global.json`, CI workflows and repository settings follow the shared IOExtend conventions: SDK 10.0.100 without prerelease, NuGet vulnerability audit, Dependabot, LF line endings, issue and pull request templates.
- Copyright holder is `mahach666` in the license, package metadata and README.
- README and documentation state that IOViewer is not affiliated with Autodesk.
- `SECURITY.md` and `CONTRIBUTING.md` describe supported versions, security scope, development setup and the clean-room policy.
- `CONTRIBUTING.md` describes the viewer toolchain (Node.js 24, `npm ci`, `npm run build`, `npm test`, `npm run e2e`,
  manual `npm run perf`).

### Removed
- The turntable (automatic 360° rotation) of the old viewer.
- The previous hand-written WebGL viewer template, replaced by the three.js viewer.

### Known limitations
- `HtmlViewerExporter.Save` can truncate an existing output file before rejecting NaN or infinity in coordinates or
  metadata. Output replacement is not atomic.

## [0.1.0] - 2026-11-11

### Initial Release
- **Pure Managed 3D BIM & CAD Viewer Library (`IOViewer`)**:
  - Independent intermediate BIM/CAD document representation (`ViewerDocument`, `ViewerElement`, `ViewerMesh`, `ViewerMaterial`, `ViewerTexture`).
  - Standalone, zero-dependency self-contained interactive 3D WebGL HTML Viewer exporter (`HtmlViewerExporter`).
  - Packed binary Base64 geometry encoding (`Float32Array` positions and `Uint32Array`/`Uint16Array` indices) for ~3x payload reduction over JSON.
  - Relative-To-Center (RTC) coordinate shifting to eliminate WebGL 32-bit floating point precision jitter on large georeferenced coordinates.
  - Interactive 3D **ViewCube** with orientation faces and directional navigation arrows.
  - **Sectioning Suite**:
    - Arbitrary section planes with interactive in-scene 3D normal drag gizmo manipulator and direction flip.
    - 6-sided Section Box (bounding box volume, interactive scaling slider, fit-to-selection, and invert clipping mode).
  - **Display Modes**: Material colors with opacity, Diffuse Textures with real-world UV box projection, White/Clay architectural model, Wireframe, and global scene opacity slider.
  - **BIM Data Hierarchy & Navigation**: Category tree with element counts, Linked files panel, instant search with autocomplete and camera focus, properties inspector panel, and selection actions (Isolate, Hide, Show All).
  - **Coordination & Spatial Tools**: 3D spatial grids projection, interactive 3D point-to-point measurement, 4D TimeLiner schedule simulation player with status coloring, and clash detection inspection.
  - **Camera Animations**: Cubic Ease-In-Out transitions, Turntable 360° presentation orbit, and Saved Viewpoints Walkthrough Tour player.
- **File Format Importers**:
  - `GlbViewerImporter`: Load binary glTF 2.0 models (`.glb`) directly into `ViewerDocument`.
  - `ObjViewerImporter`: Load Wavefront OBJ models (`.obj`) into `ViewerDocument`.
  - `JsonViewerImporter`: Load structured JSON model snapshots into `ViewerDocument`.
- **Command Line Interface (`ioviewer`)**:
  - Convert GLB, OBJ, or JSON into self-contained HTML viewers.
  - Optional built-in HTTP preview server (`--serve`).
