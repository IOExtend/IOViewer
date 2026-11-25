import * as THREE from 'three';
import { formatCount, setupLanguage, t } from '../i18n.js';
import { NavigationControls } from '../nav/controls.js';
import { MESH_BUDGET, MIB } from './manifest.js';
import { detailInputBytes, detailMeshBytes, FACES, INSTANCE_FLOATS, STEP, VERTICES, validateClusters } from './clusters.js';
import { chooseLevel, clusterMaterial, makeTemplates } from './lodShapes.js';

const canvas = document.querySelector('canvas');
const status = document.querySelector('#ioviewer-status');
const message = document.querySelector('#ioviewer-message');
const fit = document.querySelector('#fit');
const retry = document.querySelector('#retry');
setupLanguage();
fit.textContent = t('tool.fit');
retry.textContent = t('retry');

function show(text) {
  message.textContent = text;
  message.hidden = false;
}

async function loadBytes(url, expected) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok || Number(response.headers.get('content-length')) !== expected) throw new Error(`Invalid geometry response ${url} (${response.status}).`);
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength !== expected) throw new Error(`Truncated geometry response ${url}.`);
  return buffer;
}

try {
  const response = await fetch('/manifest.json');
  if (!response.ok) throw new Error(`Manifest: HTTP ${response.status}.`);
  const manifest = validateClusters(await response.json());
  const expected = manifest.elements * INSTANCE_FLOATS * 4;
  if (3 * expected >= MESH_BUDGET) throw new Error('The resident LOD exceeds the memory budget.');
  const context = canvas.getContext('webgl2', { antialias: true });
  if (context) start(manifest, new Float32Array(await loadBytes('/coarse.bin', expected)), context);
  else show(t('noWebGL'));
} catch (error) {
  show(`${t('badData')}. ${error.message}`);
}

