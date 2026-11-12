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
  let carry = ''; // characters past the last whole group of 4
  for (const node of element.childNodes) {
    for (let start = 0; start < node.length; start += CHUNK_CHARS) {
      const text = carry + node.substringData(start, CHUNK_CHARS).trim();
      const whole = text.length - (text.length % 4);
      offset = decodeInto(bytes, offset, text.slice(0, whole));
      carry = text.slice(whole);
    }
  }
  return bytes.subarray(0, decodeInto(bytes, offset, carry)); // an unpadded tail, as atob accepts it
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

export function loadModelData(doc = document) {
  let meta, bin;
  try {
    meta = JSON.parse(block(doc, 'ioviewer-meta'));
    const binElement = doc.getElementById('ioviewer-bin');
    if (!binElement) throw new Error("Data block 'ioviewer-bin' is missing.");
    bin = decodeBase64(binElement);
  } catch (error) {
    throw new ModelDataError(error.message, { cause: error });
  }
  let props = null;
  return {
    meta,
    view(v) {
      if (!bin) throw new Error('The binary data has been released.');
      const Type = VIEW_TYPES[v.t];
      if (!Type) throw new ModelDataError(`Unknown view type '${v.t}'.`);
      const size = Type.BYTES_PER_ELEMENT;
      if (!(Number.isInteger(v.o) && Number.isInteger(v.n) && v.o >= 0 && v.n >= 0 && v.o % size === 0 && v.o + v.n * size <= bin.length)) {
        throw new ModelDataError(`View ${JSON.stringify(v)} is outside the ${bin.length} bytes of binary data.`);
      }
      return new Type(bin.buffer, v.o, v.n);
    },
    // Frees the decoded BIN once the scene holds its own copies; view() throws afterwards.
    releaseBinary() {
      bin = null;
    },
    props(elementId) {
      props ??= JSON.parse(block(doc, 'ioviewer-props'));
      return props[elementId] ?? null;
    },
  };
}
