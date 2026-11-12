import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

const SCREENSHOT = path.resolve(viewerDir, '../../../.superpowers/sdd/2026-11-11-viewer-redesign-plan/task-10-screenshot.png');

async function open(page, name = 'building') {
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  return errors;
}

const frame = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const tool = (page, id) => page.locator(`.ioviewer-tool[data-tool="${id}"]`);
const indexOf = (page, name) =>
  page.evaluate((n) => JSON.parse(document.getElementById('ioviewer-meta').textContent).elements.findIndex((e) => e.name === n), name);
const selected = (page) => page.evaluate(() => [...window.__ioviewer.selection.values()]);
const modeItem = (page, mode) => page.locator(`.ioviewer-display-modes [data-mode="${mode}"]`);
// The middle of the canvas, clear of the panels and the toolbar.
const VIEW = { x: 340, y: 160, width: 600, height: 420 };
const shot = async (page) => {
  await frame(page);
  return page.screenshot({ clip: VIEW });
};

// Client position of a world point (META coordinates are RTC: world minus rtcOffset).
const screenOfWorld = (page, world) =>
  page.evaluate((world) => {
    const { camera } = window.__ioviewer;
    const rtc = JSON.parse(document.getElementById('ioviewer-meta').textContent).rtcOffset;
    camera.updateMatrixWorld();
    const p = camera.position.clone().set(...world.map((c, i) => c - rtc[i])).project(camera);
    const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [rect.left + ((p.x + 1) / 2) * rect.width, rect.top + ((1 - p.y) / 2) * rect.height];
  }, world);

// Two points on the ground slab top (z = 0) in front of the curtain wall, 6 m apart along X.
const A = [2, -0.9, 0];
const B = [8, -0.9, 0];

test('distance: two clicks on the slab top 6 m apart measure 6.00 m; the selection stays; Esc and turning off clear', async ({ page }) => {
  const errors = await open(page);
  const column = await indexOf(page, 'Column D2 Level 1');
  await page.evaluate((i) => window.__ioviewer.selection.set([i]), column);
  const slab = await indexOf(page, 'Ground Slab');
  const [a, b] = [await screenOfWorld(page, A), await screenOfWorld(page, B)];
  expect(await page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element, a)).toBe(slab);
  expect(await page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element, b)).toBe(slab);

  await tool(page, 'distance').click();
  await expect(tool(page, 'distance')).toHaveClass(/active/);
  await page.mouse.click(640, 40); // empty space: no point, selection kept
  expect(await page.evaluate(() => window.__ioviewer.measure.points.length)).toBe(0);
  await page.mouse.click(...a);
  await expect(page.locator('.ioviewer-measure-label')).toBeHidden(); // one point: no distance yet
  await page.mouse.click(...b);
  const distance = await page.evaluate(() => window.__ioviewer.measure.distance);
  expect(Math.abs(distance - 6)).toBeLessThanOrEqual(0.05);
  await expect(page.locator('.ioviewer-measure-label')).toBeVisible();
  await expect(page.locator('.ioviewer-measure-label')).toHaveText(/^\d+,\d\d м$/);
  expect(Number((await page.locator('.ioviewer-measure-label').textContent()).replace(',', '.').split(' ')[0])).toBeCloseTo(distance, 2);
  expect(await selected(page)).toEqual([column]);

  // The label sits at the projected midpoint.
  await frame(page);
  const label = await page.locator('.ioviewer-measure-label').boundingBox();
  expect(Math.abs(label.x + label.width / 2 - (a[0] + b[0]) / 2)).toBeLessThan(2);
  expect(Math.abs(label.y + label.height / 2 - (a[1] + b[1]) / 2)).toBeLessThan(2);

  // A drag still orbits and does not place a point.
  const before = await page.evaluate(() => window.__ioviewer.camera.position.toArray());
  await page.mouse.move(700, 300);
  await page.mouse.down();
  await page.mouse.move(760, 320, { steps: 4 });
  await page.mouse.up();
  expect(await page.evaluate(() => window.__ioviewer.camera.position.toArray())).not.toEqual(before);
  expect(await page.evaluate(() => window.__ioviewer.measure.points.length)).toBe(2);

  await page.keyboard.press('Escape'); // clears the measurement, keeps the selection
  await expect(page.locator('.ioviewer-measure-label')).toBeHidden();
  expect(await page.evaluate(() => window.__ioviewer.measure.points.length)).toBe(0);
  expect(await selected(page)).toEqual([column]);

  await page.evaluate(() => window.__ioviewer.controls.fitBox(window.__ioviewer.scene.visibleBox(), false));
  const [a2, b2] = [await screenOfWorld(page, A), await screenOfWorld(page, B)];
  await page.mouse.click(...a2);
  await page.mouse.click(...b2);
  await expect(page.locator('.ioviewer-measure-label')).toBeVisible();
  await tool(page, 'distance').click(); // off: the measurement goes, clicks select again
  await expect(tool(page, 'distance')).not.toHaveClass(/active/);
  await expect(page.locator('.ioviewer-measure-label')).toBeHidden();
  await page.mouse.click(...a2);
  expect(await selected(page)).toEqual([slab]);
  expect(errors).toEqual([]);
});

