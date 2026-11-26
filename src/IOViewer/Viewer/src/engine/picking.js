import * as THREE from 'three';
import { SLOT_DECODE, SLOT_PARS } from './slotShader.js';

// Pick pass: the chunks' own slot decoding places every vertex, three's clipping chunks cut it like the visible
// material and hidden slots leave the clip volume; the output is the interpolated RTC surface point and slot + 1
// (0 = nothing). vSlot carries the slot in two exact halves (a non-flat varying, constant over a triangle).
const VERTEX = /* glsl */ `
#include <common>
#ifdef IO_PICK_POINTS
uniform uint pointIndex;
uniform float pointSize;
flat varying uint vPoint;
flat varying uint vVertex;
#else
${SLOT_PARS}
varying vec2 vSlot;
#endif
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
#if defined( IO_PICK_DEPTH ) && !defined( IO_PICK_POINTS )
varying float vViewDepth;
#endif
void main() {
  #ifdef IO_PICK_POINTS
  vec3 transformed = position;
  gl_PointSize = pointSize;
  vPoint = pointIndex;
  vVertex = uint( gl_VertexID );
  #else
  ${SLOT_DECODE}
  vec3 transformed = slotPosition;
  #endif
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #if defined( IO_PICK_DEPTH ) && !defined( IO_PICK_POINTS )
  vViewDepth = -mvPosition.z;
  #endif
  vec4 wp = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  #endif
  vPos = ( modelMatrix * wp ).xyz;
  #ifdef IO_PICK_POINTS
  if ( pointSize <= 0.0 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
  #else
  vSlot = vec2( float( slot >> 12 ), float( slot & 4095 ) );
  if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
  #endif
}`;

// Point IDs are negative in float samples and tagged with the high bit in RGBA8.
// The second RGBA8 pass returns view-space depth for triangles and the exact vertex index for points.
const FRAGMENT = /* glsl */ `
#include <common>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec3 vPos;
#ifdef IO_PICK_POINTS
flat varying uint vPoint;
flat varying uint vVertex;
#else
varying vec2 vSlot;
#ifdef IO_PICK_DEPTH
varying float vViewDepth;
#endif
#endif
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #ifdef IO_PICK_POINTS
  uint id = 0x80000000u | vPoint;
  float sampleId = -float( vPoint + 1u );
  #else
  float sampleId = floor( vSlot.x + 0.5 ) * 4096.0 + floor( vSlot.y + 0.5 ) + 1.0;
  uint id = uint( sampleId );
  #endif
  #if defined( IO_PICK_DEPTH )
  #ifdef IO_PICK_POINTS
  uint bits = vVertex;
  #else
  uint bits = floatBitsToUint( vViewDepth );
  #endif
  #elif defined( IO_PICK_RGBA8 )
  uint bits = id;
  #else
  gl_FragColor = vec4( vPos, sampleId );
  #endif
  #if defined( IO_PICK_DEPTH ) || defined( IO_PICK_RGBA8 )
  uvec4 bytes = ( uvec4( bits ) >> uvec4( 0u, 8u, 16u, 24u ) ) & 255u;
  gl_FragColor = vec4( bytes ) / 255.0;
  #endif
}`;

const copy = (hit) => hit && { element: hit.element, point: hit.point.clone() };

function pickMaterial(uniforms, define, points = false) {
  const material = new THREE.ShaderMaterial({
    vertexShader: VERTEX,
    fragmentShader: FRAGMENT,
    uniforms,
    defines: define ? { [define]: '' } : {},
    side: THREE.DoubleSide,
    clipping: true,
  });
  if (points) material.defines.IO_PICK_POINTS = '';
  else material.index0AttributeName = 'q';
  return material;
}

/**
 * GPU picking draws shown, unclipped triangles and points into a small target, with shared depth for both.
 * Float targets return a hit's position and ID. RGBA8 uses a second pass to recover depth or the cloud vertex index.
 * `camera` is public: set it when the active camera changes.
 */
