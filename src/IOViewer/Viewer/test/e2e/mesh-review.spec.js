import { expect, test } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { mkdtemp, rm, rmdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { buildMeshPages } from '../../build-mesh-pages.js';
import { startStreamServer } from '../../serve-stream.js';
import { fixturesDir, viewerDir } from './global-setup.js';

const generated = join(viewerDir, 'test-results');
const cli = join(viewerDir, '../../IOViewer.Cli/bin/Release/net10.0/IOViewer.Cli.dll');
const rail = (page, name) => page.locator(`.ioviewer-rail-button[data-panel="${name}"]`);
const panel = (page, name) => page.locator(`.ioviewer-side-panel[data-panel="${name}"]`);
const tool = (page, name) => page.locator(`[data-tool="${name}"]`);
const frame = (page) => page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
let folder;

test.beforeAll(async () => {
  folder = await mkdtemp(join(tmpdir(), 'ioviewer-mesh-review-'));
  for (const [name, input, ...args] of [
    ['review', join(generated, 'bcf-model.json'), '--bcf', join(fixturesDir, '../bcf/review.bcfzip')],
    ['textures', join(fixturesDir, 'textured.json')],
    ['measure', join(generated, 'measure-snap.json')],
  ]) {
    const source = join(folder, `${name}.ivmesh`);
    execFileSync('dotnet', [cli, input, '-o', source, ...args], { stdio: 'pipe' });
    await buildMeshPages(source, join(folder, name));
  }
});

test.afterAll(async () => {
  if (!folder) return;
  for (const name of ['review', 'textures', 'measure']) {
    await rm(join(folder, `${name}.ivmesh`), { force: true });
    for (const file of ['meshes.bin', 'manifest.json', 'elements.bin']) await rm(join(folder, name, file), { force: true });
    await rmdir(join(folder, name)).catch((error) => { if (error.code !== 'ENOENT') throw error; });
  }
  await rmdir(folder);
});

async function withViewer(page, name, run) {
  const { server, url } = await startStreamServer(join(folder, name));
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (event) => { if (event.type() === 'error') errors.push(event.text()); });
  try {
    await page.goto(url);
    await page.waitForFunction(() => Boolean(window.__ioviewerMeshLod), null, { timeout: 7000 });
    await page.evaluate(() => window.__ioviewerMeshLod.ready);
    await run();
    expect(errors).toEqual([]);
  } finally {
    await new Promise((resolve) => {
      server.close(resolve);
      server.closeAllConnections();
    });
  }
}

function shown(page, name) {
  return page.evaluate((name) => {
    const { scene, manifest } = window.__ioviewerMeshLod;
    return scene.isVisible(manifest.elements.findIndex((e) => e.name === name));
  }, name);
}

async function sample(page, [x, y]) {
  const png = await page.screenshot({ clip: { x: Math.round(x), y: Math.round(y), width: 1, height: 1 }, timeout: 4000 });
  return page.evaluate(async (bytes) => {
    const image = new Image();
    image.src = `data:image/png;base64,${bytes}`;
    await image.decode();
    const context = document.createElement('canvas').getContext('2d');
    context.drawImage(image, 0, 0);
    return [...context.getImageData(0, 0, 1, 1).data].slice(0, 3);
  }, png.toString('base64'));
}

