import { Matrix3, Matrix4, Vector3 } from 'three';
import { binaryViewType, parseModelMeta } from '../data.js';
import { bakeSource, indexArray, splitCells, unitNormals } from '../engine/chunks.js';
import { normalsView, positionsView } from '../engine/quantize.js';
import { MAX_TILE_INPUT, MAX_TILE_MESH } from './manifest.js';

const decoder = new TextDecoder('utf-8', { fatal: true });
const encoder = new TextEncoder();
const CHARS = 4 * 1024 ** 2;

function block(html, opening) {
  const marker = encoder.encode(opening);
  // Find the opening tag without decoding the HTML or keeping two copies of the embedded BIN string.
  for (let i = html.indexOf(60); i >= 0; i = html.indexOf(60, i + 1)) {
    if (!marker.every((value, j) => value === html[i + j])) continue;
    const start = i + marker.length;
    const end = html.indexOf(60, start);
    if (end >= start && decoder.decode(html.subarray(end, end + 9)) === '</script>') return html.subarray(start, end);
    break;
  }
  throw new Error('Missing or malformed tile data block.');
}

export function readTile(html, tile) {
  if (html.length !== tile.bytes || html.length > MAX_TILE_INPUT) throw new Error('Tile length changed.');
  const meta = parseModelMeta(decoder.decode(block(html, '<script id="ioviewer-meta" type="application/json">')));
  if (meta.format !== 3 || meta.truncated || meta.elements.length !== tile.elements || !meta.rtcOffset
    || tile.rtcOffset.some((n, i) => n !== meta.rtcOffset[i])) throw new Error('Tile metadata differs from manifest.');
  const encoded = block(html, '<script id="ioviewer-bin" type="application/octet-stream">');
  if (!encoded.length || encoded.length % 4) throw new Error('Invalid tile BIN length.');
  const padding = encoded.at(-2) === 61 ? 2 : encoded.at(-1) === 61 ? 1 : 0;
  const bin = new Uint8Array(encoded.length / 4 * 3 - padding);
  let offset = 0;
  for (let start = 0; start < encoded.length; start += CHARS) {
    const text = decoder.decode(encoded.subarray(start, start + CHARS));
    if (bin.setFromBase64) {
      const { read, written } = bin.subarray(offset).setFromBase64(text, { lastChunkHandling: 'strict' });
      if (read !== text.length) throw new Error('Invalid tile BIN.');
      offset += written;
    } else {
      const decoded = atob(text);
      if (offset + decoded.length > bin.length) throw new Error('Invalid tile BIN.');
      for (let j = 0; j < decoded.length; j++) bin[offset++] = decoded.charCodeAt(j);
    }
  }
  if (offset !== bin.length) throw new Error('Invalid tile BIN size.');
  return { meta, view: (v) => new (binaryViewType(v, bin.length))(bin.buffer, v.o, v.n) };
}

export async function fetchTile(url, size) {
  if (!Number.isSafeInteger(size) || size <= 0 || size > MAX_TILE_INPUT) throw new Error('Invalid tile size.');
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok || !response.body) throw new Error(`Tile fetch: HTTP ${response.status}.`);
  const reader = response.body.getReader();
  const html = new Uint8Array(size);
  let at = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (at + value.length > size) throw new Error('Tile exceeds its declared size.');
      html.set(value, at);
      at += value.length;
    }
    if (at !== size) throw new Error('Tile is truncated.');
    return html;
  } finally {
    reader.releaseLock();
  }
}

