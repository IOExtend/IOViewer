import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

async function open(page) {
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', 'building.html')).href);
  await page.evaluate(() => window.__ioviewer.ready);
  return errors;
}

const frame = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const indexOf = (page, name) =>
  page.evaluate((n) => JSON.parse(document.getElementById('ioviewer-meta').textContent).elements.findIndex((e) => e.name === n), name);
const selected = (page) => page.evaluate(() => [...window.__ioviewer.selection.values()]);

// Client position of a world point given as fractions of the element's box (0.5 = centre).
const screenAt = (page, index, f = [0.5, 0.5, 0.5]) =>
  page.evaluate(([i, f]) => {
    const { scene, camera } = window.__ioviewer;
    camera.updateMatrixWorld(); // a camera just swapped in by setProjection has not been rendered yet
    const { min, max } = scene.elementBox(i);
    const p = min.clone().set(...[0, 1, 2].map((k) => min.getComponent(k) + (max.getComponent(k) - min.getComponent(k)) * f[k]));
    p.project(camera);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [rect.left + ((p.x + 1) / 2) * rect.width, rect.top + ((1 - p.y) / 2) * rect.height];
  }, [index, f]);

// Client rect of the element's 8 projected box corners.
const screenRect = (page, index) =>
  page.evaluate((i) => {
    const { scene, camera } = window.__ioviewer;
    const { min, max } = scene.elementBox(i);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    const xs = [], ys = [];
    for (let k = 0; k < 8; k++) {
      const p = min.clone().set(k & 1 ? max.x : min.x, k & 2 ? max.y : min.y, k & 4 ? max.z : min.z).project(camera);
      xs.push(rect.left + ((p.x + 1) / 2) * rect.width);
      ys.push(rect.top + ((1 - p.y) / 2) * rect.height);
    }
    return { minX: Math.min(...xs), minY: Math.min(...ys), maxX: Math.max(...xs), maxY: Math.max(...ys) };
  }, index);

async function shiftDrag(page, from, to, extra) {
  await page.keyboard.down('Shift');
  if (extra) await page.keyboard.down(extra);
  await page.mouse.move(...from);
  await page.mouse.down();
  await page.mouse.move((from[0] + to[0]) / 2, (from[1] + to[1]) / 2);
  await page.mouse.move(...to);
  await page.mouse.up();
  if (extra) await page.keyboard.up(extra);
  await page.keyboard.up('Shift');
}

const panel = (page) => page.locator('#ioviewer-properties');
const blank = [100, 15]; // background: right of the panel rail, far from the fitted model

test('click selects a column and shows its properties; Ctrl+click adds a second; click on nothing clears', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d3 = await indexOf(page, 'Column D3 Level 1');
  await expect(panel(page)).toBeHidden();

  await page.mouse.click(...(await screenAt(page, d2)));
  expect(await selected(page)).toEqual([d2]);
  await expect(panel(page)).toBeVisible();
  await expect(panel(page).locator('h2')).toHaveText('Column D2 Level 1');
  // First group: element fields (ru UI), then the PROPS groups with the mark.
  await expect(panel(page).locator('h3').first()).toHaveText('Элемент');
  await expect(panel(page)).toContainText('Structural Columns');
  await expect(panel(page)).toContainText('Structure.rvt');
  await expect(panel(page).locator('tr', { hasText: 'Mark' }).locator('td')).toHaveText('Column D2 Level 1');
  await expect(panel(page)).toContainText('400 x 400 mm');

  await page.keyboard.down('Control');
  await page.mouse.click(...(await screenAt(page, d3)));
  await page.keyboard.up('Control');
  expect(await page.evaluate(() => window.__ioviewer.selection.size)).toBe(2);
  await expect(panel(page).locator('h2')).toHaveText('Выбрано: 2');
  await expect(panel(page).locator('table')).toHaveCount(0);

  // Ctrl+click on nothing keeps the selection; a plain click on nothing clears it.
  await page.keyboard.down('Control');
  await page.mouse.click(...blank);
  await page.keyboard.up('Control');
  expect(await selected(page)).toEqual([d2, d3]);
  await page.mouse.click(...blank);
  expect(await selected(page)).toEqual([]);
  await expect(panel(page)).toBeHidden();
  expect(errors).toEqual([]);
});

test('Ctrl+click toggles off, Esc and the close button clear', async ({ page }) => {
  await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const point = await screenAt(page, d2);
  await page.mouse.click(...point);
  await page.keyboard.down('Control');
  await page.mouse.click(...point);
  await page.keyboard.up('Control');
  expect(await selected(page)).toEqual([]);

  await page.mouse.click(...point);
  await page.keyboard.press('Escape');
  expect(await selected(page)).toEqual([]);

  await page.mouse.click(...point);
  await panel(page).locator('button').click();
  expect(await selected(page)).toEqual([]);
  await expect(panel(page)).toBeHidden();
});

