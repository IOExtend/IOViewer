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
  await page.keyboard.press('Escape'); // close the menu it opened: a press outside an open menu only dismisses it

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
    { type: 'boxselect', rect: { x: 500, y: 400, width: 200, height: 100 }, mode: 'crossing', ctrl: false, shift: true },
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

// View cube: client point of a point given in cube coordinates (the cube spans -1..1).
const cubePoint = (page, p) =>
  page.evaluate((p) => {
    const { viewCube } = window.__ioviewer;
    const v = viewCube.camera.position.clone().set(...p).project(viewCube.camera);
    const r = viewCube.canvas.getBoundingClientRect();
    return [r.left + ((v.x + 1) / 2) * r.width, r.top + ((1 - v.y) / 2) * r.height];
  }, p);
const viewDirection = (page) =>
  page.evaluate(() => {
    const { camera, controls } = window.__ioviewer;
    return camera.position.clone().sub(controls.target).normalize().toArray();
  });
// Waits until the camera animation has ended and the next frame (main view and cube) is drawn.
async function settle(page) {
  await expect.poll(() => page.evaluate(() => window.__ioviewer.controls.animating), { timeout: 3000 }).toBe(false);
  await frame(page);
}
// After the animation: the view (target to camera) is `expected`.
async function expectView(page, expected) {
  await settle(page);
  const d = await viewDirection(page);
  expect(Math.hypot(...d.map((c, i) => c - expected[i]))).toBeLessThan(1e-6);
}
const arrow = (page, name) => page.locator(`.ioviewer-viewcube-arrow[data-arrow="${name}"]`);
const s2 = Math.SQRT1_2;
const s3 = 1 / Math.sqrt(3);
// Top views stay 0.01 rad off the pole, towards their heading side.
const [tilt, lift] = [Math.sin(0.01), Math.cos(0.01)];

test('view cube: a click on «Спереди» looks from the front (-Y) without touching the main controls', async ({ page }) => {
  const errors = await open(page);
  const faces = await page.evaluate(() =>
    Object.fromEntries(window.__ioviewer.viewCube.faces.children.map((f) => [f.userData.label, f.position.toArray()])),
  );
  expect(Object.keys(faces).sort()).toEqual(['Сверху', 'Снизу', 'Сзади', 'Слева', 'Спереди', 'Справа'].sort());
  await page.mouse.click(...(await cubePoint(page, faces['Спереди'])));
  await expectView(page, [0, -1, 0]);
  expect(await events(page)).toEqual([]);
  expect(errors).toEqual([]);
});

test('view cube shows the face the camera looks from after orbits, also in orthographic', async ({ page }) => {
  await open(page);
  // The face the camera looks from, worked out from the main camera alone, and the cube region at the canvas centre.
  const facing = () =>
    page.evaluate(() => {
      const { viewCube, camera, controls } = window.__ioviewer;
      const d = camera.position.clone().sub(controls.target).normalize();
      const normals = { right: [1, 0, 0], left: [-1, 0, 0], back: [0, 1, 0], front: [0, -1, 0], top: [0, 0, 1], bottom: [0, 0, -1] };
      const dot = (name) => d.x * normals[name][0] + d.y * normals[name][1] + d.z * normals[name][2];
      const expected = Object.keys(normals).reduce((a, b) => (dot(b) > dot(a) ? b : a));
      const r = viewCube.canvas.getBoundingClientRect();
      return { expected, shown: viewCube.regionAtClient(r.left + r.width / 2, r.top + r.height / 2) };
    });
  await drag(page, 'left', [500, 400], [700, 400]); // heading about -102 degrees, 29 degrees up
  expect(await facing()).toEqual({ expected: 'front', shown: 'front' });
  await drag(page, 'left', [500, 400], [500, 600]); // about 86 degrees up
  expect(await facing()).toEqual({ expected: 'top', shown: 'top' });
  await page.locator('[data-tool="projection"]').click();
  await drag(page, 'left', [500, 400], [500, 200]); // back to about 29 degrees up
  await drag(page, 'left', [300, 400], [900, 400]); // heading about +86 degrees
  expect(await page.evaluate(() => window.__ioviewer.camera.isOrthographicCamera)).toBe(true);
  expect(await facing()).toEqual({ expected: 'back', shown: 'back' });
});

