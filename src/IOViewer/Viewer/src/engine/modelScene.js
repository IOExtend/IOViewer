import * as THREE from 'three';
import { detailThreshold, frustumPlanes, outsideFrustum, viewMetrics } from './culling.js';
import { normalsView, positionsView } from './quantize.js';
import { CHUNK_VERTICES, F32, bakeChunk, bakeSource, drawSpan, indexArray, placeSlot, prefixByRadius, sortByRadius, splitCells } from './chunks.js';
import { patchLambert } from './slotShader.js';

export const DISPLAY_MODES = ['materials', 'textures', 'white', 'wireframe'];
const HIGHLIGHT = [245, 158, 11]; // #f59e0b
const WHITE = [235, 235, 237]; // sRGB (0.92, 0.92, 0.93)
const NO_SLOT = 0xffffffff; // an instance without vertices has no slot
const ROW = 2048; // slots per slot-texture row (the shaders use slot & 2047, slot >> 11)
const RANGE_LIMIT = 256; // up to this many changed slots are uploaded one by one, more as the whole texture

// True when the linear part of instance i (12 floats per instance, columns first) has a negative determinant.
export function isMirrored(matrices, i) {
  const [a, b, c, d, e, f, g, h, k] = matrices.subarray(i * 12, i * 12 + 9);
  return a * (e * k - f * h) - d * (b * k - c * h) + g * (b * f - c * e) < 0;
}

// Copy of the geometry with every triangle's winding reversed; positions and normals are shared, not copied.
export function reversedWinding(geometry) {
  const source = geometry.index.array;
  const index = source.slice();
  for (let t = 0; t < index.length; t += 3) {
    index[t + 1] = source[t + 2];
    index[t + 2] = source[t + 1];
  }
  const reversed = new THREE.BufferGeometry();
  reversed.setIndex(new THREE.BufferAttribute(index, 1));
  reversed.setAttribute('position', geometry.getAttribute('position'));
  reversed.setAttribute('normal', geometry.getAttribute('normal'));
  return reversed;
}

// The CPU copy of a GPU array is dropped once three has uploaded it (three's documented onUpload pattern).
function release() {
  this.array = null;
}
function attr(array, itemSize, normalized = false, Type = THREE.BufferAttribute) {
  return new Type(array, itemSize, normalized).onUpload(release);
}
// A model with more drawable instances (count) than this viewer and GPU can address (limit).
export class ModelTooLargeError extends RangeError {
  constructor(count, limit) {
    super(`${count} drawable instances exceed the limit of ${limit}.`);
    this.name = 'ModelTooLargeError';
    this.count = count;
    this.limit = limit;
  }
}

const finiteBox = (boxes, i) => {
  for (let k = i * 6; k < i * 6 + 6; k++) if (!Number.isFinite(boxes[k])) return false;
  return true;
};
const colorBytes = (color) => {
  const hex = color.getHex(THREE.SRGBColorSpace);
  return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255];
};

/**
 * The model as merged spatial chunks: per material, the instances are split into chunks of up to CHUNK_VERTICES
 * vertices of nearby instances, baked into world space once (quantized positions, octahedral normals) and drawn with
 * one call each. Every instance with vertices owns a slot; its colour and shown flag live in a slot texture the shader
 * reads, so selecting, hiding or tinting rewrites a few texels and never rebuilds geometry.
 * Elements are addressed by their index in META `elements` (0..n-1). Every visual change dispatches
 * `{type: 'change', detail: {kind}}` on `root`. Visibility has layers: the user's (setVisible, isolate, showAll) and
 * named ones (setLayerHidden, e.g. the 4D schedule or a linked file); an instance is drawn when the user shows it and
 * no named layer hides it.
 * Within a chunk the slots are ordered by size, largest first, and each frame draws the index range from the first to
 * the last shown slot (hidden slots inside it are dropped by the shader); setDetail can also cut that range where the
 * slots get smaller on screen than a given radius, which the viewer uses while the camera moves (detailThreshold
 * picks it for a cost budget in triangles).
 * options (tests and the performance harness, from window.IOVIEWER_TEST): chunkVertices, noHideBranch, slotLimit; and
 * maxTextureSize (the renderer's). A model over the slot limit throws ModelTooLargeError. Instances with a non-finite
 * box (NaN or infinite matrix or geometry box) get no slot and take no part in the bounds.
 */