// Build material batches off the UI thread. Each batch is spatially local and normally uses 16-bit indices.
export function prepareTile(data, tile) {
  const { meta } = data;
  const { count } = meta.instances;
  const shapes = data.view(meta.instances.geometry), materials = data.view(meta.instances.material);
  const matrices = data.view(meta.instances.matrix);
  const groups = meta.materials.map(() => []);
  const centres = new Float64Array(count * 3), weights = new Uint32Array(count);
  const matrix = new Matrix4(), normalMatrix = new Matrix3(), v = new Vector3();
  let triangles = 0, minBytes = 0;
  for (let i = 0; i < count; i++) {
    const shape = meta.geometries[shapes[i]], group = groups[materials[i]];
    if (!shape || !group || shape.positions.n % 3 || shape.indices.n % 3) throw new Error('Invalid tile mesh.');
    weights[i] = shape.positions.n / 3;
    triangles += shape.indices.n / 3;
    minBytes += weights[i] * 18 + shape.indices.n * 2;
    if (minBytes > MAX_TILE_MESH) throw new Error('Tile exceeds the mesh budget.');
    const { min, max } = shape.bbox;
    setMatrix(matrix, matrices, i);
    v.set((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2).applyMatrix4(matrix);
    if (![v.x, v.y, v.z].every(Number.isFinite)) throw new Error('Invalid tile transform.');
    v.toArray(centres, i * 3);
    group.push(i);
  }
  if (triangles !== tile.triangles) throw new Error('Tile triangle count differs from manifest.');

  let bytes = 0;
  const batches = [];
  for (let material = 0; material < groups.length; material++) {
    for (const members of splitCells(centres, weights, groups[material], 65535)) {
      let vertices = 0, indices = 0;
      for (const i of members) {
        vertices += weights[i];
        indices += meta.geometries[shapes[i]].indices.n;
      }
      bytes += vertices * 18 + indices * (vertices > 65535 ? 4 : 2);
      if (bytes > MAX_TILE_MESH) throw new Error('Tile exceeds the mesh budget.');
      const position = new Float32Array(vertices * 3), normal = new Int16Array(vertices * 3);
      const index = indexArray(vertices, indices);
      const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
      let base = 0, at = 0;
      for (const i of members) {
        const shape = meta.geometries[shapes[i]];
        const src = data.view(shape.indices), positions = positionsView(data, shape);
        if (src.some((n) => n >= weights[i])) throw new Error('Tile index is out of bounds.');
        const normals = unitNormals(bakeSource(positions, shape.q, normalsView(data, shape), src, null));
        setMatrix(matrix, matrices, i);
        normalMatrix.getNormalMatrix(matrix);
        const mirrored = matrix.determinant() < 0;
        const q = shape.q, scale = q?.s ?? 1, origin = q?.o ?? [0, 0, 0];
        for (let j = 0; j < positions.length; j += 3) {
          const k = base * 3 + j;
          v.set(origin[0] + positions[j] * scale, origin[1] + positions[j + 1] * scale, origin[2] + positions[j + 2] * scale)
            .applyMatrix4(matrix).toArray(position, k);
          for (let axis = 0; axis < 3; axis++) {
            min[axis] = Math.min(min[axis], position[k + axis]);
            max[axis] = Math.max(max[axis], position[k + axis]);
          }
          v.fromArray(normals, j).applyNormalMatrix(normalMatrix).multiplyScalar(32767).toArray(normal, k);
        }
        for (let j = 0; j < src.length; j += 3) {
          index[at++] = base + src[j];
          index[at++] = base + src[j + (mirrored ? 2 : 1)];
          index[at++] = base + src[j + (mirrored ? 1 : 2)];
        }
        base += weights[i];
      }
      if (!min.every(Number.isFinite) || !max.every(Number.isFinite)) throw new Error('Non-finite tile geometry.');
      batches.push({ position, normal, index, material, min, max });
    }
  }
  return { bytes, materials: meta.materials, batches };
}

function setMatrix(target, m, i) {
  const k = i * 12;
  target.set(m[k], m[k + 3], m[k + 6], m[k + 9], m[k + 1], m[k + 4], m[k + 7], m[k + 10],
    m[k + 2], m[k + 5], m[k + 8], m[k + 11], 0, 0, 0, 1);
}
