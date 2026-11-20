import { build } from 'esbuild';
import { createReadStream } from 'node:fs';
import { readFile, realpath, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { MAX_MANIFEST, validateManifest } from './src/stream/manifest.js';
import { CLUSTER_FORMAT, detailInputBytes, INSTANCE_FLOATS, validateClusters } from './src/stream/clusters.js';
import { MESH_FORMAT, MESH_MANIFEST_BYTES, sizeOfPage, validateMeshPages } from './src/stream/meshPages.js';

const root = dirname(fileURLToPath(import.meta.url));

export async function startStreamServer(folder, port = 0) {
  const directory = await realpath(folder);
  const manifestPath = await localFile(directory, 'manifest.json');
  const manifestLimit = MESH_MANIFEST_BYTES;
  if ((await stat(manifestPath)).size > manifestLimit) throw new Error('Manifest exceeds its size limit.');
  const json = await readFile(manifestPath);
  if (json.length > manifestLimit) throw new Error('Manifest exceeds its size limit.');
  const manifest = JSON.parse(json);
  const clustered = manifest?.format === CLUSTER_FORMAT;
  const meshes = manifest?.format === MESH_FORMAT;
  const files = new Map();
  async function fileInfo(name, length) {
    const path = await localFile(directory, name);
    if ((await stat(path)).size !== length) throw new Error(`${name} differs from the manifest.`);
    return { name, length };
  }
  if (meshes) {
    validateMeshPages(manifest);
    const info = await fileInfo('meshes.bin', manifest.bytes);
    for (const [id, page] of manifest.pages.entries()) {
      files.set(`/pages/${id}`, { ...info, start: page.offset, size: sizeOfPage(page) });
    }
    if (manifest.shapes) {
      const shapes = await fileInfo('shapes.bin', manifest.shapeBytes);
      for (const [id, shape] of manifest.shapes.entries()) {
        files.set(`/shapes/${id}`, { ...shapes, start: shape.offset, size: sizeOfPage(shape) });
      }
    }
    if (manifest.overview) {
      files.set('/overview.bin', { ...await fileInfo('overview.bin', manifest.overview), start: 0, size: manifest.overview });
    }
    if (manifest.propertyBytes) {
      const properties = await fileInfo('elements.bin', manifest.propertyBytes);
      for (const [id, element] of manifest.elements.entries()) if (element.size) {
        files.set(`/elements/${id}`, { ...properties, start: element.offset, size: element.size });
      }
    }
  } else if (clustered) {
    if (json.length > 6 * MAX_MANIFEST) throw new Error('Manifest exceeds its size limit.');
    validateClusters(manifest);
    const coarse = await fileInfo('coarse.bin', manifest.elements * INSTANCE_FLOATS * 4);
    const detail = await fileInfo('detail.bin', manifest.detailBytes);
    files.set('/coarse.bin', { ...coarse, start: 0, size: coarse.length });
    for (const root of manifest.roots) for (const page of root.children) {
      files.set(`/pages/${page.id}`, { ...detail, start: page.offset, size: detailInputBytes(page.count) });
    }
  } else {
    if (json.length > MAX_MANIFEST) throw new Error('Manifest exceeds its size limit.');
    validateManifest(manifest);
    for (const tile of manifest.tiles) {
      files.set(`/tiles/${tile.file}`, { ...await fileInfo(tile.file, tile.bytes), start: 0, size: tile.bytes });
    }
  }

  const bundle = async (entry) => (await build({
    entryPoints: [join(root, 'src', 'stream', entry)], bundle: true, write: false, format: 'esm', minify: true, target: 'es2022',
  })).outputFiles[0].contents;
  const [html, css, viewer, worker] = await Promise.all([
    readFile(join(root, 'stream.html')), readFile(join(root, 'styles', 'viewer.css')),
    bundle(meshes ? 'meshLod.js' : clustered ? 'lod.js' : 'main.js'),
    meshes || clustered ? null : bundle('tileWorker.js'),
  ]);
  const assets = new Map([
    ['/', [html, 'text/html; charset=utf-8']], ['/manifest.json', [json, 'application/json']],
    ['/viewer.css', [css, 'text/css']], ['/stream.js', [viewer, 'text/javascript']],
  ]);
  if (worker) assets.set('/tile-worker.js', [worker, 'text/javascript']);
  const server = createServer(async (request, response) => {
    if (request.headers.host !== `127.0.0.1:${server.address().port}`) {
      response.writeHead(403).end();
      return;
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    const send = (body, length, type) => {
      response.writeHead(200, { 'Content-Type': type, 'Content-Length': length, 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
      if (request.method === 'HEAD' || body) response.end(request.method === 'HEAD' ? undefined : body);
    };
    const asset = assets.get(request.url);
    if (asset) {
      send(asset[0], asset[0].byteLength, asset[1]);
      return;
    }
    const tile = files.get(request.url);
    if (!tile) {
      response.writeHead(404).end();
      return;
    }
    try {
      const file = await localFile(directory, tile.name);
      if ((await stat(file)).size !== tile.length) throw new Error('Geometry file size changed.');
      send(null, tile.size, 'application/octet-stream');
      if (request.method === 'GET') await pipeline(createReadStream(file, { start: tile.start, end: tile.start + tile.size - 1 }), response);
    } catch (error) {
      // Panning away can close a response while the file is being read.
      if (!response.headersSent && !response.destroyed) response.writeHead(500).end();
      else if (!response.destroyed) response.destroy(error);
    }
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => { server.off('error', reject); resolve(); });
  });
  return { server, url: `http://127.0.0.1:${server.address().port}/` };
}

async function localFile(directory, name) {
  const path = join(directory, name);
  if (await realpath(path) !== path || !(await stat(path)).isFile()) throw new Error(`Expected a regular file: ${name}`);
  return path;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const folder = process.argv[2];
  if (!folder) {
    process.stderr.write('Usage: npm run stream -- <tile-directory> [port]\n');
    process.exitCode = 2;
  } else {
    try {
      const { url } = await startStreamServer(folder, process.argv[3] === undefined ? 8787 : Number(process.argv[3]));
      process.stdout.write(`IOViewer ${url}\n`);
    } catch (error) {
      process.stderr.write(`${error.message}\n`);
      process.exitCode = 1;
    }
  }
}
