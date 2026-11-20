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

## Multi-gigabyte synthetic model

From the repository root, generate the spatially tiled industrial plant into an empty folder on a volume with more than
15 GB free. The generator uses a fixed seed to vary each vessel's geometry. It runs the standard HTML exporter on
one tile at a time and stops when the sum of the tile file sizes reaches 15,000,000,000 bytes.

```powershell
dotnet run tools/SyntheticModel/TiledSyntheticModel/TiledSyntheticModel.cs -c Release -- D:/work/ioviewer-benchmarks/synthetic-industrial-15gb
```

Pass a byte target after the output folder for a smaller trial, for example `130000000` for two tiles. Each tile is also
a standalone HTML export with ordinary format-3 META, BIN and PROPS blocks. `manifest.json` lists the world-space
bounds and RTC offset of each tile in metres, together with global element ID ranges and file sizes.

The reference generation contains 171 tiles, 1,094,148 elements and 1,186,056,432 triangles. The HTML tiles occupy
15,000,039,694 bytes in total, including base64 encoding and the viewer. Their decoded BIN blocks total 10,753,286,544 bytes.

### Stream one scene

#### Real IFC and RVT

Export a native source with the regular CLI, using the `.ivmesh` extension for the offline builder. The same command
accepts an RVT path. Run from the repository root, then from `src/IOViewer/Viewer` for the Node.js commands.

```powershell
dotnet run --project src/IOViewer.Cli -c Release -f net10.0 -- D:/models/model.ifc -o D:/models/model.ivmesh
Set-Location src/IOViewer/Viewer
npm ci
npm run pack-clusters -- D:/models/model.ivmesh D:/models/model-clusters
npm run stream -- D:/models/model-clusters
```

The CLI uses the same IFC and RVT adapters as standalone HTML. It writes rebased indexed mesh records to disk, so
the handoff does not need one HTML block for the scene. Import still constructs a `SceneDocument` in memory. Only
triangle meshes enter the cluster package. Triangle positions, material colors and opacity are carried over to the
full-resolution pages, including UVs when the source supplies them. Authored normals are transformed when present.
The builder derives missing normals from the triangles. The clustered and standalone viewers share the toolbar,
model tree, properties panel, context menu, navigation cube, perspective and orthographic controls. The section
tools clip drawing and picking and support filled cuts through closed meshes. Distance measurement snaps to
vertices, midpoints and edges on the original mesh. Display modes include materials, textures, white and
wireframe, with an opacity control.

Current packages carry the original element IDs on leaf triangles and short names, categories, types, levels and
source IDs in the manifest when the importer supplies them. The tree can search and group these fields without
requesting any property blocks. The viewer traces the original geometry when selecting, so the displayed LOD
does not change the hit ID. It requests a property record once a single element is selected. Older annotated
packages still open with their existing tree fields. Re-export and repack them with the current CLI to carry
authored textures, grids, linked models, saved views, clashes, BCF and 4D. The `.ivmesh` export accepts the same
review inputs as HTML, including `--bcf`. Element visibility and isolation use exact page membership; when a
coarse page contains hidden elements the viewer draws its ready descendants instead. Linked model visibility,
BCF visibility and 4D playback use independent layers. `--geometry-only` builds omit element and review data
and retain navigation, clipping, measurement and geometry display modes. The streaming server limits the
manifest, including embedded review metadata and textures, to 64 MiB.

The builder spatially partitions the input into leaves of at most 8,192 triangles while preserving the source triangles.
It uses meshoptimizer to construct simplified parent meshes bottom-up in groups of up to four. Parent pages carry
accumulated simplification errors in metres. The browser chooses a visible cut by projected error with hysteresis and
keeps drawing a parent until its visible children are resident. It switches the covered branch in a single frame
with one mesh per branch. A branch already refined stays split until its parent is within one pixel of error,
regardless of the adaptive threshold for admitting new detail. Parents
try simplification with locked borders first. Disconnected geometry may need relaxed or grid-based simplification to
fit a page, so borders at coarse levels need not be watertight. Full detail retains the original mesh.

