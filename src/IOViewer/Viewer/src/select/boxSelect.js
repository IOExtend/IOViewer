import * as THREE from 'three';

// Indices whose screen box is entirely inside the rect ('window') or touches it ('crossing').
// rect: {x, y, width, height}; screenBoxes: [{index, minX, minY, maxX, maxY}], all in client pixels.
export function selectInRect(rect, mode, screenBoxes) {
  if (mode !== 'window' && mode !== 'crossing') throw new RangeError(`Unknown box select mode: ${mode}`);
  const right = rect.x + rect.width;
  const bottom = rect.y + rect.height;
  const hit = mode === 'window'
    ? (b) => b.minX >= rect.x && b.maxX <= right && b.minY >= rect.y && b.maxY <= bottom
    : (b) => b.maxX >= rect.x && b.minX <= right && b.maxY >= rect.y && b.minY <= bottom;
  return screenBoxes.filter(hit).map((b) => b.index);
}

// Client-pixel boxes of the 8 projected corners of every visible element's bounding box.
// shortcut: elements reaching behind the near plane (or past far) are skipped; clip them in 3D if walking inside a model matters.
export function screenBoxes(scene, camera, canvasRect) {
  // The projection is written out (as Vector3.applyMatrix4 does it) so that a million elements take no allocations.
  const m = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse).elements;
  const { left, top, width, height } = canvasRect;
  const box = new THREE.Box3();
  const boxes = [];
  for (let index = 0; index < scene.elementCount; index++) {
    if (!scene.isVisible(index)) continue;
    const { min, max } = scene.elementBox(index, box);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    let inDepth = true;
    for (let k = 0; k < 8 && inDepth; k++) {
      const x = k & 1 ? max.x : min.x;
      const y = k & 2 ? max.y : min.y;
      const z = k & 4 ? max.z : min.z;
      const w = 1 / (m[3] * x + m[7] * y + m[11] * z + m[15]);
      inDepth = Math.abs((m[2] * x + m[6] * y + m[10] * z + m[14]) * w) <= 1;
      const sx = left + (((m[0] * x + m[4] * y + m[8] * z + m[12]) * w + 1) / 2) * width;
      const sy = top + ((1 - (m[1] * x + m[5] * y + m[9] * z + m[13]) * w) / 2) * height;
      minX = Math.min(minX, sx);
      maxX = Math.max(maxX, sx);
      minY = Math.min(minY, sy);
      maxY = Math.max(maxY, sy);
    }
    if (inDepth) boxes.push({ index, minX, minY, maxX, maxY });
  }
  return boxes;
}
