<p align="center">
  <img src="docs/images/ioviewer-banner.png" alt="IOViewer" width="640">
</p>

# IOViewer

[![Docs](https://img.shields.io/badge/Docs-Online-3B82F6?style=flat-square&logo=github)](https://ioextend.github.io/IOViewer/)
[![NuGet](https://img.shields.io/nuget/v/IOViewer?style=flat-square&color=3B82F6&logo=nuget)](https://www.nuget.org/packages/IOViewer)
[![Release](https://img.shields.io/github/v/release/IOExtend/IOViewer?style=flat-square&color=3B82F6)](https://github.com/IOExtend/IOViewer/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/.NET-8.0%20%7C%2010.0-512BD4?style=flat-square&logo=dotnet)](https://dotnet.microsoft.com/)

IOViewer is a fast, 100% managed .NET library and command line tool that generates standalone interactive 3D WebGL / HTML BIM & CAD model viewers from code, glTF/GLB, Wavefront OBJ, or JSON. Geometry read by sibling libraries ([RvtIO](https://github.com/IOExtend/RvtIO), [IfcIO](https://github.com/IOExtend/IfcIO), and [NwcIO](https://github.com/IOExtend/NwcIO)) can be passed in by building a `SceneDocument` in code, and the `ioviewer` command line tool reads IFC and Revit files directly through IfcIO and RvtIO. The scene model comes from the [IOScene](https://github.com/IOExtend/IOScene) package; the IOViewer library has no dependency on the format libraries.

The generated HTML is a single file with no external dependencies that works offline: it opens from disk (`file://`) in a current browser with WebGL 2 and makes no network requests. The viewer is built on [three.js](https://threejs.org/), which is embedded in the file (see [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md)).

Built clean-room under the [IOExtend](https://github.com/IOExtend) organization.

## What it does

- Writes one self-contained HTML file per model; the viewer, its styles and the model data are all inlined.
- Stores geometry once per shape: instances can share a `SceneGeometry` placed by a `Transform3d`, and the exporter also finds geometries that are exact translated copies of each other.
- Packs geometry compactly: positions quantized to 16-bit steps of 2⁻¹⁰ m (error at most 0.49 mm, 0.85 mm for rotated shared geometry; geometry larger than about 64 m, or shared geometry that an instance scales up, stays 32-bit float), octahedral 16-bit normals, 16- or 32-bit indices, all in one base64 block.
- Shifts coordinates relative to the model centre (RTC), so georeferenced models with coordinates around 10⁶ m do not jitter.
- Draws large models with few draw calls: geometry is merged into spatial chunks per material (very large models draw their repeated shapes as instanced copies instead), and hiding, selection and colouring are per-object data, so they never rebuild geometry.
- Viewer interface in Russian or English, chosen from the browser language:
  - model tree by category with search, a properties panel and a selected/total counter;
  - toolbar with labelled groups: navigation, sections, measure, display and view;
  - context menu: properties, hide, isolate, show all, zoom to object, section box around the object, copy Id;
  - view cube that follows the camera exactly, with face clicks, 90° arrows and a home button;
  - section planes (up to six, moved and rotated with an in-scene gizmo) or a section box (keep inside or cut inside, face handles, move by the centre, box around the selection);
  - point-to-point distance measurement, display modes (materials, textures, white, wireframe), grid lines and a global opacity slider;
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
| H / I / Shift+H | Hide selected / isolate selected / show all |
| F | Zoom to the selection, or fit the whole model when nothing is selected |
| Esc | Close the open menu or popup, or clear the measurement; otherwise clear the selection |

The model's up axis is +Z.

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

# Convert an IFC model (.ifc or .ifczip, read with IfcIO) or a Revit model (.rvt, read with RvtIO)
ioviewer model.ifc
ioviewer model.rvt -o viewer.html

# Convert and immediately preview in default web browser via built-in HTTP server
ioviewer model.glb --serve
```

Export structured JSON snapshots:

```sh
# Export model snapshot to structured JSON
ioviewer model.glb -o model.json
```

Diagnostics and progress go to standard error, including what IfcIO or RvtIO could not convert (one warning or error
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
- Section planes and section boxes stored in `ViewerDocument` are kept in viewer JSON but are not applied by the HTML viewer when it opens.
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