test('stream BIM panels share saved views, independent visibility layers, clashes and BCF', async ({ page }) => {
  await withViewer(page, 'review', async () => {
    await expect(page.locator('#stream-controls select')).toHaveCount(0);
    await expect(page.locator('.ioviewer-grid-label').first()).toBeAttached();
    await tool(page, 'grids').click();
    await expect(page.locator('.ioviewer-grid-labels')).toBeHidden();
    await rail(page, 'views').click();
    await panel(page, 'views').locator('button.ioviewer-row').first().click();
    await page.waitForFunction(() => !window.__ioviewerMeshLod.controls.animating);
    const saved = await page.evaluate(() => {
      const { manifest, controls } = window.__ioviewerMeshLod;
      return controls.target.toArray().map((n, i) => n - manifest.review.viewpoints[0].camera.target[i]);
    });
    saved.forEach((value) => expect(value).toBeCloseTo(0, 6));

    await rail(page, 'clashes').click();
    const clash = panel(page, 'clashes').locator('.ioviewer-clash').first();
    await clash.click();
    expect(await page.evaluate(() => window.__ioviewerMeshLod.clashes.group.visible)).toBe(true);
    expect(await page.evaluate(() => window.__ioviewerMeshLod.selection.size)).toBeGreaterThan(0);

    await rail(page, 'links').click();
    const link = panel(page, 'links').getByRole('checkbox').first();
    const member = await page.evaluate(() => {
      const { manifest } = window.__ioviewerMeshLod;
      return manifest.elements[manifest.review.linkedFiles[0].members[0]].name;
    });
    await link.uncheck();
    expect(await shown(page, member)).toBe(false);
    await page.keyboard.press('Shift+H');
    expect(await shown(page, member)).toBe(false);
    await link.check();
    expect(await shown(page, member)).toBe(true);

    await rail(page, 'timeliner').click();
    await expect(panel(page, 'timeliner').locator('.ioviewer-task')).toHaveCount(7);
    await panel(page, 'timeliner').locator('.ioviewer-player-open').click();
    const player = page.locator('.ioviewer-player');
    await player.getByRole('button', { name: 'Пауза' }).click();
    expect(await shown(page, 'Ground Slab')).toBe(true);
    expect(await shown(page, 'Supply Duct SA-1')).toBe(false);
    await player.getByRole('button', { name: 'Закрыть' }).click();
    expect(await shown(page, 'Supply Duct SA-1')).toBe(true);

    await rail(page, 'bcf').click();
    const bcf = panel(page, 'bcf');
    await bcf.getByText('Inspect supply duct <review>', { exact: true }).click();
    await bcf.getByRole('button', { name: /1$/ }).first().click();
    expect(await shown(page, 'Ground Slab')).toBe(false);
    expect(await page.evaluate(() => window.__ioviewerMeshLod.sections.planes.length)).toBe(1);
    expect(await page.evaluate(() => window.__ioviewerMeshLod.selection.size)).toBe(2);
    await bcf.getByRole('button', { name: /2$/ }).first().click();
    expect(await page.evaluate(() => window.__ioviewerMeshLod.controls.camera.isOrthographicCamera)).toBe(true);
    expect(await shown(page, 'Supply Duct SA-1')).toBe(true);
  });
});

test('stream selection isolation and stencil cap render only the shown closed solid', async ({ page }) => {
  await withViewer(page, 'review', async () => {
    const item = await page.evaluate(() => {
      const { scene, sections, controls, manifest, grids } = window.__ioviewerMeshLod;
      grids.setVisible(false);
      const index = manifest.elements.findIndex((element) => element.name === 'Column D2 Level 1');
      scene.isolate([index]);
      const box = scene.elementBox(index);
      const center = box.getCenter(box.min.clone());
      controls.setProjection('orthographic');
      controls.restoreViewCamera({ position: [center.x, center.y - 0.1, center.z + 10], target: center.toArray(), up: [0, 1, 0] });
      const plane = sections.addPlane('z');
      sections.updatePlane(plane, { offset: center.z - sections.center.z });
      sections.setGizmoVisible(false);
      return index;
    });
    await rail(page, 'sections').click();
    const fill = panel(page, 'sections').getByRole('checkbox', { name: 'Заливка срезов' });
    await frame(page);
    const capDistance = async () => {
      const rgb = await sample(page, [640, 400]);
      return Math.hypot(...rgb.map((n, i) => n - [233, 173, 104][i]));
    };
    expect(await capDistance()).toBeGreaterThan(40);
    await fill.check();
    await expect.poll(capDistance).toBeLessThan(10);
    await page.evaluate((i) => window.__ioviewerMeshLod.scene.setVisible([i], false), item);
    await expect.poll(capDistance).toBeGreaterThan(40);
    expect(await page.evaluate(() => window.__ioviewerMeshLod.stats().visible)).toBe(0);
  });
});

