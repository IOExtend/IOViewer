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

Convert any glTF 2.0 Binary (`.glb`), Wavefront OBJ (`.obj`), IFC (`.ifc`, `.ifczip`, read with IfcIO) or Revit
(`.rvt`, read with RvtIO) model into a self-contained 3D HTML viewer:

```sh
# Convert 3D model into an interactive standalone HTML viewer
ioviewer model.glb -o viewer.html

# IFC and Revit models; what the engine could not convert is printed as warnings or errors on standard error,
# and an error (elements may be missing) gives exit code 4 after the output is written
ioviewer model.ifc
ioviewer model.rvt

# Launch local preview server and open in default browser
ioviewer model.glb --serve
```

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
