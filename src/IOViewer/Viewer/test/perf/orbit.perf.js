// Performance harness for large exported pages (`npm run perf`, headed; not part of `npm run e2e`).
// PERF_MODELS: comma-separated exported .html files (default <PERF_OUT>/synthetic-200k.html);
// PERF_OUT: where JSON results go (default <os temp>/ioviewer-perf); PERF_LABEL names the run (e.g. baseline);
// PERF_PROFILE=1 also writes a CPU profile of each model's whole run; PERF_GPU: see playwright.perf.config.js.
import { test } from '@playwright/test';
import { mkdirSync, statSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const OUT = process.env.PERF_OUT ?? path.join(os.tmpdir(), 'ioviewer-perf');
const MODELS = (process.env.PERF_MODELS ?? path.join(OUT, 'synthetic-200k.html')).split(',').filter(Boolean);
const LABEL = process.env.PERF_LABEL ?? 'run';
const ORBIT_MS = 5000;

const median = (values) => quantile(values, 0.5);
function quantile(values, q) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted.length ? sorted[Math.min(sorted.length - 1, Math.floor(q * sorted.length))] : NaN;
}

// Programmatic orbit about the vertical axis through the target (~46°/s) for `ms`; returns per frame the interval, the
// share of the instances in view that the previous render drew, and its detail threshold (px, 0 = full).
function orbit(page, ms, zoom) {
  return page.evaluate(async ({ ms, zoom }) => {
    const { controls, scene, motionDetail } = window.__ioviewer;
    const camera = controls.camera;
    const target = controls.target;
    camera.position.sub(target).multiplyScalar(zoom).add(target);
    controls.resize();
    const deltas = [];
    const drawn = [];
    const thresholds = [];
    await new Promise((resolve) => {
      let start = 0;
      let last = 0;
      const step = (now) => {
        if (!start) start = last = now;
        else {
          deltas.push(now - last);
          const stats = scene.drawStats(); // of the render that ran earlier in this frame
          drawn.push(stats.inView ? stats.drawn / stats.inView : 1);
          thresholds.push(motionDetail?.minPixels ?? 0);
        }
        const a = (now - last) * 0.0008;
        last = now;
        const x = camera.position.x - target.x;
        const y = camera.position.y - target.y;
        camera.position.x = target.x + x * Math.cos(a) - y * Math.sin(a);
        camera.position.y = target.y + x * Math.sin(a) + y * Math.cos(a);
        camera.lookAt(target);
        controls.resize();
        if (now - start < ms) requestAnimationFrame(step);
        else resolve();
      };
      requestAnimationFrame(step);
    });
    camera.position.sub(target).divideScalar(zoom).add(target);
    controls.resize();
    return { deltas, drawn, thresholds };
  }, { ms, zoom });
}

const fps = ({ deltas, drawn, thresholds }) => ({
  frames: deltas.length,
  drawnMedian: median(drawn),
  drawnMin: Math.min(...drawn),
  thresholdMedianPx: median(thresholds),
  thresholdMaxPx: Math.max(...thresholds),
  medianFps: 1000 / median(deltas),
  p95Fps: 1000 / quantile(deltas, 0.95), // fps of the slowest 5 % of frames
  medianMs: median(deltas),
  p95Ms: quantile(deltas, 0.95),
  maxMs: Math.max(...deltas),
});

// Installs window.__perf: time(step) runs a step (a function), returns { syncMs, frameMs, full } where frameMs lasts
// until the second animation frame after it has been drawn and the GPU has finished, i.e. the change is on screen, and
// full tells that this last frame was drawn in full detail.
async function installTimer(page) {
  await page.evaluate(() => {
    const frame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    window.__perf = {
      async time(step) {
        await frame();
        const start = performance.now();
        const result = step();
        const syncMs = performance.now() - start;
        await frame();
        // Wait for the GPU too: reading a pixel back finishes every queued command.
        const gl = document.getElementById('ioviewer-canvas').getContext('webgl2'); // the viewer's own context
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
        // Every frame without camera motion is drawn in full; recorded to show the timing is of a full frame.
        return { syncMs, frameMs: performance.now() - start, full: (window.__ioviewer.motionDetail?.minPixels ?? 0) === 0, result };
      },
      // The user actions measured, each through the same path as the real input.
      steps: {
        click({ x, y }) {
          const { controls, selection } = window.__ioviewer;
          controls.dispatchEvent(new CustomEvent('click', { detail: { x, y, button: 0, ctrl: false, shift: false } }));
          return selection.size;
        },
        key({ code, shiftKey }) {
          window.dispatchEvent(new KeyboardEvent('keydown', { code, shiftKey, bubbles: true }));
        },
        boxSelectAll() {
          const { controls, selection } = window.__ioviewer;
          const rect = { x: 0, y: 0, width: innerWidth, height: innerHeight };
          controls.dispatchEvent(new CustomEvent('boxselect', { detail: { rect, mode: 'crossing', ctrl: false, shift: false } }));
          return selection.size;
        },
        // Types an element's Id (one at 61 % of the list) into the tree search.
        search() {
          const { scene } = window.__ioviewer;
          const input = document.querySelector('.ioviewer-tree-search');
          input.value = String(scene.elementId(Math.floor(scene.elementCount * 0.61)));
          input.dispatchEvent(new Event('input', { bubbles: true }));
          return document.querySelectorAll('.tree-element').length;
        },
        firstRow() {
          document.querySelector('.tree-element').click();
          return window.__ioviewer.selection.size;
        },
        displayMode(mode) {
          window.__ioviewer.scene.setDisplayMode(mode);
        },
        opacity(value) {
          window.__ioviewer.scene.setOpacity(value);
        },
        fourD(action) {
          window.__ioviewer.timeliner[action]();
        },
        fourDAt(k) {
          const slider = document.querySelector('.ioviewer-player-slider');
          const start = Number(slider.min);
          window.__ioviewer.timeliner.setDate(start + (Number(slider.max) - start) * k);
        },
      },
    };
  });
}

