# Changelog

All notable changes are documented here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and the project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html); versions before 1.0 may change the
API between minor releases.

## [Unreleased]

### Fixed
- The `IOViewer` package now includes the XML documentation file, so existing API comments show in IntelliSense.
- The release workflow runs only for version tags again, fails on any `gh release` error and no longer overwrites assets of an existing release.
- `tools/pack-release.ps1` fails when creating the source archive fails.
- Documentation no longer claims `.mtl` material support or mesh simplification, neither of which exists.
- The logo on the documentation site no longer covers half of the page; it is sized to the navigation bar.

### Added
- Links to the DeepWiki overview of the repository in the README and on the documentation site.

### Changed
- Tests run on both .NET 8 and .NET 10.
- `global.json`, CI workflows and repository settings follow the shared IOExtend conventions: SDK 10.0.100 without prerelease, NuGet vulnerability audit, Dependabot, LF line endings, issue and pull request templates.
- Copyright holder is `mahach666` in the license, package metadata and README.
- README and documentation state that IOViewer is not affiliated with Autodesk.
- `SECURITY.md` and `CONTRIBUTING.md` describe supported versions, security scope, development setup and the clean-room policy.

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
