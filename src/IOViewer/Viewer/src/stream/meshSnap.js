import * as THREE from 'three';
import { edgeParameter, featureEdges, SNAP_RADIUS, visibleEdgeRanges } from '../tools/measureSnap.js';
import { isClipped } from '../tools/sectionMath.js';

export function meshSnapCandidates(hit, camera, rect, clientX, clientY, sections) {
  const { view, shift, element } = hit;
  const { position, index, tags } = view;
  const triangles = tags ? index.filter((_, i) => tags[Math.floor(i / 3)] === element) : index;
  const { vertices, edges } = featureEdges(position, triangles);
  const matrix = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  const { planes, intersection } = sections.clipping();
  const x = clientX - rect.left, y = clientY - rect.top;
  const points = new Map();
  const rank = { vertex: 0, midpoint: 1, edge: 2 };
  const best = [];
  const offer = (kind, point, p) => {
    if (p.w <= 0 || Math.abs(p.z) > p.w || (kind !== 'edge' && isClipped(point, planes, intersection))) return;
    const sx = (p.x / p.w + 1) * rect.width / 2, sy = (1 - p.y / p.w) * rect.height / 2;
    const distance = (sx - x) ** 2 + (sy - y) ** 2;
    if (distance > SNAP_RADIUS ** 2 || distance >= (best[rank[kind]]?.distance ?? Infinity)) return;
    best[rank[kind]] = { kind, point, distance };
  };
  for (const i of vertices) {
    const point = new THREE.Vector3().fromArray(position, i * 3).add(shift);
    const p = new THREE.Vector4(point.x, point.y, point.z, 1).applyMatrix4(matrix);
    points.set(i, [point, p]);
    offer('vertex', point, p);
  }
  for (let i = 0; i < edges.length; i += 2) {
    const [a, pa] = points.get(edges[i]), [b, pb] = points.get(edges[i + 1]);
    offer('midpoint', a.clone().lerp(b, 0.5), pa.clone().lerp(pb, 0.5));
    for (const range of visibleEdgeRanges(a, b, pa, pb, planes, intersection)) {
      const t = edgeParameter(pa, pb, range, rect, x, y);
      if (t !== null) offer('edge', a.clone().lerp(b, t), pa.clone().lerp(pb, t));
    }
  }
  return best.filter(Boolean);
}
