# Legacy 0.2 snapshots

Frozen JSON output of IOViewer 0.2.0 (`JsonViewerExporter`, indented, LF line endings).
The files are never regenerated and never edited: they are the old snapshot shape that IOViewer must keep loading.
`tests/IOViewer.Tests/LegacyFixtureTests.cs` pins their content.

| File | Elements | Meshes | 4D tasks | Clashes | Origin |
|---|---|---|---|---|---|
| `building.json` | 65 | 67 | 7 | 3 | `tests/fixtures/viewer/building.json` at the 0.2.0 release commit |
| `empty.json` | 0 | 0 | 0 | 0 | `tests/fixtures/viewer/empty.json` at the 0.2.0 release commit |
| `escaping.json` | 3 | 3 | 0 | 0 | `tests/fixtures/viewer/escaping.json` at the 0.2.0 release commit |
| `textured.json` | 2 | 2 | 0 | 0 | `tests/fixtures/viewer/textured.json` at the 0.2.0 release commit |
| `meshes-without-elements.json` | 0 | 4 | 1 | 1 | written with the IOViewer 0.2.0 package from nuget.org |

`meshes-without-elements.json` has the shape of a snapshot made from GLB or OBJ: meshes and no elements.

- Meshes 1 and 2 share `ElementId` 100, mesh 3 has `ElementId` 200, mesh 4 has none.
- The 4D task is attached to 100, 200 and 4 (the id of the mesh without an `ElementId`).
- The clash names elements 100 and 200.
- Material 1 has `Opacity` 0.5 and mesh 1 has `Opacity` 0.8.
- Mesh 3 has `TextureIndex` 0.
- One linked file is listed, with `Visible` false.
