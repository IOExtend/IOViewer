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