Initial framing uses triangle-weighted record centres around the core of the scene. **Fit all** uses the complete
model bounds. The 256 MiB budget accounts for resident and pending page buffers. The initial coarse pages are pinned.
The viewer requests the next detail level before it reaches the draw threshold and prefetches into a guard band
while moving. Speculative pages can use free space in the cache. A group blocking currently visible detail can evict
pages and takes precedence, with a bonus for groups near completion and for pages near the camera target. Upload work
is capped per frame. Each upload submits one triangle to initialize the page buffers before the full mesh becomes
eligible for display. Slow frames during movement or refinement can reduce framebuffer scale to 60% per axis.
The usual draw threshold returns when motion ends, and native resolution returns once the uploads finish.
Wheel zoom limits the apparent camera distance by the visible model radius in either projection. Perspective pan
and zoom use the depth of the picked point when it lies beyond the virtual camera target. A miss checks the viewport
centre to keep gestures responsive after the target has drifted close to the eye.
The benchmark holds detail responses to verify that the viewer continues to draw the selected region, then orbits the
model and follows a closer path through it.

```powershell
$env:PERF_MESH_MODEL = 'D:/models/model-clusters'
$env:PERF_GPU = 'integrated'
npx playwright test --config playwright.perf.config.js mesh-lod.perf.js
```

The real-model check used Chromium 158 at 1920×1080 on the host described above. The camera orbited for 12 seconds
and moved through the core for 15 seconds. Results are one run per GPU and model.

| Input | Triangles / total pages | GPU | Overview, s | Orbit p95 / max, ms | Close p95 / max, ms | Peak page buffers, MiB |
| --- | ---: | --- | ---: | ---: | ---: | ---: |
| 746 MB IFC | 21,380,864 / 5,424 | Radeon | 1.45 | 16.8 / 23.7 | 16.8 / 19.4 | 61.3 |
| 746 MB IFC | 21,380,864 / 5,424 | RTX 4080 | 1.09 | 16.8 / 21.2 | 16.8 / 19.5 | 61.1 |
| 931 MB RVT | 7,755,320 / 1,943 | Radeon | 1.18 | 16.8 / 33.3 | 50.0 / 116.7 | 256.0 |
| 931 MB RVT | 7,755,320 / 1,943 | RTX 4080 | 1.00 | 16.8 / 50.0 | 16.8 / 23.2 | 256.0 |

Both hierarchies retained all triangles returned by their adapters. The RVT adapter reported 3,157 elements without
drawable geometry and 33 with potentially missing parts. Import and handoff took around 21 seconds for the IFC and
7 minutes 26 seconds for the RVT. The measurements in the table start at browser navigation to prepared data.

#### Close RVT profile

The second traversal can still request pages. The third traversal holds new requests after the pending pages finish
and checks that the browser neither downloads nor uploads pages during that route. The report includes GPU time
from WebGL disjoint timer queries, CPU staging and submission times, and physical framebuffer scale.

~~~powershell
$env:PERF_MESH_PROFILE_MODEL = 'D:/models/rvt-clusters'
$env:PERF_GPU = 'integrated'
$env:PERF_MESH_NATIVE_PIXELS = '1'
$env:PERF_LABEL = 'rvt-native'
npx playwright test --config playwright.perf.config.js mesh-profile
Remove-Item Env:PERF_MESH_NATIVE_PIXELS
$env:PERF_LABEL = 'rvt-adaptive'
npx playwright test --config playwright.perf.config.js mesh-profile
~~~

The 931 MB RVT, Chromium at 1920×1080 on Radeon, one 15-second run per phase and mode.

| Route | Frame p95, native / adaptive, ms | GPU p95, native / adaptive, ms | Frame p99, native / adaptive, ms | Adaptive scale p05 |
| --- | ---: | ---: | ---: | ---: |
| First traversal | 33.5 / 33.3 | 30.5 / 23.1 | 66.7 / 33.6 | 0.70 |
| Second traversal | 50.1 / 33.4 | 38.2 / 25.5 | 83.4 / 50.1 | 0.60 |
| Resident pages only | 50.0 / 33.4 | 44.0 / 28.7 | 66.7 / 50.1 | 0.70 |

