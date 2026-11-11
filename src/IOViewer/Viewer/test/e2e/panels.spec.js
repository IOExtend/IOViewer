import { test, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
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
    return scene.instanceColor(scene.instancesOf(i)[0]).toArray();
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
    await expect(rows).toHaveText(['Isometric', 'Front', 'Top', 'Duct Clash', 'Plan']);
    await expect(rows.nth(1)).toHaveAttribute('title', 'Front');
    await rows.nth(1).click();
    expect(await page.evaluate(() => window.__ioviewer.camera.isPerspectiveCamera)).toBe(true);
    await expect(page.locator('.ioviewer-tool[data-tool="projection"]')).not.toHaveClass(/active/);
    await settled(page);
    const at = await camera(page);
    expect(near(at.position, viewpoints[1].camera.position)).toBe(true);
    expect(near(at.target, viewpoints[1].camera.target)).toBe(true);

    // «Plan» is an orthographic viewpoint.
    expect(viewpoints[4].camera.projection).toBe('orthographic');
    await rows.nth(4).click();
    expect(await page.evaluate(() => window.__ioviewer.camera.isOrthographicCamera)).toBe(true);
    await expect(page.locator('.ioviewer-tool[data-tool="projection"]')).toHaveClass(/active/);
    await settled(page);
    expect(near((await camera(page)).target, viewpoints[4].camera.target)).toBe(true);
    expect(errors).toEqual([]);
  });

  test('the tour goes from view to view and stops on a mouse press or a key', async ({ page }) => {
    test.setTimeout(40000);
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

    // Enter on the focused button stops the tour and it stays stopped.
    await tour.click();
    await at(0);
    await tour.focus();
    await page.keyboard.press('Enter');
    await expect(tour).toHaveAttribute('aria-pressed', 'false');
    const held = await camera(page);
    await page.waitForTimeout(3500);
    await expect(tour).toHaveAttribute('aria-pressed', 'false');
    expect(await camera(page)).toEqual(held);
    expect(errors).toEqual([]);
  });
});

test.describe('4D', () => {
  test('at the start date future work is hidden and active work is green; closing leaves the user state', async ({ page }) => {
    const errors = await open(page);
    const slab = await indexOf(page, 'Ground Slab');
    const column = await indexOf(page, 'Column A1 Level 1');
    const roof = await indexOf(page, 'Roof Slab');
    const duct = await indexOf(page, 'Supply Duct SA-1');
    const twin = await indexOf(page, 'Column Twin');
    // The user hid the twin (not in the schedule) before opening the player.
    await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), twin);
    const slabColor = await colorOf(page, slab);

    await rail(page, 'timeliner').click();
    const panel = sidePanel(page, 'timeliner');
    const tasks = panel.locator('.ioviewer-task');
    await expect(tasks).toHaveCount(7);
    await expect(tasks.first().locator('.ioviewer-row-name')).toHaveText('Ground slab');
    const dates = await page.evaluate(() => {
      const f = new Intl.DateTimeFormat(undefined, { dateStyle: 'short', timeZone: 'UTC' });
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
      await page.evaluate(() => new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeZone: 'UTC' }).format(Date.parse('2026-03-25T08:00:00Z'))),
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
    // The user's Show all stays; nothing is hidden any more.
    expect((await visibility(page)).every((v) => v === 1)).toBe(true);
    for (const i of [slab, beam, duct]) expect(near(await colorOf(page, i), await css(page, '#22c55e'), 1e-6)).toBe(false);
    expect(near(await colorOf(page, slab), slabColor, 1e-6)).toBe(true);
    expect(errors).toEqual([]);
  });
});

