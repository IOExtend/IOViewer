// The core picking, visibility, section, transparency and mirroring checks again, on the instanced path: every shape
// is drawn as instanced cells (IOVIEWER_TEST {mergedCap: 0, minRepeats: 1}), as a model over the merged-memory cap
// draws its repeated shapes.
import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { fixturesDir, viewerDir } from './global-setup.js';

const building = JSON.parse(readFileSync(path.join(fixturesDir, 'building.json'), 'utf8'));
const INSTANCED = { mergedCap: 0, minRepeats: 1 };

test.beforeEach(({ page }) => page.addInitScript((options) => (window.IOVIEWER_TEST = options), INSTANCED));

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
const pickAt = (page, [x, y]) => page.evaluate(([x, y]) => window.__ioviewer.picker.pick(x, y)?.element ?? null, [x, y]);
const tool = (page, id) => page.locator(`.ioviewer-tool[data-tool="${id}"]`);
const BACKGROUND = [31, 34, 40]; // #1f2228
// The middle of the canvas, clear of the panels and the toolbar.
const VIEW = { x: 340, y: 160, width: 600, height: 420 };

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

// RGBA bytes of a screenshot, decoded by the page itself.
const decode = (page, png) =>
  page.evaluate(async (base64) => {
    const image = new Image();
    image.src = `data:image/png;base64,${base64}`;
    await image.decode();
    const canvas = Object.assign(document.createElement('canvas'), { width: image.width, height: image.height });
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return [...context.getImageData(0, 0, image.width, image.height).data];
  }, png.toString('base64'));

// Mean [r, g, b] of the 3x3 screen pixels around a point.
async function rgb(page, [x, y]) {
  const data = await decode(page, await page.screenshot({ clip: { x: Math.round(x) - 1, y: Math.round(y) - 1, width: 3, height: 3 } }));
  const sum = [0, 0, 0];
  for (let i = 0; i < data.length; i += 4) for (let c = 0; c < 3; c++) sum[c] += data[i + c];
  return sum.map((s) => s / (data.length / 4));
}
const distance = (a, b) => a.reduce((sum, c, i) => sum + Math.abs(c - b[i]), 0);
const cleared = (now, before) => distance(now, BACKGROUND) < 0.25 * distance(before, BACKGROUND);

test('every shape is an instanced cell, and the building looks as on the merged path in every display mode', async ({ page, browser }) => {
  // Two pages x three display modes of screenshots: ~30 s with software rendering on CI.
  test.slow();
  const errors = await open(page);
  const memory = await page.evaluate(() => window.__ioviewer.scene.memory());
  expect(memory).toMatchObject({ chunks: 0, mergedInstances: 0, mergedBytes: 0 });
  expect(memory.cells).toBeGreaterThan(0);
  expect(memory.instancedInstances).toBe(building.Meshes.length);

  const merged = await browser.newPage({ viewport: page.viewportSize(), locale: 'ru-RU' });
  await open(merged);
  expect(await merged.evaluate(() => window.__ioviewer.scene.memory().cells)).toBe(0);
  for (const mode of ['materials', 'white', 'wireframe']) {
    const shots = [];
    for (const p of [page, merged]) {
      await p.evaluate((m) => window.__ioviewer.scene.setDisplayMode(m), mode);
      await frame(p);
      shots.push(await decode(page, await p.screenshot({ clip: VIEW })));
    }
    // Faces: the same pixels. Lines: where coincident edges of neighbouring elements are shaded differently, the
    // one drawn last shows, and the two paths draw in another order; so the same picture in 8 x 8 blocks.
    const grey = shots.map((rgba) => Float32Array.from({ length: rgba.length / 4 }, (_, k) => (rgba[k * 4] + rgba[k * 4 + 1] + rgba[k * 4 + 2]) / 3));
    let lit = 0;
    let off = 0;
    for (let k = 0; k < grey[0].length; k++) {
      if (grey[0][k] > 50) lit++;
      if (Math.abs(grey[0][k] - grey[1][k]) > 8) off++;
    }
    let worst = 0;
    for (let by = 0; by < VIEW.height; by += 8) {
      for (let bx = 0; bx < VIEW.width; bx += 8) {
        let sum = 0;
        let n = 0;
        for (let y = by; y < Math.min(by + 8, VIEW.height); y++) {
          for (let x = bx; x < Math.min(bx + 8, VIEW.width); x++, n++) sum += grey[0][y * VIEW.width + x] - grey[1][y * VIEW.width + x];
        }
        worst = Math.max(worst, Math.abs(sum) / n);
      }
    }
    expect(lit, mode).toBeGreaterThan(5000);
    if (mode !== 'wireframe') expect(off, mode).toBe(0);
    expect(worst, mode).toBeLessThan(8);
  }
  await merged.close();
  expect(errors).toEqual([]);
});

