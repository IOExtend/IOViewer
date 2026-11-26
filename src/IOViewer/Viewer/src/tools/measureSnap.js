import * as THREE from 'three';
import { GRID, geometryPositions } from '../engine/quantize.js';
import { isClipped } from './sectionMath.js';

export const SNAP_RADIUS = 8; // CSS pixels
const PLANAR_DOT = 1 - 1e-6;
const CACHE_SIZE = 8;
const RANK = { vertex: 0, midpoint: 1, edge: 2 };
// shortcut: Dense hits use the surface point once the triangle budget is reached, until a per-shape spatial index is available.
const TRIANGLE_BUDGET = 20000;

// Weld identical positions for topology only. UV and normal seams on flat surfaces are not model edges.
export function featureEdges(positions, indices) {
  const unique = new Map();
  const vertex = new Uint32Array(positions.length / 3);
  for (let i = 0; i < vertex.length; i++) {
    const at = i * 3;
    const key = `${positions[at]},${positions[at + 1]},${positions[at + 2]}`;
    if (!unique.has(key)) unique.set(key, i);
    vertex[i] = unique.get(key);
  }
  const records = new Map();
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  function add(u, v, normal) {
    const lo = Math.min(u, v), hi = Math.max(u, v);
    const key = lo * vertex.length + hi;
    const previous = records.get(key);
    if (!previous) records.set(key, { lo, hi, normal, count: 1, crease: false });
    else {
      previous.count++;
      previous.crease ||= Math.abs(previous.normal.dot(normal)) < PLANAR_DOT;
    }
  }
  for (let i = 0; i + 2 < indices.length; i += 3) {
    const u = vertex[indices[i]], v = vertex[indices[i + 1]], w = vertex[indices[i + 2]];
    a.fromArray(positions, u * 3);
    b.fromArray(positions, v * 3).sub(a);
    c.fromArray(positions, w * 3).sub(a);
    const normal = new THREE.Vector3().crossVectors(b, c);
    if (!(normal.lengthSq() > 0)) continue;
    normal.normalize();
    add(u, v, normal);
    add(v, w, normal);
    add(w, u, normal);
  }
  const edges = [];
  const vertices = new Set();
  for (const { lo, hi, count, crease } of records.values()) {
    if (count !== 1 && !crease) continue;
    edges.push(lo, hi);
    vertices.add(lo);
    vertices.add(hi);
  }
  return { edges, vertices };
}

// Intersect parameter range with linear half spaces. Positive distances are kept.
function clip(interval, start, end) {
  if (start < 0 && end < 0) return false;
  if (start < 0) interval[0] = Math.max(interval[0], start / (start - end));
  if (end < 0) interval[1] = Math.min(interval[1], start / (start - end));
  return interval[0] <= interval[1];
}

export function visibleEdgeRanges(a, b, pa, pb, planes, intersection) {
  const range = [0, 1];
  if (!clip(range, pa.w + pa.z, pb.w + pb.z) || !clip(range, pa.w - pa.z, pb.w - pb.z)) return [];
  if (!intersection || !planes.length)
    return planes.every((p) => clip(range, p.distanceToPoint(a), p.distanceToPoint(b))) ? [range] : [];

  // Cut-inside boxes hide the intersection of their negative half spaces. Remove that middle interval.
  const inside = range.slice();
  if (!planes.every((p) => {
    const d0 = p.distanceToPoint(a), d1 = p.distanceToPoint(b);
    return (d0 < 0 || d1 < 0) && clip(inside, -d0, -d1);
  })) return [range];
  const visible = [];
  if (range[0] < inside[0]) visible.push([range[0], inside[0]]);
  if (inside[1] < range[1]) visible.push([inside[1], range[1]]);
  return visible;
}

function screen(p, rect) {
  return [(p.x / p.w + 1) * rect.width / 2, (1 - p.y / p.w) * rect.height / 2];
}

// A fraction of the projected segment is not a fraction of the 3D segment under perspective.
export function edgeParameter(pa, pb, [lo, hi], rect, x, y) {
  const a = pa.clone().lerp(pb, lo), b = pa.clone().lerp(pb, hi);
  const [x0, y0] = screen(a, rect), [x1, y1] = screen(b, rect);
  const dx = x1 - x0, dy = y1 - y0;
  const length2 = dx * dx + dy * dy;
  if (!(length2 > 0)) return null;
  const t = THREE.MathUtils.clamp(((x - x0) * dx + (y - y0) * dy) / length2, 0, 1);
  return lo + (hi - lo) * (t * a.w / ((1 - t) * b.w + t * a.w));
}

