export const SIDES = 32;
export const PROFILE = [0.68, 0.91, 1, 1.07, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1.07, 1, 0.91, 0.68];
export const VERTICES = SIDES * PROFILE.length;
export const STEP = 1 / 1024;
export const INSTANCE_FLOATS = 7;
export const MAX_CLUSTER_OBJECTS = 64;
export const CLUSTER_FORMAT = 'ioviewer-vessel-clusters-1';

export function vesselIndices(sides, rings) {
  const indices = [];
  for (let ring = 0; ring < rings - 1; ring++) {
    for (let side = 0; side < sides; side++) {
      const a = ring * sides + side, b = ring * sides + (side + 1) % sides;
      indices.push(a, b, a + sides, b, b + sides, a + sides);
    }
  }
  const top = (rings - 1) * sides;
  for (let side = 1; side < sides - 1; side++) indices.push(0, side + 1, side, top, top + side, top + side + 1);
  return Uint16Array.from(indices);
}

export const FACES = vesselIndices(SIDES, PROFILE.length);
export const detailInputBytes = (count) => count * VERTICES * 12;
export const detailMeshBytes = (count) => detailInputBytes(count) + count * FACES.length * 2;

const point = (v) => Array.isArray(v) && v.length === 3 && v.every(Number.isFinite);
const box = (v) => point(v?.min) && point(v?.max) && v.min.every((x, i) => x <= v.max[i]);
const whole = (n) => Number.isSafeInteger(n) && n >= 0;

export function validateClusters(manifest) {
  if (manifest?.format !== CLUSTER_FORMAT || !box(manifest) || !point(manifest.origin)
    || !Array.isArray(manifest.palette) || manifest.palette.length !== 3
    || !manifest.palette.every((p) => point(p) && p.every((n) => n >= 0 && n <= 1))
    || !Array.isArray(manifest.roots) || !manifest.roots.length) throw new Error('Invalid cluster manifest.');
  let objects = 0, id = 0, offset = 0;
  for (const root of manifest.roots) {
    if (!box(root) || !whole(root.x) || !whole(root.y) || root.first !== objects
      || !Array.isArray(root.children) || !root.children.length) throw new Error('Invalid cluster root.');
    const first = objects;
    for (const node of root.children) {
      if (!box(node) || !point(node.anchor) || node.id !== id++ || node.first !== objects || node.offset !== offset
        || !Array.isArray(node.counts) || node.counts.length !== 3 || !node.counts.every(whole)) throw new Error('Invalid cluster page.');
      const count = node.counts.reduce((sum, n) => sum + n, 0);
      if (count !== node.count || count < 1 || count > MAX_CLUSTER_OBJECTS) throw new Error('Invalid cluster size.');
      objects += count;
      offset += detailInputBytes(count);
    }
    if (root.count !== objects - first) throw new Error('Invalid cluster root size.');
  }
  if (objects !== manifest.elements || offset !== manifest.detailBytes || !Number.isSafeInteger(offset)
    || manifest.triangles !== objects * FACES.length / 3) throw new Error('Invalid cluster totals.');
  return manifest;
}