export class ModelScene {
  constructor(data, options = {}) {
    const { meta } = data;
    const instances = meta.instances;
    const count = instances.count;
    const geometryOf = data.view(instances.geometry);
    const materialOf = data.view(instances.material);
    const matrices = data.view(instances.matrix);

    this.root = new THREE.Group();
    this.elementCount = meta.elements.length;
    this._elements = meta.elements;
    this._meta = meta;
    this._mode = 'materials';
    this._opacity = 1;
    this._picking = false;
    this._textures = new Map();
    this._elementOf = data.view(instances.element).slice(); // own copy: the BIN block is released after load
    this._bucketOf = new Uint32Array(count);
    this._visible = new Uint8Array(count).fill(1); // the user's layer
    this._layers = new Map(); // name -> Uint8Array, 1 = hidden by that layer
    this._layerHides = new Uint8Array(count); // how many named layers hide the instance
    this._highlight = new Uint8Array(count);
    this._highlighted = [];
    this._tint = new Map(); // instance -> sRGB bytes [r, g, b]
    this._boxes = new Float32Array(count * 6);
    this._minPixels = 0;
    this._viewHeight = 1;
    this.visibleCost = 0;
    const noHideBranch = !!options.noHideBranch;
    this.slotUniforms = { slotInfo: { value: null }, slotState: { value: null } };
    this._buckets = this._createBuckets(meta, materialOf, noHideBranch);
    this._indexElements();

    const matrix = new THREE.Matrix4();
    const box = new THREE.Box3();
    for (let i = 0; i < count; i++) {
      const m = matrices.subarray(i * 12, i * 12 + 12);
      matrix.set(m[0], m[3], m[6], m[9], m[1], m[4], m[7], m[10], m[2], m[5], m[8], m[11], 0, 0, 0, 1);
      const local = meta.geometries[geometryOf[i]].bbox;
      box.min.fromArray(local.min);
      box.max.fromArray(local.max);
      box.applyMatrix4(matrix);
      box.min.toArray(this._boxes, i * 6);
      box.max.toArray(this._boxes, i * 6 + 3);
    }
    const limit = Math.min(2 ** 24 - 1, ROW * (options.maxTextureSize ?? Infinity), options.slotLimit ?? Infinity);
    this._build(data, geometryOf, matrices, options.chunkVertices ?? CHUNK_VERTICES, limit);
    for (let i = 0; i < count; i++) {
      this._applyColor(i);
      this._draw(i);
    }
    this._flush();
  }

  elementId(index) {
    this._checkElement(index);
    return this._elements[index].id;
  }

  setVisible(indices, visible) {
    for (const index of indices) {
      for (const i of this.instancesOf(index)) this._setInstanceVisible(i, visible);
    }
    this._changed('visibility');
  }

  showAll() {
    for (let i = 0; i < this._visible.length; i++) this._setInstanceVisible(i, true);
    this._changed('visibility');
  }

  isolate(indices) {
    const keep = new Uint8Array(this._visible.length);
    for (const index of indices) {
      for (const i of this.instancesOf(index)) keep[i] = 1;
    }
    for (let i = 0; i < keep.length; i++) this._setInstanceVisible(i, keep[i] === 1);
    this._changed('visibility');
  }

  setHighlighted(indices) {
    const previous = this._highlighted;
    this._highlighted = [];
    for (const i of previous) this._highlight[i] = 0;
    for (const index of indices) {
      for (const i of this.instancesOf(index)) {
        this._highlight[i] = 1;
        this._highlighted.push(i);
      }
    }
    for (const i of previous) this._applyColor(i);
    for (const i of this._highlighted) this._applyColor(i);
    this._changed('appearance');
  }

  // Colour override for elements (a THREE.Color or CSS colour; null removes it); the selection highlight still wins.
  setTint(indices, color) {
    const tint = color === null ? null : colorBytes(new THREE.Color(color));
    for (const index of indices) {
      for (const i of this.instancesOf(index)) {
        if (tint) this._tint.set(i, tint);
        else this._tint.delete(i);
        this._applyColor(i);
      }
    }
    this._changed('appearance');
  }

