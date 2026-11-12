import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ModelScene, ModelTooLargeError, isMirrored } from '../../src/engine/modelScene.js';
import { GRID, octDecodeInto } from '../../src/engine/quantize.js';
import { viewMetrics } from '../../src/engine/culling.js';

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
  items.forEach(({ x, scale = 1, m }, i) => matrix.set(m ?? [scale, 0, 0, 0, scale, 0, 0, 0, scale, x, 0, 0], i * 12));
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

// f32 geometry of n vertices (all at the origin but the last at (1, 1, 1)) with one triangle through the last vertex.
function strip(n) {
  const positions = new Float32Array(n * 3);
  positions.fill(1, (n - 1) * 3);
  return {
    positions: view(positions, 'f32'), indices: view(Uint32Array.from([0, n - 2, n - 1]), 'u32'), normals: view(new Float32Array(n * 3).fill(1), 'f32'),
    uvs: null, bbox: { min: [0, 0, 0], max: [1, 1, 1] },
  };
}

test('wireframe lines of a 65536-vertex chunk use a u32 index; of 65535 vertices a u16 one without 0xFFFF', () => {
  const scene = model([{ x: 0 }, { x: 10, geometry: 1 }], { geometries: [strip(65535), strip(65536)] });
  scene.setDisplayMode('wireframe');
  const lines = scene.root.children.filter((o) => o.isLineSegments).map((o) => o.geometry.index.array);
  const [small, big] = [0, 1].map((i) => lines.find((a) => a.length === 6 && (a instanceof Uint32Array) === (i === 1)));
  assert.ok(small instanceof Uint16Array);
  assert.ok(!small.includes(65535));
  assert.deepEqual([...big], [0, 65534, 65534, 65535, 65535, 0]);
  assert.ok(scene.instance(1).mesh.geometry.index.array instanceof Uint32Array);
});

test('over the slot limit the scene throws ModelTooLargeError with the count and the limit', () => {
  assert.throws(() => model([{ x: 0 }, { x: 2 }, { x: 4 }], { options: { slotLimit: 2 } }), (e) => e instanceof ModelTooLargeError && e instanceof RangeError && e.count === 3 && e.limit === 2);
  assert.equal(model([{ x: 0 }, { x: 2 }], { options: { slotLimit: 2 } }).memory().mergedInstances, 2);
  // The GPU's texture size limits the slots too: 2048 per row.
  assert.throws(() => model(Array.from({ length: 2049 }, (_, i) => ({ x: i * 2 })), { options: { maxTextureSize: 1 } }), (e) => e.limit === 2048);
});

