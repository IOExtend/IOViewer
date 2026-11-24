import { closeSync, fstatSync, mkdirSync, openSync, readSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildMeshPagesFromSource } from './src/stream/meshBuilder.js';

export { focusBounds } from './src/stream/meshBuilder.js';

export async function buildMeshPages(source, destination, includeBim = true) {
  const input = openSync(source, 'r');
  let created = false;
  try {
    return await buildMeshPagesFromSource({
      length: fstatSync(input).size,
      read: (buffer, offset) => readSync(input, buffer, 0, buffer.length, offset),
    }, (name) => {
      if (!created) {
        mkdirSync(destination);
        created = true;
      }
      const file = openSync(join(destination, name), 'wx+');
      return {
        read: (buffer, offset) => readSync(file, buffer, 0, buffer.length, offset),
        write: (buffer) => writeFileSync(file, buffer),
        close: () => closeSync(file),
      };
    }, includeBim);
  } finally {
    closeSync(input);
  }
}
