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

Convert any glTF 2.0 Binary (`.glb`) or Wavefront OBJ (`.obj`) into a self-contained 3D HTML viewer:

```sh
# Convert 3D model into an interactive standalone HTML viewer
ioviewer model.glb -o viewer.html

# Launch local preview server and open in default browser
ioviewer model.glb --serve
```

## C# API usage

Build a `ViewerDocument` and export to HTML:

```csharp
using IOViewer;
using IOViewer.Model;
using IOViewer.Exporters;

var doc = new ViewerDocument
{
    Title = "Commercial Tower 3D Viewer",
    Author = "IOExtend"
};

// Add meshes and elements
var mesh = new ViewerMesh
{
    Id = 1,
    Name = "Column C1",
    Vertices = [new(0, 0, 0), new(1, 0, 0), new(0, 1, 0)],
    Indices = [0, 1, 2],
    Color = new RgbaColor(70, 130, 180)
};
doc.Meshes.Add(mesh);

// Export to self-contained HTML
HtmlViewerExporter.Save(doc, "tower_viewer.html");
```

## Sharing geometry between meshes

Repeated shapes, such as identical fittings or columns, can be stored once in `ViewerDocument.Geometries` and placed by
each mesh with `GeometryId` and `Transform`. The HTML file then holds the vertices once and the viewer draws the copies.

```csharp
doc.Geometries.Add(new ViewerGeometry
{
    Id = 7,
    Vertices = [new(0, 0, 0), new(0.3, 0, 0), new(0, 0.3, 0)],
    Indices = [0, 1, 2]
});

for (int i = 0; i < 100; i++)
{
    doc.Meshes.Add(new ViewerMesh
    {
        Id = 100 + i,
        GeometryId = 7,
        Transform = Transform3d.Translate(new(i * 6.0, 0, 0)),
        Color = new RgbaColor(120, 120, 120)
    });
}
```

`GlbViewerImporter` fills these properties from glTF nodes and meshes. Meshes with their own `Vertices` keep working as
before; the exporter also writes exact translated copies of such meshes once.

## From an IFC file

The `IOViewer.IfcIO` package converts a model read by [IfcIO](https://github.com/IOExtend/IfcIO) (0.11.0 or later)
into a `ViewerDocument`. Unlike an IFC to GLB to HTML route, it keeps GlobalIds, storeys, property sets and quantities.

```sh
dotnet add package IOViewer.IfcIO
```

```csharp
using IfcIO;
using IOViewer.Exporters;
using IOViewer.IfcIO;

var model = IfcModel.Open("building.ifc");
var conversion = IfcViewerAdapter.Convert(model);

foreach (var skipped in conversion.ElementsWithoutGeometry)
{
    Console.Error.WriteLine($"#{skipped.ElementId} ({skipped.GlobalId}): {skipped.Reason}");
}

HtmlViewerExporter.Save(conversion.Document, "building.html");
```

`IfcViewerAdapter.ToViewerDocument(model)` returns the document alone. The adapter works on the model in memory and
does not read the file again. It maps the model as follows:

- Geometry: IfcIO's world mesh of each element, converted from `IfcModel.LengthUnit` to metres by an exact factor
  (`conversion.MetresPerUnit`). IFC is Z up like the viewer, so axes are not swapped. Coordinates stay doubles until the
  HTML exporter makes them relative to the model centre, so georeferenced models keep their precision.
- Elements: one per element of `IfcModel.AllElements`. `Id` is the STEP entity id (`#123` gives 123), `SourceId` the
  GlobalId, `Category` the IFC class as IfcIO reports it (for example `IFCWALL`), `Level` the storey name.
  `IfcViewerOptions.IncludeSpaces` adds spaces, drawn translucent. Openings are not converted.
- Properties: each property set and quantity set becomes a property group with its name. Quantity values are written as
  IfcIO reads them, in the file's units.
- Colours: the element's IfcIO material (surface style colour and its alpha as opacity), otherwise a default colour for
  the IFC class.
- 4D: IfcIO work schedules become the TimeLiner, with each task's elements attached; tasks without planned dates are
  counted in `conversion.SkippedTasks`.

Current limits, all from what IfcIO exposes:

- IfcIO bakes mapped items (`IfcMappedItem`) into each element's mesh and does not expose the shared representation,
  so every element gets its own mesh (`conversion.OwnMeshes`) and repeated shapes are not stored once.
- IfcIO does not read type objects (`TypeName` stays empty), grids, transparency from files or task times from IFC2x3.
- Clash results from `IfcModel.DetectClashes` are not converted.
- Element ids must be unique. They are for a model read with `IfcModel.Open`; a model built in memory numbers its
  elements per storey, so save and reopen it before converting.

## Using the viewer

The model's up axis is +Z. The interface is in Russian when the browser language is Russian and in English otherwise.

- Left click selects, Ctrl+click adds or removes, a click on empty space clears the selection.
- Left drag orbits around the point under the cursor; middle or right drag pans; the wheel zooms towards the cursor.
- Shift+left drag selects with a box: left to right selects objects fully inside, right to left selects objects it touches.
- A right click without moving opens the context menu.
- H hides the selection, I isolates it, Shift+H shows everything, F zooms to the selection (or fits the model), Esc
  closes menus or clears the selection.
