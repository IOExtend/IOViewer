import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { fixturesDir, viewerDir } from './global-setup.js';

const building = JSON.parse(readFileSync(path.join(fixturesDir, 'building.json'), 'utf8'));

async function open(page, name) {
  const errors = [];
  const requests = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('request', (request) => !request.url().startsWith('file:') && requests.push(request.url()));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  return { errors, requests };
}

const nextFrame = (page) =>
  page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));

const region = (page, x, y) => page.screenshot({ clip: { x, y, width: 40, height: 40 } });

test('building renders the model and counts elements', async ({ page }) => {
  const { errors, requests } = await open(page, 'building');

  const { width, height } = page.viewportSize();
  const center = await region(page, width / 2 - 20, height / 2 - 20);
  const background = await region(page, 80, 0); // right of the panel rail
  expect(center.equals(background)).toBe(false);
  await expect(page.locator('#ioviewer-status')).toHaveText(`Выбрано: 0 · Элементов: ${building.Elements.length}`);
  expect(errors).toEqual([]);
  expect(requests).toEqual([]);
});

test('empty document shows "no geometry"', async ({ page }) => {
  const { errors, requests } = await open(page, 'empty');

  await expect(page.getByText('Нет геометрии')).toBeVisible();
  await expect(page.locator('#ioviewer-status')).toHaveText('Выбрано: 0 · Элементов: 0');
  expect(errors).toEqual([]);
  expect(requests).toEqual([]);
});

test('ModelScene addresses elements by index across meshes and materials', async ({ page }) => {
  const { errors } = await open(page, 'building');
  const duct = building.Elements.findIndex((e) => e.Name === 'Supply Duct SA-1');
  const curtain = building.Elements.findIndex((e) => e.Name === 'Curtain Wall South');

  const result = await page.evaluate(({ duct, curtain }) => {
    const { scene } = window.__ioviewer;
    const size = (box) => box.getSize(box.min.clone()).toArray();
    const all = scene.visibleBox();
    scene.isolate([duct]);
    const isolated = scene.visibleBox();
    scene.showAll();
    return {
      ids: [scene.elementId(duct), scene.elementId(curtain)],
      count: scene.elementCount,
      isolatedEqualsDuct: isolated.equals(scene.elementBox(duct)),
      restored: scene.visibleBox().equals(all),
      curtainSize: size(scene.elementBox(curtain)),
    };
  }, { duct, curtain });

  expect(result.ids).toEqual([building.Elements[duct].Id, building.Elements[curtain].Id]);
  expect(result.count).toBe(building.Elements.length);
  expect(result.isolatedEqualsDuct).toBe(true);
  expect(result.restored).toBe(true);
  // The curtain wall element = opaque mullion (z 0..0.1) + transparent glazing (z 0.1..7.2).
  expect(result.curtainSize[0]).toBeCloseTo(18, 4);
  expect(result.curtainSize[1]).toBeCloseTo(0.1, 4);
  expect(result.curtainSize[2]).toBeCloseTo(7.2, 4);
  expect(errors).toEqual([]);
});

// Mean grey level (0..255) of the 4x4 screen pixels around (x, y); the PNG is decoded by the page itself.
async function brightness(page, x, y) {
  const png = await page.screenshot({ clip: { x: x - 2, y: y - 2, width: 4, height: 4 } });
  return page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const context = document.createElement('canvas').getContext('2d');
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, image.width, image.height);
    let sum = 0;
    for (let i = 0; i < data.length; i += 4) sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
    return sum / (data.length / 4);
  }, png.toString('base64'));
}

test('a mirrored instance is shaded like its unmirrored twin', async ({ page }) => {
  const { errors } = await open(page, 'building');
  const twins = ['Column Twin', 'Column Twin Mirrored'].map((n) => building.Elements.findIndex((e) => e.Name === n));

  // Centre of each twin's -Y face, which faces the camera, in CSS pixels.
  const points = await page.evaluate((indices) => {
    const { scene, camera } = window.__ioviewer;
    return indices.map((index) => {
      const box = scene.elementBox(index);
      const point = box.getCenter(box.min.clone());
      point.y = box.min.y;
      point.project(camera);
      return [((point.x + 1) / 2) * innerWidth, ((1 - point.y) / 2) * innerHeight];
    });
  }, twins);
  const plain = await brightness(page, ...points[0]);
  const mirrored = await brightness(page, ...points[1]);
  const background = await brightness(page, 100, 20);

  expect(Math.abs(plain - background)).toBeGreaterThan(10); // the sample hits the column, not the background
  expect(Math.abs(mirrored - plain)).toBeLessThanOrEqual(3);
  expect(errors).toEqual([]);
});

