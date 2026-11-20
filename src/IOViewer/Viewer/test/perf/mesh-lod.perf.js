import { expect, test } from '@playwright/test';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { startStreamServer } from '../../serve-stream.js';

const folder = process.env.PERF_MESH_MODEL;

test('walk a real model with progressive mesh coverage', async ({ page }) => {
  test.skip(!folder, 'Set PERF_MESH_MODEL to the prepared real model folder.');
  const manifest = JSON.parse(await readFile(path.join(folder, 'manifest.json')));
  const initial = new Set(manifest.roots.map((id) => `/pages/${id}`));
  const { server, url } = await startStreamServer(folder);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (event) => { if (/shader error|WebGL:/.test(event.text())) errors.push(event.text()); });
  let release;
  const gate = new Promise((resolve) => (release = resolve));
  try {
    await page.route('**/pages/*', async (route) => {
      if (!initial.has(new URL(route.request().url()).pathname)) await gate;
      await route.continue();
    });
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    const overview = await page.evaluate(async () => {
      const api = window.__ioviewerMeshLod;
      const gl = document.querySelector('canvas').getContext('webgl2');
      const debug = gl.getExtension('WEBGL_debug_renderer_info');
      return { readyMs: await api.ready, renderer: gl.getParameter(debug?.UNMASKED_RENDERER_WEBGL ?? gl.RENDERER), ...api.stats() };
    });
    await page.evaluate(() => {
      const { controls, manifest } = window.__ioviewerMeshLod;
      const { min, max } = manifest.focus ?? manifest;
      const target = min.map((n, i) => (n + max[i]) / 2);
      controls.restoreViewCamera({ position: target.map((n, i) => n + [8, -11, 5][i]), target, up: [0, 0, 1] });
    });
    await page.waitForFunction(() => window.__ioviewerMeshLod.stats().fallback > 0);
    const waiting = await page.evaluate(() => window.__ioviewerMeshLod.stats());
    const delayStart = Date.now();
    release();
    await page.waitForFunction(() => window.__ioviewerMeshLod.stats().exact > 0, null, { timeout: 30_000 });
    const firstExactMs = Date.now() - delayStart;
    const result = await page.evaluate(async () => {
      const api = window.__ioviewerMeshLod;
      const next = () => new Promise((resolve) => requestAnimationFrame(resolve));
      const { min, max } = api.manifest.focus ?? api.manifest;
      const centre = min.map((n, i) => (n + max[i]) / 2);
      const extent = Math.hypot(...max.map((n, i) => n - min[i]));
      const set = (target, shift) => api.controls.restoreViewCamera({ position: target.map((n, i) => n + shift[i]), target, up: [0, 0, 1] });
      const run = async (duration, step) => {
        step(0);
        await next();
        const start = await next();
        let previous = start, blank = 0, framesWithExact = 0, peakTriangles = 0, peakErrorPx = 0;
        const times = [];
        do {
          const now = await next();
          const stats = api.stats();
          if (!stats.visible || !stats.triangles) blank++;
          if (stats.exact) framesWithExact++;
          peakTriangles = Math.max(peakTriangles, stats.triangles);
          peakErrorPx = Math.max(peakErrorPx, stats.threshold);
          times.push(now - previous);
          previous = now;
          step(Math.min(1, (now - start) / duration));
        } while (previous - start < duration);
        times.sort((a, b) => a - b);
        const percentile = (p) => times[Math.ceil(p * times.length) - 1];
        return { samples: times.length, p50Ms: percentile(0.5), p95Ms: percentile(0.95), p99Ms: percentile(0.99),
          maxMs: times.at(-1), blank, framesWithExact, peakTriangles, peakErrorPx };
      };
      const orbit = await run(12_000, (fraction) => {
        const theta = -Math.PI / 2 + 0.9 * Math.PI * fraction;
        set(centre, [extent * Math.cos(theta), extent * Math.sin(theta), extent * 0.6]);
      });
      const close = await run(15_000, (fraction) => {
        const target = [...centre];
        target[2] = min[2] + (max[2] - min[2]) * (0.12 + fraction * 0.76);
        set(target, [8, -11, 5]);
      });
      return { orbit, close, end: api.stats() };
    });
    const out = process.env.PERF_OUT ?? path.join(os.tmpdir(), 'ioviewer-perf');
    await mkdir(out, { recursive: true });
    const report = { triangles: manifest.triangles, overview, waiting, firstExactMs, ...result };
    await writeFile(path.join(out, `mesh-lod-${process.env.PERF_LABEL || process.env.PERF_GPU || 'default'}.json`), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report));
    expect(overview.triangles).toBeGreaterThan(0);
    expect(waiting.triangles).toBeGreaterThan(0);
    expect(waiting.exact).toBe(0);
    expect(result.orbit.blank).toBe(0);
    expect(result.close.blank).toBe(0);
    expect(result.close.framesWithExact).toBeGreaterThan(0);
    expect(result.end.peak).toBeLessThanOrEqual(result.end.budget);
    expect(result.end.failures).toEqual([]);
    expect(errors).toEqual([]);
  } finally {
    release();
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
