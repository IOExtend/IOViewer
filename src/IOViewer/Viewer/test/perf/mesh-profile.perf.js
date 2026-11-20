import { expect, test } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { startStreamServer } from '../../serve-stream.js';

test('measure the same close route with cold and warm page caches', async ({ page }) => {
  const folder = process.env.PERF_MESH_PROFILE_MODEL;
  test.skip(!folder, 'Set PERF_MESH_PROFILE_MODEL to a prepared RVT package.');
  const { server, url } = await startStreamServer(folder);
  try {
    await page.addInitScript((nativePixels) => {
      let samples, queries = [], extension;
      const reset = () => (samples = { fetch: [], networkBytes: 0, prepare: [], draw: [], upload: [], uploadBytes: 0, gpu: [] });
      reset();
      const original = WebGL2RenderingContext.prototype.bufferData;
      WebGL2RenderingContext.prototype.bufferData = function (...args) {
        const now = performance.now();
        original.apply(this, args);
        samples.upload.push(performance.now() - now);
        samples.uploadBytes += typeof args[1] === 'number' ? args[1] : (args[1]?.byteLength ?? 0);
      };
      window.IOVIEWER_MESH_PROFILE = {
        nativePixels,
        reset, read: () => ({ ...samples, gpuTimer: !!extension }),
        fetch: (ms, bytes) => { samples.fetch.push(ms); samples.networkBytes += bytes; },
        prepare: (ms) => samples.prepare.push(ms),
        draw: (gl, draw) => {
          extension ??= gl.getExtension('EXT_disjoint_timer_query_webgl2') ?? false;
          if (extension) {
            const disjoint = gl.getParameter(extension.GPU_DISJOINT_EXT);
            queries = queries.filter(([query, output]) => {
              if (!disjoint && !gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE)) return true;
              if (!disjoint) output.push(gl.getQueryParameter(query, gl.QUERY_RESULT) / 1e6);
              gl.deleteQuery(query);
              return false;
            });
          }
          const query = extension && queries.length < 8 ? gl.createQuery() : null;
          if (query) gl.beginQuery(extension.TIME_ELAPSED_EXT, query);
          const now = performance.now();
          draw();
          samples.draw.push(performance.now() - now);
          if (query) { gl.endQuery(extension.TIME_ELAPSED_EXT); queries.push([query, samples.gpu]); }
        },
      };
    }, process.env.PERF_MESH_NATIVE_PIXELS === '1');
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    const report = await page.evaluate(async () => {
      const api = window.__ioviewerMeshLod;
      const prof = window.IOVIEWER_MESH_PROFILE;
      await api.ready;
      const { min, max } = api.manifest.focus ?? api.manifest;
      const next = () => new Promise(requestAnimationFrame);
      const pct = (values, p) => values.length ? [...values].sort((a, b) => a - b)[Math.ceil(p * values.length) - 1] : null;
      const route = (k) => {
        const target = min.map((n, i) => (n + max[i]) / 2);
        target[2] = min[2] + (max[2] - min[2]) * (0.12 + k * 0.76);
        api.controls.restoreViewCamera({ position: target.map((n, i) => n + [8, -11, 5][i]), target, up: [0, 0, 1] });
      };
      const run = async () => {
        prof.reset();
        const before = api.stats();
        const times = [], triangles = [], threshold = [], raster = [];
        const start = await next();
        let last = start;
        route(0);
        while (last - start < 15_000) {
          const t = await next();
          times.push(t - last);
          const stats = api.stats();
          triangles.push(stats.triangles);
          threshold.push(stats.threshold);
          raster.push(stats.rasterScale);
          route(Math.min(1, (t - start) / 15_000));
          last = t;
        }
        const trace = prof.read(), after = api.stats();
        return { p95: pct(times, 0.95), p99: pct(times, 0.99), max: Math.max(...times), trianglesP50: pct(triangles, 0.5),
          thresholdP95: pct(threshold, 0.95), rasterP05: pct(raster, 0.05), requests: after.requested - before.requested, evictions: after.evictions - before.evictions,
          networkMiB: trace.networkBytes / 1048576, fetchP95: pct(trace.fetch, 0.95), prepareP95: pct(trace.prepare, 0.95),
          submissionP95: pct(trace.draw, 0.95), uploadCalls: trace.upload.length, uploadMiB: trace.uploadBytes / 1048576,
          uploadCallP95: pct(trace.upload, 0.95), gpuP95: pct(trace.gpu, 0.95), gpuSamples: trace.gpu.length, gpuTimer: trace.gpuTimer };
      };
      const cold = await run();
      await new Promise((resolve) => setTimeout(resolve, 400));
      const warm = await run();
      prof.holdPages = true;
      const deadline = performance.now() + 10_000;
      while (api.stats().pending && performance.now() < deadline) await next();
      if (api.stats().pending) throw new Error('Page requests did not finish.');
      return { cold, warm, residentOnly: await run(), end: api.stats() };
    });
    const out = process.env.PERF_OUT ?? path.join(os.tmpdir(), 'ioviewer-perf');
    await mkdir(out, { recursive: true });
    await writeFile(path.join(out, `mesh-profile-${process.env.PERF_LABEL ?? 'default'}.json`), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report));
    expect(report.end.failures).toEqual([]);
    expect(report.cold.networkMiB).toBeGreaterThan(0);
    expect(report.residentOnly.requests).toBe(0);
    expect(report.residentOnly.uploadMiB).toBe(0);
  } finally {
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
