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
