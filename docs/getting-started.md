# Getting started with IOViewer

## Installation

Install the global CLI tool:

```sh
dotnet tool install --global IOViewer.Cli
```

Add the library to your .NET project:

```sh
dotnet add package IOViewer
```

## Command line usage

Convert a glTF 2.0 Binary (`.glb`), Wavefront OBJ (`.obj`), IFC (`.ifc`, `.ifczip`), Revit (`.rvt`) or
Navisworks cache (`.nwc`) into a self-contained 3D HTML viewer:

```sh
# Convert 3D model into an interactive standalone HTML viewer
ioviewer model.glb -o viewer.html

# IFC, Revit and Navisworks models; conversion diagnostics are printed on standard error,
# and an error (elements may be missing) gives exit code 4 after the output is written
ioviewer model.ifc
ioviewer model.rvt
ioviewer model.nwc

# Launch local preview server and open in default browser
ioviewer model.glb --serve
```

The direct `.nwc` command is available in CLI builds from this repository. Published `IOViewer.Cli` 0.3.1 uses the
[IOScene JSON handoff](#navisworks-cache) for Navisworks models.

## C# API usage

The model data is a `SceneDocument` from the [IOScene](https://github.com/IOExtend/IOScene) package: models, elements,
geometries and the instances that place geometries for elements, in metres with Z up. Build one and export it to HTML:

```csharp
using IOScene;
using IOViewer.Exporters;

var scene = new SceneDocument { Title = "Commercial Tower" };
scene.AddMesh("Column C1", [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)], [0, 1, 2], new RgbaColor(70, 130, 180));

HtmlViewerExporter.Save(scene, "tower_viewer.html");
```

`ViewerDocument` (namespace `IOViewer.Model`) wraps a scene with what only the viewer uses: section planes, a section
box and the keys of the models hidden at start. `JsonViewerExporter` writes it as viewer JSON, and `JsonViewerImporter`
reads viewer JSON, IOScene scene files and IOViewer 0.1/0.2 snapshots.

## Navisworks cache

Add `NwcIO.Scene` alongside `IOViewer` in your .NET project.

```sh
dotnet add package NwcIO.Scene --version 0.13.0
```

Read the `.nwc` file into an IOScene document and export it to HTML.

```csharp
using IOViewer.Exporters;
using NwcIO.Scene;

var result = NwcSceneReader.Read("Tower.nwc");
HtmlViewerExporter.Save(result.Document, "Tower.html");
```

Inspect `result.Diagnostics` for warnings and errors. See the [NwcIO.Scene guide](https://github.com/IOExtend/NwcIO/blob/v0.13.0/docs/scene.md)
for supported caches, diagnostics and conversion limits.

The adapter is in preview. Some caches, including the IFC-derived office and terrain caches in the
[Safe Software Navisworks example](https://support.safe.com/hc/en-us/articles/37510812360717-Getting-Started-with-Navisworks),
fail to load with `NwcIO.Scene` 0.13.0. If you have the original IFC or Revit file, you can pass it directly to `ioviewer`.

For the IOScene JSON handoff, save the scene with `IOScene.SceneJson.Save(result.Document, "Tower.scene.json")`.
Then open it with the CLI, including `IOViewer.Cli` 0.3.1.

```sh
ioviewer Tower.scene.json -o Tower.html
```

## Sharing geometry between instances

Repeated shapes, such as identical fittings or columns, are stored once in `SceneDocument.Geometries` and placed by
each `SceneInstance` with `GeometryId` and `Transform`. The HTML file then holds the vertices once and the viewer draws
the copies. Every instance belongs to an element:

```csharp
scene.Geometries.Add(new SceneGeometry
{
    Id = 7,
    Vertices = [new(0, 0, 0), new(0.3, 0, 0), new(0, 0.3, 0)],
    Indices = [0, 1, 2]
});

for (int i = 0; i < 100; i++)
{
    scene.Elements.Add(new SceneElement { Id = 100 + i, ModelId = scene.Models[0].Id, Name = $"Fitting {i}" });
    scene.Instances.Add(new SceneInstance
    {
        ElementId = 100 + i,
        GeometryId = 7,
        Transform = Transform3d.Translate(new(i * 6.0, 0, 0)),
        Color = new RgbaColor(120, 120, 120)
    });
}
```

`GlbViewerImporter` fills these lists from glTF nodes and meshes. A geometry placed by one instance only is written
like any other; the exporter also writes exact translated copies of such geometries once. `scene.Validate()` lists
what breaks the scene contract, such as an instance that names a missing element.

## Using the viewer

The model's up axis is +Z. The interface is in Russian when the browser language is Russian and in English otherwise.

- Left click selects, Ctrl+click adds or removes, a click on empty space clears the selection.
- Left drag orbits around the point under the cursor; middle or right drag pans; the wheel zooms towards the cursor.
- Shift+left drag selects with a box: left to right selects objects fully inside, right to left selects objects it touches.
- A right click without moving opens the context menu.
- H hides the selection, I isolates it, Shift+H shows everything, F zooms to the selection (or fits the model), Esc
  closes menus or clears the selection.