export class MeasureSnap {
  constructor(picker, sections, data) {
    this.picker = picker;
    this.sections = sections;
    this.data = data;
    this.cache = new Map();
  }

  release() {
    this.data.releaseBinary();
    this.cache.clear();
  }

  _geometry(index) {
    let geometry = this.cache.get(index);
    if (geometry) this.cache.delete(index);
    else {
      const meta = this.data.meta.geometries[index];
      const positions = geometryPositions({ view: this.data.readView }, meta);
      geometry = { positions, ...featureEdges(positions, this.data.readView(meta.indices)) };
    }
    this.cache.set(index, geometry);
    if (this.cache.size > CACHE_SIZE) this.cache.delete(this.cache.keys().next().value);
    return geometry;
  }

  target(clientX, clientY) {
    const tile = this.picker.measureTile(clientX, clientY, SNAP_RADIUS + 1);
    if (!tile) return null;
    if (tile.pointSample) return { kind: 'vertex', point: tile.point.clone() };
    const { rect } = tile;
    const x = clientX - rect.left, y = clientY - rect.top;
    const { camera, scene } = this.picker;
    const { planes, intersection } = this.sections.clipping();
    const projection = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    const view = camera.matrixWorldInverse.elements;
    let best = null;
    function offer(kind, point, p, slot) {
      if (best && RANK[kind] > RANK[best.kind]) return;
      if (p.w <= 0 || p.z < -p.w || p.z > p.w) return;
      const [sx, sy] = screen(p, rect);
      if (!(sx >= 0 && sy >= 0 && sx < rect.width && sy < rect.height)) return;
      const distance = (sx - x) ** 2 + (sy - y) ** 2;
      if (distance > SNAP_RADIUS ** 2 || (best?.kind === kind && distance >= best.distance)) return;
      if (kind !== 'edge' && isClipped(point, planes, intersection)) return; // edge ranges are already clipped
      const depth = -(view[2] * point.x + view[6] * point.y + view[10] * point.z + view[14]);
      // The same position is rounded by the merged grid and float GPU readback.
      if (depth - tile.depthAt(sx, sy, slot) > 2 * GRID + Math.abs(depth) * 2 ** -21) return;
      best = { kind, distance, point: point.clone() };
    }

    let budget = TRIANGLE_BUDGET * 3;
    const matrix = new THREE.Matrix4();
    const middle = new THREE.Vector3(), projected = new THREE.Vector4();
    const { geometry, matrix: transforms } = this.data.meta.instances;
    for (const slot of tile.slots) {
      const instance = scene.slotInstance(slot);
      const [index] = this.data.readView({ t: 'u32', o: geometry.o + instance * 4, n: 1 });
      const meta = this.data.meta.geometries[index];
      const cost = Math.max(meta.indices.n, meta.positions.n / 3);
      if (cost > budget) continue;
      budget -= cost;
      const { positions, vertices, edges } = this._geometry(index);
      const m = this.data.readView({ t: 'f32', o: transforms.o + instance * 48, n: 12 });
      matrix.set(m[0], m[3], m[6], m[9], m[1], m[4], m[7], m[10], m[2], m[5], m[8], m[11], 0, 0, 0, 1);
      const points = new Map();
      for (const v of vertices) {
        const point = new THREE.Vector3().fromArray(positions, v * 3).applyMatrix4(matrix);
        const p = new THREE.Vector4(point.x, point.y, point.z, 1).applyMatrix4(projection);
        points.set(v, [point, p]);
        offer('vertex', point, p, slot);
      }
      if (best?.kind === 'vertex') continue;
      for (let k = 0; k < edges.length; k += 2) {
        const [a, pa] = points.get(edges[k]), [b, pb] = points.get(edges[k + 1]);
        offer('midpoint', middle.copy(a).lerp(b, 0.5), projected.copy(pa).lerp(pb, 0.5), slot);
        if (best?.kind === 'midpoint') continue;
        for (const range of visibleEdgeRanges(a, b, pa, pb, planes, intersection)) {
          const t = edgeParameter(pa, pb, range, rect, x, y);
          if (t !== null) offer('edge', middle.copy(a).lerp(b, t), projected.copy(pa).lerp(pb, t), slot);
        }
      }
    }
    return best ? { kind: best.kind, point: best.point } : { kind: 'surface', point: tile.point.clone() };
  }
}