test('pick returns the element and a point on its surface, and the controls use it', async ({ page }) => {
  await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const [x, y] = await screenAt(page, d2);
  const result = await page.evaluate(([x, y, i]) => {
    const { picker, scene } = window.__ioviewer;
    const hit = picker.pick(x, y);
    const box = scene.elementBox(i);
    // On the box surface: inside the box and on one of its faces.
    const p = hit.point;
    const onFace = ['x', 'y', 'z'].some((k) => Math.abs(p[k] - box.min[k]) < 1e-3 || Math.abs(p[k] - box.max[k]) < 1e-3);
    return { element: hit.element, inside: box.expandByScalar(1e-3).containsPoint(p), onFace, pivot: window.__ioviewer.controls.pick(x, y)?.toArray() };
  }, [x, y, d2]);
  expect(result).toMatchObject({ element: d2, inside: true, onFace: true });
  expect(result.pivot).toHaveLength(3);

  // The picker follows the controls to the orthographic camera.
  await page.evaluate(() => window.__ioviewer.controls.setProjection('orthographic'));
  const [ox, oy] = await screenAt(page, d2);
  expect(await page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element, [ox, oy])).toBe(d2);
});

test('pick skips hidden and clipped elements', async ({ page }) => {
  await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const [x, y] = await screenAt(page, d2);
  const picked = () => page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element ?? null, [x, y]);

  await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), d2);
  expect(await picked()).not.toBe(d2);
  await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], true), d2);
  expect(await picked()).toBe(d2);

  // Keep only x <= c, just short of the column (THREE.Plane shape: n·p + constant >= 0 is kept), so it is cut away.
  await page.evaluate((i) => {
    const { scene } = window.__ioviewer;
    const box = scene.elementBox(i);
    const normal = box.min.clone().set(-1, 0, 0);
    const constant = box.min.x - 0.1;
    scene.setClipping([{ normal, constant, distanceToPoint: (p) => normal.dot(p) + constant }], false);
  }, d2);
  expect(await picked()).not.toBe(d2);
  await page.evaluate(() => window.__ioviewer.scene.setClipping([], false));
  expect(await picked()).toBe(d2);
});

test('Shift box: window around one column selects it, crossing through a row selects more, Ctrl adds', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const r = await screenRect(page, d2);
  await shiftDrag(page, [r.minX - 3, r.minY - 3], [r.maxX + 3, r.maxY + 3]); // left to right: window
  expect(await selected(page)).toEqual([d2]);

  const a3 = await screenAt(page, await indexOf(page, 'Column A3 Level 1'));
  const d3 = await screenAt(page, await indexOf(page, 'Column D3 Level 1'));
  const y = (a3[1] + d3[1]) / 2;
  await shiftDrag(page, [Math.max(a3[0], d3[0]), y - 10], [Math.min(a3[0], d3[0]), y + 10]); // right to left: crossing
  const crossing = await selected(page);
  expect(crossing.length).toBeGreaterThan(1);
  expect(crossing).not.toContain(d2); // replaced, not added

  await shiftDrag(page, [r.minX - 3, r.minY - 3], [r.maxX + 3, r.maxY + 3], 'Control');
  expect((await selected(page)).sort()).toEqual([...crossing, d2].sort());

  // A sliver under 4 px tall changes nothing while Shift is held.
  await shiftDrag(page, [100, 100], [300, 102]);
  expect((await selected(page)).length).toBe(crossing.length + 1);
  expect(errors).toEqual([]);
});

test('an element of an opaque and a transparent mesh is picked through its glazing and highlighted whole', async ({ page }) => {
  const errors = await open(page);
  const wall = await indexOf(page, 'Curtain Wall South');
  // Glazing: the transparent mesh, x 0..18, z 0.1..7.2; a point in its lower middle.
  await page.mouse.click(...(await screenAt(page, wall, [0.5, 0.5, 0.2])));
  expect(await selected(page)).toEqual([wall]);
  await expect(panel(page).locator('h2')).toHaveText('Curtain Wall South');
  const colours = await page.evaluate((i) => {
    const { scene } = window.__ioviewer;
    return [...scene.instancesOf(i)].map((n) => {
      return { transparent: scene.instance(n).mesh.material.transparent, hex: scene.instanceColor(n).getHexString() };
    });
  }, wall);
  expect(colours).toHaveLength(2);
  expect(colours.map((c) => c.transparent).sort()).toEqual([false, true]);
  // Instance colours are linear; #f59e0b in linear sRGB.
  const highlight = await page.evaluate(() => window.__ioviewer.scene.instance(0).mesh.material.color.clone().set('#f59e0b').getHexString());
  expect(colours.map((c) => c.hex)).toEqual([highlight, highlight]);
  expect(errors).toEqual([]);
});

