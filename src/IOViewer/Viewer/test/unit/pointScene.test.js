import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { ModelScene } from '../../src/engine/modelScene.js';
import { PointScene } from '../../src/engine/pointScene.js';
import { binaryViewType, parseModelMeta, ModelDataError } from '../../src/data.js';

// A minimal format-4 META with one point instance of two vertices, f32 positions, no per-vertex colours.
function fixture() {
  const positions = new Float32Array([0, 0, 0, 1, 0, 0]);
  const geometry = { t: 'f32', o: 0, n: positions.length };
  const views = {
    geometry: new Uint32Array([0]),
    material: new Uint32Array([0]),
    element: new Int32Array([0]),
    matrix: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0]),
    positions,
  };
  const meta = {
    format: 4,
    elements: [{ id: 1, name: 'cloud', category: 'Point Cloud', type: 'pts' }],
    geometries: [{ positions: geometry, indices: { t: 'u16', o: 0, n: 0 }, kind: 'points', bbox: { min: [0, 0, 0], max: [1, 0, 0] } }],
    materials: [{ color: [1, 0, 0], opacity: 1, texture: null }],
    instances: { count: 0, geometry: { t: 'u32', o: 0, n: 0 }, material: { t: 'u32', o: 0, n: 0 }, element: { t: 'i32', o: 0, n: 0 }, matrix: { t: 'f32', o: 0, n: 0 } },
    points: {
      count: 1,
      geometry: { t: 'u32', o: 0, n: 1 },
      material: { t: 'u32', o: 0, n: 1 },
      element: { t: 'i32', o: 0, n: 1 },
      matrix: { t: 'f32', o: 0, n: 12 },
    },
  };
  const data = { meta, view: byView };
  function byView(v) {
    if (v === geometry) return positions;
    if (v === meta.instances.geometry || v === meta.instances.material) return new Uint32Array();
    if (v === meta.instances.element) return new Int32Array();
    if (v === meta.instances.matrix) return new Float32Array();
    if (v === meta.points.geometry) return views.geometry;
    if (v === meta.points.material) return views.material;
    if (v === meta.points.element) return views.element;
    if (v === meta.points.matrix) return views.matrix;
    throw new Error('unknown view');
  }
  return { data, meta, views };
}

test('point scene builds one Points object per instance and places it by the matrix', () => {
  const { data } = fixture();
  const points = new PointScene(data);
  assert.equal(points.count, 1);
  assert.equal(points.root.children.length, 1);
  const object = points.root.children[0];
  assert.ok(object.isPoints);
  assert.equal(object.geometry.attributes.position.count, 2);
  assert.equal(object.matrix.elements[12], 5);
});

test('point scene mirrors element visibility and clips with the section planes', () => {
  const { data } = fixture();
  const points = new PointScene(data);
  const scene = new ModelScene(data);
  scene.setVisible([0], false);
  points.syncVisibility(scene);
  assert.equal(points.root.children[0].visible, false);
  scene.showAll();
  points.syncVisibility(scene);
  assert.equal(points.root.children[0].visible, true);
  const plane = new THREE.Plane(new THREE.Vector3(1, 0, 0), 0);
  points.setClipping([plane]);
  assert.deepEqual(points.root.children[0].material.clippingPlanes, [plane]);
  points.setClipping([]);
  assert.equal(points.root.children[0].material.clippingPlanes, null);
});

test('the viewer fits and can hide an element that contains only points', () => {
  const { data } = fixture();
  const scene = new ModelScene(data);
  const points = new PointScene(data);
  points.syncVisibility(scene);
  assert.equal(points.root.children[0].visible, true);
  assert.equal(scene.slotCount, 0);
  assert.deepEqual(scene.elementBox(0).min.toArray(), [5, 0, 0]);
  assert.deepEqual(scene.visibleBox().max.toArray(), [6, 0, 0]);
  scene.setVisible([0], false);
  points.syncVisibility(scene);
  assert.equal(points.root.children[0].visible, false);
  assert.ok(scene.visibleBox().isEmpty());
  scene.setLayerHidden('linked', [0], true);
  scene.showAll();
  points.syncVisibility(scene);
  assert.equal(points.root.children[0].visible, false);
  scene.clearLayer('linked');
  points.syncVisibility(scene);
  assert.equal(points.root.children[0].visible, true);
});

test('meta validation accepts format 4 points and rejects a non-points geometry referenced by points', () => {
  const { meta } = fixture();
  parseModelMeta(JSON.stringify(meta));
  const bad = JSON.parse(JSON.stringify(meta));
  bad.geometries[0].kind = 'triangles';
  assert.throws(() => parseModelMeta(JSON.stringify(bad)), ModelDataError);
});

test('RGB and station image views accept bytes and reject a bad length or element', () => {
  const { meta } = fixture();
  const rgb = { t: 'u8', o: 0, n: 6 };
  meta.geometries[0].colors = rgb;
  meta.panoramas = [{ element: 0, position: [0, 0, 0], yaw: 0, image: { t: 'u8', o: 8, n: 4 } }];
  parseModelMeta(JSON.stringify(meta));
  assert.equal(binaryViewType(rgb, 12), Uint8Array);
  assert.throws(() => binaryViewType({ ...rgb, n: 13 }, 12), ModelDataError);
  meta.panoramas[0].element = 1;
  assert.throws(() => parseModelMeta(JSON.stringify(meta)), ModelDataError);
  meta.panoramas[0].element = 0;
  rgb.n = 5;
  assert.throws(() => parseModelMeta(JSON.stringify(meta)), ModelDataError);
});
