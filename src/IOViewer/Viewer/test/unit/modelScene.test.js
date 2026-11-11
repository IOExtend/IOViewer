import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ModelScene, isMirrored, reversedWinding } from '../../src/engine/modelScene.js';
import { GRID, octDecodeInto } from '../../src/engine/quantize.js';

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

const view = (array, t) => ({ array, n: array.length, t });

// Format-3 unit cube (u16 steps of GRID from q.o, oct normals) as META geometry.
function quantizedCube() {
  const box = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const p = box.getAttribute('position').array;
  const n = box.getAttribute('normal').array;
  const steps = Uint16Array.from(p, (v) => (v + 0.5) / GRID);
  const oct = new Int16Array((n.length / 3) * 2);
  for (let v = 0; v < n.length / 3; v++) {
    const [x, y, z] = n.subarray(v * 3, v * 3 + 3);
    const s = Math.abs(x) + Math.abs(y) + Math.abs(z);
    let [a, b] = [x / s, y / s];
    if (z < 0) [a, b] = [(1 - Math.abs(b)) * (a < 0 ? -1 : 1), (1 - Math.abs(a)) * (b < 0 ? -1 : 1)];
    oct[v * 2] = Math.round(a * 32767);
    oct[v * 2 + 1] = Math.round(b * 32767);
  }
  return {
    positions: view(steps, 'u16'), q: { o: [-0.5, -0.5, -0.5], s: GRID }, indices: view(Uint16Array.from({ length: p.length / 3 }, (_, i) => i), 'u16'),
    normals: view(oct, 'i16'), uvs: null, bbox: { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] },
  };
}

// ModelScene over `items` = [{ x, scale = 1, element = index, geometry = 0, material = 0 }] placed along X.
function model(items, { geometries = [quantizedCube()], materials = [{ color: [0.2, 0.4, 0.6], opacity: 1, texture: null }], options = {} } = {}) {
  const matrix = new Float32Array(items.length * 12);
  items.forEach(({ x, scale = 1 }, i) => matrix.set([scale, 0, 0, 0, scale, 0, 0, 0, scale, x, 0, 0], i * 12));
  const elements = Math.max(0, ...items.map((it, i) => (it.element ?? i) + 1));
  const meta = {
    materials,
    geometries,
    instances: {
      count: items.length,
      geometry: view(Uint32Array.from(items, (it) => it.geometry ?? 0)),
      material: view(Uint32Array.from(items, (it) => it.material ?? 0)),
      element: view(Int32Array.from(items, (it, i) => it.element ?? i)),
      matrix: view(matrix),
    },
    elements: Array.from({ length: elements }, (_, i) => ({ id: i + 1, name: `E${i}` })),
  };
  return new ModelScene({ meta, view: (v) => v.array }, options);
}

const bytes = (scene, i) => [...scene._state.image.data.subarray(scene.instance(i).slot * 4, scene.instance(i).slot * 4 + 4)];
const renderer = { info: { render: { frame: 1 } } };
const camera = () => {
  const c = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  c.position.set(0, -20, 0);
  c.up.set(0, 0, 1);
  c.lookAt(0, 0, 0);
  c.updateMatrixWorld();
  return c;
};
// Draw range [start, count] the chunk mesh of instance i gets for the next render.
function range(scene, i) {
  const { mesh } = scene.instance(i);
  mesh.onBeforeRender(renderer, null, camera(), mesh.geometry, mesh.material, null);
  return [mesh.geometry.drawRange.start, mesh.geometry.drawRange.count];
}

test('colour order highlight > tint > white > material (bytes 245,158,11 …)', () => {
  const scene = model([{ x: 0 }, { x: 2 }]);
  assert.deepEqual(bytes(scene, 0), [51, 102, 153, 255]);
  scene.setDisplayMode('white');
  assert.deepEqual(bytes(scene, 0), [235, 235, 237, 255]);
  scene.setTint([0], '#ff8000');
  assert.deepEqual(bytes(scene, 0), [255, 128, 0, 255]);
  scene.setHighlighted([0]);
  assert.deepEqual(bytes(scene, 0), [245, 158, 11, 255]);
  assert.equal(scene.instanceColor(0).getHexString(), 'f59e0b');
  scene.setHighlighted([]);
  assert.deepEqual(bytes(scene, 0), [255, 128, 0, 255]);
  scene.setTint([0], null);
  assert.deepEqual(bytes(scene, 0), [235, 235, 237, 255]);
  scene.setDisplayMode('materials');
  assert.deepEqual(bytes(scene, 0), [51, 102, 153, 255]);
  assert.deepEqual(bytes(scene, 1), [51, 102, 153, 255]);
  // instanceColor is linear, like three's colours: the sRGB bytes converted.
  assert.ok(scene.instanceColor(1).equals(new THREE.Color().setRGB(0.2, 0.4, 0.6, THREE.SRGBColorSpace)));
});