test('display mode menu: materials checked, textures disabled without textures, each mode changes the picture', async ({ page }) => {
  const errors = await open(page);
  await tool(page, 'displayMode').click();
  await expect(page.locator('.ioviewer-display-modes')).toBeVisible();
  await expect(page.locator('.ioviewer-display-modes .ioviewer-menu-item')).toHaveText(['Материалы', 'Текстуры', 'Белый', 'Каркас']);
  await expect(modeItem(page, 'materials')).toHaveAttribute('aria-checked', 'true');
  await expect(modeItem(page, 'textures')).toBeDisabled();

  const pictures = { materials: await shot(page) };
  for (const mode of ['white', 'wireframe']) {
    if (!(await page.locator('.ioviewer-display-modes').isVisible())) await tool(page, 'displayMode').click();
    await modeItem(page, mode).click();
    await expect(page.locator('.ioviewer-display-modes')).toBeHidden(); // a choice closes the menu
    pictures[mode] = await shot(page);
  }
  expect(pictures.white.equals(pictures.materials)).toBe(false);
  expect(pictures.wireframe.equals(pictures.materials)).toBe(false);
  expect(pictures.wireframe.equals(pictures.white)).toBe(false);
  await tool(page, 'displayMode').click();
  await expect(modeItem(page, 'wireframe')).toHaveAttribute('aria-checked', 'true');
  await expect(modeItem(page, 'materials')).toHaveAttribute('aria-checked', 'false');
  await modeItem(page, 'materials').click();
  expect((await shot(page)).equals(pictures.materials)).toBe(true);
  expect(errors).toEqual([]);
});

test('initialWhiteMode from the export options opens in white', async ({ page }) => {
  const errors = await open(page, 'building-white');
  const white = await shot(page);
  await tool(page, 'displayMode').click();
  await expect(modeItem(page, 'white')).toHaveAttribute('aria-checked', 'true');
  await modeItem(page, 'materials').click();
  const materials = await shot(page);
  expect(materials.equals(white)).toBe(false);
  await tool(page, 'displayMode').click();
  await modeItem(page, 'white').click();
  expect((await shot(page)).equals(white)).toBe(true);
  expect(errors).toEqual([]);
});

