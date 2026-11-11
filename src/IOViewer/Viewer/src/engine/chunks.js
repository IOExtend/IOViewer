// Merged spatial chunks: which instances share a chunk, the order of their slots, and the baked vertex data. Pure
// typed-array code (f64 maths, no per-vertex objects), so it runs and is tested in Node.
import { GRID, octDecodeInto, octEncodeInto } from './quantize.js';

export const CHUNK_VERTICES = 32768; // measured best: fewer draws than 16384, less overdraw per draw than 65536
export const VERBATIM = 0; // u16 slot whose positions and normals are copied as exported (translation-only instance)
export const GENERAL = 1; // u16 slot re-quantized onto the global grid from the transformed vertices
export const F32 = 2; // slot over 65535 grid steps: f32 positions in RTC, origin 0, step 1
const U16_MAX = 65535;

/**
 * Splits `members` (instance numbers) into leaves of at most `limit` summed `weight` (vertices) each, or of a single
 * instance: a recursive split at the weighted median of the longest axis of the member centres (3 per instance).
 * Leaves come out depth-first, so neighbouring leaves are neighbours in space. The leaves are views of one copy.
 */
export function splitCells(centres, weight, members, limit) {
  const leaves = [];
  const stack = [Uint32Array.from(members)];
  while (stack.length) {
    const m = stack.pop();
    let total = 0;
    for (const i of m) total += weight[i];
    if (total <= limit || m.length <= 1) {
      if (m.length) leaves.push(m);
      continue;
    }
    sortAlongLongestAxis(m, centres);
    let k = 0;
    for (let sum = 0; k < m.length - 1 && sum + weight[m[k]] <= total / 2; k++) sum += weight[m[k]];
    k = Math.max(k, 1);
    stack.push(m.subarray(k), m.subarray(0, k)); // the lower half is emitted first
  }
  return leaves;
}

// Sorts m by its centre coordinate on the axis where the centres spread most: the coordinate is quantized into the
// high bits of one float64 and the instance number fills the low 32, so a plain numeric sort does it (ties by number).
// A non-finite coordinate sorts as level 0, so no key is NaN and no instance is lost or doubled.
function sortAlongLongestAxis(m, centres) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const i of m) {
    for (let a = 0; a < 3; a++) {
      const c = centres[i * 3 + a];
      if (!Number.isFinite(c)) continue;
      if (c < min[a]) min[a] = c;
      if (c > max[a]) max[a] = c;
    }
  }
  let axis = 0;
  for (let a = 1; a < 3; a++) if (max[a] - min[a] > max[axis] - min[axis]) axis = a;
  const span = max[axis] - min[axis]; // NaN when no centre is finite: every level 0
  const levels = 2 ** 20 - 1;
  const keys = new Float64Array(m.length);
  for (let k = 0; k < m.length; k++) {
    const i = m[k];
    const c = centres[i * 3 + axis];
    const level = span > 0 && Number.isFinite(c) ? Math.round(((c - min[axis]) / span) * levels) : 0;
    keys[k] = level * 2 ** 32 + i;
  }
  keys.sort();
  for (let k = 0; k < m.length; k++) m[k] = keys[k] % 2 ** 32;
}

/**
 * Splits `members` into exactly ceil(n / limit) leaves of at most `limit` instances each, nearby instances together:
 * a recursive split along the longest axis of the member centres, the lower part taking its exact share of the leaves.
 * Leaves come out depth-first. The leaves are views of one copy.
 */
export function splitByCount(centres, members, limit) {
  const leaves = [];
  const stack = [Uint32Array.from(members)];
  while (stack.length) {
    const m = stack.pop();
    const cells = Math.ceil(m.length / limit);
    if (cells <= 1) {
      if (m.length) leaves.push(m);
      continue;
    }
    sortAlongLongestAxis(m, centres);
    const k = Math.ceil((m.length * Math.floor(cells / 2)) / cells);
    stack.push(m.subarray(k), m.subarray(0, k)); // the lower part is emitted first
  }
  return leaves;
}

export const MERGED_CAP = 384 * 2 ** 20; // merged GPU bytes above which the repeated shapes are drawn instanced

