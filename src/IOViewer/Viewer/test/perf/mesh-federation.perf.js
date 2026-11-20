import { expect, test } from '@playwright/test';
import { readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { startStreamServer } from '../../serve-stream.js';

test('browse a federation wider than a 32-bit file offset under the page budget', async ({ page }) => {
  const folder = process.env.PERF_FEDERATED_MODEL;
  test.skip(!folder, 'Set PERF_FEDERATED_MODEL to a prepared large federation.');
  const manifest = JSON.parse(await readFile(join(folder, 'manifest.json')));
  expect((await stat(join(folder, 'meshes.bin'))).size).toBe(manifest.bytes);
  expect(manifest.bytes).toBeGreaterThanOrEqual(10_000_000_000);
  const { server, url } = await startStreamServer(folder);
  let highOffset = 0;
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    const match = new URL(response.url()).pathname.match(/^\/pages\/(\d+)$/);
    if (match && response.ok()) highOffset = Math.max(highOffset, manifest.pages[Number(match[1])].offset);
  });
  try {
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    const report = await page.evaluate(async () => {
      const api = window.__ioviewerMeshLod;
      const readyMs = await api.ready;
      const overview = api.stats().triangles;
      const next = () => new Promise(requestAnimationFrame);
      const { placements } = api.manifest;
      const set = (target, offset) => api.controls.restoreViewCamera({
        position: target.map((n, axis) => n + offset[axis]), target, up: [0, 0, 1],
      });
      const run = async (duration, apply) => {
        apply(0);
        await next();
        const times = [];
        let blank = 0, exact = 0, previous = await next();
        const start = previous;
        while (previous - start < duration) {
          const now = await next();
          times.push(now - previous);
          const stats = api.stats();
          if (!stats.triangles || !stats.visible) blank++;
          if (stats.exact) exact++;
          apply(Math.min(1, (now - start) / duration));
          previous = now;
        }
        times.sort((a, b) => a - b);
        return { frames: times.length, blank, exact, p95Ms: times[Math.ceil(times.length * 0.95) - 1], maxMs: times.at(-1) };
      };
      const centre = api.controls.target.toArray();
      const [x, y, z] = api.controls.camera.position.clone().sub(api.controls.target).toArray();
      const orbit = await run(8000, (k) => {
        const a = Math.PI * k;
        set(centre, [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a), z]);
      });
      const routes = [];
      for (const i of [0, 1, Math.floor(placements.length / 2), placements.length - 2, placements.length - 1]) {
        const { min, max } = placements[i];
        const route = await run(6000, (k) => {
          const target = min.map((n, axis) => (n + max[axis]) / 2);
          target[2] = min[2] + (max[2] - min[2]) * (0.24 + k * 0.52);
          set(target, [8, -11, 5]);
        });
        routes.push({ placement: i, ...route });
      }
      return { readyMs, overview, orbit, routes, ...api.stats() };
    });
    const result = { archiveBytes: manifest.bytes, pages: manifest.pages.length, sourceTriangles: manifest.triangles, highOffset, ...report };
    console.log(JSON.stringify(result));
    await writeFile(join(process.env.PERF_OUT ?? folder, `mesh-federation-${process.env.PERF_LABEL ?? 'default'}.json`), JSON.stringify(result, null, 2));
    expect(report.overview).toBeGreaterThan(0);
    expect(report.orbit.blank).toBe(0);
    for (const route of report.routes) {
      expect(route.blank).toBe(0);
      expect(route.exact).toBeGreaterThan(0);
    }
    expect(highOffset).toBeGreaterThan(2 ** 32);
    expect(report.peak).toBeLessThanOrEqual(report.budget);
    expect(report.failures).toEqual([]);
    expect(errors).toEqual([]);
  } finally {
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