test('grid axes: lines and labels shown from the start, the toggle hides and shows the labels; grids are not pickable', async ({ page }) => {
  const errors = await open(page);
  const labels = page.locator('.ioviewer-grid-label');
  await expect(tool(page, 'grids')).toHaveClass(/active/);
  await expect(labels).toHaveCount(14); // 7 axes, a label at both ends
  expect(new Set(await labels.allTextContents())).toEqual(new Set(['A', 'B', 'C', 'D', '1', '2', '3']));
  await expect(labels.filter({ visible: true })).not.toHaveCount(0);
  // The label of axis A at its south end sits on the projected end of the line.
  await frame(page);
  const end = await screenOfWorld(page, [0, -2, 0]);
  const box = await labels.first().boundingBox();
  expect(Math.abs(box.x + box.width / 2 - end[0])).toBeLessThan(2);
  expect(Math.abs(box.y + box.height / 2 - end[1])).toBeLessThan(2);
  expect(await page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y), end)).toBeNull();

  // Labels hidden in the shots: they are compared elsewhere and their text antialiasing may vary by a level.
  const lines = async () => {
    const style = await page.addStyleTag({ content: '.ioviewer-grid-labels { visibility: hidden; }' });
    const picture = await shot(page);
    await style.evaluate((node) => node.remove());
    return picture;
  };
  const withGrids = await lines();
  await tool(page, 'grids').click();
  await expect(tool(page, 'grids')).not.toHaveClass(/active/);
  await expect(labels.filter({ visible: true })).toHaveCount(0);
  expect((await lines()).equals(withGrids)).toBe(false); // the lines went too
  await tool(page, 'grids').click();
  await expect(tool(page, 'grids')).toHaveClass(/active/);
  await expect(labels.filter({ visible: true })).not.toHaveCount(0);
  expect((await lines()).equals(withGrids)).toBe(true);
  expect(errors).toEqual([]);
});

test('grids button is off for a model without grids', async ({ page }) => {
  await open(page, 'empty');
  await expect(tool(page, 'grids')).toHaveAttribute('aria-disabled', 'true');
  await expect(page.locator('.ioviewer-grid-label')).toHaveCount(0);
});

test('opacity slider 10-100 % changes the picture; the popover closes on Esc and on an outside press that changes nothing', async ({ page }) => {
  const errors = await open(page);
  const column = await indexOf(page, 'Column D2 Level 1');
  await page.evaluate((i) => window.__ioviewer.selection.set([i]), column);
  const opaque = await shot(page);
  await tool(page, 'opacity').click();
  const slider = page.locator('.ioviewer-opacity-slider');
  await expect(slider).toHaveAttribute('min', '10');
  await expect(slider).toHaveAttribute('max', '100');
  await expect(page.locator('.ioviewer-opacity-value')).toHaveText('100 %');
  await slider.fill('40');
  await expect(page.locator('.ioviewer-opacity-value')).toHaveText('40 %');
  expect((await shot(page)).equals(opaque)).toBe(false);
  await page.keyboard.press('Escape'); // focus is on the slider
  await expect(page.locator('.ioviewer-opacity')).toBeHidden();
  expect(await selected(page)).toEqual([column]);

  await tool(page, 'opacity').click();
  await slider.fill('100');
  expect((await shot(page)).equals(opaque)).toBe(true);
  await page.mouse.click(640, 40); // outside, over empty space: closes, selection kept
  await expect(page.locator('.ioviewer-opacity')).toBeHidden();
  expect(await selected(page)).toEqual([column]);

  await tool(page, 'displayMode').click();
  await tool(page, 'displayMode').click(); // its own button closes it
  await expect(page.locator('.ioviewer-display-modes')).toBeHidden();
  await tool(page, 'displayMode').click();
  await page.keyboard.press('Escape'); // Esc closes the menu and keeps the selection
  await expect(page.locator('.ioviewer-display-modes')).toBeHidden();
  expect(await selected(page)).toEqual([column]);
  expect(errors).toEqual([]);
});

// Largest per-pixel difference from the background in a 5x5 patch around a point (catches a 1 px line).
async function maxFromBackground(page, [x, y]) {
  const png = await page.screenshot({ clip: { x: Math.round(x) - 2, y: Math.round(y) - 2, width: 5, height: 5 } });
  return page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const context = document.createElement('canvas').getContext('2d');
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, image.width, image.height);
    let max = 0;
    for (let i = 0; i < data.length; i += 4) max = Math.max(max, Math.abs(data[i] - 31) + Math.abs(data[i + 1] - 34) + Math.abs(data[i + 2] - 40));
    return max;
  }, png.toString('base64'));
}