  // Hides (hidden = true) or unhides elements in the named layer `layer`, independently of the user's layer.
  setLayerHidden(layer, indices, hidden) {
    let flags = this._layers.get(layer);
    if (!flags) this._layers.set(layer, (flags = new Uint8Array(this._visible.length)));
    for (const index of indices) {
      for (const i of this.instancesOf(index)) this._setLayerFlag(flags, i, hidden);
    }
    this._changed('visibility');
  }

  // Unhides everything the named layer hides.
  clearLayer(layer) {
    const flags = this._layers.get(layer);
    if (!flags) return;
    for (let i = 0; i < flags.length; i++) this._setLayerFlag(flags, i, false);
    this._layers.delete(layer);
    this._changed('visibility');
  }

  // Which instances are drawn now (1 = drawn), all layers combined.
  visibilityState() {
    return this._visible.map((_, i) => (this._shown(i) ? 1 : 0));
  }

  // Instance numbers (0..instanceCount-1) of an element.
  instancesOf(index) {
    this._checkElement(index);
    return this._elementInstances.subarray(this._elementStart[index], this._elementStart[index + 1]);
  }

  // True when at least one instance of the element is drawn (all visibility layers combined).
  isVisible(index) {
    this._checkElement(index);
    for (let k = this._elementStart[index]; k < this._elementStart[index + 1]; k++) {
      if (this._shown(this._elementInstances[k])) return true;
    }
    return false;
  }

  get instanceCount() {
    return this._slotOf.length;
  }

  // Where instance i is drawn (its chunk mesh and slot; null and -1 without vertices) and its element (-1 = none).
  instance(i) {
    const slot = this._slotOf[i];
    if (slot === NO_SLOT) return { mesh: null, element: this._elementOf[i], slot: -1 };
    return { mesh: this._units[this._slotUnit[slot]].mesh, element: this._elementOf[i], slot };
  }

  // The colour instance i is drawn with (highlight, tint, white mode or material), linear, in `target`.
  instanceColor(i, target = new THREE.Color()) {
    const slot = this._slotOf[i];
    const [r, g, b] = slot === NO_SLOT ? this._colorOf(i) : this._state.image.data.subarray(slot * 4, slot * 4 + 3);
    return target.setRGB(r / 255, g / 255, b / 255, THREE.SRGBColorSpace);
  }

  // Element of a slot, -1 for an instance without one.
  slotElement(slot) {
    return this._elementOf[this._slotInstance[slot]];
  }

  // Runs fn with `material` on every chunk's triangles (and triangles shown in wireframe mode), e.g. for picking.
  withMaterial(material, fn) {
    this._picking = true;
    for (const unit of this._units) {
      unit.mesh.material = material;
      this._showUnit(unit);
    }
    try {
      return fn();
    } finally {
      this._picking = false;
      for (const unit of this._units) {
        unit.mesh.material = unit.bucket.material;
        this._showUnit(unit);
      }
    }
  }

  // Box of all the element's instances, in `box` when given (callers looping over many elements reuse one).
  elementBox(index, box = new THREE.Box3()) {
    this._checkElement(index);
    box.makeEmpty();
    for (let k = this._elementStart[index]; k < this._elementStart[index + 1]; k++) this._expandBox(box, this._elementInstances[k]);
    return box;
  }

  visibleBox() {
    const box = new THREE.Box3();
    for (let i = 0; i < this._visible.length; i++) {
      if (this._shown(i)) this._expandBox(box, i);
    }
    return box;
  }

  setDisplayMode(mode) {
    if (!DISPLAY_MODES.includes(mode)) throw new Error(`Unknown display mode '${mode}'.`);
    const white = (mode === 'white') !== (this._mode === 'white');
    this._mode = mode;
    for (const bucket of this._buckets) {
      const map = mode === 'textures' && bucket.texture !== null ? this._texture(bucket.texture) : null;
      if (bucket.material.map !== map) {
        bucket.material.map = map;
        bucket.material.needsUpdate = true;
      }
    }
    if (mode === 'wireframe') this._buildLines();
    for (const unit of this._units) this._showUnit(unit);
    if (white) for (let i = 0; i < this._slotOf.length; i++) this._applyColor(i);
    this._changed('appearance');
  }

  setOpacity(opacity) {
    if (!(opacity >= 0 && opacity <= 1)) throw new RangeError(`Opacity must be within 0..1, got ${opacity}.`);
    this._opacity = opacity;
    for (const bucket of this._buckets) this._applyOpacity(bucket);
    this._changed('appearance');
  }

