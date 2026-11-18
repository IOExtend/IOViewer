import { test, expect } from '@playwright/test';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { viewerDir } from './global-setup.js';

for (const instanced of [false, true]) {
  test(`distance previews visible geometry on the ${instanced ? 'instanced RGBA8' : 'merged'} path`, async ({ page }) => {
    if (instanced) await page.addInitScript(() => {
      window.IOVIEWER_TEST = { mergedCap: 0, minRepeats: 1, pickFloat: false };
    });
    await page.goto(pathToFileURL(path.join(viewerDir, 'test-results', 'measure-snap.html')).href);
    await page.evaluate(() => window.__ioviewer.ready);
    await page.evaluate(() => {
      const { controls, measure, scene } = window.__ioviewer;
      const log = window.measureHoverLog = [];
      const note = (event, value) => {
        log.push([event, value]);
        if (log.length > 30) log.shift();
      };
      for (const type of ['pointermove', 'pointerleave', 'pointercancel']) {
        window.addEventListener(type, (event) => {
          if (event.target?.id !== 'ioviewer-canvas') return;
          note(type, [event.isTrusted, event.clientX, event.clientY, event.buttons]);
          // Only the browser's native clicks own the desktop pointer in this test.
          if (event.isTrusted && window.measureTestHover) event.stopImmediatePropagation();
        }, true);
      }
      controls.addEventListener('change', () => note('camera', [controls.camera.zoom, innerWidth, innerHeight]));
      scene.root.addEventListener('change', (event) => note('scene', event.detail.kind));
      measure.addEventListener('previewchange', () => note('preview', measure.preview?.kind ?? null));
    });
    const instances = await page.evaluate(() => {
      const { scene, controls } = window.__ioviewer;
      scene.setVisible([1], false);
      controls.setProjection('orthographic');
      const { camera, target } = controls;
      scene.elementBox(0).getCenter(target);
      camera.position.copy(target);
      camera.position.z += 9;
      camera.up.set(0, 1, 0);
      camera.lookAt(target);
      controls.resize();
      return scene.memory();
    });
    expect(instanced ? instances.instancedInstances : instances.mergedInstances).toBe(2);

    const points = await page.evaluate(() => {
      const { scene, camera } = window.__ioviewer;
      camera.updateMatrixWorld();
      const min = scene.elementBox(0).min;
      return [[0, 0], [2, 0], [1, 0], [2, 2]].map(([x, y]) => {
        const p = min.clone().set(min.x + x, min.y + y, min.z).project(camera);
        return [(p.x + 1) * innerWidth / 2, (1 - p.y) * innerHeight / 2];
      });
    });
    const [vertex, midpoint, edge, face] = points;
    const distance = page.locator('.ioviewer-tool[data-tool="distance"]');
    const marker = page.locator('.ioviewer-measure-preview');
    const canvas = page.locator('#ioviewer-canvas');
    await distance.click();

    async function previewAt(x, y) {
      await page.evaluate(() => { window.measureTestHover = true; });
      await canvas.dispatchEvent('pointermove', { clientX: x, clientY: y, pointerType: 'mouse' });
      await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    }

    async function clickAt(x, y) {
      await page.evaluate(() => { window.measureTestHover = false; });
      await page.mouse.click(x, y);
      await distance.hover();
    }

    async function hover([x, y], dx, dy, kind) {
      await previewAt(x + dx, y + dy);
      try {
        await expect(marker).toBeVisible();
        await expect(marker).toHaveAttribute('data-kind', kind);
      } catch (error) {
        const log = await page.evaluate(() => window.measureHoverLog);
        throw new Error(`Expected ${kind} at (${x + dx}, ${y + dy}). Hover events: ${JSON.stringify(log)}`, { cause: error });
      }
    }

    await hover(vertex, 5, -3, 'vertex');
    await page.evaluate(() => window.__ioviewer.controls.resize());
    await expect(marker).toBeVisible();
    await expect(marker).toHaveAttribute('data-kind', 'vertex');
    const preview = () => page.evaluate(() => window.__ioviewer.measure.preview?.point.toArray());
    const first = await preview();
    await clickAt(vertex[0] + 5, vertex[1] - 3);
    await hover(midpoint, 0, -3, 'midpoint');
    const second = await preview();
    await clickAt(midpoint[0], midpoint[1] - 3);
    expect(await page.evaluate(() => window.__ioviewer.measure.points.map((p) => p.toArray()))).toEqual([first, second]);
    expect(await page.evaluate(() => window.__ioviewer.measure.distance)).toBeCloseTo(2, 3);
    await hover(edge, 0, -3, 'edge');
    await hover(face, 0, 0, 'surface'); // the triangulation diagonal runs through this point

    await page.evaluate(() => window.__ioviewer.scene.setVisible([1], true));
    await hover(vertex, 5, -3, 'edge'); // the occluder covers the vertex but not the pointer
    await page.evaluate(() => {
      const { scene, sections } = window.__ioviewer;
      scene.setVisible([1], false);
      const cut = sections.addPlane('x');
      sections.updatePlane(cut, { offset: scene.elementBox(0).min.x + 0.03 - sections.center.x, flipped: true });
    });
    await hover(vertex, 6, -3, 'edge'); // the cut hides the vertex and keeps part of its edge

    await page.evaluate(() => {
      const { controls, sections } = window.__ioviewer;
      sections.reset();
      controls.camera.zoom *= 1.4;
      controls.resize();
    });
    await hover([640 + (vertex[0] - 640) * 1.4, 400 + (vertex[1] - 400) * 1.4], 5, -3, 'vertex');
    const oblique = await page.evaluate(() => {
      const { scene, controls } = window.__ioviewer;
      controls.setProjection('perspective');
      const { target, camera } = controls;
      camera.position.copy(target);
      camera.position.x += 7;
      camera.position.z += 7;
      camera.lookAt(target);
      controls.resize();
      camera.updateMatrixWorld();
      const p = scene.elementBox(0).min.clone();
      p.x += 1;
      p.project(camera);
      return [(p.x + 1) * innerWidth / 2, (1 - p.y) * innerHeight / 2];
    });
    for (const dx of [-2.75, -1.5, 0, 1.25, 2.5]) await hover(oblique, dx, -4, 'edge');
    await page.evaluate(() => window.__ioviewer.scene.setVisible([0], false));
    await previewAt(640, 400);
    await expect(marker).toBeHidden();
  });
}