test('highlight, visibility and display modes change the picture without errors', async ({ page }) => {
  const { errors } = await open(page, 'building');
  const { width, height } = page.viewportSize();
  const shot = () => region(page, width / 2 - 20, height / 2 - 20);
  const before = await shot();

  await page.evaluate((n) => window.__ioviewer.scene.setHighlighted([...Array(n).keys()]), building.Elements.length);
  await nextFrame(page);
  expect((await shot()).equals(before)).toBe(false);

  await page.evaluate(() => window.__ioviewer.scene.setHighlighted([]));
  await nextFrame(page);
  expect((await shot()).equals(before)).toBe(true);

  for (const mode of ['white', 'wireframe', 'textures', 'materials']) {
    await page.evaluate((m) => window.__ioviewer.scene.setDisplayMode(m), mode);
    await nextFrame(page);
  }
  await page.evaluate(() => window.__ioviewer.scene.setOpacity(0.5));
  await nextFrame(page);
  await page.evaluate(() => window.__ioviewer.scene.setOpacity(1));
  await nextFrame(page);
  expect((await shot()).equals(before)).toBe(true);
  expect(errors).toEqual([]);
});

// Grey levels (0..255) of the screen pixels in `clip`, row by row; the PNG is decoded by the page itself.
async function greys(page, clip) {
  const png = await page.screenshot({ clip });
  return page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const canvas = Object.assign(document.createElement('canvas'), { width: image.width, height: image.height });
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, image.width, image.height);
    return Array.from({ length: data.length / 4 }, (_, i) => (data[i * 4] + data[i * 4 + 1] + data[i * 4 + 2]) / 3);
  }, png.toString('base64'));
}

// How many neighbouring pixels differ by more than 1.5 grey levels across the middle 80 % of the textured fixture's
// cylinder, along the screen row through its centre: smooth shading changes by at most one level per pixel there, flat
// shading stays constant over a facet and jumps at its edge.
async function cylinderJumps(page) {
  const [x0, x1, y] = await page.evaluate(() => {
    const { camera } = window.__ioviewer;
    camera.updateMatrixWorld();
    const right = camera.position.clone().setFromMatrixColumn(camera.matrixWorld, 0).normalize();
    const screen = (p) => {
      const v = p.project(camera);
      return [((v.x + 1) / 2) * innerWidth, ((1 - v.y) / 2) * innerHeight];
    };
    const centre = window.__ioviewer.scene.elementBox(0).getCenter(camera.position.clone()); // the tank, RTC
    const [a] = screen(centre.clone().addScaledVector(right, -1.6));
    const [b, y] = screen(centre.clone().addScaledVector(right, 1.6));
    return [Math.round(a), Math.round(b), Math.round(y)];
  });
  const row = await greys(page, { x: x0, y, width: x1 - x0, height: 1 });
  return row.slice(1).filter((g, i) => Math.abs(g - row[i]) > 1.5).length;
}

test('curved surfaces are shaded smoothly from the baked normals, not flat per facet', async ({ page }) => {
  const { errors } = await open(page, 'textured');
  const geometries = await page.evaluate(() =>
    window.__ioviewer.scene.root.children.map((m) => ({ itemSize: m.geometry.getAttribute('normal')?.itemSize, normalized: m.geometry.getAttribute('normal')?.normalized })),
  );
  expect(geometries.length).toBeGreaterThan(0);
  expect(geometries.every((g) => g.itemSize === 2 && g.normalized)).toBe(true);
  const smooth = await cylinderJumps(page);
  // The defect this guards against: without a `normal` attribute three shades Lambert flat, per 7.5° facet, as here.
  await page.evaluate(() => {
    for (const { material } of window.__ioviewer.scene._buckets) {
      material.flatShading = true;
      material.needsUpdate = true;
    }
    window.__ioviewer.scene.setOpacity(1);
  });
  await nextFrame(page);
  const flat = await cylinderJumps(page);
  expect(smooth).toBe(0);
  expect(flat).toBeGreaterThanOrEqual(2);
  expect(errors).toEqual([]);
});

