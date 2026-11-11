import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  F32, GENERAL, MERGED_CAP, VERBATIM, bakeChunk, bakeSource, drawSpan, indexArray, placeSlot, planShapes, prefixByRadius, sortByRadius,
  splitByCount, splitCells,
} from '../../src/engine/chunks.js';
import { GRID, octDecodeInto } from '../../src/engine/quantize.js';

// Seeded generator, so a failure repeats.
function random(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 2 ** 32);
}

// 12 floats per instance: columns X, Y, Z of the linear part, then the translation.
const matrices = (...list) => Float32Array.from(list.flat());
const identity = (t) => [1, 0, 0, 0, 1, 0, 0, 0, 1, ...t];

// A bakeChunk context for instances 0..n-1 over the given sources (one geometry per instance).
function context(mats, sources) {
  const n = sources.length;
  const ctx = {
    matrices: mats,
    geometryOf: Uint32Array.from({ length: n }, (_, i) => i),
    mirrored: new Uint8Array(n),
    kind: new Uint8Array(n),
    origins: new Float64Array(n * 3),
    source: (g) => sources[g],
    textured: false,
  };
  for (let i = 0; i < n; i++) {
    ctx.kind[i] = placeSlot(mats, i, sources[i], ctx.origins.subarray(i * 3, i * 3 + 3));
    const m = mats.subarray(i * 12, i * 12 + 9);
    const det = m[0] * (m[4] * m[8] - m[5] * m[7]) - m[3] * (m[1] * m[8] - m[2] * m[7]) + m[6] * (m[1] * m[5] - m[2] * m[4]);
    ctx.mirrored[i] = det < 0 ? 1 : 0;
  }
  return ctx;
}

// Decoded world position of baked vertex v of slot j.
function world(baked, j, v) {
  return [0, 1, 2].map((a) => baked.origins[j * 3 + a] + baked.q[v * 4 + a] * baked.steps[j]);
}
const normalOf = (baked, v) => {
  const n = new Float64Array(3);
  octDecodeInto(n, 0, baked.o[v * 2], baked.o[v * 2 + 1]);
  return [...n];
};
const sub = (a, b) => a.map((v, k) => v - b[k]);
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const unit = (a) => a.map((v) => v / Math.hypot(...a));
const apply = (m, p) => [0, 1, 2].map((a) => m[a] * p[0] + m[3 + a] * p[1] + m[6 + a] * p[2] + m[9 + a]);

test('split: every instance exactly once, each leaf <= limit or single, depth-first coherent', () => {
  const next = random(7);
  const n = 1000;
  const centres = Float32Array.from({ length: n * 3 }, () => next() * 500);
  const weight = Uint32Array.from({ length: n }, () => 1 + Math.floor(next() * 200));
  const leaves = splitCells(centres, weight, Uint32Array.from({ length: n }, (_, i) => i), 1000);
  const seen = new Uint8Array(n);
  for (const leaf of leaves) {
    let sum = 0;
    for (const i of leaf) {
      seen[i]++;
      sum += weight[i];
    }
    assert.ok(sum <= 1000 || leaf.length === 1, `leaf of ${leaf.length} weighs ${sum}`);
  }
  assert.ok(seen.every((c) => c === 1));

  // On a line, depth-first leaves (lower half first) come out in order along it.
  const line = new Float32Array(64 * 3);
  for (let i = 0; i < 64; i++) line[i * 3 + 1] = (i * 37) % 64; // shuffled positions along Y
  const order = splitCells(line, new Uint32Array(64).fill(1), Uint32Array.from({ length: 64 }, (_, i) => i), 4).flatMap((l) => [...l]);
  const ys = order.map((i) => line[i * 3 + 1]);
  assert.deepEqual(ys, [...ys].sort((a, b) => a - b));
});

