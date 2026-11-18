import * as THREE from 'three';
import { SLOT_DECODE, SLOT_PARS } from './slotShader.js';

// Pick pass: the chunks' own slot decoding places every vertex, three's clipping chunks cut it like the visible
// material and hidden slots leave the clip volume; the output is the interpolated RTC surface point and slot + 1
// (0 = nothing). vSlot carries the slot in two exact halves (a non-flat varying, constant over a triangle).
const VERTEX = /* glsl */ `
#include <common>
${SLOT_PARS}
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
void main() {
  ${SLOT_DECODE}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #ifdef IO_PICK_DEPTH
  vViewDepth = -mvPosition.z;
  #endif
  vec4 wp = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  #endif
  vPos = ( modelMatrix * wp ).xyz;
  vSlot = vec2( float( slot >> 12 ), float( slot & 4095 ) );
  if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`;

// IO_PICK_RGBA8: slot + 1 as 4 bytes; IO_PICK_DEPTH: the bits of the view-space depth, both little-endian.
const FRAGMENT = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec3 vPos;
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  float id = floor( vSlot.x + 0.5 ) * 4096.0 + floor( vSlot.y + 0.5 ) + 1.0;
  #if defined( IO_PICK_DEPTH )
  uint bits = floatBitsToUint( vViewDepth );
  uvec4 bytes = ( uvec4( bits ) >> uvec4( 0u, 8u, 16u, 24u ) ) & 255u;
  gl_FragColor = vec4( bytes ) / 255.0;
  #elif defined( IO_PICK_RGBA8 )
  gl_FragColor = vec4( mod( id, 256.0 ), mod( floor( id / 256.0 ), 256.0 ), mod( floor( id / 65536.0 ), 256.0 ), floor( id / 16777216.0 ) ) / 255.0;
  #else
  gl_FragColor = vec4( vPos, id );
  #endif
}`;

const copy = (hit) => hit && { element: hit.element, point: hit.point.clone() };

function pickMaterial(uniforms, define) {
  const material = new THREE.ShaderMaterial({
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    uniforms,
    defines: define ? { [define]: '' } : {},
    side: THREE.DoubleSide,
    clipping: true,
  });
  material.index0AttributeName = 'q';
  return material;
}

/**
 * GPU picking over ModelScene: the shown, unclipped model is drawn once into a 1x1 target through a view offset at the
 * cursor, so the cost does not grow with the element count. With float targets (EXT_color_buffer_float) one pass gives
 * the slot and the exact surface point; without them (or options.pickFloat === false) two RGBA8 passes give the slot
 * and the depth, from which the point is unprojected. `camera` is public: set it when the active camera changes.
 */
export class Picker {
  constructor(renderer, modelScene, camera, options = {}) {
    this.renderer = renderer;
    this.scene = modelScene;
    this.camera = camera;
    // The model's buffers are not restored with a restored context: after a loss nothing is picked any more.
    this._lost = false;
    renderer.domElement.addEventListener('webglcontextlost', () => (this._lost = true));
    // The last pick and what it depends on: the pixel, the canvas size, the camera and what is shown and cut away
    // (picks come on every wheel notch and pointer press, and each draws the model; colours do not matter).
    this._last = null;
    this._lastTile = null;
    this._key = new Float64Array(36);
    modelScene.root.addEventListener('change', (e) => {
      if (e.detail.kind !== 'appearance') this._last = this._lastTile = null;
    });
    const uniforms = modelScene.slotUniforms;
    this._float = options.pickFloat !== false && renderer.extensions.has('EXT_color_buffer_float');
    if (this._float) {
      this._material = pickMaterial(uniforms, null);
      this._target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.FloatType });
      this._pixel = new Float32Array(4);
    } else {
      this._material = pickMaterial(uniforms, 'IO_PICK_RGBA8');
      this._depthMaterial = pickMaterial(uniforms, 'IO_PICK_DEPTH');
      this._target = new THREE.WebGLRenderTarget(1, 1);
      this._pixel = new Uint8Array(4);
    }
  }

  // { element, point } under the client pixel, or null for the background; element is -1 on a mesh without an
  // element (navigation and measuring use its point, selection ignores it).
  pick(clientX, clientY) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const x = Math.floor(clientX - rect.left);
    const y = Math.floor(clientY - rect.top);
    if (this._lost || !(x >= 0 && y >= 0 && x < rect.width && y < rect.height)) return null;
    const key = this._sampleKey(x, y, rect);
    const camera = this.camera;
    const last = this._last;
    if (last && last.camera === camera && last.key.every((v, k) => v === key[k])) return copy(last.hit);
    const hit = this._pick(x, y, rect);
    this._last = { camera, key: key.slice(), hit };
    return copy(hit);
  }

  _sampleKey(x, y, rect) {
    this.camera.updateMatrixWorld();
    const key = this._key;
    key.set([x, y, rect.width, rect.height]);
    key.set(this.camera.matrixWorld.elements, 4);
    key.set(this.camera.projectionMatrix.elements, 20);
    return key;
  }

  // One small region replaces per-candidate GPU passes. The returned samples are used synchronously, before
  // another region is read. Sample coordinates are CSS pixels relative to the canvas.
  measureTile(clientX, clientY, radius) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const x = Math.floor(clientX - rect.left);
    const y = Math.floor(clientY - rect.top);
    if (this._lost || !(x >= 0 && y >= 0 && x < rect.width && y < rect.height)) return null;
    const key = this._sampleKey(x, y, rect);
    const camera = this.camera;
    const last = this._lastTile;
    if (last && last.camera === camera && last.radius === radius && last.key.every((v, k) => v === key[k]))
      return last.tile;
    const side = radius * 2 + 1;
    if (!this._measure || this._measure.target.width !== side) {
      this._measure?.target.dispose();
      this._measure = {
        target: new THREE.WebGLRenderTarget(side, side, this._float ? { type: THREE.FloatType } : {}),
        ids: this._float ? new Float32Array(side * side * 4) : new Uint8Array(side * side * 4),
        depths: this._float ? null : new Uint8Array(side * side * 4),
      };
    }
    const { target, ids, depths } = this._measure;
    const left = x - radius;
    const top = y - radius;
    this._render(this._material, left, top, rect, target, ids);
    const index = (px, py) => {
      const col = Math.floor(px) - left;
      const row = Math.floor(py) - top;
      return col >= 0 && col < side && row >= 0 && row < side ? (side - 1 - row) * side + col : -1;
    };
    const encoded = this._float ? null : new DataView(ids.buffer);
    const slotAtIndex = (i) => (this._float ? Math.round(ids[i * 4 + 3]) : encoded.getUint32(i * 4, true)) - 1;
    const slot = slotAtIndex(index(x, y));
    let tile = null;
    if (slot >= 0) {
      if (depths) this._render(this._depthMaterial, left, top, rect, target, depths);
      const encodedDepth = depths && new DataView(depths.buffer);
      const m = camera.matrixWorldInverse.elements.slice();
      const depth = (i) => {
        if (encodedDepth) return encodedDepth.getFloat32(i * 4, true);
        const start = i * 4;
        return -(m[2] * ids[start] + m[6] * ids[start + 1] + m[10] * ids[start + 2] + m[14]);
      };
      const i = index(x, y);
      const point = this._float ? new THREE.Vector3().fromArray(ids, i * 4) : this._depthPoint(x, y, rect, depth(i));
      const slots = new Set([slot]);
      const element = this.scene.slotElement(slot);
      if (element >= 0) {
        for (let j = 0; j < side * side; j++) {
          const nearby = slotAtIndex(j);
          if (nearby >= 0 && !slots.has(nearby) && this.scene.slotElement(nearby) === element) slots.add(nearby);
        }
      }
      const perspective = camera.isPerspectiveCamera;
      tile = { rect, point, element, slots, depthAt(px, py, candidateSlot) {
        const j = index(px, py);
        const front = j < 0 ? -1 : slotAtIndex(j);
        if (front < 0) return Infinity;
        if (front !== candidateSlot) return depth(j);
        // Depth (reciprocal depth in perspective) is linear on a face. Correct for the distance
        // between the exact projected target and the centres of the GPU pixels on its slot.
        const linear = (k) => perspective ? 1 / depth(k) : depth(k);
        const center = linear(j);
        function correction(dx, dy, fraction) {
          const direction = Math.sign(fraction);
          const next = index(px + direction * dx, py + direction * dy);
          if (next >= 0 && slotAtIndex(next) === front) return (linear(next) - center) * Math.abs(fraction);
          const previous = index(px - direction * dx, py - direction * dy);
          return previous >= 0 && slotAtIndex(previous) === front ? (center - linear(previous)) * Math.abs(fraction) : 0;
        }
        const sample = center + correction(1, 0, px - Math.floor(px) - 0.5)
          + correction(0, 1, py - Math.floor(py) - 0.5);
        return sample > 0 ? (perspective ? 1 / sample : sample) : depth(j);
      } };
    }
    this._lastTile = { camera, key: key.slice(), radius, tile };
    this._last = { camera, key: this._lastTile.key, hit: tile };
    return tile;
  }

  _pick(x, y, rect) {
    const pixel = this._render(this._material, x, y, rect);
    const slot = (this._float ? Math.round(pixel[3]) : new Uint32Array(pixel.buffer)[0]) - 1;
    if (slot < 0) return null;
    const element = this.scene.slotElement(slot);
    if (this._float) return { element, point: new THREE.Vector3(pixel[0], pixel[1], pixel[2]) };
    const bytes = this._render(this._depthMaterial, x, y, rect);
    return { element, point: this._depthPoint(x, y, rect, new DataView(bytes.buffer).getFloat32(0, true)) };
  }

  _depthPoint(x, y, rect, depth) {
    // Recover the world point from view-space depth, independent of the depth buffer mapping.
    const camera = this.camera;
    const point = new THREE.Vector3(((x + 0.5) / rect.width) * 2 - 1, 1 - ((y + 0.5) / rect.height) * 2, -1)
      .applyMatrix4(camera.projectionMatrixInverse);
    if (camera.isPerspectiveCamera) point.multiplyScalar(-depth / point.z);
    else point.z = -depth;
    return point.applyMatrix4(camera.matrixWorld);
  }

  // Draws the model with `material` into the requested tile at pixel (x, y) and reads it back.
  _render(material, x, y, rect, target = this._target, pixels = this._pixel) {
    const { renderer, camera } = this;
    const previous = { target: renderer.getRenderTarget(), color: renderer.getClearColor(new THREE.Color()), alpha: renderer.getClearAlpha() };
    const source = this.scene._buckets[0]?.material; // setClipping gives every bucket the same planes
    material.clippingPlanes = source?.clippingPlanes ?? null;
    material.clipIntersection = source?.clipIntersection ?? false;
    camera.updateMatrixWorld();
    camera.setViewOffset(rect.width, rect.height, x, y, target.width, target.height);
    try {
      renderer.setRenderTarget(target);
      renderer.setClearColor(0x000000, 0);
      this.scene.withMaterial(material, () => renderer.render(this.scene.root, camera), { pickCamera: camera });
      renderer.readRenderTargetPixels(target, 0, 0, target.width, target.height, pixels);
    } finally {
      renderer.setRenderTarget(previous.target);
      renderer.setClearColor(previous.color, previous.alpha);
      camera.clearViewOffset();
    }
    return pixels;
  }
}