/**
 * Which shapes (one geometry, mirrored or not, with one material; `k` instances of `bytes` merged GPU bytes each) are
 * drawn as instanced cells instead of being merged. None while the merged total fits `cap`. Otherwise every shape of
 * at least `minRepeats` instances, those that save most first ((k - 1) * bytes; ties by more instances, then by their
 * order in `shapes`), skipping a shape whose cells (ceil(k / perCell)) would take the cells past `maxDraws`.
 * Returns 1 per instanced shape.
 * Not just enough shapes to fit the cap: measured at 1M elements on an integrated GPU, keeping the cap's worth merged
 * drew the frame 6 % faster (199 vs 212 ms) but took 5x the GPU memory, a 0.7 GB higher GPU-process and 0.45 GB higher
 * page peak, and 0.9 s longer to open.
 */
export function planShapes(shapes, { cap = MERGED_CAP, minRepeats = 16, perCell = 1024, maxDraws = 1024 } = {}) {
  const instanced = new Uint8Array(shapes.length);
  let merged = 0;
  for (const s of shapes) merged += s.k * s.bytes;
  if (merged <= cap) return instanced;
  const saving = (s) => (shapes[s].k - 1) * shapes[s].bytes;
  const order = [...shapes.keys()].filter((s) => shapes[s].k >= minRepeats);
  order.sort((a, b) => saving(b) - saving(a) || shapes[b].k - shapes[a].k || a - b);
  let draws = 0;
  for (const s of order) {
    const cells = Math.ceil(shapes[s].k / perCell);
    if (draws + cells > maxDraws) continue;
    instanced[s] = 1;
    draws += cells;
  }
  return instanced;
}

// Index array of `length` entries for a chunk of `vertices` vertices: u16 only while every index is below 65535, since
// WebGL2 always restarts primitives at 0xFFFF in u16 indices (a 65536-vertex chunk needs u32).
export function indexArray(vertices, length) {
  return vertices > 65535 ? new Uint32Array(length) : new Uint16Array(length);
}

// Sorts members in place by radius (indexed by instance) descending, ties by instance number ascending.
export function sortByRadius(members, radius) {
  return members.sort((a, b) => radius[b] - radius[a] || a - b);
}

// First k in [lo, hi] such that radius[lo..k) >= rMin and radius[k] < rMin, for radius descending over [lo, hi).
export function prefixByRadius(radius, lo, hi, rMin) {
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (radius[mid] >= rMin) lo = mid + 1;
    else hi = mid;
  }
  return lo;
}

// [start, count] in a chunk's triangle index of the slots first..end-1 (indexStart holds one start per slot + end).
export function drawSpan(indexStart, first, end) {
  const start = indexStart[first];
  return [start, end > first ? indexStart[end] - start : 0];
}

/**
 * How instance i is stored (VERBATIM, GENERAL or F32) and its slot origin in `origin` (3 doubles, RTC). `source` is the
 * instance's geometry as from bakeSource: u16+q positions of step GRID under a translation-only matrix are copied as
 * they are (origin = translation + q.o); otherwise the box of the transformed geometry box decides: up to 65535 steps
 * of GRID from origin = that box's minimum snapped down to the grid, else f32.
 */
export function placeSlot(matrices, i, source, origin) {
  const m = matrices.subarray(i * 12, i * 12 + 12);
  const identity = m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 0 && m[4] === 1 && m[5] === 0 && m[6] === 0 && m[7] === 0 && m[8] === 1;
  if (identity && source.q && source.q.s === GRID) {
    for (let a = 0; a < 3; a++) origin[a] = m[9 + a] + source.q.o[a];
    return VERBATIM;
  }
  let fits = true;
  for (let a = 0; a < 3; a++) {
    // Row a of the transform over the 8 corners of the local box: its range is the sum of the per-axis ranges.
    let lo = m[9 + a];
    let hi = m[9 + a];
    for (let c = 0; c < 3; c++) {
      const u = m[c * 3 + a] * source.min[c];
      const v = m[c * 3 + a] * source.max[c];
      lo += Math.min(u, v);
      hi += Math.max(u, v);
    }
    origin[a] = Math.floor(lo / GRID) * GRID;
    if (!(Math.ceil((hi - origin[a]) / GRID) <= U16_MAX)) fits = false;
  }
  if (!fits) origin.fill(0);
  return fits ? GENERAL : F32;
}

