import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { LARGE_ELEMENTS, viewerDir } from './global-setup.js';

async function openTree(page, model = 'building') {
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${model}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  await page.locator('.ioviewer-rail-button[data-panel="model"]').click();
  const panel = page.locator('.ioviewer-side-panel[data-panel="model"]');
  const tree = panel.getByRole('tree');
  return {
    tree,
    row: (name) => tree.getByRole('treeitem', { name }),
    search: panel.getByRole('searchbox'),
  };
}

const selectedIds = (page) => page.evaluate(() => {
  const { scene, selection } = window.__ioviewer;
  return [...selection.values()].map((index) => Number(scene.elementId(index))).sort((a, b) => a - b);
});

test('Ctrl-click toggles a row or every member of a collapsed category', async ({ page }) => {
  const { row } = await openTree(page);
  const columns = row(/^Structural Columns/);
  const ducts = row(/^Ducts/);
  await columns.click({ modifiers: ['Control'] });
  await expect(columns).toHaveAttribute('aria-expanded', 'false');
  await expect(columns).toHaveAttribute('aria-selected', 'true');
  expect(await selectedIds(page)).toHaveLength(26);
  await ducts.click({ modifiers: ['Meta'] });
  await expect(ducts).toHaveAttribute('aria-expanded', 'false');
  expect(await selectedIds(page)).toHaveLength(27);

  await columns.click();
  const first = row(/^Column A1 Level 1/);
  await expect(first).toHaveAttribute('aria-selected', 'true');
  await first.click({ modifiers: ['Control'] });
  await expect(first).toHaveAttribute('aria-selected', 'false');
  await expect(columns).toHaveAttribute('aria-selected', 'false');
  expect(await selectedIds(page)).toHaveLength(26);
  await columns.click({ modifiers: ['Control'] });
  await expect(columns).toHaveAttribute('aria-selected', 'true');
  expect(await selectedIds(page)).toHaveLength(27);
  await columns.click({ modifiers: ['Control'] });
  await expect(columns).toHaveAttribute('aria-selected', 'false');
  expect(await selectedIds(page)).toEqual([300063]);
});

test('Shift selects only expanded rows in a range and Space offers the same choices by keyboard', async ({ page }) => {
  const { row } = await openTree(page);
  const walls = row(/^Curtain Walls/);
  await walls.click();
  await row(/^Floors/).click();
  const curtain = row(/^Curtain Wall South/);
  const ground = row(/^Ground Slab/);
  const upper = row(/^Floor Slab Level 2/);
  const cameraTarget = () => page.evaluate(() => window.__ioviewer.controls.target.toArray());
  const before = await cameraTarget();
  await curtain.click({ modifiers: ['Control'] });
  await upper.click({ modifiers: ['Shift'] });
  expect(await selectedIds(page)).toEqual([300001, 300060, 300062]);
  expect(await cameraTarget()).toEqual(before);
  await expect(row(/^Ducts/)).toHaveAttribute('aria-expanded', 'false');

  await ground.focus();
  await page.keyboard.press('Space');
  await expect(ground).toBeFocused();
  expect(await selectedIds(page)).toEqual([300060, 300062]);
  await curtain.focus();
  await page.keyboard.press('Shift+Space');
  await expect(curtain).toBeFocused();
  expect(await selectedIds(page)).toEqual([300001, 300062]);
  await walls.click();
  await upper.click({ modifiers: ['Shift'] });
  expect(await selectedIds(page)).toEqual([300001, 300060]);

  await ground.click({ modifiers: ['Control'] });
  await row(/^Floors/).click();
  await walls.click();
  await curtain.click({ modifiers: ['Shift'] });
  expect(await selectedIds(page)).toEqual([300062]);
  await row(/^Ducts/).click({ modifiers: ['Control'] });
  await row(/^Floors/).click();
  await upper.click({ modifiers: ['Control', 'Shift'] });
  expect(await selectedIds(page)).toEqual([300001, 300060, 300062, 300063]);
});

test('a filtered range includes matches outside the rendered rows', async ({ page }) => {
  const { row, tree, search } = await openTree(page, 'large');
  await search.fill('Pipe 1');
  await row(/^Pipe 1\b/).click({ modifiers: ['Control'] });
  await tree.evaluate((viewport) => { viewport.scrollTop = viewport.scrollHeight; });
  await row(/^Pipe 19999\b/).click({ modifiers: ['Shift'] });
  const indices = Array.from({ length: LARGE_ELEMENTS }, (_, i) => i).filter((i) => String(i).startsWith('1'));
  const ids = await selectedIds(page);
  expect(ids).toEqual(indices.map((i) => 900000 + i));
  expect(await tree.getByRole('treeitem').count()).toBeLessThan(200);
});

test('right click uses the viewer menu and sends actions to the selected rows or clicked object', async ({ page }) => {
  const { row } = await openTree(page);
  await page.evaluate(() => {
    window.copiedIds = [];
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: async (text) => window.copiedIds.push(text) } });
    window.addEventListener('contextmenu', (e) => { window.treeMenuPrevented = e.defaultPrevented; });
  });
  await row(/^Floors/).click();
  await row(/^Ducts/).click();
  const ground = row(/^Ground Slab/);
  const upper = row(/^Floor Slab Level 2/);
  const duct = row(/^Supply Duct SA-1/);
  const menu = page.getByRole('menu');
  const menuItem = (id) => menu.locator(`[data-item="${id}"]`);

  await ground.click({ modifiers: ['Control'] });
  await upper.click({ modifiers: ['Control'] });
  await upper.click({ button: 'right' });
  await expect(menuItem('properties')).toBeFocused();
  expect(await page.evaluate(() => window.treeMenuPrevented)).toBe(true);
  expect(await selectedIds(page)).toEqual([300001, 300060]);
  await menuItem('copyId').click();
  await expect.poll(() => page.evaluate(() => window.copiedIds)).toEqual(['300060']);
  await expect(upper).toBeFocused();
  await ground.click({ button: 'right' });
  await page.keyboard.press('ArrowDown');
  await expect(menuItem('hide')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(menu).toBeHidden();
  await expect(ground).toHaveClass(/tree-hidden/);
  await expect(upper).toHaveClass(/tree-hidden/);
  await expect(ground).toBeFocused();

  await duct.click({ button: 'right' });
  await expect(menuItem('sectionBox')).toBeEnabled();
  expect(await selectedIds(page)).toEqual([300063]);
  await ground.click({ button: 'right', position: { x: 6, y: 12 } });
  await expect(menu).toBeHidden();
  expect(await selectedIds(page)).toEqual([300063]);
  await duct.click({ button: 'right' });
  await expect(menu).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(duct).toBeFocused();
  await expect(menu).toBeHidden();
});