The resident-only case submitted a median of 1.19 million triangles at native resolution and 1.34 million with
adaptation. CPU submission was 2.5 and 2.4 ms p95. There were no detail requests or uploads during either resident-only route.

#### Rapid approach to a cold area

The camera travels 24× closer in 1.8 seconds, then stops. The harness records the first frame with original leaf
geometry and the last frame with a nearby parent above six pixels of estimated projected error. Nearby bounds
are within twice the camera's target distance. These are geometric estimates and include occluded clusters.

| Package | First original leaf, before / after change | Last nearby coarse frame after arrival, with change |
| --- | ---: | ---: |
| 746 MB IFC | 383 ms after / 517 ms before arrival | 17 ms |
| 931 MB RVT | 67 ms after / 1,150 ms before arrival | 1,250 ms |
| 14.85 GB federation | 517 ms after / 1,150 ms before arrival | 2,050 ms |

One run per version and package, with Chromium on Radeon at 1920×1080. The original implementation had a
parent above six pixels somewhere in view for the full three-second observation on each package. With the
change, the federation still had distant parents above that threshold at six seconds. Its geometric page
cache was at 256 MiB. The approach had no blank frames, and the frame interval p95 was 16.9 ms on IFC,
33.3 ms on RVT and 33.6 ms on the federation.

On the separate five-route federation benchmark, the updated loader transferred 723 MiB of pages, up from
276 MiB with the previous review shell. Peak resident and pending pages stayed under 256 MiB. The close
routes ran at 16.8–33.4 ms p95 with no blank frames.

The later single-cut change passed a pixel test with differently coloured LODs and all-or-nothing coverage.
Repeated cold approaches drew the first original leaf 583 ms before arrival on IFC and about 1.15–1.18 s before
arrival on RVT and the federation. Nearby coarse parents were gone at arrival on IFC, after 1.28 s on RVT,
and after 1.73 s on the federation. Frame interval p95 was 16.8, 33.3 and 33.4 ms respectively.

~~~powershell
$env:PERF_MESH_MODEL = 'D:/models/federation'
$env:PERF_GPU = 'integrated'
npx playwright test --config playwright.perf.config.js mesh-approach
~~~

#### 14.85 GB federation of real geometry

Build geometry-only packages from current `.ivmesh` exports before composing the benchmark. The script arranges copies
of the input packages in one scene. It writes each placement's mesh bytes to disk and coalesces the overview pages
into a separate file for one startup request.

~~~powershell
npm run pack-clusters -- D:/models/model.ifc.ivmesh D:/models/ifc-geometry --geometry-only
npm run pack-clusters -- D:/models/model.rvt.ivmesh D:/models/rvt-geometry --geometry-only
node federate-mesh-pages.js D:/models/federation 14750000000 D:/models/ifc-geometry D:/models/rvt-geometry
npm run stream -- D:/models/federation 8790
$env:PERF_FEDERATED_MODEL = 'D:/models/federation'
$env:PERF_GPU = 'integrated'
npx playwright test --config playwright.perf.config.js mesh-federation
~~~

The tested archive contains 14,850,100,406 mesh bytes, 115,929 pages and 458,423,624 source triangles in 31 repeated
placements from the two real models above. Chromium on Radeon drew the overview in 1.07 s from navigation.
The eight-second orbit around the whole scene ran at 16.8 ms p95. Across five six-second close routes, p95 ranged
from 16.8 to 33.3 ms and the worst interval was 66.7 ms. Every route reported zero blank frames. The viewer
evicted 493 pages and stayed under its 256 MiB page-buffer budget. A page was requested successfully at offset
14,848,148,992. The budget excludes the manifest, renderer and browser overhead. A single native model of that
size was unavailable.

With the shared review shell, a repeat of the same benchmark drew its overview in 0.85 s. Orbit p95 was 16.8 ms
and the five close-route p95 intervals ranged from 16.7 to 33.3 ms. All routes still reported zero blank frames.
The cache evicted 540 pages without exceeding 256 MiB.

With the review tools enabled in the streaming viewer, the same geometry-only federation drew its overview in
1.22 s. Orbit p95 was 16.8 ms and the five close-route p95 intervals ranged from 16.8 to 33.4 ms, with zero blank
frames. The maximum page-buffer charge was 268,435,360 bytes. The annotated IFC and RVT packages both loaded
original properties and passed the hide, restore and clipped picking checks. Their cold-approach p95 was 16.9 ms.

