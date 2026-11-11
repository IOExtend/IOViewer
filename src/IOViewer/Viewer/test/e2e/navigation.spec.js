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
  await page.evaluate(() => {
    window.__events = [];
    const { controls } = window.__ioviewer;
    for (const type of ['click', 'contextmenu', 'boxselect'])
      controls.addEventListener(type, (e) => window.__events.push({ type, ...e.detail }));
  });
  return errors;
}

const events = (page) => page.evaluate(() => window.__events);
const frame = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const distance = (page) =>
  page.evaluate(() => {
    const { camera, controls } = window.__ioviewer;
    return camera.position.distanceTo(controls.target);
  });
const shot = (page) => page.screenshot({ clip: { x: 340, y: 200, width: 600, height: 400 } });
const overlayCount = (page) =>
  page.evaluate(() => [...document.querySelectorAll('div')].filter((d) => d.style.position === 'fixed').length);

async function drag(page, button, from, to, modifier) {
  if (modifier) await page.keyboard.down(modifier);
  await page.mouse.move(...from);
  await page.mouse.down({ button });
  await page.mouse.move((from[0] + to[0]) / 2, (from[1] + to[1]) / 2);
  await page.mouse.move(...to);
  await page.mouse.up({ button });
  if (modifier) await page.keyboard.up(modifier);
  await frame(page);
}

test('left drag to the right orbits clockwise seen from above, without click or menu', async ({ page }) => {
  const errors = await open(page);
  const before = await shot(page);
  const x0 = await page.evaluate(() => window.__ioviewer.camera.position.x);
  await drag(page, 'left', [500, 400], [700, 400]);
  expect((await shot(page)).equals(before)).toBe(false);
  // From the front-right (+X, -Y) the camera moves towards the front-left.
  expect(await page.evaluate(() => window.__ioviewer.camera.position.x)).toBeLessThan(x0);
  expect(await events(page)).toEqual([]);
  expect(errors).toEqual([]);
});

test('short left click emits click with modifier flags', async ({ page }) => {
  await open(page);
  await page.mouse.click(600, 400);
  await page.keyboard.down('Control');
  await page.mouse.click(610, 410);
  await page.keyboard.up('Control');
  expect(await events(page)).toEqual([
    { type: 'click', x: 600, y: 400, button: 0, ctrl: false, shift: false },
    { type: 'click', x: 610, y: 410, button: 0, ctrl: true, shift: false },
  ]);
});

test('short right click emits contextmenu, right drag pans without it', async ({ page }) => {
  const errors = await open(page);
  await page.mouse.click(600, 400, { button: 'right' });
  expect(await events(page)).toEqual([{ type: 'contextmenu', x: 600, y: 400 }]);

  const before = await page.evaluate(() => window.__ioviewer.controls.target.toArray());
  await drag(page, 'right', [500, 400], [600, 450]);
  const after = await page.evaluate(() => window.__ioviewer.controls.target.toArray());
  expect(after).not.toEqual(before);
  expect(await events(page)).toHaveLength(1);
  expect(errors).toEqual([]);
});

test('wheel zooms by 0.85 per notch and the model stays inside near/far', async ({ page }) => {
  await open(page);
  const d0 = await distance(page);
  await page.mouse.move(640, 400);
  await page.mouse.wheel(0, -100);
  await frame(page);
  const d1 = await distance(page);
  expect(d1 / d0).toBeCloseTo(0.85, 3);
  await page.mouse.wheel(0, 100);
  await frame(page);
  expect((await distance(page)) / d1).toBeCloseTo(1 / 0.85, 3);

  const covered = await page.evaluate(() => {
    const { camera, scene } = window.__ioviewer;
    const box = scene.visibleBox();
    const centre = box.getCenter(box.min.clone());
    const radius = box.min.distanceTo(box.max) / 2;
    return camera.near > 0 && camera.near < camera.far && camera.far >= camera.position.distanceTo(centre) + radius;
  });
  expect(covered).toBe(true);
});

test('shift drag emits boxselect: dashed overlay for crossing, solid for window', async ({ page }) => {
  await open(page);
  await page.keyboard.down('Shift');
  await page.mouse.move(700, 500);
  await page.mouse.down();
  await page.mouse.move(600, 450);
  await page.mouse.move(500, 400);
  const overlay = await page.evaluate(() => {
    const div = [...document.querySelectorAll('div')].find((d) => d.style.position === 'fixed');
    return { style: div.style.borderStyle, width: div.style.width };
  });
  await page.mouse.up();
  await page.keyboard.up('Shift');
  expect(overlay).toEqual({ style: 'dashed', width: '200px' });
  expect(await events(page)).toEqual([
    { type: 'boxselect', rect: { x: 500, y: 400, width: 200, height: 100 }, mode: 'crossing' },
  ]);

  await drag(page, 'left', [500, 400], [700, 500], 'Shift');
  expect((await events(page))[1]).toMatchObject({ type: 'boxselect', mode: 'window' });
  expect(await overlayCount(page)).toBe(0);
});

test('left button pan mode pans on drag and still emits click', async ({ page }) => {
  await open(page);
  await page.evaluate(() => window.__ioviewer.controls.setLeftButtonMode('pan'));
  const offset = () =>
    page.evaluate(() => window.__ioviewer.camera.position.clone().sub(window.__ioviewer.controls.target).toArray());
  const before = await offset();
  const targetBefore = await page.evaluate(() => window.__ioviewer.controls.target.toArray());
  await drag(page, 'left', [500, 400], [600, 400]);
  expect(await offset()).toEqual(before); // only translated: same direction and distance
  expect(await page.evaluate(() => window.__ioviewer.controls.target.toArray())).not.toEqual(targetBefore);
  await page.mouse.click(600, 400);
  expect((await events(page)).map((e) => e.type)).toEqual(['click']);
});

