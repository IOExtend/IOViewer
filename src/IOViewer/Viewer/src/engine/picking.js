import * as THREE from 'three';
import { SLOT_DECODE, SLOT_PARS } from './slotShader.js';

// Pick pass: the chunks' own slot decoding places every vertex, three's clipping chunks cut it like the visible
// material and hidden slots leave the clip volume; the output is the interpolated RTC surface point and slot + 1
// (0 = nothing). vSlot carries the slot in two exact halves (a non-flat varying, constant over a triangle).
const VERTEX = /* glsl */ `
#include <common>
${SLOT_PARS}
#include <clipping_planes_pars_vertex>
varying vec3 vPos;
varying vec2 vSlot;
void main() {
  ${SLOT_DECODE}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  vec4 wp = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  #endif
  vPos = ( modelMatrix * wp ).xyz;
  vSlot = vec2( float( slot >> 12 ), float( slot & 4095 ) );
  if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`;

// IO_PICK_RGBA8: slot + 1 as 4 bytes, little-endian; IO_PICK_DEPTH: the fragment depth packed into 4 bytes.
const FRAGMENT = /* glsl */ `
#include <common>
#include <packing>
#include <clipping_planes_pars_fragment>
varying vec3 vPos;
varying vec2 vSlot;
void main() {
  #include <clipping_planes_fragment>
  float id = floor( vSlot.x + 0.5 ) * 4096.0 + floor( vSlot.y + 0.5 ) + 1.0;
  #if defined( IO_PICK_DEPTH )
  gl_FragColor = packDepthToRGBA( gl_FragCoord.z );
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
    this._key = new Float64Array(36);
    modelScene.root.addEventListener('change', (e) => e.detail.kind !== 'appearance' && (this._last = null));
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
    const camera = this.camera;
    camera.updateMatrixWorld();
    const key = this._key;
    key.set([x, y, rect.width, rect.height]);
    key.set(camera.matrixWorld.elements, 4);
    key.set(camera.projectionMatrix.elements, 20);
    const last = this._last;
    if (last && last.camera === camera && last.key.every((v, k) => v === key[k])) return copy(last.hit);
    const hit = this._pick(x, y, rect);
    this._last = { camera, key: key.slice(), hit };
    return copy(hit);
  }

  _pick(x, y, rect) {
    const pixel = this._render(this._material, x, y, rect);
    const slot = (this._float ? Math.round(pixel[3]) : new Uint32Array(pixel.buffer)[0]) - 1;
    if (slot < 0) return null;
    const element = this.scene.slotElement(slot);
    if (this._float) return { element, point: new THREE.Vector3(pixel[0], pixel[1], pixel[2]) };
    const [r, g, b, a] = this._render(this._depthMaterial, x, y, rect);
    const depth = r / 256 + g / 65536 + b / 16777216 + a / 255 / 16777216; // three's unpackRGBAToDepth on the bytes
    const ndc = new THREE.Vector3(((x + 0.5) / rect.width) * 2 - 1, 1 - ((y + 0.5) / rect.height) * 2, depth * 2 - 1);
    return { element, point: ndc.unproject(this.camera) };
  }

  // Draws the model with `material` into the 1x1 target at pixel (x, y) and reads it back.
  _render(material, x, y, rect) {
    const { renderer, camera } = this;
    const previous = { target: renderer.getRenderTarget(), color: renderer.getClearColor(new THREE.Color()), alpha: renderer.getClearAlpha() };
    const source = this.scene._buckets[0]?.material; // setClipping gives every bucket the same planes
    material.clippingPlanes = source?.clippingPlanes ?? null;
    material.clipIntersection = source?.clipIntersection ?? false;
    camera.updateMatrixWorld();
    camera.setViewOffset(rect.width, rect.height, x, y, 1, 1);
    try {
      renderer.setRenderTarget(this._target);
      renderer.setClearColor(0x000000, 0);
      this.scene.withMaterial(material, () => renderer.render(this.scene.root, camera));
      renderer.readRenderTargetPixels(this._target, 0, 0, 1, 1, this._pixel);
    } finally {
      renderer.setRenderTarget(previous.target);
      renderer.setClearColor(previous.color, previous.alpha);
      camera.clearViewOffset();
    }
    return this._pixel;
  }
}