test('pick returns the element and a point on its surface, in perspective and orthographic', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const [x, y] = await screenAt(page, d2);
  const result = await page.evaluate(([x, y, i]) => {
    const { picker, scene } = window.__ioviewer;
    const hit = picker.pick(x, y);
    const box = scene.elementBox(i);
    const p = hit.point;
    const onFace = ['x', 'y', 'z'].some((k) => Math.abs(p[k] - box.min[k]) < 1e-3 || Math.abs(p[k] - box.max[k]) < 1e-3);
    return { element: hit.element, inside: box.expandByScalar(1e-3).containsPoint(p), onFace, cell: scene.instance(scene.instancesOf(i)[0]).mesh.isInstancedMesh };
  }, [x, y, d2]);
  expect(result).toEqual({ element: d2, inside: true, onFace: true, cell: true });
  await page.mouse.click(x, y);
  expect(await selected(page)).toEqual([d2]);

  await page.evaluate(() => window.__ioviewer.controls.setProjection('orthographic'));
  expect(await pickAt(page, await screenAt(page, d2))).toBe(d2);
  expect(errors).toEqual([]);
});

test('hide, isolate and show all change what is drawn and picked; showing all returns the same picture', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d1 = await indexOf(page, 'Column D1 Level 1');
  const d2At = await screenAt(page, d2);
  const d1At = await screenAt(page, d1);
  const before = { d2: await rgb(page, d2At), d1: await rgb(page, d1At), view: await page.screenshot({ clip: VIEW }) };

  await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), d2);
  await frame(page);
  expect(await pickAt(page, d2At)).not.toBe(d2);
  expect(await rgb(page, d2At)).not.toEqual(before.d2);

  await page.evaluate((i) => window.__ioviewer.scene.isolate([i]), d1);
  await frame(page);
  expect(await pickAt(page, d1At)).toBe(d1);
  expect(await rgb(page, d1At)).toEqual(before.d1); // nothing in front of it was hidden
  const roof = await screenAt(page, await indexOf(page, 'Roof Slab'), [0.5, 0.95, 1]);
  expect(await rgb(page, roof)).toEqual(BACKGROUND);
  expect(await pickAt(page, roof)).toBe(null);

  await page.evaluate(() => window.__ioviewer.scene.showAll());
  await frame(page);
  expect(await pickAt(page, d2At)).toBe(d2);
  expect((await page.screenshot({ clip: VIEW })).equals(before.view)).toBe(true);
  expect(errors).toEqual([]);
});

