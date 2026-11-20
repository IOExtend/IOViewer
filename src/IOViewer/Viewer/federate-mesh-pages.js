import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, open, readFile, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { MESH_FORMAT, sizeOfPage, validateMeshPages } from './src/stream/meshPages.js';

const [destination, targetText, ...folders] = process.argv.slice(2);
const target = Number(targetText);
if (!destination || !Number.isSafeInteger(target) || target <= 0 || folders.length < 2) {
  throw new Error('Usage: node federate-mesh-pages.js <new-folder> <minimum-bytes> <geometry-package> <geometry-package> ...');
}
const sources = await Promise.all(folders.map(async (folder) => {
  const manifest = validateMeshPages(JSON.parse(await readFile(join(folder, 'manifest.json'))));
  const file = join(folder, 'meshes.bin');
  const shapesFile = manifest.shapes ? join(folder, 'shapes.bin') : null;
  // shortcut: benchmark placements carry geometry only, add namespaced element IDs if federated BIM review is needed.
  if ((await stat(file)).size !== manifest.bytes || (shapesFile && (await stat(shapesFile)).size !== manifest.shapeBytes)
    || manifest.elements || manifest.pages.some((page) => page.shift)) {
    throw new Error('Expected a geometry-only package made directly from an input model.');
  }
  return { manifest, file, shapesFile };
}));
const shapes = [];
let shapeBytes = 0;
for (const source of sources) {
  source.firstShape = shapes.length;
  for (const shape of source.manifest.shapes ?? []) shapes.push({ ...shape, offset: shape.offset + shapeBytes });
  shapeBytes += source.manifest.shapeBytes ?? 0;
}
const plan = [];
for (let bytes = 0; bytes < target;) {
  const source = sources[plan.length % sources.length];
  plan.push(source);
  bytes += source.manifest.bytes;
}
const columns = Math.ceil(Math.sqrt(plan.length));
const pitch = [0, 1].map((axis) => 20 + Math.max(...sources.map(({ manifest }) => manifest.max[axis] - manifest.min[axis])));
const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
const pages = [], roots = [], placements = [];
let bytes = 0, overview = 0, triangles = 0;
for (const [i, { manifest, firstShape }] of plan.entries()) {
  const shift = [i % columns * pitch[0] - manifest.min[0], Math.floor(i / columns) * pitch[1] - manifest.min[1], -manifest.min[2]];
  const point = (p) => p.map((n, axis) => n + shift[axis]);
  const transformed = (bounds) => ({ min: point(bounds.min), max: point(bounds.max) });
  const first = pages.length;
  for (const page of manifest.pages) pages.push({ ...page, ...transformed(page), shift,
    ...(page.shape === undefined ? {} : { shape: firstShape + page.shape }),
    offset: bytes + page.offset, children: page.children.map((id) => first + id) });
  for (const id of manifest.roots) {
    roots.push(first + id);
    overview += sizeOfPage(manifest.pages[id]);
  }
  placements.push(transformed(manifest.focus ?? manifest));
  const bounds = transformed(manifest);
  for (let axis = 0; axis < 3; axis++) {
    min[axis] = Math.min(min[axis], bounds.min[axis]);
    max[axis] = Math.max(max[axis], bounds.max[axis]);
  }
  bytes += manifest.bytes;
  triangles += manifest.triangles;
}
const manifest = validateMeshPages({ format: MESH_FORMAT, origin: [0, 0, 0], min, max, pages, roots, placements, bytes, triangles,
  ...(shapes.length ? { shapes, shapeBytes } : { overview }) });
await mkdir(destination);
const packed = join(destination, 'meshes.bin');
await (await open(packed, 'wx')).close();
for (const [i, { file }] of plan.entries()) {
  await pipeline(createReadStream(file), createWriteStream(packed, { flags: 'a' }));
  console.log(`Copied ${i + 1}/${plan.length} placements`);
}
if ((await stat(join(destination, 'meshes.bin'))).size !== bytes) throw new Error('Incomplete federation archive.');
if (shapes.length) {
  const packedShapes = join(destination, 'shapes.bin');
  await (await open(packedShapes, 'wx')).close();
  for (const { shapesFile } of sources) if (shapesFile) {
    await pipeline(createReadStream(shapesFile), createWriteStream(packedShapes, { flags: 'a' }));
  }
  if ((await stat(packedShapes)).size !== shapeBytes) throw new Error('Incomplete federation shapes.');
} else {
  const rootFile = await open(join(destination, 'overview.bin'), 'wx');
  try {
    for (const { manifest: source, file } of plan) {
      const handle = await open(file, 'r');
      try {
        for (const id of source.roots) {
          const page = source.pages[id], length = sizeOfPage(page), buffer = Buffer.alloc(length);
          const { bytesRead } = await handle.read(buffer, 0, length, page.offset);
          if (bytesRead !== length) throw new Error('Truncated overview page.');
          await rootFile.writeFile(buffer);
        }
      } finally { await handle.close(); }
    }
  } finally { await rootFile.close(); }
}
await writeFile(join(destination, 'manifest.json'), JSON.stringify(manifest), { flag: 'wx' });
console.log(`${plan.length} placements, ${pages.length} pages, ${triangles} triangles, ${bytes} bytes`);
