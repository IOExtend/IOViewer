import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

async function open(page, name = 'building') {
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  return errors;
}

const frame = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const indexOf = (page, name) =>
  page.evaluate((n) => JSON.parse(document.getElementById('ioviewer-meta').textContent).elements.findIndex((e) => e.name === n), name);
const selected = (page) => page.evaluate(() => [...window.__ioviewer.selection.values()]);
const tool = (page, id) => page.locator(`.ioviewer-tool[data-tool="${id}"]`);
const panel = (page) => page.locator('.ioviewer-side-panel[data-panel="sections"]');
const BACKGROUND = [31, 34, 40]; // #1f2228

// Client position of a point given as fractions of the element's box (0.5 = centre).
const screenAt = (page, index, f = [0.5, 0.5, 0.5]) =>
  page.evaluate(([i, f]) => {
    const { scene, camera } = window.__ioviewer;
    camera.updateMatrixWorld();
    const { min, max } = scene.elementBox(i);
    const p = min.clone().set(...[0, 1, 2].map((k) => min.getComponent(k) + (max.getComponent(k) - min.getComponent(k)) * f[k]));
    p.project(camera);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [rect.left + ((p.x + 1) / 2) * rect.width, rect.top + ((1 - p.y) / 2) * rect.height];
  }, [index, f]);

// Mean [r, g, b] of the 3x3 screen pixels around a point; the PNG is decoded by the page itself.
async function rgb(page, [x, y]) {
  const png = await page.screenshot({ clip: { x: Math.round(x) - 1, y: Math.round(y) - 1, width: 3, height: 3 } });
  return page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const context = document.createElement('canvas').getContext('2d');
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, image.width, image.height);
    const sum = [0, 0, 0];
    for (let i = 0; i < data.length; i += 4) for (let c = 0; c < 3; c++) sum[c] += data[i + c];
    return sum.map((s) => s / (data.length / 4));
  }, png.toString('base64'));
}
const distance = (a, b) => a.reduce((sum, c, i) => sum + Math.abs(c - b[i]), 0);
// The pixel now shows (nearly) the background where it showed the model: at most a quarter of the old difference
// is left, which allows for the translucent plane rectangle lying in front of it.
const cleared = (now, before) => distance(now, BACKGROUND) < 0.25 * distance(before, BACKGROUND);
const pickAt = (page, [x, y]) => page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element ?? null, [x, y]);
const pose = (page) =>
  page.evaluate(() => {
    const { camera, controls } = window.__ioviewer;
    return [...camera.position.toArray(), ...controls.target.toArray()];
  });

// Client position of a point in the plane gizmo's own frame (Z = normal, unit = arrow length).
const gizmoAt = (page, local) =>
  page.evaluate((local) => {
    const { sectionGizmo, camera } = window.__ioviewer;
    camera.updateMatrixWorld();
    const g = sectionGizmo.planeGizmo;
    g.updateMatrixWorld(true);
    const p = g.localToWorld(g.position.clone().set(...local)).project(camera);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [rect.left + ((p.x + 1) / 2) * rect.width, rect.top + ((1 - p.y) / 2) * rect.height];
  }, local);

async function drag(page, from, to, steps = 8) {
  await page.mouse.move(...from);
  await page.mouse.down();
  for (let k = 1; k <= steps; k++) await page.mouse.move(from[0] + ((to[0] - from[0]) * k) / steps, from[1] + ((to[1] - from[1]) * k) / steps);
  await page.mouse.up();
}

