using System.Globalization;
using System.Text;
using System.Text.Json;
using IOViewer.Model;

namespace IOViewer.Exporters;

/// <summary>
/// Generates standalone, single-file interactive 3D WebGL HTML BIM/CAD model viewers.
/// </summary>
public static class HtmlViewerExporter
{
    public static void Save(ViewerDocument doc, string filePath, HtmlViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(filePath);

        using var fs = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None);
        Export(doc, fs, options);
    }

    public static void Export(ViewerDocument doc, Stream stream, HtmlViewerOptions? options = null)
    {
        ArgumentNullException.ThrowIfNull(doc);
        ArgumentNullException.ThrowIfNull(stream);

        options ??= new HtmlViewerOptions();
        var jsonPayload = BuildJsonPayload(doc, options);
        var html = Template.Replace("<!--__MODEL_DATA_JSON__-->", jsonPayload);

        using var writer = new StreamWriter(stream, Encoding.UTF8, bufferSize: 8192, leaveOpen: true);
        writer.Write(html);
        writer.Flush();
    }

    public static string ExportToString(ViewerDocument doc, HtmlViewerOptions? options = null)
    {
        using var ms = new MemoryStream();
        Export(doc, ms, options);
        return Encoding.UTF8.GetString(ms.ToArray());
    }

    private static string BuildJsonPayload(ViewerDocument doc, HtmlViewerOptions options)
    {
        var bounds = doc.ComputeBoundingBox();
        var rtcOffset = bounds.IsEmpty ? Vector3d.Zero : bounds.Center;

        using var stream = new MemoryStream();
        using var writer = new Utf8JsonWriter(stream, new JsonWriterOptions { Indented = false });

        writer.WriteStartObject();
        writer.WriteString("title", options.Title);
        writer.WriteString("author", doc.Author ?? "IOViewer");
        writer.WriteString("createdAt", doc.CreatedAt ?? DateTimeOffset.UtcNow.ToString("O", CultureInfo.InvariantCulture));

        // Relative To Center (RTC) offset
        writer.WriteStartArray("rtcOffset");
        writer.WriteNumberValue(rtcOffset.X);
        writer.WriteNumberValue(rtcOffset.Y);
        writer.WriteNumberValue(rtcOffset.Z);
        writer.WriteEndArray();

        // Bounding Box (in local RTC space)
        writer.WriteStartObject("boundingBox");
        writer.WriteStartArray("min");
        writer.WriteNumberValue(bounds.Min.X - rtcOffset.X);
        writer.WriteNumberValue(bounds.Min.Y - rtcOffset.Y);
        writer.WriteNumberValue(bounds.Min.Z - rtcOffset.Z);
        writer.WriteEndArray();
        writer.WriteStartArray("max");
        writer.WriteNumberValue(bounds.Max.X - rtcOffset.X);
        writer.WriteNumberValue(bounds.Max.Y - rtcOffset.Y);
        writer.WriteNumberValue(bounds.Max.Z - rtcOffset.Z);
        writer.WriteEndArray();
        writer.WriteEndObject();

        // Textures
        writer.WriteStartArray("textures");
        foreach (var tex in doc.Textures)
        {
            writer.WriteStartObject();
            writer.WriteNumber("id", tex.Id);
            writer.WriteString("mime", tex.MimeType);
            writer.WriteString("data", tex.Base64Data);
            writer.WriteNumber("sx", tex.ScaleX);
            writer.WriteNumber("sy", tex.ScaleY);
            writer.WriteEndObject();
        }
        writer.WriteEndArray();

        // Meshes (packed with Base64 Float32Array positions and Uint16/32Array indices)
        writer.WriteStartArray("meshes");
        int totalVerts = 0;
        foreach (var mesh in doc.Meshes)
        {
            if (totalVerts >= options.MaxMeshVertices) break;

            writer.WriteStartObject();
            writer.WriteNumber("id", mesh.Id);
            writer.WriteString("name", string.IsNullOrEmpty(mesh.Name) ? $"Mesh {mesh.Id}" : mesh.Name);
            if (mesh.ElementId.HasValue)
            {
                writer.WriteNumber("elementId", mesh.ElementId.Value);
            }

            var col = mesh.Color ?? new RgbaColor(200, 200, 200);
            writer.WriteStartArray("color");
            writer.WriteNumberValue(col.Rf);
            writer.WriteNumberValue(col.Gf);
            writer.WriteNumberValue(col.Bf);
            writer.WriteNumberValue(col.Af);
            writer.WriteEndArray();

            writer.WriteNumber("opacity", mesh.Opacity);
            if (mesh.TextureIndex.HasValue)
            {
                writer.WriteNumber("texIndex", mesh.TextureIndex.Value);
            }

            // Packed Binary Positions (Float32Array base64)
            writer.WriteString("positions", PositionsToBase64(mesh.Vertices, rtcOffset));

            // Packed Binary Indices (Uint16Array or Uint32Array base64)
            bool is16Bit = mesh.Vertices.Count <= 65535;
            writer.WriteBoolean("idx16", is16Bit);
            writer.WriteString("indices", is16Bit ? Indices16ToBase64(mesh.Indices) : Indices32ToBase64(mesh.Indices));

            writer.WriteEndObject();
            totalVerts += mesh.Vertices.Count;
        }
        writer.WriteEndArray(); // meshes

        // Elements (BIM Metadata)
        if (options.IncludeProperties && doc.Elements.Count > 0)
        {
            writer.WriteStartArray("elements");
            foreach (var el in doc.Elements)
            {
                writer.WriteStartObject();
                writer.WriteNumber("id", el.Id);
                writer.WriteString("name", el.Name);
                writer.WriteString("category", string.IsNullOrEmpty(el.Category) ? "General" : el.Category);
                writer.WriteString("type", el.TypeName);
                writer.WriteString("level", el.Level);
                if (!string.IsNullOrEmpty(el.LinkName))
                {
                    writer.WriteString("link", el.LinkName);
                }

                writer.WriteStartArray("meshIndices");
                foreach (var mi in el.MeshIndices)
                {
                    writer.WriteNumberValue(mi);
                }
                writer.WriteEndArray();

                writer.WriteStartObject("properties");
                foreach (var group in el.Properties)
                {
                    writer.WriteStartObject(group.Key);
                    foreach (var prop in group.Value)
                    {
                        writer.WriteString(prop.Key, prop.Value);
                    }
                    writer.WriteEndObject();
                }
                writer.WriteEndObject();

                writer.WriteEndObject();
            }
            writer.WriteEndArray();
        }

        // Viewpoints
        if (options.IncludeViewpoints && doc.Viewpoints.Count > 0)
        {
            writer.WriteStartArray("viewpoints");
            foreach (var vp in doc.Viewpoints)
            {
                writer.WriteStartObject();
                writer.WriteString("name", vp.Name);
                writer.WriteStartObject("camera");
                writer.WriteStartArray("position");
                writer.WriteNumberValue(vp.Camera.Position.X - rtcOffset.X);
                writer.WriteNumberValue(vp.Camera.Position.Y - rtcOffset.Y);
                writer.WriteNumberValue(vp.Camera.Position.Z - rtcOffset.Z);
                writer.WriteEndArray();
                writer.WriteStartArray("target");
                writer.WriteNumberValue(vp.Camera.Target.X - rtcOffset.X);
                writer.WriteNumberValue(vp.Camera.Target.Y - rtcOffset.Y);
                writer.WriteNumberValue(vp.Camera.Target.Z - rtcOffset.Z);
                writer.WriteEndArray();
                writer.WriteEndObject();
                writer.WriteEndObject();
            }
            writer.WriteEndArray();
        }

        // Grids
        if (options.IncludeGrids && doc.Grids is not null && doc.Grids.Lines.Count > 0)
        {
            writer.WriteStartArray("grids");
            foreach (var line in doc.Grids.Lines)
            {
                writer.WriteStartObject();
                writer.WriteString("name", line.Name);
                writer.WriteStartArray("start");
                writer.WriteNumberValue(line.Start.X - rtcOffset.X);
                writer.WriteNumberValue(line.Start.Y - rtcOffset.Y);
                writer.WriteNumberValue(line.Start.Z - rtcOffset.Z);
                writer.WriteEndArray();
                writer.WriteStartArray("end");
                writer.WriteNumberValue(line.End.X - rtcOffset.X);
                writer.WriteNumberValue(line.End.Y - rtcOffset.Y);
                writer.WriteNumberValue(line.End.Z - rtcOffset.Z);
                writer.WriteEndArray();
                writer.WriteEndObject();
            }
            writer.WriteEndArray();
        }

        // 4D TimeLiner
        if (options.IncludeTimeLiner && doc.TimeLiner is not null && doc.TimeLiner.Tasks.Count > 0)
        {
            writer.WriteStartObject("timeliner");
            writer.WriteString("name", doc.TimeLiner.Name);
            writer.WriteString("start", doc.TimeLiner.GetOverallStart().ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture));
            writer.WriteString("end", doc.TimeLiner.GetOverallEnd().ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture));

            writer.WriteStartArray("tasks");
            void WriteTask(ViewerTimeLinerTask t)
            {
                writer.WriteStartObject();
                writer.WriteString("id", t.Id);
                writer.WriteString("name", t.Name);
                writer.WriteString("type", t.TaskType.ToString().ToLowerInvariant());
                writer.WriteString("start", t.PlannedStart.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture));
                writer.WriteString("end", t.PlannedEnd.ToString("yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture));
                if (t.PlannedCost.HasValue) writer.WriteNumber("cost", t.PlannedCost.Value);
                writer.WriteNumber("progress", t.Progress);

                writer.WriteStartArray("attachedElements");
                foreach (var eid in t.AttachedElementIds)
                {
                    writer.WriteNumberValue(eid);
                }
                writer.WriteEndArray();

                writer.WriteEndObject();
                foreach (var child in t.Children) WriteTask(child);
            }

            foreach (var task in doc.TimeLiner.Tasks)
            {
                WriteTask(task);
            }
            writer.WriteEndArray();
            writer.WriteEndObject();
        }

        // Clash Tests
        if (options.IncludeClashes && doc.ClashTests.Count > 0)
        {
            writer.WriteStartArray("clashTests");
            foreach (var test in doc.ClashTests)
            {
                writer.WriteStartObject();
                writer.WriteString("name", test.Name);
                writer.WriteStartArray("clashes");
                foreach (var clash in test.Clashes)
                {
                    writer.WriteStartObject();
                    writer.WriteString("name", clash.Name);
                    writer.WriteString("el1", clash.Element1Name);
                    writer.WriteString("el2", clash.Element2Name);
                    writer.WriteString("status", clash.Status.ToString());
                    writer.WriteNumber("distance", clash.Distance);
                    writer.WriteStartArray("point");
                    writer.WriteNumberValue(clash.Point.X - rtcOffset.X);
                    writer.WriteNumberValue(clash.Point.Y - rtcOffset.Y);
                    writer.WriteNumberValue(clash.Point.Z - rtcOffset.Z);
                    writer.WriteEndArray();
                    writer.WriteEndObject();
                }
                writer.WriteEndArray();
                writer.WriteEndObject();
            }
            writer.WriteEndArray();
        }

        // Initial display state flags
        writer.WriteBoolean("initialWireframe", options.InitialWireframe);
        writer.WriteBoolean("initialWhiteMode", options.InitialWhiteMode);

        writer.WriteEndObject();
        writer.Flush();

        return Encoding.UTF8.GetString(stream.ToArray());
    }

    private static string PositionsToBase64(IReadOnlyList<Vector3d> vertices, Vector3d rtcOffset)
    {
        var floats = new float[vertices.Count * 3];
        int idx = 0;
        for (int i = 0; i < vertices.Count; i++)
        {
            var v = vertices[i];
            floats[idx++] = (float)(v.X - rtcOffset.X);
            floats[idx++] = (float)(v.Y - rtcOffset.Y);
            floats[idx++] = (float)(v.Z - rtcOffset.Z);
        }

        var bytes = new byte[floats.Length * sizeof(float)];
        Buffer.BlockCopy(floats, 0, bytes, 0, bytes.Length);
        return Convert.ToBase64String(bytes);
    }

    private static string Indices16ToBase64(IReadOnlyList<int> indices)
    {
        var shorts = new ushort[indices.Count];
        for (int i = 0; i < indices.Count; i++)
        {
            shorts[i] = (ushort)indices[i];
        }

        var bytes = new byte[shorts.Length * sizeof(ushort)];
        Buffer.BlockCopy(shorts, 0, bytes, 0, bytes.Length);
        return Convert.ToBase64String(bytes);
    }

    private static string Indices32ToBase64(IReadOnlyList<int> indices)
    {
        var ints = new uint[indices.Count];
        for (int i = 0; i < indices.Count; i++)
        {
            ints[i] = (uint)indices[i];
        }

        var bytes = new byte[ints.Length * sizeof(uint)];
        Buffer.BlockCopy(ints, 0, bytes, 0, bytes.Length);
        return Convert.ToBase64String(bytes);
    }

    private const string Template = """
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IOViewer - 3D BIM & CAD Viewer</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background: #18191c; color: #ececf1; overflow: hidden; height: 100vh; display: flex; }
  #canvas-container { position: relative; flex: 1; height: 100%; overflow: hidden; }
  canvas#glcanvas { width: 100%; height: 100%; display: block; }
  canvas#overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }

  /* Toolbar */
  .toolbar { position: absolute; top: 12px; left: 12px; display: flex; gap: 6px; z-index: 10; background: rgba(28,29,32,0.85); backdrop-filter: blur(8px); padding: 5px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
  .btn { background: #2c2d31; color: #ececf1; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 6px 12px; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.15s ease; outline: none; }
  .btn:hover { background: #3a3b40; color: #fff; }
  .btn.active { background: #3b82f6; color: #fff; border-color: #60a5fa; }

  /* Left Panel */
  .left-bar { position: absolute; top: 58px; left: 12px; width: 280px; max-height: calc(100vh - 120px); background: rgba(28,29,32,0.92); backdrop-filter: blur(8px); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); z-index: 10; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
  .panel-tabs { display: flex; border-bottom: 1px solid rgba(255,255,255,0.08); background: #222327; }
  .tab-btn { flex: 1; padding: 8px 4px; font-size: 11px; font-weight: 600; text-align: center; background: none; border: none; color: #888; cursor: pointer; border-bottom: 2px solid transparent; }
  .tab-btn.active { color: #60a5fa; border-bottom-color: #3b82f6; background: rgba(255,255,255,0.02); }
  .panel-content { padding: 10px; overflow-y: auto; flex: 1; font-size: 12px; max-height: 480px; }
  .tree-item { padding: 4px 6px; border-radius: 4px; cursor: pointer; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: flex; align-items: center; justify-content: space-between; }
  .tree-item:hover { background: rgba(255,255,255,0.06); }
  .tree-item.selected { background: #1e3a8a; color: #93c5fd; }
  .item-badge { font-size: 10px; background: rgba(255,255,255,0.1); padding: 1px 5px; border-radius: 10px; color: #aaa; }

  /* ViewCube */
  #viewcube-container { position: absolute; top: 16px; right: 16px; width: 90px; height: 90px; z-index: 15; perspective: 400px; }
  #viewcube { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transition: transform 0.05s ease-out; }
  .cube-face { position: absolute; width: 50px; height: 50px; left: 20px; top: 20px; background: rgba(45, 47, 54, 0.85); border: 1.5px solid rgba(96, 165, 250, 0.6); display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: bold; color: #93c5fd; cursor: pointer; border-radius: 3px; }
  .cube-face:hover { background: #3b82f6; color: #fff; }
  .face-top    { transform: rotateX(90deg) translateZ(25px); }
  .face-bottom { transform: rotateX(-90deg) translateZ(25px); }
  .face-front  { transform: translateZ(25px); }
  .face-back   { transform: rotateY(180deg) translateZ(25px); }
  .face-left   { transform: rotateY(-90deg) translateZ(25px); }
  .face-right  { transform: rotateY(90deg) translateZ(25px); }

  /* Directional Arrows around ViewCube */
  .cube-arrow { position: absolute; width: 18px; height: 18px; background: rgba(28,29,32,0.8); border: 1px solid rgba(255,255,255,0.2); border-radius: 50%; color: #93c5fd; font-size: 11px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 16; }
  .cube-arrow:hover { background: #3b82f6; color: #fff; }
  .arrow-up    { top: 0; left: 36px; }
  .arrow-down  { bottom: 0; left: 36px; }
  .arrow-left  { top: 36px; left: 0; }
  .arrow-right { top: 36px; right: 0; }

  /* Properties Sidebar (Right) */
  .right-bar { position: absolute; top: 120px; right: 12px; width: 300px; max-height: calc(100vh - 180px); background: rgba(28,29,32,0.92); backdrop-filter: blur(8px); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); z-index: 10; display: none; flex-direction: column; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
  .bar-title { padding: 10px 14px; font-size: 12px; font-weight: 600; background: #222327; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; }
  .bar-close { cursor: pointer; color: #888; font-size: 16px; }
  .bar-close:hover { color: #fff; }
  .props-content { padding: 12px; overflow-y: auto; flex: 1; font-size: 12px; }
  .prop-group { margin-bottom: 12px; }
  .group-title { font-weight: 600; font-size: 11px; color: #60a5fa; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px; }
  .prop-row { display: flex; justify-content: space-between; padding: 3px 0; border-bottom: 1px solid rgba(255,255,255,0.02); }
  .prop-key { color: #999; flex: 1; padding-right: 6px; }
  .prop-val { color: #eee; font-weight: 500; text-align: right; }

  /* Sectioning & Tools Panel */
  .section-panel { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(28,29,32,0.92); backdrop-filter: blur(8px); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 8px 16px; display: none; gap: 12px; align-items: center; z-index: 10; font-size: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }

  /* 4D TimeLiner Bar */
  .timeliner-bar { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); width: 75%; max-width: 900px; background: rgba(28,29,32,0.92); backdrop-filter: blur(8px); border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); padding: 10px 16px; display: none; flex-direction: column; gap: 8px; z-index: 10; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
  .tl-controls { display: flex; align-items: center; gap: 12px; font-size: 12px; }
  .tl-slider { flex: 1; -webkit-appearance: none; height: 6px; border-radius: 3px; background: #3a3b40; outline: none; }
  .tl-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #3b82f6; cursor: pointer; }

  /* HUD */
  .hud { position: absolute; bottom: 12px; right: 12px; font-size: 11px; color: #777; z-index: 5; pointer-events: none; }
</style>
</head>
<body>
<div id="canvas-container">
  <canvas id="glcanvas"></canvas>
  <canvas id="overlay"></canvas>

  <!-- Main Toolbar -->
  <div class="toolbar">
    <button class="btn" id="btn-toggle-panel">Hierarchy</button>
    <button class="btn" id="btn-timeliner" style="display:none;">4D TimeLiner</button>
    <button class="btn" id="btn-measure">Measure</button>
    <button class="btn" id="btn-toggle-sec">Sectioning</button>
    <button class="btn" id="btn-turntable">Turntable</button>
    <button class="btn" id="btn-wireframe">Wireframe</button>
    <button class="btn" id="btn-white-mode">White Model</button>
    <button class="btn" id="btn-reset-cam">Reset View</button>
    <button class="btn" id="btn-fullscreen">Fullscreen</button>
  </div>

  <!-- ViewCube Navigation -->
  <div id="viewcube-container">
    <button class="cube-arrow arrow-up" data-dir="up">˄</button>
    <button class="cube-arrow arrow-down" data-dir="down">˅</button>
    <button class="cube-arrow arrow-left" data-dir="left">‹</button>
    <button class="cube-arrow arrow-right" data-dir="right">›</button>
    <div id="viewcube">
      <div class="cube-face face-front" data-view="front">FRONT</div>
      <div class="cube-face face-back" data-view="back">BACK</div>
      <div class="cube-face face-top" data-view="top">TOP</div>
      <div class="cube-face face-bottom" data-view="bottom">BOTTOM</div>
      <div class="cube-face face-left" data-view="left">LEFT</div>
      <div class="cube-face face-right" data-view="right">RIGHT</div>
    </div>
  </div>

  <!-- Left Sidebar -->
  <div class="left-bar" id="left-sidebar">
    <div class="panel-tabs">
      <button class="tab-btn active" data-tab="tab-tree">Hierarchy</button>
      <button class="tab-btn" data-tab="tab-vps">Views</button>
      <button class="tab-btn" id="tab-btn-clashes" data-tab="tab-clashes" style="display:none;">Clashes</button>
      <button class="tab-btn" id="tab-btn-links" data-tab="tab-links" style="display:none;">Links</button>
    </div>
    <div class="panel-content" id="tab-tree">
      <div style="display:flex;gap:4px;margin-bottom:8px;">
        <input type="text" id="tree-search" placeholder="Search element..." style="flex:1;background:#18191c;border:1px solid #333;color:#eee;padding:4px 8px;border-radius:4px;font-size:11px;outline:none;">
      </div>
      <div style="display:flex;gap:4px;margin-bottom:8px;">
        <button class="btn" id="btn-isolate" style="flex:1;padding:3px 6px;font-size:10px;">Isolate</button>
        <button class="btn" id="btn-hide" style="flex:1;padding:3px 6px;font-size:10px;">Hide</button>
        <button class="btn" id="btn-show-all" style="flex:1;padding:3px 6px;font-size:10px;">Show All</button>
      </div>
      <div id="tree-list"></div>
    </div>
    <div class="panel-content" id="tab-vps" style="display:none;">
      <div style="display:flex;gap:6px;margin-bottom:8px;">
        <button class="btn" id="btn-play-tour" style="flex:1;">▶ Play Tour</button>
      </div>
      <div id="vps-list"></div>
    </div>
    <div class="panel-content" id="tab-clashes" style="display:none;"></div>
    <div class="panel-content" id="tab-links" style="display:none;"></div>
  </div>

  <!-- Right Properties Inspector -->
  <div class="right-bar" id="right-sidebar">
    <div class="bar-title">
      <span id="prop-title">Element Properties</span>
      <span class="bar-close" id="prop-close">&times;</span>
    </div>
    <div class="props-content" id="prop-details"></div>
  </div>

  <!-- Sectioning Panel -->
  <div class="section-panel" id="sec-controls">
    <div style="display:flex;gap:8px;align-items:center;border-right:1px solid #444;padding-right:10px;margin-right:4px;">
      <label><input type="radio" name="sec-mode" id="sec-mode-planes" value="planes" checked> Planes</label>
      <label><input type="radio" name="sec-mode" id="sec-mode-box" value="box"> Box</label>
    </div>
    <div id="sec-planes-ui" style="display:flex;gap:10px;align-items:center;">
      <label><input type="checkbox" id="clip-x-en"> Cut X</label>
      <input type="range" id="clip-x-val" min="-100" max="100" value="0">
      <label><input type="checkbox" id="clip-y-en"> Cut Y</label>
      <input type="range" id="clip-y-val" min="-100" max="100" value="0">
      <label><input type="checkbox" id="clip-z-en"> Cut Z</label>
      <input type="range" id="clip-z-val" min="-100" max="100" value="0">
    </div>
    <div id="sec-box-ui" style="display:none;gap:10px;align-items:center;">
      <label><input type="checkbox" id="clip-box-en"> Enable Box</label>
      <label><input type="checkbox" id="clip-box-invert"> Invert</label>
      <button class="btn" id="btn-fit-box" style="padding:2px 8px;font-size:11px;">Fit Selection</button>
      <button class="btn" id="btn-reset-box" style="padding:2px 8px;font-size:11px;">Reset Box</button>
      <label>Scale <input type="range" id="clip-box-scale" min="10" max="150" value="100" style="width:70px;"></label>
    </div>
  </div>

  <!-- 4D TimeLiner Controller -->
  <div class="timeliner-bar" id="timeliner-bar">
    <div class="tl-controls">
      <button class="btn" id="tl-play">▶ Play</button>
      <span id="tl-date" style="font-weight:600;min-width:140px;color:#60a5fa;">---</span>
      <input type="range" class="tl-slider" id="tl-slider" min="0" max="1000" value="1000">
      <select id="tl-speed" class="btn" style="padding:4px 6px;">
        <option value="1">1x Speed</option>
        <option value="5">5x Speed</option>
        <option value="15">15x Speed</option>
      </select>
    </div>
  </div>

  <!-- HUD Stats -->
  <div class="hud" id="hud-stats">IOViewer</div>
</div>

<script id="model-payload" type="application/json">
<!--__MODEL_DATA_JSON__-->
</script>

<script>
(function() {
  const payloadEl = document.getElementById('model-payload');
  const modelData = JSON.parse(payloadEl.textContent);

  const canvas = document.getElementById('glcanvas');
  const overlay = document.getElementById('overlay');
  const gl = canvas.getContext('webgl', { antialias: true, alpha: false });
  if (!gl) {
    alert('WebGL is not supported in this browser.');
    return;
  }

  // Base64 Binary Decoders
  function b64ToBuffer(base64) {
    const binStr = window.atob(base64);
    const len = binStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binStr.charCodeAt(i);
    }
    return bytes.buffer;
  }

  // Camera State (spherical orbit)
  let camTarget = [0, 0, 0];
  let camRadius = 25.0;
  let camTheta = 0.8;
  let camPhi = 0.5;

  let isDragging = false;
  let isPanning = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  let wireframeMode = !!modelData.initialWireframe;
  let whiteModelMode = !!modelData.initialWhiteMode;
  let measureMode = false;
  let measureP1 = null;
  let measureP2 = null;
  let selectedMeshIndex = -1;
  let selectedElementId = null;

  const clipPlanes = { xEn: false, xVal: 0, yEn: false, yVal: 0, zEn: false, zVal: 0 };
  const clipBox = {
    en: false,
    invert: false,
    min: modelData.boundingBox ? [...modelData.boundingBox.min] : [-10, -10, -10],
    max: modelData.boundingBox ? [...modelData.boundingBox.max] : [10, 10, 10]
  };

  let turntableActive = false;
  let tourActive = false;
  let tourIndex = 0;
  let tourTimer = null;
  let currentCamAnim = null;

  // Initialize Camera Radius from Bounding Box
  const bbox = modelData.boundingBox;
  if (bbox && bbox.min && bbox.max) {
    const dx = bbox.max[0] - bbox.min[0];
    const dy = bbox.max[1] - bbox.min[1];
    const dz = bbox.max[2] - bbox.min[2];
    camRadius = Math.max(Math.sqrt(dx*dx + dy*dy + dz*dz) * 1.3, 5.0);
  }

  // Shaders
  const vsSource = `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    attribute vec4 aColor;
    uniform mat4 uProjection;
    uniform mat4 uView;
    uniform mat4 uModel;
    varying vec3 vFragPos;
    varying vec3 vNormal;
    varying vec4 vColor;
    void main() {
      vFragPos = (uModel * vec4(aPosition, 1.0)).xyz;
      vNormal = (uModel * vec4(aNormal, 0.0)).xyz;
      vColor = aColor;
      gl_Position = uProjection * uView * vec4(vFragPos, 1.0);
    }
  `;

  const fsSource = `
    precision mediump float;
    varying vec3 vFragPos;
    varying vec3 vNormal;
    varying vec4 vColor;
    uniform vec3 uLightDir;
    uniform vec4 uHighlight;
    uniform vec4 uClipX;
    uniform vec4 uClipY;
    uniform vec4 uClipZ;
    uniform vec4 uClipBoxMin;
    uniform vec4 uClipBoxMax;
    uniform float uWhiteMode;
    void main() {
      if (uClipX.w > 0.5 && vFragPos.x > uClipX.x) discard;
      if (uClipY.w > 0.5 && vFragPos.y > uClipY.y) discard;
      if (uClipZ.w > 0.5 && vFragPos.z > uClipZ.z) discard;

      if (uClipBoxMin.w > 0.5) {
        bool inside = (vFragPos.x >= uClipBoxMin.x && vFragPos.x <= uClipBoxMax.x &&
                       vFragPos.y >= uClipBoxMin.y && vFragPos.y <= uClipBoxMax.y &&
                       vFragPos.z >= uClipBoxMin.z && vFragPos.z <= uClipBoxMax.z);
        if (uClipBoxMax.w > 0.5) {
          if (inside) discard;
        } else {
          if (!inside) discard;
        }
      }

      vec3 norm = normalize(vNormal);
      float diff = max(dot(norm, uLightDir), 0.25) + 0.35;
      vec4 baseColor = (uWhiteMode > 0.5) ? vec4(0.9, 0.9, 0.92, 1.0) : vColor;
      vec3 col = baseColor.rgb * diff;
      if (uHighlight.a > 0.0) {
        col = mix(col, uHighlight.rgb, uHighlight.a);
      }
      gl_FragColor = vec4(col, baseColor.a);
    }
  `;

  function createShader(gl, type, source) {
    const s = gl.createShader(type);
    gl.shaderSource(s, source);
    gl.compileShader(s);
    return s;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER, vsSource));
  gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const loc = {
    aPos: gl.getAttribLocation(prog, 'aPosition'),
    aNorm: gl.getAttribLocation(prog, 'aNormal'),
    aCol: gl.getAttribLocation(prog, 'aColor'),
    uProj: gl.getUniformLocation(prog, 'uProjection'),
    uView: gl.getUniformLocation(prog, 'uView'),
    uModel: gl.getUniformLocation(prog, 'uModel'),
    uLight: gl.getUniformLocation(prog, 'uLightDir'),
    uHigh: gl.getUniformLocation(prog, 'uHighlight'),
    uClipX: gl.getUniformLocation(prog, 'uClipX'),
    uClipY: gl.getUniformLocation(prog, 'uClipY'),
    uClipZ: gl.getUniformLocation(prog, 'uClipZ'),
    uClipBoxMin: gl.getUniformLocation(prog, 'uClipBoxMin'),
    uClipBoxMax: gl.getUniformLocation(prog, 'uClipBoxMax'),
    uWhite: gl.getUniformLocation(prog, 'uWhiteMode')
  };

  // Upload Meshes to GPU
  let totalVertexCount = 0;
  const gpuMeshes = (modelData.meshes || []).map((m, idx) => {
    const posBuf = b64ToBuffer(m.positions);
    const vertArray = new Float32Array(posBuf);
    const numVerts = vertArray.length / 3;
    totalVertexCount += numVerts;

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertArray, gl.STATIC_DRAW);

    // Compute Face Normals
    const norms = new Float32Array(vertArray.length);
    const idxBuf = b64ToBuffer(m.indices);
    const indices = m.idx16 ? new Uint16Array(idxBuf) : new Uint32Array(idxBuf);

    for (let i = 0; i < indices.length; i += 3) {
      const i0 = indices[i]*3, i1 = indices[i+1]*3, i2 = indices[i+2]*3;
      const ax = vertArray[i1]-vertArray[i0], ay = vertArray[i1+1]-vertArray[i0+1], az = vertArray[i1+2]-vertArray[i0+2];
      const bx = vertArray[i2]-vertArray[i0], by = vertArray[i2+1]-vertArray[i0+1], bz = vertArray[i2+2]-vertArray[i0+2];
      let nx = ay*bz - az*by, ny = az*bx - ax*bz, nz = ax*by - ay*bx;
      const len = Math.hypot(nx, ny, nz) || 1;
      nx /= len; ny /= len; nz /= len;
      norms[i0]+=nx; norms[i0+1]+=ny; norms[i0+2]+=nz;
      norms[i1]+=nx; norms[i1+1]+=ny; norms[i1+2]+=nz;
      norms[i2]+=nx; norms[i2+1]+=ny; norms[i2+2]+=nz;
    }
    const nbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nbo);
    gl.bufferData(gl.ARRAY_BUFFER, norms, gl.STATIC_DRAW);

    // Vertex Colors
    const colArr = new Float32Array(numVerts * 4);
    const c = m.color || [0.8, 0.8, 0.8, 1.0];
    for (let i = 0; i < colArr.length; i += 4) {
      colArr[i] = c[0]; colArr[i+1] = c[1]; colArr[i+2] = c[2]; colArr[i+3] = c[3];
    }
    const cbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cbo);
    gl.bufferData(gl.ARRAY_BUFFER, colArr, gl.STATIC_DRAW);

    // Indices Buffer
    const ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    // Bounding Box
    let mbMin = [Infinity, Infinity, Infinity];
    let mbMax = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < vertArray.length; i += 3) {
      const vx = vertArray[i], vy = vertArray[i+1], vz = vertArray[i+2];
      if (vx < mbMin[0]) mbMin[0] = vx; if (vx > mbMax[0]) mbMax[0] = vx;
      if (vy < mbMin[1]) mbMin[1] = vy; if (vy > mbMax[1]) mbMax[1] = vy;
      if (vz < mbMin[2]) mbMin[2] = vz; if (vz > mbMax[2]) mbMax[2] = vz;
    }

    return {
      vbo, nbo, cbo, ibo,
      count: indices.length,
      idxType: m.idx16 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT,
      raw: m,
      index: idx,
      bounds: mbMin[0] <= mbMax[0] ? { min: mbMin, max: mbMax } : null
    };
  });

  // Matrix Math
  function mat4Identity() { return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]; }
  function mat4Perspective(fovy, aspect, near, far) {
    const f = 1.0 / Math.tan(fovy / 2);
    const nf = 1 / (near - far);
    return [f/aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far+near)*nf, -1, 0, 0, (2*far*near)*nf, 0];
  }
  function mat4LookAt(eye, center, up) {
    let zx = eye[0]-center[0], zy = eye[1]-center[1], zz = eye[2]-center[2];
    let len = Math.hypot(zx, zy, zz) || 1;
    zx /= len; zy /= len; zz /= len;
    let xx = up[1]*zz - up[2]*zy, xy = up[2]*zx - up[0]*zz, xz = up[0]*zy - up[1]*zx;
    len = Math.hypot(xx, xy, xz) || 1;
    xx /= len; xy /= len; xz /= len;
    let yx = zy*xz - zz*xy, yy = zz*xx - zx*xz, yz = zx*xy - zy*xx;
    return [
      xx, yx, zx, 0,
      xy, yy, zy, 0,
      xz, yz, zz, 0,
      -(xx*eye[0] + xy*eye[1] + xz*eye[2]),
      -(yx*eye[0] + yy*eye[1] + yz*eye[2]),
      -(zx*eye[0] + zy*eye[1] + zz*eye[2]),
      1
    ];
  }

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth * dpr;
    const h = canvas.clientHeight * dpr;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      overlay.width = w; overlay.height = h;
    }
  }

  let lastPMat = null;
  let lastVMat = null;

  // Render Loop
  function render() {
    resizeCanvas();
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0.09, 0.1, 0.11, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const eye = [
      camTarget[0] + camRadius * Math.sin(camTheta) * Math.cos(camPhi),
      camTarget[1] + camRadius * Math.sin(camTheta) * Math.sin(camPhi),
      camTarget[2] + camRadius * Math.cos(camTheta)
    ];

    const aspect = canvas.width / canvas.height;
    const pMat = mat4Perspective(Math.PI / 4, aspect, 0.1, camRadius * 10);
    const vMat = mat4LookAt(eye, camTarget, [0, 0, 1]);
    const mMat = mat4Identity();

    gl.uniformMatrix4fv(loc.uProj, false, pMat);
    gl.uniformMatrix4fv(loc.uView, false, vMat);
    gl.uniformMatrix4fv(loc.uModel, false, mMat);
    gl.uniform3f(loc.uLight, 0.5, 0.8, 1.0);
    gl.uniform1f(loc.uWhite, whiteModelMode ? 1.0 : 0.0);

    gl.uniform4f(loc.uClipX, clipPlanes.xVal, 0, 0, clipPlanes.xEn ? 1.0 : 0.0);
    gl.uniform4f(loc.uClipY, 0, clipPlanes.yVal, 0, clipPlanes.yEn ? 1.0 : 0.0);
    gl.uniform4f(loc.uClipZ, 0, 0, clipPlanes.zVal, clipPlanes.zEn ? 1.0 : 0.0);
    gl.uniform4f(loc.uClipBoxMin, clipBox.min[0], clipBox.min[1], clipBox.min[2], clipBox.en ? 1.0 : 0.0);
    gl.uniform4f(loc.uClipBoxMax, clipBox.max[0], clipBox.max[1], clipBox.max[2], clipBox.invert ? 1.0 : 0.0);

    lastPMat = pMat;
    lastVMat = vMat;

    for (const gm of gpuMeshes) {
      if (gm.hidden) continue;

      gl.bindBuffer(gl.ARRAY_BUFFER, gm.vbo);
      gl.vertexAttribPointer(loc.aPos, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(loc.aPos);

      gl.bindBuffer(gl.ARRAY_BUFFER, gm.nbo);
      gl.vertexAttribPointer(loc.aNorm, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(loc.aNorm);

      gl.bindBuffer(gl.ARRAY_BUFFER, gm.cbo);
      gl.vertexAttribPointer(loc.aCol, 4, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(loc.aCol);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gm.ibo);

      if (gm.index === selectedMeshIndex || (selectedElementId !== null && gm.raw.elementId === selectedElementId)) {
        gl.uniform4f(loc.uHigh, 1.0, 0.75, 0.0, 0.75); // Gold selection
      } else if (gm.simColor) {
        gl.uniform4f(loc.uHigh, gm.simColor[0], gm.simColor[1], gm.simColor[2], gm.simColor[3]);
      } else {
        gl.uniform4f(loc.uHigh, 0, 0, 0, 0);
      }

      const mode = wireframeMode ? gl.LINES : gl.TRIANGLES;
      gl.drawElements(mode, gm.count, gm.idxType, 0);
    }

    updateViewCube(eye);
    drawOverlay(pMat, vMat);
  }

  // 2D Overlay (Grids, Measurement, Section Box wireframe)
  function worldToScreen(p, pMat, vMat) {
    if (!pMat || !vMat) return null;
    const x = p[0], y = p[1], z = p[2];
    const vx = vMat[0]*x + vMat[4]*y + vMat[8]*z + vMat[12];
    const vy = vMat[1]*x + vMat[5]*y + vMat[9]*z + vMat[13];
    const vz = vMat[2]*x + vMat[6]*y + vMat[10]*z + vMat[14];
    const vw = vMat[3]*x + vMat[7]*y + vMat[11]*z + vMat[15];

    const cx = pMat[0]*vx + pMat[4]*vy + pMat[8]*vz + pMat[12]*vw;
    const cy = pMat[1]*vx + pMat[5]*vy + pMat[9]*vz + pMat[13]*vw;
    const cz = pMat[2]*vx + pMat[6]*vy + pMat[10]*vz + pMat[14]*vw;
    const cw = pMat[3]*vx + pMat[7]*vy + pMat[11]*vz + pMat[15]*vw;

    if (cw <= 0.001) return null;
    const ndcX = cx / cw, ndcY = cy / cw;
    if (ndcX < -1.5 || ndcX > 1.5 || ndcY < -1.5 || ndcY > 1.5) return null;

    return [(ndcX * 0.5 + 0.5) * overlay.width, (1.0 - (ndcY * 0.5 + 0.5)) * overlay.height];
  }

  function drawOverlay(pMat, vMat) {
    const ctx = overlay.getContext('2d');
    ctx.clearRect(0, 0, overlay.width, overlay.height);

    // Grids
    if (modelData.grids && modelData.grids.length > 0) {
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.45)';
      ctx.setLineDash([6, 6]);
      ctx.fillStyle = '#60a5fa';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const g of modelData.grids) {
        const s = worldToScreen(g.start, pMat, vMat);
        const e = worldToScreen(g.end, pMat, vMat);
        if (s && e) {
          ctx.beginPath();
          ctx.moveTo(s[0], s[1]);
          ctx.lineTo(e[0], e[1]);
          ctx.stroke();

          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.arc(s[0], s[1], 10, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(28,29,32,0.9)';
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = '#93c5fd';
          ctx.fillText(g.name, s[0], s[1]);
          ctx.setLineDash([6, 6]);
        }
      }
      ctx.restore();
    }

    // Measure Tool
    if (measureP1 && measureP2) {
      const s1 = worldToScreen(measureP1, pMat, vMat);
      const s2 = worldToScreen(measureP2, pMat, vMat);
      if (s1 && s2) {
        ctx.beginPath();
        ctx.moveTo(s1[0], s1[1]); ctx.lineTo(s2[0], s2[1]);
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
        ctx.stroke();

        const midX = (s1[0] + s2[0]) * 0.5;
        const midY = (s1[1] + s2[1]) * 0.5;
        const dist = Math.hypot(measureP2[0]-measureP1[0], measureP2[1]-measureP1[1], measureP2[2]-measureP1[2]);
        const text = `${dist.toFixed(2)} m`;
        ctx.fillStyle = 'rgba(20,20,20,0.85)';
        ctx.font = 'bold 12px sans-serif';
        const tw = ctx.measureText(text).width;
        ctx.fillRect(midX - tw/2 - 4, midY - 10, tw + 8, 20);
        ctx.fillStyle = '#fff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(text, midX, midY);
      }
    }

    // Section Box Wireframe Outline
    if (clipBox.en) {
      const bMin = clipBox.min;
      const bMax = clipBox.max;
      const corners = [
        [bMin[0], bMin[1], bMin[2]], [bMax[0], bMin[1], bMin[2]], [bMax[0], bMax[1], bMin[2]], [bMin[0], bMax[1], bMin[2]],
        [bMin[0], bMin[1], bMax[2]], [bMax[0], bMin[1], bMax[2]], [bMax[0], bMax[1], bMax[2]], [bMin[0], bMax[1], bMax[2]]
      ];
      const sc = corners.map(c => worldToScreen(c, pMat, vMat));
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];
      ctx.save();
      ctx.strokeStyle = clipBox.invert ? '#ef4444' : '#3b82f6';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      for (const [i0, i1] of edges) {
        if (sc[i0] && sc[i1]) {
          ctx.moveTo(sc[i0][0], sc[i0][1]);
          ctx.lineTo(sc[i1][0], sc[i1][1]);
        }
      }
      ctx.stroke();
      ctx.restore();
    }
  }

  // ViewCube Orientation Update
  const viewCubeEl = document.getElementById('viewcube');
  function updateViewCube(eye) {
    if (!viewCubeEl) return;
    const degX = (camTheta * 180 / Math.PI) - 90;
    const degZ = -(camPhi * 180 / Math.PI) - 90;
    viewCubeEl.style.transform = `rotateX(${degX}deg) rotateZ(${degZ}deg)`;
  }

  // Smooth Camera Animation with Cubic Easing
  function animateCameraTo(newTarget, newRadius, newTheta, newPhi, durationMs = 600, onComplete = null) {
    if (currentCamAnim) cancelAnimationFrame(currentCamAnim);

    const startTarget = [...camTarget];
    const startRadius = camRadius;
    const startTheta = camTheta;
    const startPhi = camPhi;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1.0);
      const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      camTarget = [
        startTarget[0] + (newTarget[0] - startTarget[0]) * ease,
        startTarget[1] + (newTarget[1] - startTarget[1]) * ease,
        startTarget[2] + (newTarget[2] - startTarget[2]) * ease
      ];
      camRadius = startRadius + (newRadius - startRadius) * ease;
      camTheta = startTheta + (newTheta - startTheta) * ease;
      camPhi = startPhi + (newPhi - startPhi) * ease;

      render();

      if (progress < 1.0) {
        currentCamAnim = requestAnimationFrame(step);
      } else {
        currentCamAnim = null;
        if (onComplete) onComplete();
      }
    }

    currentCamAnim = requestAnimationFrame(step);
  }

  // Turntable Mode
  function toggleTurntable() {
    turntableActive = !turntableActive;
    const btn = document.getElementById('btn-turntable');
    if (btn) btn.classList.toggle('active', turntableActive);
    if (turntableActive) {
      if (tourActive) stopTour();
      animateTurntable();
    }
  }

  function animateTurntable() {
    if (!turntableActive) return;
    camPhi += 0.006;
    render();
    requestAnimationFrame(animateTurntable);
  }

  // Walkthrough Tour
  function startTour() {
    if (!modelData.viewpoints || modelData.viewpoints.length === 0) return;
    tourActive = true;
    const btn = document.getElementById('btn-play-tour');
    if (btn) {
      btn.textContent = '⏸ Pause Tour';
      btn.classList.add('active');
    }
    if (turntableActive) toggleTurntable();
    playNextTourStop();
  }

  function stopTour() {
    tourActive = false;
    if (tourTimer) clearTimeout(tourTimer);
    const btn = document.getElementById('btn-play-tour');
    if (btn) {
      btn.textContent = '▶ Play Tour';
      btn.classList.remove('active');
    }
  }

  function playNextTourStop() {
    if (!tourActive || !modelData.viewpoints || modelData.viewpoints.length === 0) return;
    const vp = modelData.viewpoints[tourIndex];
    if (vp && vp.camera && vp.camera.position && vp.camera.target) {
      const newTarget = [...vp.camera.target];
      const ex = vp.camera.position[0] - newTarget[0];
      const ey = vp.camera.position[1] - newTarget[1];
      const ez = vp.camera.position[2] - newTarget[2];
      const newRadius = Math.hypot(ex, ey, ez) || 10;
      const newTheta = Math.acos(ez / newRadius);
      const newPhi = Math.atan2(ey, ex);

      animateCameraTo(newTarget, newRadius, newTheta, newPhi, 1200, () => {
        if (!tourActive) return;
        tourIndex = (tourIndex + 1) % modelData.viewpoints.length;
        tourTimer = setTimeout(playNextTourStop, 2000);
      });
    } else {
      tourIndex = (tourIndex + 1) % modelData.viewpoints.length;
      tourTimer = setTimeout(playNextTourStop, 1000);
    }
  }

  // ViewCube Face Clicks
  document.querySelectorAll('.cube-face').forEach(face => {
    face.addEventListener('click', e => {
      e.stopPropagation();
      const v = face.dataset.view;
      let targetTheta = 0.8, targetPhi = 0.5;
      if (v === 'top') { targetTheta = 0.001; targetPhi = 0; }
      else if (v === 'bottom') { targetTheta = Math.PI - 0.001; targetPhi = 0; }
      else if (v === 'front') { targetTheta = Math.PI / 2; targetPhi = -Math.PI / 2; }
      else if (v === 'back') { targetTheta = Math.PI / 2; targetPhi = Math.PI / 2; }
      else if (v === 'left') { targetTheta = Math.PI / 2; targetPhi = Math.PI; }
      else if (v === 'right') { targetTheta = Math.PI / 2; targetPhi = 0; }
      animateCameraTo(camTarget, camRadius, targetTheta, targetPhi);
    });
  });

  // ViewCube Directional Arrows
  document.querySelectorAll('.cube-arrow').forEach(arr => {
    arr.addEventListener('click', e => {
      e.stopPropagation();
      const dir = arr.dataset.dir;
      if (dir === 'left') camPhi += Math.PI / 4;
      else if (dir === 'right') camPhi -= Math.PI / 4;
      else if (dir === 'up') camTheta = Math.max(0.1, camTheta - Math.PI / 6);
      else if (dir === 'down') camTheta = Math.min(Math.PI - 0.1, camTheta + Math.PI / 6);
      animateCameraTo(camTarget, camRadius, camTheta, camPhi, 300);
    });
  });

  // Mouse Interaction (Orbit / Pan / Zoom)
  canvas.addEventListener('mousedown', e => {
    if (e.button === 0) isDragging = true;
    else if (e.button === 2) isPanning = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; isPanning = false; });

  canvas.addEventListener('mousemove', e => {
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (isDragging) {
      if (turntableActive) toggleTurntable();
      if (tourActive) stopTour();
      camPhi += dx * 0.008;
      camTheta = Math.max(0.05, Math.min(Math.PI - 0.05, camTheta - dy * 0.008));
      render();
    } else if (isPanning) {
      const panSpeed = camRadius * 0.0012;
      const sinP = Math.sin(camPhi), cosP = Math.cos(camPhi);
      camTarget[0] += (-sinP * dx - cosP * dy) * panSpeed;
      camTarget[1] += (cosP * dx - sinP * dy) * panSpeed;
      render();
    }
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    camRadius = Math.max(1.0, camRadius * (1.0 + e.deltaY * 0.001));
    render();
  }, { passive: false });

  canvas.addEventListener('contextmenu', e => e.preventDefault());

  // Element Selection & Properties Inspector
  const propSidebar = document.getElementById('right-sidebar');
  const propDetails = document.getElementById('prop-details');
  const propTitle = document.getElementById('prop-title');
  document.getElementById('prop-close').addEventListener('click', () => {
    propSidebar.style.display = 'none';
  });

  function showElementProperties(el) {
    if (!el) {
      propSidebar.style.display = 'none';
      return;
    }
    propTitle.textContent = el.name || `Element #${el.id}`;
    let html = `
      <div class="prop-group">
        <div class="group-title">General</div>
        <div class="prop-row"><span class="prop-key">Category</span><span class="prop-val">${el.category || 'N/A'}</span></div>
        <div class="prop-row"><span class="prop-key">Type</span><span class="prop-val">${el.type || 'N/A'}</span></div>
        <div class="prop-row"><span class="prop-key">Level</span><span class="prop-val">${el.level || 'N/A'}</span></div>
        ${el.link ? `<div class="prop-row"><span class="prop-key">Link</span><span class="prop-val">${el.link}</span></div>` : ''}
      </div>
    `;

    if (el.properties) {
      for (const [groupName, props] of Object.entries(el.properties)) {
        html += `<div class="prop-group"><div class="group-title">${groupName}</div>`;
        for (const [k, v] of Object.entries(props)) {
          html += `<div class="prop-row"><span class="prop-key">${k}</span><span class="prop-val">${v}</span></div>`;
        }
        html += `</div>`;
      }
    }

    propDetails.innerHTML = html;
    propSidebar.style.display = 'flex';
  }

  // Populate Tree
  const treeList = document.getElementById('tree-list');
  const elements = modelData.elements || [];
  const elMap = new Map();
  elements.forEach(el => elMap.set(el.id, el));

  if (elements.length > 0) {
    const cats = new Map();
    elements.forEach(el => {
      const c = el.category || 'General';
      if (!cats.has(c)) cats.set(c, []);
      cats.get(c).push(el);
    });

    cats.forEach((items, catName) => {
      const catDiv = document.createElement('div');
      catDiv.style.fontWeight = '600';
      catDiv.style.margin = '6px 0 2px 0';
      catDiv.style.color = '#60a5fa';
      catDiv.textContent = `📁 ${catName} (${items.length})`;
      treeList.appendChild(catDiv);

      items.forEach(el => {
        const item = document.createElement('div');
        item.className = 'tree-item';
        item.innerHTML = `<span>${el.name || 'Element'}</span><span class="item-badge">#${el.id}</span>`;
        item.addEventListener('click', () => {
          selectedElementId = el.id;
          selectedMeshIndex = -1;
          showElementProperties(el);
          render();
        });
        treeList.appendChild(item);
      });
    });
  } else {
    // Meshes fallback if no elements
    gpuMeshes.forEach((gm, idx) => {
      const item = document.createElement('div');
      item.className = 'tree-item';
      item.textContent = gm.raw.name || `Mesh ${idx+1}`;
      item.addEventListener('click', () => {
        selectedMeshIndex = idx;
        selectedElementId = null;
        render();
      });
      treeList.appendChild(item);
    });
  }

  // Populate Viewpoints
  const vpsList = document.getElementById('vps-list');
  if (modelData.viewpoints && modelData.viewpoints.length > 0) {
    modelData.viewpoints.forEach(vp => {
      const item = document.createElement('div');
      item.className = 'tree-item';
      item.textContent = vp.name;
      item.addEventListener('click', () => {
        if (vp.camera && vp.camera.position && vp.camera.target) {
          const newTarget = [...vp.camera.target];
          const ex = vp.camera.position[0] - newTarget[0];
          const ey = vp.camera.position[1] - newTarget[1];
          const ez = vp.camera.position[2] - newTarget[2];
          const newRadius = Math.hypot(ex, ey, ez) || 10;
          const newTheta = Math.acos(ez / newRadius);
          const newPhi = Math.atan2(ey, ex);
          animateCameraTo(newTarget, newRadius, newTheta, newPhi);
        }
      });
      vpsList.appendChild(item);
    });
  }

  // Populate Clashes
  const clashTabBtn = document.getElementById('tab-btn-clashes');
  const clashContainer = document.getElementById('tab-clashes');
  if (modelData.clashTests && modelData.clashTests.length > 0) {
    if (clashTabBtn) clashTabBtn.style.display = 'inline-block';
    modelData.clashTests.forEach(test => {
      const tDiv = document.createElement('div');
      tDiv.style.fontWeight = '600';
      tDiv.style.margin = '6px 0';
      tDiv.style.color = '#ef4444';
      tDiv.textContent = `${test.name} (${test.clashes?.length || 0})`;
      clashContainer.appendChild(tDiv);

      (test.clashes || []).forEach(clash => {
        const cItem = document.createElement('div');
        cItem.className = 'tree-item';
        cItem.textContent = `${clash.name}: ${clash.el1} vs ${clash.el2}`;
        cItem.addEventListener('click', () => {
          if (clash.point) {
            animateCameraTo([...clash.point], 4.0, camTheta, camPhi);
          }
        });
        clashContainer.appendChild(cItem);
      });
    });
  }

  // Toolbar Actions
  document.getElementById('btn-reset-cam').addEventListener('click', () => {
    animateCameraTo([0, 0, 0], bbox ? Math.max(Math.hypot(bbox.max[0]-bbox.min[0], bbox.max[1]-bbox.min[1], bbox.max[2]-bbox.min[2])*1.3, 5.0) : 25.0, 0.8, 0.5);
  });

  document.getElementById('btn-wireframe').addEventListener('click', function() {
    wireframeMode = !wireframeMode;
    this.classList.toggle('active', wireframeMode);
    render();
  });

  document.getElementById('btn-white-mode').addEventListener('click', function() {
    whiteModelMode = !whiteModelMode;
    this.classList.toggle('active', whiteModelMode);
    render();
  });

  document.getElementById('btn-turntable').addEventListener('click', toggleTurntable);

  const btnTour = document.getElementById('btn-play-tour');
  if (btnTour) {
    btnTour.addEventListener('click', () => {
      if (tourActive) stopTour();
      else startTour();
    });
  }

  // Sectioning Controls
  const secControls = document.getElementById('sec-controls');
  document.getElementById('btn-toggle-sec').addEventListener('click', function() {
    const isVis = secControls.style.display !== 'none';
    secControls.style.display = isVis ? 'none' : 'flex';
    this.classList.toggle('active', !isVis);
  });

  document.getElementById('sec-mode-planes').addEventListener('change', () => {
    document.getElementById('sec-planes-ui').style.display = 'flex';
    document.getElementById('sec-box-ui').style.display = 'none';
    render();
  });
  document.getElementById('sec-mode-box').addEventListener('change', () => {
    document.getElementById('sec-planes-ui').style.display = 'none';
    document.getElementById('sec-box-ui').style.display = 'flex';
    render();
  });

  document.getElementById('clip-x-en').addEventListener('change', e => { clipPlanes.xEn = e.target.checked; render(); });
  document.getElementById('clip-y-en').addEventListener('change', e => { clipPlanes.yEn = e.target.checked; render(); });
  document.getElementById('clip-z-en').addEventListener('change', e => { clipPlanes.zEn = e.target.checked; render(); });
  document.getElementById('clip-x-val').addEventListener('input', e => { clipPlanes.xVal = (e.target.value/100)*(bbox.max[0]-bbox.min[0]); render(); });
  document.getElementById('clip-y-val').addEventListener('input', e => { clipPlanes.yVal = (e.target.value/100)*(bbox.max[1]-bbox.min[1]); render(); });
  document.getElementById('clip-z-val').addEventListener('input', e => { clipPlanes.zVal = (e.target.value/100)*(bbox.max[2]-bbox.min[2]); render(); });

  const clipBoxEn = document.getElementById('clip-box-en');
  clipBoxEn.addEventListener('change', e => { clipBox.en = e.target.checked; render(); });
  document.getElementById('clip-box-invert').addEventListener('change', e => { clipBox.invert = e.target.checked; render(); });

  function resetSectionBox() {
    clipBox.min = [...bbox.min];
    clipBox.max = [...bbox.max];
    document.getElementById('clip-box-scale').value = '100';
    render();
  }
  document.getElementById('btn-reset-box').addEventListener('click', resetSectionBox);

  document.getElementById('btn-fit-box').addEventListener('click', () => {
    if (selectedMeshIndex >= 0 && selectedMeshIndex < gpuMeshes.length) {
      const b = gpuMeshes[selectedMeshIndex].bounds;
      if (b) {
        clipBox.min = [...b.min];
        clipBox.max = [...b.max];
        clipBox.en = true;
        clipBoxEn.checked = true;
        render();
        return;
      }
    }
    resetSectionBox();
  });

  document.getElementById('clip-box-scale').addEventListener('input', e => {
    const scale = parseFloat(e.target.value) / 100.0;
    const cx = (bbox.min[0] + bbox.max[0]) * 0.5;
    const cy = (bbox.min[1] + bbox.max[1]) * 0.5;
    const cz = (bbox.min[2] + bbox.max[2]) * 0.5;
    const hx = (bbox.max[0] - bbox.min[0]) * 0.5 * scale;
    const hy = (bbox.max[1] - bbox.min[1]) * 0.5 * scale;
    const hz = (bbox.max[2] - bbox.min[2]) * 0.5 * scale;
    clipBox.min = [cx - hx, cy - hy, cz - hz];
    clipBox.max = [cx + hx, cy + hy, cz + hz];
    render();
  });

  // TimeLiner Controls
  const btnTl = document.getElementById('btn-timeliner');
  const tlBar = document.getElementById('timeliner-bar');
  const tlPlay = document.getElementById('tl-play');
  const tlSlider = document.getElementById('tl-slider');
  const tlDate = document.getElementById('tl-date');
  const tlSpeed = document.getElementById('tl-speed');

  if (modelData.timeliner && modelData.timeliner.tasks && modelData.timeliner.tasks.length > 0) {
    btnTl.style.display = 'inline-block';
    const tlStart = new Date(modelData.timeliner.start).getTime();
    const tlEnd = new Date(modelData.timeliner.end).getTime();
    const tlSpan = Math.max(1, tlEnd - tlStart);
    let tlActive = false, tlPlaying = false, tlInterval = null;

    btnTl.addEventListener('click', function() {
      tlActive = !tlActive;
      tlBar.style.display = tlActive ? 'flex' : 'none';
      this.classList.toggle('active', tlActive);
      if (!tlActive && tlPlaying) stopTl();
      updateTl();
    });

    function updateTl() {
      if (!tlActive) {
        gpuMeshes.forEach(gm => { gm.hidden = false; gm.simColor = null; });
        render();
        return;
      }
      const val = parseFloat(tlSlider.value);
      const curDate = new Date(tlStart + (val / 1000.0) * tlSpan);
      tlDate.textContent = curDate.toISOString().slice(0, 10);

      const elState = new Map();
      modelData.timeliner.tasks.forEach(task => {
        const tStart = new Date(task.start).getTime();
        const tEnd = new Date(task.end).getTime();
        let state = 'future';
        if (curDate.getTime() >= tEnd) state = 'done';
        else if (curDate.getTime() >= tStart) state = 'active';

        (task.attachedElements || []).forEach(eid => {
          elState.set(eid, { state, type: task.type });
        });
      });

      gpuMeshes.forEach(gm => {
        const info = gm.raw.elementId ? elState.get(gm.raw.elementId) : null;
        if (!info) {
          gm.hidden = false; gm.simColor = null;
        } else if (info.state === 'done') {
          gm.hidden = (info.type === 'demolish' || info.type === 'temporary');
          gm.simColor = null;
        } else if (info.state === 'active') {
          gm.hidden = false;
          gm.simColor = info.type === 'demolish' ? [0.95, 0.2, 0.2, 0.85] : [0.2, 0.95, 0.2, 0.85];
        } else {
          gm.hidden = true; gm.simColor = null;
        }
      });
      render();
    }

    tlSlider.addEventListener('input', updateTl);

    function startTl() {
      tlPlaying = true; tlPlay.textContent = '⏸ Pause';
      const sp = parseFloat(tlSpeed.value) || 1;
      tlInterval = setInterval(() => {
        let v = parseFloat(tlSlider.value) + 2 * sp;
        if (v >= 1000) { v = 1000; stopTl(); }
        tlSlider.value = v;
        updateTl();
      }, 50);
    }
    function stopTl() {
      tlPlaying = false; tlPlay.textContent = '▶ Play';
      if (tlInterval) clearInterval(tlInterval);
    }
    tlPlay.addEventListener('click', () => {
      if (tlPlaying) stopTl();
      else { if (parseFloat(tlSlider.value) >= 1000) tlSlider.value = 0; startTl(); }
    });
  }

  // Isolate / Hide / Show All
  document.getElementById('btn-isolate').addEventListener('click', () => {
    if (selectedElementId !== null) {
      gpuMeshes.forEach(gm => { gm.hidden = (gm.raw.elementId !== selectedElementId); });
    } else if (selectedMeshIndex >= 0) {
      gpuMeshes.forEach(gm => { gm.hidden = (gm.index !== selectedMeshIndex); });
    }
    render();
  });

  document.getElementById('btn-hide').addEventListener('click', () => {
    if (selectedElementId !== null) {
      gpuMeshes.forEach(gm => { if (gm.raw.elementId === selectedElementId) gm.hidden = true; });
    } else if (selectedMeshIndex >= 0) {
      gpuMeshes[selectedMeshIndex].hidden = true;
    }
    render();
  });

  document.getElementById('btn-show-all').addEventListener('click', () => {
    gpuMeshes.forEach(gm => { gm.hidden = false; });
    render();
  });

  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.left-bar .panel-content').forEach(p => p.style.display = 'none');
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).style.display = 'block';
    });
  });

  // Toggle Left Sidebar
  const leftSidebar = document.getElementById('left-sidebar');
  document.getElementById('btn-toggle-panel').addEventListener('click', function() {
    const isVis = leftSidebar.style.display !== 'none';
    leftSidebar.style.display = isVis ? 'none' : 'flex';
    this.classList.toggle('active', !isVis);
  });

  // Fullscreen
  document.getElementById('btn-fullscreen').addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  });

  // HUD
  document.getElementById('hud-stats').textContent = `Meshes: ${gpuMeshes.length} | Vertices: ${totalVertexCount.toLocaleString()}`;

  window.addEventListener('resize', () => render());
  render();
})();
</script>
</body>
</html>
""";
}
