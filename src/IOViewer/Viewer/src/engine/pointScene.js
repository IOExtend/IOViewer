import * as THREE from 'three';
import { ModelDataError } from '../data.js';
import { geometryPositions } from './quantize.js';

// Point-sprite clouds (META `points`, export format 4), drawn beside the merged triangle chunks of ModelScene.
// Each point instance is one THREE.Points over its geometry's positions, placed by the instance matrix (RTC). Colour is
// per-vertex when the geometry carries a `colors` view, else the instance material colour. Points participate in
// visibility (synced from ModelScene), section clipping and the shared bounds; they are not picked, measured or
// detail-cut in this version.
export class PointScene {
  constructor(data) {
    this.root = new THREE.Group();
    this._objects = [];
    const points = data.meta.points;
    this.count = points?.count ?? 0;
    if (!this.count) return;

    const geometryOf = data.view(points.geometry);
    const materialOf = data.view(points.material);
    const matrices = data.view(points.matrix);

    for (let i = 0; i < this.count; i++) {
      const g = data.meta.geometries[geometryOf[i]];
      if (!g || g.kind !== 'points') throw new ModelDataError(`Point instance ${i} references a geometry that is not points.`);
      const positions = geometryPositions(data, g);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      if (g.intensities) {
        const values = data.view(g.intensities);
        if (values.length * 3 !== positions.length)
          throw new ModelDataError(`Point geometry ${geometryOf[i]} intensities do not match its positions.`);
        geometry.setAttribute('intensity', new THREE.BufferAttribute(values.slice(), 1, true));
      }

      const material = data.meta.materials[materialOf[i]];
      let vertexColors = false;
      if (g.colors) {
        const bytes = data.view(g.colors);
        if (bytes.length !== positions.length) throw new ModelDataError(`Point geometry ${geometryOf[i]} colors do not match its positions.`);
        const colors = new Float32Array(bytes.length);
        const color = new THREE.Color();
        for (let k = 0; k < bytes.length; k += 3) {
          color.setRGB(bytes[k] / 255, bytes[k + 1] / 255, bytes[k + 2] / 255, THREE.SRGBColorSpace);
          color.toArray(colors, k);
        }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        vertexColors = true;
      }

      const pointsMaterial = new THREE.PointsMaterial({
        size: 2,
        sizeAttenuation: false,
        vertexColors,
        color: vertexColors ? 0xffffff : new THREE.Color(...(material?.color ?? [0.8, 0.8, 0.8])),
      });
      const object = new THREE.Points(geometry, pointsMaterial);
      object.matrixAutoUpdate = false;
      object.matrix.fromArray(columnMajor(matrices, i));
      object.matrixWorldNeedsUpdate = true;
      object.frustumCulled = true;
      geometry.computeBoundingSphere();
      this.root.add(object);
      this._objects.push(object);
    }
  }

  // ModelScene appends point instances after meshes in its visibility state.
  syncVisibility(scene) {
    const first = scene.instanceCount - this.count;
    for (let i = 0; i < this._objects.length; i++) {
      this._objects[i].visible = scene.isInstanceVisible(first + i);
    }
  }

  setClipping(planes) {
    for (const object of this._objects) {
      object.material.clippingPlanes = planes.length > 0 ? planes : null;
    }
  }

  setOpacity(opacity) {
    for (const object of this._objects) {
      object.material.opacity = opacity;
      object.material.transparent = opacity < 1;
    }
  }
}

// The writer stores the three axes then the translation (12 floats); three wants a column-major mat4.
function columnMajor(matrices, i) {
  const o = i * 12;
  return [
    matrices[o], matrices[o + 1], matrices[o + 2], 0,
    matrices[o + 3], matrices[o + 4], matrices[o + 5], 0,
    matrices[o + 6], matrices[o + 7], matrices[o + 8], 0,
    matrices[o + 9], matrices[o + 10], matrices[o + 11], 1,
  ];
}
