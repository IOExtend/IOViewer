import { test, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir, LARGE_ELEMENTS } from './global-setup.js';

const page$ = (name) => pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href;

async function open(page, name = 'building') {
  const errors = [];
  page.on('console', (message) => message.type() === 'error' && errors.push(message.text()));
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(page$(name));
  await page.evaluate(() => window.__ioviewer.ready);
  return errors;
}

const frame = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
const indexOf = (page, name) =>
  page.evaluate((n) => JSON.parse(document.getElementById('ioviewer-meta').textContent).elements.findIndex((e) => e.name === n), name);
const idOf = (page, i) => page.evaluate((i) => window.__ioviewer.scene.elementId(i), i);
const selected = (page) => page.evaluate(() => [...window.__ioviewer.selection.values()]);
const visible = (page, i) => page.evaluate((i) => window.__ioviewer.scene.isVisible(i), i);
const screenAt = (page, index) =>
  page.evaluate((i) => {
    const { scene, camera } = window.__ioviewer;
    const box = scene.elementBox(i);
    const p = box.getCenter(box.min.clone()).project(camera);
    return [((p.x + 1) / 2) * innerWidth, ((1 - p.y) / 2) * innerHeight];
  }, index);
const pixel = (page, [x, y]) => page.screenshot({ clip: { x: Math.round(x) - 1, y: Math.round(y) - 1, width: 3, height: 3 } });
const blank = [100, 15]; // background: right of the panel rail, far from the fitted model

const menu = (page) => page.locator('.ioviewer-context-menu');
const menuItem = (page, text) => menu(page).locator('.ioviewer-menu-item', { hasText: text });
const rail = (page, name) => page.locator(`.ioviewer-rail-button[data-panel="${name}"]`);
const sidePanel = (page, name) => page.locator(`.ioviewer-side-panel[data-panel="${name}"]`);
const rows = (page) => page.locator('.tree-row');

test('right click on a column selects it and opens the element menu; Hide removes it, Shift+H brings it back', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const at = await screenAt(page, d2);
  const before = await pixel(page, at);

  await page.mouse.click(...at, { button: 'right' });
  await expect(menu(page)).toBeVisible();
  expect(await selected(page)).toEqual([d2]);
  await expect(menu(page).locator('.ioviewer-menu-item span')).toHaveText([
    'Свойства', 'Скрыть', 'Изолировать', 'Показать всё', 'Приблизить к объекту', 'Бокс сечения по объекту', 'Копировать Id',
  ]);
  await expect(menuItem(page, 'Скрыть').locator('kbd')).toHaveText('H');
  await expect(menuItem(page, 'Бокс сечения по объекту')).toBeEnabled();

  await menuItem(page, 'Скрыть').click();
  await expect(menu(page)).toBeHidden();
  expect(await visible(page, d2)).toBe(false);
  await frame(page);
  expect((await pixel(page, at)).equals(before)).toBe(false);

  await page.keyboard.press('Shift+KeyH');
  expect(await visible(page, d2)).toBe(true);
  await page.keyboard.press('Escape'); // drop the highlight to compare with the first picture
  await frame(page);
  expect((await pixel(page, at)).equals(before)).toBe(true);
  expect(errors).toEqual([]);
});

