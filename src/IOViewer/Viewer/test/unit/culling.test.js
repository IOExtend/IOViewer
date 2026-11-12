import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { detailThreshold, frustumPlanes, outsideFrustum, screenRadius, viewMetrics } from '../../src/engine/culling.js';
import { ModelScene } from '../../src/engine/modelScene.js';
import { MotionDetail } from '../../src/engine/motionDetail.js';

const view = (array) => ({ array, n: array.length });

// ModelScene over unit cubes (12 triangles, or 12 * segments^2) at the given x positions along the X axis, one element
// each, all in material 0 (opacity `opacity`); scale[i] (default 1) sizes cube i. Each cube is its own chunk, so the
// chunk culling of these tests is per instance.
function cubes(xs, { opacity = 1, scale = [], segments = 1 } = {}) {
  const box = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments).toNonIndexed();
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
  return new ModelScene({ meta, view: (v) => v.array }, { chunkVertices: positions.length / 3 });
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

// Elements a render with `cam` would draw, ascending.
function drawn(scene, cam) {
  return scene.drawnInstances(cam).map((i) => scene.instance(i).element);
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
  const t = scene.detailThreshold(cam, 800, 20); // one cube costs 12 triangles
  scene.setDetail(t, 800);
  assert.deepEqual(drawn(scene, cam), [0]);
});

test('unit spheres are the cube centres (three sorts transparent chunks back to front by them)', () => {
  const scene = cubes([0, 2, 4], { opacity: 0.5 });
  const spheres = scene.root.children.map((mesh) => mesh.geometry.boundingSphere);
  assert.deepEqual(spheres.map((s) => s.center.toArray()).sort((a, b) => a[0] - b[0]), [[0, 0, 0], [2, 0, 0], [4, 0, 0]]);
  for (const s of spheres) assert.ok(Math.abs(s.radius - Math.sqrt(3) / 2) < 1e-6);
  assert.ok(scene.root.children.every((mesh) => mesh.material.transparent && !mesh.material.depthWrite));
});

// Drives a MotionDetail through one frame: requested at `at`, drawn after `wait` ms, taking `cpu` ms of script.
function frame(detail, cam, at, { wait = 5, cpu = 2, move = 0 } = {}) {
  if (move) {
    cam.position.x += move;
    cam.updateMatrixWorld();
  }
  detail.requested(at);
  detail.begin(cam, 800, at + wait);
  const minPixels = detail.minPixels;
  detail.end(at + wait + cpu);
  return minPixels;
}

const stubScene = (threshold, visibleCost = 1e12) => ({ setDetail() {}, detailThreshold: () => threshold, visibleCost });

test('detailThreshold always keeps the largest objects, even when they alone are over the budget', () => {
  const t = detailThreshold(new Float32Array([5, 40, 300]), new Float32Array([100, 100, 100]), 50);
  assert.ok(t > 40 && t <= 300, `threshold ${t}`);
});

test('MotionDetail: only frames with camera motion leave detail out; the frame after the motion settles is full', async () => {
  const thresholds = [];
  const scene = { setDetail: (px) => thresholds.push(px), detailThreshold: () => 3, visibleCost: 1e12 };
  let renders = 0;
  const detail = new MotionDetail(scene, () => renders++);
  const cam = camera();
  assert.equal(frame(detail, cam, 0), 0); // first frame
  assert.equal(frame(detail, cam, 20, { move: 1 }), 3);
  assert.equal(frame(detail, cam, 40), 0); // a click or hide without camera motion: full
  await new Promise((resolve) => setTimeout(resolve, 260));
  assert.equal(renders, 1);
  assert.equal(frame(detail, cam, 300), 0);
  assert.deepEqual(thresholds, [0, 0, 3, 0, 0, 0, 0, 0]); // begin, end per frame: end() always resets
});

test('MotionDetail: a near/far change (hide, isolate, show all) is no camera motion', () => {
  const detail = new MotionDetail(stubScene(3), () => {});
  const cam = camera();
  frame(detail, cam, 0);
  cam.near = 2;
  cam.far = 50;
  cam.updateProjectionMatrix();
  assert.equal(frame(detail, cam, 20), 0);
  cam.fov = 30;
  cam.updateProjectionMatrix();
  assert.equal(frame(detail, cam, 40), 3);
});