test('a Z plane through the middle cuts the roof away; flipping it brings the roof back and cuts the ground slab; reset restores', async ({ page }) => {
  const errors = await open(page);
  await page.evaluate(() => window.__ioviewer.grids.setVisible(false)); // axis 2 runs across the sampled slab rim
  const roof = await indexOf(page, 'Roof Slab');
  const ground = await indexOf(page, 'Ground Slab');
  // Roof top near its back edge (seen past the roof there is only background) and the ground slab rim right of the
  // floors above it (nothing below it).
  const roofAt = await screenAt(page, roof, [0.5, 0.95, 1]);
  const groundAt = await screenAt(page, ground, [0.985, 0.5, 1]);
  const roofBefore = await rgb(page, roofAt);
  const groundBefore = await rgb(page, groundAt);
  expect(await pickAt(page, roofAt)).toBe(roof);
  expect(await pickAt(page, groundAt)).toBe(ground);
  expect(distance(roofBefore, BACKGROUND)).toBeGreaterThan(60);
  expect(distance(groundBefore, BACKGROUND)).toBeGreaterThan(60);

  await tool(page, 'plane').click();
  await expect(panel(page)).toBeVisible();
  await expect(tool(page, 'plane')).toHaveClass(/active/);
  const state = await page.evaluate(() => {
    const { sections, scene } = window.__ioviewer;
    const box = scene.visibleBox();
    return { mode: sections.mode, axis: sections.planes[0].axis, z: sections.origin(0).z, mid: (box.min.z + box.max.z) / 2 };
  });
  expect(state).toMatchObject({ mode: 'planes', axis: 'z' });
  expect(state.z).toBeCloseTo(state.mid, 9);
  await page.evaluate(() => window.__ioviewer.sections.setGizmoVisible(false)); // keep the handles off the sampled pixels
  await frame(page);
  expect(cleared(await rgb(page, roofAt), roofBefore)).toBe(true);
  expect(await pickAt(page, roofAt)).not.toBe(roof);
  expect(cleared(await rgb(page, groundAt), groundBefore)).toBe(false);
  expect(await pickAt(page, groundAt)).toBe(ground);

  await panel(page).getByRole('button', { name: 'Сменить сторону' }).click();
  await frame(page);
  expect(await rgb(page, roofAt)).toEqual(roofBefore); // the roof is in front of the plane rectangle
  expect(await pickAt(page, roofAt)).toBe(roof);
  expect(cleared(await rgb(page, groundAt), groundBefore)).toBe(true);
  expect(await pickAt(page, groundAt)).not.toBe(ground);

  await tool(page, 'resetSections').click();
  await frame(page);
  expect(await rgb(page, roofAt)).toEqual(roofBefore);
  expect(await rgb(page, groundAt)).toEqual(groundBefore);
  expect(await page.evaluate(() => [window.__ioviewer.sections.mode, window.__ioviewer.sections.planes.length])).toEqual(['off', 0]);
  await expect(tool(page, 'plane')).not.toHaveClass(/active/);
  expect(errors).toEqual([]);
});

test('box around the selected column: keepInside shows only the column, cutInside hides only it, reset brings all back', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d1 = await indexOf(page, 'Column D1 Level 1');
  const roof = await indexOf(page, 'Roof Slab');
  const d2At = await screenAt(page, d2);
  const d1At = await screenAt(page, d1);
  const roofAt = await screenAt(page, roof, [0.5, 0.95, 1]);
  const before = { d2: await rgb(page, d2At), d1: await rgb(page, d1At), roof: await rgb(page, roofAt) };

  await page.mouse.click(...d2At);
  expect(await selected(page)).toEqual([d2]);
  await tool(page, 'box').click();
  await expect(panel(page)).toBeVisible();
  await expect(tool(page, 'box')).toHaveClass(/active/);
  // The column's box plus 5 % of its largest dimension (its height) on every side.
  const fit = await page.evaluate((i) => {
    const { sections, scene } = window.__ioviewer;
    const column = scene.elementBox(i);
    const margin = 0.05 * (column.max.z - column.min.z);
    return { mode: sections.mode, boxMode: sections.boxMode, expected: [...column.min.toArray().map((c) => c - margin), ...column.max.toArray().map((c) => c + margin)], box: [...sections.box.min.toArray(), ...sections.box.max.toArray()] };
  }, d2);
  expect(fit.mode).toBe('box');
  expect(fit.boxMode).toBe('keepInside');
  fit.box.forEach((c, k) => expect(c).toBeCloseTo(fit.expected[k], 5));
  await page.evaluate(() => window.__ioviewer.sections.setGizmoVisible(false));
  await frame(page);
  expect(await pickAt(page, d2At)).toBe(d2);
  expect(cleared(await rgb(page, d1At), before.d1)).toBe(true);
  expect(cleared(await rgb(page, roofAt), before.roof)).toBe(true);
  expect(await pickAt(page, d1At)).toBe(null);

  await panel(page).getByRole('button', { name: 'Вырезать внутри' }).click();
  await frame(page);
  expect(await page.evaluate(() => window.__ioviewer.sections.boxMode)).toBe('cutInside');
  expect(await pickAt(page, d2At)).not.toBe(d2);
  expect(await rgb(page, d2At)).not.toEqual(before.d2);
  expect(await rgb(page, d1At)).toEqual(before.d1);
  expect(await rgb(page, roofAt)).toEqual(before.roof);
  expect(await pickAt(page, d1At)).toBe(d1);

  await tool(page, 'resetSections').click();
  await page.keyboard.press('Escape'); // clear the selection, so the highlight does not tint the column
  await frame(page);
  expect(await rgb(page, d2At)).toEqual(before.d2);
  expect(await rgb(page, d1At)).toEqual(before.d1);
  expect(await rgb(page, roofAt)).toEqual(before.roof);
  await expect(tool(page, 'box')).not.toHaveClass(/active/);
  expect(errors).toEqual([]);
});