test('the selection highlight wins over a 4D tint, and the tint returns after it', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const at = await screenAt(page, d2);
  const plain = await rgb(page, at);
  const hex = () => page.evaluate((i) => {
    const { scene } = window.__ioviewer;
    return [...scene.instancesOf(i)].map((n) => scene.instanceColor(n).getHexString());
  }, d2);
  const linear = (css) => page.evaluate((c) => window.__ioviewer.scene.instance(0).mesh.material.color.clone().set(c).getHexString(), css);

  await page.evaluate((i) => window.__ioviewer.scene.setTint([i], '#22c55e'), d2);
  await frame(page);
  const tinted = await rgb(page, at);
  expect(tinted[1]).toBeGreaterThan(tinted[0] + 30); // green
  expect(await hex()).toEqual([await linear('#22c55e')]);

  await page.mouse.click(...at);
  await frame(page);
  const highlighted = await rgb(page, at);
  expect(highlighted[0]).toBeGreaterThan(highlighted[2] + 60); // amber over green
  expect(await hex()).toEqual([await linear('#f59e0b')]);

  await page.keyboard.press('Escape');
  await frame(page);
  expect(await rgb(page, at)).toEqual(tinted);
  await page.evaluate((i) => window.__ioviewer.scene.setTint([i], null), d2);
  await frame(page);
  expect(await rgb(page, at)).toEqual(plain);
  expect(errors).toEqual([]);
});

test('section box: keepInside shows and picks only the column, cutInside cuts it away and picks through it', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d1 = await indexOf(page, 'Column D1 Level 1');
  const roof = await indexOf(page, 'Roof Slab');
  const d2At = await screenAt(page, d2);
  const d1At = await screenAt(page, d1);
  const roofAt = await screenAt(page, roof, [0.5, 0.95, 1]);
  const before = { d2: await rgb(page, d2At), d1: await rgb(page, d1At), roof: await rgb(page, roofAt) };

  await page.mouse.click(...d2At);
  await tool(page, 'box').click();
  expect(await page.evaluate(() => [window.__ioviewer.sections.mode, window.__ioviewer.sections.boxMode])).toEqual(['box', 'keepInside']);
  await page.evaluate(() => window.__ioviewer.sections.setGizmoVisible(false));
  await frame(page);
  expect(await pickAt(page, d2At)).toBe(d2);
  expect(cleared(await rgb(page, d1At), before.d1)).toBe(true);
  expect(cleared(await rgb(page, roofAt), before.roof)).toBe(true);
  expect(await pickAt(page, d1At)).toBe(null);

  await page.locator('.ioviewer-side-panel[data-panel="sections"]').getByRole('button', { name: 'Вырезать внутри' }).click();
  await frame(page);
  const through = await pickAt(page, d2At); // what lies behind the cut-away column, if anything
  expect(through).not.toBe(d2);
  expect(await rgb(page, d2At)).not.toEqual(before.d2);
  expect(await rgb(page, d1At)).toEqual(before.d1);
  expect(await pickAt(page, d1At)).toBe(d1);

  await tool(page, 'resetSections').click();
  await page.keyboard.press('Escape');
  await frame(page);
  expect(await rgb(page, d2At)).toEqual(before.d2);
  expect(await rgb(page, roofAt)).toEqual(before.roof);
  expect(errors).toEqual([]);
});

test('the transparent glazing is drawn after the opaque model: what is behind it shows through, blended', async ({ page }) => {
  const errors = await open(page);
  const wall = await indexOf(page, 'Curtain Wall South');
  const at = await screenAt(page, wall, [0.3, 0.5, 0.2]); // the ground slab behind it
  const kinds = await page.evaluate((i) => {
    const { scene } = window.__ioviewer;
    return [...scene.instancesOf(i)].map((n) => scene.instance(n).mesh.material.transparent).sort();
  }, wall);
  expect(kinds).toEqual([false, true]);
  const glazed = await rgb(page, at);
  // Without the wall: the opaque element behind it, alone.
  await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), wall);
  await frame(page);
  const behind = await pickAt(page, at);
  expect(behind).not.toBe(null);
  const bare = await rgb(page, at);
  // Without what is behind it either: the glazing over the background.
  await page.evaluate(([w, b]) => {
    window.__ioviewer.scene.setVisible([w], true);
    window.__ioviewer.scene.setVisible([b], false);
  }, [wall, behind]);
  await frame(page);
  const empty = await rgb(page, at);
  // Drawn before the opaque model, the glazing (no depth write) would be overdrawn: glazed would equal bare.
  expect(distance(glazed, bare)).toBeGreaterThan(30);
  expect(distance(glazed, empty)).toBeGreaterThan(30);
  expect(errors).toEqual([]);
});

