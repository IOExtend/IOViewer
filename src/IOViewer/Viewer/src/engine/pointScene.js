import * as THREE from 'three';
import { ModelDataError } from '../data.js';
import { geometryPositions } from './quantize.js';

// Point-sprite clouds (META `points`, export format 4), drawn beside the merged triangle chunks of ModelScene.
// Each point instance is one THREE.Points over its geometry's positions, placed by the instance matrix (RTC). Colour is
// per-vertex when the geometry carries a `colors` view, else the instance material colour.
export class PointScene {
  constructor(data) {
    this.root = new THREE.Group();
    this._materials = [];
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
        color: vertexColors ? 0xffffff
          : new THREE.Color().setRGB(...(material?.color ?? [0.8, 0.8, 0.8]), THREE.SRGBColorSpace),
      });
      const object = new THREE.Points(geometry, pointsMaterial);
      object.onBeforeRender = (_renderer, _world, _camera, _geometry, drawMaterial) => {
        if (drawMaterial === pointsMaterial) return;
        drawMaterial.uniforms.pointIndex.value = i;
        drawMaterial.uniforms.pointSize.value = pointsMaterial.opacity > 0 ? pointsMaterial.size : 0;
        drawMaterial.uniformsNeedUpdate = true;
      };
      object.matrixAutoUpdate = false;
      object.matrix.fromArray(columnMajor(matrices, i));
      object.matrixWorldNeedsUpdate = true;
      object.frustumCulled = true;
      geometry.computeBoundingSphere();
      this.root.add(object);
      this._materials.push({ material: pointsMaterial, color: pointsMaterial.color.clone(), opacity: material?.opacity ?? 1, vertexColors });
    }
  }

  // ModelScene appends point instances after meshes in its visibility state.
  syncVisibility(scene) {
    const first = scene.instanceCount - this.count;
    for (const [i, object] of this.root.children.entries()) {
      object.visible = scene.isInstanceVisible(first + i);
    }
  }

  syncAppearance(scene) {
    const first = scene.instanceCount - this.count;
    for (const [i, source] of this._materials.entries()) {
      const { material } = source;
      const override = scene.instanceColorOverride(first + i, material.color);
      if (!override) material.color.copy(source.color);
      const vertexColors = source.vertexColors && !override;
      const opacity = scene.opacity * source.opacity;
      const transparent = opacity < 1;
      if (material.vertexColors !== vertexColors || material.transparent !== transparent) material.needsUpdate = true;
      material.vertexColors = vertexColors;
      material.opacity = opacity;
      material.transparent = transparent;
      material.depthWrite = !transparent;
    }
  }

  setClipping(planes, intersection = false) {
    this.clippingPlanes = planes.length > 0 ? planes : null;
    this.clipIntersection = intersection;
    for (const { material } of this._materials) {
      material.clippingPlanes = this.clippingPlanes;
      material.clipIntersection = intersection;
    }
  }

  withPickMaterial(material, draw) {
    material.clippingPlanes = this.clippingPlanes;
    material.clipIntersection = this.clipIntersection;
    for (const object of this.root.children) object.material = material;
    try {
      draw();
    } finally {
      for (const [i, object] of this.root.children.entries()) object.material = this._materials[i].material;
    }
  }

  position(instance, vertex, target) {
    const object = this.root.children[instance];
    return target.fromBufferAttribute(object.geometry.attributes.position, vertex).applyMatrix4(object.matrixWorld);
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
