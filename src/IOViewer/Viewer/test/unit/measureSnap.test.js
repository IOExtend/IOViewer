import assert from 'node:assert/strict';
import test from 'node:test';
import { Matrix4, Plane, Vector3, Vector4 } from 'three';
import { edgeParameter, featureEdges, MeasureSnap, visibleEdgeRanges } from '../../src/tools/measureSnap.js';

test('feature topology keeps boundaries and creases and welds a coplanar seam', () => {
  const positions = [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0];
  const indices = [0, 1, 2, 3, 4, 5];
  const flat = featureEdges(positions, indices);
  assert.deepEqual(flat.edges, [0, 1, 1, 2, 2, 5, 0, 5]);
  assert.deepEqual([...flat.vertices].sort(), [0, 1, 2, 5]);
  positions[17] = 1;
  assert.deepEqual(featureEdges(positions, indices).edges, [0, 1, 1, 2, 0, 2, 2, 5, 0, 5]);
});

test('edge ranges respect view depth, clip planes and the complement of a cut-inside box', () => {
  const a = new Vector3(0, 0, 0), b = new Vector3(4, 0, 0);
  const pa = new Vector4(-1, 0, -2, 1), pb = new Vector4(1, 0, 0, 1);
  const right = new Plane(new Vector3(1, 0, 0), -3);
  const left = new Plane(new Vector3(-1, 0, 0), 1);
  assert.deepEqual(visibleEdgeRanges(a, b, pa, pb, [right], false), [[0.75, 1]]);
  assert.deepEqual(visibleEdgeRanges(a, b, pa, pb, [], false), [[0.5, 1]]);
  pa.z = 0;
  assert.deepEqual(visibleEdgeRanges(a, b, pa, pb, [right, left], true), [[0, 0.25], [0.75, 1]]);
});

test('edge targets interpolate perspective depth and clamp to the visible part of a segment', () => {
  const a = new Vector4(-1, 0, 0, 1), b = new Vector4(3, 0, 0, 3);
  const rect = { width: 100, height: 100 };
  assert.equal(edgeParameter(a, b, [0, 1], rect, 50, 55), 0.25);
  assert.equal(edgeParameter(a, b, [0.5, 1], rect, 50, 55), 0.5);
  assert.equal(edgeParameter(a, a, [0, 1], rect, 50, 55), null);
});

test('a dense surface stays measurable without decoding its geometry for hover', () => {
  const point = new Vector3(1, 2, 3);
  const picker = {
    camera: { projectionMatrix: new Matrix4(), matrixWorldInverse: new Matrix4() },
    measureTile: () => ({ rect: { left: 0, top: 0 }, slots: [0], point }),
    scene: { slotInstance: () => 0 },
  };
  const geometry = { t: 'u32', o: 0, n: 1 };
  const data = {
    meta: { instances: { geometry }, geometries: [{ positions: { n: 9 }, indices: { n: 60003 } }] },
    readView(view) {
      assert.deepEqual(view, geometry);
      return [0];
    },
  };
  const snap = new MeasureSnap(picker, { clipping: () => ({ planes: [], intersection: false }) }, data);
  assert.deepEqual(snap.target(0, 0), { kind: 'surface', point });
});
