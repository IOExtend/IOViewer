import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { isMirrored, reversedWinding } from '../../src/engine/modelScene.js';

// 12 floats per instance: three columns of the linear part, then the translation.
const instances = new Float32Array([
  1, 0, 0, 0, 1, 0, 0, 0, 1, 5, 6, 7, // identity + translation
  -1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, // scale (-1, 1, 1)
  0, 1, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, // rotation 90 degrees about Z
  0, 1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, // X/Y swap with scale 2 along Z
]);

test('isMirrored detects a negative determinant', () => {
  assert.deepEqual([0, 1, 2, 3].map((i) => isMirrored(instances, i)), [false, true, false, true]);
});

test('reversedWinding reverses each triangle and shares vertex data', () => {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(12), 3));
  geometry.setIndex(new THREE.BufferAttribute(new Uint16Array([0, 1, 2, 0, 2, 3]), 1));

  const reversed = reversedWinding(geometry);

  assert.deepEqual([...reversed.index.array], [0, 2, 1, 0, 3, 2]);
  assert.ok(reversed.index.array instanceof Uint16Array);
  assert.deepEqual([...geometry.index.array], [0, 1, 2, 0, 2, 3]);
  assert.equal(reversed.getAttribute('position'), geometry.getAttribute('position'));
  assert.equal(reversed.getAttribute('normal'), geometry.getAttribute('normal'));
});
