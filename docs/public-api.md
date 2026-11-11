# Public API Overview

`IOViewer` provides classes and methods for creating, manipulating, and exporting 3D BIM/CAD models into self-contained HTML/WebGL viewers and structured JSON.

## Key Types

### Document & Model (`IOViewer.Model`)

- `ViewerDocument`: The root container holding elements, meshes, materials, textures, viewpoints, grids, section box, and 4D schedules.
- `ViewerElement`: Represents a BIM element (Revit element, IFC product, Navisworks node) with properties and associated mesh parts.
- `ViewerMesh`: Triangulated 3D mesh geometry with vertex coordinates, triangle indices, normals, colors, and bounding box.
- `ViewerMaterial`: Visual appearance definition including diffuse color, opacity, metalness, and roughness.
- `ViewerTexture`: Embedded raster texture data with real-world meter scaling for UV box projection.
- `ViewerViewpoint`: Saved camera orientation, target, field of view, and projection mode.
- `ViewerSectionPlane`: Cutting plane defined by axis or normal vector with offset and flip direction.
- `ViewerSectionBox`: 6-sided 3D clipping volume with fit-to-selection capability.
- `ViewerTimeLinerSchedule`: 4D construction schedule tasks with planned and actual dates, costs, and progress.
- `ViewerClashTest`: Clash detection test conflict items with 3D intersection points and status.

### Exporters (`IOViewer.Exporters`)

- `HtmlViewerExporter`: Generates self-contained, offline-ready 3D HTML viewers using packed Base64 binary buffers.
- `JsonViewerExporter`: Exports `ViewerDocument` snapshots into structured JSON.

### Importers (`IOViewer.Importers`)

- `GlbViewerImporter`: Reads binary glTF 2.0 (`.glb`) files into `ViewerDocument`.
- `ObjViewerImporter`: Reads Wavefront OBJ and MTL files into `ViewerDocument`.
- `JsonViewerImporter`: Reads JSON document snapshots into `ViewerDocument`.