test('grid axes and a measurement stay drawn after Isolate and Hide shrink what is shown', async ({ page }) => {
  const errors = await open(page);
  const labels = page.locator('.ioviewer-grid-labels .ioviewer-grid-label');
  await tool(page, 'distance').click();
  await page.mouse.click(...(await screenOfWorld(page, A)));
  await page.mouse.click(...(await screenOfWorld(page, B)));
  const onAxisA = [0, 13, 0]; // axis A, far behind and left of the column, away from its labels
  expect(await maxFromBackground(page, await screenOfWorld(page, onAxisA))).toBeGreaterThan(60);
  await expect(labels.filter({ visible: true })).toHaveCount(14);

  const column = await indexOf(page, 'Column D2 Level 1');
  await page.evaluate((i) => window.__ioviewer.selection.set([i]), column);
  await page.keyboard.press('i');
  await frame(page);
  expect(await page.evaluate(() => window.__ioviewer.scene.visibleBox().max.x - window.__ioviewer.scene.visibleBox().min.x)).toBeLessThan(1);
  await expect(labels.filter({ visible: true })).toHaveCount(14);
  expect(await maxFromBackground(page, await screenOfWorld(page, onAxisA))).toBeGreaterThan(60);
  await expect(page.locator('.ioviewer-measure-label')).toBeVisible();
  const onLine = await screenOfWorld(page, [2.8, -0.9, 0]); // the measure line, clear of its label, over nothing now
  expect(await maxFromBackground(page, onLine)).toBeGreaterThan(60);

  // Show all, then hide everything but the two twin columns in front of the building.
  await page.keyboard.press('Shift+H');
  const twins = await Promise.all(['Column Twin', 'Column Twin Mirrored'].map((n) => indexOf(page, n)));
  await page.evaluate((keep) => {
    const { selection, scene } = window.__ioviewer;
    selection.set([...Array(scene.elementCount).keys()].filter((i) => !keep.includes(i)));
  }, twins);
  await page.keyboard.press('h');
  await page.evaluate(() => window.__ioviewer.selection.clear());
  await frame(page);
  // Shown now: the twins, in front of the building; the survey marker is an element and is hidden with the rest.
  const shown = await page.evaluate(() => {
    const { scene } = window.__ioviewer;
    return [...Array(scene.elementCount).keys()].filter((i) => scene.isVisible(i));
  });
  expect(shown).toEqual(twins);
  await expect(labels.filter({ visible: true })).toHaveCount(14);
  expect(await maxFromBackground(page, await screenOfWorld(page, onAxisA))).toBeGreaterThan(60);
  expect(errors).toEqual([]);
});

test('Esc on a focused display-mode item closes only the menu: selection and measurement stay', async ({ page }) => {
  const errors = await open(page);
  const column = await indexOf(page, 'Column D2 Level 1');
  await page.evaluate((i) => window.__ioviewer.selection.set([i]), column);
  await tool(page, 'distance').click();
  await page.mouse.click(...(await screenOfWorld(page, A)));
  await page.mouse.click(...(await screenOfWorld(page, B)));
  await tool(page, 'displayMode').click();
  await modeItem(page, 'white').focus();
  await page.keyboard.press('Escape');
  await expect(page.locator('.ioviewer-display-modes')).toBeHidden();
  expect(await selected(page)).toEqual([column]);
  expect(await page.evaluate(() => window.__ioviewer.measure.points.length)).toBe(2);
  expect(errors).toEqual([]);
});