/**
 * Bakes one chunk: the slots of `members` in this order (slot j = members[j]), every vertex in world (RTC) space.
 * ctx = { matrices (12 per instance), geometryOf, mirrored (Uint8Array), kind (per instance, from placeSlot),
 * origins (Float64Array, 3 per instance), source(g) (see bakeSource), textured }.
 * Returns q (u16 x4, or f32 x4 when the members are F32: xyz position steps, w the slot within the chunk), o (oct
 * normals, i16 x2), uv (f32 x2, textured only, zeros where the geometry has none), index (u16, u32 from 65536
 * vertices; mirrored triangles written a, c, b), indexStart (per slot + end) and per slot origins (f32 x3) and steps.
 */
export function bakeChunk(members, ctx) {
  const n = members.length;
  let vertices = 0;
  let indices = 0;
  for (const i of members) {
    const s = ctx.source(ctx.geometryOf[i]);
    vertices += s.vertices;
    indices += s.indices.length;
  }
  const f32 = ctx.kind[members[0]] === F32;
  const q = f32 ? new Float32Array(vertices * 4) : new Uint16Array(vertices * 4);
  const o = new Int16Array(vertices * 2);
  const uv = ctx.textured ? new Float32Array(vertices * 2) : null;
  const index = indexArray(vertices, indices);
  const indexStart = new Uint32Array(n + 1);
  const origins = new Float32Array(n * 3);
  const steps = new Float32Array(n);
  const normal = new Float64Array(3);
  let base = 0;
  let at = 0;
  for (let j = 0; j < n; j++) {
    const i = members[j];
    const s = ctx.source(ctx.geometryOf[i]);
    const kind = ctx.kind[i];
    if ((kind === F32) !== f32) throw new Error('A chunk mixes f32 and u16 slots.');
    const m = ctx.matrices.subarray(i * 12, i * 12 + 12);
    for (let a = 0; a < 3; a++) origins[j * 3 + a] = ctx.origins[i * 3 + a];
    steps[j] = f32 ? 1 : GRID;
    if (kind === VERBATIM) copyVertices(s, q, o, base, j);
    else transformVertices(s, m, kind, ctx.origins.subarray(i * 3, i * 3 + 3), q, o, base, j, normal);
    if (uv && s.uvs) uv.set(s.uvs, base * 2);
    indexStart[j] = at;
    const src = s.indices;
    if (ctx.mirrored[i]) {
      for (let t = 0; t < src.length; t += 3) {
        index[at++] = src[t] + base;
        index[at++] = src[t + 2] + base;
        index[at++] = src[t + 1] + base;
      }
    } else for (let t = 0; t < src.length; t++) index[at++] = src[t] + base;
    base += s.vertices;
  }
  indexStart[n] = at;
  return { q, o, uv, index, indexStart, origins, steps };
}

// Translation-only u16 instance: the exported steps and oct normals as they are.
function copyVertices(s, q, o, base, slot) {
  const p = s.positions;
  for (let v = 0; v < s.vertices; v++) {
    const k = (base + v) * 4;
    q[k] = p[v * 3];
    q[k + 1] = p[v * 3 + 1];
    q[k + 2] = p[v * 3 + 2];
    q[k + 3] = slot;
  }
  if (s.oct) o.set(s.oct, base * 2);
  else {
    const normals = unitNormals(s);
    for (let v = 0; v < s.vertices; v++) octEncodeInto(o, (base + v) * 2, normals[v * 3], normals[v * 3 + 1], normals[v * 3 + 2]);
  }
}

