# Changelog

All notable changes to the `IOViewer` library and CLI are documented in this file.

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