test('an instance with a non-finite box gets no slot and leaves the bounds alone', () => {
  const nan = [NaN, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
  const far = [1, 0, 0, 0, 1, 0, 0, 0, 1, Infinity, 0, 0];
  const scene = model([{ x: 0 }, { m: nan }, { x: 4 }, { m: far }]);
  assert.deepEqual([0, 1, 2, 3].map((i) => scene.instance(i).slot >= 0), [true, false, true, false]);
  assert.equal(scene.memory().mergedInstances, 2);
  assert.deepEqual(scene.visibleBox().min.toArray(), [-0.5, -0.5, -0.5]);
  assert.deepEqual(scene.visibleBox().max.toArray(), [4.5, 0.5, 0.5]);
  assert.ok(scene.elementBox(1).isEmpty());
  assert.deepEqual(scene.drawnInstances(camera()), [0, 2]);
});

// Every shape instanced (test options): no merged chunks at all.
const INSTANCED = { mergedCap: 0, minRepeats: 1, cellExtent: 1 }; // cells as wide as the model: one per shape
// Instance count the cell mesh of instance i gets for the next render.
function count(scene, i) {
  const { mesh } = scene.instance(i);
  mesh.onBeforeRender(renderer, null, camera(), mesh.geometry, mesh.material, null);
  return mesh.count;
}

test('cell: count = min(lastShown+1, prefix); all hidden -> visible false', () => {
  // One shape (a cube, one material, not mirrored) -> one cell; slots ordered by size, largest first: 0, 1, 2.
  const scene = model([{ x: 0, scale: 3 }, { x: 5, scale: 2 }, { x: 9, scale: 1 }], { options: INSTANCED });
  const mesh = scene.instance(0).mesh;
  assert.ok(mesh.isInstancedMesh);
  const { chunks, cells, mergedInstances, instancedInstances } = scene.memory();
  assert.deepEqual({ chunks, cells, mergedInstances, instancedInstances }, { chunks: 0, cells: 1, mergedInstances: 0, instancedInstances: 3 });
  assert.deepEqual([0, 1, 2].map((i) => scene.instance(i).slot), [0, 1, 2]);
  assert.equal(scene.instance(2).mesh, mesh);
  assert.equal(count(scene, 0), 3);
  scene.setVisible([1], false);
  assert.equal(count(scene, 0), 3); // hidden inside the count: the shader drops it
  scene.setVisible([0], false);
  assert.equal(count(scene, 0), 3); // no base instance in WebGL2: a cell always draws from its first instance
  scene.showAll();
  scene.setVisible([2], false);
  assert.equal(count(scene, 0), 2);
  scene.showAll();
  // The detail cut keeps the slots of at least rMin radius, here between slot 0 and slot 1.
  const view = viewMetrics(camera(), 1);
  const s = scene._units[0].sphere;
  const near = (s[0] - view[0]) * view[3] + (s[1] - view[1]) * view[4] + (s[2] - view[2]) * view[5] - s[3];
  const rMin = (scene._slotRadius[0] + scene._slotRadius[1]) / 2;
  scene.setDetail((rMin * view[6]) / near, 1);
  assert.equal(count(scene, 0), 1);
  assert.deepEqual(scene.drawStats(), { drawn: 12, inView: 36, draws: 1 });
  scene.setVisible([1, 2], false);
  assert.equal(count(scene, 0), 1); // min(lastShown + 1, prefix) = min(1, 1)
  scene.setDetail(0);
  assert.equal(count(scene, 0), 1);
  scene.setVisible([0], false);
  assert.equal(mesh.visible, false);
  assert.deepEqual(scene.drawnInstances(camera()), []);
  scene.showAll();
  assert.equal(mesh.visible, true);
  assert.deepEqual(scene.drawnInstances(camera()), [0, 1, 2]);
});

test('cell mirrored shape uses reversed index', () => {
  const mirror = [-1, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 0];
  const scene = model([{ x: 0 }, { m: mirror }], { options: INSTANCED });
  const [plain, mirrored] = [0, 1].map((i) => scene.instance(i).mesh);
  assert.notEqual(plain, mirrored); // (geometry, mirrored, material) are different shapes
  const a = plain.geometry.index.array;
  const b = mirrored.geometry.index.array;
  assert.equal(b.length, a.length);
  for (let t = 0; t < a.length; t += 3) assert.deepEqual([b[t], b[t + 1], b[t + 2]], [a[t], a[t + 2], a[t + 1]]);
  // The instance's own RTC matrix in three's instanceMatrix, and the geometry's own normals (three's instancing
  // shader applies the matrix to both).
  assert.deepEqual([...mirrored.instanceMatrix.array], [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, 0, 1]);
  assert.deepEqual([...mirrored.geometry.getAttribute('normal').array], [...quantizedCube().normals.array]);
});

test('remainder slot info holds geometry origin/step', () => {
  const box = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const f32 = {
    positions: view(box.getAttribute('position').array, 'f32'), indices: view(Uint32Array.from({ length: 36 }, (_, i) => i), 'u32'),
    normals: view(box.getAttribute('normal').array, 'f32'), uvs: null, bbox: { min: [-0.5, -0.5, -0.5], max: [0.5, 0.5, 0.5] },
  };
  const scene = model([{ x: 0 }, { x: 3, geometry: 1 }], { geometries: [quantizedCube(), f32], options: INSTANCED });
  const info = scene.slotUniforms.slotInfo.value.image.data;
  const at = (i) => [...info.subarray(scene.instance(i).slot * 4, scene.instance(i).slot * 4 + 4)];
  assert.deepEqual(at(0), [-0.5, -0.5, -0.5, GRID]); // q.o and q.s: positions stay in the geometry's own space
  assert.deepEqual(at(1), [0, 0, 0, 1]); // f32 positions as they are
  const q0 = scene.instance(0).mesh.geometry.getAttribute('q').array;
  assert.ok(q0 instanceof Uint16Array);
  assert.deepEqual([...q0.subarray(0, 4)], [...quantizedCube().positions.array.subarray(0, 3), 0]); // w = 0: slot = slotBase
  const q1 = scene.instance(1).mesh.geometry.getAttribute('q').array;
  assert.ok(q1 instanceof Float32Array);
  assert.deepEqual([...q1.subarray(0, 4)], [...box.getAttribute('position').array.subarray(0, 3), 0]);
  assert.deepEqual([...scene.instance(1).mesh.geometry.getAttribute('slotBase').array], [scene.instance(1).slot]);
  // Per shape q + oct normals + u16 index (u16 cube 288 + 144 + 72, f32 cube 576 + 144 + 72), per instance 64 + 4.
  const memory = scene.memory();
  assert.equal(memory.instancedBytes, 504 + 792 + 2 * 68);
  assert.equal(memory.gpuBytes, memory.instancedBytes + memory.stateBytes);
  assert.equal(memory.triangles, 24);
  assert.ok(Math.abs(scene.totalCost - 24 * 1.4) < 1e-4); // an instanced triangle costs more than a merged one
});

test('over the cap a shape used 16 times becomes a cell; one used 15 times and a unique one stay merged', () => {
  const items = [
    ...Array.from({ length: 16 }, (_, i) => ({ x: i * 2 })),
    ...Array.from({ length: 15 }, (_, i) => ({ x: i * 2, material: 1 })), // the same geometry, another material
    { x: 0, geometry: 1 },
  ];
  const materials = [{ color: [0.2, 0.4, 0.6], opacity: 1, texture: null }, { color: [0.6, 0.4, 0.2], opacity: 1, texture: null }];
  const scene = model(items, { geometries: [quantizedCube(), quantizedCube()], materials, options: { mergedCap: 0, cellExtent: 1 } });
  const { cells, mergedInstances, instancedInstances } = scene.memory();
  assert.deepEqual({ cells, mergedInstances, instancedInstances }, { cells: 1, mergedInstances: 16, instancedInstances: 16 });
  assert.ok(scene.instance(0).mesh.isInstancedMesh);
  assert.ok(!scene.instance(16).mesh.isInstancedMesh);
  assert.ok(!scene.instance(31).mesh.isInstancedMesh);
  assert.ok(scene.instance(0).slot >= 16); // the cells' slots follow the chunks'
});

test('cell wireframe: three\'s wireframe over the cell\'s geometry and matrices; picking draws its faces', () => {
  const scene = model([{ x: 0 }, { x: 3 }], { options: INSTANCED });
  const { mesh } = scene.instance(0);
  scene.setDisplayMode('wireframe');
  const lines = scene.root.children.filter((o) => o !== mesh);
  assert.equal(lines.length, 1);
  const [wire] = lines;
  assert.ok(wire.isInstancedMesh && wire.material.wireframe);
  assert.equal(wire.geometry, mesh.geometry);
  assert.equal(wire.instanceMatrix, mesh.instanceMatrix);
  assert.ok(wire.geometry.getAttribute('position')); // three builds a wireframe index only for geometries with one
  assert.deepEqual([wire.visible, mesh.visible], [true, false]);
  const pick = new THREE.MeshBasicMaterial();
  scene.withMaterial(pick, () => assert.deepEqual([wire.visible, mesh.visible, mesh.material], [false, true, pick]));
  assert.deepEqual([wire.visible, mesh.visible], [true, false]);
  // Opacity and clipping reach the wireframe material too.
  scene.setOpacity(0.5);
  scene.setClipping([new THREE.Plane(new THREE.Vector3(1, 0, 0), 0)], true);
  const m = wire.material;
  assert.deepEqual([m.opacity, m.transparent, m.depthWrite, m.clipIntersection, m.clippingPlanes.length], [0.5, true, false, true, 1]);
});

test('over the cap, cells are bounded in extent: one shape spread along 190 m takes several cells', () => {
  const scene = model(Array.from({ length: 20 }, (_, i) => ({ x: i * 10 })), { options: { mergedCap: 0, minRepeats: 1 } });
  const { cells, instancedInstances } = scene.memory();
  assert.equal(instancedInstances, 20);
  assert.ok(cells >= 4, `${cells} cells`);
  const box = scene.visibleBox();
  const cap = box.min.distanceTo(box.max) * 0.1 + Math.sqrt(3) / 2; // centres' spread + an instance's own radius
  for (const unit of scene._units) assert.ok(unit.sphere[3] <= cap + 1e-9, `${unit.sphere[3]} > ${cap}`);
});

test('a unit the detail cut leaves empty is hidden for that frame, counted in view, and shown again after', () => {
  // Two chunks: a 10 m cube and a 0.1 m cube beside it.
  const scene = model([{ x: 0, scale: 10 }, { x: 8, scale: 0.1 }], { options: { chunkVertices: 36 } });
  const big = scene.instance(0).mesh;
  const small = scene.instance(1).mesh;
  const c = camera();
  const threshold = scene.detailThreshold(c, 800, 12); // room for one cube's 12 triangles: the large one stays
  assert.ok(threshold > 0);
  scene.setDetail(threshold, 800);
  assert.deepEqual([big.visible, small.visible], [true, false]);
  big.onBeforeRender({ info: { render: { frame: 7 } } }, null, c, big.geometry, big.material, null);
  assert.deepEqual(scene.drawStats(), { drawn: 12, inView: 24, draws: 1 });
  scene.setDetail(0);
  assert.deepEqual([big.visible, small.visible], [true, true]);
  // Without a fresh detailThreshold (a still frame) nothing is hidden.
  scene.setDetail(threshold, 800);
  assert.equal(small.visible, true);
});
