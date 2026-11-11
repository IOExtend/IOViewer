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
  const viewProjection = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  const corner = new THREE.Vector3();
  const boxes = [];
  for (let index = 0; index < scene.elementCount; index++) {
    if (!scene.isVisible(index)) continue;
    const { min, max } = scene.elementBox(index);
    const b = { index, minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
    let inDepth = true;
    for (let k = 0; k < 8 && inDepth; k++) {
      corner.set(k & 1 ? max.x : min.x, k & 2 ? max.y : min.y, k & 4 ? max.z : min.z).applyMatrix4(viewProjection);
      inDepth = Math.abs(corner.z) <= 1;
      const x = canvasRect.left + ((corner.x + 1) / 2) * canvasRect.width;
      const y = canvasRect.top + ((1 - corner.y) / 2) * canvasRect.height;
      b.minX = Math.min(b.minX, x);
      b.maxX = Math.max(b.maxX, x);
      b.minY = Math.min(b.minY, y);
      b.maxY = Math.max(b.maxY, y);
    }
    if (inDepth) boxes.push(b);
  }
  return boxes;
}
