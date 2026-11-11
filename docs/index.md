---
title: IOViewer
---

# IOViewer

**IOViewer** is a fast, 100% managed .NET library and CLI tool for generating standalone, zero-dependency interactive 3D WebGL / HTML BIM & CAD model viewers directly from code or file formats (glTF/GLB, Wavefront OBJ, JSON, and IOExtend models).

The generated HTML file is completely self-contained, offline-ready, and works in any modern desktop or mobile browser without requiring external servers, WebGL plug-ins, or cloud connectivity.

## Features

- **Packed Binary Base64 Geometry**: Little-endian `Float32Array` positions and `Uint32Array`/`Uint16Array` indices encoded in base64, delivering ~3x smaller HTML payload and instant GPU buffer uploads.
- **Relative-To-Center (RTC) Coordinates**: Model coordinates centered around $(0, 0, 0)$ with world offset, eliminating 32-bit WebGL floating point precision jitter on large georeferenced coordinates.
- **3D ViewCube**: Interactive orientation cube with directional navigation arrows for instant orthographic alignment.
- **Sectioning & Clipping**:
  - Arbitrary section planes with interactive in-scene 3D normal gizmo manipulator.
  - 6-sided Section Box volume with bounding wireframe, scaling slider, invert mode, and fit-to-selection.
- **Display Modes**: Material colors with transparency, Diffuse Textures with real-world UV box projection, White/Clay architectural model, Wireframe, and global scene opacity slider.
- **BIM Data Hierarchy & Navigation**: Category tree with element counts, Linked files panel, instant search with autocomplete and camera focus, properties inspector panel, and selection actions (Isolate, Hide, Show All).
- **Coordination & Spatial Tools**: 3D spatial grids projection, interactive 3D point-to-point measurement, 4D TimeLiner schedule simulation player with status coloring, and clash detection inspection.
- **Camera Animations**: Cubic Ease-In-Out transitions, Turntable 360° presentation orbit, and Saved Viewpoints Walkthrough Tour player.

## Where to go next

- [Getting started](getting-started.md): install the package or CLI tool and generate your first 3D viewer.
- [Public API](public-api.md): supported surface and key entry points of the library.
- [Source on GitHub](https://github.com/IOExtend/IOViewer).