The browser checks searched the tree, selected an original element and loaded its property groups in the 746 MB IFC
and a separate 139 MB RVT. A two-cluster fixture checked a distance measurement across the seam and both box clipping
modes in orthographic projection. The package for the 139 MB RVT contains 4,718,560 triangles. The repeat import of the 931 MB RVT
for annotation failed with an out-of-memory error inside RvtIO. Its pre-existing geometry package was used for the
performance checks.

To check properties on a real annotated package and the section plane across a rendered cluster seam, set
`PERF_MESH_TOOLS_MODEL` to an IFC or RVT cluster directory packed with the default options and run
`npx playwright test --config playwright.perf.config.js mesh-tools`.

#### Synthetic vessel reference

From `src/IOViewer/Viewer`, pack the generated model once and run the local server. Open the printed address.

```powershell
npm run pack-clusters -- D:/work/ioviewer-benchmarks/synthetic-industrial-15gb D:/work/ioviewer-benchmarks/industrial-clusters
npm run stream -- D:/work/ioviewer-benchmarks/industrial-clusters
```

The packer verifies the topology and quantized lattice of the synthetic vessels. It retains every source position and
triangle. The 17,100 leaves contain up to 64 vessels each. Full mesh pages contain up to 408 KiB of positions and normals
with indices reconstructed from the verified shared topology. The packed files contain a 30.6 MB resident instance table,
7.14 GB of fine geometry, and a manifest that indexes the byte ranges. The original HTML exports stay usable on their own.

The viewer draws all vessels from the resident instance table at overview. It picks among three cached approximations
and the original mesh using frustum and projected-error tests over spatial roots and leaves. There is hysteresis between
levels, and the approximated surfaces morph toward the next resolution. The approximate meshes remain drawn while fine
pages are pending. Each arriving page replaces its approximation with a 140 ms complementary dither. The viewport admits
at most two new GPU pages per frame and issues at most four page requests at a time. The 256 MiB accounting reserves the
resident table, its possible GPU uploads and the fine mesh buffers, including in-flight pages. JavaScript object and
graphics-driver overhead are outside the accounting.

The packer supports the synthetic vessel topology. The clustered view operates on geometry and material colors. The
standalone HTML exports also include selection, properties, and section tools.

```powershell
$env:PERF_CLUSTER_MODEL = 'D:/work/ioviewer-benchmarks/industrial-clusters'
$env:PERF_GPU = 'integrated'
npx playwright test --config playwright.perf.config.js lod.perf.js
```

The benchmark holds fine page responses at a fixed camera and verifies that the same vessels are rendered before and
after refinement. It then flies 2.82 km at the original reference height in 30 seconds and flies 0.79 km close to the
vessels in 20 seconds. Additional camera jumps fill the cache and verify that eviction stays within the budget.

One reference run per GPU used Chromium 158 at 1920×1080 on the host described above.

| GPU | Overview, s | Flyover p95 / max, ms | Close route p95 / max, ms | Requested fine detail drawn, close route |
| --- | ---: | ---: | ---: | ---: |
| Radeon | 1.26 | 16.8 / 66.7 | 16.8 / 33.3 | 98.4% |
| RTX 4080 | 0.65 | 16.8 / 33.4 | 16.8 / 17.0 | 98.7% |

At the fixed camera, 3,392 vessels were drawn before and after releasing the page responses. Both runs admitted
216 pages, evicted five and peaked at 255.9 MiB of accounted buffers during the cache pressure check.

### Earlier whole-area reference

Serve the unpacked HTML exports to reproduce the previous whole-area measurements.

```powershell
npm run stream -- D:/work/ioviewer-benchmarks/synthetic-industrial-15gb
```

The initial view displays the bounds of every area. Zoom in or double-click an area's bounds to see the actual meshes. The viewer
prioritizes up to two nearby areas in the frustum, prepares one tile in a worker at a time, and submits up to two mesh
batches per frame. It frees geometry and material GPU resources on eviction. The 256 MiB cap covers prepared mesh
buffers including a reservation for the in-flight result. HTML input is limited to 96 MiB per tile and decoded BIN and
temporary worker allocations are separate from the mesh cap.

