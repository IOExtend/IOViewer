# Public API Overview

`IOViewer` provides classes and methods for creating, manipulating, and exporting 3D BIM/CAD models into self-contained HTML/WebGL viewers and structured JSON.

## Key Types

### Document & Model (`IOViewer.Model`)

- `ViewerDocument`: The root container holding elements, meshes, shared geometries, materials, textures, viewpoints, grids, section planes and box, clash tests, linked files, and 4D schedules. All coordinates and lengths are in metres, with Z up; importers and adapters convert to this on the way in.
- `ViewerElement`: Represents a BIM element (Revit element, IFC product, Navisworks node) with properties and associated mesh parts. `SourceId` optionally holds the element's id in its source format (for example a Revit UniqueId or an IFC GlobalId); the viewer shows it in the properties panel and finds it in the model tree search. The numeric `Id` stays the key that meshes, 4D tasks and clashes use.
- `ViewerMesh`: Triangulated 3D mesh geometry with vertex coordinates, triangle indices, normals, colors, and bounding box. A mesh can instead draw a shared `ViewerGeometry` (`GeometryId`) and place it with `Transform`.
- `ViewerGeometry`: Triangle geometry stored once in `ViewerDocument.Geometries` and drawn by every mesh that references its `Id`.
- `Transform3d`: Affine transform stored by columns (`XAxis`, `YAxis`, `ZAxis`, `Translation`), with `Identity`, `Translate`, `Apply` and `Then`.
- `ViewerMaterial`: Visual appearance definition including diffuse color, opacity, metalness, and roughness. The HTML viewer uses the color, opacity and texture.
- `ViewerTexture`: Embedded raster texture data with its real-world size in meters, which scales the mesh UVs.
- `ViewerViewpoint`: Saved camera position, target, field of view, and projection mode (perspective or orthographic).
- `ViewerSectionPlane`: Cutting plane defined by axis or normal vector with offset and flip direction.
- `ViewerSectionBox`: 6-sided 3D clipping volume. Section planes and boxes are kept in JSON snapshots; the HTML viewer does not apply them when it opens.
- `ViewerTimeLinerSchedule`: 4D construction schedule tasks with planned and actual dates, costs, and progress.
- `ViewerClashTest`: Clash detection test conflict items with 3D intersection points and status. `ViewerClashResult.Element1Id` and `Element2Id` optionally identify the clashing elements; without them the viewer matches an element by name only when the name is unique.

### Exporters (`IOViewer.Exporters`)

- `HtmlViewerExporter`: Generates self-contained, offline-ready 3D HTML viewers using packed Base64 binary buffers. The page is written to the output stream as it is produced. A document without elements is listed by mesh `ElementId`, or per mesh without one, so its meshes can still be selected, hidden and isolated.
- `HtmlViewerOptions`: Title, which data to include (properties, viewpoints, grids, 4D schedule, clashes), the initial display mode (`InitialWireframe`, `InitialWhiteMode`), and `MaxMeshVertices`, which is unlimited by default; when a lower limit leaves meshes out, the viewer shows how many were written.
- `JsonViewerExporter`: Exports `ViewerDocument` snapshots into structured JSON.

### Importers (`IOViewer.Importers`)

- `GlbViewerImporter`: Reads binary glTF 2.0 (`.glb`) files into `ViewerDocument`. Each glTF mesh primitive becomes one `ViewerGeometry` and each node that uses it a `ViewerMesh` with the node's world transform, converted from glTF's Y-up to the viewer's Z-up. Each such node also becomes a `ViewerElement` (category `GLB`, named after the node, else the mesh) that all its primitives belong to. A node hierarchy that is not a tree (a node referenced twice or a cycle) is rejected with `InvalidDataException`.
- `ObjViewerImporter`: Reads Wavefront OBJ geometry into `ViewerDocument` as is, without changing the up axis. Each object or group (`o`/`g`) becomes one `ViewerMesh` holding only the vertices its faces use and one `ViewerElement` (category `OBJ`) with its name. Material (`.mtl`) files are not read.
- `JsonViewerImporter`: Reads JSON document snapshots into `ViewerDocument`.

### IfcIO adapter (`IOViewer.IfcIO`, package `IOViewer.IfcIO`)

A separate package that depends on IOViewer and [IfcIO](https://github.com/IOExtend/IfcIO) 0.11.0 or later; the
`IOViewer` package does not depend on IfcIO.

- `IfcViewerAdapter.ToViewerDocument(IfcModel, IfcViewerOptions?)`: Converts a model in memory, without reading the file
  again, into a `ViewerDocument` in metres with Z up. Each element becomes a `ViewerElement` with the STEP entity id as
  `Id`, the GlobalId as `SourceId`, the IFC class as `Category`, the IfcIO storey as `Level` (elements outside a storey
  and spaces get the first storey), and its property sets and quantity sets as property groups; type objects and lining
  and panel properties that IfcIO lists as elements are skipped; an element with geometry gets one mesh of its own. Work schedules become the TimeLiner. Duplicate element
  ids throw `ArgumentException`.
- `IfcViewerAdapter.Convert(IfcModel, IfcViewerOptions?)`: The same, returning an `IfcViewerConversion` with the
  document and a report: the length unit and its exact factor to metres, the number of elements and of own meshes,
  elements without geometry with an `IfcViewerGeometryIssue` (`NoGeometry`, `EmptyMesh`, `InvalidMesh`), and the number
  of 4D tasks left out for lack of planned dates.
- `IfcViewerOptions.IncludeSpaces`: Also converts spaces; off by default.

See [From an IFC file](getting-started.md#from-an-ifc-file) for the mapping and its current limits.
