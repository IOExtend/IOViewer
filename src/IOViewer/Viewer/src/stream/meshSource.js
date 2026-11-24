import { MESH_MANIFEST_BYTES, sizeOfPage, validateMeshPages } from './meshPages.js';

export function fetchMeshResource(path, options) {
  const local = globalThis.IOVIEWER_MESH_SOURCE;
  return local ? local.fetch(path, options) : fetch(path, options);
}

// openFile returns a File or Blob from private storage. Page payloads stay in storage until requested.
export async function openMeshPackage(openFile) {
  const manifestFile = await openFile('manifest.json');
  if (manifestFile.size > MESH_MANIFEST_BYTES) throw new Error('Manifest exceeds its size limit.');
  const manifest = validateMeshPages(JSON.parse(await manifestFile.text()));
  const files = new Map();

  async function slice(name, length, offset, size, signal) {
    if (!files.has(name)) files.set(name, Promise.resolve().then(() => openFile(name)).catch((error) => {
      files.delete(name);
      throw error;
    }));
    const file = await files.get(name);
    signal?.throwIfAborted();
    if (file.size !== length || offset + size > file.size) throw new Error('Invalid mesh data file size.');
    return new Response(file.slice(offset, offset + size), { headers: { 'Content-Length': String(size) } });
  }

  return {
    async fetch(path, { signal } = {}) {
      signal?.throwIfAborted();
      if (path === '/manifest.json') return new Response(manifestFile);
      if (path === '/overview.bin' && manifest.overview)
        return slice('overview.bin', manifest.overview, 0, manifest.overview, signal);
      const match = /^\/(pages|shapes|elements)\/(0|[1-9]\d*)$/.exec(path);
      if (match) {
        const id = Number(match[2]);
        if (match[1] === 'pages' && manifest.pages[id]) {
          const page = manifest.pages[id];
          return slice('meshes.bin', manifest.bytes, page.offset, sizeOfPage(page), signal);
        }
        if (match[1] === 'shapes' && manifest.shapes?.[id]) {
          const shape = manifest.shapes[id];
          return slice('shapes.bin', manifest.shapeBytes, shape.offset, sizeOfPage(shape), signal);
        }
        if (match[1] === 'elements' && manifest.elements?.[id]?.size) {
          const element = manifest.elements[id];
          return slice('elements.bin', manifest.propertyBytes, element.offset, element.size, signal);
        }
      }
      return new Response(null, { status: 404 });
    },
  };
}
