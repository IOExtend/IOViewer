import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

test.use({ locale: 'en-US', offline: true });

test('BCF topics show and restore both authored cameras, clipping and matched elements offline', async ({ page }) => {
  const errors = [], network = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('request', (request) => { if (/^https?:/.test(request.url())) network.push(request.url()); });
  await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', 'bcf-model.html')).href);
  await page.evaluate(() => window.__ioviewer.ready);
  await page.getByRole('button', { name: 'BCF topics', exact: true }).click();
  const panel = page.getByRole('region', { name: 'BCF topics' });
  const disclosure = panel.getByText('Inspect supply duct <review>', { exact: true });
  await disclosure.focus();
  await page.keyboard.press('Enter');
  await expect(disclosure).toBeFocused();
  await expect(panel.getByText('Check the duct above the slab.')).toBeVisible();
  await expect(panel.getByText('Components missing — 1, ambiguous — 1')).toBeVisible();

  const pose = () => page.evaluate(() => {
    const { camera, scene, selection, sections } = window.__ioviewer;
    const { rtcOffset, elements } = JSON.parse(document.getElementById('ioviewer-meta').textContent);
    const names = [...selection.values()].map((i) => elements[i].name);
    const visible = elements.filter((_, i) => scene.isVisible(i)).map((e) => e.name);
    const planes = sections.planes.map((_, i) => ({
      normal: sections.normal(i).toArray(), z: sections.origin(i).z + rtcOffset[2],
    }));
    const clip = sections.clipping().planes[0];
    const point = camera.position.clone();
    const cutsAbove = clip?.distanceToPoint(point.set(0, 0, 6 - rtcOffset[2])) < 0;
    const keepsBelow = clip?.distanceToPoint(point.set(0, 0, 4 - rtcOffset[2])) > 0;
    return {
      position: camera.position.toArray().map((value, i) => value + rtcOffset[i]),
      up: camera.up.toArray(), fov: camera.fov, height: (camera.top - camera.bottom) / camera.zoom,
      orthographic: camera.isOrthographicCamera === true, names, visible, planes, cutsAbove, keepsBelow,
    };
  });
  await panel.getByRole('button', { name: 'Open viewpoint 1' }).click();
  const first = await pose();
  expect(first.position).toEqual([12, -20, 15]);
  expect(first.up[0]).toBeCloseTo(Math.SQRT1_2);
  expect(first.fov).toBeCloseTo(55);
  expect(first.names.sort()).toEqual(['Column A1 Level 1', 'Supply Duct SA-1']);
  expect(first.visible).not.toContain('Ground Slab');
  expect(first.planes).toEqual([{ normal: [0, 0, 1], z: 5 }]);
  expect(first.cutsAbove && first.keepsBelow).toBe(true);
  await panel.getByRole('button', { name: 'Open viewpoint 2' }).click();
  const second = await pose();
  expect(second.orthographic).toBe(true);
  expect(second.height).toBeCloseTo(12);
  expect(second.visible).toEqual(['Supply Duct SA-1']);
  expect(second.names).toEqual([]);
  expect(second.planes).toEqual([]);

  await panel.getByText('Survey note', { exact: true }).click();
  await expect(panel.getByText('No view available')).toBeVisible();
  expect(errors).toEqual([]);
  expect(network).toEqual([]);
});
