import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GRID, geometryNormals, geometryPositions, octDecodeInto, octEncodeInto } from '../../src/engine/quantize.js';

// The same table is in the exporter's tests (Format3_OctNormals_MatchSharedVectors).
const TABLE = [
  [[1, 0, 0], [32767, 0]],
  [[0, -1, 0], [0, -32767]],
  [[0, 0, 1], [0, 0]],
  [[0, 0, -1], [32767, 32767]],
  [[1, 1, 1], [10922, 10922]],
  [[1, -2, -3], [21845, -27306]],
];

function angle(a, b) {
  const la = Math.hypot(...a);
  const lb = Math.hypot(...b);
  const dot = (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / la / lb;
  return Math.acos(Math.min(1, Math.max(-1, dot)));
}

// A data object over the given views, as loadModelData returns one.
const fakeData = (views) => ({ view: (v) => views[v.name] });

test('octEncodeInto writes the shared table exactly; octDecodeInto turns it back within 1e-4 rad', () => {
  for (const [n, pair] of TABLE) {
    const encoded = new Int16Array(2);
    octEncodeInto(encoded, 0, ...n);
    assert.deepEqual([...encoded], pair, `encode ${n}`);
    const decoded = new Float32Array(3);
    octDecodeInto(decoded, 0, ...pair);
    assert.ok(angle(n, decoded) < 1e-4, `decode ${pair}: ${angle(n, decoded)} rad`);
    assert.ok(Math.abs(Math.hypot(...decoded) - 1) < 1e-6);
  }
});

test('10 000 random directions survive the snorm16 octahedral round trip within 1e-4 rad', () => {
  let seed = 12345;
  const random = () => ((seed = (seed * 1103515245 + 12345) % 2 ** 31) / 2 ** 31) * 2 - 1;
  const pair = new Int16Array(2);
  const back = new Float32Array(3);
  let worst = 0;
  for (let k = 0; k < 10000; k++) {
    const n = [random(), random(), random()];
    if (Math.hypot(...n) < 1e-3) continue;
    octEncodeInto(pair, 0, ...n);
    octDecodeInto(back, 0, pair[0], pair[1]);
    worst = Math.max(worst, angle(n, back));
  }
  assert.ok(worst < 1e-4, `worst ${worst} rad`);
});

test('geometryPositions decodes u16 + q exactly and passes f32 through', () => {
  const q = { o: [-5, 2.5, 1000 + GRID], s: GRID };
  const steps = Uint16Array.from([0, 1, 65535, 1024, 3, 777]);
  const decoded = geometryPositions(fakeData({ p: steps }), { positions: { name: 'p', t: 'u16' }, q });
  assert.ok(decoded instanceof Float32Array);
  assert.deepEqual([...decoded], [...steps].map((v, i) => q.o[i % 3] + v * q.s)); // every sum is exact in float32

  const f32 = Float32Array.from([1.5, -2, 3.25]);
  assert.equal(geometryPositions(fakeData({ p: f32 }), { positions: { name: 'p', t: 'f32' } }), f32);
});

test('geometryPositions refuses a u16 view without q and a q with an f32 view', () => {
  assert.throws(() => geometryPositions(fakeData({ p: new Uint16Array(3) }), { positions: { name: 'p', t: 'u16' } }), /q/);
  assert.throws(() => geometryPositions(fakeData({ p: new Float32Array(3) }), { positions: { name: 'p', t: 'f32' }, q: { o: [0, 0, 0], s: GRID } }), /u16/);
});

test('geometryNormals decodes i16 pairs, passes f32 through and is null without normals', () => {
  const pairs = Int16Array.from(TABLE.flatMap(([, pair]) => pair));
  const decoded = geometryNormals(fakeData({ n: pairs }), { normals: { name: 'n', t: 'i16' } });
  assert.ok(decoded instanceof Float32Array);
  assert.equal(decoded.length, TABLE.length * 3);
  TABLE.forEach(([n], v) => assert.ok(angle(n, decoded.subarray(v * 3, v * 3 + 3)) < 1e-4));

  const f32 = Float32Array.from([0, 0, 1]);
  assert.equal(geometryNormals(fakeData({ n: f32 }), { normals: { name: 'n', t: 'f32' } }), f32);
  assert.equal(geometryNormals(fakeData({}), { normals: null }), null);
});
