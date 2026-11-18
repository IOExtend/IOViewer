---
title: Viewer startup performance
---

# Viewer startup performance

Set `PERF_STARTUP_ONLY=1` when running `npm run perf` from `src/IOViewer/Viewer`. The harness opens the exported pages
over `file://` and stops after the first render. It writes JSON and a Markdown summary to `PERF_OUT`. Set `PERF_PROFILE=1`
for a Chromium CPU profile. Run the timing comparison with CPU profiling off.

The report measures META parsing, BIN decoding, `ModelScene` construction and the first renderer call in milliseconds.
Open time starts at navigation and ends when the viewer resolves `ready`, after submitting the first frame. It includes
HTML parsing and browser startup work. On browsers with Long Tasks reporting, blocking time sums the portion above
50 ms for each reported task before `ready`. The heap figure is the largest JavaScript heap sample at the phase
boundaries. Brief allocations between samples and GPU memory are outside that measurement.

See the [viewer GPU baseline](viewer-performance-baseline.md) for the full orbit and picking measurements.

## Reference workloads

- Generate the deterministic 200,000-element fixture with `PERF_LADDER=200000`. It has 200,000 instances and
  19,200,000 triangles. Alternatively generate it from the root with
  `dotnet run tools/SyntheticModel/SyntheticModel.cs -c Release -- --elements 200000 --out Synthetic-200k.html`.
- Export Schependomlaan with `dotnet run --project src/IOViewer.Cli -c Release -f net10.0 -- Schependomlaan.ifc -o Schependomlaan.html`
  and set `PERF_MODELS` to the HTML path. The measured export has 3,337 elements, 3,277 instances and 247,472 triangles.
  The IFC SHA-256 is `2c3565ca1904f2aa61adab92024cf3755b2c5b21a498144d3094d7cb58cebec7`.
  [Pinned IFC source](https://github.com/openBIMstandards/Archive-DataSetSchependomlaan/blob/e6971d897b60f04ea28b4e3f2acf80d05f269197/Design%20model%20IFC/IFC%20Schependomlaan.ifc)

To compare builds, export or assemble one set of pages per build, giving every page a unique filename. List all pages
in `PERF_MODELS` in a single run and reverse the order of the two builds on alternating runs. Assign a new `PERF_LABEL`
to each run. The timing below used identical page data for each pair and changed only the embedded viewer bundle.

## Affine instance bounds

Before used commit `c6fc7dee05514c43c30dc298f75193202ad8a8b9`, which already had the same profiling hooks.
After computes each axis range directly from the affine matrix and the local box. This avoids transforming eight corners
and constructing a matrix view for every instance.

Nine paired runs used headed Chromium 158.0.8127.18 on Windows 11 build 26300, Ryzen 9 9900X3D, GeForce RTX 4080
driver 32.0.16.2124 (ANGLE D3D11), viewport 1920×1080, device pixel ratio 1.

| Median metric | Synthetic before | Synthetic after | Schependomlaan before | Schependomlaan after |
| --- | ---: | ---: | ---: | ---: |
| META parse, ms | 35.4 | 34.7 | 2.6 | 2.5 |
| BIN decode, ms | 3.7 | 3.7 | 0.4 | 0.4 |
| Scene preparation, ms | 726.7 | 684.5 | 41.6 | 41.5 |
| First render call, ms | 320.3 | 301.0 | 15.7 | 14.8 |
| Open, ms | 1,970.7 | 1,274.6 | 171.5 | 174.4 |
| Longest startup task, ms | 1,547 | 843 | 107 | 106 |
| Startup blocking, ms | 1,763.4 | 1,029.7 | 57 | 56 |
| Sampled peak JS heap, MiB | 406.7 | 406.9 | 19.3 | 20.4 |

Scene preparation had the highest median among the timed phases. The median within-pair change in scene preparation
was −12.4 ms for the synthetic workload and −1.6 ms for Schependomlaan. Synthetic open times ranged from 1,225 to
2,126 ms before and 1,213 to 2,006 ms after. A separate seven-run series gave open-time medians of 1,458 ms before and
1,622 ms after. The variation leaves the end-to-end effect unresolved. No timing threshold is set from these runs.
