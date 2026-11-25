import * as THREE from 'three';
import { formatCount, setupLanguage, t } from '../i18n.js';
import { NavigationControls } from '../nav/controls.js';
import { MAX_TILE_MESH, MESH_BUDGET, MIB, validateManifest } from './manifest.js';

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

try {
  const response = await fetch('/manifest.json');
  if (!response.ok) throw new Error(`Manifest: HTTP ${response.status}.`);
  const manifest = validateManifest(await response.json());
  const context = canvas.getContext('webgl2', { antialias: true });
  if (context) start(manifest, context);
  else show(t('noWebGL'));
} catch (error) {
  show(`${t('badData')}. ${error.message}`);
}

function start(manifest, context) {
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

  const asBox = ({ min, max }) => new THREE.Box3(new THREE.Vector3(...min), new THREE.Vector3(...max));
  const bounds = asBox(manifest);
  const origin = bounds.getCenter(new THREE.Vector3());
  bounds.translate(origin.clone().negate());
  const proxyGeometry = new THREE.BoxGeometry();
  const proxyMaterial = new THREE.MeshLambertMaterial({ color: 0x63788b });
  const tiles = manifest.tiles.map((tile) => {
    const box = asBox(tile).translate(origin.clone().negate());
    const proxy = new THREE.Mesh(proxyGeometry, proxyMaterial);
    box.getCenter(proxy.position);
    box.getSize(proxy.scale);
    world.add(proxy);
    return { tile, box, proxy, range: 2.5 * Math.max(proxy.scale.x, proxy.scale.y, proxy.scale.z) };
  });

  const ndc = new THREE.Vector2(), ray = new THREE.Raycaster();
  const testPoint = new THREE.Vector3(), closest = new THREE.Vector3();
  const matrix = new THREE.Matrix4(), frustum = new THREE.Frustum();
  let pointed = null;
  const controls = new NavigationControls(camera, canvas, { pick, visibleBox: () => bounds });
  // shortcut: navigation pivots on area bounds, use per-tile picking when element tools are added.
  function pick(x, y) {
    const rect = canvas.getBoundingClientRect();
    ndc.set(2 * (x - rect.left) / rect.width - 1, 1 - 2 * (y - rect.top) / rect.height);
    controls.camera.updateMatrixWorld();
    ray.setFromCamera(ndc, controls.camera);
    let distance = Infinity;
    pointed = null;
    for (const entry of tiles) {
      if (!ray.ray.intersectBox(entry.box, testPoint)) continue;
      const squared = testPoint.distanceToSquared(ray.ray.origin);
      if (squared >= distance) continue;
      distance = squared;
      closest.copy(testPoint);
      pointed = entry;
    }
    return pointed ? closest.clone() : null;
  }

  const resident = new Map(), failed = new Map(), visited = new Set();
  let wanted = [], pending = null, bytes = 0, peak = 0, requested = 0, cancelled = 0, evicted = 0;
  let frame = 0, lost = false, cameraDirty = true;
  let firstFrame;
  const ready = new Promise((resolve) => (firstFrame = resolve));
  const stats = () => ({
    tiles: tiles.length, requested, cancelled, evicted, visited: visited.size, resident: resident.size,
    readyTiles: [...resident].filter(([, entry]) => entry.next === entry.batches.length).map(([key]) => key.tile.file),
    wanted: wanted.map(({ tile }) => tile.file), pending: pending?.key.tile.file ?? null,
    bytes, reserved: pending ? MAX_TILE_MESH : 0, peak, budget: MESH_BUDGET,
    failures: [...failed].map(([key, error]) => ({ file: key.tile.file, error })),
    triangles: renderer.info.render.triangles,
  });
  window.__ioviewerStream = { controls, manifest, ready, stats, origin: origin.toArray() };

  function discard(key) {
    const item = resident.get(key);
    bytes -= item.bytes;
    resident.delete(key);
    world.remove(item.group);
    for (const mesh of item.group.children) mesh.geometry.dispose();
    for (const material of item.materials) material.dispose();
    key.proxy.visible = true;
    evicted++;
  }

  function load(key) {
    // Reserve the worst-case result before sending a job. The same reservation covers transfer and upload.
    for (const old of resident.keys()) {
      if (bytes + MAX_TILE_MESH <= MESH_BUDGET) break;
      if (!wanted.includes(old)) discard(old);
    }
    if (bytes + MAX_TILE_MESH > MESH_BUDGET) return;
    const worker = new Worker('/tile-worker.js');
    pending = { key, worker };
    requested++;
    peak = Math.max(peak, bytes + MAX_TILE_MESH);
    const complete = (result) => {
      if (pending?.worker !== worker) return;
      worker.terminate();
      pending = null;
      if (result.error) failed.set(key, result.error);
      else {
        const group = new THREE.Group();
        group.position.fromArray(key.tile.rtcOffset).sub(origin);
        world.add(group);
        const materials = result.materials.map(({ color, opacity }) => new THREE.MeshLambertMaterial({
          color: new THREE.Color().setRGB(...color, THREE.SRGBColorSpace), opacity, transparent: opacity < 1,
        }));
        resident.set(key, { ...result, materials, group, next: 0 });
        bytes += result.bytes;
      }
      requestFrame();
    };
    worker.onmessage = ({ data }) => complete(data);
    worker.onerror = ({ message: error }) => complete({ error: error || 'Tile worker failed.' });
    worker.postMessage(key.tile);
  }

  function updateWanted() {
    const cam = controls.camera;
    cam.updateMatrixWorld();
    frustum.setFromProjectionMatrix(matrix.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse));
    wanted = tiles.filter((entry) => entry.box.distanceToPoint(cam.position) <= entry.range
      && frustum.intersectsBox(entry.box))
      .sort((a, b) => a.box.distanceToPoint(controls.target) - b.box.distanceToPoint(controls.target)
        || a.box.distanceToPoint(cam.position) - b.box.distanceToPoint(cam.position)).slice(0, 2);
    // A pan can leave a requested tile behind. Keep cache entries available for a return trip.
    if (pending && !wanted.includes(pending.key)) {
      pending.worker.terminate();
      pending = null;
      cancelled++;
    }
    for (const [key, item] of resident) {
      item.group.visible = wanted.includes(key);
      key.proxy.visible = !item.group.visible || item.next === 0;
    }
  }

  function requestFrame() {
    if (!frame && !lost) frame = requestAnimationFrame(render);
  }

  function render() {
    frame = 0;
    if (cameraDirty) {
      cameraDirty = false;
      updateWanted();
    }
    const uploaded = [];
    for (const key of wanted) {
      const item = resident.get(key);
      if (!item) continue;
      // Limit per-frame GPU uploads to two spatial batches (normally under 4 MiB together).
      while (item.next < item.batches.length && uploaded.length < 2) {
        const batch = item.batches[item.next];
        const geometry = new THREE.BufferGeometry();
        const attr = (array, size, normalized = false) => new THREE.BufferAttribute(array, size, normalized)
          .onUpload(function () { this.array = null; });
        geometry.setAttribute('position', attr(batch.position, 3));
        geometry.setAttribute('normal', attr(batch.normal, 3, true));
        geometry.setIndex(attr(batch.index, 1));
        geometry.boundingSphere = asBox(batch).getBoundingSphere(new THREE.Sphere());
        const mesh = new THREE.Mesh(geometry, item.materials[batch.material]);
        // Upload this batch now, even if out of the frustum; later camera changes cannot upload a whole tile at once.
        mesh.frustumCulled = false;
        item.group.visible = true;
        item.group.add(mesh);
        uploaded.push(mesh);
        item.batches[item.next++] = null;
        key.proxy.visible = false;
      }
      if (item.next === item.batches.length) visited.add(key);
    }
    renderer.render(world, controls.camera);
    for (const mesh of uploaded) mesh.frustumCulled = true;
    firstFrame(performance.now());
    if (!pending) {
      const next = wanted.find((key) => !resident.has(key) && !failed.has(key));
      if (next) load(next);
    }
    if (uploaded.length) requestFrame();
    const shown = wanted.filter((key) => resident.get(key)?.next > 0).length;
    status.textContent = t('streamTiles', undefined, {
      areas: formatCount(tiles.length), shown: formatCount(shown), total: formatCount(wanted.length),
      size: formatCount(Math.ceil(bytes / MIB)), limit: formatCount(MESH_BUDGET / MIB),
    });
    retry.hidden = failed.size === 0;
    if (failed.size) retry.title = [...failed].map(([key, error]) => `${key.tile.file}: ${error}`).join('\n');
  }

  controls.addEventListener('change', () => { cameraDirty = true; requestFrame(); });
  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    controls.resize();
  }
  window.addEventListener('resize', resize);
  fit.addEventListener('click', () => controls.fitBox(bounds));
  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyF' && !event.ctrlKey && !event.metaKey && !event.altKey && event.target === document.body) fit.click();
  });
  retry.addEventListener('click', () => { failed.clear(); requestFrame(); });
  canvas.addEventListener('pointerdown', () => document.activeElement?.blur(), true);
  canvas.addEventListener('dblclick', ({ clientX, clientY }) => {
    pick(clientX, clientY);
    if (pointed) controls.fitBox(pointed.box);
  });
  canvas.addEventListener('webglcontextlost', () => {
    lost = true;
    pending?.worker.terminate();
    pending = null;
    cancelAnimationFrame(frame);
    show(t('contextLost'));
  });
  resize();
  controls.fitBox(bounds, false);
}
