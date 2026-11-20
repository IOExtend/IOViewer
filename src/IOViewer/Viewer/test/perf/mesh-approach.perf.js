import { expect, test } from '@playwright/test';
import { mkdtemp, rm, rmdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { startStreamServer } from '../../serve-stream.js';
import { MESH_FORMAT, sizeOfPage, viewsOfPage } from '../../src/stream/meshPages.js';

test('a covered mesh cut switches without mixed pixels and holds its detail', async ({ page }) => {
  const folder = await mkdtemp(join(tmpdir(), 'ioviewer-refine-'));
  const manifestPath = join(folder, 'manifest.json'), geometryPath = join(folder, 'meshes.bin');
  const nodes = [0, 400, 0].map((x) => ({
    min: [x, 0, 0], max: [x + 1, 1, 0], offset: 0, vertices: 4, indices: 6, opaque: 6, error: 0, children: [],
  }));
  const root = nodes[2];
  Object.assign(root, { children: [0, 1], max: nodes[1].max, error: 0.1 });
  const size = sizeOfPage(root);
  const data = nodes.map((node, i) => {
    const x = node.min[0], buffer = new ArrayBuffer(size);
    node.offset = i * size;
    const view = viewsOfPage(buffer, node);
    view.position.set([x, 0, 0, x + 1, 0, 0, x, 1, 0, x + 1, 1, 0]);
    view.normal.set([0, 0, 32767, 0, 0, 32767, 0, 0, 32767, 0, 0, 32767]);
    view.index.set([0, 1, 2, 1, 3, 2]);
    for (let at = 0; at < view.color.length; at += 4) view.color.set(i === 2 ? [255, 0, 0, 255] : [0, 255, 0, 255], at);
    return Buffer.from(buffer);
  });
  let server, release, readyLeaf;
  const hold = new Promise((resolve) => (release = resolve));
  const leaf = new Promise((resolve) => (readyLeaf = resolve));
  try {
    await writeFile(geometryPath, Buffer.concat(data));
    await writeFile(manifestPath, JSON.stringify({
      format: MESH_FORMAT, min: root.min, max: root.max, origin: [0, 0, 0], triangles: 4, bytes: size * 3, pages: nodes, roots: [2],
    }));
    const streaming = await startStreamServer(folder);
    server = streaming.server;
    await page.route('**/pages/1', async (route) => { await hold; await route.abort(); });
    await page.route('**/pages/0', async (route) => { await leaf; await route.continue(); });
    await page.addInitScript(() => {
      window.cutFrames = [];
      const pixels = new Uint8Array(36);
      window.IOVIEWER_MESH_PROFILE = { nativePixels: true, fetch() {}, prepare() {}, draw(gl, draw) {
        draw();
        if (!window.captureCut) return;
        gl.readPixels((gl.drawingBufferWidth >> 1) - 1, (gl.drawingBufferHeight >> 1) - 1, 3, 3, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        let red = 0, green = 0;
        for (let at = 0; at < pixels.length; at += 4) {
          if (pixels[at] > pixels[at + 1] + 30) red++;
          if (pixels[at + 1] > pixels[at] + 30) green++;
        }
        window.cutFrames.push([red, green]);
      } };
    });
    await page.goto(streaming.url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    await page.evaluate(async () => {
      const api = window.__ioviewerMeshLod;
      await api.ready;
      window.captureCut = true;
      api.controls.restoreViewCamera({ position: [0.5, 0.5, 30], target: [0.5, 0.5, 0], up: [0, 1, 0] });
    });
    await expect.poll(() => page.evaluate(() => window.cutFrames), { timeout: 5000 }).toContainEqual([9, 0]);
    readyLeaf();
    await page.waitForFunction(() => window.__ioviewerMeshLod.stats().exact === 1, null, { timeout: 5000 });
    const stats = await page.evaluate(() => window.__ioviewerMeshLod.stats());
    expect(stats.triangles).toBe(2);
    expect(stats.fallback).toBe(0);
    expect(stats.failures).toEqual([]);
    const frames = await page.evaluate(() => {
      window.captureCut = false;
      const { controls } = window.__ioviewerMeshLod;
      const z = 0.1 * controls.dom.clientHeight / (2 * Math.tan(Math.PI / 8) * 1.2);
      controls.restoreViewCamera({ position: [0.5, 0.5, z], target: [0.5, 0.5, 0], up: [0, 1, 0] });
      return window.cutFrames;
    });
    expect(frames).toContainEqual([9, 0]);
    expect(frames).toContainEqual([0, 9]);
    expect(frames.every(([red, green]) => red === 9 || green === 9)).toBe(true);
    await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    expect(await page.evaluate(() => window.__ioviewerMeshLod.stats().exact)).toBe(1);
  } finally {
    readyLeaf();
    release();
    await page.close();
    if (server) await new Promise((resolve) => server.close(resolve));
    await Promise.all([manifestPath, geometryPath].map((file) => rm(file, { force: true })));
    await rmdir(folder);
  }
});

test('measure refinement while approaching a cold area and after arriving', async ({ page }) => {
  const folder = process.env.PERF_MESH_MODEL;
  test.skip(!folder, 'Set PERF_MESH_MODEL to a prepared cluster package.');
  const { server, url } = await startStreamServer(folder);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  try {
    await page.addInitScript(() => {
      window.IOVIEWER_MESH_PROFILE = { coarseMetrics: true, fetch() {}, prepare() {}, draw: (_, draw) => draw() };
    });
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    const report = await page.evaluate(async () => {
      const api = window.__ioviewerMeshLod;
      const { controls, manifest } = api;
      await api.ready;
      const region = manifest.placements?.[1] ?? manifest.focus ?? manifest;
      const target = region.min.map((n, i) => (n + region.max[i]) / 2);
      const near = [8, -11, 5];
      const next = () => new Promise(requestAnimationFrame);
      const move = (scale) => controls.restoreViewCamera({ position: target.map((n, i) => n + near[i] * scale), target, up: [0, 0, 1] });
      move(24);
      const start = await next();
      const approach = 1800, hold = 6000;
      let now = start, arrival = null, lastCoarse = null, lastNearbyCoarse = null, firstExact = null, blank = 0, coarseFrames = 0;
      let atThreeSeconds;
      const intervals = [];
      do {
        const previous = now;
        now = await next();
        const stats = api.stats();
        if (firstExact === null && stats.exact) firstExact = now - start - approach;
        if (now - start >= approach) {
          arrival ??= stats.coarsePixels;
          if (now - start >= approach + 3000) atThreeSeconds ??= { exact: stats.exact, fallback: stats.fallback };
          if (stats.coarsePixels > 6) {
            lastCoarse = now - start - approach;
            coarseFrames++;
          }
          if (stats.nearbyCoarsePixels > 6) lastNearbyCoarse = now - start - approach;
        }
        if (!stats.visible) blank++;
        intervals.push(now - previous);
        if (previous - start < approach) move(24 ** (1 - Math.min(1, (now - start) / approach)));
      } while (now - start < approach + hold);
      intervals.sort((a, b) => a - b);
      return { arrivalErrorPx: arrival, lastCoarseMs: lastCoarse, lastNearbyCoarseMs: lastNearbyCoarse, firstExactMs: firstExact, atThreeSeconds,
        coarseFrames, blank, p95: intervals[Math.ceil(intervals.length * 0.95) - 1], max: intervals.at(-1), end: api.stats() };
    });
    console.log(JSON.stringify(report));
    if (process.env.PERF_OUT) await writeFile(join(process.env.PERF_OUT, `mesh-approach-${process.env.PERF_LABEL}.json`), JSON.stringify(report, null, 2));
    expect(report.blank).toBe(0);
    expect(report.firstExactMs).not.toBeNull();
    expect(report.end.peak).toBeLessThanOrEqual(report.end.budget);
    expect(report.end.failures).toEqual([]);
    expect(errors).toEqual([]);
  } finally {
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
