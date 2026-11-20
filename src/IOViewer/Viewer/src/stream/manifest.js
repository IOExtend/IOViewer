export const MIB = 1024 ** 2;
export const MAX_TILE_INPUT = 96 * MIB;
export const MAX_TILE_MESH = 128 * MIB;
export const MESH_BUDGET = 2 * MAX_TILE_MESH;
export const MAX_MANIFEST = 2 * MIB;

const point = (value) => Array.isArray(value) && value.length === 3 && value.every(Number.isFinite);
const box = (value) => point(value?.min) && point(value?.max) && value.min.every((n, i) => n <= value.max[i]);
const count = (value) => Number.isSafeInteger(value) && value > 0;

export function validateManifest(manifest) {
  if (manifest?.format !== 'ioviewer-synthetic-tiles-1' || manifest.upAxis !== 'Z' || manifest.unit !== 'metre'
    || !box(manifest) || !Array.isArray(manifest.tiles) || !manifest.tiles.length) throw new Error('Invalid tile manifest.');
  const names = new Set();
  let bytes = 0, elements = 0, triangles = 0;
  for (const tile of manifest.tiles) {
    if (typeof tile?.file !== 'string' || !/^tile-\d+\.html$/.test(tile.file) || names.has(tile.file)
      || !Number.isSafeInteger(tile.x) || !Number.isSafeInteger(tile.y) || tile.x < 0 || tile.y < 0
      || !count(tile.bytes) || tile.bytes > MAX_TILE_INPUT || !count(tile.elements) || !count(tile.triangles)
      || tile.firstElementId !== elements + 1 || !box(tile) || !point(tile.rtcOffset)
      || tile.min.some((n, i) => n < manifest.min[i] || tile.max[i] > manifest.max[i])) {
      throw new Error('Invalid or oversized tile in manifest.');
    }
    names.add(tile.file);
    bytes += tile.bytes;
    elements += tile.elements;
    triangles += tile.triangles;
  }
  if (![bytes, elements, triangles].every(count) || bytes !== manifest.totalBytes || elements !== manifest.elements
    || triangles !== manifest.triangles) throw new Error('Invalid tile manifest totals.');
  return manifest;
}
