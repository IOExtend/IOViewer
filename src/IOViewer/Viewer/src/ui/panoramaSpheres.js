import * as THREE from 'three';

const radiusPixels = 7;

export function createPanoramaSpheres(panoramas) {
  if (!panoramas?.length) return null;
  const positions = panoramas.map(({ position }) => new THREE.Vector3(...position));
  // Keep camera stations discoverable inside rooms and behind dense point clouds.
  const material = new THREE.MeshPhongMaterial({ color: '#72bfff', depthTest: false, depthWrite: false });
  const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 8), material, panoramas.length);
  mesh.count = 0;
  mesh.frustumCulled = false;
  mesh.renderOrder = 10;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

  const screen = [];
  const matrix = new THREE.Matrix4();
  const point = new THREE.Vector3();
  const view = new THREE.Vector2();

  return {
    mesh,
    update(camera, rect, visible) {
      mesh.count = 0;
      screen.length = 0;
      if (rect.width <= 0 || rect.height <= 0) return;
      for (const [index, position] of positions.entries()) {
        if (!visible(panoramas[index].element, position.z)) continue;
        const depth = -point.copy(position).applyMatrix4(camera.matrixWorldInverse).z;
        if (depth <= camera.near || depth >= camera.far) continue;
        point.copy(position).project(camera);
        if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) continue;
        const x = (point.x + 1) * rect.width / 2;
        const y = (1 - point.y) * rect.height / 2;
        if (x < -radiusPixels || x > rect.width + radiusPixels ||
            y < -radiusPixels || y > rect.height + radiusPixels) continue;

        const height = camera.isOrthographicCamera
          ? (camera.top - camera.bottom) / camera.zoom
          : camera.getViewSize(depth, view).y;
        const radius = radiusPixels * height / rect.height;
        mesh.setMatrixAt(mesh.count++, matrix.makeScale(radius, radius, radius).setPosition(position));
        screen.push({ index, depth, x: x + rect.left, y: y + rect.top });
      }
      mesh.instanceMatrix.needsUpdate = mesh.count > 0;
    },
    pick(x, y) {
      let nearest;
      for (const station of screen) {
        if ((!nearest || station.depth < nearest.depth) &&
            Math.hypot(station.x - x, station.y - y) <= radiusPixels) nearest = station;
      }
      return nearest?.index;
    },
  };
}
