import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

async function open(page, name = 'building') {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${name}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  return errors;
}

async function openTree(page) {
  const button = page.locator('.ioviewer-rail-button[data-panel="model"]');
  await button.focus();
  await page.keyboard.press('Enter');
  const shell = page.locator('.ioviewer-side-panel[data-panel="model"]');
  await shell.getByRole('searchbox').focus();
  return shell.getByRole('tree');
}

const selected = (page) => page.evaluate(() => [...window.__ioviewer.selection.values()]);
const item = (menu, id) => menu.locator(`[role="menuitem"][data-item="${id}"]`);

test('Tab reaches the tree before its first visible resize notification', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await open(page);
  const tabStops = await page.evaluate(() => {
    document.querySelector('.ioviewer-rail-button[data-panel="model"]').click();
    document.querySelector('.ioviewer-tree-search').focus();
    return document.querySelectorAll('.ioviewer-tree [tabindex="0"]').length;
  });
  expect(tabStops).toBe(1);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('treeitem', { name: /^Curtain Walls/ })).toBeFocused();
});

test('keyboard moves through categories and selects a model element on Enter', async ({ page }) => {
  const errors = await open(page);
  const tree = await openTree(page);
  const tabStops = tree.locator('[role="treeitem"][tabindex="0"]');
  await expect(tabStops).toHaveCount(1);
  await page.keyboard.press('Tab');
  const walls = tree.getByRole('treeitem', { name: /^Curtain Walls/ });
  const ducts = tree.getByRole('treeitem', { name: /^Ducts/ });
  await expect(walls).toBeFocused();
  await expect(walls).toHaveCSS('outline-width', '2px');
  await page.keyboard.press('ArrowDown');
  await expect(ducts).toBeFocused();
  await expect(ducts).toHaveAttribute('aria-expanded', 'false');
  expect(await selected(page)).toEqual([]);
  await page.keyboard.press('ArrowRight');
  await expect(ducts).toBeFocused();
  await expect(ducts).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('ArrowRight');
  const duct = tree.getByRole('treeitem', { name: /^Supply Duct SA-1/ });
  await expect(duct).toBeFocused();
  await expect(duct).toHaveAttribute('aria-level', '2');
  await expect(duct).toHaveAttribute('aria-posinset', '1');
  await expect(duct).toHaveAttribute('aria-setsize', '1');
  await expect(duct).toHaveAttribute('aria-selected', 'false');
  await page.keyboard.press('Enter');
  await expect(duct).toBeFocused();
  await expect(duct).toHaveAttribute('aria-selected', 'true');
  expect(await selected(page)).toHaveLength(1);
  await page.keyboard.press('ArrowLeft');
  await expect(ducts).toBeFocused();
  await page.keyboard.press('ArrowLeft');
  await expect(ducts).toHaveAttribute('aria-expanded', 'false');
  await page.keyboard.press('Home');
  await expect(walls).toBeFocused();
  await expect(tabStops).toHaveCount(1);
  expect(errors).toEqual([]);
});

test('keyboard focus survives scrolling and state changes in a virtual tree', async ({ page }) => {
  await open(page, 'large');
  const tree = await openTree(page);
  const input = page.locator('.ioviewer-side-panel[data-panel="model"]').getByRole('searchbox');
  await input.fill('Pipe');
  await page.keyboard.press('Tab');
  await expect(tree.getByRole('treeitem', { name: /^Pipe 0\b/ })).toBeFocused();
  await page.keyboard.press('End');
  const last = tree.getByRole('treeitem', { name: /^Pipe 19999\b/ });
  await expect(last).toBeFocused();
  await expect(last).toHaveAttribute('aria-setsize', '20000');
  await expect(last).toHaveAttribute('aria-posinset', '20000');
  expect(await tree.getByRole('treeitem').count()).toBeLessThan(200);
  await page.evaluate(() => window.__ioviewer.scene.setVisible([19999], false));
  await expect(last).toBeFocused();
  await expect(last).toHaveClass(/tree-hidden/);
  await expect(last).toHaveCSS('outline-width', '2px');
  await tree.evaluate((viewport) => { viewport.scrollTop = 0; });
  await expect(tree.getByRole('treeitem', { name: /^Pipe 0\b/ })).toBeVisible();
  await expect(last).toBeFocused();
  await page.keyboard.press('ArrowUp');
  await expect(tree.getByRole('treeitem', { name: /^Pipe 19998\b/ })).toBeFocused();
  expect(await tree.getByRole('treeitem').count()).toBeLessThan(200);
});

test('context menu takes focus, runs an action and returns to the invoking row', async ({ page }) => {
  const errors = await open(page);
  const tree = await openTree(page);
  await page.keyboard.press('Tab');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  const duct = tree.getByRole('treeitem', { name: /^Supply Duct SA-1/ });
  await expect(duct).toBeFocused();

  const menu = page.getByRole('menu');
  await page.keyboard.press('Shift+F10');
  await expect(item(menu, 'properties')).toBeFocused();
  expect(await selected(page)).toHaveLength(1);
  await page.keyboard.press('ArrowUp');
  await expect(item(menu, 'copyId')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(duct).toBeFocused();
  expect(await selected(page)).toHaveLength(1);

  await page.keyboard.press('ContextMenu');
  await expect(item(menu, 'properties')).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(item(menu, 'hide')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(menu).toBeHidden();
  await expect(duct).toBeFocused();
  await expect(duct).toHaveClass(/tree-hidden/);

  await page.keyboard.press('ContextMenu');
  await expect(item(menu, 'properties')).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(menu).toBeHidden();
  await expect(page.locator('.ioviewer-tree-search')).toBeFocused();
  expect(errors).toEqual([]);
});

test('keyboard can open the empty menu and unavailable actions stay disabled', async ({ page }) => {
  await open(page, 'empty');
  const origin = page.locator('[data-tool="orbit"]');
  await origin.focus();
  await page.keyboard.press('Shift+F10');
  const menu = page.getByRole('menu');
  await expect(item(menu, 'showAll')).toBeFocused();
  await page.keyboard.press('End');
  const reset = item(menu, 'resetSections');
  await expect(reset).toBeFocused();
  await expect(reset).toBeDisabled();
  await expect(reset).toHaveAttribute('title', 'Недоступно для этой модели');
  await page.keyboard.press('Enter');
  await expect(menu).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(origin).toBeFocused();
});