test('view cube: edges and corners are clickable and highlighted on hover', async ({ page }) => {
  await open(page);
  const edge = await cubePoint(page, [0.9, -1, 0]);
  await page.mouse.move(...edge);
  expect(await page.evaluate(() => window.__ioviewer.viewCube.hovered)).toBe('front-right');
  expect(await page.evaluate(() => window.__ioviewer.viewCube.highlight.visible)).toBe(true);
  await page.mouse.click(...edge);
  await expectView(page, [s2, -s2, 0]);
  await page.mouse.click(...(await cubePoint(page, [0.9, -1, 0.9])));
  await expectView(page, [s3, -s3, s3]);
  await page.mouse.move(640, 600); // off the cube
  expect(await page.evaluate(() => window.__ioviewer.viewCube.highlight.visible)).toBe(false);
});

test('view cube: from the load view «Сверху» faces the front, and the up arrow then lands on the back', async ({ page }) => {
  await open(page);
  await page.mouse.click(...(await cubePoint(page, [0, 0, 1]))); // the load heading is 45 degrees: a tie, front wins
  await expectView(page, [0, -tilt, lift]);
  await arrow(page, 'up').click();
  await expectView(page, [0, 1, 0]);
});

test('view cube arrows show only when aligned with a face and step between views', async ({ page }) => {
  await open(page);
  for (const name of ['up', 'down', 'left', 'right']) await expect(arrow(page, name)).toBeHidden();
  await page.mouse.click(...(await cubePoint(page, [0, -1, 0])));
  await expectView(page, [0, -1, 0]);
  await expect(arrow(page, 'right')).toBeVisible();
  await expect(arrow(page, 'right')).toHaveAttribute('aria-label', 'Повернуть вправо');
  await arrow(page, 'right').click();
  await expectView(page, [1, 0, 0]);
  await arrow(page, 'up').click();
  await expectView(page, [tilt, 0, lift]); // top, still facing right
  await expect(arrow(page, 'up')).toBeVisible();
  await arrow(page, 'right').click(); // turns the top view: the heading goes from +X to +Y
  await expectView(page, [0, tilt, lift]);
  await arrow(page, 'down').click(); // the side at the bottom of the screen
  await expectView(page, [0, 1, 0]);
  await drag(page, 'left', [500, 400], [560, 380]);
  await expect(arrow(page, 'left')).toBeHidden();
});

test('view cube home button restores the load view', async ({ page }) => {
  await open(page);
  const pose = () =>
    page.evaluate(() => {
      const { camera, controls } = window.__ioviewer;
      return [...camera.position.toArray(), ...controls.target.toArray()];
    });
  const load = await pose();
  await page.mouse.click(...(await cubePoint(page, [0, 0, 1])));
  await expectView(page, [0, -tilt, lift]);
  await drag(page, 'right', [500, 400], [560, 380]); // pan moves the target too
  await page.getByRole('button', { name: 'Исходный вид' }).click();
  await settle(page);
  expect(Math.max(...(await pose()).map((c, i) => Math.abs(c - load[i])))).toBeLessThan(1e-6);
});

test('the view cube takes no pointer events outside its box', async ({ page }) => {
  await open(page);
  const box = await page.locator('.ioviewer-viewcube').boundingBox();
  const canvas = await page.locator('.ioviewer-viewcube-canvas').boundingBox();
  await page.mouse.click(box.x - 4, canvas.y + canvas.height / 2);
  await page.mouse.click(canvas.x + canvas.width / 2, box.y + box.height + 4);
  expect((await events(page)).map((e) => e.type)).toEqual(['click', 'click']);
  const properties = await page.locator('#ioviewer-properties').evaluate((p) => getComputedStyle(p).top);
  expect(parseFloat(properties)).toBeGreaterThan(box.y + box.height);
});

// The main view still picks (a click selects) and orbits (the picture changes) after the cube has failed.
async function expectMainViewerWorks(page) {
  await page.mouse.click(640, 420); // the fitted building
  expect(await page.evaluate(() => window.__ioviewer.selection.size)).toBe(1);
  const before = await shot(page);
  await drag(page, 'left', [500, 400], [650, 400]);
  expect((await shot(page)).equals(before)).toBe(false);
}

test('without a WebGL context for the view cube it hides and the main viewer works', async ({ page }) => {
  const messages = [];
  page.on('console', (message) => messages.push(message.text()));
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (...args) {
      return this.classList.contains('ioviewer-viewcube-canvas') ? null : getContext.apply(this, args);
    };
  });
  const errors = await open(page);
  await expect(page.locator('.ioviewer-viewcube')).toBeHidden();
  expect(await page.evaluate(() => window.__ioviewer.viewCube.error.message)).toContain('WebGL 2');
  await expectMainViewerWorks(page);
  expect(errors).toEqual([]);
  expect(messages).toEqual([]);
});

