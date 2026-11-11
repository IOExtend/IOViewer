import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

const SHOTS = path.resolve(viewerDir, '../../../.superpowers/sdd/2026-11-11-viewer-redesign-plan');

async function open(page, name = 'building') {
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  return errors;
}

const frame = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const meta = (page) => page.evaluate(() => JSON.parse(document.getElementById('ioviewer-meta').textContent));
const indexOf = (page, name) =>
  page.evaluate((n) => JSON.parse(document.getElementById('ioviewer-meta').textContent).elements.findIndex((e) => e.name === n), name);
const selected = (page) => page.evaluate(() => [...window.__ioviewer.selection.values()]);
const visible = (page, i) => page.evaluate((i) => window.__ioviewer.scene.isVisible(i), i);
const visibility = (page) => page.evaluate(() => [...window.__ioviewer.scene.visibilityState()]);
const rail = (page, name) => page.locator(`.ioviewer-rail-button[data-panel="${name}"]`);
const sidePanel = (page, name) => page.locator(`.ioviewer-side-panel[data-panel="${name}"]`);
const camera = (page) =>
  page.evaluate(() => ({ position: window.__ioviewer.camera.position.toArray(), target: window.__ioviewer.controls.target.toArray() }));
const settled = (page) => page.waitForFunction(() => !window.__ioviewer.controls.animating);
const near = (a, b, tolerance = 1e-3) => a.every((v, i) => Math.abs(v - b[i]) <= tolerance);
// Colour of the first instance of element i, and a colour in the same (linear) space from a CSS colour.
const colorOf = (page, i) =>
  page.evaluate((i) => {
    const { scene } = window.__ioviewer;
    const { mesh, batchId } = scene.instance(scene.instancesOf(i)[0]);
    return mesh.getColorAt(batchId, mesh.material.color.clone()).toArray();
  }, i);
const css = (page, color) => page.evaluate((c) => window.__ioviewer.scene.instance(0).mesh.material.color.clone().set(c).toArray(), color);

test.describe('clashes', () => {
  test('clicking Clash 1 selects the duct and the beam, flies to the point and marks it until the panel closes', async ({ page }) => {
    const errors = await open(page);
    const { clashTests } = await meta(page);
    const duct = await indexOf(page, 'Supply Duct SA-1');
    const beam = await indexOf(page, 'Beam B-C/1 Level 2');
    await rail(page, 'clashes').click();
    const panel = sidePanel(page, 'clashes');
    await expect(panel.locator('.ioviewer-clash-header')).toHaveText('Duct vs Structure (3)');
    const rows = panel.locator('.ioviewer-clash');
    await expect(rows.locator('.ioviewer-row-name')).toHaveText(['Clash 1', 'Clash 2', 'Clash 3']);
    await expect(rows.first().locator('.ioviewer-clash-status')).toHaveText('Новая');
    await expect(rows.first().locator('.ioviewer-clash-status')).toHaveAttribute('data-status', 'New');
    await expect(rows.first().locator('.ioviewer-clash-distance')).toHaveText('-0,15 м');
    await expect(rows.first()).toHaveAttribute('title', 'Clash 1: Supply Duct SA-1 — Beam B-C/1 Level 2');
    expect(await rows.first().locator('.ioviewer-row-name').evaluate((n) => getComputedStyle(n).textOverflow)).toBe('ellipsis');

    const before = await camera(page);
    const direction = before.position.map((v, i) => v - before.target[i]);
    await rows.first().click();
    expect(await selected(page)).toEqual([duct, beam]);
    await expect(rows.first()).toHaveAttribute('aria-current', 'true');
    await settled(page);
    const point = clashTests[0].clashes[0].point;
    const after = await camera(page);
    expect(near(after.target, point)).toBe(true);
    // From the same direction, at 3× the larger element (the 14 m duct).
    const offset = after.position.map((v, i) => v - point[i]);
    expect(Math.hypot(...offset)).toBeCloseTo(42, 3);
    const unit = (v) => v.map((c) => c / Math.hypot(...v));
    expect(near(unit(offset), unit(direction), 1e-6)).toBe(true);
    const marker = () =>
      page.evaluate(() => {
        const { clashes, controls } = window.__ioviewer;
        const position = clashes.group.children[0].geometry.attributes.position;
        return { shown: clashes.group.visible, at: [position.getX(0), position.getY(0), position.getZ(0)], bounds: controls._extraBounds.has('clash') };
      });
    let m = await marker();
    expect(m.shown && m.bounds).toBe(true);
    expect(near(m.at, point)).toBe(true);
    expect(await page.evaluate(() => window.__ioviewer.scene.root.getObjectByName('clash-marker'))).toBeFalsy();
    await frame(page);
    await page.screenshot({ path: path.join(SHOTS, 'task-11-screenshot-clash.png') });

    // Esc clears the selection but the marker stays; another clash moves it.
    await page.keyboard.press('Escape');
    expect(await selected(page)).toEqual([]);
    expect((await marker()).shown).toBe(true);
    await rows.nth(2).click();
    await settled(page);
    m = await marker();
    expect(near(m.at, clashTests[0].clashes[2].point)).toBe(true);
    await expect(rows.first()).not.toHaveAttribute('aria-current', 'true');
    expect(await selected(page)).toEqual([duct, await indexOf(page, 'Beam B-C/3 Level 2')]);

    // The header folds the test.
    await panel.locator('.ioviewer-clash-header').click();
    await expect(rows.first()).toBeHidden();
    await expect(panel.locator('.ioviewer-clash-header')).toHaveAttribute('aria-expanded', 'false');

    await rail(page, 'clashes').click();
    m = await marker();
    expect(m.shown || m.bounds).toBe(false);
    expect(errors).toEqual([]);
  });
});