test('right click on nothing opens the short menu; Esc, an outside click and the wheel close it', async ({ page }) => {
  await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d3 = await indexOf(page, 'Column D3 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)));

  await page.mouse.click(...blank, { button: 'right' });
  await expect(menu(page).locator('.ioviewer-menu-item span')).toHaveText(['Показать всё', 'Вписать всё', 'Сбросить сечения']);
  expect(await selected(page)).toEqual([d2]); // the short menu keeps the selection
  // Esc with the menu open closes only the menu; the next Esc clears the selection.
  await page.keyboard.press('Escape');
  await expect(menu(page)).toBeHidden();
  expect(await selected(page)).toEqual([d2]);
  await page.keyboard.press('Escape');
  expect(await selected(page)).toEqual([]);

  // A click outside the menu only dismisses it: clicking another column neither selects it nor clears.
  await page.mouse.click(...(await screenAt(page, d2)));
  await page.mouse.click(...blank, { button: 'right' });
  await page.mouse.click(...(await screenAt(page, d3)));
  await expect(menu(page)).toBeHidden();
  expect(await selected(page)).toEqual([d2]);
  await page.mouse.click(...(await screenAt(page, d3))); // the next click works as usual
  expect(await selected(page)).toEqual([d3]);
  // The same for a tree row under the press.
  await rail(page, 'model').click();
  await sidePanel(page, 'model').locator('.ioviewer-tree').evaluate((t) => (t.scrollTop = 0)); // it scrolled to D3
  const ducts = await rows(page).filter({ hasText: 'Ducts' }).boundingBox();
  await page.mouse.click(1000, 40, { button: 'right' }); // background clear of the open panel and the view cube
  await expect(menu(page)).toBeVisible();
  await page.mouse.click(ducts.x + 20, ducts.y + ducts.height / 2); // press on the Ducts category header
  await expect(menu(page)).toBeHidden();
  await expect(rows(page).filter({ hasText: 'Supply Duct SA-1' })).toHaveCount(0); // the category did not expand
  expect(await selected(page)).toEqual([d3]);

  await page.mouse.click(1000, 40, { button: 'right' });
  await page.mouse.wheel(0, 100);
  await expect(menu(page)).toBeHidden();
});

test('the menu stays open when the tree scrolls to reveal the right-clicked element', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });
  await open(page);
  await rail(page, 'model').click();
  const tree = sidePanel(page, 'model').locator('.ioviewer-tree');
  expect(await tree.evaluate((t) => t.scrollTop)).toBe(0);
  const twin = await indexOf(page, 'Column Twin');
  await page.mouse.click(...(await screenAt(page, twin)), { button: 'right' });
  expect(await selected(page)).toEqual([twin]);
  await expect(rows(page).filter({ hasText: /^Column Twin(?! Mirrored)/ })).toHaveClass(/selected/);
  expect(await tree.evaluate((t) => t.scrollTop)).toBeGreaterThan(0); // the row was below the fold
  await page.waitForTimeout(300);
  await expect(menu(page)).toBeVisible();
});

test('the menu stays inside the window near its corner', async ({ page }) => {
  await open(page);
  const { width, height } = page.viewportSize();
  await page.mouse.click(width - 5, height - 120, { button: 'right' });
  const box = await menu(page).boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.y).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(width);
  expect(box.y + box.height).toBeLessThanOrEqual(height);
});

test('hotkeys: I isolates, H hides, Shift+H shows all, F zooms to the selection; ignored while typing', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d3 = await indexOf(page, 'Column D3 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)));

  await page.keyboard.press('KeyI');
  expect([await visible(page, d2), await visible(page, d3)]).toEqual([true, false]);
  await page.keyboard.press('Shift+KeyH');
  expect(await visible(page, d3)).toBe(true);

  const distance = () => page.evaluate(() => window.__ioviewer.camera.position.distanceTo(window.__ioviewer.controls.target));
  const far = await distance();
  await page.keyboard.press('KeyF');
  const offCentre = () =>
    page.evaluate((i) => {
      const { scene, controls } = window.__ioviewer;
      const box = scene.elementBox(i);
      return box.getCenter(box.min.clone()).distanceTo(controls.target);
    }, d2);
  await expect.poll(offCentre).toBeLessThan(1e-6);
  expect(await distance()).toBeLessThan(far / 2);

  // Typing "h" in the tree search must not hide anything.
  await rail(page, 'model').click();
  await sidePanel(page, 'model').locator('input').fill('');
  await sidePanel(page, 'model').locator('input').press('KeyH');
  expect(await visible(page, d2)).toBe(true);
  await page.mouse.click(...blank); // leaves the field; H now hides
  await page.mouse.click(...(await screenAt(page, d2)));
  await page.keyboard.press('KeyH');
  expect(await visible(page, d2)).toBe(false);
  expect(errors).toEqual([]);
});

test('a press in the 3D view or on the view cube takes focus from a panel field or a toolbar button: hotkeys work', async ({ page }) => {
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await rail(page, 'model').click();
  const search = sidePanel(page, 'model').locator('input');
  await search.click();
  await page.keyboard.type('col');
  await search.fill('');
  await expect(search).toBeFocused();
  await page.mouse.click(...(await screenAt(page, d2)));
  expect(await selected(page)).toEqual([d2]);
  await page.keyboard.press('KeyH');
  expect(await visible(page, d2)).toBe(false);
  await expect(search).toHaveValue('');
  await page.keyboard.press('Escape');
  expect(await selected(page)).toEqual([]);

  // A toolbar button does not keep the focus after a press in the view: Enter does not fire it again.
  await page.locator('.ioviewer-tool[data-tool="fit"]').click();
  await page.mouse.click(...blank);
  expect(await page.evaluate(() => document.activeElement === document.body)).toBe(true);

  // Nor does the view cube leave it in a field.
  await search.click();
  await page.locator('.ioviewer-viewcube-canvas').click({ position: { x: 3, y: 3 } });
  await expect(search).not.toBeFocused();
  expect(errors).toEqual([]);
});

