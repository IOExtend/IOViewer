import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadModelData } from '../../src/data.js';

// BIN layout: f32[3] at 0 (12 bytes), u16[3] at 12 (6 bytes + 2 padding to the next 4-byte boundary).
function fakeDocument(propsJson) {
  const bytes = new Uint8Array(20);
  const view = new DataView(bytes.buffer);
  [1.5, -2, 3.25].forEach((v, i) => view.setFloat32(i * 4, v, true));
  [7, 65535, 0].forEach((v, i) => view.setUint16(12 + i * 2, v, true));
  const meta = {
    format: 2,
    title: 'Fake',
    positions: { o: 0, n: 3, t: 'f32' },
    indices: { o: 12, n: 3, t: 'u16' },
  };
  const propsReads = { count: 0 };
  const blocks = {
    'ioviewer-meta': { textContent: JSON.stringify(meta) },
    'ioviewer-bin': { textContent: Buffer.from(bytes).toString('base64') },
    'ioviewer-props': {
      get textContent() {
        propsReads.count++;
        return propsJson;
      },
    },
  };
  return { doc: { getElementById: (id) => blocks[id] ?? null }, propsReads };
}

test('decodes META and typed views from BIN', () => {
  const { doc } = fakeDocument('{}');
  const data = loadModelData(doc);

  assert.equal(data.meta.title, 'Fake');
  const positions = data.view(data.meta.positions);
  assert.ok(positions instanceof Float32Array);
  assert.deepEqual([...positions], [1.5, -2, 3.25]);
  const indices = data.view(data.meta.indices);
  assert.ok(indices instanceof Uint16Array);
  assert.deepEqual([...indices], [7, 65535, 0]);
});

test('decodes i32 and u32 views', () => {
  const bytes = new Uint8Array(8);
  new DataView(bytes.buffer).setInt32(0, -1, true);
  new DataView(bytes.buffer).setUint32(4, 4000000000, true);
  const blocks = {
    'ioviewer-meta': { textContent: '{}' },
    'ioviewer-bin': { textContent: Buffer.from(bytes).toString('base64') },
    'ioviewer-props': { textContent: '{}' },
  };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  assert.deepEqual([...data.view({ o: 0, n: 1, t: 'i32' })], [-1]);
  assert.deepEqual([...data.view({ o: 4, n: 1, t: 'u32' })], [4000000000]);
});

test('decodes BIN larger than one 4 MB chunk', () => {
  // 3 MiB + 8 bytes: base64 text is just over 4 MiB and ends with '=' padding.
  const bytes = new Uint8Array(3 * 1024 * 1024 + 8);
  for (let i = 0; i < bytes.length; i++) bytes[i] = (i * 31 + (i >> 8)) & 0xff;
  const blocks = {
    'ioviewer-meta': { textContent: '{}' },
    'ioviewer-bin': { textContent: Buffer.from(bytes).toString('base64') },
    'ioviewer-props': { textContent: '{}' },
  };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  const decoded = data.view({ o: 0, n: bytes.length / 4, t: 'u32' });
  assert.deepEqual(decoded, new Uint32Array(bytes.buffer));
});

test('parses PROPS only on the first props() call', () => {
  const { doc, propsReads } = fakeDocument('{"42": {"Dimensions": {"Width": "200 mm"}}}');
  const data = loadModelData(doc);
  assert.equal(propsReads.count, 0);

  assert.deepEqual(data.props(42), { Dimensions: { Width: '200 mm' } });
  assert.equal(data.props(43), null);
  assert.equal(propsReads.count, 1);
});

test('empty BIN gives empty views', () => {
  const blocks = {
    'ioviewer-meta': { textContent: '{"format":2}' },
    'ioviewer-bin': { textContent: '' },
    'ioviewer-props': { textContent: '{}' },
  };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  assert.equal(data.view({ o: 0, n: 0, t: 'u32' }).length, 0);
});