test('oversize instance -> own chunk, Uint32Array index', () => {
  const centres = Float32Array.from([0, 0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0]);
  const leaves = splitCells(centres, Uint32Array.from([10, 70000, 10, 10]), Uint32Array.from([0, 1, 2, 3]), 32768);
  assert.deepEqual(leaves.find((l) => l.includes(1)), Uint32Array.from([1]));
  assert.equal(leaves.flatMap((l) => [...l]).length, 4);

  const positions = new Float32Array(70000 * 3);
  positions[69999 * 3] = 1;
  const big = bakeSource(positions, null, new Float32Array(70000 * 3).fill(1), Uint32Array.from([0, 69999, 1]), null);
  const baked = bakeChunk(Uint32Array.from([0]), context(matrices(identity([0, 0, 0])), [big]));
  assert.ok(baked.index instanceof Uint32Array);
  assert.deepEqual([...baked.index], [0, 69999, 1]);
  const small = bakeChunk(Uint32Array.from([0]), context(matrices(identity([0, 0, 0])), [bakeSource(new Float32Array(9), null, null, Uint16Array.from([0, 1, 2]), null)]));
  assert.ok(small.index instanceof Uint16Array);
});

test('grid: identity instance copies q verbatim (zero extra error); rotated instances sharing a world vertex land on the same grid point; |error| <= GRID/2', () => {
  // Exported u16 geometry: o is a multiple of GRID.
  const q = { o: [1, 2, 0.5], s: GRID };
  const steps = Uint16Array.from([0, 0, 0, 1000, 0, 0, 0, 1000, 0, 7, 9, 11]);
  const exported = bakeSource(steps, q, Int16Array.from([0, 0, 0, 0, 0, 0, 0, 0]), Uint16Array.from([0, 1, 2]), null);
  const ctx = context(matrices(identity([3.25, -1.5, 0.125])), [exported]);
  assert.equal(ctx.kind[0], VERBATIM);
  const baked = bakeChunk(Uint32Array.from([0]), ctx);
  for (let v = 0; v < 4; v++) {
    assert.deepEqual([...baked.q.subarray(v * 4, v * 4 + 3)], [...steps.subarray(v * 3, v * 3 + 3)]);
    assert.equal(baked.q[v * 4 + 3], 0); // slot 0 of the chunk
    assert.deepEqual(world(baked, 0, v), [0, 1, 2].map((a) => [3.25, -1.5, 0.125][a] + q.o[a] + steps[v * 3 + a] * GRID));
  }

  // Two placements of one f32 geometry that meet at a world vertex: (0.375, 0, 0) turned 90° about Z and moved, and
  // turned 180° and moved, both reach (10.5, 5.375, 0.25) exactly.
  const shape = bakeSource(Float32Array.from([0.375, 0, 0, 0, 0, 0, 0, 0.5, 0]), null, null, Uint16Array.from([0, 1, 2]), null);
  const turned = matrices([0, 1, 0, -1, 0, 0, 0, 0, 1, 10.5, 5, 0.25], [-1, 0, 0, 0, -1, 0, 0, 0, 1, 10.875, 5.375, 0.25]);
  const both = context(turned, [shape, shape]);
  assert.deepEqual([...both.kind], [GENERAL, GENERAL]);
  const pair = bakeChunk(Uint32Array.from([0, 1]), both);
  assert.deepEqual(world(pair, 0, 0), world(pair, 1, 3)); // vertex 0 of each slot
  assert.deepEqual(world(pair, 0, 0), [10.5, 5.375, 0.25]);
  assert.deepEqual([pair.q[3], pair.q[3 * 4 + 3]], [0, 1]);

  // Random rotations: every decoded vertex within GRID/2 per axis of the exact transform.
  const next = random(3);
  const points = Float32Array.from({ length: 300 }, () => next() * 4 - 2);
  const cloud = bakeSource(points, null, null, Uint16Array.from({ length: 99 }, (_, k) => k), null);
  for (let k = 0; k < 20; k++) {
    const [a, b] = [next() * Math.PI * 2, next() * Math.PI];
    const m = matrices([Math.cos(a) * Math.cos(b), Math.sin(a) * Math.cos(b), -Math.sin(b), -Math.sin(a), Math.cos(a), 0, Math.cos(a) * Math.sin(b), Math.sin(a) * Math.sin(b), Math.cos(b), 100 * next(), -50 * next(), 7.3]);
    const one = bakeChunk(Uint32Array.from([0]), context(m, [cloud]));
    for (let v = 0; v < 100; v++) {
      const exact = apply(m, [...points.subarray(v * 3, v * 3 + 3)]);
      world(one, 0, v).forEach((c, axis) => assert.ok(Math.abs(c - exact[axis]) <= GRID / 2 + 1e-9, `error ${c - exact[axis]}`));
    }
  }
});

