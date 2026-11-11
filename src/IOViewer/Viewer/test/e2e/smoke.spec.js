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
  const background = await region(page, 0, 0);
  expect(center.equals(background)).toBe(false);
  await expect(page.locator('#ioviewer-status')).toHaveText(`Элементов: ${building.Elements.length}`);
  expect(errors).toEqual([]);
  expect(requests).toEqual([]);
});

test('empty document shows "no geometry"', async ({ page }) => {
  const { errors, requests } = await open(page, 'empty');

  await expect(page.getByText('Нет геометрии')).toBeVisible();
  await expect(page.locator('#ioviewer-status')).toHaveText('Элементов: 0');
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
  const background = await brightness(page, 20, 20);

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