// 12 000 cubes of 108 triangles (~1.3 M, over the budget floor) from 1 m down to 1 mm across.
let big;
const bigScene = () => {
  const xs = Array.from({ length: 12000 }, (_, i) => -10 + (i % 2000) / 100);
  return (big ??= cubes(xs, { segments: 3, scale: xs.map((_, i) => 1 / (1 + (i % 1000))) }));
};

test('MotionDetail: endless slow frames shrink the budget to its floor, and the view never empties', () => {
  const scene = bigScene();
  const detail = new MotionDetail(scene, () => {}, 5e6);
  const cam = camera(30);
  let cutFrames = 0;
  for (let k = 0; k < 200; k++) {
    frame(detail, cam, k * 100, { wait: 80, cpu: 20, move: 0.001 });
    if (detail.minPixels > 0) cutFrames++;
    scene.setDetail(detail.minPixels, 800);
    assert.ok(drawn(scene, cam).length > 0, `frame ${k} drew nothing`);
  }
  assert.equal(detail.budget, 1e6);
  assert.ok(cutFrames > 100, `${cutFrames} frames left detail out`);
  scene.setDetail(0);
});

test('MotionDetail: idle time between sparse input events is not taken for slow frames', () => {
  const cam = camera();
  const uncut = new MotionDetail(stubScene(0), () => {}, 4e6);
  const cut = new MotionDetail(stubScene(2), () => {}, 4e6);
  let at = 0;
  for (let k = 0; k < 60; k++) {
    at += 100 + ((k * 37) % 300); // wheel notches or a slow drag: 100-400 ms apart
    frame(uncut, cam, at, { wait: 12, cpu: 3, move: 0.01 });
    frame(cut, cam, at, { wait: 12, cpu: 3 }); // the camera moved already (same object)
  }
  assert.equal(uncut.budget, 4e6);
  assert.ok(cut.budget >= 4e6, `budget ${cut.budget}`);
});

test('MotionDetail: the budget grows only while detail is left out, and never past the cost in view', () => {
  const cam = camera();
  const uncut = new MotionDetail(stubScene(0), () => {}, 4e6);
  const cut = new MotionDetail(stubScene(2, 5e6), () => {}, 4e6);
  for (let k = 0; k < 100; k++) {
    frame(uncut, cam, k * 16, { wait: 8, cpu: 2, move: 0.01 });
    frame(cut, cam, k * 16, { wait: 8, cpu: 2 });
  }
  assert.equal(uncut.budget, 4e6);
  assert.equal(cut.budget, 5e6);
});

test('MotionDetail: slow frames while moving shrink the budget', () => {
  const cam = camera();
  const detail = new MotionDetail(stubScene(2), () => {}, 4e6);
  for (let k = 0; k < 20; k++) frame(detail, cam, k * 60, { wait: 50, cpu: 5, move: 0.01 });
  assert.ok(detail.budget < 4e6 && detail.budget >= 1e6, `budget ${detail.budget}`);
});

test('MotionDetail starting at totalCost stays at full detail when moving frames measure 33 ms', () => {
  const scene = bigScene();
  const cam = camera(30);
  const detail = new MotionDetail(scene, () => {}, scene.totalCost);
  for (let k = 0; k < 60; k++) {
    frame(detail, cam, k * 33, { wait: 31, cpu: 2, move: 0.001 });
    assert.equal(detail.minPixels, 0, `frame ${k}`);
  }
  assert.equal(detail.budget, scene.totalCost);
});

test('MotionDetail starting at totalCost shrinks below totalCost when frames measure 60 ms', () => {
  const scene = bigScene();
  const cam = camera(30);
  const detail = new MotionDetail(scene, () => {}, scene.totalCost);
  let cut = 0;
  for (let k = 0; k < 20; k++) {
    frame(detail, cam, k * 60, { wait: 55, cpu: 5, move: 0.001 });
    if (detail.minPixels > 0) cut++;
  }
  scene.setDetail(0);
  assert.ok(detail.budget < scene.totalCost, `budget ${detail.budget}`);
  assert.ok(cut > 0);
});
