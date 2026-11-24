import { MeshoptSimplifier } from 'meshoptimizer/simplifier';
import { splitCells, unitNormals } from '../engine/chunks.js';
import { ELEMENT_FIELDS, INSTANCE_BYTES, isBounds, isPoint, MAX_ELEMENT_BYTES, MESH_FORMAT, MESH_MANIFEST_BYTES, PAGE_TRIANGLES, ROOT_BYTES, pageBytes, residentBytes, sizeOfPage, validateMeshPages, viewsOfPage } from './meshPages.js';
import { validateReviewMeta } from '../data.js';

const HEADER = 28, RECORD = 40;
const utf8 = new TextDecoder('utf-8', { ignoreBOM: true });
const channel = Array.from({ length: 256 }, (_, i) => {
  const x = i / 255;
  return Math.round(255 * (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
});
const linearColor = (color) => [channel[color & 255], channel[(color >>> 8) & 255], channel[(color >>> 16) & 255], color >>> 24];

function fill(source, target, offset, error) {
  for (let at = 0; at < target.length;) {
    const count = source.read(target.subarray(at), offset + at);
    if (!Number.isInteger(count) || count <= 0 || count > target.length - at) throw new Error(error);
    at += count;
  }
}

function read(source, bytes, offset) {
  const buffer = new ArrayBuffer(bytes);
  fill(source, new Uint8Array(buffer), offset, 'Truncated geometry source.');
  return buffer;
}

function recordsOf(source, includeBim) {
  const header = new DataView(read(source, HEADER, 0));
  const version = header.getUint32(0, true);
  const sharedFormat = version === 0x34534d49;
  const reviewFormat = sharedFormat || version === 0x33534d49;
  const annotated = reviewFormat || version === 0x32534d49;
  if (!annotated && version !== 0x31534d49) throw new Error('Expected an IOViewer .ivmesh source.');
  const origin = [4, 12, 20].map((i) => header.getFloat64(i, true));
  if (!isPoint(origin)) throw new Error('Invalid source origin.');
  const records = [];
  const size = source.length;
  const start = HEADER + (annotated ? 8 : 0), recordSize = RECORD + (sharedFormat ? 36 : reviewFormat ? 16 : annotated ? 8 : 0);
  const end = annotated ? Number(new DataView(read(source, 8, HEADER)).getBigInt64(0, true)) : size;
  if (!Number.isSafeInteger(end) || end < start || end > size) throw new Error('Invalid geometry directory offset.');
  const meta = new Float32Array(recordSize / 4), data = new Uint8Array(meta.buffer), counts = new Uint32Array(meta.buffer);
  const recordView = new DataView(meta.buffer);
  const slots = new Map(), elements = [], prototypes = new Map();
  let review, propertiesStart = end, textureCount = 0;
  if (reviewFormat) {
    const length = new DataView(read(source, 4, end)).getUint32(0, true);
    propertiesStart += 4 + length;
    if (!length || length > MESH_MANIFEST_BYTES || propertiesStart > size) throw new Error('Invalid cluster review size.');
    if (includeBim) {
      const { elements: sourceElements, ...fields } = JSON.parse(utf8.decode(read(source, length, end + 4)));
      validateReviewMeta({ ...fields, elements: sourceElements });
      review = fields;
      textureCount = fields.textures?.length ?? 0;
      for (const input of sourceElements) {
        const id = String(input.id);
        if (!/^-?\d+$/.test(id) || slots.has(id)) throw new Error('Invalid review element ID.');
        slots.set(id, elements.length);
        elements.push({ ...Object.fromEntries(Object.entries(input).filter(([, value]) => value != null)), id });
      }
    }
  }
  for (let offset = start; offset < end;) {
    const recordOffset = offset;
    if (offset + recordSize > end) throw new Error('Truncated mesh record.');
    fill(source, data, offset, 'Truncated mesh record.');
    const min = [...meta.subarray(0, 3)], max = [...meta.subarray(3, 6)];
    const [vertices, indices, rgba, normals] = counts.subarray(6);
    const texture = reviewFormat ? recordView.getInt32(RECORD + 8, true) : -1;
    const flags = reviewFormat ? recordView.getUint32(RECORD + 12, true) : 0;
    const uv = sharedFormat ? Boolean(flags & 2) : texture >= 0;
    const shape = sharedFormat ? Number(recordView.getBigInt64(RECORD + 16, true)) : -1;
    const shift = shape >= 0 ? [...meta.subarray((RECORD + 24) / 4)] : undefined;
    const bytes = vertices * (12 * (1 + normals) + (uv ? 8 : 0)) + indices * 4;
    offset += recordSize;
    const first = shape === recordOffset;
    const prototype = prototypes.get(shape);
    const inline = first || shape === -1;
    if (!isBounds({ min, max }) || !vertices || vertices > indices || !indices || indices % 3 || indices > PAGE_TRIANGLES * 3
      || normals > 1 || flags > (sharedFormat ? 3 : 1) || texture < -1 || (texture >= 0 && !uv)
      || (includeBim && texture >= textureCount) || (inline && bytes > end - offset)
      || (shape !== -1 && (!isPoint(shift) || (!first && (!prototype || prototype.vertices !== vertices
        || prototype.indices !== indices || prototype.normals !== normals || prototype.flags !== flags))))) throw new Error('Invalid mesh record.');
    if (first) prototypes.set(shape, { offset, vertices, indices, normals, flags });
    let element;
    if (annotated && includeBim) {
      const id = recordView.getBigInt64(RECORD, true).toString();
      element = slots.get(id);
      if (element === undefined) {
        element = elements.length;
        slots.set(id, element);
        elements.push({ id });
      }
      const bounds = elements[element];
      if (!bounds.min) Object.assign(bounds, { min: [...min], max: [...max] });
      else {
        for (let i = 0; i < 3; i++) {
          bounds.min[i] = Math.min(bounds.min[i], min[i]);
          bounds.max[i] = Math.max(bounds.max[i], max[i]);
        }
      }
    }
    records.push({ min, max, vertices, indices, rgba, normals, offset: inline ? offset : prototype.offset, bytes, element, texture,
      solid: Boolean(flags & 1), uv, includeBim, shape, shift });
    if (inline) offset += bytes;
  }
  if (!records.length) throw new Error('The source contains no triangle geometry.');
  const metadata = new Map();
  for (let at = propertiesStart; includeBim && at < size;) {
    const prefix = new DataView(read(source, 12, at));
    const id = prefix.getBigInt64(0, true).toString(), length = prefix.getUint32(8, true);
    at += 12;
    if (!slots.has(id) || metadata.has(id) || !length || length > MAX_ELEMENT_BYTES || at + length > size) throw new Error('Invalid element property record.');
    metadata.set(id, { at, length });
    at += length;
  }
  return { origin, records, elements, metadata, review };
}

function aggregateBounds(children) {
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const child of children) for (let i = 0; i < 3; i++) {
    min[i] = Math.min(min[i], child.min[i]);
    max[i] = Math.max(max[i], child.max[i]);
  }
  return { min, max };
}

// The initial camera fits the middle 98% of triangle-weighted record centres. The full bounds drive Fit All.
export function focusBounds(records, bounds) {
  const total = records.reduce((sum, record) => sum + record.indices, 0);
  const min = [], max = [];
  for (let axis = 0; axis < 3; axis++) {
    const centre = (entry) => (entry.min[axis] + entry.max[axis]) / 2;
    const ordered = [...records].sort((a, b) => centre(a) - centre(b));
    let weight = 0, low, high;
    for (const record of ordered) {
      weight += record.indices;
      if (low === undefined && weight >= total * 0.01) low = centre(record);
      if (weight >= total * 0.99) { high = centre(record); break; }
    }
    min.push(low < high ? low : bounds.min[axis]);
    max.push(low < high ? high : bounds.max[axis]);
  }
  return { min, max };
}

function assemble(parts, tagged = false, leaf = false) {
  const vertices = parts.reduce((sum, part) => sum + part.position.length / 3, 0);
  const position = new Float32Array(vertices * 3), normal = new Int16Array(vertices * 3), color = new Uint8Array(vertices * 4);
  const uv = leaf && parts.some((part) => part.uv) ? new Float32Array(vertices * 2) : null;
  const groups = leaf && parts.some((part) => part.solid || part.texture !== undefined);
  const solidGroups = [], blendedGroups = [];
  const opaque = [], blended = [];
  const opaqueTags = [], blendedTags = [];
  if (groups) parts.sort((a, b) => (a.texture ?? -1) - (b.texture ?? -1) || Number(a.solid) - Number(b.solid));
  let at = 0;
  for (const part of parts) {
    position.set(part.position, at * 3);
    normal.set(part.normal, at * 3);
    color.set(part.color, at * 4);
    if (part.uv && uv) uv.set(part.uv, at * 2);
    if (groups) {
      const entries = part.opaque ? solidGroups : blendedGroups;
      const previous = entries.at(-1);
      const closed = part.solid || undefined, texture = part.texture;
      if (previous && previous.closed === closed && previous.texture === texture) previous.count += part.index.length;
      else entries.push({ count: part.index.length, closed, texture });
    }
    for (let j = 0; j < part.index.length; j++) {
      const solid = j < part.opaque;
      (solid ? opaque : blended).push(at + part.index[j]);
      if (tagged && j % 3 === 0) (solid ? opaqueTags : blendedTags).push(part.element);
    }
    at += part.position.length / 3;
  }
  return { position, normal, color, uv, groups: groups ? [...solidGroups, ...blendedGroups] : undefined,
    opaque: Uint32Array.from(opaque), blended: Uint32Array.from(blended),
    tags: tagged ? Uint32Array.from([...opaqueTags, ...blendedTags]) : null };
}

function partFromRecord(source, record, local = false) {
  const buffer = read(source, record.bytes, record.offset), n = record.vertices * 3;
  const position = new Float32Array(buffer, 0, n);
  const index = new Uint32Array(buffer, n * 4 * (1 + record.normals), record.indices);
  if (index.some((i) => i >= record.vertices) || position.some((n) => !Number.isFinite(n))) throw new Error('Invalid mesh positions or indices.');
  const normals = record.normals ? new Float32Array(buffer, n * 4, n) : unitNormals({ positions: position, indices: index });
  if (normals.some((n) => !Number.isFinite(n))) throw new Error('Invalid mesh normal.');
  const normal = Int16Array.from(normals, (x) => Math.round(Math.max(-1, Math.min(1, x)) * 32767));
  const color = new Uint8Array(record.vertices * 4), a = record.rgba >>> 24;
  const rgba = linearColor(record.rgba);
  for (let i = 0; i < color.length; i += 4) color.set(rgba, i);
  const texture = record.includeBim && record.texture >= 0 ? record.texture : undefined;
  const uv = record.uv && (texture !== undefined || local)
    ? new Float32Array(buffer, index.byteOffset + index.byteLength, record.vertices * 2) : null;
  if (uv?.some((value) => !Number.isFinite(value))) throw new Error('Invalid mesh UV.');
  if (!local && record.shift) for (let i = 0; i < position.length; i++) position[i] += record.shift[i % 3];
  return { position, normal, color, index, uv, texture, solid: record.solid,
    opaque: a === 255 ? index.length : 0, element: record.element };
}

function reducedIndices(mesh, target, bounds) {
  const { position, normal, color } = mesh;
  const scale = Math.max(...bounds.max.map((n, i) => n - bounds.min[i]));
  const attributes = new Float32Array(position.length / 3 * 7);
  for (let i = 0, j = 0; j < color.length; i += 7, j += 4) {
    attributes[i] = color[j] / 255;
    attributes[i + 1] = color[j + 1] / 255;
    attributes[i + 2] = color[j + 2] / 255;
    attributes[i + 3] = color[j + 3] / 255;
    for (let a = 0; a < 3; a++) attributes[i + 4 + a] = normal[j / 4 * 3 + a] / 32767;
  }
  let error = 0;
  const n = mesh.opaque.length + mesh.blended.length;
  const output = ['opaque', 'blended'].map((kind) => {
    const input = mesh[kind];
    if (!input.length) return input;
    const limit = Math.max(3, Math.floor(target * input.length / n / 3) * 3);
    if (input.length <= limit) return input;
    let [indices, deviation] = MeshoptSimplifier.simplifyWithAttributes(input, position, 3, attributes, 7,
      [0.25, 0.25, 0.25, 0.5, 0.1, 0.1, 0.1], null, limit, scale, ['ErrorAbsolute', 'LockBorder', 'Sparse']);
    if (indices.length > limit) {
      // shortcut: preserve cuts where simplification allows it; relax borders on a page that otherwise cannot fit.
      [indices, deviation] = MeshoptSimplifier.simplifyWithAttributes(input, position, 3, attributes, 7,
        [0.25, 0.25, 0.25, 0.5, 0.1, 0.1, 0.1], null, limit, scale, ['ErrorAbsolute', 'Permissive', 'Sparse']);
    }
    if (indices.length > limit) {
      // shortcut: grid simplification handles disconnected triangle soup; revisit for continuous locked borders.
      [indices, deviation] = MeshoptSimplifier.simplifySloppy(input, position, 3, null, limit, 1);
      deviation *= scale;
    }
    if (!indices.length) {
      // The cluster still has a surface and the full original remains available in its children.
      indices = input.slice(0, 3);
      deviation = scale;
    }
    if (indices.length > limit) {
      indices = indices.slice(0, limit);
      deviation = scale;
    }
    if (indices.length < input.length) deviation = Math.max(deviation, scale * 1e-5);
    error = Math.max(error, deviation);
    return indices;
  });
  return { opaque: output[0], blended: output[1], error };
}

function pack(mesh, opaque, blended, tags = null) {
  const index = new Uint32Array(opaque.length + blended.length);
  index.set(opaque);
  index.set(blended, opaque.length);
  const [remap, vertices] = MeshoptSimplifier.compactMesh(index);
  const pick = tags ? true : undefined;
  const uv = mesh.uv ? true : undefined;
  const buffer = new ArrayBuffer(pageBytes(vertices, index.length, pick, uv));
  const output = viewsOfPage(buffer, { vertices, indices: index.length, pick, uv });
  for (let old = 0; old < remap.length; old++) {
    const next = remap[old];
    if (next >= vertices) continue;
    for (let axis = 0; axis < 3; axis++) {
      output.position[next * 3 + axis] = mesh.position[old * 3 + axis];
      output.normal[next * 3 + axis] = mesh.normal[old * 3 + axis];
    }
    for (let c = 0; c < 4; c++) output.color[next * 4 + c] = mesh.color[old * 4 + c];
    if (uv) {
      output.uv[next * 2] = mesh.uv[old * 2];
      output.uv[next * 2 + 1] = mesh.uv[old * 2 + 1];
    }
  }
  output.index.set(index);
  if (tags) output.tags.set(tags);
  return { buffer, vertices, indices: index.length, opaque: opaque.length, pick, uv,
    members: tags ? [...new Set(tags)].sort((a, b) => a - b) : undefined, groups: mesh.groups };
}

export async function buildMeshPagesFromSource(input, createFile, includeBim = true, onProgress) {
  await MeshoptSimplifier.ready;
  let output, shapeFile;
  try {
    const { origin, records, elements, metadata, review } = recordsOf(input, includeBim);
    output = createFile('meshes.bin');
    const pages = [];
    const shared = new Map(), shapes = [], instances = new Map();
    const weights = Uint32Array.from(records, ({ indices }) => indices / 3);
    const triangles = weights.reduce((sum, n) => sum + n, 0);
    const centres = Float64Array.from(records.flatMap(({ min, max }) => min.map((n, i) => (n + max[i]) / 2)));
    let bytes = 0;
    let writtenTriangles = 0;
    function write({ buffer, ...sizes }, bounds, error, children) {
      output.write(new Uint8Array(buffer));
      pages.push({ ...bounds, ...sizes, error, children, offset: bytes });
      bytes += buffer.byteLength;
      if (onProgress && children.length === 0) {
        writtenTriangles += sizes.indices / 3 * (sizes.count ?? 1);
        onProgress({ phase: 'triangles', completed: writtenTriangles, total: triangles });
      }
      return pages.length - 1;
    }
    const batches = new Map(), ordinary = [];
    for (const [id, record] of records.entries()) {
      if (record.shape === -1) { ordinary.push(id); continue; }
      const key = `${record.shape}/${includeBim ? record.texture : -1}/${record.rgba >>> 24 === 255}`;
      if (!batches.has(key)) batches.set(key, []);
      batches.get(key).push(id);
    }
    const leaves = splitCells(centres, weights, ordinary, PAGE_TRIANGLES);
    let roots = [];
    onProgress?.({ phase: 'triangles', completed: 0, total: triangles });
    for (const leaf of leaves) {
      const parts = [...leaf].map((i) => records[i]);
      const mesh = assemble(parts.map((part) => partFromRecord(input, part)), elements.length > 0, true);
      roots.push(write(pack(mesh, mesh.opaque, mesh.blended, mesh.tags), aggregateBounds(parts), 0, []));
    }
    let shapeBytes = 0;
    for (const batch of batches.values()) for (const leaf of splitCells(centres, weights, batch, PAGE_TRIANGLES)) {
      const parts = [...leaf].map((id) => records[id]);
      const record = parts[0];
      let shape = shared.get(record.shape);
      if (shape === undefined) {
        const part = partFromRecord(input, record, true);
        const mesh = { ...part, color: new Uint8Array(part.color.length).fill(255) };
        const { buffer, vertices, indices, uv } = pack(mesh, part.index, []);
        shapeFile ??= createFile('shapes.bin');
        shapeFile.write(new Uint8Array(buffer));
        shape = shapes.length;
        shapes.push({ vertices, indices, uv, offset: shapeBytes });
        shapeBytes += buffer.byteLength;
        shared.set(record.shape, shape);
      }
      const { vertices, indices, uv } = shapes[shape];
      const buffer = new ArrayBuffer(parts.length * INSTANCE_BYTES), data = new DataView(buffer);
      for (const [i, part] of parts.entries()) {
        const at = i * INSTANCE_BYTES;
        for (let axis = 0; axis < 3; axis++) data.setFloat32(at + 4 * axis, part.shift[axis], true);
        data.setUint32(at + 12, part.element ?? 0, true);
        new Uint8Array(buffer, at + 16, 4).set(linearColor(part.rgba));
      }
      const pick = elements.length > 0 ? true : undefined;
      const members = pick ? [...new Set(parts.map((part) => part.element))].sort((a, b) => a - b) : undefined;
      const texture = includeBim && record.texture >= 0 ? record.texture : undefined;
      const opaque = record.rgba >>> 24 === 255 ? indices : 0;
      const id = write({ buffer, vertices, indices, uv, opaque, pick, members, shape, count: parts.length,
        groups: [{ count: indices, closed: record.solid || undefined, texture }] }, aggregateBounds(parts), 0, []);
      roots.push(id);
      instances.set(id, parts);
    }
    if (instances.size && roots.length > 1) {
      const pageCentres = Float64Array.from(pages.flatMap(({ min, max }) => min.map((n, i) => (n + max[i]) / 2)));
      roots = splitCells(pageCentres, new Uint32Array(pages.length).fill(1), roots, 1).map((ids) => ids[0]);
    }
    console.log(`${roots.length} full-resolution mesh pages`);
    let level = 0;
    while (roots.length > 48 || roots.reduce((sum, id) => sum + residentBytes(pages[id], shapes), 0) > ROOT_BYTES / 2) {
      const next = [];
      // Separate instance batches can push a level just over the root count limit.
      const fanout = instances.size && roots.length > 48 ? Math.min(4, Math.ceil(roots.length / 48)) : 4;
      const total = Math.ceil(roots.length / fanout);
      level++;
      for (let i = 0; i < roots.length; i += fanout) {
        onProgress?.({ phase: 'overview', completed: next.length, total, level });
        const children = roots.slice(i, i + fanout);
        if (children.length === 1) { next.push(children[0]); continue; }
        const group = children.map((id) => pages[id]);
        const bounds = aggregateBounds(group);
        const mesh = assemble(children.flatMap((id) => {
          const page = pages[id];
          const copies = instances.get(id);
          return copies ? copies.map((record) => partFromRecord(input, record))
            : [{ ...viewsOfPage(read(output, sizeOfPage(page), page.offset), page), opaque: page.opaque }];
        }));
        const limit = Math.min(PAGE_TRIANGLES * 3 - 3, Math.max(6, (mesh.opaque.length + mesh.blended.length) / 5));
        const { opaque, blended, error } = reducedIndices(mesh, limit, bounds);
        next.push(write(pack(mesh, opaque, blended), bounds, error + Math.max(...group.map((p) => p.error)), children));
      }
      onProgress?.({ phase: 'overview', completed: next.length, total, level });
      roots = next;
      console.log(`${roots.length} pages at the next level`);
    }
    const bounds = aggregateBounds(records);
    let propertyBytes = 0;
    const props = metadata.size ? createFile('elements.bin') : null;
    try {
      if (elements.length) onProgress?.({ phase: 'properties', completed: 0, total: elements.length });
      for (const [index, element] of elements.entries()) {
        if (!element.min) Object.assign(element, { min: [0, 0, 0], max: [0, 0, 0], noGeometry: true });
        const record = metadata.get(element.id);
        element.offset = propertyBytes;
        element.size = record?.length ?? 0;
        if (record) {
          const encoded = new Uint8Array(read(input, record.length, record.at));
          const meta = JSON.parse(utf8.decode(encoded));
          if (meta?.id !== element.id) throw new Error('Mismatched element ID in properties.');
          for (const field of ELEMENT_FIELDS) if (typeof meta[field] === 'string' && meta[field]) element[field] = meta[field];
          props.write(encoded);
        }
        propertyBytes += element.size;
        onProgress?.({ phase: 'properties', completed: index + 1, total: elements.length });
      }
    } finally { props?.close(); }
    const manifest = validateMeshPages({ format: MESH_FORMAT, origin, ...bounds, focus: focusBounds(records, bounds), pages, roots, bytes, triangles,
      ...(shapes.length ? { shapes, shapeBytes } : {}),
      ...((elements.length || review) ? { elements, propertyBytes } : {}), ...(review ? { review } : {}) });
    const manifestFile = createFile('manifest.json');
    try { manifestFile.write(new TextEncoder().encode(JSON.stringify(manifest))); }
    finally { manifestFile.close(); }
    console.log(`${triangles} triangles, ${pages.length} total pages, ${bytes} bytes`);
    return manifest;
  } finally {
    shapeFile?.close();
    output?.close();
  }
}
