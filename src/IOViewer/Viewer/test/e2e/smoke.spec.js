import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { fixturesDir, viewerDir } from './global-setup.js';

const building = JSON.parse(readFileSync(path.join(fixturesDir, 'building.json'), 'utf8')).Scene;

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
const centerRegion = (page) => {
  const { width, height } = page.viewportSize();
  return region(page, width / 2 - 20, height / 2 - 20);
};

// A screenshot can still show the background after the first render call has returned.
async function renderedCenter(page) {
  const background = await region(page, 80, 0); // right of the panel rail
  let center;
  await expect.poll(async () => {
    center = await centerRegion(page);
    return center.equals(background);
  }).toBe(false);
  return center;
}

test('building renders the model and counts elements', async ({ page }) => {
  const { errors, requests } = await open(page, 'building');

  await renderedCenter(page);
  await expect(page.locator('#ioviewer-status')).toHaveText(`Выбрано: 0 · Элементов: ${building.Elements.length}`);
  expect(errors).toEqual([]);
  expect(requests).toEqual([]);
});

for (const pickFloat of [true, false]) {
  test(`a fitting 25 cm away remains drawable and pickable in a 10 km model (pickFloat: ${pickFloat})`, async ({ page }) => {
    await page.addInitScript((value) => { window.IOVIEWER_TEST = { pickFloat: value }; }, pickFloat);
    const { errors } = await open(page, 'depth-range');
    const expected = await page.evaluate(() => {
      const { controls, scene } = window.__ioviewer;
      const box = scene.elementBox(0);
      const target = box.getCenter(box.min.clone());
      controls._set(target.clone().setY(box.min.y - 0.25), target);
      return box.min.y;
    });
    const hit = await page.evaluate(() => {
      const { picker, camera } = window.__ioviewer;
      const pick = picker.pick(innerWidth / 2, innerHeight / 2);
      const logDepth = picker.renderer.capabilities.logarithmicDepthBuffer;
      return { near: camera.near, far: camera.far, logDepth, element: pick?.element, y: pick?.point.y };
    });
    expect(hit.far).toBeGreaterThan(5000);
    expect(hit.near).toBeLessThan(0.25);
    expect(hit.logDepth).toBe(true);
    expect(hit.element).toBe(0);
    expect(hit.y).toBeCloseTo(expected, 3);
    await renderedCenter(page);

    const farHit = await page.evaluate(() => {
      const { controls, picker, scene } = window.__ioviewer;
      const box = scene.elementBox(2);
      const target = box.getCenter(box.min.clone());
      controls._set(target.clone().setY(box.min.y - 4876.33), target);
      const pick = picker.pick(innerWidth / 2, innerHeight / 2);
      return { element: pick?.element, surfaceError: pick ? pick.point.y - box.min.y : Infinity };
    });
    expect(farHit.element).toBe(2);
    expect(farHit.surfaceError).toBeCloseTo(0, 2);
    expect(errors).toEqual([]);
  });
}

