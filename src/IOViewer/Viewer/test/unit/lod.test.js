import assert from 'node:assert/strict';
import test from 'node:test';
import { CLUSTER_FORMAT, detailInputBytes, detailMeshBytes, FACES, validateClusters, VERTICES } from '../../src/stream/clusters.js';
import { chooseLevel, LOD_ERROR, makeTemplates } from '../../src/stream/lodShapes.js';

test('nested levels keep every vessel and apply hysteresis at each screen-error threshold', () => {
  const meshes = makeTemplates();
  assert.deepEqual(meshes.map((g) => g.index.count / 3), [12, 76, 540]);
  for (const [level, error] of LOD_ERROR.entries()) {
    assert.equal(chooseLevel(1.24 / error, level), level);
    assert.equal(chooseLevel(1.26 / error, level), level + 1);
    assert.equal(chooseLevel(0.96 / error, level + 1), level + 1);
    assert.equal(chooseLevel(0.94 / error, level + 1), level);
  }
  // An intermediate point along the first edge starts at the coarse edge midpoint during geomorphing.
  const from = meshes[1].getAttribute('previousPosition');
  assert(Math.abs(from.getX(1) - 0.34) < 1e-6);
  assert(Math.abs(from.getY(1) - 0.34) < 1e-6);
});

test('fine pages reconstruct the original index template and enforce contiguous byte ranges', () => {
  assert.equal(FACES.length / 3, 1084);
  assert(FACES.every((n) => n < VERTICES));
  assert(detailInputBytes(64) <= 408 * 1024);
  assert.equal(detailMeshBytes(64), 834_048);
  const box = { min: [0, 0, 0], max: [2, 2, 2] };
  const node = { ...box, anchor: box.min, id: 0, first: 0, offset: 0, count: 1, counts: [1, 0, 0] };
  const root = { ...box, x: 0, y: 0, first: 0, count: 1, children: [node] };
  const manifest = { ...box, format: CLUSTER_FORMAT, palette: [box.min, [1, 0, 0], [0, 1, 0]], origin: box.min,
    elements: 1, triangles: 1084, detailBytes: detailInputBytes(1), roots: [root] };
  assert.equal(validateClusters(manifest), manifest);
  for (const patch of [{ offset: 1 }, { count: 0 }, { id: 2 }, { counts: [65, 0, 0] }]) {
    assert.throws(() => validateClusters({ ...manifest, roots: [{ ...root, children: [{ ...node, ...patch }] }] }), /Invalid cluster/);
  }
});
