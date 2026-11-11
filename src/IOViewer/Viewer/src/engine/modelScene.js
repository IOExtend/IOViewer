import * as THREE from 'three';
import { detailThreshold, frustumPlanes, outsideFrustum, screenRadius, viewMetrics } from './culling.js';

export const DISPLAY_MODES = ['materials', 'textures', 'white', 'wireframe'];
const HIGHLIGHT_COLOR = new THREE.Color('#f59e0b');
const WHITE_COLOR = new THREE.Color().setRGB(0.92, 0.92, 0.93, THREE.SRGBColorSpace);
// Drawing one instance costs about as much as this many of its triangles (measured: ANGLE/D3D11 multi-draw on an
// integrated GPU spends ~0.14 µs per draw and ~1.8 ns per triangle).
const DRAW_COST = 80;

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

/**
 * The model as one BatchedMesh per material (a material is either opaque or transparent).
 * Elements are addressed by their index in META `elements` (0..n-1); per-instance visibility and colour
 * change without rebuilding. Every visual change dispatches `{type: 'change', detail: {kind}}` on `root`.
 * Visibility has layers: the user's (setVisible, isolate, showAll) and named ones (setLayerHidden, e.g. the 4D schedule
 * or a linked file); an instance is drawn when the user shows it and no named layer hides it.
 * Each frame every bucket lists only its shown instances inside the camera's frustum (one tight loop over typed
 * arrays instead of three's per-instance objects); setDetail can also leave out instances smaller on screen than a
 * given radius, which the viewer uses while the camera moves (detailThreshold picks it for a cost budget).
 */
export class ModelScene {
  constructor(data) {
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
    this._textures = new Map();
    this._elementOf = data.view(instances.element).slice(); // own copy: the BIN block is released after load
    this._bucketOf = new Uint32Array(count);
    this._batchId = new Uint32Array(count);
    this._visible = new Uint8Array(count).fill(1); // the user's layer
    this._layers = new Map(); // name -> Uint8Array, 1 = hidden by that layer
    this._layerHides = new Uint8Array(count); // how many named layers hide the instance
    this._highlight = new Uint8Array(count);
    this._highlighted = [];
    this._tint = new Map(); // instance -> THREE.Color
    this._boxes = new Float32Array(count * 6);
    // Mirrored instances (det < 0) use a copy of their geometry with reversed winding, keyed as -1 - g:
    // DoubleSide would otherwise treat their outer faces as back faces and turn the normals inward.
    const geometryKey = new Int32Array(count);
    for (let i = 0; i < count; i++) geometryKey[i] = isMirrored(matrices, i) ? -1 - geometryOf[i] : geometryOf[i];
    this._buckets = this._createBuckets(meta, geometryKey, materialOf);
    this._indexElements();

    const geometries = new Map();
    const matrix = new THREE.Matrix4();
    const box = new THREE.Box3();
    for (let i = 0; i < count; i++) {
      const key = geometryKey[i];
      const bucket = this._buckets[this._bucketOf[i]];
      let geometryId = bucket.geometryIds.get(key);
      if (geometryId === undefined) {
        geometryId = bucket.mesh.addGeometry(this._geometry(data, geometries, key, bucket.texture !== null));
        bucket.geometryIds.set(key, geometryId);
      }
      const m = matrices.subarray(i * 12, i * 12 + 12);
      matrix.set(m[0], m[3], m[6], m[9], m[1], m[4], m[7], m[10], m[2], m[5], m[8], m[11], 0, 0, 0, 1);
      const id = bucket.mesh.addInstance(geometryId);
      bucket.mesh.setMatrixAt(id, matrix);
      bucket.mesh.setColorAt(id, bucket.color);
      this._batchId[i] = id;
      const local = meta.geometries[geometryOf[i]].bbox;
      box.min.fromArray(local.min);
      box.max.fromArray(local.max);
      box.applyMatrix4(matrix);
      box.min.toArray(this._boxes, i * 6);
      box.max.toArray(this._boxes, i * 6 + 3);
    }
    for (const bucket of this._buckets) bucket.geometryIds = null;
    this._prepareCulling();
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
    const tint = color === null ? null : new THREE.Color(color);
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
    return this._batchId.length;
  }