test('f32 layout for extent > 65535 steps', () => {
  const long = bakeSource(Float32Array.from([0, 0, 0, 100, 0, 0, 0, 0.5, 0]), null, null, Uint16Array.from([0, 1, 2]), null);
  const m = matrices([0, 1, 0, -1, 0, 0, 0, 0, 1, 1000.25, 2000.5, 3]);
  const ctx = context(m, [long]);
  assert.equal(ctx.kind[0], F32);
  assert.deepEqual([...ctx.origins], [0, 0, 0]);
  const baked = bakeChunk(Uint32Array.from([0]), ctx);
  assert.ok(baked.q instanceof Float32Array);
  assert.equal(baked.steps[0], 1);
  assert.deepEqual(world(baked, 0, 1), [1000.25, 2100.5, 3]);
  // Just under 65535 steps stays u16.
  const fits = bakeSource(Float32Array.from([0, 0, 0, 63.9, 0, 0]), null, null, new Uint16Array(0), null);
  assert.equal(placeSlot(matrices(identity([0, 0, 0])), 0, fits, new Float64Array(3)), GENERAL);
});

test('mirrored: triangle written (a,c,b), cofactor normal outward; sheared normal ⟂ transformed edges (dot < 1e-4)', () => {
  const p = [[0, 0, 0], [1, 0, 1], [0, 1, 0]];
  const n = unit(cross(sub(p[1], p[0]), sub(p[2], p[0]))); // (-1, 0, 1)/√2, the side the winding faces
  const triangle = bakeSource(Float32Array.from(p.flat()), null, Float32Array.from([...n, ...n, ...n]), Uint16Array.from([0, 1, 2]), null);
  const mirror = [-1, 0, 0, 0, 1, 0, 0, 0, 1, 5, 0, 0];
  const shear = [1, 0, 0, 0.5, 1, 0, 0, 0.3, 1, 0, 0, 0];
  const ctx = context(matrices(mirror, shear), [triangle, triangle]);
  assert.deepEqual([...ctx.mirrored], [1, 0]);
  const baked = bakeChunk(Uint32Array.from([0, 1]), ctx);
  assert.deepEqual([...baked.index], [0, 2, 1, 3, 4, 5]);
  for (const [j, m] of [[0, mirror], [1, shear]]) {
    const w = [0, 1, 2].map((v) => apply(m, p[v]));
    const written = [...baked.index.subarray(j * 3, j * 3 + 3)].map((v) => v - j * 3);
    const face = unit(cross(sub(w[written[1]], w[written[0]]), sub(w[written[2]], w[written[0]])));
    for (let v = 0; v < 3; v++) {
      const normal = normalOf(baked, j * 3 + v);
      assert.ok(dot(normal, face) > 0.9999, `slot ${j}: normal ${normal} vs face ${face}`);
      assert.ok(Math.abs(dot(normal, unit(sub(w[1], w[0])))) < 1e-4);
      assert.ok(Math.abs(dot(normal, unit(sub(w[2], w[0])))) < 1e-4);
    }
  }
});

