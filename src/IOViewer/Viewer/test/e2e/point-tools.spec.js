import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

const tool = (page, id) => page.locator(`[data-tool="${id}"]`);
const pick = (page, at) => page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element ?? null, at);

async function open(page, name, fallback = false) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  if (fallback) await page.addInitScript(() => { window.IOVIEWER_TEST = { pickFloat: false }; });
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  const pixels = await page.evaluate(() => {
    const { controls, points } = window.__ioviewer;
    controls.setProjection('orthographic');
    const center = points.position(0, 1, controls.target.clone());
    controls.restoreViewCamera({
      position: [center.x, center.y, center.z + 8], target: center.toArray(), up: [0, 1, 0],
    });
    const { camera } = controls;
    camera.updateMatrixWorld();
    const canvas = document.getElementById('ioviewer-canvas').getBoundingClientRect();
    return [0, 1, 2].map((i) => {
      const p = points.position(0, i, center.clone()).project(camera);
      return [canvas.left + (p.x + 1) * canvas.width / 2, canvas.top + (1 - p.y) * canvas.height / 2];
    });
  });
  return { pixels, errors };
}

test('cloud selection, context actions and display settings use the same scan', async ({ page }) => {
  const { pixels: [left, middle], errors } = await open(page, 'point-tools');
  const firstMaterial = () => page.evaluate(() => {
    const { color, vertexColors, opacity } = window.__ioviewer.points.root.children[0].material;
    return { color: color.getHexString(), vertexColors, opacity };
  });
  expect(await pick(page, middle)).toBe(0);
  await page.mouse.click(...left);
  expect(await page.evaluate(() => [...window.__ioviewer.selection.values()])).toEqual([0]);
  expect(await firstMaterial()).toEqual({ color: 'f59e0b', vertexColors: false, opacity: 1 });
  await page.mouse.click(...left, { button: 'right' });
  await page.getByRole('menuitem', { name: /^Скрыть(?: |$)/ }).click();
  expect(await pick(page, middle)).toBe(1);
  await page.keyboard.press('Shift+h');
  expect(await pick(page, middle)).toBe(0);
  await page.keyboard.press('Escape');

  await tool(page, 'displayMode').click();
  await expect(page.getByRole('menuitemradio', { name: 'Каркас' })).toBeDisabled();
  await page.getByRole('menuitemradio', { name: 'Белый' }).click();
  expect(await firstMaterial()).toEqual({ color: 'ebebed', vertexColors: false, opacity: 1 });
  await tool(page, 'displayMode').click();
  await page.getByRole('menuitemradio', { name: 'Материалы' }).click();
  await tool(page, 'opacity').click();
  await page.getByRole('slider', { name: 'Непрозрачность' }).fill('45');
  expect(await firstMaterial()).toEqual({ color: 'ffffff', vertexColors: true, opacity: 0.45 });

  await page.keyboard.press('Escape');
  await tool(page, 'box').click();
  await expect(page.getByRole('checkbox', { name: 'Заливка срезов' })).toBeDisabled();
  expect(errors).toEqual([]);
});

for (const fallback of [false, true]) {
  test(`mixed point measurement and clipping (${fallback ? 'RGBA8' : 'default'})`, async ({ page }) => {
    const { pixels: [left, middle, right], errors } = await open(page, 'mixed-point-tools', fallback);
    expect(await pick(page, middle)).toBe(2);
    const near = [left[0] + 5, left[1]];
    expect(await pick(page, near)).toBeNull();
    await tool(page, 'distance').click();
    const canvas = page.locator('#ioviewer-canvas');
    await canvas.dispatchEvent('pointermove', { clientX: near[0], clientY: near[1], pointerType: 'mouse' });
    await expect(page.locator('.ioviewer-measure-preview')).toHaveAttribute('data-kind', 'vertex');
    expect(await pick(page, near)).toBeNull(); // the nearby snap must not change ordinary picking
    await page.mouse.click(...near);
    await page.mouse.click(...right);
    const { distance, exact } = await page.evaluate(() => {
      const { measure, points } = window.__ioviewer;
      return {
        distance: measure.distance,
        exact: measure.points.every((point, i) => point.distanceTo(points.position(0, 2 * i, point.clone())) < 1e-5),
      };
    });
    expect(distance).toBeCloseTo(4, 5);
    expect(exact).toBe(true);
    await tool(page, 'distance').click();

    await page.evaluate(() => {
      const { scene, sections } = window.__ioviewer;
      const box = scene.elementBox(0);
      box.min.x -= 0.25;
      box.max.x = box.min.x + 1;
      box.min.y -= 0.5;
      box.max.y += 0.5;
      box.min.z -= 0.5;
      box.max.z += 0.25;
      sections.setGizmoVisible(false);
      sections.setBox(box, 0.2);
    });
    expect(await pick(page, left)).toBe(0);
    expect(await pick(page, middle)).toBeNull();
    await page.evaluate(() => window.__ioviewer.sections.setBoxMode('cutInside'));
    expect(await pick(page, left)).toBeNull();
    expect(await pick(page, middle)).toBe(2);
    expect(await pick(page, right)).toBe(0);
    expect(errors).toEqual([]);
  });
}