test('a click through the plane rectangle selects the element behind it; the rectangle is never picked', async ({ page }) => {
  const errors = await open(page);
  const d1 = await indexOf(page, 'Column D1 Level 1');
  const at = await screenAt(page, d1);
  await tool(page, 'plane').click();
  await frame(page);
  // The rectangle at mid height lies between the camera and the lower column here.
  const covered = await page.evaluate(([x, y]) => {
    const { sectionGizmo, camera } = window.__ioviewer;
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    const ndc = { x: ((x - rect.left) / rect.width) * 2 - 1, y: 1 - ((y - rect.top) / rect.height) * 2 };
    const ray = new sectionGizmo._raycaster.constructor();
    ray.setFromCamera(ndc, camera);
    return ray.intersectObject(sectionGizmo.planeVisuals[0], true).length > 0;
  }, at);
  expect(covered).toBe(true);
  await page.mouse.click(...at);
  expect(await selected(page)).toEqual([d1]);
  expect(errors).toEqual([]);
});

test('dragging the gizmo arrow moves the plane along its normal and the rings turn it, without moving the camera', async ({ page }) => {
  const errors = await open(page);
  await tool(page, 'plane').click();
  await frame(page);
  await page.evaluate(() => {
    const seen = [];
    for (const type of ['click', 'boxselect', 'contextmenu']) window.__ioviewer.controls.addEventListener(type, () => seen.push(type));
    window.__seen = seen;
  });
  const start = await pose(page);
  const offset = () => page.evaluate(() => window.__ioviewer.sections.planes[0].offset);

  // Press on the arrow shaft and pull it up the screen along its own direction.
  const shaft = await gizmoAt(page, [0, 0, 0.6]);
  const tip = await gizmoAt(page, [0, 0, 1]);
  await page.mouse.move(...shaft);
  await frame(page);
  expect(await page.evaluate(() => window.__ioviewer.sectionGizmo._hovered?.name)).toBe('arrow');
  await drag(page, shaft, [shaft[0] + (tip[0] - shaft[0]) * 2, shaft[1] + (tip[1] - shaft[1]) * 2]);
  const moved = await offset();
  expect(moved).toBeGreaterThan(0.5);
  expect(await pose(page)).toEqual(start);
  expect(await page.evaluate(() => window.__ioviewer.sections.planes[0].rotated)).toBe(false);

  // Red ring (about the plane's X, lying in its YZ plane): press on a part of it that the green ring does not cover
  // on screen and pull it 40 degrees round.
  const ringPoint = (angle) => gizmoAt(page, [0, 0.8 * Math.cos(angle), 0.8 * Math.sin(angle)]);
  const hovered = () => page.evaluate(() => window.__ioviewer.sectionGizmo._hovered?.name);
  let from = null;
  for (let k = 0; k < 12 && from === null; k++) {
    await page.mouse.move(...(await ringPoint((k * Math.PI) / 6)));
    if ((await hovered()) === 'ringX') from = (k * Math.PI) / 6;
  }
  expect(from).not.toBe(null);
  const a = (40 * Math.PI) / 180;
  await drag(page, await ringPoint(from), await ringPoint(from + a), 12);
  const turned = await page.evaluate(() => {
    const { sections } = window.__ioviewer;
    return { rotated: sections.planes[0].rotated, nz: sections.normal(0).z, nx: sections.normal(0).x };
  });
  expect(turned.rotated).toBe(true);
  expect(turned.nz).toBeCloseTo(Math.cos(a), 1);
  expect(Math.abs(turned.nx)).toBeLessThan(1e-9);
  await expect(panel(page).locator('.ioviewer-section-name')).toHaveText('1. Z (повёрнута)');
  expect(await pose(page)).toEqual(start);
  expect(await selected(page)).toEqual([]);
  expect(await page.evaluate(() => window.__seen)).toEqual([]);

  // Hidden gizmo: the same press orbits the camera instead.
  await page.getByLabel('Показывать манипулятор').uncheck();
  expect(await page.evaluate(() => window.__ioviewer.sectionGizmo.planeGizmo.visible)).toBe(false);
  await drag(page, [640, 300], [700, 330]);
  expect(await pose(page)).not.toEqual(start);
  expect(errors).toEqual([]);
});

