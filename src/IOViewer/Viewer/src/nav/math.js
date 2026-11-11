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

// Camera pose between two views, seen from the (lerped) target: distance, azimuth (shortest way round +Z) and
// elevation are interpolated, so opposite views swing round the target instead of passing through it.
// Elevation stays 0.01 rad off the poles, so a top/bottom view can still be orbited; a pole view takes its
// azimuth from the other end. The camera `up` is always +Z and plays no part.
export function interpolateView(a, b, k) {
  const ofA = polar(a.position, a.target);
  const ofB = polar(b.position, b.target);
  const azA = ofA.azimuth ?? ofB.azimuth ?? 0;
  const azB = ofB.azimuth ?? azA;
  const turn = THREE.MathUtils.euclideanModulo(azB - azA + Math.PI, 2 * Math.PI) - Math.PI;
  const lerp = (x, y) => x + (y - x) * k;
  const azimuth = azA + turn * k;
  const elevation = THREE.MathUtils.clamp(lerp(ofA.elevation, ofB.elevation), -MAX_PITCH, MAX_PITCH);
  const distance = lerp(ofA.distance, ofB.distance);
  const target = a.target.clone().lerp(b.target, k);
  const flat = Math.cos(elevation) * distance;
  const position = target.clone().add(new THREE.Vector3(flat * Math.cos(azimuth), flat * Math.sin(azimuth), Math.sin(elevation) * distance));
  return { position, target };
}

function polar(position, target) {
  const o = position.clone().sub(target);
  const distance = o.length();
  const flat = Math.hypot(o.x, o.y);
  return {
    distance,
    elevation: distance > 1e-12 ? Math.asin(THREE.MathUtils.clamp(o.z / distance, -1, 1)) : 0,
    azimuth: flat > 1e-9 * Math.max(distance, 1e-12) ? Math.atan2(o.y, o.x) : null,
  };
}
