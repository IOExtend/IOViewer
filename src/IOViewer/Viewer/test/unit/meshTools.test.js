import assert from 'node:assert/strict';
import test from 'node:test';
import * as THREE from 'three';
import { pickMeshSurface } from '../../src/stream/meshTools.js';
import { Sections } from '../../src/tools/sections.js';

test('exact selection traverses both leaves and clips them with one world-space plane', async () => {
  const vec = (x, y, z) => new THREE.Vector3(x, y, z);
  const bounds = new THREE.Box3(vec(0, 0, 0), vec(2, 1, 0));
  const nodes = [
    { id: 0, box: new THREE.Box3(vec(0, 0, 0), vec(1, 1, 0)), children: [], pick: true },
    { id: 1, box: new THREE.Box3(vec(1, 0, 0), vec(2, 1, 0)), shift: [1, 0, 0], children: [], pick: true },
    { id: 2, box: bounds, children: [0, 1] },
  ];
  const sections = new Sections({ setClipping() {} }, bounds);
  const page = async (node) => ({
    position: [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    color: new Uint8Array(16).fill(255),
    index: [0, 1, 2, 1, 3, 2],
    tags: [node.id, node.id],
  });
  const surface = (x, y, signal) => pickMeshSurface(new THREE.Ray(vec(x, y, 1), vec(0, 0, -1)),
    [nodes[2]], nodes, page, sections, signal);
  const pick = async (...args) => (await surface(...args))?.element ?? null;
  assert.deepEqual((await surface(1.01, 0.25)).point, vec(1.01, 0.25, 0));
  assert.equal(await pick(0.99, 0.25), 0);
  assert.equal(await pick(1.01, 0.25), 1);
  sections.addPlane('y');
  assert.equal(await pick(0.99, 0.25), 0);
  assert.equal(await pick(1.01, 0.25), 1);
  assert.equal(await pick(0.99, 0.75), null);
  assert.equal(await pick(1.01, 0.75), null);
  sections.setBox(new THREE.Box3(vec(0.9, 0.1, -0.1), vec(1.1, 0.4, 0.1)));
  assert.equal(await pick(1.01, 0.25), 1);
  assert.equal(await pick(1.01, 0.75), null);
  sections.setBoxMode('cutInside');
  assert.equal(await pick(1.01, 0.25), null);
  assert.equal(await pick(1.01, 0.75), 1);
  await assert.rejects(pick(0.99, 0.25, AbortSignal.abort()), { name: 'AbortError' });
});