test('radius order descending, stable', () => {
  const radius = Float32Array.from([1, 3, 3, 2, 3]);
  assert.deepEqual([...sortByRadius(Uint32Array.from([0, 1, 2, 3, 4]), radius)], [1, 2, 4, 3, 0]);
  assert.deepEqual([...sortByRadius(Uint32Array.from([4, 3, 2, 1, 0]), radius)], [1, 2, 4, 3, 0]);
});

test('prefixByRadius binary search == linear scan (property, 1000 cases)', () => {
  const next = random(11);
  for (let c = 0; c < 1000; c++) {
    const n = Math.floor(next() * 40);
    const radius = Float32Array.from({ length: n }, () => Math.floor(next() * 8)).sort().reverse();
    const lo = Math.floor(next() * (n + 1));
    const hi = lo + Math.floor(next() * (n - lo + 1));
    const rMin = next() < 0.5 ? Math.floor(next() * 9) : next() * 9;
    let k = lo;
    while (k < hi && radius[k] >= rMin) k++;
    assert.equal(prefixByRadius(radius, lo, hi, rMin), k, `case ${c}`);
  }
});

test('drawSpan covers the slots first..end-1, empty when end <= first', () => {
  const starts = Uint32Array.from([0, 36, 72, 108]);
  assert.deepEqual(drawSpan(starts, 1, 3), [36, 72]);
  assert.deepEqual(drawSpan(starts, 2, 2), [72, 0]);
  assert.deepEqual(drawSpan(starts, 0, 3), [0, 108]);
});

test('index type: u16 up to 65535 vertices, u32 from 65536 (0xFFFF restarts primitives in u16)', () => {
  assert.ok(indexArray(65535, 3) instanceof Uint16Array);
  assert.ok(indexArray(65536, 3) instanceof Uint32Array);
  const bake = (vertices) => {
    const last = vertices - 1;
    const source = bakeSource(new Float32Array(vertices * 3), null, new Float32Array(vertices * 3).fill(1), Uint32Array.from([0, last - 1, last]), null);
    return bakeChunk(Uint32Array.from([0]), context(matrices(identity([0, 0, 0])), [source])).index;
  };
  const u16 = bake(65535);
  assert.ok(u16 instanceof Uint16Array);
  assert.deepEqual([...u16], [0, 65533, 65534]);
  assert.ok(!u16.includes(65535));
  const u32 = bake(65536);
  assert.ok(u32 instanceof Uint32Array);
  assert.deepEqual([...u32], [0, 65534, 65535]);
});

test('split: non-finite centres neither drop nor double an instance', () => {
  const centres = Float32Array.from([0, 0, 0, NaN, 0, 0, 5, Infinity, 0, -Infinity, 1, NaN, 3, 3, 3, 9, 1, 2]);
  const leaves = splitCells(centres, new Uint32Array(6).fill(1), Uint32Array.from([0, 1, 2, 3, 4, 5]), 1);
  assert.deepEqual(leaves.flatMap((l) => [...l]).sort(), [0, 1, 2, 3, 4, 5]);
  const all = splitCells(Float32Array.from([NaN, NaN, NaN, NaN, NaN, NaN]), Uint32Array.from([1, 1]), Uint32Array.from([0, 1]), 1);
  assert.deepEqual(all.flatMap((l) => [...l]).sort(), [0, 1]);
});

test('unit normals are decoded only for transformed slots: a translation-only bake keeps the oct pairs only', () => {
  const q = { o: [0, 0, 0], s: GRID };
  const exported = bakeSource(Uint16Array.from([0, 0, 0, 1000, 0, 0, 0, 1000, 0]), q, Int16Array.from([0, 0, 0, 0, 0, 0]), Uint16Array.from([0, 1, 2]), null);
  assert.equal(exported.normals, null);
  bakeChunk(Uint32Array.from([0]), context(matrices(identity([1, 2, 3])), [exported]));
  assert.equal(exported.normals, null);
  bakeChunk(Uint32Array.from([0]), context(matrices([0, 1, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0]), [exported]));
  assert.ok(exported.normals instanceof Float32Array);
  assert.deepEqual([...exported.normals.subarray(0, 3)], [0, 0, 1]);
});