test('a mirrored instance is shaded like its unmirrored twin', async ({ page }) => {
  const errors = await open(page);
  const twins = ['Column Twin', 'Column Twin Mirrored'].map((n) => building.Elements.findIndex((e) => e.Name === n));
  // Centre of each twin's -Y face, which faces the camera.
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
  const meshes = await page.evaluate((indices) => {
    const { scene } = window.__ioviewer;
    return indices.map((i) => scene.instance(scene.instancesOf(i)[0]).mesh.id);
  }, twins);
  expect(meshes[0]).not.toBe(meshes[1]); // a mirrored shape is its own cell, with a reversed index
  const plain = await rgb(page, points[0]);
  const mirrored = await rgb(page, points[1]);
  expect(distance(plain, BACKGROUND)).toBeGreaterThan(30);
  expect(distance(mirrored, plain)).toBeLessThanOrEqual(9);
  expect(errors).toEqual([]);
});

test('a sheared instance is shaded as on the merged path', async ({ page, browser }) => {
  const errors = await open(page, 'shear');
  expect(await page.evaluate(() => window.__ioviewer.scene.memory())).toMatchObject({ chunks: 0, instancedInstances: 2 });
  const merged = await browser.newPage({ viewport: page.viewportSize(), locale: 'ru-RU' });
  await open(merged, 'shear');
  expect(await merged.evaluate(() => window.__ioviewer.scene.memory().cells)).toBe(0);
  // Points on four faces of the sheared box (element 0). three's own instance normal ignores shear: before the fix
  // these differed by 15-42 on three of them. Silhouette pixels differ by position rounding, so faces only.
  for (const f of [[0.25, 0, 0.5], [0.75, 0.5, 0.5], [0.25, 0.5, 0.5], [0.75, 1, 0.5]]) {
    const at = await screenAt(page, 0, f);
    const [instanced, reference] = [await rgb(page, at), await rgb(merged, at)];
    expect(distance(reference, BACKGROUND), `${f}`).toBeGreaterThan(30);
    expect(distance(instanced, reference), `${f}`).toBeLessThanOrEqual(3);
  }
  await merged.close();
  expect(errors).toEqual([]);
});

test('wireframe: lines without black pixels, and a click selects the face\'s element', async ({ page }) => {
  const errors = await open(page);
  const materials = await page.screenshot({ clip: VIEW });
  await page.evaluate(() => window.__ioviewer.scene.setDisplayMode('wireframe'));
  await frame(page);
  const png = await page.screenshot({ clip: VIEW });
  expect(png.equals(materials)).toBe(false);
  const data = await decode(page, png);
  let black = 0;
  for (let i = 0; i < data.length; i += 4) if (data[i] + data[i + 1] + data[i + 2] === 0) black++;
  expect(black).toBe(0);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)));
  expect(await selected(page)).toEqual([d2]);
  expect(errors).toEqual([]);
});

test('textures mode on cells changes pixels and returns pixel-identical', async ({ page }) => {
  const errors = await open(page, 'textured');
  expect(await page.evaluate(() => window.__ioviewer.scene.memory().chunks)).toBe(0);
  const shot = async () => {
    await frame(page);
    return page.screenshot({ clip: VIEW });
  };
  const materials = await shot();
  await page.evaluate(() => window.__ioviewer.scene.setDisplayMode('textures'));
  await expect.poll(async () => (await shot()).equals(materials)).toBe(false); // the image decodes asynchronously
  await page.evaluate(() => window.__ioviewer.scene.setDisplayMode('materials'));
  expect((await shot()).equals(materials)).toBe(true);
  expect(errors).toEqual([]);
});