  // While minPixels > 0, renders leave out slots whose bounding sphere is smaller on screen than minPixels (radius, CSS
  // px, taken at the nearest point of its chunk) in a view `viewHeight` CSS px high; 0 draws everything shown again.
  setDetail(minPixels, viewHeight = 1) {
    this._minPixels = minPixels;
    this._viewHeight = viewHeight;
  }

  // Cost (triangles) of drawing everything.
  get totalCost() {
    return this._totalCost;
  }

  // The radius for setDetail that keeps the triangles drawn of what `camera` sees within `budget`; 0 when everything
  // fits. Sets visibleCost to the cost of all that is in view (the whole model when it fits the budget anyway).
  detailThreshold(camera, viewHeight, budget) {
    this.visibleCost = this._totalCost;
    if (this._totalCost <= budget) return 0;
    camera.updateMatrixWorld();
    const planes = frustumPlanes(camera, this._planes);
    const view = viewMetrics(camera, viewHeight, this._detailView);
    const pixels = this._pixels.fill(-1);
    const alpha = this._state.image.data;
    let visible = 0;
    for (const unit of this._units) {
      const s = unit.sphere;
      if (unit.shown === 0 || outsideFrustum(planes, s[0], s[1], s[2], s[3])) continue;
      const near = nearDepth(view, s);
      const scale = view[7] ? (near > 0 ? view[6] / near : Infinity) : view[6];
      for (let slot = unit.slotBase; slot < unit.slotBase + unit.n; slot++) {
        if (alpha[slot * 4 + 3] === 0) continue;
        pixels[slot] = this._slotRadius[slot] * scale;
        visible += this._slotCost[slot];
      }
    }
    this.visibleCost = visible;
    return detailThreshold(pixels, this._slotCost, budget);
  }

  // What the latest render drew, in triangles: { drawn, inView, draws } over the chunks it drew (inView: their shown
  // span; drawn: after the detail cut).
  drawStats() {
    let latest = -Infinity;
    for (const unit of this._units) latest = Math.max(latest, unit.lastFrame);
    let drawn = 0;
    let inView = 0;
    let draws = 0;
    for (const unit of this._units) {
      if (unit.lastFrame !== latest) continue;
      const s = unit.starts;
      inView += (s[unit.last + 1] - s[unit.first]) / 3;
      drawn += (s[Math.max(unit.end, unit.first)] - s[unit.first]) / 3;
      draws++;
    }
    return { drawn, inView, draws };
  }

  // Test helper: the instances a render with `camera` would draw (three's sphere test per chunk, then its range),
  // ascending.
  drawnInstances(camera) {
    camera.updateMatrixWorld();
    const frustum = new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    const renderer = { info: { render: { frame: -1 } } };
    const sphere = new THREE.Sphere();
    const drawn = [];
    for (const unit of this._units) {
      const object = this._mode === 'wireframe' && !this._picking ? unit.lines : unit.mesh;
      if (!object?.visible || !frustum.intersectsSphere(sphere.set(sphere.center.fromArray(unit.sphere), unit.sphere[3]))) continue;
      object.onBeforeRender(renderer, null, camera, object.geometry, object.material, null);
      for (let k = unit.first; k < unit.end; k++) {
        const slot = unit.slotBase + k;
        if (this._state.image.data[slot * 4 + 3]) drawn.push(this._slotInstance[slot]);
      }
    }
    return drawn.sort((a, b) => a - b);
  }

  // GPU and CPU-mirror sizes in bytes, and counts.
  memory() {
    return {
      gpuBytes: this._mergedBytes + this._lineBytes + this._stateBytes,
      mergedBytes: this._mergedBytes,
      instancedBytes: 0,
      stateBytes: this._stateBytes,
      lineBytes: this._lineBytes,
      chunks: this._units.length,
      cells: 0,
      mergedInstances: this._slotInstance.length,
      instancedInstances: 0,
      triangles: this._totalCost,
    };
  }

  setClipping(planes, intersection) {
    for (const { material } of this._buckets) {
      material.clippingPlanes = planes.length > 0 ? planes : null;
      material.clipIntersection = intersection;
      material.needsUpdate = true;
    }
    this._changed('appearance');
  }

