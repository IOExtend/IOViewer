import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, rmdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { buildMeshPages, focusBounds } from '../../build-mesh-pages.js';
import { buildMeshPagesFromSource } from '../../src/stream/meshBuilder.js';
import { INSTANCE_BYTES, MESH_FORMAT, pageBytes, readPlacements, validateMeshPages, viewsOfPage } from '../../src/stream/meshPages.js';
import { openMeshPackage } from '../../src/stream/meshSource.js';

const bounds = { min: [0, 0, 0], max: [1, 1, 0] };

test('a shared shape has one byte range and instance batches validate their own placement data', () => {
  const shape = { vertices: 3, indices: 3, offset: 0 };
  const node = { ...bounds, ...shape, shape: 0, count: 2, pick: true, members: [0, 1],
    children: [], error: 0, opaque: 3, groups: [{ count: 3 }] };
  const manifest = { ...bounds, format: MESH_FORMAT, origin: [0, 0, 0], pages: [node], roots: [0],
    elements: ['1', '2'].map((id) => ({ ...bounds, id, offset: 0, size: 0 })),
    bytes: 2 * INSTANCE_BYTES, shapes: [shape], shapeBytes: pageBytes(3, 3), triangles: 2 };
  assert.equal(validateMeshPages(manifest), manifest);
  assert.throws(() => validateMeshPages({ ...manifest, pages: [{ ...node, shape: 1 }] }), /instance batch/);
  assert.throws(() => validateMeshPages({ ...manifest, triangles: 1 }), /totals/);
  const data = new DataView(new ArrayBuffer(manifest.bytes));
  data.setUint8(19, 255);
  data.setUint8(INSTANCE_BYTES + 19, 255);
  data.setFloat32(INSTANCE_BYTES, 2, true);
  data.setUint32(INSTANCE_BYTES + 12, 1, true);
  assert.deepEqual([...readPlacements(data.buffer, node).offset], [0, 0, 0, 2, 0, 0]);
  assert.deepEqual([...readPlacements(data.buffer, node).elements], [0, 1]);
  data.setUint32(INSTANCE_BYTES + 12, 2, true);
  assert.throws(() => readPlacements(data.buffer, node), /instance data/);
});

test('a cluster tree covers every leaf exactly once and bounds its error and byte ranges', () => {
  const page = { ...bounds, offset: 0, vertices: 3, indices: 3, opaque: 3, error: 0, children: [] };
  const step = pageBytes(3, 3);
  const manifest = { ...bounds, format: MESH_FORMAT, origin: [0, 0, 0], triangles: 2, bytes: 3 * step,
    pages: [page, { ...page, offset: step }, { ...page, offset: 2 * step, children: [0, 1], error: 0.01 }], roots: [2] };
  assert.equal(validateMeshPages(manifest), manifest);
  for (const patch of [{ children: [1, 1] }, { offset: 1 }, { children: [2] }, { max: [0.5, 0.5, 0] }]) {
    assert.throws(() => validateMeshPages({ ...manifest, pages: [...manifest.pages.slice(0, 2), { ...manifest.pages[2], ...patch }] }));
  }
  assert.throws(() => validateMeshPages({ ...manifest, roots: [0, 2] }));
});

test('the initial focus ignores a remote record with less than one percent of the triangles', () => {
  const outer = { min: [0, 0, 0], max: [1000, 3, 0] };
  const focus = focusBounds([{ ...bounds, indices: 1000 }, { min: [1, 1, 0], max: [2, 2, 0], indices: 1000 },
    { min: [999, 0, 0], max: [1000, 3, 0], indices: 3 }], outer);
  assert.deepEqual(focus, { min: [0.5, 0.5, 0], max: [1.5, 1.5, 0] });
});

test('a native geometry record produces the same indexed triangle and preserves alpha', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'ioviewer-mesh-pages-'));
  const output = join(folder, 'output'), source = join(folder, 'one.ivmesh');
  try {
    const bytes = Buffer.alloc(116);
    bytes.write('IMS1');
    bytes.writeFloatLE(1, 40);
    bytes.writeFloatLE(1, 44);
    bytes.writeUInt32LE(3, 52);
    bytes.writeUInt32LE(3, 56);
    bytes.set([255, 0, 0, 128], 60);
    [0, 0, 0, 1, 0, 0, 0, 1, 0].forEach((n, i) => bytes.writeFloatLE(n, 68 + i * 4));
    [0, 1, 2].forEach((n, i) => bytes.writeUInt32LE(n, 104 + i * 4));
    await writeFile(source, bytes);
    const manifest = await buildMeshPages(source, output);
    const [page] = manifest.pages;
    assert.equal(manifest.triangles, 1);
    assert.equal(page.opaque, 0);
    const packed = await readFile(join(output, 'meshes.bin'));
    const mesh = viewsOfPage(new Uint8Array(packed).buffer, page);
    assert.deepEqual([...mesh.index], [0, 1, 2]);
    assert.deepEqual([...mesh.position], [0, 0, 0, 1, 0, 0, 0, 1, 0]);
    assert.deepEqual([...mesh.normal], [0, 0, 32767, 0, 0, 32767, 0, 0, 32767]);
    assert.deepEqual([...mesh.color], [255, 0, 0, 128, 255, 0, 0, 128, 255, 0, 0, 128]);
  } finally {
    await Promise.all([source, join(output, 'manifest.json'), join(output, 'meshes.bin')].map((file) => rm(file, { force: true })));
    await rmdir(output).catch((error) => { if (error.code !== 'ENOENT') throw error; });
    await rmdir(folder);
  }
});

