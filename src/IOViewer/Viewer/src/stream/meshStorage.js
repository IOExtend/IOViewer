import { buildMeshPagesFromSource } from './meshBuilder.js';

const WINDOW_BYTES = 64 * 1024;

// Called in a dedicated worker. The caller owns the empty temporary output directory.
export async function buildLocalMeshPackage(file, directory, includeBim = true, onProgress) {
  const reader = new FileReaderSync();
  let windowStart = -1, bytes;
  const source = {
    length: file.size,
    read(target, offset) {
      if (offset >= file.size || target.length === 0) return 0;
      const start = Math.floor(offset / WINDOW_BYTES) * WINDOW_BYTES;
      if (start !== windowStart) {
        bytes = new Uint8Array(reader.readAsArrayBuffer(file.slice(start, start + WINDOW_BYTES)));
        windowStart = start;
      }
      const inside = offset - start;
      const part = bytes.subarray(inside, inside + target.length);
      target.set(part);
      return part.length;
    },
  };

  // OPFS acquisition is asynchronous. The mesh builder only uses synchronous reads and writes.
  const handles = new Map();
  try {
    for (const name of ['meshes.bin', 'shapes.bin', 'elements.bin', 'manifest.json']) {
      const file = await directory.getFileHandle(name, { create: true });
      const handle = await file.createSyncAccessHandle();
      handles.set(name, handle);
      if (handle.getSize() !== 0) throw new Error('Mesh output must be empty.');
    }
    return await buildMeshPagesFromSource(source, (name) => {
      const handle = handles.get(name);
      let end = 0;
      return {
        read: (target, offset) => handle.read(target, { at: offset }),
        write(data) {
          let written = 0;
          while (written < data.length) {
            const count = handle.write(data.subarray(written), { at: end + written });
            if (count <= 0) throw new Error('Could not write the local mesh package.');
            written += count;
          }
          end += written;
        },
        close() {
          handle.close();
          handles.delete(name);
        },
      };
    }, includeBim, onProgress);
  } finally {
    for (const handle of handles.values()) handle.close();
  }
}