test('hide middle slot keeps the span, hide first/last shrinks it, hide all -> mesh.visible false', () => {
  // One chunk; slots ordered by size, largest first: instance 0, 1, 2.
  const scene = model([{ x: 0, scale: 3 }, { x: 5, scale: 2 }, { x: 9, scale: 1 }]);
  const mesh = scene.instance(0).mesh;
  assert.deepEqual([0, 1, 2].map((i) => scene.instance(i).slot), [0, 1, 2]);
  assert.equal(scene.instance(2).mesh, mesh);
  assert.deepEqual(range(scene, 0), [0, 108]);
  scene.setVisible([1], false);
  assert.deepEqual(range(scene, 0), [0, 108]);
  scene.setVisible([0], false);
  assert.deepEqual(range(scene, 0), [72, 36]);
  scene.setVisible([0], true);
  scene.setVisible([2], false);
  assert.deepEqual(range(scene, 0), [0, 36]);
  assert.equal(mesh.visible, true);
  scene.setVisible([0], false);
  assert.equal(mesh.visible, false);
  scene.showAll();
  assert.equal(mesh.visible, true);
  assert.deepEqual(range(scene, 0), [0, 108]);
});

test('<=256 changed slots -> updateRanges, >256 -> full upload', () => {
  const scene = model(Array.from({ length: 300 }, (_, i) => ({ x: i * 2 })));
  const texture = scene._state;
  const uploaded = () => {
    texture.clearUpdateRanges(); // as three does after uploading
    texture.onUpdate(texture);
  };
  uploaded();
  const version = texture.version;
  scene.setHighlighted([3, 4, 5]);
  assert.equal(texture.updateRanges.length, 3);
  assert.equal(texture.version, version + 1);
  uploaded();
  scene.setHighlighted(Array.from({ length: 300 }, (_, i) => i));
  assert.equal(texture.updateRanges.length, 0); // no ranges: the whole texture
  assert.equal(texture.version, version + 2);
  // Before the first upload every change is a whole upload too.
  const fresh = model([{ x: 0 }]);
  fresh.setHighlighted([0]);
  assert.equal(fresh._state.updateRanges.length, 0);
});

test('format-2 meta (f32 positions/normals) builds and renders ranges', () => {
  const box = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const f32 = {
    positions: view(box.getAttribute('position').array, 'f32'), indices: view(Uint32Array.from({ length: 36 }, (_, i) => i), 'u32'),
    normals: view(box.getAttribute('normal').array, 'f32'), uvs: null, bbox: { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] },
  };
  const scene = model([{ x: 0 }, { x: 3 }], { geometries: [f32] });
  assert.deepEqual(scene.drawnInstances(camera()), [0, 1]);
  assert.deepEqual(range(scene, 1), [0, 72]);
  assert.equal(scene.memory().triangles, 24);
  const normal = scene.instance(0).mesh.geometry.getAttribute('normal');
  const n = new Float64Array(3);
  octDecodeInto(n, 0, normal.array[0], normal.array[1]);
  const expected = box.getAttribute('normal').array.subarray(0, 3);
  for (let a = 0; a < 3; a++) assert.ok(Math.abs(n[a] - expected[a]) < 1e-4);
});

test('zero-vertex instance has no slot and setVisible on it is a no-op', () => {
  const empty = { positions: view(new Uint16Array(0), 'u16'), q: { o: [0, 0, 0], s: GRID }, indices: view(new Uint16Array(0), 'u16'), normals: null, uvs: null, bbox: { min: [0, 0, 0], max: [0, 0, 0] } };
  const scene = model([{ x: 0 }, { x: 2, geometry: 1 }], { geometries: [quantizedCube(), empty] });
  assert.deepEqual(scene.instance(1), { mesh: null, element: 1, slot: -1 });
  assert.equal(scene.memory().mergedInstances, 1);
  const state = [...scene._state.image.data];
  scene.setVisible([1], false);
  scene.setHighlighted([1]);
  assert.deepEqual([...scene._state.image.data], state);
  assert.deepEqual([...scene.visibilityState()], [1, 0]);
});

test('isolate keeps only the element\'s slots, element-less slots hidden; showAll shows them', () => {
  const scene = model([{ x: 0, element: 0 }, { x: 2, element: 1 }, { x: 4, element: 0 }, { x: 6, element: -1 }]);
  const alpha = () => [0, 1, 2, 3].map((i) => bytes(scene, i)[3]);
  scene.isolate([0]);
  assert.deepEqual(alpha(), [255, 0, 255, 0]);
  assert.equal(scene.slotElement(scene.instance(3).slot), -1);
  scene.showAll();
  assert.deepEqual(alpha(), [255, 255, 255, 255]);
});

test('every chunk geometry carries its octahedral normals in the `normal` attribute (three shades smooth)', () => {
  const scene = model([{ x: 0 }, { x: 40 }], { options: { chunkVertices: 36 } });
  assert.equal(scene.memory().chunks, 2);
  for (const mesh of scene.root.children) {
    assert.equal(mesh.geometry.getAttribute('normal').itemSize, 2);
    assert.equal(mesh.geometry.getAttribute('normal').normalized, true);
  }
  scene.setDisplayMode('wireframe');
  for (const object of scene.root.children) assert.ok(object.geometry.getAttribute('normal'), object.type);
});
