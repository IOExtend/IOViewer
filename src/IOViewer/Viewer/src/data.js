// Reads the data blocks of an exported page (format 2 or 3): META and PROPS as JSON, BIN as one base64 blob.

const VIEW_TYPES = { f32: Float32Array, u16: Uint16Array, i16: Int16Array, u32: Uint32Array, i32: Int32Array };
const CHUNK_CHARS = 4 * 1024 * 1024; // multiple of 4, so every chunk decodes on its own

function block(doc, id) {
  const element = doc.getElementById(id);
  if (!element) throw new Error(`Data block '${id}' is missing.`);
  return element.textContent;
}

// Decodes the BIN block's base64 text. It is read from its text nodes in pieces: as one string, a block over the
// JavaScript string limit (about 512 M characters in Chromium, ~380 MB of binary) would come back empty.
function decodeBase64(element) {
  let total = 0;
  for (const node of element.childNodes) total += node.length;
  const bytes = new Uint8Array(Math.ceil(total / 4) * 3); // at most; padding and whitespace make it less
  let offset = 0;
  let canonical = true;
  let carry = ''; // characters past the last whole group of 4
  for (const node of element.childNodes) {
    for (let start = 0; start < node.length; start += CHUNK_CHARS) {
      const raw = node.substringData(start, CHUNK_CHARS);
      const trimmed = raw.trim();
      const text = carry + trimmed;
      const whole = text.length - (text.length % 4);
      const aligned = text.slice(0, whole);
      const next = decodeInto(bytes, offset, aligned);
      const padding = aligned.endsWith('==') ? 2 : aligned.endsWith('=') ? 1 : 0;
      canonical &&= raw.length === trimmed.length && next - offset === whole * 3 / 4 - padding;
      offset = next;
      carry = text.slice(whole);
    }
  }
  const end = decodeInto(bytes, offset, carry); // an unpadded tail, as atob accepts it
  canonical &&= end - offset === Math.floor(carry.length * 3 / 4);
  return { bytes: bytes.subarray(0, end), canonical };
}

// Decode just the aligned base64 groups spanning a view without retaining a decoded copy of the model.
function readRange(element, offset, length) {
  const group = Math.floor(offset / 3);
  let start = group * 4;
  const skip = offset - group * 3;
  let remaining = Math.ceil((skip + length) / 3) * 4;
  const encoded = [];
  for (const node of element.childNodes) {
    if (start >= node.length) {
      start -= node.length;
      continue;
    }
    const take = Math.min(remaining, node.length - start);
    encoded.push(node.substringData(start, take));
    remaining -= take;
    start = 0;
    if (!remaining) break;
  }
  const bytes = new Uint8Array(Math.ceil((skip + length) / 3) * 3);
  if (decodeInto(bytes, 0, encoded.join('')) < skip + length) throw new ModelDataError('The binary data is truncated.');
  return bytes.slice(skip, skip + length).buffer;
}

// Writes the bytes of base64 `text` into `bytes` at `offset`; returns the offset after them. Uses the native decoder
// where the browser has one (several times faster), else atob.
function decodeInto(bytes, offset, text) {
  if (bytes.setFromBase64) return offset + bytes.subarray(offset).setFromBase64(text).written;
  const binary = atob(text);
  for (let i = 0; i < binary.length; i++) bytes[offset++] = binary.charCodeAt(i);
  return offset;
}

// The page's data blocks are missing, malformed or do not fit together, as in a truncated or damaged file.
export class ModelDataError extends Error {}

const object = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const records = (value) => Array.isArray(value) && value.every(object);
const vector = (value) => Array.isArray(value) && value.length === 3 && value.every((n) => typeof n === 'number');
const box = (value) => object(value) && vector(value.min) && vector(value.max);

const sectionState = (state) => state == null || (object(state) && records(state.planes)
  && state.planes.every((plane) => vector(plane.normal) && plane.normal.every(Number.isFinite)
    && plane.normal.some((value) => value !== 0) && Number.isFinite(plane.offset))
  && (state.box == null || (box(state.box) && state.box.max.every(Number.isFinite)
    && state.box.min.every((value, i) => Number.isFinite(value) && value <= state.box.max[i]))));

