// Reads the data blocks of an exported page (format 2): META and PROPS as JSON, BIN as one base64 blob.

const VIEW_TYPES = { f32: Float32Array, u16: Uint16Array, u32: Uint32Array, i32: Int32Array };
const CHUNK_CHARS = 4 * 1024 * 1024; // multiple of 4, so every chunk decodes on its own

function block(doc, id) {
  const element = doc.getElementById(id);
  if (!element) throw new Error(`Data block '${id}' is missing.`);
  return element.textContent;
}

function decodeBase64(text) {
  const padding = text.endsWith('==') ? 2 : text.endsWith('=') ? 1 : 0;
  const bytes = new Uint8Array((text.length / 4) * 3 - padding);
  let offset = 0;
  for (let start = 0; start < text.length; start += CHUNK_CHARS) {
    const binary = atob(text.slice(start, start + CHUNK_CHARS));
    for (let i = 0; i < binary.length; i++) bytes[offset++] = binary.charCodeAt(i);
  }
  return bytes;
}

export function loadModelData(doc = document) {
  const meta = JSON.parse(block(doc, 'ioviewer-meta'));
  const bin = decodeBase64(block(doc, 'ioviewer-bin').trim());
  let props = null;
  return {
    meta,
    view(v) {
      const Type = VIEW_TYPES[v.t];
      if (!Type) throw new Error(`Unknown view type '${v.t}'.`);
      return new Type(bin.buffer, v.o, v.n);
    },
    props(elementId) {
      props ??= JSON.parse(block(doc, 'ioviewer-props'));
      return props[elementId] ?? null;
    },
  };
}
