import assert from 'node:assert/strict';
import { mkdtemp, rm, rmdir, writeFile } from 'node:fs/promises';
import { request } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { startStreamServer } from '../../serve-stream.js';
import { MAX_TILE_INPUT, validateManifest } from '../../src/stream/manifest.js';
import { prepareTile, readTile } from '../../src/stream/tile.js';

const tile = {
  file: 'tile-0001.html', x: 0, y: 0, bytes: 1, firstElementId: 1, elements: 1, triangles: 1,
  rtcOffset: [1, 2, 3], min: [0, 0, 0], max: [2, 4, 6],
};

test('stream manifest fixes file names, world bounds, per-tile size and aggregate totals', () => {
  const manifest = {
    format: 'ioviewer-synthetic-tiles-1', unit: 'metre', upAxis: 'Z', min: tile.min, max: tile.max,
    tiles: [tile], totalBytes: 1, elements: 1, triangles: 1,
  };
  assert.equal(validateManifest(manifest), manifest);
  for (const patch of [{ file: '../tile-0001.html' }, { bytes: MAX_TILE_INPUT + 1 }, { firstElementId: 2 }, { max: [3, 4, 6] }]) {
    assert.throws(() => validateManifest({ ...manifest, tiles: [{ ...tile, ...patch }] }), /Invalid or oversized tile/);
  }
  assert.throws(() => validateManifest({ ...manifest, totalBytes: 2 }), /Invalid tile manifest totals/);
});

function triangle({ badIndex = false } = {}) {
  const bytes = Buffer.alloc(88);
  new Uint16Array(bytes.buffer, 0, 9).set([0, 0, 0, 2, 0, 0, 0, 2, 0]);
  new Uint16Array(bytes.buffer, 20, 3).set([0, 1, badIndex ? 3 : 2]);
  new Float32Array(bytes.buffer, 40, 12).set([-1, 0, 0, 0, 1, 0, 0, 0, 1, 2, 3, 4]);
  const view = (o, n, t) => ({ o, n, t });
  const meta = {
    format: 3, rtcOffset: tile.rtcOffset, elements: [{ id: 1 }], materials: [{ color: [1, 0, 0], opacity: 1 }],
    geometries: [{ bbox: { min: [0, 0, 0], max: [1, 1, 0] }, positions: view(0, 9, 'u16'),
      q: { o: [0, 0, 0], s: 0.5 }, indices: view(20, 3, 'u16') }],
    instances: { count: 1, geometry: view(28, 1, 'u32'), material: view(32, 1, 'u32'), element: view(36, 1, 'i32'), matrix: view(40, 12, 'f32') },
  };
  const html = Buffer.from(`<script id="ioviewer-meta" type="application/json">${JSON.stringify(meta)}</script>
<script id="ioviewer-bin" type="application/octet-stream">${bytes.toString('base64')}</script>`);
  return [html, { ...tile, bytes: html.length }];
}

test('tile preparation preserves quantized positions, mirrored winding and derived normals', () => {
  const [html, entry] = triangle();
  const result = prepareTile(readTile(html, entry), entry);
  assert.equal(result.bytes, 60);
  assert.equal(result.batches.length, 1);
  const batch = result.batches[0];
  assert.deepEqual([...batch.position], [2, 3, 4, 1, 3, 4, 2, 4, 4]);
  assert.deepEqual([...batch.index], [0, 2, 1]);
  assert.deepEqual([...batch.normal], [0, 0, 32767, 0, 0, 32767, 0, 0, 32767]);
  assert.deepEqual(batch.min, [1, 3, 4]);
  assert.deepEqual(batch.max, [2, 4, 4]);
});

test('tile preparation rejects truncated files, stale manifests and invalid indices', () => {
  const [html, entry] = triangle({ badIndex: true });
  assert.throws(() => readTile(html.subarray(0, -1), entry), /Tile length changed/);
  assert.throws(() => readTile(html, { ...entry, rtcOffset: [0, 0, 0] }), /metadata differs/);
  assert.throws(() => prepareTile(readTile(html, entry), entry), /index is out of bounds/);
});

test('loopback server streams only declared tiles and reports a missing file', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'ioviewer-stream-test-'));
  const [html, entry] = triangle();
  const file = join(directory, entry.file), manifest = join(directory, 'manifest.json');
  const hidden = join(directory, 'other.html');
  let server;
  try {
    await Promise.all([
      writeFile(file, html), writeFile(hidden, html), writeFile(manifest, JSON.stringify({
        format: 'ioviewer-synthetic-tiles-1', unit: 'metre', upAxis: 'Z', min: tile.min, max: tile.max,
        tiles: [entry], totalBytes: html.length, elements: 1, triangles: 1,
      })),
    ]);
    const running = await startStreamServer(directory);
    server = running.server;
    const url = `${running.url}tiles/${entry.file}`;
    const response = await fetch(url);
    assert.equal(response.headers.get('content-type'), 'application/octet-stream');
    assert.deepEqual(Buffer.from(await response.arrayBuffer()), html);
    assert.equal((await fetch(`${running.url}tiles/other.html`)).status, 404);
    const denied = await new Promise((resolve, reject) => {
      request(url, { method: 'HEAD', headers: { Host: 'example.com' } }, (response) => {
        response.resume();
        resolve(response.statusCode);
      }).on('error', reject).end();
    });
    assert.equal(denied, 403);
    await rm(file);
    assert.equal((await fetch(url)).status, 500);
  } finally {
    if (server) await new Promise((resolve) => server.close(resolve));
    await Promise.all([file, manifest, hidden].map((p) => rm(p, { force: true })));
    await rmdir(directory);
  }
});
