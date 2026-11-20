import { expect, test } from '@playwright/test';
import { mkdtemp, open, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Vector3 } from 'three';
import { startStreamServer } from '../../serve-stream.js';
import { MESH_FORMAT, sizeOfPage, viewsOfPage } from '../../src/stream/meshPages.js';

test('the section plane cuts both sides of a rendered cluster seam', async ({ page }) => {
  const folder = await mkdtemp(join(tmpdir(), 'ioviewer-section-'));
  const manifestPath = join(folder, 'manifest.json'), dataPath = join(folder, 'meshes.bin');
  let server;
  try {
    const nodes = [0, 1].map((x) => ({
      min: [x, 0, 0], max: [x + 1, 1, 0], offset: 0, vertices: 4, indices: 6, opaque: 6, error: 0, children: [],
    }));
    const size = sizeOfPage(nodes[0]);
    nodes[1].offset = size;
    const pages = nodes.map((node, x) => {
      const buffer = new ArrayBuffer(size);
      const view = viewsOfPage(buffer, node);
      view.position.set([x, 0, 0, x + 1, 0, 0, x, 1, 0, x + 1, 1, 0]);
      view.normal.set([0, 0, 32767, 0, 0, 32767, 0, 0, 32767, 0, 0, 32767]);
      view.index.set([0, 1, 2, 1, 3, 2]);
      view.color.fill(255);
      return Buffer.from(buffer);
    });
    await writeFile(dataPath, Buffer.concat(pages));
    await writeFile(manifestPath, JSON.stringify({
      format: MESH_FORMAT, min: [0, 0, 0], max: [2, 1, 0], origin: [0, 0, 0], triangles: 4, bytes: size * 2, pages: nodes, roots: [0, 1],
    }));
    const io = await startStreamServer(folder);
    server = io.server;
    await page.addInitScript(() => {
      window.IOVIEWER_MESH_PROFILE = {
        fetch() {}, prepare() {},
        draw(gl, draw) {
          draw();
          if (!window.readSectionPixels) return;
          const camera = window.__ioviewerMeshLod.controls.camera;
          const pixel = new Uint8Array(4);
          const samples = [0.75, 1.25].flatMap((x) => [0.3, 0.7].map((y) => {
            const p = camera.position.clone().set(x, y, 0).project(camera);
            gl.readPixels(Math.floor((p.x + 1) * gl.drawingBufferWidth / 2), Math.floor((p.y + 1) * gl.drawingBufferHeight / 2),
              1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
            return pixel[0] > 128;
          }));
          window.readSectionPixels(samples);
          window.readSectionPixels = null;
        },
      };
    });
    await page.goto(io.url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    const colors = () => page.evaluate(() => new Promise((resolve) => {
      window.readSectionPixels = resolve;
      window.__ioviewerMeshLod.controls.restoreViewCamera({ position: [1, 0.5, 2], target: [1, 0.5, 0], up: [0, 1, 0] });
    }));
    expect(await colors()).toEqual([true, true, true, true]);
    await page.locator('[data-tool=distance]').click();
    const points = await page.evaluate(() => {
      const camera = window.__ioviewerMeshLod.controls.camera;
      const rect = document.querySelector('#ioviewer-canvas').getBoundingClientRect();
      return [0.75, 1.25].map((x) => {
        const p = camera.position.clone().set(x, 0.3, 0).project(camera);
        return [rect.left + (p.x + 1) * rect.width / 2, rect.top + (1 - p.y) * rect.height / 2];
      });
    });
    await page.mouse.click(...points[0]);
    await expect.poll(() => page.evaluate(() => window.__ioviewerMeshLod.measure.points.length)).toBe(1);
    await page.mouse.click(...points[1]);
    await expect(page.locator('.ioviewer-measure-label')).toHaveText(/0[.,]50\s/);
    await page.locator('[data-tool=distance]').click();
    await page.locator('.ioviewer-rail-button[data-panel=sections]').click();
    const sections = page.locator('.ioviewer-side-panel[data-panel=sections]');
    await sections.getByRole('button', { name: /плоскости|planes/i, exact: true }).click();
    await sections.getByRole('button', { name: 'Y', exact: true }).click();
    await sections.locator('.ioviewer-section-row > .ioviewer-text-button').click();
    await page.evaluate(() => window.__ioviewerMeshLod.sections.setGizmoVisible(false));
    expect(await colors()).toEqual([true, false, true, false]);
    await sections.locator('.ioviewer-section-head button[aria-pressed]').click();
    expect(await colors()).toEqual([false, true, false, true]);

    await page.locator('[data-tool=projection]').click();
    expect(await page.evaluate(() => window.__ioviewerMeshLod.controls.camera.isOrthographicCamera)).toBe(true);
    await page.evaluate(() => {
      const { sections } = window.__ioviewerMeshLod;
      const box = sections.modelBox.clone();
      box.min.set(0.5, 0.5, -0.1);
      box.max.set(1.5, 1, 0.1);
      sections.setBox(box, Math.PI / 12);
    });
    expect(await colors()).toEqual([false, true, false, true]);
    await sections.locator('[data-value=cutInside]').click();
    expect(await colors()).toEqual([true, false, true, false]);
  } finally {
    await page.close();
    if (server) await new Promise((resolve) => server.close(resolve));
    await Promise.all([dataPath, manifestPath].map((file) => rm(file, { force: true })));
    await rmdir(folder);
  }
});

test('select a real original element and keep its properties while changing detail', async ({ page }) => {
  const folder = process.env.PERF_MESH_TOOLS_MODEL;
  test.skip(!folder, 'Set PERF_MESH_TOOLS_MODEL to an annotated IFC or RVT package.');
  const manifest = JSON.parse(await readFile(join(folder, 'manifest.json')));
  const leaves = manifest.pages.filter((node) => node.pick);
  expect(leaves.length).toBeGreaterThan(1);
  const candidates = [];
  const file = await open(join(folder, 'meshes.bin'));
  try {
    for (let sample = 1; sample <= 12; sample++) {
      const node = leaves[Math.floor(leaves.length * sample / 13)];
      const size = sizeOfPage(node);
      const buffer = new ArrayBuffer(size);
      expect((await file.read(new Uint8Array(buffer), 0, size, node.offset)).bytesRead).toBe(size);
      const { position, index, color, tags } = viewsOfPage(buffer, node);
      for (let i = 0; i < index.length; i += 3) {
        const element = manifest.elements[tags[i / 3]];
        const [x, y, z] = index.slice(i, i + 3);
        if (!element.size || [x, y, z].some((v) => color[v * 4 + 3] !== 255)) continue;
        const a = new Vector3().fromArray(position, x * 3);
        const b = new Vector3().fromArray(position, y * 3);
        const c = new Vector3().fromArray(position, z * 3);
        const normal = b.clone().sub(a).cross(c.clone().sub(a));
        if (normal.lengthSq() < 1e-5) continue;
        normal.normalize();
        const target = a.add(b).add(c).divideScalar(3);
        if (target.z <= (manifest.focus ?? manifest).min[2]) continue;
        const camera = { target: target.toArray(), position: target.addScaledVector(normal, 0.2).toArray(),
          up: Math.abs(normal.z) > 0.9 ? [0, 1, 0] : [0, 0, 1] };
        candidates.push({ camera, id: element.id, index: tags[i / 3] });
        break;
      }
    }
  } finally {
    await file.close();
  }
  expect(candidates.length).toBeGreaterThan(0);
  const { server, url } = await startStreamServer(folder);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  try {
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod));
    await page.evaluate(() => window.__ioviewerMeshLod.ready);
    const canvas = await page.locator('#ioviewer-canvas').boundingBox();
    const click = (button = 'left') => page.mouse.click(canvas.x + canvas.width / 2, canvas.y + canvas.height / 2, { button });
    const selected = () => page.evaluate(() => [...window.__ioviewerMeshLod.selection.values()][0] ?? null);
    const panel = page.locator('#ioviewer-properties');
    const note = page.locator('#stream-pick-status');
    let hit;
    for (const candidate of candidates) {
      await page.keyboard.press('Escape');
      await page.evaluate((camera) => window.__ioviewerMeshLod.controls.restoreViewCamera(camera), candidate.camera);
      await click();
      await expect(note).toBeHidden({ timeout: 15_000 });
      if (await selected() === candidate.index) { hit = candidate; break; }
    }
    expect(hit).toBeDefined();
    await expect(panel).toBeVisible();
    await expect(panel.getByText(hit.id, { exact: true })).toBeVisible();
    await expect.poll(() => panel.locator('section').count()).toBeGreaterThan(1);
    const propertyGroups = await panel.locator('section').count();
    await click('right');
    await expect(page.getByRole('menu').locator('[data-item=copyId]')).toBeVisible();
    await page.keyboard.press('Escape');
    await page.locator('[data-tool=fit]').click();
    expect(await selected()).toBe(hit.index);
    await page.locator('.ioviewer-rail-button[data-panel=model]').click();
    const model = page.locator('.ioviewer-side-panel[data-panel=model]');
    await model.getByRole('searchbox').fill(hit.id);
    const row = model.locator('.tree-element[aria-selected=true]');
    await expect(row).toBeVisible();
    if (manifest.elements[hit.index].name) await expect(row).toContainText(manifest.elements[hit.index].name);
    const rowNumber = await row.getAttribute('data-row');
    await page.locator('#ioviewer-properties .ioviewer-properties-close').click();
    const propertyResponse = page.waitForResponse((response) => new URL(response.url()).pathname === `/elements/${hit.index}`);
    await model.locator(`.tree-element[data-row="${rowNumber}"]`).click();
    expect(await selected()).toBe(hit.index);
    expect((await propertyResponse).ok()).toBe(true);
    await page.evaluate((camera) => window.__ioviewerMeshLod.controls.restoreViewCamera(camera), hit.camera);
    await click('right');
    await page.getByRole('menu').locator('[data-item=hide]').click();
    await click();
    await expect(note).toBeHidden({ timeout: 15_000 });
    expect(await selected()).not.toBe(hit.index);
    await page.keyboard.press('Shift+H');
    await click();
    await expect(note).toBeHidden({ timeout: 15_000 });
    expect(await selected()).toBe(hit.index);
    await page.locator('[data-tool=plane]').click();
    await page.locator('.ioviewer-section-plane input[type=range]').evaluate((input) => {
      input.value = input.min;
      input.dispatchEvent(new Event('input'));
    });
    await click();
    await expect(note).toBeHidden({ timeout: 15_000 });
    expect(await selected()).toBeNull();
    await expect(panel).toBeHidden();
    expect(errors).toEqual([]);
    console.log(JSON.stringify({ elements: manifest.elements.length, propertyGroups }));
  } finally {
    await page.close();
    await new Promise((resolve) => server.close(resolve));
  }
});