test('adaptive orbit compacts a cell on the GPU and full detail and picking still use every slot', async ({ page }) => {
  await page.addInitScript(() => { window.IOVIEWER_TEST = { mergedCap: 0, minRepeats: 1, cellExtent: 1 }; });
  const { errors } = await open(page, 'orbit-detail');
  const result = await page.evaluate(() => {
    const { scene, controls, picker } = window.__ioviewer;
    const { camera, target } = controls;
    const { renderer } = picker;
    scene.elementBox(1).getCenter(target);
    camera.position.copy(target);
    camera.position.y -= 4;
    camera.lookAt(target);
    controls.resize();
    camera.updateMatrixWorld();

    const coords = [0, 1, 3].map((i) => {
      const p = scene.elementBox(i).getCenter(target.clone()).project(camera);
      return [Math.floor((p.x + 1) * innerWidth / 2), Math.floor((1 - p.y) * innerHeight / 2)];
    });
    const before = renderer.getRenderTarget();
    const targetBuffer = new picker._target.constructor(innerWidth, innerHeight);
    const read = ([x, y]) => {
      const pixel = new Uint8Array(4);
      renderer.readRenderTargetPixels(targetBuffer, x, innerHeight - 1 - y, 1, 1, pixel);
      return Array.from(pixel);
    };
    const draw = () => {
      renderer.setRenderTarget(targetBuffer);
      renderer.render(scene.root.parent, camera);
      return { colors: coords.map(read), background: read([0, 0]), stats: scene.drawStats() };
    };
    try {
      const full = draw();
      scene.setDetail(scene.detailThreshold(camera, innerHeight, 34), innerHeight);
      const compact = draw();
      const far = picker.pick(...coords[0])?.element;
      scene.setDetail(0);
      return { cells: scene.memory().cells, full, compact, far, restored: draw() };
    } finally {
      scene.setDetail(0);
      renderer.setRenderTarget(before);
      targetBuffer.dispose();
    }
  });
  expect(result.cells).toBe(1);
  expect(result.full.colors[0]).not.toEqual(result.full.background);
  expect(result.compact.colors).toEqual([result.compact.background, ...result.full.colors.slice(1)]);
  expect(result.compact.stats).toEqual({ drawn: 24, inView: 48, draws: 1 });
  expect(result.far).toBe(0);
  expect(result.restored).toEqual(result.full);

  await nextFrame(page);
  await page.evaluate(() => {
    const { scene, motionDetail } = window.__ioviewer;
    // Exercise the render loop after the controller has budgeted for per-instance detail in a single cell.
    motionDetail.budget = 34;
    motionDetail._refine = true;
    window.orbitFrames = [];
    const end = motionDetail.end.bind(motionDetail);
    motionDetail.end = (now) => {
      window.orbitFrames.push({ threshold: motionDetail.minPixels, ...scene.drawStats() });
      end(now);
    };
  });
  const { width, height } = page.viewportSize();
  await page.mouse.move(width / 2, height / 2);
  await page.mouse.down();
  await page.mouse.move(width / 2 + 14, height / 2);
  await page.mouse.up();
  await expect.poll(() => page.evaluate(() => window.orbitFrames.some((frame) => frame.threshold > 0 && frame.drawn < frame.inView))).toBe(true);
  await expect.poll(() => page.evaluate(() => window.orbitFrames.at(-1))).toEqual({ threshold: 0, ...result.full.stats });
  expect(errors).toEqual([]);
});

for (const [locale, message, status] of [
  ['ru-RU', 'Нет геометрии', 'Выбрано: 0 · Элементов: 0'],
  ['en-US', 'No geometry', 'Selected: 0 · Elements: 0'],
]) {
  test.describe(locale, () => {
    test.use({ locale });
    test('empty document shows the localized message and zero counts', async ({ page }) => {
      const { errors, requests } = await open(page, 'empty');
      await expect(page.getByText(message)).toBeVisible();
      await expect(page.locator('#ioviewer-status')).toHaveText(status);
      expect(errors).toEqual([]);
      expect(requests).toEqual([]);
    });
  });
}