test.describe('4D layers', () => {
  const setDate = (page, iso) => page.evaluate((iso) => window.__ioviewer.timeliner.setDate(Date.parse(iso)), iso);
  const elementsShown = (page) =>
    page.evaluate(() => {
      const { scene } = window.__ioviewer;
      return [...Array(scene.elementCount).keys()].filter((i) => scene.isVisible(i));
    });

  test('isolating during 4D keeps later work hidden; closing leaves the isolation', async ({ page }) => {
    const errors = await open(page);
    const slab = await indexOf(page, 'Ground Slab');
    const column = await indexOf(page, 'Column A1 Level 1');
    await page.evaluate(() => window.__ioviewer.timeliner.open());
    expect(await visible(page, column)).toBe(false);
    await page.evaluate((i) => window.__ioviewer.scene.isolate([i]), slab);
    await setDate(page, '2026-03-15T00:00:00Z'); // past the start of «Columns Level 1»
    expect(await visible(page, column)).toBe(false);
    expect(await elementsShown(page)).toEqual([slab]);
    await page.evaluate(() => window.__ioviewer.timeliner.close());
    expect(await elementsShown(page)).toEqual([slab]);
    expect(errors).toEqual([]);
  });

  test('a link unchecked while 4D hides its element stays off as the schedule moves on and after closing', async ({ page }) => {
    const errors = await open(page);
    const duct = await indexOf(page, 'Supply Duct SA-1');
    const twin = await indexOf(page, 'Column Twin');
    await page.evaluate(() => window.__ioviewer.timeliner.open());
    expect(await visible(page, duct)).toBe(false); // «Supply duct» has not started
    await rail(page, 'links').click();
    const links = sidePanel(page, 'links').locator('.ioviewer-link');
    const structure = links.nth(0).getByRole('checkbox');
    const mep = links.nth(1).getByRole('checkbox');
    await expect(mep).toBeChecked();
    await mep.uncheck();
    await setDate(page, '2026-05-01T08:00:00Z');
    expect(await visible(page, duct)).toBe(false);
    await expect(mep).not.toBeChecked();
    await expect(structure).toBeChecked(); // its own state, though 4D had hidden most of its elements
    await page.evaluate((i) => window.__ioviewer.scene.setVisible([i], false), twin); // the user, meanwhile

    await page.evaluate(() => window.__ioviewer.timeliner.close());
    const count = await page.evaluate(() => window.__ioviewer.scene.elementCount);
    expect(await elementsShown(page)).toEqual([...Array(count).keys()].filter((i) => i !== duct && i !== twin));
    await expect(mep).not.toBeChecked();
    await mep.check();
    expect(await visible(page, duct)).toBe(true);
    expect(errors).toEqual([]);
  });
});

test.describe('4D dates west of UTC', () => {
  // 08:00Z is still the same day in New York; Honolulu (UTC-10) is where a local-time format would show the day before.
  test.use({ timezoneId: 'Pacific/Honolulu' });

  test('the schedule shows its dates as written, not shifted by the time zone', async ({ page }) => {
    const errors = await open(page);
    await rail(page, 'timeliner').click();
    const first = sidePanel(page, 'timeliner').locator('.ioviewer-task').first();
    await expect(first.locator('.ioviewer-task-dates')).toHaveText('02.03.2026 – 12.03.2026');
    await page.evaluate(() => window.__ioviewer.timeliner.open());
    await expect(page.locator('.ioviewer-player-date')).toHaveText('2 мар. 2026 г.');
    expect(errors).toEqual([]);
  });
});

test.describe('malformed 4D', () => {
  test('bad tasks are left out and the viewer and the player still work', async ({ page }) => {
    const html = readFileSync(path.join(viewerDir, 'test-results', 'building.html'), 'utf8');
    const tag = '<script id="ioviewer-meta" type="application/json">';
    const start = html.indexOf(tag) + tag.length;
    const end = html.indexOf('</script>', start);
    const data = JSON.parse(html.slice(start, end));
    const bad = (id, name, dates) => ({ id, name, type: 'construct', progress: 0, attachedElements: [300002], ...dates });
    data.timeliner.start = '0001-01-01T00:00:00Z';
    data.timeliner.tasks.unshift(
      bad('B1', 'No dates', {}),
      bad('B2', 'Default year', { start: '0001-01-01T00:00:00Z', end: '2026-03-03T00:00:00Z' }),
      bad('B3', 'Reversed', { start: '2026-03-10T00:00:00Z', end: '2026-03-05T00:00:00Z' }),
      bad('B4', 'Invalid', { start: 'soon', end: '2026-03-05T00:00:00Z' }),
      { ...bad('B5', 'Unknown ids', { start: '2026-03-02T08:00:00Z', end: '2026-03-05T00:00:00Z' }), attachedElements: [999999] },
    );
    writeFileSync(path.join(viewerDir, 'test-results', 'bad-4d.html'), html.slice(0, start) + JSON.stringify(data) + html.slice(end));

    const errors = await open(page, 'bad-4d');
    await rail(page, 'timeliner').click();
    const names = sidePanel(page, 'timeliner').locator('.ioviewer-task .ioviewer-row-name');
    await expect(names).toHaveCount(8);
    await expect(names.first()).toHaveText('Unknown ids');
    await page.evaluate(() => window.__ioviewer.timeliner.open());
    expect(await page.locator('.ioviewer-player-slider').getAttribute('min')).toBe(String(Date.parse('2026-03-02T08:00:00Z')));
    expect(await visible(page, await indexOf(page, 'Ground Slab'))).toBe(true);
    expect(await visible(page, await indexOf(page, 'Column A1 Level 1'))).toBe(false);
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

    // Show all is the user's: it does not bring back an unchecked file.
    await mep.uncheck();
    await page.evaluate(() => window.__ioviewer.scene.showAll()); // Shift+H: the focused checkbox keeps the hotkeys off
    await expect(mep).not.toBeChecked();
    expect(await visible(page, duct)).toBe(false);
    expect(await visible(page, column)).toBe(true);
    expect(errors).toEqual([]);
  });
});