test.describe('views', () => {
  test('a view flies the camera there and switches back to perspective', async ({ page }) => {
    const errors = await open(page);
    const { viewpoints } = await meta(page);
    await page.locator('.ioviewer-tool[data-tool="projection"]').click();
    expect(await page.evaluate(() => window.__ioviewer.camera.isOrthographicCamera)).toBe(true);
    await rail(page, 'views').click();
    const rows = sidePanel(page, 'views').locator('.ioviewer-view');
    await expect(rows).toHaveText(['Isometric', 'Front', 'Top', 'Duct Clash']);
    await expect(rows.nth(1)).toHaveAttribute('title', 'Front');
    await rows.nth(1).click();
    expect(await page.evaluate(() => window.__ioviewer.camera.isPerspectiveCamera)).toBe(true);
    await expect(page.locator('.ioviewer-tool[data-tool="projection"]')).not.toHaveClass(/active/);
    await settled(page);
    const at = await camera(page);
    expect(near(at.position, viewpoints[1].camera.position)).toBe(true);
    expect(near(at.target, viewpoints[1].camera.target)).toBe(true);
    expect(errors).toEqual([]);
  });

  test('the tour goes from view to view and stops on a mouse press or a key', async ({ page }) => {
    test.setTimeout(30000);
    const errors = await open(page);
    const { viewpoints } = await meta(page);
    const at = (i) =>
      page.waitForFunction(
        ([p, t]) => {
          const { camera, controls } = window.__ioviewer;
          return !controls.animating && camera.position.distanceTo({ x: p[0], y: p[1], z: p[2] }) < 1e-3 && controls.target.distanceTo({ x: t[0], y: t[1], z: t[2] }) < 1e-3;
        },
        [viewpoints[i].camera.position, viewpoints[i].camera.target],
        { timeout: 6000 },
      );
    await rail(page, 'views').click();
    const tour = sidePanel(page, 'views').locator('.ioviewer-tour');
    await expect(tour).toHaveText('Тур по видам');
    await tour.click();
    await expect(tour).toHaveText('Остановить тур');
    await expect(tour).toHaveAttribute('aria-pressed', 'true');
    await at(0);
    const reached = Date.now();
    await at(1); // after the 3 s pause
    expect(Date.now() - reached).toBeGreaterThanOrEqual(2900);

    await page.mouse.move(700, 300);
    await page.mouse.down();
    await page.mouse.up();
    await expect(tour).toHaveText('Тур по видам');
    const stopped = await camera(page);
    await page.waitForTimeout(3600);
    expect(await camera(page)).toEqual(stopped);

    // A key stops it too; the tour button itself toggles it.
    await tour.click();
    await at(0);
    await page.keyboard.press('KeyA');
    await expect(tour).toHaveAttribute('aria-pressed', 'false');
    await tour.click();
    await expect(tour).toHaveAttribute('aria-pressed', 'true');
    await tour.click();
    await expect(tour).toHaveAttribute('aria-pressed', 'false');
    expect(errors).toEqual([]);
  });
});

