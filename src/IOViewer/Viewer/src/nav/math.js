import * as THREE from 'three';

const Z = new THREE.Vector3(0, 0, 1);
const MAX_PITCH = Math.PI / 2 - 0.01;

export function isClick(down, up, threshold = 4) {
  return Math.hypot(up.x - down.x, up.y - down.y) <= threshold;
}

// Dragging right turns the camera clockwise seen from above (the model follows the hand); dragging down raises it.
export function orbit(position, target, pivot, dx, dy, speed) {
  const offset = position.clone().sub(pivot);
  const toTarget = target.clone().sub(pivot);
  const rotate = (q) => (offset.applyQuaternion(q), toTarget.applyQuaternion(q));
  rotate(new THREE.Quaternion().setFromAxisAngle(Z, -dx * speed));
  const forward = toTarget.clone().sub(offset).normalize();
  const right = forward.clone().cross(Z);
  if (right.lengthSq() > 1e-12) {
    const pitch = Math.asin(THREE.MathUtils.clamp(forward.z, -1, 1)); // view elevation; moving the camera up lowers it
    const dphi = THREE.MathUtils.clamp(dy * speed, pitch - MAX_PITCH, pitch + MAX_PITCH);
    rotate(new THREE.Quaternion().setFromAxisAngle(right.normalize(), -dphi));
  }
  return { position: offset.add(pivot), target: toTarget.add(pivot) };
}

// Homothety about the cursor point: distances to it (and camera-target) scale by `factor`.
export function zoomTowards(position, target, cursorPoint, factor) {
  const scale = (p) => p.clone().sub(cursorPoint).multiplyScalar(factor).add(cursorPoint);
  return { position: scale(position), target: scale(target) };
}

export const boxSelectMode = (startX, endX) => (endX >= startX ? 'window' : 'crossing');
