import { MIB } from './manifest.js';
import { validateReviewMeta } from '../data.js';

export const MESH_FORMAT = 'ioviewer-mesh-clusters-1';
export const PAGE_TRIANGLES = 8192;
export const ROOT_BYTES = 48 * MIB;
export const MESH_MANIFEST_BYTES = 64 * MIB;
export const align4 = (bytes) => (bytes + 3) & ~3;
export const pageBytes = (vertices, indices, pick = false, uv = false) => {
  const mesh = vertices * 22 + indices * 2;
  const end = pick ? align4(mesh) + (indices / 3) * 4 : mesh;
  return uv ? align4(end) + vertices * 8 : end;
};
export const sizeOfPage = ({ vertices, indices, pick, uv }) => pageBytes(vertices, indices, pick, uv);
export const MAX_PAGE_BYTES = pageBytes(PAGE_TRIANGLES * 3, PAGE_TRIANGLES * 3);
export const isPoint = (p) => Array.isArray(p) && p.length === 3 && p.every(Number.isFinite);
export const isBounds = (value) => isPoint(value?.min) && isPoint(value?.max) && value.min.every((v, i) => v <= value.max[i]);
const contains = (outer, inner) => inner.min.every((n, i) => n >= outer.min[i] && inner.max[i] <= outer.max[i]);
const count = (n) => Number.isSafeInteger(n) && n > 0;
export const MAX_ELEMENT_BYTES = 16 * MIB;
export const ELEMENT_FIELDS = ['name', 'category', 'type', 'level', 'sourceId'];

export function validateMeshPages(manifest) {
  if (manifest?.format !== MESH_FORMAT || !isBounds(manifest) || !isPoint(manifest.origin)
    || (manifest.focus !== undefined && (!isBounds(manifest.focus) || !contains(manifest, manifest.focus)))
    || (manifest.placements !== undefined && (!Array.isArray(manifest.placements) || !manifest.placements.length
      || !manifest.placements.every((placement) => isBounds(placement) && contains(manifest, placement))))
    || !Array.isArray(manifest.pages) || !manifest.pages.length || !Array.isArray(manifest.roots) || !manifest.roots.length
    || (manifest.elements !== undefined && !Array.isArray(manifest.elements))) {
    throw new Error('Invalid mesh cluster manifest.');
  }
  const parent = new Uint8Array(manifest.pages.length);
  if (manifest.review !== undefined) {
    if (!manifest.review || typeof manifest.review !== 'object' || Array.isArray(manifest.review)) throw new Error('Invalid mesh review.');
    validateReviewMeta({ ...manifest.review, elements: manifest.elements ?? [] });
    if (manifest.review.textures?.some(({ mime, data, sx, sy }) => !/^image\/(?:png|jpeg|webp|gif|bmp|avif)$/.test(mime)
      || typeof data !== 'string' || !Number.isFinite(sx) || !Number.isFinite(sy))) throw new Error('Invalid review texture.');
  }
  let length = 0, triangles = 0;
  for (const [id, page] of manifest.pages.entries()) {
    if (!page || !isBounds(page) || !count(page.vertices) || !count(page.indices) || page.indices > PAGE_TRIANGLES * 3
      || page.vertices > page.indices || page.indices % 3 || !Number.isSafeInteger(page.opaque)
      || page.opaque < 0 || page.opaque > page.indices || page.opaque % 3 || !Number.isFinite(page.error) || page.error < 0
      || page.offset !== length || !Array.isArray(page.children) || page.children.length > 4
      || (page.shift !== undefined && !isPoint(page.shift)) || (page.pick !== undefined && typeof page.pick !== 'boolean')
      || (page.pick && (!manifest.elements?.length || page.children.length))
      || (page.uv !== undefined && typeof page.uv !== 'boolean')
      || (page.members !== undefined && (!page.pick || !Array.isArray(page.members) || !page.members.length
        || page.members.some((member, i) => !Number.isInteger(member) || member < 0 || member >= manifest.elements.length
          || (i > 0 && member <= page.members[i - 1]))))
      || (page.children.length === 0 && page.error !== 0)) throw new Error(`Invalid mesh cluster page ${id}.`);
    if (page.groups !== undefined) {
      let at = 0;
      if (page.children.length || !Array.isArray(page.groups) || !page.groups.length || page.groups.some((group) => {
        if (!group || !count(group.count) || group.count % 3 || (group.closed !== undefined && typeof group.closed !== 'boolean')
          || (group.texture !== undefined && (!page.uv || !Number.isInteger(group.texture) || group.texture < 0
            || group.texture >= (manifest.review?.textures?.length ?? 0)))) return true;
        const start = at;
        at += group.count;
        return start < page.opaque && at > page.opaque;
      }) || at !== page.indices) throw new Error(`Invalid mesh groups at page ${id}.`);
    }
    length += sizeOfPage(page);
    if (!page.children.length) triangles += page.indices / 3;
    for (const child of page.children) {
      if (!Number.isSafeInteger(child) || child < 0 || child >= id || parent[child] || manifest.pages[child].error > page.error) {
        throw new Error(`Invalid cluster hierarchy at page ${id}.`);
      }
      if (!contains(page, manifest.pages[child])) throw new Error(`A child exceeds the bounds of page ${id}.`);
      parent[child] = 1;
    }
  }
  let pinned = 0;
  for (const root of manifest.roots) {
    if (!Number.isSafeInteger(root) || root < 0 || root >= parent.length || parent[root]) throw new Error('Invalid mesh cluster root.');
    if (!contains(manifest, manifest.pages[root])) throw new Error('A root exceeds the scene bounds.');
    parent[root] = 1;
    pinned += sizeOfPage(manifest.pages[root]);
  }
  let propertyBytes = 0;
  for (const element of manifest.elements ?? []) {
    if (!isBounds(element) || typeof element.id !== 'string' || !/^-?\d+$/.test(element.id) || !Number.isSafeInteger(element.size)
      || element.size < 0 || element.size > MAX_ELEMENT_BYTES || element.offset !== propertyBytes
      || ELEMENT_FIELDS.some((field) => element[field] !== undefined && typeof element[field] !== 'string')) {
      throw new Error('Invalid mesh element record.');
    }
    propertyBytes += element.size;
  }
  if (!parent.every(Boolean) || !count(length) || length !== manifest.bytes || triangles !== manifest.triangles || pinned > ROOT_BYTES
    || (manifest.overview !== undefined && manifest.overview !== pinned) || propertyBytes !== (manifest.propertyBytes ?? 0)) {
    throw new Error('Invalid cluster coverage or byte totals.');
  }
  return manifest;
}

export function viewsOfPage(buffer, { vertices, indices, pick, uv }) {
  if (buffer.byteLength !== pageBytes(vertices, indices, pick, uv)) throw new Error('Truncated mesh page.');
  return {
    position: new Float32Array(buffer, 0, vertices * 3),
    normal: new Int16Array(buffer, vertices * 12, vertices * 3),
    color: new Uint8Array(buffer, vertices * 18, vertices * 4),
    index: new Uint16Array(buffer, vertices * 22, indices),
    tags: pick ? new Uint32Array(buffer, align4(vertices * 22 + indices * 2), indices / 3) : null,
    uv: uv ? new Float32Array(buffer, align4(pageBytes(vertices, indices, pick)), vertices * 2) : null,
  };
}
