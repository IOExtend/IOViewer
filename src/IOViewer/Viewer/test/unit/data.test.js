import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadModelData, ModelDataError } from '../../src/data.js';

// A data block as the DOM has it: its text in text nodes (`pieces` of it, one node each), read with substringData.
function textBlock(text, pieces = 1) {
  const size = Math.ceil(text.length / pieces);
  const childNodes = Array.from({ length: pieces }, (_, k) => {
    const data = text.slice(k * size, (k + 1) * size);
    return { length: data.length, substringData: (offset, count) => data.substr(offset, count) };
  });
  return { textContent: text, childNodes };
}

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
    'ioviewer-bin': textBlock(Buffer.from(bytes).toString('base64')),
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
    'ioviewer-bin': textBlock(Buffer.from(bytes).toString('base64')),
    'ioviewer-props': { textContent: '{}' },
  };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  assert.deepEqual([...data.view({ o: 0, n: 1, t: 'i32' })], [-1]);
  assert.deepEqual([...data.view({ o: 4, n: 1, t: 'u32' })], [4000000000]);
});

test('decodes i16 views (format 3 octahedral normals)', () => {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setInt16(0, -32767, true);
  new DataView(bytes.buffer).setInt16(2, 12345, true);
  const blocks = {
    'ioviewer-meta': { textContent: '{"format":3}' },
    'ioviewer-bin': textBlock(Buffer.from(bytes).toString('base64')),
    'ioviewer-props': { textContent: '{}' },
  };
  const view = loadModelData({ getElementById: (id) => blocks[id] }).view({ o: 0, n: 2, t: 'i16' });
  assert.ok(view instanceof Int16Array);
  assert.deepEqual([...view], [-32767, 12345]);
});

test('decodes BIN larger than one 4 MB chunk', () => {
  // 3 MiB + 8 bytes: base64 text is just over 4 MiB and ends with '=' padding.
  const bytes = new Uint8Array(3 * 1024 * 1024 + 8);
  for (let i = 0; i < bytes.length; i++) bytes[i] = (i * 31 + (i >> 8)) & 0xff;
  const blocks = {
    'ioviewer-meta': { textContent: '{}' },
    'ioviewer-bin': textBlock(Buffer.from(bytes).toString('base64')),
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
    'ioviewer-bin': textBlock(''),
    'ioviewer-props': { textContent: '{}' },
  };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  assert.equal(data.view({ o: 0, n: 0, t: 'u32' }).length, 0);
});

test('decodes BIN split over several text nodes at any character, with whitespace around it', () => {
  const bytes = Uint8Array.from({ length: 1000 }, (_, i) => (i * 7) & 0xff);
  const blocks = {
    'ioviewer-meta': { textContent: '{}' },
    'ioviewer-bin': textBlock(`
 ${Buffer.from(bytes).toString('base64')}
`, 7),
    'ioviewer-props': { textContent: '{}' },
  };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  assert.deepEqual(new Uint8Array(data.view({ o: 0, n: 250, t: 'u32' }).buffer, 0, 1000), bytes);
});

test('releaseBinary frees BIN: views throw afterwards, META and PROPS stay', () => {
  const { doc } = fakeDocument('{"42": {}}');
  const data = loadModelData(doc);
  data.releaseBinary();
  assert.throws(() => data.view(data.meta.positions), /released/);
  assert.equal(data.meta.title, 'Fake');
  assert.deepEqual(data.props(42), {});
});

test('BIN without its padding decodes as atob does', () => {
  const blocks = { 'ioviewer-meta': { textContent: '{}' }, 'ioviewer-bin': textBlock('QUJDRA'), 'ioviewer-props': { textContent: '{}' } };
  const data = loadModelData({ getElementById: (id) => blocks[id] });
  assert.deepEqual(new Uint8Array(data.view({ o: 0, n: 1, t: 'u32' }).buffer, 0, 4), new Uint8Array([65, 66, 67, 68]));
});

test('uses the native Uint8Array.setFromBase64 where there is one, with the same result', () => {
  const native = Object.getOwnPropertyDescriptor(Uint8Array.prototype, 'setFromBase64');
  let calls = 0;
  // A counting wrapper of the native one, or a stand-in with the standard's contract: decodes into this array and
  // returns { read, written }.
  Uint8Array.prototype.setFromBase64 = function (text) {
    calls++;
    if (native) return native.value.call(this, text);
    const decoded = Buffer.from(text, 'base64');
    this.set(decoded);
    return { read: text.length, written: decoded.length };
  };
  try {
    const bytes = Uint8Array.from({ length: 5 * 1024 * 1024 }, (_, i) => (i * 13) & 0xff);
    const blocks = {
      'ioviewer-meta': { textContent: '{}' },
      'ioviewer-bin': textBlock(Buffer.from(bytes).toString('base64'), 3),
      'ioviewer-props': { textContent: '{}' },
    };
    const data = loadModelData({ getElementById: (id) => blocks[id] });
    assert.ok(calls > 1);
    assert.deepEqual(new Uint8Array(data.view({ o: 0, n: bytes.length / 4, t: 'u32' }).buffer, 0, bytes.length), bytes);
  } finally {
    if (native) Object.defineProperty(Uint8Array.prototype, 'setFromBase64', native);
    else delete Uint8Array.prototype.setFromBase64;
  }
});

test('damaged data blocks throw ModelDataError: bad JSON, bad base64, a missing block', () => {
  const blocks = (meta, bin) => ({ getElementById: (id) => ({ 'ioviewer-meta': meta, 'ioviewer-bin': bin })[id] ?? null });
  assert.throws(() => loadModelData(blocks({ textContent: '{"format": 3,' }, textBlock(''))), ModelDataError);
  assert.throws(() => loadModelData(blocks({ textContent: '{}' }, textBlock('A*B$'))), ModelDataError);
  assert.throws(() => loadModelData(blocks({ textContent: '{}' }, undefined)), ModelDataError);
});

test('views outside BIN, misaligned or of an unknown type throw ModelDataError (a truncated file)', () => {
  const { doc } = fakeDocument('{}');
  const data = loadModelData(doc);
  assert.throws(() => data.view({ o: 12, n: 3, t: 'f32' }), ModelDataError); // 24 bytes, BIN has 20
  assert.throws(() => data.view({ o: 2, n: 1, t: 'f32' }), ModelDataError);
  assert.throws(() => data.view({ o: 0, n: -1, t: 'u16' }), ModelDataError);
  assert.throws(() => data.view({ o: 0, n: 1, t: 'f64' }), ModelDataError);
  assert.deepEqual([...data.view({ o: 16, n: 1, t: 'u32' })], [0]); // up to the last byte
});
