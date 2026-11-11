import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { detailThreshold, frustumPlanes, outsideFrustum, screenRadius, viewMetrics } from '../../src/engine/culling.js';
import { ModelScene } from '../../src/engine/modelScene.js';
import { MotionDetail } from '../../src/engine/motionDetail.js';

const view = (array) => ({ array, n: array.length });

// ModelScene over unit cubes (12 triangles) at the given x positions along the X axis, one element each, all in
// material 0 (opacity `opacity`); scale[i] (default 1) sizes cube i.
function cubes(xs, { opacity = 1, scale = [] } = {}) {
  const box = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const positions = box.getAttribute('position').array;
  const indices = Uint32Array.from({ length: positions.length / 3 }, (_, i) => i);
  const matrix = new Float32Array(xs.length * 12);
  xs.forEach((x, i) => {
    const s = scale[i] ?? 1;
    matrix.set([s, 0, 0, 0, s, 0, 0, 0, s, x, 0, 0], i * 12);
  });
  const meta = {
    materials: [{ color: [1, 1, 1], opacity, texture: null }],
    geometries: [{ positions: view(positions), indices: view(indices), normals: null, uvs: null, bbox: { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] } }],
    instances: {
      count: xs.length,
      geometry: view(new Uint32Array(xs.length)),
      material: view(new Uint32Array(xs.length)),
      element: view(Int32Array.from(xs, (_, i) => i)),
      matrix: view(matrix),
    },
    elements: xs.map((_, i) => ({ id: i + 1, name: `E${i}` })),
  };
  return new ModelScene({ meta, view: (v) => v.array });
}

// Camera on -Y looking along +Y at the origin.
function camera(distance = 10) {
  const c = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  c.position.set(0, -distance, 0);
  c.up.set(0, 0, 1);
  c.lookAt(0, 0, 0);
  c.updateMatrixWorld();
  return c;
}

// Batch ids the bucket would draw for `cam`, in draw order.
function drawn(scene, cam) {
  const mesh = scene.root.children[0];
  mesh.onBeforeRender(null, null, cam, mesh.geometry, mesh.material);
  return [...mesh._indirectTexture.image.data.subarray(0, mesh._multiDrawCount)].map((id) => scene.instance(id).element);
}

test('outsideFrustum keeps spheres touching the frustum and drops those beyond a plane', () => {
  const planes = frustumPlanes(camera());
  assert.equal(outsideFrustum(planes, 0, 0, 0, 1), false);
  assert.equal(outsideFrustum(planes, 0, -20, 0, 1), true); // behind the camera
  assert.equal(outsideFrustum(planes, 100, 0, 0, 1), true); // far to the side
});

test('screenRadius: perspective shrinks with depth, orthographic does not, the eye inside a sphere is infinite', () => {
  const m = viewMetrics(camera(), 800);
  const scale = 400 / Math.tan(THREE.MathUtils.degToRad(22.5));
  assert.ok(Math.abs(screenRadius(m, 1, 10) - scale / 10) < 1e-9);
  assert.equal(screenRadius(m, 2, 1), Infinity);
  const ortho = new THREE.OrthographicCamera(-5, 5, 5, -5);
  ortho.updateMatrixWorld();
  assert.ok(Math.abs(screenRadius(viewMetrics(ortho, 800), 1, 123) - 80) < 1e-9);
});

test('detailThreshold keeps the largest within the budget and returns 0 when all fits', () => {
  const pixels = new Float32Array([100, 10, 1, 0.1, -1]);
  const cost = new Float32Array([5, 5, 5, 5, 1000]); // the last is not drawn anyway
  assert.equal(detailThreshold(pixels, cost, 20), 0);
  const t = detailThreshold(pixels, cost, 12);
  assert.ok(t > 1 && t <= 10, `threshold ${t}`);
  assert.ok(detailThreshold(pixels, cost, 4) > 10);
});

test('the draw list holds the shown instances inside the frustum', () => {
  const scene = cubes([0, 2, -2, 500]);
  scene.setVisible([1], false);
  assert.deepEqual(drawn(scene, camera()), [0, 2]);
  scene.showAll();
  assert.deepEqual(drawn(scene, camera()), [0, 1, 2]);
});

test('setDetail leaves out instances smaller on screen than the radius; 0 draws them again', () => {
  const scene = cubes([0, 2], { scale: [1, 0.01] });
  scene.setDetail(1, 800);
  assert.deepEqual(drawn(scene, camera()), [0]);
  scene.setDetail(0);
  assert.deepEqual(drawn(scene, camera()), [0, 1]);
});

test('detailThreshold of the scene fits the budget; a model within it is drawn whole', () => {
  const scene = cubes([0, 2], { scale: [1, 0.01] });
  const cam = camera();
  assert.equal(scene.detailThreshold(cam, 800, 1e9), 0);
  const t = scene.detailThreshold(cam, 800, 100); // one cube costs 80 + 12
  scene.setDetail(t, 800);
  assert.deepEqual(drawn(scene, cam), [0]);
});

test('a transparent bucket is drawn back to front', () => {
  const scene = cubes([0, 2, 4], { opacity: 0.5 });
  const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  cam.position.set(-10, 0, 0); // looks along +X: x = 4 is farthest
  cam.up.set(0, 0, 1);
  cam.lookAt(0, 0, 0);
  cam.updateMatrixWorld();
  assert.deepEqual(drawn(scene, cam), [2, 1, 0]);
  cam.position.set(14, 0, 0);
  cam.lookAt(0, 0, 0);
  cam.updateMatrixWorld();
  assert.deepEqual(drawn(scene, cam), [0, 1, 2]);
});

test('MotionDetail: the first and the settled frame draw everything, a camera move draws within the budget', async () => {
  const calls = [];
  const scene = { setDetail: (px) => calls.push(px), detailThreshold: () => 3 };
  let renders = 0;
  const detail = new MotionDetail(scene, () => renders++);
  const cam = camera();
  detail.begin(cam, 800, 0);
  assert.deepEqual(calls, [0]);
  cam.position.x += 1;
  cam.updateMatrixWorld();
  detail.begin(cam, 800, 16);
  assert.deepEqual(calls, [0, 3]);
  detail.begin(cam, 800, 32); // a change without a move (a hide) is drawn within the budget too
  assert.deepEqual(calls, [0, 3, 3]);
  await new Promise((resolve) => setTimeout(resolve, 260));
  assert.equal(renders, 1);
  detail.begin(cam, 800, 300);
  assert.deepEqual(calls, [0, 3, 3, 0]);
});

test('MotionDetail adapts the budget to slow and fast frames while moving', () => {
  const scene = { setDetail() {}, detailThreshold: () => 0 };
  const cam = camera();
  const slow = new MotionDetail(scene, () => {}, 1000);
  const fast = new MotionDetail(scene, () => {}, 1000);
  slow.begin(cam, 800, 0);
  fast.begin(cam, 800, 0);
  for (let k = 1; k <= 20; k++) {
    cam.position.x += 0.1;
    cam.updateMatrixWorld();
    slow.begin(cam, 800, k * 60);
    fast.begin(cam, 800, k * 10);
  }
  assert.ok(slow.budget < 1000 && fast.budget > 1000, `${slow.budget} ${fast.budget}`);
});