// Client position of a world point.
const screenOfWorld = (page, world) =>
  page.evaluate((w) => {
    const { scene, camera } = window.__ioviewer;
    const [ox, oy, oz] = JSON.parse(document.getElementById('ioviewer-meta').textContent).rtcOffset;
    const p = scene.elementBox(0).min.clone().set(w[0] - ox, w[1] - oy, w[2] - oz).project(camera);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [rect.left + ((p.x + 1) / 2) * rect.width, rect.top + ((1 - p.y) / 2) * rect.height];
  }, world);

test('a mesh without an element is picked for navigation and measuring, but clicking it selects nothing', async ({ page }) => {
  const errors = await open(page);
  const marker = await page.evaluate(() => {
    const { scene } = window.__ioviewer;
    for (let i = 0; i < scene.instanceCount; i++) if (scene.instance(i).element === -1) return i;
    return -1;
  });
  expect(marker).toBeGreaterThanOrEqual(0);
  // The Survey Marker pyramid: base -3.3..-2.7 in X and Y, apex at z 0.8 (world); aim a little above the base centre.
  const point = await screenOfWorld(page, [-3, -3, 0.2]);
  const background = await page.evaluate(() => window.__ioviewer.picker.pick(100, 15));
  expect(background).toBeNull();
  // The marker is picked with element -1 and its surface point, in world coordinates on the pyramid.
  const hit = await page.evaluate(([x, y]) => {
    const h = window.__ioviewer.picker.pick(x, y);
    const [ox, oy, oz] = JSON.parse(document.getElementById('ioviewer-meta').textContent).rtcOffset;
    return h && { element: h.element, point: h.point.toArray(), world: [h.point.x + ox, h.point.y + oy, h.point.z + oz] };
  }, point);
  expect(hit.element).toBe(-1);
  const [wx, wy, wz] = hit.world;
  for (const c of [wx, wy]) expect(c > -3.3 - 1e-3 && c < -2.7 + 1e-3).toBe(true);
  expect(wz > -1e-3 && wz < 0.8 + 1e-3).toBe(true);
  // The orbit pivot and the wheel zoom target are that point.
  expect(await page.evaluate(([x, y]) => window.__ioviewer.controls.pick(x, y)?.toArray(), point)).toEqual(hit.point);

  // Clicking it selects nothing and clears the selection, without errors.
  await page.mouse.click(...(await screenAt(page, await indexOf(page, 'Column D2 Level 1'))));
  expect(await selected(page)).toHaveLength(1);
  await page.mouse.click(...point);
  expect(await selected(page)).toEqual([]);
  await page.mouse.click(...point, { modifiers: ['Control'] });
  expect(await selected(page)).toEqual([]);
  await page.mouse.click(...point, { button: 'right' });
  await expect(page.locator('.ioviewer-context-menu')).toBeVisible();
  expect(await selected(page)).toEqual([]);
  await page.keyboard.press('Escape');

  // The distance tool measures from the marker to a point on the ground slab.
  const slabPoint = [2, -0.9, 0];
  await page.locator('.ioviewer-tool[data-tool="distance"]').click();
  await page.mouse.click(...point);
  await page.mouse.click(...(await screenOfWorld(page, slabPoint)));
  const measured = await page.evaluate(() => ({ count: window.__ioviewer.measure.points.length, distance: window.__ioviewer.measure.distance }));
  expect(measured.count).toBe(2);
  expect(Math.abs(measured.distance - Math.hypot(wx - slabPoint[0], wy - slabPoint[1], wz - slabPoint[2]))).toBeLessThan(0.05);
  expect(await selected(page)).toEqual([]);
  expect(errors).toEqual([]);
});

test('highlighting a selection does not recompute the visible bounds', async ({ page }) => {
  await open(page);
  await page.evaluate(() => {
    const { scene } = window.__ioviewer;
    window.__boxCalls = 0;
    const original = scene.visibleBox.bind(scene);
    scene.visibleBox = () => (window.__boxCalls++, original());
  });
  await page.mouse.click(...(await screenAt(page, await indexOf(page, 'Column D2 Level 1'))));
  await page.keyboard.press('Escape');
  await frame(page);
  expect(await page.evaluate(() => window.__boxCalls)).toBe(0);
});
