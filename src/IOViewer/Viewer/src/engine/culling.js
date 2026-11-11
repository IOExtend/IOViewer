import * as THREE from 'three';

const matrix = new THREE.Matrix4();
const frustum = new THREE.Frustum();
const BINS = 32; // half-octave bins of the on-screen radius, from 1/16 px up

// The camera's six frustum planes as [nx, ny, nz, d] x 6 in `out`; a point p is inside a plane when n·p + d >= 0.
export function frustumPlanes(camera, out = new Float64Array(24)) {
  matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  frustum.setFromProjectionMatrix(matrix, camera.coordinateSystem, camera.reversedDepth);
  frustum.planes.forEach(({ normal, constant }, k) => out.set([normal.x, normal.y, normal.z, constant], k * 4));
  return out;
}

// True when the sphere (x, y, z, r) lies entirely outside one of the planes from frustumPlanes.
export function outsideFrustum(p, x, y, z, r) {
  for (let k = 0; k < 24; k += 4) if (p[k] * x + p[k + 1] * y + p[k + 2] * z + p[k + 3] < -r) return true;
  return false;
}

/**
 * How to get a sphere's depth and on-screen radius for a camera drawn `viewHeight` CSS pixels high, in `out`:
 * [eye x, y, z, forward x, y, z, scale, perspective (1|0)]. Depth = (centre - eye)·forward; the radius in pixels is
 * r * scale / depth for a perspective camera and r * scale for an orthographic one (see screenRadius).
 */
export function viewMetrics(camera, viewHeight, out = new Float64Array(8)) {
  const e = camera.matrixWorld.elements;
  // The camera looks down its local -Z, the third column of its world matrix negated.
  const f = new THREE.Vector3(-e[8], -e[9], -e[10]).normalize();
  out.set([e[12], e[13], e[14], f.x, f.y, f.z, (camera.projectionMatrix.elements[5] * viewHeight) / 2, camera.isPerspectiveCamera ? 1 : 0]);
  return out;
}

// On-screen radius in pixels of a sphere at `depth` (Infinity when the eye is inside it).
export function screenRadius(m, r, depth) {
  if (!m[7]) return r * m[6];
  return depth > r ? (r * m[6]) / depth : Infinity;
}

/**
 * The smallest on-screen radius (px) to draw so that the summed cost of what is drawn, largest first, stays within
 * `budget`; 0 when everything fits. pixels[i] < 0 means i is not drawn anyway; cost[i] is what drawing i costs.
 * Radii are binned by half octaves, so the result is a bin edge and the drawn cost may fall below the budget.
 */
export function detailThreshold(pixels, cost, budget) {
  const bins = new Float64Array(BINS);
  let total = 0;
  for (let i = 0; i < pixels.length; i++) {
    const p = pixels[i];
    if (p < 0) continue;
    total += cost[i];
    bins[31 - Math.clz32(Math.max(1, Math.min(p * p * 256, 0x7fffffff)))] += cost[i]; // octave of (16 p)^2
  }
  if (total <= budget) return 0;
  let sum = 0;
  for (let b = BINS - 1; b >= 0; b--) {
    sum += bins[b];
    if (sum > budget) return 2 ** ((b + 1) / 2 - 4);
  }
  return 0;
}
