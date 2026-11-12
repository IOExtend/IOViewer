# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and the project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html); versions before 1.0 may change the
API between minor releases.

## [Unreleased]

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
  vertices, instead of writing broken geometry. `Save` checks the data before it opens the file, so a failed export
  leaves an existing file as it was, and the CLI reports such input with exit code 3.
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