test('orthographic projection keeps the pose and the visible size at the target', async ({ page }) => {
  const errors = await open(page);
  const result = await page.evaluate(async () => {
    const { controls } = window.__ioviewer;
    const persp = controls.camera;
    const halfHeight = persp.position.distanceTo(controls.target) * Math.tan((persp.fov / 2) * (Math.PI / 180));
    const position = persp.position.toArray();
    controls.setProjection('orthographic');
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const cam = controls.camera;
    const ok =
      cam.isOrthographicCamera && Math.abs(cam.top - halfHeight) < 1e-6 && cam.position.toArray().every((v, i) => v === position[i]);
    const headlight = cam.children.length > 0;
    controls.setProjection('perspective');
    return { ok, headlight, back: controls.camera === persp };
  });
  expect(result).toEqual({ ok: true, headlight: true, back: true });
  expect(errors).toEqual([]);
});

test('animateTo moves the camera to the requested pose', async ({ page }) => {
  await open(page);
  const final = await page.evaluate(async () => {
    const { controls, camera } = window.__ioviewer;
    const at = (x, y, z) => camera.position.clone().set(x, y, z);
    controls.animateTo({ position: at(0, -30, 0), target: at(0, 0, 0) }, 50);
    await new Promise((r) => setTimeout(r, 300));
    return [controls.camera.position.toArray(), controls.target.toArray()];
  });
  expect(final[0][1]).toBeCloseTo(-30, 2);
  expect(final[0][2]).toBeCloseTo(0, 2);
  expect(final[1]).toEqual([0, 0, 0]);
});

test('visibleBox is computed at most once during a 20-step drag', async ({ page }) => {
  await open(page);
  await page.evaluate(() => {
    const { scene } = window.__ioviewer;
    window.__boxCalls = 0;
    const original = scene.visibleBox.bind(scene);
    scene.visibleBox = () => (window.__boxCalls++, original());
  });
  await page.mouse.move(500, 400);
  await page.mouse.down();
  for (let i = 1; i <= 20; i++) await page.mouse.move(500 + i * 5, 400 + i);
  await page.mouse.up();
  expect(await page.evaluate(() => window.__boxCalls)).toBeLessThanOrEqual(1);
  // A visibility change invalidates the cache.
  const after = await page.evaluate(async () => {
    window.__boxCalls = 0;
    window.__ioviewer.scene.isolate([0]);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    return window.__boxCalls;
  });
  expect(after).toBeGreaterThanOrEqual(1);
});

test('a lost pointer capture or window blur mid-drag does not leave the viewer stuck', async ({ page }) => {
  await open(page);
  for (const loseIt of [
    () => page.evaluate(() => window.dispatchEvent(new Event('blur'))),
    () => page.evaluate(() => document.getElementById('ioviewer-canvas').dispatchEvent(new Event('lostpointercapture'))),
  ]) {
    await page.mouse.move(500, 400);
    await page.mouse.down();
    await page.mouse.move(520, 400);
    await page.mouse.move(540, 400);
    await loseIt();
    await page.mouse.up(); // the release belongs to the dead drag and must not emit anything
    expect(await events(page)).toEqual([]);
    const x = await page.evaluate(() => window.__ioviewer.camera.position.x);
    await drag(page, 'left', [500, 400], [600, 400]);
    expect(await page.evaluate(() => window.__ioviewer.camera.position.x)).not.toBe(x);
  }
});

test('releasing another button during a drag does not end it or emit a click', async ({ page }) => {
  await open(page);
  await page.mouse.move(500, 400);
  await page.mouse.down();
  await page.mouse.move(520, 400);
  await page.mouse.move(540, 400);
  await page.mouse.down({ button: 'right' });
  await page.mouse.up({ button: 'right' });
  const x = await page.evaluate(() => window.__ioviewer.camera.position.x);
  await page.mouse.move(600, 400);
  expect(await page.evaluate(() => window.__ioviewer.camera.position.x)).not.toBe(x);
  await page.mouse.up();
  expect(await events(page)).toEqual([]);
});

test('animateTo between opposite views keeps the distance and a top view can be orbited afterwards', async ({ page }) => {
  await open(page);
  const result = await page.evaluate(async () => {
    const { controls, camera } = window.__ioviewer;
    const at = (x, y, z) => camera.position.clone().set(x, y, z);
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    controls.animateTo({ position: at(0, -30, 5), target: at(0, 0, 0) }, 10);
    await wait(150);
    let min = Infinity;
    const sample = setInterval(() => (min = Math.min(min, controls.camera.position.distanceTo(controls.target))), 5);
    controls.animateTo({ position: at(0, 30, 5), target: at(0, 0, 0) }, 200);
    await wait(400);
    clearInterval(sample);
    controls.animateTo({ position: at(0, 0, 30), target: at(0, 0, 0) }, 10);
    await wait(150);
    const top = controls.camera.position.clone();
    return { min, up: camera.up.toArray(), top: top.toArray() };
  });
  expect(result.min).toBeGreaterThan(29);
  expect(result.up).toEqual([0, 0, 1]);
  const before = await page.evaluate(() => window.__ioviewer.camera.position.toArray());
  await drag(page, 'left', [500, 400], [600, 400]);
  expect(await page.evaluate(() => window.__ioviewer.camera.position.toArray())).not.toEqual(before);
});