  // Where instance i is drawn (its bucket BatchedMesh and id there) and its element index (-1 = none).
  instance(i) {
    return { mesh: this._buckets[this._bucketOf[i]].mesh, batchId: this._batchId[i], element: this._elementOf[i] };
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
    this._mode = mode;
    for (const bucket of this._buckets) {
      const map = mode === 'textures' && bucket.texture !== null ? this._texture(bucket.texture) : null;
      if (bucket.material.map !== map) {
        bucket.material.map = map;
        bucket.material.needsUpdate = true;
      }
      bucket.material.wireframe = mode === 'wireframe';
    }
    for (let i = 0; i < this._batchId.length; i++) this._applyColor(i);
    this._changed('appearance');
  }

  setOpacity(opacity) {
    if (!(opacity >= 0 && opacity <= 1)) throw new RangeError(`Opacity must be within 0..1, got ${opacity}.`);
    this._opacity = opacity;
    for (const bucket of this._buckets) this._applyOpacity(bucket);
    this._changed('appearance');
  }

  // While minPixels > 0, renders leave out instances whose bounding sphere is smaller on screen than minPixels
  // (radius, CSS px) in a view `viewHeight` CSS px high; 0 draws everything shown again.
  setDetail(minPixels, viewHeight = 1) {
    this._minPixels = minPixels;
    this._viewHeight = viewHeight;
  }

  // The radius for setDetail that keeps the cost of drawing what `camera` sees within `budget` (in triangles, a draw
  // counting as DRAW_COST of them); 0 when everything fits. Sets visibleCost to the cost of all that is in view (at
  // most; the whole model when it fits the budget anyway).
  detailThreshold(camera, viewHeight, budget) {
    this.visibleCost = this._totalCost;
    if (this._totalCost <= budget) return 0;
    camera.updateMatrixWorld();
    const planes = frustumPlanes(camera, this._planes);
    const view = viewMetrics(camera, viewHeight, this._view);
    const pixels = this._pixels;
    const s = this._spheres;
    let visible = 0;
    for (let i = 0; i < pixels.length; i++) {
      const o = i * 4;
      const x = s[o], y = s[o + 1], z = s[o + 2], r = s[o + 3];
      if (!this._shown(i) || outsideFrustum(planes, x, y, z, r)) {
        pixels[i] = -1;
        continue;
      }
      pixels[i] = screenRadius(view, r, (x - view[0]) * view[3] + (y - view[1]) * view[4] + (z - view[2]) * view[5]);
      visible += this._cost[i];
    }
    this.visibleCost = visible;
    return detailThreshold(pixels, this._cost, budget);
  }

  // What the last render drew: { drawn, inView } instances (inView: shown and inside the frustum).
  drawStats() {
    let drawn = 0;
    let inView = 0;
    for (const bucket of this._buckets) {
      drawn += bucket.mesh._multiDrawCount;
      inView += bucket.inView ?? 0;
    }
    return { drawn, inView };
  }

  setClipping(planes, intersection) {
    for (const { material } of this._buckets) {
      material.clippingPlanes = planes.length > 0 ? planes : null;
      material.clipIntersection = intersection;
      material.needsUpdate = true;
    }
    this._changed('appearance');
  }

