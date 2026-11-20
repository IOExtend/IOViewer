import { expect, test } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { startStreamServer } from '../../serve-stream.js';

const folder = process.env.PERF_STREAM_MODEL;

test('stream route across the 15 GB model', async ({ page }) => {
  test.skip(!folder, 'Set PERF_STREAM_MODEL to the prepared fixture directory.');
  const { server, url } = await startStreamServer(folder);
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  try {
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerStream));
    const overview = await page.evaluate(async () => {
      const api = window.__ioviewerStream;
      const gl = document.querySelector('canvas').getContext('webgl2');
      const extension = gl.getExtension('WEBGL_debug_renderer_info');
      const readyMs = await api.ready;
      return { readyMs, renderer: gl.getParameter(extension?.UNMASKED_RENDERER_WEBGL ?? gl.RENDERER), ...api.stats() };
    });
    expect(overview.tiles).toBe(171);
    expect(overview.requested).toBe(0);
    expect(overview.triangles).toBe(171 * 12);

    const result = await page.evaluate(async () => {
      const api = window.__ioviewerStream;
      const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
      const row = api.manifest.tiles.filter((tile) => tile.y === 6);
      const position = (tile) => tile.rtcOffset.map((n, i) => n - api.origin[i]);
      const cameraAt = (target, angle = 0) => {
        const offset = [-45 * Math.cos(angle) - 55 * Math.sin(angle), -55 * Math.cos(angle) + 45 * Math.sin(angle), 100];
        api.controls.restoreViewCamera({ position: target.map((n, i) => n + offset[i]), target, up: [0, 0, 1] });
      };
      const waitDetail = async (tile) => {
        const start = performance.now();
        let now = start;
        while (now - start < 15_000) {
          const state = api.stats();
          if (state.failures.length) throw new Error(JSON.stringify(state.failures));
          if (state.readyTiles.includes(tile.file)) return now - start;
          now = await nextFrame();
        }
        throw new Error(`Timed out waiting for ${tile.file}.`);
      };
      const a = position(row[0]), b = position(row.at(-1));
      cameraAt(a);
      const firstDetailMs = await waitDetail(row[0]);
      const routeMs = 30_000;
      const start = await nextFrame();
      let last = start, coverage = 0, peakVisibleTriangles = 0, maxMeshBytes = 0, maxV8Heap = 0;
      const intervals = [];
      const detailedDuringRoute = new Set();
      while (last - start < routeMs) {
        const now = await nextFrame();
        const fraction = Math.min(1, (now - start) / routeMs);
        const target = a.map((n, i) => n + fraction * (b[i] - n));
        cameraAt(target, 0.22 * Math.sin(4 * Math.PI * fraction));
        const state = api.stats();
        const elapsed = now - last;
        if (state.readyTiles.includes(state.wanted[0])) {
          coverage += elapsed;
          detailedDuringRoute.add(state.wanted[0]);
        }
        peakVisibleTriangles = Math.max(peakVisibleTriangles, state.triangles);
        maxMeshBytes = Math.max(maxMeshBytes, state.bytes);
        maxV8Heap = Math.max(maxV8Heap, performance.memory?.usedJSHeapSize ?? 0);
        intervals.push(elapsed);
        last = now;
      }
      intervals.sort((a, b) => a - b);
      const percentile = (p) => intervals[Math.ceil(p * intervals.length) - 1];
      const far = api.manifest.tiles.at(-1);
      cameraAt(position(far));
      const farDetailMs = await waitDetail(far);
      return {
        firstDetailMs, farDetailMs, routeMetres: Math.hypot(...a.map((n, i) => b[i] - n)), routeMs,
        samples: intervals.length, p50Ms: percentile(0.5), p95Ms: percentile(0.95), p99Ms: percentile(0.99), maxMs: intervals.at(-1),
        detailedShare: coverage / (last - start), detailedDuringRoute: [...detailedDuringRoute], peakVisibleTriangles,
        maxMeshBytes, maxV8Heap, end: api.stats(),
      };
    });
    expect(result.end.failures).toEqual([]);
    expect(pageErrors).toEqual([]);
    expect(result.end.evicted).toBeGreaterThan(0);
    expect(result.detailedDuringRoute.length).toBeGreaterThan(5);
    expect(result.end.peak).toBeLessThanOrEqual(result.end.budget);
    const out = process.env.PERF_OUT ?? path.join(os.tmpdir(), 'ioviewer-perf');
    await mkdir(out, { recursive: true });
    const report = { overview, ...result };
    await writeFile(path.join(out, `stream-${process.env.PERF_LABEL || process.env.PERF_GPU || 'default'}.json`), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report));
  } finally {
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