  // Slots (numbered chunk by chunk), the chunks with their baked GPU data, and the slot textures.
  _build(data, geometryOf, matrices, chunkVertices, limit) {
    const count = geometryOf.length;
    const meta = this._meta;
    const sources = new Map();
    const source = (g) => {
      let s = sources.get(g);
      if (!s) {
        const geometry = meta.geometries[g];
        const indices = data.view(geometry.indices);
        const uvs = geometry.uvs ? data.view(geometry.uvs) : null;
        s = bakeSource(positionsView(data, geometry), geometry.q ?? null, normalsView(data, geometry), indices, uvs);
        sources.set(g, s);
      }
      return s;
    };
    const kind = new Uint8Array(count);
    const origins = new Float64Array(count * 3);
    const centres = new Float32Array(count * 3);
    const weight = new Uint32Array(count);
    const radius = new Float32Array(count);
    const mirrored = new Uint8Array(count);
    const groups = new Map(); // bucket * 2 + (f32 ? 1 : 0) -> instances
    const uses = new Uint32Array(meta.geometries.length); // slots per geometry still to bake
    const b = this._boxes;
    for (let i = 0; i < count; i++) {
      const s = source(geometryOf[i]);
      if (s.vertices === 0 || !finiteBox(b, i)) continue;
      uses[geometryOf[i]]++;
      kind[i] = placeSlot(matrices, i, s, origins.subarray(i * 3, i * 3 + 3));
      mirrored[i] = isMirrored(matrices, i) ? 1 : 0;
      weight[i] = s.vertices;
      for (let a = 0; a < 3; a++) centres[i * 3 + a] = (b[i * 6 + a] + b[i * 6 + 3 + a]) / 2;
      radius[i] = Math.hypot(b[i * 6 + 3] - b[i * 6], b[i * 6 + 4] - b[i * 6 + 1], b[i * 6 + 5] - b[i * 6 + 2]) / 2;
      const key = this._bucketOf[i] * 2 + (kind[i] === F32 ? 1 : 0);
      let list = groups.get(key);
      if (!list) groups.set(key, (list = []));
      list.push(i);
    }
    const leaves = [];
    for (const key of [...groups.keys()].sort((x, y) => x - y)) {
      for (const leaf of splitCells(centres, weight, groups.get(key), chunkVertices)) leaves.push(sortByRadius(leaf, radius));
    }
    const slots = leaves.reduce((sum, leaf) => sum + leaf.length, 0);
    // Slot numbers must stay exact in a float attribute (< 2^24) and the slot textures within the GPU's size.
    if (slots > limit) throw new ModelTooLargeError(slots, limit);
    const height = Math.max(1, Math.ceil(slots / ROW));
    const info = new Float32Array(ROW * height * 4);
    this._state = new THREE.DataTexture(new Uint8Array(ROW * height * 4), ROW, height);
    this._state.colorSpace = THREE.SRGBColorSpace; // SRGB8_ALPHA8: the GPU decodes the colour bytes exactly
    this._state.onUpdate = () => {
      this._fullPending = false;
      this._pendingRanges = 0;
    };
    this._fullPending = true;
    this._pendingRanges = 0;
    this._dirty = new Uint32Array(RANGE_LIMIT);
    this._dirtyCount = 0;
    const infoTexture = new THREE.DataTexture(info, ROW, height, THREE.RGBAFormat, THREE.FloatType);
    infoTexture.needsUpdate = true;
    this.slotUniforms.slotInfo.value = infoTexture;
    this.slotUniforms.slotState.value = this._state;
    this._stateBytes = ROW * height * 20;

    this._slotOf = new Uint32Array(count).fill(NO_SLOT);
    this._slotInstance = new Uint32Array(slots);
    this._slotUnit = new Uint32Array(slots);
    this._slotRadius = new Float32Array(slots);
    this._slotCost = new Float32Array(slots);
    this._pixels = new Float32Array(slots);
    this._planes = new Float64Array(24);
    this._detailView = new Float64Array(8);
    this._frameView = new Float64Array(8);
    this._frameViewAt = NaN;
    this._units = [];
    this._mergedBytes = 0;
    this._lineBytes = 0;
    const ctx = { matrices, geometryOf, mirrored, kind, origins, source, textured: false };
    // Source indices for the wireframe lines, built on first use (after the BIN block has been released).
    this._lineSources = new Map();
    let slotBase = 0;
    for (const leaf of leaves) {
      const bucket = this._buckets[this._bucketOf[leaf[0]]];
      ctx.textured = bucket.texture !== null;
      const baked = bakeChunk(leaf, ctx);
      for (let j = 0; j < leaf.length; j++) {
        const i = leaf[j];
        const slot = slotBase + j;
        this._slotOf[i] = slot;
        this._slotInstance[slot] = i;
        this._slotUnit[slot] = this._units.length;
        this._slotRadius[slot] = radius[i];
        this._slotCost[slot] = (baked.indexStart[j + 1] - baked.indexStart[j]) / 3;
        info.set(baked.origins.subarray(j * 3, j * 3 + 3), slot * 4);
        info[slot * 4 + 3] = baked.steps[j];
        const g = geometryOf[i];
        if (!this._lineSources.has(g)) this._lineSources.set(g, source(g).indices.slice());
        if (--uses[g] === 0) sources.delete(g); // its decoded normals, if any, go with it
      }
      this._units.push(this._chunk(bucket, leaf, slotBase, baked, mirrored, geometryOf));
      slotBase += leaf.length;
    }
    this._lineMembers = { mirrored, geometryOf: geometryOf.slice() };
    this._totalCost = this._slotCost.reduce((sum, c) => sum + c, 0);
  }