test('IMS2 preserves exact IDs and property ranges and also packs geometry alone', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'ioviewer-bim-pages-'));
  const source = join(folder, 'one.ivmesh'), review = join(folder, 'review'), geometry = join(folder, 'geometry');
  const property = Buffer.from('{"id":"9007199254740993","name":"Slab","category":"Floors","properties":{"Identity":{"Type":"Slab"}}}');
  try {
    const end = 132;
    const input = Buffer.alloc(end + 12 + property.length);
    input.write('IMS2');
    input.writeBigInt64LE(BigInt(end), 28);
    input.writeFloatLE(1, 48);
    input.writeFloatLE(1, 52);
    input.writeUInt32LE(3, 60);
    input.writeUInt32LE(3, 64);
    input.set([255, 255, 255, 255], 68);
    input.writeBigInt64LE(9007199254740993n, 76);
    [0, 0, 0, 1, 0, 0, 0, 1, 0].forEach((n, i) => input.writeFloatLE(n, 84 + i * 4));
    [0, 1, 2].forEach((n, i) => input.writeUInt32LE(n, 120 + i * 4));
    input.writeBigInt64LE(9007199254740993n, end);
    input.writeUInt32LE(property.length, end + 8);
    property.copy(input, end + 12);
    await writeFile(source, input);
    const annotated = await buildMeshPages(source, review);
    assert.deepEqual(annotated.elements, [{ ...bounds, id: '9007199254740993', name: 'Slab', category: 'Floors', offset: 0, size: property.length }]);
    assert.deepEqual(await readFile(join(review, 'elements.bin')), property);
    const browserFiles = new Map();
    function copy(bytes, target, offset, size = target.length) {
      const part = bytes.subarray(offset, offset + Math.min(size, target.length));
      target.set(part);
      return part.length;
    }
    const fromRanges = await buildMeshPagesFromSource({
      length: input.length,
      read: (target, offset) => copy(input, target, offset, 7),
    }, (name) => {
      let bytes = Buffer.alloc(0);
      return {
        read: (target, offset) => copy(bytes, target, offset),
        write: (part) => { bytes = Buffer.concat([bytes, part]); },
        close: () => { browserFiles.set(name, bytes); },
      };
    });
    assert.deepEqual(fromRanges, annotated);
    for (const [name, data] of browserFiles) assert.deepEqual(data, await readFile(join(review, name)));

    const local = await openMeshPackage(async (name) => new Blob([browserFiles.get(name)]));
    const response = await local.fetch('/pages/0');
    assert.equal(Number(response.headers.get('Content-Length')), browserFiles.get('meshes.bin').length);
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), browserFiles.get('meshes.bin'));
    assert.deepEqual(await (await local.fetch('/elements/0')).json(), JSON.parse(property));
    assert.equal((await local.fetch('/pages/01')).status, 404);
    const abort = new AbortController();
    abort.abort();
    await assert.rejects(local.fetch('/pages/0', { signal: abort.signal }), { name: 'AbortError' });
    const shape = await buildMeshPages(source, geometry, false);
    assert.equal(shape.elements, undefined);
    const detailed = viewsOfPage(Uint8Array.from(await readFile(join(review, 'meshes.bin'))).buffer, annotated.pages[0]);
    const bare = viewsOfPage(Uint8Array.from(await readFile(join(geometry, 'meshes.bin'))).buffer, shape.pages[0]);
    assert.deepEqual([...detailed.tags], [0]);
    assert.deepEqual(detailed.position, bare.position);
    assert.deepEqual(detailed.index, bare.index);
  } finally {
    await Promise.all([source, join(review, 'elements.bin'), ...[review, geometry].flatMap((dir) => [
      join(dir, 'manifest.json'), join(dir, 'meshes.bin'),
    ])].map((file) => rm(file, { force: true })));
    for (const dir of [review, geometry]) await rmdir(dir).catch((error) => { if (error.code !== 'ENOENT') throw error; });
    await rmdir(folder);
  }
});