function start(manifest, instances, context) {
  const renderer = new THREE.WebGLRenderer({ canvas, context, antialias: true, logarithmicDepthBuffer: true });
  renderer.setClearColor(0x1f2228);
  renderer.setPixelRatio(window.devicePixelRatio);
  const world = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.up.set(0, 0, 1);
  camera.position.set(1, -1, 0.8);
  const sun = new THREE.DirectionalLight(0xfff6e9, 1.6);
  sun.position.set(2, -3, 5);
  world.add(sun, new THREE.HemisphereLight(0xffffff, 0x8897a8, 1.35));

  const origin = new THREE.Vector3(...manifest.origin);
  const local = ({ min, max }) => new THREE.Box3(new THREE.Vector3(...min).sub(origin), new THREE.Vector3(...max).sub(origin));
  const bounds = local(manifest);
  const palette = manifest.palette.map((rgb) => new THREE.Color().setRGB(...rgb, THREE.SRGBColorSpace));
  const focal = { value: 1 };
  const templates = makeTemplates();
  const levels = templates.map((_, level) => clusterMaterial({ palette, focal, level }));
  const fineMaterials = palette.map((color) => clusterMaterial({ color }));
  const roots = manifest.roots.map((root) => ({ ...root, box: local(root),
    children: root.children.map((node) => ({ ...node, box: local(node), level: 0 })) }));
  const fullIndices = new Uint16Array(64 * FACES.length);
  for (let i = 0; i < 64; i++) for (let k = 0; k < FACES.length; k++) fullIndices[i * FACES.length + k] = FACES[k] + i * VERTICES;

  function approximate(node, level) {
    if (!node.mesh) {
      const g = new THREE.InstancedBufferGeometry();
      const view = instances.subarray(node.first * INSTANCE_FLOATS, (node.first + node.count) * INSTANCE_FLOATS);
      const buffer = new THREE.InstancedInterleavedBuffer(view, INSTANCE_FLOATS);
      g.setAttribute('shift', new THREE.InterleavedBufferAttribute(buffer, 3, 0));
      g.setAttribute('extent', new THREE.InterleavedBufferAttribute(buffer, 3, 3));
      g.setAttribute('styleIndex', new THREE.InterleavedBufferAttribute(buffer, 1, 6));
      g.instanceCount = node.count;
      g.boundingSphere = node.box.getBoundingSphere(new THREE.Sphere());
      node.mesh = new THREE.Mesh(g, levels[level]);
    }
    if (node.drawLevel !== level) {
      const { geometry } = node.mesh;
      for (const [name, attribute] of Object.entries(templates[level].attributes)) geometry.setAttribute(name, attribute);
      geometry.setIndex(templates[level].index);
      node.drawLevel = level;
    }
    node.mesh.material = levels[level];
    return node.mesh;
  }

  const ndc = new THREE.Vector2(), ray = new THREE.Raycaster();
  const point = new THREE.Vector3(), closest = new THREE.Vector3();
  const frustum = new THREE.Frustum(), matrix = new THREE.Matrix4();
  let pointed = null;
  const controls = new NavigationControls(camera, canvas, { pick, visibleBox: () => bounds });
  function pick(x, y) {
    const rect = canvas.getBoundingClientRect();
    ndc.set(2 * (x - rect.left) / rect.width - 1, 1 - 2 * (y - rect.top) / rect.height);
    camera.updateMatrixWorld();
    ray.setFromCamera(ndc, camera);
    let best = Infinity;
    pointed = null;
    for (const root of roots) {
      if (!ray.ray.intersectBox(root.box, point)) continue;
      const distance = point.distanceToSquared(ray.ray.origin);
      if (distance < best) { best = distance; closest.copy(point); pointed = root; }
    }
    return pointed ? closest.clone() : null;
  }

  const resident = new Map(), pending = new Map(), failed = new Map(), transferred = [];
  const pinned = 3 * instances.byteLength + fullIndices.byteLength;
  let bytes = pinned, peak = bytes, frame = 0, lost = false, requests = 0, evictions = 0, downloaded = 0;
  let drawn = new Set(), candidates = [], shown = [0, 0, 0, 0], renderedObjects = 0;
  let resolveReady;
  const ready = new Promise((resolve) => (resolveReady = resolve));
  window.__ioviewerLod = {
    controls, manifest, ready,
    stats: () => ({ bytes, pinned, peak, budget: MESH_BUDGET, requests, evictions, downloaded, pages: resident.size,
      pending: pending.size, detailDemand: candidates.length, shown: [...shown], renderedObjects, failures: [...failed.values()],
      triangles: renderer.info.render.triangles, draws: renderer.info.render.calls }),
  };

  function requestFrame() {
    if (!frame && !lost) frame = requestAnimationFrame(render);
  }

  function stopFade(item) {
    if (!item.fade) return;
    for (const material of item.fade.fine) material.dispose();
    item.fade.coarse.dispose();
    item.mesh.material = fineMaterials;
    item.fade = null;
  }

  function nextDownloads() {
    const chosen = new Set(candidates.map(({ node }) => node));
    for (const { node } of candidates) {
      if (pending.size >= 4) break;
      if (resident.has(node) || pending.has(node) || failed.has(node)) continue;
      const required = detailMeshBytes(node.count);
      for (const [old, item] of resident) {
        if (bytes + required <= MESH_BUDGET) break;
        if (chosen.has(old) || drawn.has(item.mesh)) continue;
        stopFade(item);
        world.remove(item.mesh);
        item.mesh.geometry.dispose();
        resident.delete(old);
        bytes -= detailMeshBytes(old.count);
        evictions++;
      }
      if (bytes + required > MESH_BUDGET) break;
      bytes += required;
      peak = Math.max(peak, bytes);
      requests++;
      pending.set(node, required);
      loadBytes(`/pages/${node.id}`, detailInputBytes(node.count)).then((data) => {
        downloaded += data.byteLength;
        transferred.push({ node, data });
        requestFrame();
      }, (error) => {
        pending.delete(node);
        bytes -= required;
        failed.set(node, error.message);
        requestFrame();
      });
    }
  }

  function stage({ node, data }) {
    const length = node.count * VERTICES * 3;
    const size = Uint16Array.BYTES_PER_ELEMENT * length;
    const geometry = new THREE.BufferGeometry();
    const attribute = (array, itemSize, normalized = false) => new THREE.BufferAttribute(array, itemSize, normalized)
      .onUpload(function () { this.array = null; });
    geometry.setAttribute('position', attribute(new Uint16Array(data, 0, length), 3));
    geometry.setAttribute('normal', attribute(new Int16Array(data, size, length), 3, true));
    geometry.setIndex(attribute(fullIndices.slice(0, node.count * FACES.length), 1));
    let start = 0;
    for (const [index, count] of node.counts.entries()) {
      if (count) geometry.addGroup(start, count * FACES.length, index);
      start += count * FACES.length;
    }
    geometry.boundingSphere = node.box.clone().expandByScalar(STEP).translate(new THREE.Vector3(...node.anchor).negate())
      .getBoundingSphere(new THREE.Sphere());
    geometry.boundingSphere.center.divideScalar(STEP);
    geometry.boundingSphere.radius /= STEP;
    const mesh = new THREE.Mesh(geometry, fineMaterials);
    mesh.scale.setScalar(STEP);
    mesh.position.fromArray(node.anchor);
    resident.set(node, { mesh, seen: false, fade: null });
    pending.delete(node);
  }

  function render(now) {
    frame = 0;
    camera.updateMatrixWorld();
    frustum.setFromProjectionMatrix(matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    // Each queued page is at most 408 KiB of compressed coordinates and normals before building its index.
    for (const page of transferred.splice(0, 2)) stage(page);
    candidates = [];
    shown = [0, 0, 0, 0];
    renderedObjects = 0;
    const active = new Set();
    let animating = false, uploads = 0;
    const pixels = (node) => focal.value / Math.max(0.01, node.box.distanceToPoint(camera.position));
    const draw = (node, level) => {
      shown[level]++;
      renderedObjects += node.count;
    };
    for (const root of roots) {
      if (!frustum.intersectsBox(root.box)) continue;
      root.split = chooseLevel(pixels(root), root.split ? 1 : 0) > 0;
      if (!root.split) {
        active.add(approximate(root, 0));
        draw(root, 0);
        continue;
      }
      for (const node of root.children) {
        if (!frustum.intersectsBox(node.box)) continue;
        const scale = pixels(node);
        node.level = chooseLevel(scale, node.level);
        const level = Math.min(node.level, 2);
        if (node.level === 3) candidates.push({ node, scale });
        const item = node.level === 3 ? resident.get(node) : null;
        if (!item || (!item.seen && uploads >= 2)) {
          active.add(approximate(node, level));
          draw(node, level);
          if (item) animating = true;
          continue;
        }
        active.add(item.mesh);
        draw(node, 3);
        if (!item.seen) {
          uploads++;
          const fade = { value: 0 };
          item.fade = { value: fade, start: now,
            coarse: clusterMaterial({ palette, focal, level: 2, fade, inverse: true }),
            fine: palette.map((color) => clusterMaterial({ color, fade })) };
          item.mesh.material = item.fade.fine;
          item.seen = true;
        }
        if (item.fade && now - item.fade.start < 140) {
          item.fade.value.value = (now - item.fade.start) / 140;
          const lower = approximate(node, 2);
          lower.material = item.fade.coarse;
          active.add(lower);
          animating = true;
        } else stopFade(item);
      }
    }
    for (const item of resident.values()) if (item.fade && !active.has(item.mesh)) stopFade(item);
    for (const mesh of drawn) if (!active.has(mesh)) world.remove(mesh);
    for (const mesh of active) if (!drawn.has(mesh)) world.add(mesh);
    drawn = active;
    candidates.sort((a, b) => b.scale - a.scale);
    candidates = candidates.slice(0, Math.floor((MESH_BUDGET - pinned) / detailMeshBytes(64)));
    nextDownloads();
    renderer.render(world, camera);
    resolveReady(performance.now());
    if (animating || transferred.length) requestFrame();
    status.textContent = t('streamLod', undefined, {
      size: formatCount(Math.ceil(bytes / MIB)), shown: formatCount(shown[3]), total: formatCount(candidates.length),
    });
    retry.hidden = failed.size === 0;
    if (failed.size) retry.title = [...failed.values()].join('\n');
  }

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    focal.value = canvas.clientHeight * renderer.getPixelRatio() / (2 * Math.tan(camera.fov * Math.PI / 360));
    controls.resize();
  }
  controls.addEventListener('change', requestFrame);
  window.addEventListener('resize', resize);
  fit.addEventListener('click', () => controls.fitBox(bounds));
  retry.addEventListener('click', () => { failed.clear(); requestFrame(); });
  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyF' && !event.ctrlKey && !event.metaKey && !event.altKey && event.target === document.body) fit.click();
  });
  canvas.addEventListener('pointerdown', () => document.activeElement?.blur(), true);
  canvas.addEventListener('dblclick', ({ clientX, clientY }) => {
    pick(clientX, clientY);
    if (pointed) controls.fitBox(pointed.box);
  });
  canvas.addEventListener('webglcontextlost', () => {
    lost = true;
    cancelAnimationFrame(frame);
    show(t('contextLost'));
  });
  resize();
  controls.fitBox(bounds, false);
}
