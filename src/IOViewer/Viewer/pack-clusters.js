import { closeSync, mkdirSync, openSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { validateManifest } from './src/stream/manifest.js';
import { CLUSTER_FORMAT, detailInputBytes, FACES, INSTANCE_FLOATS, STEP, VERTICES } from './src/stream/clusters.js';
import { readTile } from './src/stream/tile.js';
import { unitNormals } from './src/engine/chunks.js';
import { buildMeshPages } from './build-mesh-pages.js';

const [source, destination, mode, ...extras] = process.argv.slice(2);
const native = source?.toLowerCase().endsWith('.ivmesh');
if (!source || !destination || extras.length || (mode && (!native || mode !== '--geometry-only'))) {
  throw new Error('Usage: npm run pack-clusters -- <prepared-source> <new-output-directory> [--geometry-only]');
}
if (native) {
  await buildMeshPages(source, destination, mode !== '--geometry-only');
  process.exit(0);
}
const manifest = validateManifest(JSON.parse(readFileSync(join(source, 'manifest.json'))));
const origin = manifest.min.map((n, i) => (n + manifest.max[i]) / 2);
const palette = [], roots = [];
let first = 0, offset = 0, id = 0;
mkdirSync(destination);
const coarse = openSync(join(destination, 'coarse.bin'), 'wx');
const detail = openSync(join(destination, 'detail.bin'), 'wx');
try {
  for (const tile of manifest.tiles) {
    const data = readTile(readFileSync(join(source, tile.file)), tile);
    const { meta } = data;
    const instances = meta.instances;
    const shapes = data.view(instances.geometry), material = data.view(instances.material), matrices = data.view(instances.matrix);
    if (instances.count !== tile.elements || instances.count > 6400 || tile.triangles !== instances.count * FACES.length / 3) {
      throw new Error(`${tile.file}: unsupported vessel topology.`);
    }
    const colors = meta.materials.map(({ color, opacity, texture }) => {
      if (opacity !== 1 || texture != null) throw new Error('Expected an opaque vessel material.');
      let index = palette.findIndex((entry) => entry.every((n, i) => n === color[i]));
      if (index < 0) { index = palette.length; palette.push(color); }
      if (index >= 3) throw new Error('Expected at most three vessel materials.');
      return index;
    });
    const children = [];
    const root = { x: tile.x, y: tile.y, min: tile.min, max: tile.max, first, count: instances.count, children };
    const cells = Array.from({ length: 100 }, () => []);
    for (let i = 0; i < instances.count; i++) {
      const x = Math.floor((i % 40) / 4), y = Math.floor((Math.floor(i / 40) % 40) / 4);
      cells[y * 10 + x].push(i);
    }
    for (const members of cells) {
      if (!members.length) continue;
      members.sort((a, b) => colors[material[a]] - colors[material[b]]);
      const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
      for (const i of members) {
        const shape = meta.geometries[shapes[i]];
        for (let axis = 0; axis < 3; axis++) {
          const place = matrices[i * 12 + 9 + axis] + tile.rtcOffset[axis];
          min[axis] = Math.min(min[axis], shape.bbox.min[axis] + place);
          max[axis] = Math.max(max[axis], shape.bbox.max[axis] + place);
        }
      }
      const anchor = min.map((n, axis) => Math.floor((n - tile.rtcOffset[axis]) / STEP) * STEP);
      const boxes = new Float32Array(members.length * INSTANCE_FLOATS);
      const page = new ArrayBuffer(detailInputBytes(members.length));
      const positions = new Uint16Array(page, 0, members.length * VERTICES * 3);
      const normals = new Int16Array(page, positions.byteLength);
      const counts = [0, 0, 0];
      for (let j = 0; j < members.length; j++) {
        const i = members[j], shape = meta.geometries[shapes[i]];
        const src = data.view(shape.positions), indices = data.view(shape.indices);
        const matrix = matrices.subarray(i * 12, i * 12 + 12);
        if (!(src instanceof Uint16Array) || src.length !== VERTICES * 3 || shape.q?.s !== STEP || !shape.q.o.every((n) => n === 0)
          || shape.normals || indices.length !== FACES.length || indices.some((n, t) => n !== FACES[t])
          || matrix.subarray(0, 9).some((n, k) => n !== +(k % 4 === 0))) throw new Error('Expected the authored vessel mesh.');
        const color = colors[material[i]];
        counts[color]++;
        const { min: low, max: high } = shape.bbox;
        const start = j * VERTICES * 3, at = j * INSTANCE_FLOATS;
        const shifts = [];
        for (let axis = 0; axis < 3; axis++) {
          const place = matrix[9 + axis];
          const shift = (place - anchor[axis]) / STEP;
          if (!Number.isInteger(shift)) throw new Error('Position would lose precision.');
          shifts.push(shift);
          const center = axis < 2 ? (low[axis] + high[axis]) / 2 : low[axis];
          boxes[at + axis] = center + place + tile.rtcOffset[axis] - origin[axis];
          boxes[at + 3 + axis] = (high[axis] - low[axis]) / (axis < 2 ? 2.14 : 1);
        }
        boxes[at + 6] = color;
        const normal = unitNormals({ positions: src, q: shape.q, indices });
        for (let k = 0; k < src.length; k++) {
          const value = src[k] + shifts[k % 3];
          if (value < 0 || value > 65535) throw new Error('Cluster exceeds its quantization range.');
          positions[start + k] = value;
          normals[start + k] = Math.round(normal[k] * 32767);
        }
      }
      writeFileSync(coarse, boxes);
      writeFileSync(detail, new Uint8Array(page));
      children.push({ id: id++, min, max, anchor: anchor.map((n, axis) => n + tile.rtcOffset[axis] - origin[axis]),
        first, count: members.length, counts, offset });
      first += members.length;
      offset += page.byteLength;
    }
    roots.push(root);
    if (roots.length % 10 === 0) console.log(`${roots.length}/${manifest.tiles.length} areas, ${id} clusters`);
  }
  if (first !== manifest.elements || !palette.length) throw new Error('Unexpected cluster totals.');
  while (palette.length < 3) palette.push(palette[0]);
  writeFileSync(join(destination, 'manifest.json'), JSON.stringify({
    format: CLUSTER_FORMAT, sourceBytes: manifest.totalBytes, elements: first, triangles: manifest.triangles,
    min: manifest.min, max: manifest.max, origin, palette, roots, detailBytes: offset,
  }), { flag: 'wx' });
  console.log(`${first} vessels, ${id} clusters, ${offset} bytes of fine geometry`);
} finally {
  closeSync(detail);
  closeSync(coarse);
}