export class Picker {
  constructor(renderer, modelScene, camera, options = {}) {
    this.renderer = renderer;
    this.scene = modelScene;
    this.points = options.points?.count ? options.points : null;
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
    const pointUniforms = { pointIndex: { value: 0 }, pointSize: { value: 0 } };
    this._float = options.pickFloat !== false && renderer.extensions.has('EXT_color_buffer_float');
    // A point sprite whose centre falls just outside a 1 px tile can still cover the cursor.
    const side = this.points ? 3 : 1;
    if (this._float) {
      this._material = pickMaterial(uniforms, null);
      this._target = new THREE.WebGLRenderTarget(side, side, { type: THREE.FloatType });
      this._pixel = new Float32Array(side * side * 4);
      if (this.points) this._pointMaterial = pickMaterial(pointUniforms, null, true);
    } else {
      this._material = pickMaterial(uniforms, 'IO_PICK_RGBA8');
      this._depthMaterial = pickMaterial(uniforms, 'IO_PICK_DEPTH');
      this._target = new THREE.WebGLRenderTarget(side, side);
      this._pixel = new Uint8Array(side * side * 4);
      if (this.points) {
        this._pointMaterial = pickMaterial(pointUniforms, 'IO_PICK_RGBA8', true);
        this._pointDepthMaterial = pickMaterial(pointUniforms, 'IO_PICK_DEPTH', true);
      }
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
    const slotIds = this._float ? ids : new Uint32Array(ids.buffer);
    const slotAtIndex = (i) => this._slotAt(slotIds, i);
    const center = index(x, y);
    const slot = slotAtIndex(center);
    let sample = center;
    if (slot < 0 && this.points) {
      // Snap through the sparse gaps between measured points, using only visible depth-tested samples.
      let nearest = (radius - 1) ** 2;
      for (let j = 0; j < side * side; j++) {
        if (!this._isPoint(slotAtIndex(j))) continue;
        const distance = (j % side - radius) ** 2 + (Math.floor(j / side) - radius) ** 2;
        if (distance > nearest) continue;
        nearest = distance;
        sample = j;
      }
    }
    let tile = null;
    const sampleSlot = slotAtIndex(sample);
    if (sampleSlot >= 0) {
      if (depths) this._render(this._depthMaterial, left, top, rect, target, depths);
      const encodedDepth = depths && new DataView(depths.buffer);
      const m = camera.matrixWorldInverse.elements.slice();
      const scratch = new THREE.Vector3();
      const depth = (i) => {
        const point = this._vertexAt(slotAtIndex(i), ids, encodedDepth, i, scratch);
        return point ? -(m[2] * point.x + m[6] * point.y + m[10] * point.z + m[14])
          : encodedDepth.getFloat32(i * 4, true);
      };
      const point = this._vertexAt(sampleSlot, ids, encodedDepth, sample) ?? this._depthPoint(x, y, rect, depth(sample));
      const pointSample = this._isPoint(sampleSlot);
      const element = this._elementAt(sampleSlot);
      const slots = new Set([sampleSlot]);
      if (!pointSample && element >= 0) {
        for (let j = 0; j < side * side; j++) {
          const nearby = slotAtIndex(j);
          if (nearby >= 0 && !this._isPoint(nearby) && !slots.has(nearby) && this.scene.slotElement(nearby) === element) slots.add(nearby);
        }
      }
      const perspective = camera.isPerspectiveCamera;
      tile = { rect, point, element, slots, pointSample, depthAt(px, py, candidateSlot) {
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
    this._last = { camera, key: this._lastTile.key, hit: slot >= 0 ? tile : null };
    return tile;
  }

  _pick(x, y, rect) {
    const radius = (this._target.width - 1) / 2;
    const center = (this._target.width ** 2 - 1) / 2;
    const pixel = this._render(this._material, x - radius, y - radius, rect);
    const slot = this._slotAt(this._float ? pixel : new Uint32Array(pixel.buffer), center);
    if (slot < 0) return null;
    const element = this._elementAt(slot);
    const bytes = this._float ? null : this._render(this._depthMaterial, x - radius, y - radius, rect);
    const encoded = bytes && new DataView(bytes.buffer);
    const point = this._vertexAt(slot, pixel, encoded, center) ?? this._depthPoint(x, y, rect, encoded.getFloat32(center * 4, true));
    return { element, point };
  }

  _slotAt(pixels, i) {
    const id = this._float ? Math.round(pixels[i * 4 + 3]) : pixels[i];
    if (id < 0) return this.scene.slotCount - id - 1;
    if (id >= 0x80000000) return this.scene.slotCount + id - 0x80000000;
    return id - 1;
  }

  _isPoint(slot) {
    return slot >= this.scene.slotCount;
  }

  _elementAt(slot) {
    return this._isPoint(slot) ? this.scene.instance(this.scene.instanceCount - this.points.count + slot - this.scene.slotCount).element
      : this.scene.slotElement(slot);
  }

  _vertexAt(slot, ids, depths, i, target = new THREE.Vector3()) {
    if (this._float) return target.fromArray(ids, i * 4);
    if (!this._isPoint(slot)) return null;
    return this.points.position(slot - this.scene.slotCount, depths.getUint32(i * 4, true), target);
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
    const previous = { target: renderer.getRenderTarget(), color: renderer.getClearColor(new THREE.Color()),
      alpha: renderer.getClearAlpha(), autoClear: renderer.autoClear };
    const source = this.scene._buckets[0]?.material; // setClipping gives every bucket the same planes
    material.clippingPlanes = source?.clippingPlanes ?? null;
    material.clipIntersection = source?.clipIntersection ?? false;
    camera.updateMatrixWorld();
    camera.setViewOffset(rect.width, rect.height, x, y, target.width, target.height);
    try {
      renderer.setRenderTarget(target);
      renderer.setClearColor(0x000000, 0);
      this.scene.withMaterial(material, () => renderer.render(this.scene.root, camera), { pickCamera: camera });
      if (this.points) {
        renderer.autoClear = false; // keep the triangles' depth for the point pass
        const pointMaterial = material === this._depthMaterial ? this._pointDepthMaterial : this._pointMaterial;
        this.points.withPickMaterial(pointMaterial, () => renderer.render(this.points.root, camera));
      }
      renderer.readRenderTargetPixels(target, 0, 0, target.width, target.height, pixels);
    } finally {
      renderer.setRenderTarget(previous.target);
      renderer.setClearColor(previous.color, previous.alpha);
      renderer.autoClear = previous.autoClear;
      camera.clearViewOffset();
    }
    return pixels;
  }
}