test('box select skips elements the section cuts away entirely', async ({ page }) => {
  const errors = await open(page);
  const names = ['Roof Slab', 'Column D2 Level 2', 'Column D2 Level 1', 'Floor Slab Level 2'];
  const [roof, upper, lower, slab2] = await Promise.all(names.map((n) => indexOf(page, n)));
  await tool(page, 'plane').click();
  await page.evaluate(() => window.__ioviewer.sections.setGizmoVisible(false));
  // Crossing box (right to left) over the whole canvas between the UI parts.
  await page.keyboard.down('Shift');
  await page.mouse.move(1180, 690);
  await page.mouse.down();
  await page.mouse.move(600, 400);
  await page.mouse.move(380, 160);
  await page.mouse.up();
  await page.keyboard.up('Shift');
  const found = await selected(page);
  expect(found).toContain(lower);
  expect(found).toContain(slab2); // crosses the plane: partly shown
  expect(found).not.toContain(roof);
  expect(found).not.toContain(upper);
  expect(errors).toEqual([]);
});

test('panel: axis choice, add up to six planes, flip, on/off, position, delete; modes are exclusive', async ({ page }) => {
  const errors = await open(page);
  await page.locator('.ioviewer-rail-button[data-panel="sections"]').click();
  const p = panel(page);
  await expect(p.locator('h2')).toHaveText('Сечения');
  await expect(p.getByRole('group', { name: 'Режим сечения' }).locator('button')).toHaveText(['Плоскости', 'Бокс', 'Выкл']);
  await p.getByRole('button', { name: 'Плоскости' }).click();
  await expect(p.locator('.ioviewer-section-empty')).toHaveText('Плоскостей нет');

  await p.getByRole('button', { name: 'X', exact: true }).click();
  await p.getByRole('button', { name: 'Добавить плоскость' }).click();
  await expect(p.locator('.ioviewer-section-name')).toHaveText(['1. X']);
  const clip = () => page.evaluate(() => window.__ioviewer.scene._buckets[0].material.clippingPlanes?.map((pl) => [...pl.normal.toArray(), pl.constant]) ?? []);
  const normals = async () => (await clip()).map((pl) => pl.slice(0, 3).map((c) => Math.round(c * 1e9) / 1e9 + 0));
  expect(await normals()).toEqual([[-1, 0, 0]]);

  const row = p.locator('.ioviewer-section-plane').first();
  await row.getByRole('button', { name: 'Сменить сторону' }).click();
  expect(await normals()).toEqual([[1, 0, 0]]);
  await row.getByLabel('Положение плоскости').fill('2');
  expect(await page.evaluate(() => window.__ioviewer.sections.origin(0).x - window.__ioviewer.sections.center.x)).toBeCloseTo(2, 9);
  await row.getByLabel('Вкл').uncheck();
  expect(await clip()).toEqual([]);
  await row.getByLabel('Вкл').check();
  expect((await clip()).length).toBe(1);

  for (let k = 0; k < 5; k++) await p.getByRole('button', { name: 'Добавить плоскость' }).click();
  await expect(p.locator('.ioviewer-section-plane')).toHaveCount(6);
  await expect(p.getByRole('button', { name: 'Добавить плоскость' })).toBeDisabled();
  await tool(page, 'plane').click();
  await expect(page.locator('.ioviewer-toast')).toHaveText('Не больше 6 плоскостей');
  expect((await clip()).length).toBe(6);
  await p.locator('.ioviewer-section-plane').nth(2).getByRole('button', { name: 'Удалить плоскость' }).click();
  await expect(p.locator('.ioviewer-section-plane')).toHaveCount(5);
  await expect(p.getByRole('button', { name: 'Добавить плоскость' })).toBeEnabled();

  // Box and planes exclude each other; off keeps the planes for later.
  await p.getByRole('button', { name: 'Бокс', exact: true }).click();
  expect((await clip()).length).toBe(6);
  await expect(tool(page, 'box')).toHaveClass(/active/);
  await expect(tool(page, 'plane')).not.toHaveClass(/active/);
  await expect(p.getByRole('button', { name: 'Показать внутри' })).toHaveAttribute('aria-pressed', 'true');
  await expect(p.getByRole('button', { name: 'По выделенному' })).toBeDisabled();
  await p.getByRole('button', { name: 'Выкл' }).click();
  expect(await clip()).toEqual([]);
  await p.getByRole('button', { name: 'Плоскости' }).click();
  expect((await clip()).length).toBe(5);
  expect(errors).toEqual([]);
});

