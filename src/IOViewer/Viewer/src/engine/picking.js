import * as THREE from 'three';
import { isClipped } from '../tools/sectionMath.js';

// Id pass: three's batching chunks place each instance (matrix, visibility via the multi-draw list) and the
// clipping chunks cut it like the visible material; the colour is the instance's element index + 1 (0 = none).
const VERTEX = /* glsl */ `
#include <batching_pars_vertex>
#include <clipping_planes_pars_vertex>
uniform highp sampler2D elementIds;
flat varying vec4 vElement;
void main() {
  #include <begin_vertex>
  #include <batching_vertex>
  #include <project_vertex>
  #include <clipping_planes_vertex>
  int size = textureSize( elementIds, 0 ).x;
  int j = int( getIndirectIndex( gl_DrawID ) );
  vElement = texelFetch( elementIds, ivec2( j % size, j / size ), 0 );
}`;

const FRAGMENT = /* glsl */ `
#include <clipping_planes_pars_fragment>
flat varying vec4 vElement;
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vElement;
}`;

function idMaterial(maxInstances) {
  const size = Math.ceil(Math.sqrt(maxInstances));
  const ids = new THREE.DataTexture(new Uint8Array(size * size * 4), size, size);
  return new THREE.ShaderMaterial({
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    uniforms: { elementIds: { value: ids } },
    side: THREE.DoubleSide,
    clipping: true,
  });
}

// A point is cut away exactly as the material's own shader cuts it.
const clipped = (point, material) => isClipped(point, material.clippingPlanes ?? [], material.clipIntersection);

/**
 * GPU picking over ModelScene: the shown, unclipped model is drawn once into a 1x1 target through a view offset
 * at the cursor, so the cost does not grow with the element count; the exact point is then found by casting a ray
 * at the found element's own instances only. `camera` is public: set it when the active camera changes.
 */
export class Picker {
  constructor(renderer, modelScene, camera) {
    this.renderer = renderer;
    this.scene = modelScene;
    this.camera = camera;
    this._target = new THREE.WebGLRenderTarget(1, 1);
    this._pixel = new Uint8Array(4);
    this._raycaster = new THREE.Raycaster();
    this._probe = new THREE.Mesh(new THREE.BufferGeometry());
    this._probe.geometry.boundingBox = new THREE.Box3();
    this._probe.geometry.boundingSphere = new THREE.Sphere();
    this._materials = new Map(); // bucket BatchedMesh -> its id material
    for (let i = 0; i < modelScene.instanceCount; i++) {
      const { mesh, batchId, element } = modelScene.instance(i);
      let material = this._materials.get(mesh);
      if (!material) {
        material = idMaterial(mesh.maxInstanceCount);
        this._materials.set(mesh, material);
      }
      const ids = material.uniforms.elementIds.value;
      // Little-endian like the BIN block: byte 0 (red) holds the low bits. Element -1 stays 0, never picked.
      new Uint32Array(ids.image.data.buffer)[batchId] = element + 1;
      ids.needsUpdate = true;
    }
  }

  // { element, point } under the client pixel, or null for background and meshes without an element.
  pick(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const x = Math.floor(clientX - rect.left);
    const y = Math.floor(clientY - rect.top);
    if (!(x >= 0 && y >= 0 && x < rect.width && y < rect.height)) return null;
    const element = this._elementAt(x, y, rect);
    if (element < 0) return null;
    const ndc = new THREE.Vector2(((x + 0.5) / rect.width) * 2 - 1, 1 - ((y + 0.5) / rect.height) * 2);
    return { element, point: this._point(element, ndc) };
  }

  _elementAt(x, y, rect) {
    const { renderer, camera } = this;
    const previous = { target: renderer.getRenderTarget(), color: renderer.getClearColor(new THREE.Color()), alpha: renderer.getClearAlpha() };
    const swapped = [];
    camera.updateMatrixWorld();
    camera.setViewOffset(rect.width, rect.height, x, y, 1, 1);
    try {
      for (const [mesh, material] of this._materials) {
        material.clippingPlanes = mesh.material.clippingPlanes;
        material.clipIntersection = mesh.material.clipIntersection;
        swapped.push([mesh, mesh.material]);
        mesh.material = material;
      }
      renderer.setRenderTarget(this._target);
      renderer.setClearColor(0x000000, 0);
      renderer.render(this.scene.root, camera);
      renderer.readRenderTargetPixels(this._target, 0, 0, 1, 1, this._pixel);
    } finally {
      for (const [mesh, material] of swapped) mesh.material = material;
      renderer.setRenderTarget(previous.target);
      renderer.setClearColor(previous.color, previous.alpha);
      camera.clearViewOffset();
    }
    return new Uint32Array(this._pixel.buffer)[0] - 1;
  }

  // Nearest unclipped hit on the element's shown instances; the GPU pass already found it, so a ray that slips
  // past an edge by rounding falls back to the element's box.
  _point(element, ndc) {
    const raycaster = this._raycaster;
    raycaster.setFromCamera(ndc, this.camera);
    const probe = this._probe;
    const hits = [];
    for (const i of this.scene.instancesOf(element)) {
      const { mesh, batchId } = this.scene.instance(i);
      if (!mesh.getVisibleAt(batchId)) continue;
      const geometryId = mesh.getGeometryIdAt(batchId);
      const range = mesh.getGeometryRangeAt(geometryId);
      probe.material = mesh.material;
      probe.geometry.index = mesh.geometry.index;
      probe.geometry.attributes = mesh.geometry.attributes;
      probe.geometry.setDrawRange(range.start, range.count);
      mesh.getBoundingBoxAt(geometryId, probe.geometry.boundingBox);
      mesh.getBoundingSphereAt(geometryId, probe.geometry.boundingSphere);
      mesh.getMatrixAt(batchId, probe.matrixWorld).premultiply(mesh.matrixWorld);
      const found = [];
      probe.raycast(raycaster, found);
      for (const hit of found) if (!clipped(hit.point, mesh.material)) hits.push(hit);
    }
    if (hits.length > 0) return hits.reduce((a, b) => (b.distance < a.distance ? b : a)).point;
    const box = this.scene.elementBox(element);
    const ray = raycaster.ray;
    return ray.intersectBox(box, new THREE.Vector3()) ?? ray.closestPointToPoint(box.getCenter(new THREE.Vector3()), new THREE.Vector3());
  }
}