test('a lost view cube context hides the cube and the main viewer keeps rendering and picking', async ({ page }) => {
  const messages = [];
  page.on('console', (message) => messages.push(message.text()));
  const errors = await open(page);
  await page.evaluate(() =>
    window.__ioviewer.viewCube.renderer.getContext().getExtension('WEBGL_lose_context').loseContext(),
  );
  await expect(page.locator('.ioviewer-viewcube')).toBeHidden();
  expect(await page.evaluate(() => window.__ioviewer.viewCube.error.message)).toContain('lost');
  await expectMainViewerWorks(page);
  expect(errors).toEqual([]);
  expect(messages).toEqual([]);
});

// Counts the model draws of the picker (one per pick, two without float targets) and the picks the controls ask for.
const countPicks = (page) =>
  page.evaluate(() => {
    const { picker, controls } = window.__ioviewer;
    window.__picks = { renders: 0, asked: 0 };
    const render = picker._render.bind(picker);
    picker._render = (...args) => (window.__picks.renders++, render(...args));
    const pick = controls.pick;
    controls.pick = (x, y) => (window.__picks.asked++, pick(x, y));
  });

test('ten wheel notches within one animation frame pick once and zoom by 0.85 each towards that point', async ({ page }) => {
  await open(page);
  await countPicks(page);
  const d0 = await distance(page);
  const zoomed = await page.evaluate(() => {
    const canvas = document.getElementById('ioviewer-canvas');
    for (let k = 0; k < 10; k++) canvas.dispatchEvent(new WheelEvent('wheel', { deltaY: -100, clientX: 640, clientY: 400, bubbles: true, cancelable: true }));
    return window.__picks;
  });
  expect(zoomed).toEqual({ renders: 1, asked: 1 });
  expect((await distance(page)) / d0).toBeCloseTo(0.85 ** 10, 3);
  await frame(page);
  await page.mouse.move(640, 400);
  await page.mouse.wheel(0, -100); // a later frame picks again
  await frame(page);
  expect(await page.evaluate(() => window.__picks)).toEqual({ renders: 2, asked: 2 });
});

test('small wheel deltas (a trackpad) zoom by as much less than notches; 3 lines are a notch; deltaY 0 does not zoom', async ({ page }) => {
  await open(page);
  const wheel = (init) =>
    page.evaluate((init) => {
      const canvas = document.getElementById('ioviewer-canvas');
      for (let k = 0; k < 10; k++) canvas.dispatchEvent(new WheelEvent('wheel', { clientX: 640, clientY: 400, bubbles: true, cancelable: true, ...init }));
    }, init);
  let d = await distance(page);
  const ratio = async () => {
    const next = await distance(page);
    const r = next / d;
    d = next;
    await frame(page);
    return r;
  };
  await wheel({ deltaY: -4 });
  const trackpad = await ratio();
  expect(trackpad).toBeCloseTo(0.85 ** 0.4, 3);
  await wheel({ deltaY: 4 });
  expect(await ratio()).toBeCloseTo(0.85 ** -0.4, 3);
  await wheel({ deltaY: -100 });
  const notches = await ratio();
  expect(notches).toBeCloseTo(0.85 ** 10, 3);
  expect(1 - trackpad).toBeLessThan((1 - notches) / 10);
  await wheel({ deltaY: -3, deltaMode: 1 });
  expect(await ratio()).toBeCloseTo(0.85 ** 10, 3);
  await wheel({ deltaY: 0, deltaX: -100 });
  expect(await ratio()).toBe(1);
});

test('pressing again at the same spot with the camera unchanged draws no new pick; a hide or a section does', async ({ page }) => {
  await open(page);
  await countPicks(page);
  await page.mouse.move(640, 400);
  for (let k = 0; k < 3; k++) {
    await page.mouse.down(); // the orbit pivot
    await page.mouse.up(); // a click: selects through the same pick
    await frame(page);
  }
  expect(await page.evaluate(() => window.__picks.renders)).toBe(1);
  const hit = await page.evaluate(() => window.__ioviewer.picker.pick(640, 400).element);
  await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), hit);
  expect(await page.evaluate(() => window.__ioviewer.picker.pick(640, 400)?.element ?? null)).not.toBe(hit);
  expect(await page.evaluate(() => window.__picks.renders)).toBe(2);
  await page.evaluate(() => window.__ioviewer.sections.setMode('box'));
  await page.evaluate(() => window.__ioviewer.picker.pick(640, 400));
  expect(await page.evaluate(() => window.__picks.renders)).toBe(3);
});