test('context menu: section box around the right-clicked column, reset from the empty menu', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)), { button: 'right' });
  await page.locator('.ioviewer-menu-item', { hasText: 'Бокс сечения по объекту' }).click();
  const box = await page.evaluate((i) => {
    const { sections, scene } = window.__ioviewer;
    return { mode: sections.mode, inside: sections.box.containsBox(scene.elementBox(i)) };
  }, d2);
  expect(box).toEqual({ mode: 'box', inside: true });
  await expect(panel(page)).toBeVisible();

  await page.mouse.click(900, 60, { button: 'right' }); // background
  await page.locator('.ioviewer-menu-item', { hasText: 'Сбросить сечения' }).click();
  expect(await page.evaluate(() => window.__ioviewer.sections.mode)).toBe('off');
  expect(errors).toEqual([]);
});

test('a document without geometry offers no sections', async ({ page }) => {
  const errors = await open(page, 'empty');
  await expect(page.locator('.ioviewer-rail-button[data-panel="sections"]')).toBeHidden();
  for (const id of ['plane', 'box', 'resetSections']) await expect(tool(page, id)).toHaveAttribute('aria-disabled', 'true');
  expect(errors).toEqual([]);
});

// Client position of a world point, and of a box handle (by name: face+z, face-x, centre, ...).
const worldAt = (page, p) =>
  page.evaluate((p) => {
    const { camera, sections } = window.__ioviewer;
    camera.updateMatrixWorld();
    const q = sections.center.clone().set(...p).project(camera);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [rect.left + ((q.x + 1) / 2) * rect.width, rect.top + ((1 - q.y) / 2) * rect.height];
  }, p);
const handle = (page, name) => page.evaluate((n) => window.__ioviewer.sectionGizmo.group.getObjectByName(n).position.toArray(), name);
const boxNow = (page) => page.evaluate(() => [...window.__ioviewer.sections.box.min.toArray(), ...window.__ioviewer.sections.box.max.toArray()]);
// Drags a handle `px` pixels along the screen image of the world direction `dir` from it.
async function dragAlong(page, name, dir, px = 40) {
  const at = await handle(page, name);
  const from = await worldAt(page, at);
  const ahead = await worldAt(page, at.map((c, k) => c + dir[k]));
  const len = Math.hypot(ahead[0] - from[0], ahead[1] - from[1]);
  await drag(page, from, [from[0] + ((ahead[0] - from[0]) / len) * px, from[1] + ((ahead[1] - from[1]) / len) * px]);
}
const size = (b) => [b[3] - b[0], b[4] - b[1], b[5] - b[2]];
const centre = (b) => [(b[0] + b[3]) / 2, (b[1] + b[4]) / 2, (b[2] + b[5]) / 2];
const cubePoint = (page, p) =>
  page.evaluate((p) => {
    const { viewCube } = window.__ioviewer;
    const v = viewCube.camera.position.clone().set(...p).project(viewCube.camera);
    const r = viewCube.canvas.getBoundingClientRect();
    return [r.left + ((v.x + 1) / 2) * r.width, r.top + ((1 - v.y) / 2) * r.height];
  }, p);