  _chunk(bucket, members, slotBase, baked, mirrored, geometryOf) {
    const geometry = new THREE.InstancedBufferGeometry();
    geometry.instanceCount = 1;
    geometry.setAttribute('q', attr(baked.q, 4));
    geometry.setAttribute('normal', attr(baked.o, 2, true)); // octahedral, see slotShader
    if (baked.uv) geometry.setAttribute('uv', attr(baked.uv, 2));
    geometry.setAttribute('slotBase', attr(new Float32Array([slotBase]), 1, false, THREE.InstancedBufferAttribute));
    geometry.setIndex(attr(baked.index, 1));
    // Drives three's frustum test and its back-to-front sort of transparent chunks.
    const sphere = chunkSphere(this._boxes, members);
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(sphere[0], sphere[1], sphere[2]), sphere[3]);
    this._mergedBytes += baked.q.byteLength + baked.o.byteLength + (baked.uv?.byteLength ?? 0) + baked.index.byteLength;
    const mesh = new THREE.Mesh(geometry, bucket.material);
    const unit = {
      bucket, mesh, lines: null, slotBase, n: members.length, sphere, shown: 0, first: 0, last: -1, end: 0, dirty: false,
      starts: baked.indexStart, vertices: baked.q.length / 4, f32: baked.q instanceof Float32Array, members: members.slice(),
      lastFrame: -Infinity,
    };
    mesh.onBeforeRender = (renderer, scene, camera, g) => this._range(unit, renderer, camera, g, 1);
    mesh.visible = false;
    this.root.add(mesh);
    return unit;
  }

  // Wireframe: per chunk, LineSegments over the same attributes and a line index of 6 entries per triangle (a,b,
  // b,c, c,a), as three's own wireframe draws; a slot's line range is twice its triangle range.
  _buildLines() {
    if (!this._lineSources) return;
    const { mirrored, geometryOf } = this._lineMembers;
    for (const unit of this._units) {
      const triangles = unit.starts[unit.n];
      const index = indexArray(unit.vertices, triangles * 2);
      let at = 0;
      let base = 0;
      for (const i of unit.members) {
        const src = this._lineSources.get(geometryOf[i]);
        const flip = mirrored[i] === 1;
        for (let t = 0; t < src.length; t += 3) {
          const a = src[t] + base;
          const b = src[t + (flip ? 2 : 1)] + base;
          const c = src[t + (flip ? 1 : 2)] + base;
          index[at++] = a;
          index[at++] = b;
          index[at++] = b;
          index[at++] = c;
          index[at++] = c;
          index[at++] = a;
        }
        base += this._meta.geometries[geometryOf[i]].positions.n / 3;
      }
      const source = unit.mesh.geometry;
      const geometry = new THREE.InstancedBufferGeometry();
      geometry.instanceCount = 1;
      for (const name of ['q', 'normal', 'uv', 'slotBase']) if (source.attributes[name]) geometry.setAttribute(name, source.attributes[name]);
      geometry.setIndex(attr(index, 1));
      geometry.boundingSphere = source.boundingSphere;
      this._lineBytes += index.byteLength;
      unit.lines = new THREE.LineSegments(geometry, unit.bucket.material);
      unit.lines.onBeforeRender = (renderer, scene, camera, g) => this._range(unit, renderer, camera, g, 2);
      this.root.add(unit.lines);
      unit.members = null;
    }
    this._lineSources = null;
    this._lineMembers = null;
  }

  // onBeforeRender of a chunk (also in the picking pass): its draw range = the shown span, cut by the detail radius.
  _range(unit, renderer, camera, geometry, wire) {
    if (unit.dirty) this._span(unit);
    let end = unit.last + 1;
    if (this._minPixels > 0 && end > unit.first) {
      const frame = renderer.info.render.frame;
      if (frame !== this._frameViewAt) {
        viewMetrics(camera, this._viewHeight, this._frameView);
        this._frameViewAt = frame;
      }
      const view = this._frameView;
      const near = nearDepth(view, unit.sphere);
      const rMin = view[7] ? (near > 0 ? (this._minPixels * near) / view[6] : 0) : this._minPixels / view[6];
      end = Math.min(end, prefixByRadius(this._slotRadius, unit.slotBase + unit.first, unit.slotBase + end, rMin) - unit.slotBase);
    }
    const [start, count] = drawSpan(unit.starts, unit.first, end);
    geometry.setDrawRange(start * wire, count * wire);
    unit.end = end;
    unit.lastFrame = renderer.info.render.frame;
  }

  // First and last shown slot of the unit (from the alpha bytes).
  _span(unit) {
    const alpha = this._state.image.data;
    let first = 0;
    while (first < unit.n && alpha[(unit.slotBase + first) * 4 + 3] === 0) first++;
    let last = unit.n - 1;
    while (last >= first && alpha[(unit.slotBase + last) * 4 + 3] === 0) last--;
    unit.first = first < unit.n ? first : 0;
    unit.last = first < unit.n ? last : -1;
    unit.dirty = false;
  }

  // A unit with nothing shown is never submitted; in wireframe mode its lines are drawn instead of its triangles,
  // except while picking (faces are picked, as before).
  _showUnit(unit) {
    const wire = this._mode === 'wireframe' && !this._picking;
    unit.mesh.visible = unit.shown > 0 && !wire;
    if (unit.lines) unit.lines.visible = unit.shown > 0 && wire;
  }

  _createBuckets(meta, materialOf, noHideBranch) {
    const byMaterial = new Map();
    const buckets = [];
    for (let i = 0; i < materialOf.length; i++) {
      const m = materialOf[i];
      let bucket = byMaterial.get(m);
      if (!bucket) {
        const source = meta.materials[m];
        bucket = {
          index: buckets.length,
          bytes: source.color.map((c) => Math.round(c * 255)), // META colours are bytes / 255: exact
          opacity: source.opacity,
          texture: source.texture,
          // The material colour stays white: the slot colour multiplies it in the shader.
          material: patchLambert(new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }), this.slotUniforms, noHideBranch),
        };
        this._applyOpacity(bucket);
        byMaterial.set(m, bucket);
        buckets.push(bucket);
      }
      this._bucketOf[i] = bucket.index;
    }
    return buckets;
  }

  // Element -> instances as CSR arrays: instances of element e are _elementInstances[_elementStart[e].._elementStart[e+1]).
  _indexElements() {
    const start = new Uint32Array(this.elementCount + 1);
    for (const e of this._elementOf) if (e >= 0) start[e + 1]++;
    for (let e = 0; e < this.elementCount; e++) start[e + 1] += start[e];
    const list = new Uint32Array(start[this.elementCount]);
    const fill = start.slice(0, this.elementCount);
    this._elementOf.forEach((e, i) => {
      if (e >= 0) list[fill[e]++] = i;
    });
    this._elementStart = start;
    this._elementInstances = list;
  }

  _texture(index) {
    let texture = this._textures.get(index);
    if (!texture) {
      const source = this._meta.textures[index];
      const image = new Image();
      texture = new THREE.Texture(image);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1 / source.sx, 1 / source.sy);
      image.onload = () => {
        texture.needsUpdate = true;
        this._changed('appearance');
      };
      image.src = `data:${source.mime};base64,${source.data}`;
      this._textures.set(index, texture);
    }
    return texture;
  }

  _applyOpacity(bucket) {
    const material = bucket.material;
    const opacity = bucket.opacity * this._opacity;
    const transparent = opacity < 1;
    if (material.transparent !== transparent) material.needsUpdate = true;
    material.opacity = opacity;
    material.transparent = transparent;
    material.depthWrite = !transparent; // three sorts transparent chunks back to front
  }

  // sRGB bytes instance i is drawn with: highlight, else tint, else white in white mode, else the material's.
  _colorOf(i) {
    return this._highlight[i] ? HIGHLIGHT : this._tint.get(i) ?? (this._mode === 'white' ? WHITE : this._buckets[this._bucketOf[i]].bytes);
  }

  _applyColor(i) {
    const slot = this._slotOf[i];
    if (slot === NO_SLOT) return;
    this._state.image.data.set(this._colorOf(i), slot * 4);
    this._markDirty(slot);
  }

  _setInstanceVisible(i, visible) {
    this._visible[i] = visible ? 1 : 0;
    this._draw(i);
  }

  _setLayerFlag(flags, i, hidden) {
    if (flags[i] === (hidden ? 1 : 0)) return;
    flags[i] = hidden ? 1 : 0;
    this._layerHides[i] += hidden ? 1 : -1;
    this._draw(i);
  }

  _shown(i) {
    return this._visible[i] === 1 && this._layerHides[i] === 0;
  }

  // Writes the slot's shown flag (alpha 255/0); its chunk recounts its span before the next draw.
  _draw(i) {
    const slot = this._slotOf[i];
    if (slot === NO_SLOT) return;
    const alpha = this._shown(i) ? 255 : 0;
    const data = this._state.image.data;
    if (data[slot * 4 + 3] === alpha) return;
    data[slot * 4 + 3] = alpha;
    this._markDirty(slot);
    const unit = this._units[this._slotUnit[slot]];
    unit.shown += alpha ? 1 : -1;
    unit.dirty = true;
    this._showUnit(unit);
  }

  _markDirty(slot) {
    if (this._dirtyCount < RANGE_LIMIT) this._dirty[this._dirtyCount] = slot;
    this._dirtyCount++;
  }

  // Uploads the changed slots: a few one by one (three merges ranges in a row), many, or before the first upload, as
  // the whole texture.
  _flush() {
    const n = this._dirtyCount;
    if (n === 0) return;
    this._dirtyCount = 0;
    const texture = this._state;
    if (this._fullPending || this._pendingRanges + n > RANGE_LIMIT) {
      texture.clearUpdateRanges();
      this._fullPending = true;
    } else {
      for (let k = 0; k < n; k++) texture.addUpdateRange(this._dirty[k] * 4, 4);
      this._pendingRanges += n;
    }
    texture.needsUpdate = true;
  }

  _checkElement(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.elementCount) {
      throw new RangeError(`Element index ${index} is out of range 0..${this.elementCount - 1}.`);
    }
  }

  _expandBox(box, i) {
    if (!finiteBox(this._boxes, i)) return;
    const b = this._boxes;
    const o = i * 6;
    box.min.set(Math.min(box.min.x, b[o]), Math.min(box.min.y, b[o + 1]), Math.min(box.min.z, b[o + 2]));
    box.max.set(Math.max(box.max.x, b[o + 3]), Math.max(box.max.y, b[o + 4]), Math.max(box.max.z, b[o + 5]));
  }

  // kind: 'visibility' (the shown set changed) or 'appearance' (only how it looks).
  _changed(kind) {
    this._flush();
    this.root.dispatchEvent({ type: 'change', detail: { kind } });
  }
}

// Depth of the nearest point of sphere s (x, y, z, r) along the view direction (see culling.viewMetrics).
function nearDepth(view, s) {
  return (s[0] - view[0]) * view[3] + (s[1] - view[1]) * view[4] + (s[2] - view[2]) * view[5] - s[3];
}

// Sphere (x, y, z, r) around the boxes of the instances: centre of their joint box, radius to its corners.
function chunkSphere(boxes, members) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const i of members) {
    for (let a = 0; a < 3; a++) {
      min[a] = Math.min(min[a], boxes[i * 6 + a]);
      max[a] = Math.max(max[a], boxes[i * 6 + 3 + a]);
    }
  }
  return Float64Array.of((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2, Math.hypot(max[0] - min[0], max[1] - min[1], max[2] - min[2]) / 2);
}