  // Bounding spheres (model space: root is never moved) and draw costs per instance, each bucket's instances by batch
  // id, and the draw-list fill.
  _prepareCulling() {
    const count = this._batchId.length;
    const b = this._boxes;
    this._spheres = new Float32Array(count * 4);
    this._cost = new Float32Array(count);
    this._pixels = new Float32Array(count);
    this._planes = new Float64Array(24);
    this._view = new Float64Array(8);
    this._minPixels = 0;
    this._viewHeight = 1;
    this.visibleCost = 0;
    const range = {};
    for (const bucket of this._buckets) {
      const n = bucket.mesh.maxInstanceCount;
      Object.assign(bucket, { members: new Uint32Array(n), starts: new Uint32Array(n), counts: new Uint32Array(n) });
      bucket.mesh.onBeforeRender = (renderer, scene, camera, geometry, material) => this._fillDraws(bucket, camera, geometry, material);
    }
    for (let i = 0; i < count; i++) {
      const o = i * 6;
      const s = this._spheres;
      s[i * 4] = (b[o] + b[o + 3]) / 2;
      s[i * 4 + 1] = (b[o + 1] + b[o + 4]) / 2;
      s[i * 4 + 2] = (b[o + 2] + b[o + 5]) / 2;
      s[i * 4 + 3] = Math.hypot(b[o + 3] - b[o], b[o + 4] - b[o + 1], b[o + 5] - b[o + 2]) / 2;
      const bucket = this._buckets[this._bucketOf[i]];
      const id = this._batchId[i];
      bucket.mesh.getGeometryRangeAt(bucket.mesh.getGeometryIdAt(id), range);
      bucket.members[id] = i;
      bucket.starts[id] = range.start;
      bucket.counts[id] = range.count;
      this._cost[i] = DRAW_COST + range.count / 3;
    }
    this._totalCost = this._cost.reduce((sum, c) => sum + c, 0);
  }

  // BatchedMesh.onBeforeRender replacement: the multi-draw list of the bucket's shown instances in the frustum (and,
  // with setDetail, large enough on screen); transparent buckets sorted back to front.
  _fillDraws(bucket, camera, geometry, material) {
    const mesh = bucket.mesh;
    // As three does: in wireframe the draw ranges are in the line index three makes, two entries per triangle index.
    const wire = material.wireframe ? 2 : 1;
    const bytes = !material.wireframe ? geometry.getIndex().array.BYTES_PER_ELEMENT : geometry.attributes.position.count > 65535 ? 4 : 2;
    const planes = frustumPlanes(camera, this._planes);
    const minPixels = this._minPixels;
    const sorted = material.transparent;
    const view = minPixels > 0 || sorted ? viewMetrics(camera, this._viewHeight, this._view) : null;
    const { members, starts, counts } = bucket;
    const s = this._spheres;
    const order = sorted ? (bucket.order ??= new Float64Array(members.length)) : null;
    const draws = sorted ? (bucket.draws ??= new Uint32Array(members.length)) : mesh._indirectTexture.image.data;
    let n = 0;
    let inView = 0;
    let near = Infinity, far = -Infinity;
    for (let id = 0; id < members.length; id++) {
      const i = members[id];
      if (this._visible[i] === 0 || this._layerHides[i] !== 0) continue;
      const o = i * 4;
      const x = s[o], y = s[o + 1], z = s[o + 2], r = s[o + 3];
      if (outsideFrustum(planes, x, y, z, r)) continue;
      inView++;
      if (view) {
        const depth = (x - view[0]) * view[3] + (y - view[1]) * view[4] + (z - view[2]) * view[5];
        if (minPixels > 0 && screenRadius(view, r, depth) < minPixels) continue;
        if (sorted) {
          order[n] = depth;
          near = Math.min(near, depth);
          far = Math.max(far, depth);
        }
      }
      draws[n++] = id;
    }
    if (sorted) this._sortBackToFront(bucket, n, near, far);
    bucket.inView = inView;
    const ids = mesh._indirectTexture.image.data;
    for (let k = 0; k < n; k++) {
      const id = ids[k];
      mesh._multiDrawStarts[k] = starts[id] * bytes * wire;
      mesh._multiDrawCounts[k] = counts[id] * wire;
    }
    mesh._indirectTexture.needsUpdate = true;
    mesh._multiDrawCount = n;
    mesh._multiDrawBytesPerElement = bytes;
  }

  // Writes the bucket's n listed draws (bucket.draws, depths in bucket.order) to its indirect list, farthest first:
  // depth quantized into the high part of one number and the batch id in the low part, so a plain numeric sort works.
  _sortBackToFront(bucket, n, near, far) {
    const { order, draws, members } = bucket;
    const span = Math.max(far - near, 1e-9);
    const levels = Math.floor(2 ** 52 / members.length) - 1;
    for (let k = 0; k < n; k++) order[k] = Math.round(((far - order[k]) / span) * levels) * members.length + draws[k];
    const keys = order.subarray(0, n).sort();
    const ids = bucket.mesh._indirectTexture.image.data;
    for (let k = 0; k < n; k++) ids[k] = keys[k] % members.length;
  }

