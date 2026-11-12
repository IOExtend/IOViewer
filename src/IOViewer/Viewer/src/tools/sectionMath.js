import * as THREE from 'three';

export const AXES = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0), z: new THREE.Vector3(0, 0, 1) };

export function axisVector(axis) {
  const vector = AXES[axis];
  if (!vector) throw new RangeError(`Unknown axis: ${axis}`);
  return vector.clone();
}

// three's rule (clipping_planes_fragment): a point is cut when its distance to a plane is negative ("behind") for
// any plane (union, intersection = false) or for every plane (intersection = true). The positive side is kept.
export function isClipped(point, planes, intersection) {
  if (planes.length === 0) return false;
  const behind = (plane) => plane.distanceToPoint(point) < 0;
  return intersection ? planes.every(behind) : planes.some(behind);
}

// Plane through `center + normal * offset`; it keeps the side behind the normal and cuts the side it points to,
// or the other way round when flipped.
export function sectionPlane(normal, center, offset, flipped) {
  const n = normal.clone().normalize();
  const constant = n.dot(center) + offset;
  return flipped ? new THREE.Plane(n, -constant) : new THREE.Plane(n.negate(), constant);
}

// Plane perpendicular to axis 'x' | 'y' | 'z' through the box centre moved by `offset` along the axis.
export function planeFromAxis(axis, box, offset, flipped) {
  return sectionPlane(axisVector(axis), box.getCenter(new THREE.Vector3()), offset, flipped);
}

/**
 * Clipping planes of a section box. keepInside: six planes facing into the box, union (anything outside one of
 * them is cut). cutInside: the same planes turned to face out, intersection (cut only what is inside all six):
 * with the inward planes an intersection would cut only points outside every face, which a box has none of.
 */
export function boxPlanes(box, mode) {
  if (mode !== 'keepInside' && mode !== 'cutInside') throw new RangeError(`Unknown box mode: ${mode}`);
  const { min, max } = box;
  const inward = [
    new THREE.Plane(new THREE.Vector3(1, 0, 0), -min.x),
    new THREE.Plane(new THREE.Vector3(-1, 0, 0), max.x),
    new THREE.Plane(new THREE.Vector3(0, 1, 0), -min.y),
    new THREE.Plane(new THREE.Vector3(0, -1, 0), max.y),
    new THREE.Plane(new THREE.Vector3(0, 0, 1), -min.z),
    new THREE.Plane(new THREE.Vector3(0, 0, -1), max.z),
  ];
  if (mode === 'keepInside') return { planes: inward, intersection: false };
  return { planes: inward.map((plane) => plane.negate()), intersection: true };
}

function corners(box) {
  const { min, max } = box;
  return Array.from({ length: 8 }, (_, k) => new THREE.Vector3(k & 1 ? max.x : min.x, k & 2 ? max.y : min.y, k & 4 ? max.z : min.z));
}

// True when every point of the box is cut: all corners behind one plane (union), or behind every plane
// (intersection; exact, since the box and the half-spaces are convex).
export function boxFullyClipped(box, planes, intersection) {
  if (planes.length === 0 || box.isEmpty()) return false;
  const points = corners(box);
  const allBehind = (plane) => points.every((p) => plane.distanceToPoint(p) < 0);
  return intersection ? planes.every(allBehind) : planes.some(allBehind);
}

// Half the size of the box measured along the unit vector `direction`.
export function extentAlong(box, direction) {
  const half = box.getSize(new THREE.Vector3()).multiplyScalar(0.5);
  return Math.abs(direction.x) * half.x + Math.abs(direction.y) * half.y + Math.abs(direction.z) * half.z;
}

// Parameter s of the point `point + direction * s` (unit direction) nearest to the ray; null when they are within
// about 10 degrees of parallel, where a pixel would move the point by more than ~6 pixels' worth along the line.
export function closestOnLine(ray, point, direction) {
  const w = point.clone().sub(ray.origin);
  const b = direction.dot(ray.direction);
  const denominator = 1 - b * b; // sin² of the angle between them
  if (denominator < 0.03) return null;
  return (b * ray.direction.dot(w) - direction.dot(w)) / denominator;
}

// Rectangle on the plane through `origin` with orientation `quaternion` (local Z = normal) that covers the box
// projected onto it, 10 % larger: { center, width, height } along the plane's local X and Y.
export function planeRect(box, quaternion, origin) {
  const u = new THREE.Vector3(1, 0, 0).applyQuaternion(quaternion);
  const v = new THREE.Vector3(0, 1, 0).applyQuaternion(quaternion);
  let [minU, maxU, minV, maxV] = [Infinity, -Infinity, Infinity, -Infinity];
  for (const corner of corners(box)) {
    corner.sub(origin);
    const a = corner.dot(u);
    const b = corner.dot(v);
    [minU, maxU, minV, maxV] = [Math.min(minU, a), Math.max(maxU, a), Math.min(minV, b), Math.max(maxV, b)];
  }
  const center = origin.clone().addScaledVector(u, (minU + maxU) / 2).addScaledVector(v, (minV + maxV) / 2);
  return { center, width: (maxU - minU) * 1.1, height: (maxV - minV) * 1.1 };
}