// world = M·p in f64; q = steps of GRID from the slot origin (GENERAL) or the f32 world position (F32). Normals by the
// cofactor matrix times sign(det), i.e. the inverse transpose up to scale: right for mirroring and shear.
function transformVertices(s, m, kind, origin, q, o, base, slot, normal) {
  const [a0, a1, a2, b0, b1, b2, c0, c1, c2, t0, t1, t2] = m;
  // Cofactor columns: b×c, c×a, a×b.
  const det = a0 * (b1 * c2 - b2 * c1) - b0 * (a1 * c2 - a2 * c1) + c0 * (a1 * b2 - a2 * b1);
  const sg = det < 0 ? -1 : 1;
  const k00 = (b1 * c2 - b2 * c1) * sg, k01 = (b2 * c0 - b0 * c2) * sg, k02 = (b0 * c1 - b1 * c0) * sg;
  const k10 = (c1 * a2 - c2 * a1) * sg, k11 = (c2 * a0 - c0 * a2) * sg, k12 = (c0 * a1 - c1 * a0) * sg;
  const k20 = (a1 * b2 - a2 * b1) * sg, k21 = (a2 * b0 - a0 * b2) * sg, k22 = (a0 * b1 - a1 * b0) * sg;
  const p = s.positions;
  const qo = s.q ? s.q.o : null;
  const qs = s.q ? s.q.s : 1;
  const normals = unitNormals(s);
  for (let v = 0; v < s.vertices; v++) {
    let x = p[v * 3], y = p[v * 3 + 1], z = p[v * 3 + 2];
    if (qo) {
      x = qo[0] + x * qs;
      y = qo[1] + y * qs;
      z = qo[2] + z * qs;
    }
    const wx = a0 * x + b0 * y + c0 * z + t0;
    const wy = a1 * x + b1 * y + c1 * z + t1;
    const wz = a2 * x + b2 * y + c2 * z + t2;
    const k = (base + v) * 4;
    if (kind === F32) {
      q[k] = wx;
      q[k + 1] = wy;
      q[k + 2] = wz;
    } else {
      q[k] = step(wx - origin[0]);
      q[k + 1] = step(wy - origin[1]);
      q[k + 2] = step(wz - origin[2]);
    }
    q[k + 3] = slot;
    const nx = normals[v * 3], ny = normals[v * 3 + 1], nz = normals[v * 3 + 2];
    normal[0] = k00 * nx + k10 * ny + k20 * nz;
    normal[1] = k01 * nx + k11 * ny + k21 * nz;
    normal[2] = k02 * nx + k12 * ny + k22 * nz;
    octEncodeInto(o, (base + v) * 2, normal[0], normal[1], normal[2]);
  }
}

const step = (d) => Math.min(Math.max(Math.round(d / GRID), 0), U16_MAX);

/**
 * A geometry as bakeChunk and placeSlot read it: positions (u16 steps with q = {o, s}, or f32), oct normals `oct`
 * (i16 pairs, or null), f32 `normals` as written (or null), indices, uvs (or null), the vertex count and the local box
 * (min, max) of the decoded positions. Unit f32 normals are made only when a transformed slot needs them (unitNormals):
 * translation-only slots copy the oct pairs, and a large model of own geometry must not hold a decoded copy of all.
 */
export function bakeSource(positions, q, normals, indices, uvs) {
  const vertices = positions.length / 3;
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (let v = 0; v < vertices; v++) {
    for (let a = 0; a < 3; a++) {
      const c = q ? q.o[a] + positions[v * 3 + a] * q.s : positions[v * 3 + a];
      if (c < min[a]) min[a] = c;
      if (c > max[a]) max[a] = c;
    }
  }
  const oct = normals instanceof Int16Array ? normals : null;
  return { positions, q, oct, normals: oct ? null : normals, indices, uvs, vertices, min, max };
}

// Unit f32 normals of a bakeSource (3 per vertex), made on first use and kept on it: decoded from the oct pairs, or
// computed from the faces when the geometry has none.
export function unitNormals(s) {
  if (!s.normals && s.oct) {
    s.normals = new Float32Array(s.vertices * 3);
    for (let v = 0; v < s.vertices; v++) octDecodeInto(s.normals, v * 3, s.oct[v * 2], s.oct[v * 2 + 1]);
  } else if (!s.normals) s.normals = vertexNormals(s.positions, s.q, s.indices);
  return s.normals;
}

// Area-weighted vertex normals from the faces, as three's computeVertexNormals.
function vertexNormals(positions, q, indices) {
  const p = (v, a) => (q ? q.o[a] + positions[v * 3 + a] * q.s : positions[v * 3 + a]);
  const out = new Float32Array(positions.length);
  for (let t = 0; t < indices.length; t += 3) {
    const [a, b, c] = [indices[t], indices[t + 1], indices[t + 2]];
    const e1 = [0, 1, 2].map((k) => p(b, k) - p(a, k));
    const e2 = [0, 1, 2].map((k) => p(c, k) - p(a, k));
    const n = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    for (const v of [a, b, c]) for (let k = 0; k < 3; k++) out[v * 3 + k] += n[k];
  }
  for (let v = 0; v < out.length; v += 3) {
    const l = Math.hypot(out[v], out[v + 1], out[v + 2]) || 1;
    out[v] /= l;
    out[v + 1] /= l;
    out[v + 2] /= l;
  }
  return out;
}
