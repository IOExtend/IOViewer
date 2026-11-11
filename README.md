<p align="center">
  <img src="docs/images/ioviewer-banner.png" alt="IOViewer" width="640">
</p>

# IOViewer

[![Docs](https://img.shields.io/badge/Docs-Online-3B82F6?style=flat-square&logo=github)](https://ioextend.github.io/IOViewer/)
[![NuGet](https://img.shields.io/nuget/v/IOViewer?style=flat-square&color=3B82F6&logo=nuget)](https://www.nuget.org/packages/IOViewer)
[![Release](https://img.shields.io/github/v/release/IOExtend/IOViewer?style=flat-square&color=3B82F6)](https://github.com/IOExtend/IOViewer/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/.NET-8.0%20%7C%2010.0-512BD4?style=flat-square&logo=dotnet)](https://dotnet.microsoft.com/)

IOViewer is a fast, 100% managed .NET library and command line tool that generates standalone, zero-dependency interactive 3D WebGL / HTML BIM & CAD model viewers from code, glTF/GLB, Wavefront OBJ, or JSON. Geometry read by sibling libraries ([RvtIO](https://github.com/IOExtend/RvtIO), [IfcIO](https://github.com/IOExtend/IfcIO), and [NwcIO](https://github.com/IOExtend/NwcIO)) can be passed in by building a `ViewerDocument` in code; IOViewer has no direct dependency on them.

The generated HTML file is completely self-contained, offline-ready, and works in any modern browser without external servers or cloud dependencies.

Built clean-room under the [IOExtend](https://github.com/IOExtend) organization.

## What it does

- Generates standalone, zero-dependency single-file interactive 3D WebGL HTML viewers (`.html`).
- Packs binary geometry into Base64 little-endian `Float32Array` positions and `Uint32Array`/`Uint16Array` indices for ~3x smaller payload than JSON.
- Shifts model coordinates Relative-To-Center (RTC) to eliminate WebGL 32-bit floating point precision jitter on large georeferenced coordinates.
- Features an interactive 3D **ViewCube** with orientation faces and directional navigation arrows for instant orthographic alignment.
- Provides comprehensive sectioning: arbitrary cutting planes with in-scene 3D normal gizmo manipulators, plus 6-sided Section Box volumes with fit-to-selection.
- Supports multiple display modes: Material colors & opacity, Diffuse Textures with real-world UV box projection, White/Clay architectural model, Wireframe, and global scene opacity.
- Manages BIM hierarchies with Category trees, element counters, linked files, instant search, and instance/type property inspection.
- Includes coordination tools: 3D spatial grids projection, interactive 3D point-to-point measurement, 4D TimeLiner schedule simulation player, and clash detection inspection.
- Drives smooth camera animations: cubic Ease-In-Out transitions, 360° Turntable presentation orbit, and Saved Viewpoints Walkthrough Tours.
- Imports standard 3D formats out of the box: binary glTF 2.0 (`.glb`), Wavefront OBJ (`.obj`), and JSON snapshots.

## Install

Install the command line tool:

```sh
dotnet tool install --global IOViewer.Cli
```

Add the library to a .NET project:

```sh
dotnet add package IOViewer
```

The library targets .NET 8 and .NET 10. It uses managed code without native dependencies or Windows-only APIs and supports Windows, Linux, and macOS.

## Command line

Generate standalone 3D HTML viewers from 3D models:

```sh
# Convert binary glTF 2.0 (GLB) to interactive HTML viewer
ioviewer model.glb -o viewer.html

# Convert Wavefront OBJ model to interactive HTML viewer
ioviewer model.obj -o viewer.html

# Convert and immediately preview in default web browser via built-in HTTP server
ioviewer model.glb --serve
```

Export structured JSON snapshots:

```sh
# Export model snapshot to structured JSON
ioviewer model.glb -o model.json
```

Diagnostics and progress go to standard error. Run `ioviewer --help` for the full list of options.

## Library

Create a viewer document programmatically and export to HTML:

```csharp
using IOViewer;
using IOViewer.Model;
using IOViewer.Exporters;

// Create viewer document
var doc = new ViewerDocument
{
    Title = "Commercial Building 3D Showcase",
    Author = "IOExtend"
};

// Add mesh geometry
var mesh = new ViewerMesh
{
    Id = 1,
    Name = "Curtain Wall Panel",
    Vertices = [new(0, 0, 0), new(3, 0, 0), new(3, 3, 0), new(0, 3, 0)],
    Indices = [0, 1, 2, 0, 2, 3],
    Color = new RgbaColor(100, 149, 237, 200),
    Opacity = 0.8
};
doc.Meshes.Add(mesh);

// Export to self-contained HTML
HtmlViewerExporter.Save(doc, "showcase.html", new HtmlViewerOptions
{
    Title = "Commercial Building 3D Showcase",
    IncludeProperties = true,
    IncludeViewpoints = true
});
```

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

- Version 0.1.0 is an initial release. The API can evolve before 1.0.
- Standalone HTML export generates self-contained files with all geometry inlined. IOViewer does not simplify meshes, so models with millions of triangles produce large files; reduce them before export.
- The OBJ importer reads geometry only; `.mtl` material files are not read.

## Build from source and tests

Use the .NET SDK selected by `global.json`, which specifies 10.0.100 with `latestFeature` roll-forward and excludes prerelease SDKs.

From the repository root:

```sh
dotnet build IOViewer.slnx -c Release
dotnet test
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md). Release changes are recorded in [CHANGELOG.md](CHANGELOG.md).

## Security

Report vulnerabilities through GitHub private vulnerability reporting in the repository's Security tab. Do not open public issues for security vulnerabilities. See [SECURITY.md](SECURITY.md).

## License and trademarks

IOViewer is licensed under the [MIT License](LICENSE). Copyright holder: mahach666.

IOViewer is not affiliated with, endorsed by or sponsored by Autodesk. Autodesk, Revit, Navisworks, ViewCube and TimeLiner are trademarks of Autodesk, Inc. They are used here only to describe compatibility and familiar features. The viewer is written from scratch and includes no Autodesk code or binaries.