async function settle(page) {
  await expect.poll(() => page.evaluate(() => window.__ioviewer.controls.animating), { timeout: 3000 }).toBe(false);
  await frame(page);
}

test('box handles: the +Z and -X faces move only their side, the centre moves the whole box; the camera stays', async ({ page }) => {
  const errors = await open(page);
  await tool(page, 'box').click(); // nothing selected: the box of the shown model
  await frame(page);
  const start = await pose(page);

  const b0 = await boxNow(page);
  await dragAlong(page, 'face+z', [0, 0, 1]);
  const b1 = await boxNow(page);
  expect(b1[5]).toBeGreaterThan(b0[5] + 0.5);
  expect(b1.slice(0, 5)).toEqual(b0.slice(0, 5));

  await dragAlong(page, 'face-x', [-1, 0, 0]);
  await frame(page);
  const b2 = await boxNow(page);
  expect(b2[0]).toBeLessThan(b1[0] - 0.5);
  expect(b2.slice(1)).toEqual(b1.slice(1));

  const from = await worldAt(page, await handle(page, 'centre'));
  await drag(page, from, [from[0] + 60, from[1] + 30]);
  const b3 = await boxNow(page);
  size(b3).forEach((c, k) => expect(c).toBeCloseTo(size(b2)[k], 9));
  expect(Math.hypot(...centre(b3).map((c, k) => c - centre(b2)[k]))).toBeGreaterThan(0.5);
  expect(await pose(page)).toEqual(start);
  expect(await selected(page)).toEqual([]);
  expect(errors).toEqual([]);
});

test('Top view: the faces along the line of sight hide, so a press on the box centre moves the box', async ({ page }) => {
  const errors = await open(page);
  await tool(page, 'box').click();
  await page.mouse.click(...(await cubePoint(page, [0, 0, 1]))); // «Сверху»
  await settle(page);
  const shown = (name) => page.evaluate((n) => window.__ioviewer.sectionGizmo.group.getObjectByName(n).visible, name);
  expect([await shown('face+z'), await shown('face-z'), await shown('centre'), await shown('face+x')]).toEqual([false, false, true, true]);
  const start = await pose(page);
  const b0 = await boxNow(page);
  const from = await worldAt(page, await handle(page, 'centre'));
  await drag(page, from, [from[0] + 50, from[1] + 40]);
  const b1 = await boxNow(page);
  size(b1).forEach((c, k) => expect(c).toBeCloseTo(size(b0)[k], 9));
  const moved = centre(b1).map((c, k) => c - centre(b0)[k]);
  expect(Math.hypot(moved[0], moved[1])).toBeGreaterThan(0.5);
  expect(Math.abs(moved[2])).toBeLessThan(0.05); // the drag plane faces the camera: almost horizontal
  expect(await pose(page)).toEqual(start);
  expect(errors).toEqual([]);
});

test('orthographic: dragging the gizmo arrow moves the plane and not the camera', async ({ page }) => {
  const errors = await open(page);
  await tool(page, 'projection').click();
  expect(await page.evaluate(() => window.__ioviewer.camera.isOrthographicCamera)).toBe(true);
  await tool(page, 'plane').click();
  await frame(page);
  const start = await pose(page);
  const shaft = await gizmoAt(page, [0, 0, 0.6]);
  const tip = await gizmoAt(page, [0, 0, 1]);
  await drag(page, shaft, [shaft[0] + (tip[0] - shaft[0]) * 2, shaft[1] + (tip[1] - shaft[1]) * 2]);
  expect(await page.evaluate(() => window.__ioviewer.sections.planes[0].offset)).toBeGreaterThan(0.5);
  expect(await pose(page)).toEqual(start);
  expect(errors).toEqual([]);
});