test('F with nothing selected fits everything', async ({ page }) => {
  await open(page);
  const fitted = () => page.evaluate(() => window.__ioviewer.controls.target.toArray());
  const start = await fitted();
  await page.evaluate(() => window.__ioviewer.controls.zoomToBox(window.__ioviewer.scene.elementBox(1)));
  await expect.poll(async () => (await fitted())[0]).not.toBeCloseTo(start[0], 3);
  await page.keyboard.press('KeyF');
  await expect.poll(async () => Math.max(...(await fitted()).map((v, k) => Math.abs(v - start[k])))).toBeLessThan(1e-6);
});

test('rail: data panels show only with data; one panel at a time; the active icon closes it', async ({ page }) => {
  await open(page);
  for (const name of ['model', 'views', 'clashes', 'timeliner', 'links']) await expect(rail(page, name)).toBeVisible();
  await expect(rail(page, 'clashes')).toHaveAttribute('title', 'Коллизии');

  await rail(page, 'model').click();
  await expect(sidePanel(page, 'model')).toBeVisible();
  await rail(page, 'clashes').click();
  await expect(sidePanel(page, 'model')).toBeHidden();
  await expect(sidePanel(page, 'clashes')).toContainText('Duct vs Structure (3)');
  await expect(rail(page, 'clashes')).toHaveClass(/active/);
  await rail(page, 'clashes').click();
  await expect(sidePanel(page, 'clashes')).toBeHidden();
  await rail(page, 'timeliner').click();
  await page.keyboard.press('Escape'); // Esc leaves panels alone
  await expect(sidePanel(page, 'timeliner')).toBeVisible();
  await sidePanel(page, 'timeliner').getByRole('button', { name: 'Закрыть' }).click();
  await expect(sidePanel(page, 'timeliner')).toBeHidden();
});

test('rail: a model without clashes, 4D, links and views shows only the model panel', async ({ page }) => {
  await open(page, 'escaping');
  await expect(rail(page, 'model')).toBeVisible();
  for (const name of ['views', 'clashes', 'timeliner', 'links']) await expect(rail(page, name)).toBeHidden();
});

test('tree: categories collapsed with counts; a row click selects and zooms; selecting in 3D reveals the row', async ({ page }) => {
  const errors = await open(page);
  await rail(page, 'model').click();
  const columns = rows(page).filter({ hasText: 'Structural Columns' });
  await expect(columns.locator('.tree-count')).toHaveText('26');
  await expect(rows(page)).toHaveCount(7); // only category headers, the survey marker's empty category included

  await columns.click();
  const d2 = await indexOf(page, 'Column D2 Level 1');
  const d2Row = rows(page).filter({ hasText: 'Column D2 Level 1' });
  await expect(d2Row.locator('.tree-type')).toHaveText('Concrete 400x400');
  const target = () => page.evaluate(() => window.__ioviewer.controls.target.toArray());
  const before = await target();
  await d2Row.click();
  expect(await selected(page)).toEqual([d2]);
  await expect(d2Row).toHaveClass(/selected/);
  await expect.poll(target).not.toEqual(before);

  // Selecting the duct in 3D expands Ducts and highlights its row; the panel stays above the toolbar.
  const duct = await indexOf(page, 'Supply Duct SA-1');
  await page.evaluate((i) => window.__ioviewer.selection.set([i]), duct);
  await expect(rows(page).filter({ hasText: 'Supply Duct SA-1' })).toHaveClass(/selected/);
  await expect(d2Row).not.toHaveClass(/selected/);

  // Hidden elements are dimmed.
  await page.keyboard.press('KeyH');
  await expect(rows(page).filter({ hasText: 'Supply Duct SA-1' })).toHaveClass(/tree-hidden/);
  expect(errors).toEqual([]);
});

test('tree: search by Id, type and name flattens the matches', async ({ page }) => {
  await open(page);
  await rail(page, 'model').click();
  const search = sidePanel(page, 'model').locator('input');
  await expect(search).toHaveAttribute('placeholder', 'Поиск по имени, типу, Id…');
  await search.fill('300063');
  await expect(rows(page)).toHaveText(['Supply Duct SA-1Rectangular 600x400']);
  await search.fill('2XQ$N5SLP');
  await expect(rows(page)).toHaveText(['Supply Duct SA-1Rectangular 600x400']);
  await search.fill('steel i');
  await expect(rows(page)).toHaveCount(34);
  await search.fill('column d2');
  await expect(rows(page)).toHaveCount(2);
  await search.fill('nothing like this');
  await expect(rows(page)).toHaveCount(0);
  await expect(sidePanel(page, 'model')).toContainText('Ничего не найдено');
});

