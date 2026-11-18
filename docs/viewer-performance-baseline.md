---
title: Viewer GPU performance baseline
---

# Viewer GPU performance baseline

This reference covers adaptive and full-detail orbit, first frame, picking and memory for the viewer at
`85d57b023947cd1c1cd307ed89b288cf039af1f9`. The viewport was 1920×1080 at device pixel ratio 1.
Headed Chromium 158.0.8127.18 ran in ANGLE D3D11 with display pacing enabled on a 60 Hz desktop.
The host ran Windows 11 build 26300 with a Ryzen 9 9900X3D, Node.js 24.11.1 and .NET SDK 10.0.401.

| GPU mode | Renderer | Windows driver |
| --- | --- | --- |
| `integrated` | AMD Radeon Graphics, device `0x13c0` | 32.0.21030.31 |
| `default` | NVIDIA GeForce RTX 4080, device `0x2704` | 32.0.16.2124 |

## Reproduce the workloads

From the repository root, build the bundle at the revision you want to measure, then export the two fixtures.
The synthetic pipe network uses the generator's fixed seed and default geometry reuse. The IFC is the
Schependomlaan design model. [Pinned IFC source](https://github.com/openBIMstandards/Archive-DataSetSchependomlaan/blob/e6971d897b60f04ea28b4e3f2acf80d05f269197/Design%20model%20IFC/IFC%20Schependomlaan.ifc)

```powershell
$bench = Join-Path ([IO.Path]::GetTempPath()) 'ioviewer-reference'
New-Item -ItemType Directory -Force -Path $bench | Out-Null
$ifc = Join-Path $bench 'Schependomlaan.ifc'
$source = 'https://raw.githubusercontent.com/openBIMstandards/Archive-DataSetSchependomlaan/e6971d897b60f04ea28b4e3f2acf80d05f269197/Design%20model%20IFC/IFC%20Schependomlaan.ifc'
Invoke-WebRequest -Uri $source -OutFile $ifc
if ((Get-FileHash -LiteralPath $ifc -Algorithm SHA256).Hash -ne '2C3565CA1904F2AA61ADAB92024CF3755B2C5B21A498144D3094D7CB58CEBEC7') {
    throw 'Unexpected Schependomlaan IFC checksum'
}

npm --prefix src/IOViewer/Viewer ci
npm --prefix src/IOViewer/Viewer run build
dotnet run tools/SyntheticModel/SyntheticModel.cs -c Release -- --elements 400000 --out (Join-Path $bench 'Synthetic-400k.html')
dotnet run --project src/IOViewer.Cli -c Release -f net10.0 -- $ifc -o (Join-Path $bench 'Schependomlaan.html')
```

The SHA-256 values below are for the bytes decoded from each HTML page's BIN block. The synthetic hash matched on
two independent exports.

| Workload | Decoded BIN SHA-256 |
| --- | --- |
| Synthetic-400k | `c888a94c8ffa2c6972dff7966bf335c177e399174a7e0553ea420917b5841546` |
| Schependomlaan | `014cbfe49ee7164bdd2115155f04a22d0c4f0abaeec819689288c249d85bacf7` |

### Run the benchmark

Run from the viewer directory. Leave CPU profiling, uncapped rendering and startup-only mode disabled for this
comparison. Keep the browser visible, run one benchmark at a time and check the `renderer` in every report.
Chromium's low-power preference selects the integrated GPU on the reference host.

```powershell
Set-Location src/IOViewer/Viewer
npx playwright install chromium
$env:PERF_MODELS = (Join-Path $bench 'Synthetic-400k.html') + ',' + (Join-Path $bench 'Schependomlaan.html')
$env:PERF_OUT = Join-Path $bench 'reports'
Remove-Item Env:PERF_PROFILE, Env:PERF_STARTUP_ONLY, Env:PERF_UNCAPPED, Env:PERF_LADDER, Env:PERF_VARIANTS -ErrorAction SilentlyContinue
for ($trial = 1; $trial -le 3; $trial++) {
    $order = if ($trial % 2 -eq 1) { @('default', 'integrated') } else { @('integrated', 'default') }
    foreach ($gpu in $order) {
        $env:PERF_GPU = $gpu
        $env:PERF_LABEL = "$gpu-$trial"
        npm run perf
        if ($LASTEXITCODE -ne 0) { throw "Benchmark failed for $env:PERF_LABEL" }
    }
}
```

Each `ladder-<label>.json` contains both workloads, with separate `perf-<label>-<model>.json` files for each page.
Use `readyMs` for navigation to first frame submission, `orbit.p95Ms` and `orbitFull.p95Ms` for the p95 interval
between animation frames, and `pickMs` for the median pick at the fitted scale. The adaptive orbit reports
the median share of submitted triangles relative to the full spans of cells and chunks in view in `orbit.drawnMedian`.
`memory.gpuBytes` counts the scene's GPU buffers
and slot textures, and `heapMB` samples Chromium's JavaScript heap just after load. Divide byte counts by 1,048,576
for MiB. The harness's `htmlMB` and `heapMB` fields already use MiB.

## Reference results, 2026-11-18

The two GPUs opened the same exported files. The synthetic workload covers the mixed path, with most instances drawn
in instanced cells. Schependomlaan uses merged chunks.

| Workload | Elements | Triangles | Merged instances | Instanced instances | HTML, MiB | Scene GPU buffers, MiB |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Synthetic-400k | 400,000 | 38,400,000 | 44 | 399,956 | 107.61 | 33.94 |
| Schependomlaan | 3,337 | 247,472 | 3,277 | 0 | 14.06 | 3.05 |

Each timing is the median of three runs, with the observed minimum and maximum in parentheses. Heap and drawn share
are medians across the three runs.

| Workload | GPU | Ready, ms | Adaptive orbit p95, ms | Adaptive drawn share | Full-detail orbit p95, ms | Pick, ms | JS heap, MiB |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Synthetic-400k | Radeon | 2,097.5 (2,088.8–2,100.3) | 33.5 (33.5–50.1) | 32.1% | 100.1 (100.0–100.1) | 10.8 (9.0–10.9) | 246.77 |
| Synthetic-400k | RTX 4080 | 1,676.2 (1,635.6–1,798.4) | 33.3 (16.8–49.9) | 100% | 16.8 (16.8–66.7) | 2.1 (1.8–5.6) | 246.90 |
| Schependomlaan | Radeon | 187.7 (160.5–335.6) | 16.8 (16.8–16.8) | 100% | 16.8 (16.8–16.8) | 0.9 (0.8–0.9) | 18.36 |
| Schependomlaan | RTX 4080 | 276.7 (181.0–292.2) | 16.8 (16.8–33.5) | 100% | 16.8 (16.8–33.4) | 0.3 (0.2–0.6) | 18.08 |

When evaluating instancing and picking, compare full-detail p95 with the same renderer and workload, and read adaptive
p95 alongside its drawn share. The RTX full-detail range on the synthetic scene is too wide to establish a regression
threshold from these runs. [Instancing and picking issue](https://github.com/IOExtend/IOViewer/issues/12)

## Distance measurement hover

On the same machine and Synthetic-400k workload, the harness records 60 paired pick and measurement samples per GPU.
Each pair uses the same pixel after the orbit returns to the fitted scale, and consecutive pairs use different
pixels. The harness warms the picking shaders and geometry cache first. The timings cover the synchronous GPU
readback and target computation. Every measured hover snapped to a vertex.

| GPU | Pick p50 / p95, ms | Measurement hover p50 / p95, ms |
| --- | ---: | ---: |
| Radeon | 10.8 / 11.4 | 12.3 / 12.9 |
| RTX 4080 | 1.7 / 2.0 | 2.0 / 2.4 |

Set `PERF_MODELS` to the Synthetic-400k HTML exported with the current bundle and run the same harness. Read
`pickMs` and `pickP95Ms` alongside `measureSnap.medianMs`, `measureSnap.p95Ms` and `measureSnap.kinds`.

## Instance bounds in the picking pass

Set `PERF_PICK_BOUNDS_ONLY=1` and point `PERF_MODELS` at the current Synthetic-400k and Schependomlaan exports.
Run on both GPU modes as above. The harness alternates full-cell and bounded draws on each pixel, flushes the pick
cache and requires equal hit IDs and coordinates. It repeats an 81-pixel grid and up to 48 known hit pixels three
times each with the same fitted camera. `pickBounds` in the reports includes hit counts and median submitted triangles.
Export Synthetic-1M the same way with `--elements 1000000` to reproduce the million-element workload.

| Workload | GPU | Samples | Full cells p50 / p95, ms | Instance bounds p50 / p95, ms |
| --- | --- | --- | ---: | ---: |
| Synthetic-400k | Radeon | Grid, 3 hits of 243 | 8.8 / 11.3 | 1.9 / 4.4 |
| Synthetic-400k | Radeon | 144 hits | 8.7 / 10.4 | 2.0 / 3.0 |
| Synthetic-400k | RTX 4080 | Grid, 3 hits of 243 | 2.0 / 2.7 | 1.9 / 2.7 |
| Synthetic-400k | RTX 4080 | 144 hits | 1.8 / 2.3 | 1.6 / 2.1 |
| Synthetic-1M | Radeon | Grid, 6 hits of 243 | 21.9 / 25.8 | 5.2 / 8.2 |
| Synthetic-1M | Radeon | 144 hits | 20.0 / 25.7 | 5.5 / 7.5 |
| Schependomlaan | Radeon | 144 hits | 0.5 / 0.6 | 0.5 / 0.7 |
| Schependomlaan | RTX 4080 | 144 hits | 0.2 / 0.3 | 0.2 / 0.3 |

The median triangle count for Synthetic-400k hits fell from 4,046,612 to 62,948. On Synthetic-1M, with 96 million
triangles in the model, it fell from 10,339,788 to 159,872. All sample pairs matched.
Schependomlaan draws only merged chunks, so both runs submitted 247,472 triangles. [Instancing and picking issue](https://github.com/IOExtend/IOViewer/issues/12)

## Per-instance orbit detail

Set `PERF_ORBIT_DETAIL_ONLY=1` and run the harness on the current Synthetic-400k, Synthetic-1M and Schependomlaan
exports. The fixed-budget comparison completes 72 identical camera poses per mode using an offscreen render and a
one-pixel readback. Both modes get the same budget of up to 20 million weighted triangles. The adaptive comparison
uses the normal controller and reports animation-frame intervals from the same starting view.

The following results are from the initial experiment with per-instance selection enabled throughout motion
(`f0c1918`).

| Workload | GPU | Fixed frame p95, ms, cell / instance | Fixed median triangles, cell / instance | Adaptive frame p95, ms, cell / instance | Adaptive median drawn share, cell / instance |
| --- | --- | ---: | ---: | ---: | ---: |
| Synthetic-400k | Radeon | 34.7 / 35.2 | 12.36 M / 12.28 M | 33.5 / 50.3 | 25.5% / 32.0% |
| Synthetic-1M | Radeon | 26.1 / 24.1 | 7.60 M / 5.27 M | 50.0 / 50.0 | 8.0% / 5.6% |
| Synthetic-400k | RTX 4080 | 14.0 / 14.2 | 12.36 M / 12.28 M | 16.8 / 33.4 | 100% / 100% |
| Synthetic-1M | RTX 4080 | 9.2 / 10.9 | 7.60 M / 5.27 M | 33.4 / 33.4 | 56.1% / 100% |
| Schependomlaan | Radeon | 2.2 / 1.9 | 247,472 / 247,472 | 16.8 / 16.8 | 100% / 100% |
| Schependomlaan | RTX 4080 | 33.2 / 0.7 | 247,472 / 247,472 | 16.8 / 16.8 | 100% / 100% |

These are single runs per GPU. Both paths submit identical geometry in the merged control, which shows the
variance in the timed frames. On Synthetic-1M, CPU preparation at fixed budget took 4.7 / 8.7 ms p95 on Radeon
and 4.3 / 7.1 ms on RTX 4080. More precise selection trades CPU preparation for fewer submitted triangles.

Instance detail keeps 48 bytes of CPU transform data per instanced slot and allocates reusable CPU/GPU draw buffers
as needed. The Radeon run on Synthetic-1M retained 45.8 MiB of source transforms and allocated 18.8 MiB of compact
draw data on each side. Read `memory.detailSourceBytes` and `memory.detailBytes` for these totals.

### Adaptive frame budget with refinement

Motion starts with cell detail. After 20 consecutive moving frames with detail cut and measured cost below
the controller's existing growth threshold, the next frame may use per-instance detail. A slow frame
returns to cell detail immediately. This keeps the original detail budget and lets the viewer refine selection
when rendering and frame preparation leave enough headroom.

For the 400,000-element check, export the same model with the viewer at `4288013` and with the updated bundle.
Set `PERF_ADAPTIVE_ORBIT_ONLY=1` and pass the two exports to `PERF_MODELS`. Run four trials per GPU with the two
files in alternating order. Each trial times the default adaptive orbit after the first full frame settles.

| GPU | Main p95 median (range), ms | Refined policy p95 median (range), ms | Main median submitted triangles | Refined policy median submitted triangles |
| --- | ---: | ---: | ---: | ---: |
| Radeon | 33.5 (33.4–33.5) | 33.5 (33.5–33.5) | 11.11 M | 12.36 M |
| RTX 4080 | 33.3 (33.2–33.4) | 25.1 (16.8–33.4) | 38.40 M | 38.40 M |

The Radeon trial view stayed on cell detail. On the RTX 4080, two trials used one refined frame each, and
the other two stayed on cell detail. The report's `refinedFrames` field records this choice.
