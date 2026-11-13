---
title: IOViewer
---

# IOViewer

**IOViewer** is a fast, 100% managed .NET library and CLI tool for generating standalone interactive 3D WebGL / HTML BIM & CAD model viewers directly from code or file formats (glTF/GLB, Wavefront OBJ and JSON; the CLI tool also reads IFC and Revit files through IfcIO and RvtIO).

The generated HTML is a single file with no external dependencies that works offline: it opens from disk in a current browser with WebGL 2, without servers, plug-ins or network requests. The viewer is built on three.js, embedded in the file.

## Features

- **Compact geometry**: shared geometry stored once and placed by transforms; 16-bit quantized positions (error at most 0.49 mm), octahedral normals and 16- or 32-bit indices in one base64 block.
- **Relative-To-Center (RTC) coordinates**: no precision jitter on georeferenced models.
- **Large models**: geometry merged into spatial chunks per material with few draw calls; hiding, selection and colouring are per-object data, not geometry rebuilds.
- **Navigation**: orbit around the point under the cursor, pan with the middle or right button, zoom to the cursor, perspective or orthographic camera, and a view cube that follows the camera.
- **Selection**: click, Ctrl+click, window and crossing box selection, context menu, hotkeys (H, I, Shift+H, F, Esc), model tree by category with search and a properties panel.
- **Sections**: up to six section planes moved and rotated with an in-scene gizmo, or a section box that keeps or cuts its inside, with face handles and a box around the selection.
- **Tools**: point-to-point distance, display modes (materials, textures, white, wireframe), grid lines and global opacity.
- **Coordination data**: saved viewpoints and a viewpoint tour, clash results, a 4D schedule player and linked-file visibility.
- **Russian and English interface**, chosen from the browser language.

## Where to go next

- [Getting started](getting-started.md): install the package or CLI tool and generate your first 3D viewer.
- [Public API](public-api.md): supported surface and key entry points of the library.
- [Third-party notices](https://github.com/IOExtend/IOViewer/blob/main/THIRD-PARTY-NOTICES.md): the three.js license and the components the command line tool ships.
- [Source on GitHub](https://github.com/IOExtend/IOViewer) and [DeepWiki](https://deepwiki.com/IOExtend/IOViewer) for an automatically generated overview of the repository.

IOViewer is not affiliated with, endorsed by or sponsored by Autodesk. Autodesk, Revit, Navisworks, ViewCube and TimeLiner are trademarks of Autodesk, Inc.
