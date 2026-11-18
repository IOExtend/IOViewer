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
between animation frames, and `pickMs` for the median of ten picks near the home view. The adaptive orbit reports
the median share of in-view instances drawn in `orbit.drawnMedian`. `memory.gpuBytes` counts the scene's GPU buffers
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