  _createBuckets(meta, geometryKey, materialOf) {
    const byMaterial = new Map();
    const buckets = [];
    for (let i = 0; i < geometryKey.length; i++) {
      const m = materialOf[i];
      let bucket = byMaterial.get(m);
      if (!bucket) {
        bucket = { index: buckets.length, instances: 0, vertices: 0, indices: 0, geometryIds: new Map() };
        byMaterial.set(m, bucket);
        buckets.push(bucket);
      }
      this._bucketOf[i] = bucket.index;
      bucket.instances++;
      const key = geometryKey[i];
      if (!bucket.geometryIds.has(key)) {
        bucket.geometryIds.set(key, -1);
        const source = meta.geometries[key < 0 ? -1 - key : key];
        bucket.vertices += source.positions.n / 3;
        bucket.indices += source.indices.n;
      }
    }
    for (const [m, bucket] of byMaterial) {
      const source = meta.materials[m];
      bucket.color = new THREE.Color().setRGB(...source.color, THREE.SRGBColorSpace);
      bucket.opacity = source.opacity;
      bucket.texture = source.texture;
      bucket.material = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
      bucket.mesh = new THREE.BatchedMesh(bucket.instances, bucket.vertices, bucket.indices, bucket.material);
      // _fillDraws culls each instance; three's whole-mesh test would first walk every geometry's vertices for bounds.
      bucket.mesh.frustumCulled = false;
      bucket.geometryIds = new Map();
      this._applyOpacity(bucket);
      this.root.add(bucket.mesh);
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

  // Geometry for a key: g for geometry g, -1 - g for its reversed-winding copy (mirrored instances).
  _geometry(data, cache, key, withUv) {
    const g = key < 0 ? -1 - key : key;
    const source = this._meta.geometries[g];
    let base = cache.get(key);
    if (!base && key < 0) {
      base = reversedWinding(this._geometry(data, cache, g, false));
      cache.set(key, base);
    } else if (!base) {
      base = new THREE.BufferGeometry();
      base.setAttribute('position', new THREE.BufferAttribute(data.view(source.positions), 3));
      base.setIndex(new THREE.BufferAttribute(data.view(source.indices), 1));
      // Normals are in geometry-local space; the batching shader rotates them with the instance matrix.
      if (source.normals) base.setAttribute('normal', new THREE.BufferAttribute(data.view(source.normals), 3));
      else base.computeVertexNormals();
      cache.set(key, base);
    }
    if (!withUv) return base;
    const textured = new THREE.BufferGeometry();
    textured.setIndex(base.index);
    textured.setAttribute('position', base.getAttribute('position'));
    textured.setAttribute('normal', base.getAttribute('normal'));
    const uvs = source.uvs ? data.view(source.uvs) : new Float32Array((source.positions.n / 3) * 2);
    textured.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    return textured;
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
    material.depthWrite = !transparent; // _fillDraws sorts transparent buckets back to front
  }

  _applyColor(i) {
    const bucket = this._buckets[this._bucketOf[i]];
    const color = this._highlight[i] ? HIGHLIGHT_COLOR : this._tint.get(i) ?? (this._mode === 'white' ? WHITE_COLOR : bucket.color);
    bucket.mesh.setColorAt(this._batchId[i], color);
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

  _draw(i) {
    this._buckets[this._bucketOf[i]].mesh.setVisibleAt(this._batchId[i], this._shown(i));
  }

  _checkElement(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this.elementCount) {
      throw new RangeError(`Element index ${index} is out of range 0..${this.elementCount - 1}.`);
    }
  }

  _expandBox(box, i) {
    const b = this._boxes;
    const o = i * 6;
    box.min.set(Math.min(box.min.x, b[o]), Math.min(box.min.y, b[o + 1]), Math.min(box.min.z, b[o + 2]));
    box.max.set(Math.max(box.max.x, b[o + 3]), Math.max(box.max.y, b[o + 4]), Math.max(box.max.z, b[o + 5]));
  }

  // kind: 'visibility' (the shown set changed) or 'appearance' (only how it looks).
  _changed(kind) {
    this.root.dispatchEvent({ type: 'change', detail: { kind } });
  }
}
