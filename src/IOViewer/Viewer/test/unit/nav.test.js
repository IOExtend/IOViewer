import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { isClick, orbit, zoomTowards, boxSelectMode } from '../../src/nav/math.js';

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} != ${b}`);

test('isClick uses a 4 px threshold', () => {
  assert.equal(isClick({ x: 0, y: 0 }, { x: 3, y: 0 }), true);
  assert.equal(isClick({ x: 0, y: 0 }, { x: 5, y: 0 }), false);
  assert.equal(isClick({ x: 0, y: 0 }, { x: 3, y: 3 }), false);
});

test('boxSelectMode: left to right is window, right to left is crossing', () => {
  assert.equal(boxSelectMode(10, 50), 'window');
  assert.equal(boxSelectMode(50, 10), 'crossing');
});

test('orbit with dx > 0 turns the camera clockwise seen from above and keeps the distance', () => {
  const pivot = v(1, 2, 0);
  const r = orbit(v(1, -8, 0), v(1, 2, 0), pivot, 100, 0, 0.005);
  assert.ok(r.position.x < pivot.x, 'camera moves from -Y towards -X');
  near(r.position.distanceTo(pivot), 10);
  near(r.position.z, 0);
  near(r.target.distanceTo(pivot), 0);
});

test('orbit around a pivot other than the target moves the target too', () => {
  const r = orbit(v(0, -10, 0), v(0, 0, 0), v(5, 0, 0), 100, 0, 0.005);
  near(r.target.distanceTo(v(5, 0, 0)), 5);
  near(r.position.distanceTo(r.target), 10);
});

test('orbit with dy > 0 raises the camera and never passes the pole', () => {
  const up = orbit(v(0, -10, 0), v(0, 0, 0), v(0, 0, 0), 0, 50, 0.005);
  assert.ok(up.position.z > 0);
  near(up.position.length(), 10);
  const pole = orbit(v(0, -10, 0), v(0, 0, 0), v(0, 0, 0), 0, 1e6, 0.005);
  assert.ok(pole.position.z < 10 && pole.position.z > 9.99);
});

test('zoomTowards halves the distance to the cursor point and shifts the target to it', () => {
  const cursor = v(4, 0, 0);
  const r = zoomTowards(v(0, -10, 0), v(0, 0, 0), cursor, 0.5);
  near(r.position.distanceTo(cursor), v(0, -10, 0).distanceTo(cursor) / 2);
  near(r.target.distanceTo(cursor), 2);
  near(r.position.distanceTo(r.target), 5);
});