const key = (code, shiftKey = false) => ({ code, shiftKey });

for (const file of MODELS) {
  test(`perf ${path.basename(file)}`, async ({ page }) => {
    const name = path.basename(file, '.html');
    const result = { label: LABEL, model: name, htmlMB: statSync(file).size / 1048576, gpu: process.env.PERF_GPU ?? 'default' };
    const cdp = process.env.PERF_PROFILE ? await page.context().newCDPSession(page) : null;
    if (cdp) {
      await cdp.send('Profiler.enable');
      await cdp.send('Profiler.setSamplingInterval', { interval: 200 });
      await cdp.send('Profiler.start');
    }
    // Time `ready` resolves, taken as it resolves (main.js publishes window.__ioviewer before the first frame).
    await page.addInitScript(() => {
      let value;
      Object.defineProperty(window, '__ioviewer', {
        configurable: true,
        get: () => value,
        set: (v) => {
          value = v;
          v.ready.then(() => (window.__perfReady = performance.now()));
        },
      });
    });
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('crash', () => console.log(`${name}: the page crashed`));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto(pathToFileURL(file).href, { timeout: 10 * 60 * 1000 });
    await page.waitForFunction(() => window.__perfReady, null, { timeout: 10 * 60 * 1000, polling: 100 });
    const load = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      const gl = document.createElement('canvas').getContext('webgl2');
      const info = gl.getExtension('WEBGL_debug_renderer_info');
      const { scene } = window.__ioviewer;
      let triangles = 0;
      for (let i = 0; i < scene.instanceCount; i++) {
        const { mesh, batchId } = scene.instance(i);
        triangles += mesh.getGeometryRangeAt(mesh.getGeometryIdAt(batchId)).count / 3;
      }
      return {
        readyMs: window.__perfReady,
        domContentLoadedMs: nav.domContentLoadedEventStart,
        renderer: info ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
        elements: scene.elementCount,
        instances: scene.instanceCount,
        triangles,
        heapMB: performance.memory.usedJSHeapSize / 1048576,
        devicePixelRatio,
        canvas: [innerWidth, innerHeight],
      };
    });
    Object.assign(result, load);
    await installTimer(page);
    await page.waitForTimeout(1000); // let the first frames and any idle work settle

    result.orbit = fps(await orbit(page, ORBIT_MS, 1));
    result.orbitZoomed = fps(await orbit(page, ORBIT_MS, 0.25));

    // A pixel that hits an element, scanning from the centre outwards.
    const hit = await page.evaluate(() => {
      const { picker } = window.__ioviewer;
      const w = innerWidth;
      const h = innerHeight;
      for (let r = 0; r <= 40; r++) {
        for (let k = 0; k < Math.max(1, r * 8); k++) {
          const a = (k / Math.max(1, r * 8)) * Math.PI * 2;
          const x = w / 2 + Math.cos(a) * r * 10;
          const y = h / 2 + Math.sin(a) * r * 10;
          if (picker.pick(x, y)) return { x, y };
        }
      }
      return null;
    });
    if (hit) {
      result.pickMs = median(await page.evaluate(({ x, y }) => {
        const times = [];
        for (let k = 0; k < 10; k++) {
          const start = performance.now();
          window.__ioviewer.picker.pick(x, y);
          times.push(performance.now() - start);
        }
        return times;
      }, hit));
    }

    const step = async (label, name, arg) => {
      result[label] = await page.evaluate(({ name, arg }) => window.__perf.time(() => window.__perf.steps[name](arg)), { name, arg });
    };
    if (hit) {
      await step('clickSelectFirst', 'click', hit); // includes reading the properties block, once per page
      await step('clickSelect', 'click', hit);
      await step('hide', 'key', key('KeyH'));
      await step('showAll', 'key', key('KeyH', true));
      await step('isolate', 'key', key('KeyI'));
      await step('showAllAfterIsolate', 'key', key('KeyH', true));
    }
    await step('boxSelectAll', 'boxSelectAll');
    await step('hideBoxSelected', 'key', key('KeyH'));
    await step('showAllAfterBoxHide', 'key', key('KeyH', true));
    await step('clearSelection', 'key', key('Escape'));

    // At the home view still: the whole model in sight.
    await step('displayWhite', 'displayMode', 'white');
    await step('displayWireframe', 'displayMode', 'wireframe');
    await step('displayMaterials', 'displayMode', 'materials');
    await step('opacityHalf', 'opacity', 0.5);
    result.orbitTransparent = fps(await orbit(page, ORBIT_MS / 2, 1));
    await step('opacityFull', 'opacity', 1);

    await page.locator('.ioviewer-rail-button[data-panel="model"]').click();
    await step('treeSearch', 'search');
    await step('treeSelect', 'firstRow');
    await page.waitForTimeout(600); // the zoom animation
    await page.locator('.ioviewer-rail-button[data-panel="model"]').click();

    if (await page.evaluate(() => !!window.__ioviewer.timeliner)) {
      await step('fourDOpen', 'fourD', 'open');
      const ticks = [];
      for (const k of [0.25, 0.5, 0.75, 0.5, 0.3]) {
        await step('fourDTick', 'fourDAt', k);
        ticks.push(result.fourDTick);
      }
      result.fourDTick = { syncMs: median(ticks.map((t) => t.syncMs)), frameMs: median(ticks.map((t) => t.frameMs)), full: ticks.every((t) => t.full) };
      await step('fourDClose', 'fourD', 'close');
    }
    result.heapEndMB = await page.evaluate(() => performance.memory.usedJSHeapSize / 1048576);
    result.errors = errors;

    if (cdp) {
      const { profile } = await cdp.send('Profiler.stop');
      writeFileSync(path.join(OUT, `profile-${LABEL}-${name}.cpuprofile`), JSON.stringify(profile));
    }
    mkdirSync(OUT, { recursive: true });
    writeFileSync(path.join(OUT, `perf-${LABEL}-${name}.json`), JSON.stringify(result, null, 2));
    console.log(table(result));
  });
}

