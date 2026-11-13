# Third-party notices

The IOViewer library embeds a prebuilt viewer script (`src/IOViewer/Viewer/dist/viewer.js`) in every generated HTML
file. That script bundles the third-party component listed below. Apart from it, IOViewer uses only the .NET runtime
libraries (MIT, copyright (c) .NET Foundation and Contributors).

Development and build-time tools (esbuild, Playwright, xunit, xunit.runner.visualstudio, Microsoft.NET.Test.Sdk) are
not part of the published packages or the generated HTML.

## three.js 0.186.1

- Source: <https://github.com/mrdoob/three.js>
- License: MIT

```text
The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## IOViewer.Cli tool package

The `IOViewer.Cli` tool package reads IFC and Revit files through the engine adapters, so besides `IOViewer` and
`IOScene` (MIT, copyright (c) 2026 mahach666) it ships the assemblies listed below. The `IOViewer` library package
references none of them.

| Component | Use | License |
|---|---|---|
| [IfcIO](https://github.com/IOExtend/IfcIO) 0.11.1 and IfcIO.Scene 0.11.1 | read IFC files into a scene | MIT, copyright (c) 2026 IfcIO contributors |
| [RvtIO](https://github.com/IOExtend/RvtIO) 0.4.0 and RvtIO.Scene 0.4.0 | read Revit files into a scene | MIT, copyright (c) 2026 mahach666 |
| .NET runtime libraries (DeflateManaged sources, compiled into RvtIO) | managed inflate implementation adapted for tolerant decoding | MIT, copyright (c) .NET Foundation and Contributors |
| [OpenMcdf](https://github.com/openmcdf/openmcdf) 3.4.0, used by RvtIO | reads the compound file container of Revit files | MPL-2.0, copyright (c) 2010-2026 Federico Blaseotto, Jeremy Powell |
| [SharpZipLib](https://github.com/icsharpcode/SharpZipLib) 1.4.2, used by RvtIO | stream decompression | MIT, copyright (c) 2000-2022 SharpZipLib Contributors |

OpenMcdf is distributed unmodified under the Mozilla Public License 2.0 (<https://mozilla.org/MPL/2.0/>); its source
code is available at <https://github.com/openmcdf/openmcdf>.

The MIT-licensed components above are distributed under the following terms, each with the copyright line given in the
table:

```text
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

buildingSMART and IFC are registered trademarks or standards of buildingSMART International Ltd.; IfcIO is an
independent implementation of the IFC schemas. Autodesk and Revit are trademarks of Autodesk, Inc.; RvtIO is not
affiliated with, endorsed by or sponsored by Autodesk.