This mode supports navigation and material colors for the tiled benchmark format. Element interaction, property panels,
texture rendering and section tools are available in the ordinary single-tile HTML exports.

To reproduce the whole-model flyover, run from the viewer directory. The test opens the overview, flies 2.82 km across
12 areas in 30 seconds at a fixed height, then jumps to the opposite side. The report records the animation-frame
intervals and the share of route time when the priority area has finished uploading all its detail batches.

```powershell
$env:PERF_STREAM_MODEL = 'D:/work/ioviewer-benchmarks/synthetic-industrial-15gb'
$env:PERF_GPU = 'integrated'
npx playwright test --config playwright.perf.config.js stream.perf.js
```

The reference run used Chromium 158 at 1920×1080 on the Windows host above. Results show one run per GPU.

| GPU | Overview, s | Full detail after a jump, s | Frame interval p95 / max, ms | Priority area fully detailed |
| --- | ---: | ---: | ---: | ---: |
| Radeon | 0.95 | 1.55 | 33.3 / 33.5 | 92.1% |
| RTX 4080 | 0.83 | 1.48 | 16.9 / 17.6 | 95.4% |

Both runs uploaded detail in all 12 route areas and the distant destination, evicted 12 areas, and submitted at most
7.88 million triangles in a frame during the route. The peak resident mesh size was 198.9 MiB. With the in-flight
reservation included, the peak budget charge was 227.5 MiB of 256 MiB on both GPUs.

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

## Instanced cells with a distant placement

The layout limits the radius of cell centres to 10% of the drawable model's diagonal. When a single placement
more than doubles that diagonal, the layout caps it at twice the diagonal of the remaining placements. All
placements enter the partition and the actual model bounds. One linear scan retains the two extrema on each
side, so the layout can evaluate these exclusions without sorting all placements. The partition allows up to
1,024 placements per cell and 8,192 instanced cells per scene.

On the regular Synthetic-400k model, three paired trials per GPU alternated the `790a881` and updated bundles
over identical model data with `PERF_ADAPTIVE_ORBIT_ONLY=1`.

| GPU | Baseline p95 median (range), ms | Updated p95 median (range), ms | Baseline / updated median submitted triangles |
| --- | ---: | ---: | ---: |
| Radeon | 33.6 (33.5–50.1) | 33.5 (33.4–33.6) | 12.37 M / 12.37 M |
| RTX 4080 | 16.8 (16.8–16.8) | 16.8 (16.8–16.8) | 38.40 M / 38.40 M |

For the outlier comparison, move the last Synthetic-1M instance to RTC X = 500,000 m by writing a float32
at `instances.matrix.o + (instances.count - 1) * 48 + 36` in the decoded BIN. Use the same edited payload for
both bundles. Fit the bounds of the other 999,999 placements, then set the camera at one quarter of that
fitted distance from the target. After warm-up, submit 36 evenly spaced orbit poses with full detail and
read one pixel per offscreen frame. Then run the five-second adaptive orbit from the same starting pose.
The table gives medians of three alternating pairs, with ranges for the two frame p95 measurements.

| GPU | Adaptive p95, before / after, ms | Full-detail completed p95, before / after, ms | Full-detail median CPU submission, before / after, ms |
| --- | ---: | ---: | ---: |
| Radeon | 33.6 (33.6–49.8) / 33.5 (33.5–33.5) | 212.6 (212.4–212.6) / 212.4 (212.4–212.6) | 4.7 / 7.0 |
| RTX 4080 | 16.8 (16.8–16.8) / 16.8 (16.8–16.8) | 16.6 (12.8–16.7) / 13.4 (13.3–16.3) | 3.7 / 5.6 |

The outlier case builds 1,666 cells, up from 1,104. At full detail the median draw count rises from 1,039
to 1,582 and median submitted triangles drop from 89.95 M to 89.57 M. This increases CPU submission time
in exchange for tighter spatial bounds. The outlier case tests a single divergent placement.
