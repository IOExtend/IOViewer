import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

test.use({ locale: 'en-US' });

async function openTree(page, fixture = 'building') {
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', `${fixture}.html`)).href);
  await page.evaluate(() => window.__ioviewer.ready);
  await page.locator('.ioviewer-rail-button[data-panel="model"]').click();
  const panel = page.locator('.ioviewer-side-panel[data-panel="model"]');
  const summary = panel.locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(summary).toBeFocused();
  const tree = panel.getByRole('tree');
  return {
    summary,
    tree,
    rows: tree.getByRole('treeitem'),
    model: panel.getByRole('combobox', { name: 'Source model' }),
    level: panel.getByRole('combobox', { name: 'Level', exact: true }),
    category: panel.getByRole('combobox', { name: 'Category' }),
    search: panel.getByRole('searchbox'),
    clear: panel.getByRole('button', { name: 'Clear' }),
    isolate: panel.getByRole('button', { name: 'Isolate matches' }),
  };
}

const visibleIds = (page) => page.evaluate(() => {
  const { scene } = window.__ioviewer;
  return Array.from({ length: scene.elementCount }, (_, i) => i).filter((i) => scene.isVisible(i))
    .map((i) => scene.elementId(i));
});

test('source, level, category and text intersect without changing selection or visibility', async ({ page }) => {
  const filters = await openTree(page);
  const visible = await visibleIds(page);
  await expect(filters.clear).toBeDisabled();
  await expect(filters.isolate).toBeDisabled();

  await filters.tree.getByRole('treeitem', { name: /^Floors/ }).click();
  await filters.tree.getByRole('treeitem', { name: /^Ground Slab/ }).click({ modifiers: ['Control'] });
  await filters.model.selectOption({ label: 'Structure' });
  await filters.level.selectOption({ label: 'Level 1 · Two-Storey Frame Building' });
  await expect(filters.summary).toHaveText('Filters (2)');
  await expect(page.getByText('No matches', { exact: true })).toBeVisible();
  await expect(filters.isolate).toBeDisabled();

  await filters.level.selectOption({ label: 'Level 1 · Structure' });
  await expect(filters.rows.first()).toHaveAccessibleName(/^Column/);
  await expect(filters.tree.getByRole('treeitem', { name: /^Ground Slab/ })).toHaveCount(0);
  await filters.model.selectOption({ label: 'Two-Storey Frame Building' });
  await filters.level.selectOption({ label: 'Level 1 · Two-Storey Frame Building' });
  await filters.category.selectOption({ label: 'Floors' });
  await filters.search.fill('300001');
  await expect(filters.rows).toHaveCount(1);
  await expect(filters.rows).toHaveAccessibleName(/^Ground Slab/);
  await expect(filters.rows).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Tab');
  await expect(filters.rows).toBeFocused();
  expect(await visibleIds(page)).toEqual(visible);

  await filters.clear.click();
  await expect(filters.search).toBeFocused();
  await expect(filters.search).toHaveValue('');
  await expect(filters.summary).toHaveText('Filters');
  await expect(filters.tree.getByRole('treeitem', { name: /^Floors/ })).toHaveAttribute('aria-expanded', 'true');
  await expect(filters.tree.getByRole('treeitem', { name: /^Ground Slab/ })).toHaveAttribute('aria-selected', 'true');
});

test('duplicate model names stay distinct and no-level rows can be filtered and isolated', async ({ page }) => {
  const filters = await openTree(page, 'building-saved-views');
  await filters.model.selectOption({ label: 'Structure (#3)' });
  await expect(filters.rows).toHaveCount(1);
  await expect(filters.rows).toHaveAccessibleName(/^Supply Duct/);
  await filters.model.selectOption({ label: 'Structure (#2)' });
  await filters.level.selectOption({ label: 'Level 2 · Structure (#7)' });
  await expect(filters.rows).toHaveCount(0);
  await filters.clear.click();
  const visible = await visibleIds(page);
  await filters.level.selectOption({ label: 'No level' });
  await expect(filters.rows).toHaveCount(1);
  await expect(filters.rows).toHaveAccessibleName(/^Survey Marker/);
  expect(await visibleIds(page)).toEqual(visible);

  await filters.isolate.click();
  expect(await visibleIds(page)).toEqual([300064]);
  await filters.clear.click();
  expect(await visibleIds(page)).toEqual([300064]);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Shift+KeyH');
  expect(await visibleIds(page)).toEqual(visible);
});

test('filtering a large model keeps matching rows virtualized', async ({ page }) => {
  const filters = await openTree(page, 'large');
  await filters.category.selectOption({ label: 'System 1' });
  await filters.search.focus();
  await page.keyboard.press('Tab');
  await expect(filters.rows.first()).toBeFocused();
  await expect(filters.rows.first()).toHaveAttribute('aria-setsize', '5000');
  await page.keyboard.press('End');
  await expect(filters.tree.getByRole('treeitem', { name: /^Pipe 19997\b/ })).toBeFocused();
  expect(await filters.rows.count()).toBeLessThan(200);
});

test('older metadata keeps level-name and category filters', async ({ page }) => {
  const filters = await openTree(page, 'tree-filters-legacy');
  await filters.level.selectOption({ label: 'Level 1' });
  await expect(filters.model).toHaveCount(0);
  await filters.category.selectOption({ label: 'Floors' });
  await expect(filters.rows).toHaveCount(1);
  await expect(filters.rows).toHaveAccessibleName(/^Ground Slab/);
});