test('startup profiling samples load and first render once', async ({ page }) => {
  await page.addInitScript(() => {
    window.startupSamples = [];
    window.IOVIEWER_TEST = { startup: (sample) => window.startupSamples.push(sample) };
  });
  const { errors, requests } = await open(page, 'building');
  await page.evaluate(() => window.__ioviewer.controls.resize());
  await nextFrame(page);
  expect(await page.evaluate(() => window.startupSamples)).toEqual([
    'metadataStart', 'metadataEnd', 'binaryStart', 'binaryEnd', 'sceneStart', 'sceneEnd', 'renderStart', 'renderEnd',
  ]);
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

test('one material bucket draws and picks elements in several merged chunks and instanced cells', async ({ page }) => {
  await page.addInitScript(() => { window.IOVIEWER_TEST = { mergedCap: 0, chunkVertices: 24 }; });
  const { errors } = await open(page, 'building');
  const indices = ['Ground Slab', 'Floor Slab Level 2', 'Column A1 Level 1', 'Column D2 Level 1']
    .map((name) => building.Elements.findIndex((element) => element.Name === name));
  const result = await page.evaluate((indices) => {
    const { scene, controls, picker, camera } = window.__ioviewer;
    const meshes = indices.map((i) => scene.instance(scene.instancesOf(i)[0]).mesh);
    const rect = picker.renderer.domElement.getBoundingClientRect();
    const hits = indices.map((i) => {
      scene.isolate([i]);
      controls.fitBox(scene.elementBox(i), false);
      return picker.pick(rect.left + rect.width / 2, rect.top + rect.height / 2)?.element;
    });
    scene.showAll();
    return {
      sameMaterial: meshes.every((mesh) => mesh.material === meshes[0].material),
      instanced: meshes.map((mesh) => mesh.isInstancedMesh === true),
      meshCount: new Set(meshes).size,
      hits,
    };
  }, indices);
  expect(result).toEqual({ sameMaterial: true, instanced: [false, false, true, true], meshCount: 4, hits: indices });
  await renderedCenter(page);
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

for (const instanced of [false, true]) {
  test(`textures sample the expected checker squares (${instanced ? 'instanced' : 'merged'})`, async ({ page }) => {
    if (instanced) await page.addInitScript(() => { window.IOVIEWER_TEST = { mergedCap: 0, minRepeats: 1 }; });
    const { errors } = await open(page, 'textured');
    expect(await page.evaluate(() => window.__ioviewer.scene.instance(0).mesh.isInstancedMesh === true)).toBe(instanced);
    const coords = await page.evaluate(() => {
      const { scene, controls, camera } = window.__ioviewer;
      const { rtcOffset } = JSON.parse(document.getElementById('ioviewer-meta').textContent);
      const rtc = camera.position.clone().fromArray(rtcOffset);
      const center = camera.position.clone().set(0, -2, 1.5).sub(rtc);
      controls._set(center.clone().addScaledVector(camera.position.clone().set(0, -1, 0), 3), center);
      camera.updateMatrixWorld();
      scene.setDisplayMode('textures');
      const rect = document.getElementById('ioviewer-canvas').getBoundingClientRect();
      // The 48-sided cylinder has radius 2 and UVs (arc length, height) in metres. Sample the centres of
      // checker squares 1/16 m wide on the first facet after -Y, interpolating between its endpoints.
      const a = 3 * Math.PI / 2, b = a + Math.PI / 24;
      const first = center.clone().set(2 * Math.cos(a), 2 * Math.sin(a), 0);
      const last = center.clone().set(2 * Math.cos(b), 2 * Math.sin(b), 0);
      return [[9.53125, 1.53125], [9.59375, 1.53125], [9.65625, 1.53125], [9.53125, 1.59375]]
        .map(([u, z]) => {
          const p = first.clone().lerp(last, (u / 2 - a) / (b - a)).setZ(z).sub(rtc).project(camera);
          return [Math.round(rect.left + (p.x + 1) * rect.width / 2), Math.round(rect.top + (1 - p.y) * rect.height / 2)];
        });
    });
    await expect.poll(async () => {
      const [light, darkU, repeatU, darkV] = await Promise.all(coords.map(([x, y]) => brightness(page, x, y)));
      return Math.min(light, repeatU) - Math.max(darkU, darkV);
    }).toBeGreaterThan(35);
    expect(errors).toEqual([]);
  });
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
  const background = await brightness(page, 100, 20);
  let plain, mirrored;
  await expect.poll(async () => {
    plain = await brightness(page, ...points[0]);
    mirrored = await brightness(page, ...points[1]);
    return Math.min(Math.abs(plain - background), Math.abs(mirrored - background));
  }).toBeGreaterThan(10); // Both columns have reached the composited frame.
  expect(Math.abs(mirrored - plain)).toBeLessThanOrEqual(3);
  expect(errors).toEqual([]);
});

test('highlight, visibility and display modes change the picture without errors', async ({ page }) => {
  const { errors } = await open(page, 'building');
  const before = await renderedCenter(page);

  await page.evaluate((n) => window.__ioviewer.scene.setHighlighted([...Array(n).keys()]), building.Elements.length);
  await nextFrame(page);
  expect((await centerRegion(page)).equals(before)).toBe(false);

  await page.evaluate(() => window.__ioviewer.scene.setHighlighted([]));
  await nextFrame(page);
  expect((await centerRegion(page)).equals(before)).toBe(true);

  for (const mode of ['white', 'wireframe', 'textures', 'materials']) {
    await page.evaluate((m) => window.__ioviewer.scene.setDisplayMode(m), mode);
    await nextFrame(page);
  }
  await page.evaluate(() => window.__ioviewer.scene.setOpacity(0.5));
  await nextFrame(page);
  await page.evaluate(() => window.__ioviewer.scene.setOpacity(1));
  await nextFrame(page);
  expect((await centerRegion(page)).equals(before)).toBe(true);
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
  const clip = { x: x0, y, width: x1 - x0, height: 1 };
  const background = await brightness(page, 100, 20);
  let row;
  await expect.poll(async () => {
    row = await greys(page, clip);
    return row.some((grey) => Math.abs(grey - background) > 10);
  }).toBe(true);
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

// Opens a page that is expected to fail at startup: no __ioviewer.ready to wait for.
async function openFailing(page, name) {
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  return errors;
}

test('without WebGL 2 the page says so instead of staying blank', async ({ page }) => {
  await page.addInitScript(() => {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...rest) {
      return type === 'webgl2' ? null : getContext.call(this, type, ...rest);
    };
  });
  const errors = await openFailing(page, 'building');
  await expect(page.locator('#ioviewer-message')).toHaveText('Нужен браузер с поддержкой WebGL 2');
  await expect(page.locator('#ioviewer-message')).toBeVisible();
  const title = await page.evaluate(() => JSON.parse(document.getElementById('ioviewer-meta').textContent).title);
  expect(title).toBeTruthy();
  await expect(page).toHaveTitle(title);
  expect(errors).toEqual([]);
});

for (const name of ['damaged', 'malformed-meta', 'missing-geometry']) {
  test(`${name} reports unreadable model data`, async ({ page }) => {
    const errors = await openFailing(page, name);
    await expect(page.locator('#ioviewer-message')).toHaveText('Не удалось прочитать данные модели');
    await expect(page.locator('#ioviewer-message')).toBeVisible();
    expect(errors).toEqual([]);
  });
}

for (const name of ['zero-vertices', 'non-finite-instances']) {
  test(`${name} opens with the no-geometry message and a populated model tree`, async ({ page }) => {
    const { errors } = await open(page, name);
    await expect(page.locator('#ioviewer-message')).toHaveText('Нет геометрии');
    await expect(page.locator('#ioviewer-message')).toBeVisible();
    await page.locator('.ioviewer-rail-button[data-panel="model"]').click();
    await expect(page.locator('.tree-category').first()).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test('context lost shows the reload message', async ({ page }) => {
  await open(page, 'building');
  await expect(page.locator('#ioviewer-message')).toBeHidden();
  await page.evaluate(() => document.getElementById('ioviewer-canvas').getContext('webgl2').getExtension('WEBGL_lose_context').loseContext());
  await expect(page.locator('#ioviewer-message')).toHaveText('Видеокарта сброшена — перезагрузите страницу');
  await expect(page.locator('#ioviewer-message')).toBeVisible();
});

for (const pickFloat of [true, false]) {
  test(`picking round-trips high slots and surface points (pickFloat: ${pickFloat})`, async ({ page }) => {
    await page.addInitScript((value) => { window.IOVIEWER_TEST = { pickFloat: value }; }, pickFloat);
    const { errors } = await open(page, 'large');
    if (!pickFloat) expect(await page.evaluate(() => window.__ioviewer.picker._float)).toBe(false);
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
      expect(hit).not.toBeNull();
      expect(hit.slot).toBeGreaterThanOrEqual(256);
      expect(hit.element).toBe(element);
      expect(hit.distance).toBeLessThan(0.01);
    }
    expect(errors).toEqual([]);
  });
}

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
    const drawable = building.Instances.length; // every geometry of the building is triangles
    await expect(page.locator('#ioviewer-message')).toHaveText(`Модель слишком большая для этого просмотрщика: объектов с геометрией — ${drawable}, предел — 10`);
    await expect(page.locator('#ioviewer-status')).toHaveText(`Выбрано: 0 · Элементов: ${building.Elements.length}`);
    expect(await page.evaluate(() => window.__ioviewer.scene.memory().mergedInstances)).toBe(0);
    expect(errors).toEqual([]);
  });
});