test('stream textures retain UVs and the standard display toolbar controls their appearance', async ({ page }) => {
  await withViewer(page, 'textures', async () => {
    const points = await page.evaluate(() => {
      const { manifest, controls } = window.__ioviewerMeshLod;
      const rtc = controls.target.clone().fromArray(manifest.origin);
      const center = controls.target.clone().set(0, -2, 1.5).sub(rtc);
      controls.restoreViewCamera({ position: center.clone().add(controls.target.clone().set(0, -3, 0)).toArray(),
        target: center.toArray(), up: [0, 0, 1] });
      controls.camera.updateMatrixWorld();
      const a = 3 * Math.PI / 2, b = a + Math.PI / 24;
      const first = center.clone().set(2 * Math.cos(a), 2 * Math.sin(a), 0);
      const last = center.clone().set(2 * Math.cos(b), 2 * Math.sin(b), 0);
      return [[9.53125, 1.53125], [9.59375, 1.53125], [9.65625, 1.53125], [9.53125, 1.59375]].map(([u, z]) => {
        const p = first.clone().lerp(last, (u / 2 - a) / (b - a)).setZ(z).sub(rtc).project(controls.camera);
        return [(p.x + 1) * innerWidth / 2, (1 - p.y) * innerHeight / 2];
      });
    });
    const mode = async (value) => {
      await tool(page, 'displayMode').click();
      await page.locator(`[role=menuitemradio][data-mode=${value}]`).click();
      await frame(page);
    };
    await mode('textures');
    await expect.poll(async () => {
      const brightness = [];
      for (const point of points) brightness.push((await sample(page, point)).reduce((a, b) => a + b) / 3);
      return Math.min(brightness[0], brightness[2]) - Math.max(brightness[1], brightness[3]);
    }).toBeGreaterThan(30);
    await mode('white');
    const white = await sample(page, [640, 400]);
    await mode('wireframe');
    expect(await sample(page, [640, 400])).not.toEqual(white);
    await mode('materials');
    const opaque = await sample(page, [640, 400]);
    await tool(page, 'opacity').click();
    await page.locator('.ioviewer-opacity-slider').fill('40');
    await frame(page);
    expect(await sample(page, [640, 400])).not.toEqual(opaque);
  });
});

test('stream measurement snaps to a vertex, midpoint and edge on a fetched mesh', async ({ page }) => {
  await withViewer(page, 'measure', async () => {
    const coords = await page.evaluate(() => {
      const { controls, scene } = window.__ioviewerMeshLod;
      scene.setVisible([1], false);
      controls.setProjection('orthographic');
      const box = scene.elementBox(0), center = box.getCenter(box.max.clone());
      controls.restoreViewCamera({ position: [center.x, center.y, center.z + 9], target: center.toArray(), up: [0, 1, 0] });
      controls.camera.updateMatrixWorld();
      return [[0, 0], [2, 0], [1, 0], [2, 2]].map(([x, y]) => {
        const p = box.min.clone().set(box.min.x + x, box.min.y + y, box.min.z).project(controls.camera);
        return [(p.x + 1) * innerWidth / 2, (1 - p.y) * innerHeight / 2];
      });
    });
    await tool(page, 'distance').click();
    const canvas = page.locator('#ioviewer-canvas');
    const marker = page.locator('.ioviewer-measure-preview');
    for (const [i, kind, dx, dy] of [[0, 'vertex', 5, -3], [1, 'midpoint', 0, -3], [2, 'edge', 0, -3], [3, 'surface', 0, 0]]) {
      const x = coords[i][0] + dx, y = coords[i][1] + dy;
      await canvas.dispatchEvent('pointermove', { clientX: x, clientY: y, pointerType: 'mouse' });
      await expect(marker).toHaveAttribute('data-kind', kind);
      if (i < 2) await page.mouse.click(x, y);
    }
    expect(await page.evaluate(() => window.__ioviewerMeshLod.measure.distance)).toBeCloseTo(2, 5);
  });
});