test('with the distance tool on, box select and right click keep the selection', async ({ page }) => {
  const errors = await open(page);
  const column = await indexOf(page, 'Column D2 Level 1');
  await page.evaluate((i) => window.__ioviewer.selection.set([i]), column);
  await tool(page, 'distance').click();
  const drag = async (from, to, modifiers) => {
    for (const key of modifiers) await page.keyboard.down(key);
    await page.mouse.move(...from);
    await page.mouse.down();
    await page.mouse.move(...to, { steps: 5 });
    await page.mouse.up();
    for (const key of modifiers) await page.keyboard.up(key);
  };
  await drag([300, 200], [1000, 650], ['Shift']); // window over the whole building
  expect(await selected(page)).toEqual([column]);
  await drag([1000, 650], [300, 200], ['Control', 'Shift']); // crossing, adding
  expect(await selected(page)).toEqual([column]);
  expect(await page.evaluate(() => window.__ioviewer.measure.points.length)).toBe(0);

  const slab = await screenOfWorld(page, A);
  await page.mouse.click(...slab, { button: 'right' });
  await expect(page.locator('.ioviewer-context-menu')).toBeVisible();
  await expect(page.locator('.ioviewer-context-menu [data-item="isolate"]')).toBeVisible(); // the element menu
  expect(await selected(page)).toEqual([column]);
  await page.locator('.ioviewer-context-menu [data-item="isolate"]').click(); // acts on the selection
  expect(await page.evaluate((i) => window.__ioviewer.scene.isVisible(i), column)).toBe(true);
  const ground = await indexOf(page, 'Ground Slab');
  expect(await page.evaluate((i) => window.__ioviewer.scene.isVisible(i), ground)).toBe(false);
  expect(errors).toEqual([]);
});

test('screenshot: a measurement and the grid labels', async ({ page }) => {
  await open(page);
  await tool(page, 'distance').click();
  await page.mouse.click(...(await screenOfWorld(page, A)));
  await page.mouse.click(...(await screenOfWorld(page, B)));
  await expect(page.locator('.ioviewer-measure-label')).toBeVisible();
  await frame(page);
  await page.screenshot({ path: SCREENSHOT });
});

test.describe('without float render targets', () => {
  test.beforeEach(({ page }) => page.addInitScript(() => (window.IOVIEWER_TEST = { pickFloat: false })));

  test('pick + measure with pickFloat:false: the slab is picked and two clicks 6 m apart measure 6.00 m', async ({ page }) => {
    const errors = await open(page);
    expect(await page.evaluate(() => window.__ioviewer.picker._float)).toBe(false);
    const slab = await indexOf(page, 'Ground Slab');
    const [a, b] = [await screenOfWorld(page, A), await screenOfWorld(page, B)];
    expect(await page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element, a)).toBe(slab);
    await tool(page, 'distance').click();
    await page.mouse.click(...a);
    await page.mouse.click(...b);
    expect(Math.abs((await page.evaluate(() => window.__ioviewer.measure.distance)) - 6)).toBeLessThanOrEqual(0.05);
    expect(errors).toEqual([]);
  });
});

test('textures mode changes pixels and returns pixel-identical', async ({ page }) => {
  const errors = await open(page, 'textured');
  const materials = await shot(page);
  await tool(page, 'displayMode').click();
  await expect(modeItem(page, 'textures')).toBeEnabled();
  await modeItem(page, 'textures').click();
  // The texture image decodes asynchronously; the scene redraws when it is ready.
  await expect.poll(async () => (await shot(page)).equals(materials)).toBe(false);
  await tool(page, 'displayMode').click();
  await modeItem(page, 'materials').click();
  expect((await shot(page)).equals(materials)).toBe(true);
  expect(errors).toEqual([]);
});

test('wireframe click still selects the face\'s element', async ({ page }) => {
  const errors = await open(page);
  await page.evaluate(() => window.__ioviewer.scene.setDisplayMode('wireframe'));
  const slab = await indexOf(page, 'Ground Slab');
  await page.mouse.click(...(await screenOfWorld(page, A))); // between the slab's edges: only its face is there
  expect(await selected(page)).toEqual([slab]);
  expect(errors).toEqual([]);
});

test('wireframe lines have no black (NaN-shaded) pixels', async ({ page }) => {
  const errors = await open(page);
  await page.evaluate(() => window.__ioviewer.scene.setDisplayMode('wireframe'));
  const png = await shot(page);
  const black = await page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const canvas = Object.assign(document.createElement('canvas'), { width: image.width, height: image.height });
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    const { data } = context.getImageData(0, 0, image.width, image.height);
    let count = 0;
    for (let i = 0; i < data.length; i += 4) if (data[i] + data[i + 1] + data[i + 2] === 0) count++;
    return count;
  }, png.toString('base64'));
  expect(black).toBe(0); // today's engine draws none; flat shading of lines drew thousands
  expect(errors).toEqual([]);
});
