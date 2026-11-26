import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { photoDirection, photoDrag, pickPhotoElevation } from '../../src/ui/scanMap.js';
import { detectScanLevels, levelContains, mapZoom } from '../../src/ui/scanLevels.js';
import { createPanoramaSpheres } from '../../src/ui/panoramaSpheres.js';

test('panorama spheres pick the nearest station, respect visibility and stay small when zooming', () => {
  const stations = createPanoramaSpheres([
    { position: [0, 0, -4], element: 0 },
    { position: [0, 0, -10], element: 1 },
    { position: [0, 0, 4], element: 2 },
  ]);
  const rect = { left: 50, top: 20, width: 800, height: 600 };
  const camera = new THREE.PerspectiveCamera(45, 4 / 3, .1, 20);
  camera.updateMatrixWorld();
  stations.update(camera, rect, () => true);
  assert.equal(stations.mesh.count, 2);
  assert.equal(stations.pick(450, 320), 0);
  assert.equal(stations.pick(458, 320), undefined);

  camera.zoom = 2;
  camera.updateProjectionMatrix();
  stations.update(camera, rect, (element) => element !== 0);
  assert.equal(stations.mesh.count, 1);
  assert.equal(stations.pick(456, 320), 1);
  assert.equal(stations.pick(458, 320), undefined);

  stations.update(camera, rect, () => false);
  assert.equal(stations.mesh.count, 0);
  assert.equal(stations.pick(450, 320), undefined);

  const ortho = new THREE.OrthographicCamera(-4, 4, 3, -3, .1, 20);
  ortho.updateMatrixWorld();
  stations.update(ortho, rect, () => true);
  assert.equal(stations.mesh.count, 2);
  assert.equal(stations.pick(450, 320), 0);
  assert.equal(createPanoramaSpheres([]), null);
});

test('a panorama feature follows the pointer on both screen axes', () => {
  const camera = new THREE.PerspectiveCamera(72, 1.5, .1, 20);
  camera.up.set(0, 0, 1);
  const view = new THREE.Vector3();
  const feature = new THREE.Vector3(1, 0, 0);

  function move(dx, dy) {
    camera.lookAt(photoDirection(view, ...photoDrag(dx, dy)));
    camera.updateMatrixWorld();
    return feature.clone().project(camera);
  }

  assert.ok(move(20, 0).x > 0);
  assert.ok(move(-20, 0).x < 0);
  assert.ok(move(0, 20).y < 0);
  assert.ok(move(0, -20).y > 0);
});

test('a click uses the physical height of the nearest scan point, including its instance placement', () => {
  const camera = new THREE.PerspectiveCamera(72, 1.5, .1, 20);
  camera.up.set(0, 0, 1);
  camera.lookAt(1, 0, 0);
  camera.updateMatrixWorld();
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute([1, 0, .02, 2, 0, 0], 3));
  const cloud = new THREE.Points(geometry);
  cloud.position.set(10, 20, 3);
  cloud.updateMatrixWorld();
  const origin = cloud.position.clone();
  assert.ok(Math.abs(pickPhotoElevation(camera, origin, [cloud], 0, 0, 600, 400) - 3.02) < 1e-6);
  assert.equal(pickPhotoElevation(camera, origin, [cloud], .9, .9, 600, 400), undefined);
});

test('clear station height bands use the midpoint between groups and include the full outer height bounds', () => {
  const [lower, upper] = detectScanLevels([4.2, .8, 0, 3.7, .12, 4.3], -1, 6);
  assert.deepEqual(lower, { min: -1, max: 2.25 });
  assert.deepEqual(upper, { min: 2.25, max: 6 });
  assert.equal(levelContains(lower, .8), true);
  assert.equal(levelContains(lower, 3.7), false);
  assert.equal(levelContains(upper, 6), true);
});

test('flat scans, a continuous ramp and a lone high station do not produce automatic levels', () => {
  for (const z of [[0, .9, 1.6], [0, 1, 2, 3, 4, 5], [0, .5, .9, 4]])
    assert.deepEqual(detectScanLevels(z, -1, 6), []);
});

test('an isolated stair stop does not join two supported levels with uneven station heights', () => {
  const levels = detectScanLevels([-1.9, -1.2, -.5, .2, 1, 2.4, 3.5, 3.8, 4.3], -3, 8);
  assert.deepEqual(levels, [{ min: -3, max: 2.25 }, { min: 2.25, max: 8 }]);
  assert.equal(levelContains(levels[0], 1), true);
  assert.equal(levelContains(levels[1], 3.5), true);
});

test('map wheel zoom keeps the world position under the cursor fixed', () => {
  const view = { x: 10, y: 30, side: 40, zoom: 1 };
  const x = .2, y = -.3;
  const result = mapZoom(view, 2, x, y);
  assert.equal(result.x + x * result.side / result.zoom, view.x + x * view.side);
  assert.equal(result.y - y * result.side / result.zoom, view.y - y * view.side);
  assert.equal(mapZoom(view, 100, 0, 0).zoom, 16);
});