test('context lost shows the reload message', async ({ page }) => {
  await open(page, 'building');
  await expect(page.locator('#ioviewer-message')).toBeHidden();
  await page.evaluate(() => document.getElementById('ioviewer-canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());
  await expect(page.locator('#ioviewer-message')).toHaveText('Видеокарта сброшена — перезагрузите страницу');
  await expect(page.locator('#ioviewer-message')).toBeVisible();
});

test('pick element with index > 4096 (large fixture)', async ({ page }) => {
  const { errors } = await open(page, 'large');
  for (const element of [4097, 15123, 19999]) {
    // Zoomed onto the element (it is 0.3 m among 20000), the centre of its top face.
    const hit = await page.evaluate((element) => {
      const { scene, controls, picker, camera } = window.__ioviewer;
      const box = scene.elementBox(element);
      controls.fitBox(box, false);
      camera.updateMatrixWorld();
      const top = box.getCenter(box.min.clone());
      top.z = box.max.z;
      const p = top.clone().project(camera);
      const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
      const found = picker.pick(rect.left + ((p.x + 1) / 2) * rect.width, rect.top + ((1 - p.y) / 2) * rect.height);
      return found && { element: found.element, distance: found.point.distanceTo(top), slot: scene.instance(scene.instancesOf(element)[0]).slot };
    }, element);
    expect(hit.element).toBe(element);
    expect(hit.distance).toBeLessThan(0.01);
  }
  expect(errors).toEqual([]);
});

test('a restored context keeps the reload message and nothing throws: no render, no pick', async ({ page }) => {
  const { errors } = await open(page, 'building');
  await page.evaluate(() => {
    const lose = document.getElementById('ioviewer-canvas').getContext('webgl2').getExtension('WEBGL_lose_context');
    window.__lose = lose;
    lose.loseContext();
  });
  await expect(page.locator('#ioviewer-message')).toHaveText('Видеокарта сброшена — перезагрузите страницу');
  await page.evaluate(() => window.__lose.restoreContext());
  await page.waitForTimeout(300);
  // Interaction after the restore: an orbit drag, a click (pick) and a visibility change, each of which used to render.
  const { width, height } = page.viewportSize();
  await page.mouse.move(width / 2, height / 2);
  await page.mouse.down();
  await page.mouse.move(width / 2 + 60, height / 2 + 20, { steps: 4 });
  await page.mouse.up();
  await page.mouse.click(width / 2, height / 2);
  expect(await page.evaluate(() => window.__ioviewer.picker.pick(innerWidth / 2, innerHeight / 2))).toBeNull();
  await page.evaluate(() => window.__ioviewer.scene.setHighlighted([0]));
  await nextFrame(page);
  await expect(page.locator('#ioviewer-message')).toBeVisible();
  await expect(page.locator('#ioviewer-message')).toHaveText('Видеокарта сброшена — перезагрузите страницу');
  expect(errors).toEqual([]);
});

test.describe('a model over the slot limit', () => {
  test.beforeEach(({ page }) => page.addInitScript(() => (window.IOVIEWER_TEST = { slotLimit: 10 })));

  test('opens without geometry and says it is too large; the element tree still counts', async ({ page }) => {
    const { errors } = await open(page, 'building');
    const drawable = building.Meshes.filter((m) => m.Vertices.length > 0 || m.GeometryId != null).length;
    await expect(page.locator('#ioviewer-message')).toHaveText(`Модель слишком большая для этого просмотрщика: объектов с геометрией — ${drawable}, предел — 10`);
    await expect(page.locator('#ioviewer-status')).toHaveText(`Выбрано: 0 · Элементов: ${building.Elements.length}`);
    expect(await page.evaluate(() => window.__ioviewer.scene.memory().mergedInstances)).toBe(0);
    expect(errors).toEqual([]);
  });
});