test(`tree: ${LARGE_ELEMENTS} rows scroll with fewer than 200 row nodes`, async ({ page }) => {
  const errors = await open(page, 'large');
  await rail(page, 'model').click();
  await sidePanel(page, 'model').locator('input').fill('segment');
  const tree = sidePanel(page, 'model').locator('.ioviewer-tree');
  expect(await tree.evaluate((t) => t.scrollHeight)).toBe(LARGE_ELEMENTS * 24);
  for (const fraction of [0, 0.25, 0.5, 1]) {
    await tree.evaluate((t, f) => (t.scrollTop = (t.scrollHeight - t.clientHeight) * f), fraction);
    await frame(page);
    const count = await rows(page).count();
    expect(count).toBeGreaterThan(0);
    expect(count).toBeLessThan(200);
  }
  await expect(rows(page).last()).toContainText(`Pipe ${LARGE_ELEMENTS - 1}`);
  // The open panel ends above the toolbar.
  const panel = await sidePanel(page, 'model').boundingBox();
  const toolbar = await page.locator('.ioviewer-toolbar').boundingBox();
  expect(panel.y + panel.height).toBeLessThan(toolbar.y);
  expect(errors).toEqual([]);
});

test('toolbar: grouped tools, orbit active, pan and projection switch, tools carry a tooltip', async ({ page }) => {
  await open(page);
  await expect(page.locator('.ioviewer-toolbar-label')).toHaveText(['Навигация', 'Сечения', 'Измерения', 'Отображение', 'Вид']);
  const tool = (id) => page.locator(`.ioviewer-tool[data-tool="${id}"]`);
  await expect(tool('orbit')).toHaveClass(/active/);

  await tool('pan').click();
  expect(await page.evaluate(() => window.__ioviewer.controls.leftButtonMode)).toBe('pan');
  await expect(tool('pan')).toHaveClass(/active/);
  await expect(tool('orbit')).not.toHaveClass(/active/);

  await tool('projection').click();
  expect(await page.evaluate(() => window.__ioviewer.camera.isOrthographicCamera)).toBe(true);
  await expect(tool('projection')).toHaveClass(/active/);
  await tool('projection').click();
  expect(await page.evaluate(() => window.__ioviewer.camera.isPerspectiveCamera)).toBe(true);

  await expect(tool('plane')).toHaveAttribute('aria-disabled', 'false');
  await expect(tool('distance')).toHaveAttribute('aria-disabled', 'false');
  await expect(tool('distance')).toHaveAttribute('title', 'Расстояние');
  await expect(tool('fit')).toHaveAttribute('aria-disabled', 'false');
  await expect(page.locator('.ioviewer-toolbar-group').last().locator('.ioviewer-tool')).toHaveCount(1); // view: fullscreen only
  await expect(tool('settings')).toHaveCount(0);
});

test('a refused fullscreen request shows a message and leaves the button off', async ({ page }) => {
  await page.addInitScript(() => (Element.prototype.requestFullscreen = () => Promise.reject(new TypeError('denied'))));
  const errors = await open(page);
  const fullscreen = page.locator('.ioviewer-tool[data-tool="fullscreen"]');
  await fullscreen.click();
  await expect(page.locator('.ioviewer-toast')).toHaveText('Полноэкранный режим недоступен');
  await expect(fullscreen).not.toHaveClass(/active/);
  expect(errors).toEqual([]);
});

test('status bar counts the selection; the truncation banner shows and closes', async ({ page }) => {
  await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await expect(page.locator('.ioviewer-banner')).toHaveCount(0);
  await page.mouse.click(...(await screenAt(page, d2)));
  await expect(page.locator('#ioviewer-status')).toHaveText('Выбрано: 1 · Элементов: 66');

  const html = readFileSync(path.join(viewerDir, 'test-results', 'building.html'), 'utf8');
  const truncated = html.replace('"truncated":null', '"truncated":{"meshes":40,"totalMeshes":67}');
  expect(truncated).not.toBe(html);
  writeFileSync(path.join(viewerDir, 'test-results', 'truncated.html'), truncated);
  await open(page, 'truncated');
  const banner = page.locator('.ioviewer-banner');
  await expect(banner).toHaveText('Показано 40 из 67 мешей: модель обрезана настройкой MaxMeshVertices');
  await banner.getByRole('button').click();
  await expect(banner).toHaveCount(0);
});