test.describe('4D', () => {
  test('at the start date future work is hidden and active work is green; closing restores the view', async ({ page }) => {
    const errors = await open(page);
    const slab = await indexOf(page, 'Ground Slab');
    const column = await indexOf(page, 'Column A1 Level 1');
    const roof = await indexOf(page, 'Roof Slab');
    const duct = await indexOf(page, 'Supply Duct SA-1');
    const twin = await indexOf(page, 'Column Twin');
    // The user hid the twin (not in the schedule) before opening the player.
    await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), twin);
    const before = await visibility(page);
    const slabColor = await colorOf(page, slab);

    await rail(page, 'timeliner').click();
    const panel = sidePanel(page, 'timeliner');
    const tasks = panel.locator('.ioviewer-task');
    await expect(tasks).toHaveCount(7);
    await expect(tasks.first().locator('.ioviewer-row-name')).toHaveText('Ground slab');
    const dates = await page.evaluate(() => {
      const f = new Intl.DateTimeFormat(undefined, { dateStyle: 'short' });
      return `${f.format(Date.parse('2026-03-02T08:00:00Z'))} – ${f.format(Date.parse('2026-03-12T08:00:00Z'))}`;
    });
    await expect(tasks.first().locator('.ioviewer-task-dates')).toHaveText(dates);
    await expect(tasks.first()).toHaveAttribute('data-type', 'construct');

    const player = page.locator('.ioviewer-player');
    await expect(player).toBeHidden();
    await panel.locator('.ioviewer-player-open').click();
    await expect(player).toBeVisible();
    await player.getByRole('button', { name: 'Пауза' }).click();
    await expect(player.getByRole('button', { name: 'Воспроизвести' })).toBeVisible();
    const start = Date.parse('2026-03-02T08:00:00Z');
    const date = await page.evaluate(() => window.__ioviewer.timeliner.date);
    expect(date - start).toBeLessThan(86400000); // under a day of schedule time at 1×

    expect(await visible(page, slab)).toBe(true);
    for (const i of [column, roof, duct]) expect(await visible(page, i)).toBe(false);
    expect(await visible(page, twin)).toBe(false); // still the user's
    expect(near(await colorOf(page, slab), await css(page, '#22c55e'), 1e-6)).toBe(true);

    // The highlight wins over the tint, and the tint comes back after it.
    await page.evaluate((i) => window.__ioviewer.selection.set([i]), slab);
    expect(near(await colorOf(page, slab), await css(page, '#f59e0b'), 1e-6)).toBe(true);
    await page.evaluate(() => window.__ioviewer.selection.clear());
    expect(near(await colorOf(page, slab), await css(page, '#22c55e'), 1e-6)).toBe(true);

    // Show all while the player is open does not bring back future work.
    await page.keyboard.press('Shift+H');
    expect(await visible(page, twin)).toBe(true);
    for (const i of [column, roof, duct]) expect(await visible(page, i)).toBe(false);

    // Mid-schedule (T3 Beams and slab Level 2 active): earlier work shown and plain, T3 green, later work hidden.
    await page.evaluate(() => window.__ioviewer.timeliner.setDate(Date.parse('2026-03-25T08:00:00Z')));
    const beam = await indexOf(page, 'Beam A-B/1 Level 2');
    expect(await visible(page, column)).toBe(true);
    expect(near(await colorOf(page, slab), slabColor, 1e-6)).toBe(true);
    expect(near(await colorOf(page, beam), await css(page, '#22c55e'), 1e-6)).toBe(true);
    expect(await visible(page, roof)).toBe(false);
    await expect(player.locator('.ioviewer-player-date')).toHaveText(
      await page.evaluate(() => new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(Date.parse('2026-03-25T08:00:00Z'))),
    );
    // The player sits above the toolbar, and the open panel ends above the player.
    const bar = await player.boundingBox();
    const toolbar = await page.locator('.ioviewer-toolbar').boundingBox();
    expect(bar.y + bar.height).toBeLessThan(toolbar.y);
    const side = await panel.boundingBox();
    expect(side.y + side.height).toBeLessThan(bar.y);
    await frame(page);
    await page.screenshot({ path: path.join(SHOTS, 'task-11-screenshot-4d.png') });

    // Playing at 15× reaches the end and stops there with everything built.
    await player.getByRole('button', { name: '15×' }).click();
    await player.getByRole('button', { name: 'Воспроизвести' }).click();
    await page.waitForFunction(() => window.__ioviewer.timeliner.date === Date.parse('2026-05-01T08:00:00Z'), null, { timeout: 8000 });
    await expect(player.getByRole('button', { name: 'Воспроизвести' })).toBeVisible();
    for (const i of [column, roof, duct]) expect(await visible(page, i)).toBe(true);

    await player.getByRole('button', { name: 'Закрыть' }).click();
    await expect(player).toBeHidden();
    expect(await visibility(page)).toEqual(before);
    for (const i of [slab, beam, duct]) expect(near(await colorOf(page, i), await css(page, '#22c55e'), 1e-6)).toBe(false);
    expect(near(await colorOf(page, slab), slabColor, 1e-6)).toBe(true);
    expect(errors).toEqual([]);
  });
});

