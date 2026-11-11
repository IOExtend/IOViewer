import * as THREE from 'three';

const DISPLAY_MODES = ['materials', 'textures', 'white', 'wireframe'];
const HIGHLIGHT_COLOR = new THREE.Color('#f59e0b');
const WHITE_COLOR = new THREE.Color().setRGB(0.92, 0.92, 0.93, THREE.SRGBColorSpace);

/**
 * The model as one BatchedMesh per material (a material is either opaque or transparent).
 * Elements are addressed by their index in META `elements` (0..n-1); per-instance visibility and colour
 * change without rebuilding. Every visual change dispatches `{type: 'change'}` on `root`.
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
    this._elementOf = data.view(instances.element);
    this._bucketOf = new Uint32Array(count);
    this._batchId = new Uint32Array(count);
    this._visible = new Uint8Array(count).fill(1);
    this._highlight = new Uint8Array(count);
    this._highlighted = [];
    this._boxes = new Float32Array(count * 6);
    this._buckets = this._createBuckets(meta, geometryOf, materialOf);
    this._indexElements();

    const geometries = new Map();
    const matrix = new THREE.Matrix4();
    const box = new THREE.Box3();
    for (let i = 0; i < count; i++) {
      const g = geometryOf[i];
      const bucket = this._buckets[this._bucketOf[i]];
      let geometryId = bucket.geometryIds.get(g);
      if (geometryId === undefined) {
        geometryId = bucket.mesh.addGeometry(this._geometry(data, geometries, g, bucket.texture !== null));
        bucket.geometryIds.set(g, geometryId);
      }
      const m = matrices.subarray(i * 12, i * 12 + 12);
      matrix.set(m[0], m[3], m[6], m[9], m[1], m[4], m[7], m[10], m[2], m[5], m[8], m[11], 0, 0, 0, 1);
      const id = bucket.mesh.addInstance(geometryId);
      bucket.mesh.setMatrixAt(id, matrix);
      bucket.mesh.setColorAt(id, bucket.color);
      this._batchId[i] = id;
      const local = meta.geometries[g].bbox;
      box.min.fromArray(local.min);
      box.max.fromArray(local.max);
      box.applyMatrix4(matrix);
      box.min.toArray(this._boxes, i * 6);
      box.max.toArray(this._boxes, i * 6 + 3);
    }
    for (const bucket of this._buckets) bucket.geometryIds = null;
  }

  elementId(index) {
    this._checkElement(index);
    return this._elements[index].id;
  }

  setVisible(indices, visible) {
    for (const index of indices) {
      for (const i of this._instancesOf(index)) this._setInstanceVisible(i, visible);
    }
    this._changed();
  }

  showAll() {
    for (let i = 0; i < this._visible.length; i++) this._setInstanceVisible(i, true);
    this._changed();
  }

  isolate(indices) {
    const keep = new Uint8Array(this._visible.length);
    for (const index of indices) {
      for (const i of this._instancesOf(index)) keep[i] = 1;
    }
    for (let i = 0; i < keep.length; i++) this._setInstanceVisible(i, keep[i] === 1);
    this._changed();
  }

  setHighlighted(indices) {
    const previous = this._highlighted;
    this._highlighted = [];
    for (const i of previous) this._highlight[i] = 0;
    for (const index of indices) {
      for (const i of this._instancesOf(index)) {
        this._highlight[i] = 1;
        this._highlighted.push(i);
      }
    }
    for (const i of previous) this._applyColor(i);
    for (const i of this._highlighted) this._applyColor(i);
    this._changed();
  }

  elementBox(index) {
    const box = new THREE.Box3();
    for (const i of this._instancesOf(index)) this._expandBox(box, i);
    return box;
  }

  visibleBox() {
    const box = new THREE.Box3();
    for (let i = 0; i < this._visible.length; i++) {
      if (this._visible[i]) this._expandBox(box, i);
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
    this._changed();
  }

  setOpacity(opacity) {
    if (!(opacity >= 0 && opacity <= 1)) throw new RangeError(`Opacity must be within 0..1, got ${opacity}.`);
    this._opacity = opacity;
    for (const bucket of this._buckets) this._applyOpacity(bucket);
    this._changed();
  }

  setClipping(planes, intersection) {
    for (const { material } of this._buckets) {
      material.clippingPlanes = planes.length > 0 ? planes : null;
      material.clipIntersection = intersection;
      material.needsUpdate = true;
    }
    this._changed();
  }

  _createBuckets(meta, geometryOf, materialOf) {
    const byMaterial = new Map();
    const buckets = [];
    for (let i = 0; i < geometryOf.length; i++) {
      const m = materialOf[i];
      let bucket = byMaterial.get(m);
      if (!bucket) {
        bucket = { index: buckets.length, instances: 0, vertices: 0, indices: 0, geometryIds: new Map() };
        byMaterial.set(m, bucket);
        buckets.push(bucket);
      }
      this._bucketOf[i] = bucket.index;
      bucket.instances++;
      const g = geometryOf[i];
      if (!bucket.geometryIds.has(g)) {
        bucket.geometryIds.set(g, -1);
        bucket.vertices += meta.geometries[g].positions.n / 3;
        bucket.indices += meta.geometries[g].indices.n;
      }
    }
    for (const [m, bucket] of byMaterial) {
      const source = meta.materials[m];
      bucket.color = new THREE.Color().setRGB(...source.color, THREE.SRGBColorSpace);
      bucket.opacity = source.opacity;
      bucket.texture = source.texture;
      bucket.material = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide });
      bucket.mesh = new THREE.BatchedMesh(bucket.instances, bucket.vertices, bucket.indices, bucket.material);
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

  _geometry(data, cache, g, withUv) {
    let base = cache.get(g);
    if (!base) {
      const source = this._meta.geometries[g];
      base = new THREE.BufferGeometry();
      base.setAttribute('position', new THREE.BufferAttribute(data.view(source.positions), 3));
      base.setIndex(new THREE.BufferAttribute(data.view(source.indices), 1));
      // Normals are in geometry-local space; the batching shader rotates them with the instance matrix.
      if (source.normals) base.setAttribute('normal', new THREE.BufferAttribute(data.view(source.normals), 3));
      else base.computeVertexNormals();
      cache.set(g, base);
    }
    if (!withUv) return base;
    const source = this._meta.geometries[g];
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
        this._changed();
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
    material.depthWrite = !transparent;
    // Sorting every frame only pays off for transparent buckets (back-to-front blending).
    bucket.mesh.sortObjects = transparent;
  }

  _applyColor(i) {
    const bucket = this._buckets[this._bucketOf[i]];
    const color = this._highlight[i] ? HIGHLIGHT_COLOR : this._mode === 'white' ? WHITE_COLOR : bucket.color;
    bucket.mesh.setColorAt(this._batchId[i], color);
  }

  _setInstanceVisible(i, visible) {
    this._visible[i] = visible ? 1 : 0;
    this._buckets[this._bucketOf[i]].mesh.setVisibleAt(this._batchId[i], visible);
  }

  _instancesOf(index) {
    this._checkElement(index);
    return this._elementInstances.subarray(this._elementStart[index], this._elementStart[index + 1]);
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

  _changed() {
    this.root.dispatchEvent({ type: 'change' });
  }
}
