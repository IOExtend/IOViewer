import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { screenBoxes, selectInRect } from '../../src/select/boxSelect.js';
import { Selection } from '../../src/select/selection.js';

const rect = { x: 100, y: 100, width: 200, height: 100 }; // 100..300 x 100..200
const inside = { index: 1, minX: 120, minY: 120, maxX: 180, maxY: 180 };
const partly = { index: 2, minX: 250, minY: 150, maxX: 350, maxY: 190 };
const outside = { index: 3, minX: 400, minY: 120, maxX: 450, maxY: 180 };
const around = { index: 4, minX: 50, minY: 50, maxX: 350, maxY: 250 }; // contains the rect

test('window selects only elements entirely inside the rect', () => {
  assert.deepEqual(selectInRect(rect, 'window', [inside, partly, outside, around]), [1]);
});

test('crossing selects every element the rect touches', () => {
  assert.deepEqual(selectInRect(rect, 'crossing', [inside, partly, outside, around]), [1, 2, 4]);
});

test('an edge on the rect border counts as inside', () => {
  const flush = { index: 5, minX: 100, minY: 100, maxX: 300, maxY: 200 };
  assert.deepEqual(selectInRect(rect, 'window', [flush]), [5]);
});

test('an unknown mode throws', () => {
  assert.throws(() => selectInRect(rect, 'lasso', []), RangeError);
});

test('Selection.toggle twice leaves it empty', () => {
  const selection = new Selection();
  selection.toggle(7);
  assert.equal(selection.has(7), true);
  assert.equal(selection.size, 1);
  selection.toggle(7);
  assert.equal(selection.has(7), false);
  assert.equal(selection.size, 0);
});

test('Selection.set replaces, clear empties, and each change fires one event', () => {
  const selection = new Selection();
  let changes = 0;
  selection.addEventListener('change', () => changes++);
  selection.set([1, 2, 2, 3]);
  assert.deepEqual([...selection.values()], [1, 2, 3]);
  selection.set([4]);
  assert.deepEqual([...selection.values()], [4]);
  selection.clear();
  assert.equal(selection.size, 0);
  selection.clear(); // already empty: nothing changes
  assert.equal(changes, 3);
});

test('screenBoxes spans the projected corners of each shown element and skips hidden or out-of-depth ones', () => {
  const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100);
  camera.position.set(3, -8, 4);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();
  const boxes = [
    new THREE.Box3(new THREE.Vector3(-1, -1, 0), new THREE.Vector3(1, 1, 2)),
    new THREE.Box3(new THREE.Vector3(2, 0, 0), new THREE.Vector3(3, 0.5, 1)), // hidden
    new THREE.Box3(new THREE.Vector3(2, -9, 3), new THREE.Vector3(4, -7, 5)), // around the camera: crosses near
  ];
  const scene = { elementCount: 3, isVisible: (i) => i !== 1, elementBox: (i, box) => box.copy(boxes[i]) };
  const rect = { left: 10, top: 20, width: 800, height: 400 };
  const found = screenBoxes(scene, camera, rect);
  assert.deepEqual(found.map((b) => b.index), [0]);
  const xs = [];
  const ys = [];
  for (let k = 0; k < 8; k++) {
    const { min, max } = boxes[0];
    const p = new THREE.Vector3(k & 1 ? max.x : min.x, k & 2 ? max.y : min.y, k & 4 ? max.z : min.z).project(camera);
    xs.push(rect.left + ((p.x + 1) / 2) * rect.width);
    ys.push(rect.top + ((1 - p.y) / 2) * rect.height);
  }
  const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} vs ${b}`);
  close(found[0].minX, Math.min(...xs));
  close(found[0].maxX, Math.max(...xs));
  close(found[0].minY, Math.min(...ys));
  close(found[0].maxY, Math.max(...ys));
});
