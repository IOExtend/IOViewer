<p align="center">
  <img src="docs/images/ioviewer-banner.png" alt="IOViewer" width="640">
</p>

# IOViewer

[![Docs](https://img.shields.io/badge/Docs-Online-3B82F6?style=flat-square&logo=github)](https://ioextend.github.io/IOViewer/)
[![NuGet](https://img.shields.io/nuget/v/IOViewer?style=flat-square&color=3B82F6&logo=nuget)](https://www.nuget.org/packages/IOViewer)
[![Release](https://img.shields.io/github/v/release/IOExtend/IOViewer?style=flat-square&color=3B82F6)](https://github.com/IOExtend/IOViewer/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/.NET-8.0%20%7C%2010.0-512BD4?style=flat-square&logo=dotnet)](https://dotnet.microsoft.com/)

IOViewer is a fast, 100% managed .NET library and command line tool that generates standalone interactive 3D WebGL / HTML BIM & CAD model viewers from code, glTF/GLB, Wavefront OBJ, or JSON. Builds of the `ioviewer` CLI from this repository also read IFC, Revit and Navisworks cache files (`.nwc`) through `IfcIO.Scene`, `RvtIO.Scene` and `NwcIO.Scene`. The IOViewer library accepts the `SceneDocument` these adapters produce and depends on [IOScene](https://github.com/IOExtend/IOScene) for the scene model.

The generated HTML is a single file with no external dependencies that works offline: it opens from disk (`file://`) in a current browser with WebGL 2 and makes no network requests. The viewer is built on [three.js](https://threejs.org/), which is embedded in the file (see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)).

Built clean-room under the [IOExtend](https://github.com/IOExtend) organization.

## What it does

- Writes one self-contained HTML file per model; the viewer, its styles and the model data are all inlined.
- Stores geometry once per shape: instances can share a `SceneGeometry` placed by a `Transform3d`, and the exporter also finds geometries that are exact translated copies of each other.
- Packs geometry compactly: positions quantized to 16-bit steps of 2⁻¹⁰ m (error at most 0.49 mm, 0.85 mm for rotated shared geometry; geometry larger than about 64 m, or shared geometry that an instance scales up, stays 32-bit float), octahedral 16-bit normals, 16- or 32-bit indices, all in one base64 block.
- Shifts coordinates relative to the model centre (RTC), so georeferenced models with coordinates around 10⁶ m do not jitter.
- Draws large models with few draw calls: geometry is merged into spatial chunks per material (very large models draw their repeated shapes as instanced copies instead), and hiding, selection and colouring are per-object data, so they never rebuild geometry.
- Viewer interface in Russian or English, chosen from the browser language:
  - model tree with search and filters by source model, level and category, a properties panel and a selected/total counter;
  - toolbar with labelled groups: navigation, sections, measure, display and view;
  - context menu: properties, hide, isolate, show all, zoom to object, section box around the object, copy Id;
  - view cube that follows the camera exactly, with face clicks, 90° arrows and a home button;
  - section planes (up to six, moved and rotated with an in-scene gizmo) or a section box (keep inside or cut inside, face handles, move by the centre, box around the selection);
  - point-to-point distance measurement previews the point under the cursor and snaps to visible vertices, edge midpoints and edges within eight screen pixels;
  - display modes (materials, textures, white, wireframe), viewport background color, grid lines and a global opacity slider;
  - saved viewpoints with a viewpoint tour, clash results, a 4D schedule player and linked-file visibility, each shown only when the document has that data.
- Imports binary glTF 2.0 (`.glb`), Wavefront OBJ (`.obj`), and JSON: viewer JSON, IOScene scene files and IOViewer 0.1/0.2 snapshots.

### Mouse and keyboard

| Input | Action |
| --- | --- |
| Left click | Select the object under the cursor; click on empty space clears the selection |
| Ctrl + left click | Add or remove an object from the selection |
| Left drag | Orbit around the point under the cursor (the centre of the visible model over empty space) |
| Shift + left drag | Box select: left to right selects objects fully inside, right to left selects objects the box touches |
| Middle or right drag | Pan |
| Wheel | Zoom towards the cursor |
| Right click | Context menu |
| Ctrl / Cmd + click or Space in the model tree | Toggle an element or all elements in a category |
| Shift + click or Shift+Space in the model tree | Select a range of expanded or filtered rows from the last individually selected or toggled row |
| Ctrl / Cmd + Shift + click in the model tree | Add a range to the current selection |
| Menu key / Shift+F10 | Open the context menu. In the model tree, use the focused element |
| Up / Down, Enter in the context menu | Move between actions and run the focused action |
| Up / Down, Left / Right in the model tree | Move between rows, collapse or expand a category, or move to a parent or child |
| Home / End, Enter in the model tree | Jump to the first or last row, or select and zoom to the focused element |
| H / I / Shift+H | Hide selected / isolate selected / show all |
| F | Zoom to the selection, or fit the whole model when nothing is selected |
| Esc | Stop the viewpoint tour, close the open menu or popup, clear the measurement, or clear the selection, one action per press |

The model's up axis is +Z.

In the model tree, open **Filters** to combine source model, level and category with the text search. Use
**Isolate matches** to apply the results to 3D visibility. Clearing the filters keeps the current visibility.
Use **Show all** to reset the hide and isolate actions.

## Install

Install the command line tool:

```sh
dotnet tool install --global IOViewer.Cli
```

Add the library to a .NET project:

```sh
dotnet add package IOViewer
```

The library examples below are for 0.3.0, which builds on the IOScene scene model; 0.2.0 has the
earlier model, and [CHANGELOG.md](CHANGELOG.md) lists how its types map to the new ones.

The library targets .NET 8 and .NET 10. It uses managed code without native dependencies or Windows-only APIs and supports Windows, Linux, and macOS.

## Command line

Generate standalone 3D HTML viewers from 3D models:

```sh
# Convert binary glTF 2.0 (GLB) to interactive HTML viewer
ioviewer model.glb -o viewer.html

# Convert Wavefront OBJ model to interactive HTML viewer
ioviewer model.obj -o viewer.html

# Convert IFC, Revit or Navisworks models via the scene adapters
ioviewer model.ifc
ioviewer model.rvt -o viewer.html
ioviewer model.nwc -o viewer.html

# Convert and immediately preview in default web browser via built-in HTTP server
ioviewer model.glb --serve
```

Pass `--add` and `--placement` to combine several source models into one offline HTML viewer.

```sh
ioviewer architecture.ifc --add services.rvt --placement 10,20,3,90 -o coordination.html
```

The first input defines the coordinate space. Each `--add` takes a file followed by
`--placement x,y,z,yaw`. Rotate counterclockwise about +Z by `yaw` degrees, then translate by
`x,y,z` metres. Use `0,0,0,0` for a source already in the first model's coordinates. Repeat the
pair to add more inputs. The viewer lists all models in the Linked files panel with individual
visibility controls. The first input supplies any startup clipping. Saved views from added sources
are placed with their models. A saved section box requires a yaw that is a multiple of 90 degrees.

Pass `--bcf` to include topics from a local [BCF 2.1 archive](https://github.com/buildingSMART/BCF-XML/tree/v2.1/Documentation).

```sh
ioviewer architecture.ifc --bcf review.bcfzip -o review.html
```

The archive uses the same metre, Z-up coordinates as the output scene. For combined models those are
the first input's coordinates. In **BCF topics**, open a topic to see its status, description and
available viewpoints. A viewpoint restores its camera, up to six clipping planes, and matched
selection and visibility exceptions. The viewer interprets the BCF 2.1 camera scale as vertical.
It matches IFC GlobalIds exactly. Without a GlobalId, it supports Revit UniqueId for component
references whose originating system is `Autodesk Revit` or `Revit`. Missing or ambiguous references
are reported without preventing the rest of the viewpoint from opening.

The archive limit is 64 MiB and 4,096 entries, with 2 MiB per XML file and 32 MiB of imported XML.
The importer reads topic and viewpoint XML. Snapshots, attachments, markup lines and component
colours are outside this import.

Export structured JSON snapshots:

```sh
# Export model snapshot to structured JSON
ioviewer model.glb -o model.json
```

Diagnostics and progress go to standard error, including conversion diagnostics from the scene adapters (one warning or error
per kind, with its count). When the engine reported an error, elements may be missing: the output is still written and
the exit code is 4. An output that cannot be written gives exit code 3, and a `--serve` preview server that cannot start
or fails gives exit code 5 after the output is written; codes 3 and 5 take precedence over 4. Run `ioviewer --help` for
the full list of options and exit codes.

## Library

Build a scene in code and export it to HTML:

```csharp
using IOScene;
using IOViewer.Exporters;

var scene = new SceneDocument { Title = "Curtain wall panel" };
scene.AddMesh("Panel",
    [new(0, 0, 0), new(3, 0, 0), new(3, 0, 3), new(0, 0, 3)],
    [0, 1, 2, 0, 2, 3],
    new RgbaColor(100, 149, 237, 200));

HtmlViewerExporter.Save(scene, "panel.html");
```

`AddMesh` adds the model, the geometry, the element and the instance that links them. A real importer fills the scene
lists directly (`Models`, `Elements`, `Geometries`, `Instances`, `Materials`, `PropertySets` and the rest); the
[IOScene contract](https://github.com/IOExtend/IOScene/blob/main/docs/contract.md) describes them. To open the page with
section planes, a section box or linked models hidden, wrap the scene in a `ViewerDocument` (namespace `IOViewer.Model`).

Import a glTF / GLB model and convert to HTML viewer:

```csharp
using IOViewer.Importers;
using IOViewer.Exporters;

// Load binary glTF 2.0 model
var doc = GlbViewerImporter.Load("complex_building.glb");

// Export to self-contained single-file HTML viewer
HtmlViewerExporter.Save(doc, "complex_building.html");
```

To view a Navisworks cache, install `NwcIO.Scene` with `dotnet add package NwcIO.Scene --version 0.13.0` and pass its scene to IOViewer.

```csharp
using IOViewer.Exporters;
using NwcIO.Scene;

var result = NwcSceneReader.Read("Tower.nwc");
HtmlViewerExporter.Save(result.Document, "Tower.html");
```

The adapter is in preview and can reject some NWC caches. Check `result.Diagnostics` for conversion warnings and errors. For supported inputs and limits, see the
[NwcIO.Scene guide](https://github.com/IOExtend/NwcIO/blob/v0.13.0/docs/scene.md).

For `IOViewer.Cli` 0.3.1, save the same scene with `IOScene.SceneJson.Save(result.Document, "Tower.scene.json")` and run
`ioviewer Tower.scene.json`. See the [IOScene JSON handoff](docs/getting-started.md#navisworks-cache) for the full workflow.

See the [public API](docs/public-api.md) for the supported surface and [getting started guide](docs/getting-started.md) for detailed workflows.

## Documentation

The documentation site with API references and guides is at <https://ioextend.github.io/IOViewer/>. [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/IOExtend/IOViewer) offers an automatically generated overview of the repository.

## Limitations

- The API can evolve before 1.0.
- Standalone HTML export generates self-contained files with all geometry inlined. IOViewer does not simplify meshes, so models with millions of triangles produce large files; reduce them before export.
- The binary geometry block is assembled in memory before it is written, so it must stay below 2 GB.
- `HtmlViewerOptions.MaxMeshVertices` is unlimited by default. When a lower limit cuts the model, the viewer shows a banner with the number of meshes written.
- The viewer needs WebGL 2; without it the page says so. If the browser drops the graphics context, the page shows a message asking to reload it.
- Transparent objects are sorted per chunk of merged geometry (or per cell of instanced copies), not per object, so overlapping transparent objects in the same chunk can blend in the wrong order.
- The viewer draws triangles only. Instances of line or point geometry are skipped, and the CLI prints a warning with their number.
- The OBJ importer reads geometry only; `.mtl` material files are not read.

## Build from source and tests

Use the .NET SDK selected by `global.json`, which specifies 10.0.100 with `latestFeature` roll-forward and excludes prerelease SDKs.

From the repository root:

```sh
dotnet build IOViewer.slnx -c Release
dotnet test
```

The viewer page is built from `src/IOViewer/Viewer` with Node.js 24; see [CONTRIBUTING.md](CONTRIBUTING.md). The built script `dist/viewer.js` is committed, so building the .NET solution does not need Node.js.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md). Release changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Security

Report vulnerabilities through GitHub private vulnerability reporting in the repository's Security tab. Do not open public issues for security vulnerabilities. See [SECURITY.md](SECURITY.md).

## License and trademarks

IOViewer is licensed under the [MIT License](LICENSE). Copyright holder: mahach666. The generated viewer embeds three.js (MIT); see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).

IOViewer is not affiliated with, endorsed by or sponsored by Autodesk. Autodesk, Revit, Navisworks, ViewCube and TimeLiner are trademarks of Autodesk, Inc. They are used here only to describe compatibility and familiar features. The viewer is written from scratch and includes no Autodesk code or binaries.