test('Copy Id writes the Id to the clipboard and confirms', async ({ page }) => {
  await page.addInitScript(() => {
    window.__copied = [];
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: async (text) => window.__copied.push(text) } });
  });
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)), { button: 'right' });
  await menuItem(page, 'Копировать Id').click();
  await expect(page.locator('.ioviewer-toast')).toHaveText('Id скопирован');
  expect(await page.evaluate(() => window.__copied)).toEqual([String(await idOf(page, d2))]);
  expect(errors).toEqual([]);
});

test('Copy Id falls back to execCommand when the clipboard API is refused', async ({ page }) => {
  await page.addInitScript(() => {
    window.__copied = [];
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new DOMException('denied')) } });
    document.execCommand = (command) => command === 'copy' && window.__copied.push(document.activeElement.value) > 0;
  });
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)), { button: 'right' });
  await menuItem(page, 'Копировать Id').click();
  await expect(page.locator('.ioviewer-toast')).toHaveText('Id скопирован');
  expect(await page.evaluate(() => window.__copied)).toEqual([String(await idOf(page, d2))]);
  expect(await page.locator('textarea').count()).toBe(0);
  expect(errors).toEqual([]);
});

test('Copy Id reports a failure when no way to copy works', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: () => Promise.reject(new DOMException('denied')) } });
    document.execCommand = () => {
      throw new Error('blocked');
    };
  });
  const errors = await open(page);
  const d2 = await indexOf(page, 'Column D2 Level 1');
  await page.mouse.click(...(await screenAt(page, d2)), { button: 'right' });
  await menuItem(page, 'Копировать Id').click();
  await expect(page.locator('.ioviewer-toast')).toHaveText('Не удалось скопировать Id');
  expect(await page.locator('textarea').count()).toBe(0);
  expect(errors).toEqual([]);
});

test('hostile names and properties are shown as text and never run (Review Focus 2)', async ({ page }) => {
  const errors = await open(page, 'escaping');
  const name = '<img src=x onerror="window.__xss=1">';
  const script = '</script><script>window.__xss=2</script>';
  const sourceId = '"><svg onload="window.__xss=3">';
  await rail(page, 'model').click();
  await rows(page).filter({ hasText: 'Walls' }).click();
  const row = rows(page).filter({ hasText: name });
  await expect(row.locator('.tree-name')).toHaveText(name);

  await row.click();
  const panel = page.locator('#ioviewer-properties');
  await expect(panel.locator('h2')).toHaveText(name);
  await expect(panel.locator('h3').nth(1)).toHaveText(script);
  await expect(panel.locator('th', { hasText: 'window.__xss=2' })).toHaveText(script);
  await expect(panel.locator('td', { hasText: 'window.__xss=2' })).toHaveText(script);
  await expect(panel.locator('tr', { hasText: 'ID источника' }).locator('td')).toHaveText(sourceId);
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();
  expect(await page.locator('#ioviewer-ui img').count()).toBe(0);
  expect(errors).toEqual([]);
});

test.describe('in English', () => {
  test.use({ locale: 'en-US' });

  test('labels, menu and status are English', async ({ page }) => {
    await open(page);
    await expect(page.locator('.ioviewer-toolbar-label')).toHaveText(['Navigation', 'Sections', 'Measure', 'Display', 'View']);
    await expect(page.locator('#ioviewer-status')).toHaveText('Selected: 0 · Elements: 66');
    await expect(rail(page, 'links')).toHaveAttribute('title', 'Linked files');
    await page.mouse.click(...blank, { button: 'right' });
    await expect(menu(page).locator('.ioviewer-menu-item span')).toHaveText(['Show all', 'Fit all', 'Reset sections']);
  });

  test('properties show the source id as its own row, only for elements that have one', async ({ page }) => {
    await open(page);
    const panel = page.locator('#ioviewer-properties');
    await page.evaluate((i) => window.__ioviewer.selection.set([i]), await indexOf(page, 'Supply Duct SA-1'));
    await expect(panel.locator('table').first().locator('th')).toHaveText(['Id', 'Category', 'Type', 'Level', 'Source ID', 'Link']);
    await expect(panel.locator('tr', { hasText: 'Source ID' }).locator('td')).toHaveText('2xQ$n5SLP5MBLyL442paFx');
    await page.evaluate((i) => window.__ioviewer.selection.set([i]), await indexOf(page, 'Column D2 Level 1'));
    await expect(panel.locator('table').first().locator('th')).toHaveText(['Id', 'Category', 'Type', 'Level', 'Link']);
  });
});