test('plan: under cap all merged', () => {
  const shapes = [{ k: 100, bytes: 1000 }, { k: 1, bytes: 5000 }, { k: 20, bytes: 10 }];
  assert.deepEqual([...planShapes(shapes, { cap: 100 * 1000 + 5000 + 200 })], [0, 0, 0]); // exactly at the cap
  assert.deepEqual([...planShapes(shapes)], [0, 0, 0]); // MERGED_CAP
  assert.equal(MERGED_CAP, 384 * 2 ** 20);
  assert.deepEqual([...planShapes([], { cap: 0 })], []);
});

test('over cap moves by (k-1)*bytes desc with deterministic ties', () => {
  // Savings: A 190, B 190 with more instances, C = A, D 9900. One cell each; maxDraws admits the first ones in order.
  const shapes = [{ k: 20, bytes: 10 }, { k: 39, bytes: 5 }, { k: 20, bytes: 10 }, { k: 100, bytes: 100 }];
  const plan = (maxDraws) => [...planShapes(shapes, { cap: 0, minRepeats: 16, maxDraws })];
  assert.deepEqual(plan(1), [0, 0, 0, 1]); // D
  assert.deepEqual(plan(2), [0, 1, 0, 1]); // then B (same saving as A, more instances)
  assert.deepEqual(plan(3), [1, 1, 0, 1]); // then A (same as C, earlier)
  // Over the cap every repeated shape is instanced, not only enough to fit it.
  assert.deepEqual([...planShapes(shapes, { cap: 10594 })], [1, 1, 1, 1]); // total 10595
});

test('k < 16 and unique stay merged', () => {
  const shapes = [{ k: 15, bytes: 1e9 }, { k: 1, bytes: 1e9 }, { k: 16, bytes: 10 }];
  assert.deepEqual([...planShapes(shapes)], [0, 0, 1]);
  // A lower minRepeats (tests) moves them too.
  assert.deepEqual([...planShapes(shapes, { minRepeats: 1 })], [1, 1, 1]);
});

test('stops at 1024 draws', () => {
  // ceil(k / 1024) cells each: 1000, then 30 would pass 1024 and is skipped, 24 fills it exactly.
  const shapes = [{ k: 1024 * 1000, bytes: 1000 }, { k: 1024 * 30, bytes: 1000 }, { k: 1024 * 24 - 5, bytes: 1000 }];
  assert.deepEqual([...planShapes(shapes, { cap: 0 })], [1, 0, 1]);
  assert.deepEqual([...planShapes(shapes, { cap: 0, maxDraws: 999 })], [0, 1, 1]);
});

test('cells: exactly ceil(n / limit) leaves of at most limit instances, each instance once, neighbours together', () => {
  const next = random(11);
  for (const n of [0, 1, 1024, 1025, 3000, 5121]) {
    // On a line x = instance number, given in shuffled order: every leaf must be a run of consecutive numbers.
    const members = Uint32Array.from({ length: n }, (_, i) => i).sort(() => next() - 0.5);
    const centres = Float32Array.from({ length: n * 3 }, (_, k) => (k % 3 === 0 ? k / 3 : 0));
    const leaves = splitByCount(centres, members, 1024);
    assert.equal(leaves.length, Math.ceil(n / 1024), `n = ${n}`);
    const seen = new Uint8Array(n);
    for (const leaf of leaves) {
      assert.ok(leaf.length <= 1024 && leaf.length > 0);
      const sorted = [...leaf].sort((a, b) => a - b);
      assert.equal(sorted[sorted.length - 1] - sorted[0], leaf.length - 1);
      for (const i of leaf) seen[i]++;
    }
    assert.ok(seen.every((c) => c === 1));
  }
});