function table(r) {
  const n = (v, d = 1) => (typeof v === 'number' && Number.isFinite(v) ? v.toFixed(d) : '—');
  const op = (o) => (o ? `${n(o.syncMs)} ms sync / ${n(o.frameMs)} ms to ${o.full === false ? 'PARTIAL' : 'full'} frame` : '—');
  const run = (o) => `${n(o.medianFps)} / ${n(o.p95Fps)} (max ${n(o.maxMs, 0)} ms; drawn ${n(o.drawnMedian * 100)} % median, ${n(o.drawnMin * 100)} % min; threshold ${n(o.thresholdMedianPx, 2)} px median, ${n(o.thresholdMaxPx, 2)} max)`;
  const rows = [
    ['GPU', r.renderer],
    ['elements / instances / triangles', `${r.elements} / ${r.instances} / ${r.triangles}`],
    ['HTML', `${n(r.htmlMB)} MB`],
    ['ready (DOMContentLoaded)', `${n(r.readyMs, 0)} ms (${n(r.domContentLoadedMs, 0)} ms)`],
    ['JS heap after load / end', `${n(r.heapMB, 0)} / ${n(r.heapEndMB, 0)} MB`],
    ['orbit fps median / p95', run(r.orbit)],
    ['orbit zoomed fps median / p95', run(r.orbitZoomed)],
    ['orbit at 50 % opacity fps median / p95', run(r.orbitTransparent)],
    ['pick', `${n(r.pickMs)} ms`],
    ...['clickSelectFirst', 'clickSelect', 'hide', 'showAll', 'isolate', 'showAllAfterIsolate', 'boxSelectAll', 'hideBoxSelected',
      'showAllAfterBoxHide', 'clearSelection', 'treeSearch', 'treeSelect', 'displayWhite', 'displayWireframe',
      'displayMaterials', 'opacityHalf', 'opacityFull', 'fourDOpen', 'fourDTick', 'fourDClose']
      .map((k) => [k, op(r[k])]),
    ['box selected', String(r.boxSelectAll?.result)],
    ['page errors', r.errors.length ? r.errors.join(' | ') : 'none'],
  ];
  return `\n${r.label} — ${r.model}\n${rows.map(([k, v]) => `  ${k.padEnd(36)} ${v}`).join('\n')}`;
}