test.describe('links', () => {
  test('unchecking a link hides its elements; checking shows them again but not those the user hid', async ({ page }) => {
    const errors = await open(page);
    const duct = await indexOf(page, 'Supply Duct SA-1');
    const column = await indexOf(page, 'Column A1 Level 1');
    const twin = await indexOf(page, 'Column Twin');
    const slab = await indexOf(page, 'Ground Slab');
    await rail(page, 'links').click();
    const rows = sidePanel(page, 'links').locator('.ioviewer-link');
    await expect(rows.locator('.ioviewer-row-name')).toHaveText(['Structure', 'MEP']);
    await expect(rows.locator('.ioviewer-row-count')).toHaveText(['60', '1']);
    await expect(rows.nth(1)).toHaveAttribute('title', 'MEP (MEP.rvt)');
    const mep = rows.nth(1).getByRole('checkbox');
    const structure = rows.nth(0).getByRole('checkbox');

    await mep.uncheck();
    expect(await visible(page, duct)).toBe(false);
    expect(await visible(page, column)).toBe(true);
    await mep.check();
    expect(await visible(page, duct)).toBe(true);

    await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), column);
    await structure.uncheck();
    for (const i of [column, twin]) expect(await visible(page, i)).toBe(false);
    expect(await visible(page, slab)).toBe(true);
    await structure.check();
    expect(await visible(page, twin)).toBe(true);
    expect(await visible(page, column)).toBe(false);

    // Show all brings the elements back, and the box follows.
    await mep.uncheck();
    await page.evaluate(() => window.__ioviewer.scene.showAll()); // Shift+H: the focused checkbox keeps the hotkeys off
    await expect(mep).toBeChecked();
    expect(errors).toEqual([]);
  });
});
