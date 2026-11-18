import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

test.use({ locale: 'en-US', offline: true });

test('placed sources keep independent visibility, properties and geometry in one offline page', async ({ page }) => {
  const errors = [];
  const network = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('request', (request) => { if (/^https?:/.test(request.url())) network.push(request.url()); });
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', 'federated.html')).href);
  await page.evaluate(() => window.__ioviewer.ready);

  const model = await page.evaluate(() => {
    const { scene } = window.__ioviewer;
    const meta = JSON.parse(document.getElementById('ioviewer-meta').textContent);
    const { rtcOffset } = meta;
    return {
      ids: meta.elements.map((element) => element.id),
      boxes: [0, 2, 3].map((index) => {
        const box = scene.elementBox(index);
        return [box.min, box.max].map((v) => v.toArray().map((value, i) => value + rtcOffset[i]));
      }),
    };
  });
  expect(new Set(model.ids).size).toBe(4);
  const expected = [
    [[0, 0, 0], [0.3, 0.3, 0.3]],
    [[9.7, 20, 3], [10, 20.3, 3.3]],
    [[9.7, 20.5, 3], [10, 20.8, 3.3]],
  ];
  model.boxes.flat(2).forEach((value, i) => expect(value).toBeCloseTo(expected.flat(2)[i], 2));

  const visible = () => page.evaluate(() => Array.from({ length: 4 }, (_, i) => window.__ioviewer.scene.isVisible(i)));
  await page.locator('.ioviewer-rail-button[data-panel="links"]').click();
  const links = page.locator('.ioviewer-side-panel[data-panel="links"]');
  const architecture = links.getByRole('checkbox', { name: /^Architecture/ });
  const services = links.getByRole('checkbox', { name: /^Services/ });
  await expect(architecture).toBeChecked();
  await expect(services).toBeChecked();
  await architecture.uncheck();
  expect(await visible()).toEqual([false, false, true, true]);
  await services.uncheck();
  expect(await visible()).toEqual([false, false, false, false]);
  await architecture.check();
  expect(await visible()).toEqual([true, true, false, false]);
  await services.check();

  await page.locator('.ioviewer-rail-button[data-panel="model"]').click();
  await page.getByRole('searchbox').fill('Services part 1');
  await page.getByRole('treeitem', { name: /^Services part 1/ }).click();
  const properties = page.locator('#ioviewer-properties');
  await expect(properties).toContainText('Discipline');
  await expect(properties.getByText('Services', { exact: true })).toBeVisible();
  expect(errors).toEqual([]);
  expect(network).toEqual([]);
});
