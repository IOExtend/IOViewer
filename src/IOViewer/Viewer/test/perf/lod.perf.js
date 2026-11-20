import { expect, test } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { startStreamServer } from '../../serve-stream.js';

const folder = process.env.PERF_CLUSTER_MODEL;

test('continuous mesh coverage and frame pacing across the clustered 15 GB source', async ({ page }) => {
  test.skip(!folder, 'Set PERF_CLUSTER_MODEL to the packed fixture directory.');
  const { server, url } = await startStreamServer(folder);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' && /shader error|WebGL:/.test(message.text())) errors.push(message.text());
  });
  let open;
  const gate = new Promise((resolve) => (open = resolve));
  try {
    await page.route('**/pages/*', async (route) => { await gate; await route.continue(); });
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerLod));
    const overview = await page.evaluate(async () => {
      const api = window.__ioviewerLod;
      const gl = document.querySelector('canvas').getContext('webgl2');
      const debug = gl.getExtension('WEBGL_debug_renderer_info');
      return { readyMs: await api.ready, renderer: gl.getParameter(debug?.UNMASKED_RENDERER_WEBGL ?? gl.RENDERER), ...api.stats() };
    });
    expect(overview.renderedObjects).toBe(1_094_148);
    expect(overview.requests).toBe(0);
    await page.evaluate(() => {
      const api = window.__ioviewerLod;
      const node = api.manifest.roots[74].children[44];
      const target = node.min.map((n, i) => (n + node.max[i]) / 2 - api.manifest.origin[i]);
      target[2] += 20;
      api.controls.restoreViewCamera({ position: target.map((n, i) => n + [-12, -17, 20][i]), target, up: [0, 0, 1] });
    });
    await page.waitForFunction(() => window.__ioviewerLod.stats().pending > 0);
    const waiting = await page.evaluate(() => window.__ioviewerLod.stats());
    expect(waiting.shown[3]).toBe(0);
    expect(waiting.renderedObjects).toBeGreaterThan(100);
    expect(waiting.triangles).toBeGreaterThan(10_000);
    open();
    await page.waitForFunction(() => {
      const s = window.__ioviewerLod.stats();
      return s.shown[3] > 0 && s.pending === 0;
    });
    const refined = await page.evaluate(() => window.__ioviewerLod.stats());
    expect(refined.renderedObjects).toBe(waiting.renderedObjects);
    expect(refined.shown[3]).toBe(refined.detailDemand);

    const route = await page.evaluate(async () => {
      const api = window.__ioviewerLod;
      const next = () => new Promise((resolve) => requestAnimationFrame(resolve));
      const row = api.manifest.roots.filter((r) => r.y === 6);
      const mid = (r) => r.min.map((n, i) => (n + r.max[i]) / 2 - api.manifest.origin[i]);
      const a = mid(row[0]), b = mid(row.at(-1));
      const set = (target, offset) => api.controls.restoreViewCamera({ position: target.map((n, i) => n + offset[i]), target, up: [0, 0, 1] });
      const sample = async (ms, step) => {
        const start = await next();
        let prev = start, uncoveredFrames = 0, fine = 0, demand = 0, maxTriangles = 0, maxDraws = 0;
        const durations = [];
        while (prev - start < ms) {
          const now = await next(), elapsed = now - prev;
          const s = api.stats();
          if (s.renderedObjects === 0) uncoveredFrames++;
          if (s.detailDemand) {
            fine += s.shown[3] / s.detailDemand * elapsed;
            demand += elapsed;
          }
          maxTriangles = Math.max(maxTriangles, s.triangles);
          maxDraws = Math.max(maxDraws, s.draws);
          step(Math.min(1, (now - start) / ms));
          durations.push(elapsed);
          prev = now;
        }
        durations.sort((x, y) => x - y);
        return { ms, samples: durations.length, p50: durations[Math.ceil(0.5 * durations.length) - 1],
          p95: durations[Math.ceil(0.95 * durations.length) - 1], p99: durations[Math.ceil(0.99 * durations.length) - 1],
          max: durations.at(-1), uncoveredFrames, fineCoverage: demand ? fine / demand : null, maxTriangles, maxDraws };
      };
      const fly = (fraction) => {
        const target = a.map((n, i) => n + (b[i] - n) * fraction);
        set(target, [-45, -55 + Math.sin(fraction * 4 * Math.PI) * 10, 100]);
      };
      fly(0);
      await next();
      await next();
      const flyover = await sample(30_000, fly);
      const near = (fraction) => {
        const target = a.map((n, i) => n + (b[i] - n) * (0.25 + fraction * 0.28));
        target[2] += 20;
        set(target, [-12, -17, 20]);
      };
      near(0);
      await next();
      await next();
      const close = await sample(20_000, near);
      for (const root of api.manifest.roots.filter((root) => root.y % 2 === 0 && [4, 8, 11].includes(root.x))) {
        if (api.stats().evictions > 0) break;
        const target = mid(root.children[55]);
        target[2] += 20;
        set(target, [-12, -17, 20]);
        const deadline = performance.now() + 2500;
        do { await next(); }
        while (performance.now() < deadline && (api.stats().pending || api.stats().shown[3] < api.stats().detailDemand));
      }
      return { flyover, close, end: api.stats() };
    });
    const out = process.env.PERF_OUT ?? path.join(os.tmpdir(), 'ioviewer-perf');
    await mkdir(out, { recursive: true });
    const report = { overview, waiting, refined, ...route };
    await writeFile(path.join(out, `lod-${process.env.PERF_LABEL || process.env.PERF_GPU || 'default'}.json`), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report));
    expect(route.flyover.uncoveredFrames).toBe(0);
    expect(route.close.uncoveredFrames).toBe(0);
    expect(route.close.fineCoverage).toBeGreaterThan(0.5);
    expect(route.end.peak).toBeLessThanOrEqual(route.end.budget);
    expect(route.end.requests).toBeGreaterThan(50);
    expect(route.end.evictions).toBeGreaterThan(0);
    expect(route.end.failures).toEqual([]);
    expect(errors).toEqual([]);
  } finally {
    open();
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