function validateMeta(meta) {
  if (!object(meta) || !records(meta.elements) || !records(meta.geometries) || !records(meta.materials) || !object(meta.instances)) {
    throw new ModelDataError('META must describe elements, geometries, materials and instances.');
  }
  if (meta.title != null && typeof meta.title !== 'string') throw new ModelDataError('Invalid META title.');
  const { instances } = meta;
  if (!Number.isSafeInteger(instances.count) || instances.count < 0) throw new ModelDataError('Invalid META instance count.');
  for (const [name, type, length] of [
    ['geometry', 'u32', instances.count], ['material', 'u32', instances.count],
    ['element', 'i32', instances.count], ['matrix', 'f32', instances.count * 12],
  ]) {
    if (instances[name]?.t !== type || instances[name].n !== length) {
      throw new ModelDataError(`Invalid META instance ${name} view.`);
    }
  }
  for (const g of meta.geometries) {
    const q = g.q;
    if (!box(g.bbox) || !['u16', 'u32'].includes(g.indices?.t)
      || g.positions?.t !== (q ? 'u16' : 'f32')
      || (q && (!vector(q.o) || typeof q.s !== 'number'))
      || (g.normals != null && !['f32', 'i16'].includes(g.normals.t))
      || (g.uvs != null && g.uvs.t !== 'f32')) {
      throw new ModelDataError('Invalid META geometry.');
    }
  }
  for (const name of ['textures', 'grids', 'viewpoints', 'bcfTopics', 'clashTests', 'linkedFiles', 'models']) {
    if (meta[name] != null && !records(meta[name])) throw new ModelDataError(`Invalid META ${name} list.`);
  }
  if (meta.models?.some(({ id, name }) => !Number.isSafeInteger(id) || typeof name !== 'string')
    || meta.elements.some(({ modelId, levelId }) => (modelId != null && !Number.isSafeInteger(modelId))
      || (levelId != null && !Number.isSafeInteger(levelId)))) {
    throw new ModelDataError('Invalid META model or level identity.');
  }
  for (const material of meta.materials) {
    const index = material.texture;
    if (!vector(material.color) || typeof material.opacity !== 'number'
      || (index != null && (!Number.isInteger(index) || index < 0 || index >= (meta.textures?.length ?? 0)))) {
      throw new ModelDataError('Invalid META material.');
    }
  }
  const elementIndices = (values) => values == null || (Array.isArray(values) &&
    values.every((i) => Number.isInteger(i) && i >= 0 && i < meta.elements.length));
  const finiteVector = (v) => vector(v) && v.every(Number.isFinite);
  const optionalText = (value) => value == null || typeof value === 'string';
  const validView = (view) => finiteVector(view.camera?.position) && finiteVector(view.camera?.target)
    && sectionState(view.sections) && elementIndices(view.hiddenElements) && elementIndices(view.visibleElements)
    && elementIndices(view.selectedElements) && (view.hiddenElements == null || view.visibleElements == null)
    && (view.hiddenModelKeys == null || (Array.isArray(view.hiddenModelKeys)
      && view.hiddenModelKeys.every((key) => typeof key === 'string')));
  const count = (value) => Number.isSafeInteger(value) && value >= 0;
  const validBcfView = (view) => validView(view) && finiteVector(view.camera.up) && view.camera.up.some((n) => n !== 0)
    && (view.camera.projection === 'orthographic'
      ? Number.isFinite(view.camera.orthographicHeight) && view.camera.orthographicHeight > 0
      : view.camera.projection === 'perspective' && Number.isFinite(view.camera.fov) && view.camera.fov > 0 && view.camera.fov < 180)
    && count(view.missingComponents) && count(view.ambiguousComponents);
  if (meta.grids?.some((grid) => !vector(grid.start) || !vector(grid.end))
    || meta.viewpoints?.some((view) => !validView(view))
    || meta.clashTests?.some((test) => !records(test.clashes) || test.clashes.some((clash) => !vector(clash.point)))) {
    throw new ModelDataError('Invalid META grids, viewpoints or clashes.');
  }
  if (meta.bcfTopics?.some((topic) => typeof topic.title !== 'string' || !optionalText(topic.description)
    || !optionalText(topic.status) || !records(topic.viewpoints) || topic.viewpoints.some((view) => !validBcfView(view)))) {
    throw new ModelDataError('Invalid META BCF topics.');
  }
  if (meta.linkedFiles?.some((file) => !elementIndices(file.members))) throw new ModelDataError('Invalid META linked file members.');
  if (!sectionState(meta.sections)) throw new ModelDataError('Invalid META sections.');
}

export function readModelMeta(doc = document, startup) {
  let meta;
  startup?.('metadataStart');
  try {
    meta = JSON.parse(block(doc, 'ioviewer-meta'));
  } catch (error) {
    throw new ModelDataError(error.message, { cause: error });
  }
  validateMeta(meta);
  startup?.('metadataEnd');
  return meta;
}

export function loadModelData(doc = document, startup, meta = readModelMeta(doc, startup)) {
  let bin, binElement, canonical, legacyBin;
  try {
    startup?.('binaryStart');
    binElement = doc.getElementById('ioviewer-bin');
    if (!binElement) throw new Error("Data block 'ioviewer-bin' is missing.");
    ({ bytes: bin, canonical } = decodeBase64(binElement));
    startup?.('binaryEnd');
  } catch (error) {
    throw new ModelDataError(error.message, { cause: error });
  }
  const binaryLength = bin.length;
  function viewType(v) {
    const Type = VIEW_TYPES[v?.t];
    if (!Type) throw new ModelDataError(`Unknown view type '${v?.t}'.`);
    const size = Type.BYTES_PER_ELEMENT;
    if (!(Number.isInteger(v.o) && Number.isInteger(v.n) && v.o >= 0 && v.n >= 0 && v.o % size === 0 && v.o + v.n * size <= binaryLength)) {
      throw new ModelDataError(`View ${JSON.stringify(v)} is outside the ${binaryLength} bytes of binary data.`);
    }
    return Type;
  }
  let props = null;
  return {
    meta,
    view(v) {
      if (!bin) throw new Error('The binary data has been released.');
      const Type = viewType(v);
      return new Type(bin.buffer, v.o, v.n);
    },
    readView(v) {
      const Type = viewType(v);
      if (!v.n) return new Type(0);
      if (!bin && !canonical) legacyBin ??= decodeBase64(binElement).bytes;
      const bytes = bin ?? legacyBin;
      return bytes ? new Type(bytes.buffer, v.o, v.n)
        : new Type(readRange(binElement, v.o, v.n * Type.BYTES_PER_ELEMENT));
    },
    // Frees the decoded BIN once the scene holds its own copies; view() throws afterwards.
    releaseBinary() {
      bin = null;
      legacyBin = null;
    },
    props(elementId) {
      props ??= JSON.parse(block(doc, 'ioviewer-props'));
      return props[elementId] ?? null;
    },
  };
}
