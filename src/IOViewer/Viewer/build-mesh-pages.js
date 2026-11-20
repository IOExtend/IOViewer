import { closeSync, fstatSync, mkdirSync, openSync, readSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { MeshoptSimplifier } from 'meshoptimizer/simplifier';
import { splitCells, unitNormals } from './src/engine/chunks.js';
import { ELEMENT_FIELDS, isBounds, isPoint, MAX_ELEMENT_BYTES, MESH_FORMAT, MESH_MANIFEST_BYTES, PAGE_TRIANGLES, ROOT_BYTES, pageBytes, sizeOfPage, validateMeshPages, viewsOfPage } from './src/stream/meshPages.js';
import { validateReviewMeta } from './src/data.js';

const HEADER = 28, RECORD = 40;
const channel = Array.from({ length: 256 }, (_, i) => {
  const x = i / 255;
  return Math.round(255 * (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
});

function read(fd, bytes, offset) {
  const buffer = new ArrayBuffer(bytes), data = new Uint8Array(buffer);
  for (let at = 0; at < bytes;) {
    const read = readSync(fd, data, at, bytes - at, offset + at);
    if (!read) throw new Error('Truncated geometry source.');
    at += read;
  }
  return buffer;
}

function recordsOf(fd, includeBim) {
  const header = new DataView(read(fd, HEADER, 0));
  const version = header.getUint32(0, true);
  const reviewFormat = version === 0x33534d49;
  const annotated = reviewFormat || version === 0x32534d49;
  if (!annotated && version !== 0x31534d49) throw new Error('Expected an IOViewer .ivmesh source.');
  const origin = [4, 12, 20].map((i) => header.getFloat64(i, true));
  if (!isPoint(origin)) throw new Error('Invalid source origin.');
  const records = [];
  const size = fstatSync(fd).size;
  const start = HEADER + (annotated ? 8 : 0), recordSize = RECORD + (reviewFormat ? 16 : annotated ? 8 : 0);
  const end = annotated ? Number(new DataView(read(fd, 8, HEADER)).getBigInt64(0, true)) : size;
  if (!Number.isSafeInteger(end) || end < start || end > size) throw new Error('Invalid geometry directory offset.');
  const meta = new Float32Array(recordSize / 4), data = new Uint8Array(meta.buffer), counts = new Uint32Array(meta.buffer);
  const recordView = new DataView(meta.buffer);
  const slots = new Map(), elements = [];
  let review, propertiesStart = end, textureCount = 0;
  if (reviewFormat) {
    const length = new DataView(read(fd, 4, end)).getUint32(0, true);
    propertiesStart += 4 + length;
    if (!length || length > MESH_MANIFEST_BYTES || propertiesStart > size) throw new Error('Invalid cluster review size.');
    if (includeBim) {
      const { elements: sourceElements, ...fields } = JSON.parse(Buffer.from(read(fd, length, end + 4)).toString('utf8'));
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
    if (offset + recordSize > end || readSync(fd, data, 0, recordSize, offset) !== recordSize) throw new Error('Truncated mesh record.');
    const min = [...meta.subarray(0, 3)], max = [...meta.subarray(3, 6)];
    const [vertices, indices, rgba, normals] = counts.subarray(6);
    const texture = reviewFormat ? recordView.getInt32(RECORD + 8, true) : -1;
    const solid = reviewFormat ? recordView.getUint32(RECORD + 12, true) : 0;
    const bytes = vertices * (12 * (1 + normals) + (texture >= 0 ? 8 : 0)) + indices * 4;
    offset += recordSize;
    if (!isBounds({ min, max }) || !vertices || vertices > indices || !indices || indices % 3 || indices > PAGE_TRIANGLES * 3
      || normals > 1 || solid > 1 || texture < -1 || (includeBim && texture >= textureCount) || bytes > end - offset) throw new Error('Invalid mesh record.');
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
    records.push({ min, max, vertices, indices, rgba, normals, offset, bytes, element, texture, solid: !!solid, includeBim });
    offset += bytes;
  }
  if (!records.length) throw new Error('The source contains no triangle geometry.');
  const metadata = new Map();
  for (let at = propertiesStart; includeBim && at < size;) {
    const prefix = new DataView(read(fd, 12, at));
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

function partFromRecord(fd, record) {
  const buffer = read(fd, record.bytes, record.offset), n = record.vertices * 3;
  const position = new Float32Array(buffer, 0, n);
  const index = new Uint32Array(buffer, n * 4 * (1 + record.normals), record.indices);
  if (index.some((i) => i >= record.vertices) || position.some((n) => !Number.isFinite(n))) throw new Error('Invalid mesh positions or indices.');
  const normals = record.normals ? new Float32Array(buffer, n * 4, n) : unitNormals({ positions: position, indices: index });
  if (normals.some((n) => !Number.isFinite(n))) throw new Error('Invalid mesh normal.');
  const normal = Int16Array.from(normals, (x) => Math.round(Math.max(-1, Math.min(1, x)) * 32767));
  const color = new Uint8Array(record.vertices * 4), a = record.rgba >>> 24;
  const rgba = [channel[record.rgba & 255], channel[(record.rgba >>> 8) & 255], channel[(record.rgba >>> 16) & 255], a];
  for (let i = 0; i < color.length; i += 4) color.set(rgba, i);
  const texture = record.includeBim && record.texture >= 0 ? record.texture : undefined;
  const uv = texture === undefined ? null : new Float32Array(buffer, index.byteOffset + index.byteLength, record.vertices * 2);
  if (uv?.some((value) => !Number.isFinite(value))) throw new Error('Invalid mesh UV.');
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

export async function buildMeshPages(source, destination, includeBim = true) {
  await MeshoptSimplifier.ready;
  const input = openSync(source, 'r');
  let output;
  try {
    const { origin, records, elements, metadata, review } = recordsOf(input, includeBim);
    mkdirSync(destination);
    output = openSync(join(destination, 'meshes.bin'), 'wx+');
    const pages = [];
    const weights = Uint32Array.from(records, ({ indices }) => indices / 3);
    const centres = Float64Array.from(records.flatMap(({ min, max }) => min.map((n, i) => (n + max[i]) / 2)));
    let bytes = 0;
    function write({ buffer, ...sizes }, bounds, error, children) {
      writeFileSync(output, new Uint8Array(buffer));
      pages.push({ ...bounds, ...sizes, error, children, offset: bytes });
      bytes += buffer.byteLength;
      return pages.length - 1;
    }
    const leaves = splitCells(centres, weights, records.keys(), PAGE_TRIANGLES);
    let roots = [];
    for (const leaf of leaves) {
      const parts = [...leaf].map((i) => records[i]);
      const mesh = assemble(parts.map((part) => partFromRecord(input, part)), elements.length > 0, true);
      roots.push(write(pack(mesh, mesh.opaque, mesh.blended, mesh.tags), aggregateBounds(parts), 0, []));
    }
    console.log(`${roots.length} full-resolution mesh pages`);
    const triangles = weights.reduce((sum, n) => sum + n, 0);
    while (roots.length > 48 || roots.reduce((sum, id) => sum + sizeOfPage(pages[id]), 0) > ROOT_BYTES / 2) {
      const next = [];
      for (let i = 0; i < roots.length; i += 4) {
        const children = roots.slice(i, i + 4);
        if (children.length === 1) { next.push(children[0]); continue; }
        const group = children.map((id) => pages[id]);
        const bounds = aggregateBounds(group);
        const mesh = assemble(group.map((page) => ({ ...viewsOfPage(read(output, sizeOfPage(page), page.offset), page), opaque: page.opaque })));
        const limit = Math.min(PAGE_TRIANGLES * 3 - 3, Math.max(6, (mesh.opaque.length + mesh.blended.length) / 5));
        const { opaque, blended, error } = reducedIndices(mesh, limit, bounds);
        next.push(write(pack(mesh, opaque, blended), bounds, error + Math.max(...group.map((p) => p.error)), children));
      }
      roots = next;
      console.log(`${roots.length} pages at the next level`);
    }
    const bounds = aggregateBounds(records);
    let propertyBytes = 0;
    const props = metadata.size ? openSync(join(destination, 'elements.bin'), 'wx') : null;
    try {
      for (const element of elements) {
        if (!element.min) Object.assign(element, { min: [0, 0, 0], max: [0, 0, 0], noGeometry: true });
        const record = metadata.get(element.id);
        element.offset = propertyBytes;
        element.size = record?.length ?? 0;
        if (record) {
          const encoded = new Uint8Array(read(input, record.length, record.at));
          const meta = JSON.parse(Buffer.from(encoded.buffer).toString('utf-8'));
          if (meta?.id !== element.id) throw new Error('Mismatched element ID in properties.');
          for (const field of ELEMENT_FIELDS) if (typeof meta[field] === 'string' && meta[field]) element[field] = meta[field];
          writeFileSync(props, encoded);
        }
        propertyBytes += element.size;
      }
    } finally { if (props !== null) closeSync(props); }
    const manifest = validateMeshPages({ format: MESH_FORMAT, origin, ...bounds, focus: focusBounds(records, bounds), pages, roots, bytes, triangles,
      ...((elements.length || review) ? { elements, propertyBytes } : {}), ...(review ? { review } : {}) });
    writeFileSync(join(destination, 'manifest.json'), JSON.stringify(manifest), { flag: 'wx' });
    console.log(`${triangles} triangles, ${pages.length} total pages, ${bytes} bytes`);
    return manifest;
  } finally {
    if (output !== undefined) closeSync(output);
    closeSync(input);
  }
}
