// Geometry encodings of export format 3 (the exporter's GeometryQuantizer writes them): positions as u16 steps of GRID
// metres from the origin `q.o` (p = o + q·s), normals as octahedral snorm16 pairs. Format 2's f32 arrays pass through.
// Callers branch on the view type and on `q`, never on the format number.

export const GRID = 2 ** -10; // metres; exact in float32 and float64
const SNORM = 32767;

const sign = (v) => (v < 0 ? -1 : 1);

// Rounds half away from zero, as the exporter does.
function snorm(v) {
  const s = Math.min(Math.max(v, -1), 1) * SNORM;
  return sign(s) * Math.round(Math.abs(s));
}

// Writes the octahedral snorm16 pair of the direction (x, y, z) at out[offset], out[offset + 1]. A zero vector has no
// direction and gets (0, 0), i.e. +Z, as in the exporter.
export function octEncodeInto(out, offset, x, y, z) {
  const sum = Math.abs(x) + Math.abs(y) + Math.abs(z);
  if (!(sum > 0)) {
    out[offset] = out[offset + 1] = 0;
    return;
  }
  let a = x / sum;
  let b = y / sum;
  if (z < 0) [a, b] = [(1 - Math.abs(b)) * sign(a), (1 - Math.abs(a)) * sign(b)];
  out[offset] = snorm(a);
  out[offset + 1] = snorm(b);
}

// Writes the unit vector of the octahedral snorm16 pair (a, b) at out[offset..offset + 2].
export function octDecodeInto(out, offset, a, b) {
  let x = Math.max(a / SNORM, -1);
  let y = Math.max(b / SNORM, -1);
  const z = 1 - Math.abs(x) - Math.abs(y);
  if (z < 0) [x, y] = [(1 - Math.abs(y)) * sign(x), (1 - Math.abs(x)) * sign(y)];
  const length = Math.sqrt(x * x + y * y + z * z);
  out[offset] = x / length;
  out[offset + 1] = y / length;
  out[offset + 2] = z / length;
}

// Positions of META geometry g (3 per vertex, geometry-local): u16 steps with `q` decoded, f32 as written.
export function geometryPositions(data, g) {
  const view = data.view(g.positions);
  if (!g.q) {
    if (!(view instanceof Float32Array)) throw new Error(`Geometry positions of type '${g.positions.t}' need a "q" origin and step.`);
    return view;
  }
  if (!(view instanceof Uint16Array)) throw new Error(`Quantized geometry positions must be u16, got '${g.positions.t}'.`);
  const [ox, oy, oz] = g.q.o;
  const s = g.q.s;
  const positions = new Float32Array(view.length);
  for (let i = 0; i < view.length; i += 3) {
    positions[i] = ox + view[i] * s;
    positions[i + 1] = oy + view[i + 1] * s;
    positions[i + 2] = oz + view[i + 2] * s;
  }
  return positions;
}

// Unit normals of META geometry g (3 per vertex): i16 octahedral pairs decoded, f32 as written; null without normals.
export function geometryNormals(data, g) {
  if (!g.normals) return null;
  const view = data.view(g.normals);
  if (view instanceof Float32Array) return view;
  if (!(view instanceof Int16Array)) throw new Error(`Geometry normals must be i16 or f32, got '${g.normals.t}'.`);
  const normals = new Float32Array((view.length / 2) * 3);
  for (let v = 0; v < view.length / 2; v++) octDecodeInto(normals, v * 3, view[v * 2], view[v * 2 + 1]);
  return normals;
}
