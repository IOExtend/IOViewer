import * as THREE from 'three';
import { lang, t } from '../i18n.js';
import { NavigationControls } from '../nav/controls.js';
import { ViewCube } from '../nav/viewCube.js';
import { el } from '../ui/dom.js';
import { MESH_BUDGET, MIB } from './manifest.js';
import { sizeOfPage, validateMeshPages, viewsOfPage } from './meshPages.js';
import { mountMeshTools } from './meshTools.js';
import { meshScene } from './meshScene.js';
import { SectionCaps } from '../tools/sectionCaps.js';

const canvas = document.querySelector('canvas');
const message = document.querySelector('#ioviewer-message');
const retry = document.querySelector('#retry');
const status = el('span');
document.querySelector('#stream-controls').append(status);
document.querySelector('#fit').remove();
const ru = lang === 'ru';
const profile = window.IOVIEWER_MESH_PROFILE;
document.documentElement.lang = lang;
retry.textContent = ru ? 'Повторить загрузку' : 'Retry downloads';

function show(text) {
  message.textContent = text;
  message.hidden = false;
}

async function fetchPage(node, signal) {
  const start = profile && performance.now();
  const response = await fetch(`/pages/${node.id}`, { cache: 'no-store', signal });
  if (!response.ok || Number(response.headers.get('content-length')) !== node.bytes) throw new Error(`Page ${node.id} failed (${response.status}).`);
  const data = await response.arrayBuffer();
  if (profile) profile.fetch(performance.now() - start, data.byteLength);
  return viewsOfPage(data, node);
}

const box = ({ min, max }) => new THREE.Box3(new THREE.Vector3(...min), new THREE.Vector3(...max));
const BASE_ERROR = 1.5, MERGE_ERROR = 1, MOVE_SETTLE = 180;

try {
  const response = await fetch('/manifest.json');
  if (!response.ok) throw new Error(`Manifest: HTTP ${response.status}.`);
  const manifest = validateMeshPages(await response.json());
  if (manifest.review?.title) document.title = manifest.review.title;
  const context = canvas.getContext('webgl2', { antialias: true, stencil: true });
  if (context) await start(manifest, context);
  else show(t('noWebGL'));
} catch (error) {
  show(`${t('badData')}. ${error.message}`);
}

async function start(manifest, context) {
  const bounds = box(manifest);
  const nodes = manifest.pages.map((page, id) => {
    const bytes = sizeOfPage(page);
    return { ...page, id, box: box(page), bytes, memory: bytes + page.indices * 2 + (page.pick ? page.vertices * 4 : 0) };
  });
  const roots = manifest.roots.map((id) => nodes[id]);
  const pinned = new Set(roots);
  const resident = new Map(), pending = new Set(), failed = new Map(), transferred = [];
  const appearances = new Map(), textures = new Map();
  let clip = { planes: [], intersection: false };
  const scene = meshScene(manifest.elements ?? [], nodes, bounds, context, (planes, intersection) => {
    clip = { planes, intersection };
    updateMaterials();
  }, requestFrame);
  const warming = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  let bytes = roots.reduce((n, node) => n + node.memory, 0), peak = bytes;
  let wireBudget = false;
  const pageMemory = (node) => node.memory + (wireBudget ? node.indices * 8 : 0);
  let requested = 0, downloaded = 0, evictions = 0, fallback = 0, exact = 0, visible = 0;
  let coarsePixels = 0, nearbyCoarsePixels = 0;
  let frame = 0, lost = false;
  let lastMove = -Infinity, settleTimer = 0, lastFrame = 0, fastFrames = 0, movingError = BASE_ERROR, threshold = BASE_ERROR;
  let rasterScale = 1, lastScaleChange = -Infinity;
  let drawn = new Set();
  if (manifest.overview) {
    const response = await fetch('/overview.bin', { cache: 'no-store' });
    if (!response.ok || Number(response.headers.get('content-length')) !== manifest.overview) throw new Error('Invalid overview size.');
    const overview = await response.arrayBuffer();
    if (overview.byteLength !== manifest.overview) throw new Error('Truncated overview.');
    let at = 0;
    for (const node of roots) {
      stage(node, viewsOfPage(overview.slice(at, at + node.bytes), node), true);
      at += node.bytes;
    }
  } else {
    for (let at = 0; at < roots.length; at += 4) {
      await Promise.all(roots.slice(at, at + 4).map(async (node) => stage(node, await fetchPage(node), true)));
    }
  }

  const renderer = new THREE.WebGLRenderer({ canvas, context, antialias: true, stencil: true, logarithmicDepthBuffer: true });
  renderer.localClippingEnabled = true;
  renderer.autoClearStencil = false;
  renderer.setClearColor(0x1f2228);
  renderer.setPixelRatio(window.devicePixelRatio);
  const world = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.up.set(0, 0, 1);
  camera.position.set(1, -1, 0.8);
  const sun = new THREE.DirectionalLight(0xfff6e9, 1.7);
  sun.position.set(2, -3, 5);
  world.add(sun, new THREE.HemisphereLight(0xffffff, 0x8897a8, 1.35));

  const ndc = new THREE.Vector2(), ray = new THREE.Raycaster();
  const point = new THREE.Vector3(), closest = new THREE.Vector3(), forward = new THREE.Vector3();
  const frustum = new THREE.Frustum(), guard = new THREE.Frustum(), matrix = new THREE.Matrix4();
  const guardScale = new THREE.Matrix4().makeScale(0.8, 0.8, 1);
  let pointed = null;
  const controls = new NavigationControls(camera, canvas, { pick, visibleBox: scene.visibleBox });
  function pick(x, y) {
    const rect = canvas.getBoundingClientRect();
    ndc.set(2 * (x - rect.left) / rect.width - 1, 1 - 2 * (y - rect.top) / rect.height);
    const camera = controls.camera;
    camera.updateMatrixWorld();
    ray.setFromCamera(ndc, camera);
    camera.getWorldDirection(forward);
    const eyeDepth = forward.dot(camera.position);
    let best = Infinity;
    pointed = null;
    for (const node of drawn) {
      if (!ray.ray.intersectBox(node.box, point)) continue;
      const depth = forward.dot(point) - eyeDepth;
      if (depth < camera.near || depth > camera.far) continue;
      const distance = point.distanceToSquared(ray.ray.origin);
      if (distance < best) { best = distance; closest.copy(point); pointed = node; }
    }
    return pointed ? closest.clone() : null;
  }

  function configureMaterial(material) {
    material.clippingPlanes = clip.planes;
    material.clipIntersection = clip.intersection;
    material.opacity = scene.opacity;
    const transparent = material.userData.blended || scene.opacity < 1;
    if (material.transparent !== transparent) {
      material.transparent = transparent;
      material.needsUpdate = true;
    }
    material.depthWrite = !material.transparent;
  }
  function updateMaterials() {
    for (const material of appearances.values()) configureMaterial(material);
    requestFrame();
  }
  function materialFor(tagged, blended, textureId) {
    const key = `${scene.mode}-${tagged}-${blended}-${textureId}`;
    let material = appearances.get(key);
    if (material) return material;
    const white = scene.mode === 'white';
    let map = null;
    if (scene.mode === 'textures' && textureId !== undefined) {
      if (!textures.has(textureId)) {
        const { mime, data, sx, sy } = manifest.review.textures[textureId];
        const loaded = new THREE.TextureLoader().load(`data:${mime};base64,${data}`, requestFrame,
          undefined, () => show(t('badData')));
        loaded.colorSpace = THREE.SRGBColorSpace;
        loaded.wrapS = loaded.wrapT = THREE.RepeatWrapping;
        loaded.repeat.set(1 / sx, 1 / sy);
        textures.set(textureId, loaded);
      }
      map = textures.get(textureId);
    }
    material = new THREE.MeshLambertMaterial({ vertexColors: tagged || !white, color: white && !tagged ? 0xfafafa : 0xffffff,
      wireframe: scene.mode === 'wireframe', map });
    material.userData.blended = blended;
    if (tagged) scene.patchMaterial(material, { white });
    configureMaterial(material);
    appearances.set(key, material);
    return material;
  }
  function style(node, item) {
    if (item.mode === scene.mode) return;
    let start = 0;
    item.mesh.material = item.groups.map((group) => {
      const blended = start >= node.opaque;
      start += group.count;
      return materialFor(!!node.pick, blended, group.texture);
    });
    item.mode = scene.mode;
  }
  scene.root.addEventListener('change', (event) => {
    if (event.detail.kind === 'visibility') {
      controls.invalidateBounds();
      controls.resize();
    }
    if (!wireBudget && scene.mode === 'wireframe') {
      wireBudget = true;
      const reserved = new Set([...resident.keys(), ...pending]);
      for (const node of reserved) bytes += node.indices * 8;
      // Three retains generated edge indices until the source geometry is disposed.
      const candidates = [...resident].filter(([node, item]) => item.ready && !pinned.has(node)).sort((a, b) => a[1].used - b[1].used);
      for (const [node] of candidates) {
        if (bytes <= MESH_BUDGET) break;
        discard(node);
      }
      peak = Math.max(peak, bytes);
    }
    updateMaterials();
  });
  const tools = mountMeshTools({ manifest, roots, nodes, bounds, world, controls, canvas, scene,
    fetchPage, ru, render: requestFrame, canFill: context.getContextAttributes()?.stencil === true && roots.some((node) => node.hasClosed),
    setBackground: (color) => renderer.setClearColor(color) });
  let caps, capWorld, capMaterials;
  function renderStencils(renderer, camera, plane) {
    if (!capWorld) {
      capWorld = new THREE.Scene();
      capMaterials = [false, true].map((tagged) => [
        [THREE.BackSide, THREE.IncrementWrapStencilOp], [THREE.FrontSide, THREE.DecrementWrapStencilOp],
      ].map(([side, stencilZPass]) => {
        const material = new THREE.MeshBasicMaterial({ side, stencilZPass, stencilWrite: true, clippingPlanes: [plane],
          colorWrite: false, depthWrite: false, depthTest: false });
        if (tagged) scene.patchMaterial(material, { stencil: true });
        return material;
      }));
    }
    for (let pass = 0; pass < 2; pass++) {
      capWorld.clear();
      for (const node of drawn) {
        if (node.children.length || !node.hasClosed) continue;
        const item = resident.get(node);
        if (!item.stencil) {
          const invisible = new THREE.MeshBasicMaterial({ visible: false });
          item.stencil = new THREE.Mesh(item.mesh.geometry);
          item.stencil.position.copy(item.mesh.position);
          item.stencilMaterials = capMaterials[Number(!!node.pick)].map((material) =>
            item.groups.map(({ closed }) => closed ? material : invisible));
        }
        item.stencil.material = item.stencilMaterials[pass];
        capWorld.add(item.stencil);
      }
      renderer.render(capWorld, camera);
    }
    capWorld.clear();
  }
  let viewCube, cubeDirty = true;
  let resolveReady;
  const ready = new Promise((resolve) => (resolveReady = resolve));
  window.__ioviewerMeshLod = { controls, manifest, ready, ...tools,
    stats: () => ({ bytes, peak, budget: MESH_BUDGET, requested, evictions, downloaded, visible, exact, fallback,
      coarsePixels, nearbyCoarsePixels, threshold, rasterScale, pending: pending.size,
      resident: resident.size, triangles: renderer.info.render.triangles, draws: renderer.info.render.calls, failures: [...failed.values()] }) };

  function stage(node, view, ready = false) {
    if (view.index.some((i) => i >= node.vertices) || view.position.some((value) => !Number.isFinite(value))) {
      throw new Error(`Invalid geometry in page ${node.id}.`);
    }
    const geometry = new THREE.BufferGeometry();
    const attribute = (array, size, normalized = false) => new THREE.BufferAttribute(array, size, normalized)
      .onUpload(function () { this.array = null; });
    geometry.setAttribute('position', attribute(view.position, 3));
    geometry.setAttribute('normal', attribute(view.normal, 3, true));
    geometry.setAttribute('color', attribute(view.color, 4, true));
    if (view.uv) geometry.setAttribute('uv', attribute(view.uv, 2));
    if (view.tags) {
      const elements = new Float32Array(node.vertices);
      for (let i = 0; i < view.index.length; i++) {
        const element = view.tags[Math.floor(i / 3)];
        if (element >= scene.elementCount) throw new Error(`Invalid element in page ${node.id}.`);
        elements[view.index[i]] = element;
      }
      geometry.setAttribute('elementIndex', attribute(elements, 1));
    }
    geometry.setIndex(new THREE.BufferAttribute(new Uint16Array(view.index), 1));
    const groups = node.groups ?? [node.opaque, node.indices - node.opaque].filter(Boolean).map((count) => ({ count }));
    let at = 0;
    groups.forEach(({ count }, index) => { geometry.addGroup(at, count, index); at += count; });
    const item = { mesh: new THREE.Mesh(geometry, warming), groups, used: performance.now(), ready };
    geometry.boundingSphere = node.box.getBoundingSphere(new THREE.Sphere());
    if (node.shift) {
      item.mesh.position.fromArray(node.shift);
      geometry.boundingSphere.center.sub(item.mesh.position);
    }
    resident.set(node, item);
    return item;
  }

  function requestFrame() {
    if (!frame && !lost) frame = requestAnimationFrame(render);
  }

  function fail(node, error) {
    pending.delete(node);
    bytes -= pageMemory(node);
    failed.set(node, error.message);
  }

  function discard(node) {
    const item = resident.get(node);
    drawn.delete(node);
    world.remove(item.mesh);
    item.mesh.geometry.dispose();
    resident.delete(node);
    bytes -= pageMemory(node);
    evictions++;
  }

  function load(needs, protectedNodes, concurrency) {
    if (profile?.holdPages) return;
    for (const [node, request] of [...needs].sort((a, b) => b[1].priority - a[1].priority)) {
      if (pending.size >= concurrency) break;
      if (resident.has(node) || pending.has(node) || failed.has(node)) continue;
      const cost = pageMemory(node);
      if (!request.blocking && bytes + cost > MESH_BUDGET) continue;
      while (bytes + cost > MESH_BUDGET) {
        let old = null, age = Infinity;
        for (const [candidate, value] of resident) {
          if (!value.ready || value.used >= age || pinned.has(candidate) || protectedNodes.has(candidate) || drawn.has(candidate)) continue;
          old = candidate;
          age = value.used;
        }
        if (!old) break;
        discard(old);
      }
      if (bytes + cost > MESH_BUDGET) continue;
      bytes += cost;
      peak = Math.max(peak, bytes);
      pending.add(node);
      requested++;
      fetchPage(node).then((view) => {
        downloaded += node.bytes;
        transferred.push({ node, view });
        requestFrame();
      }, (error) => { fail(node, error); requestFrame(); });
    }
  }

  function render(now) {
    frame = 0;
    const interval = now - lastFrame;
    lastFrame = now;
    const moving = now - lastMove < MOVE_SETTLE;
    if (moving && interval < MOVE_SETTLE) {
      if (interval > 38) {
        movingError = Math.min(4.5, movingError * 1.18);
        fastFrames = 0;
      } else if (interval < 23 && ++fastFrames >= 12) {
        movingError = Math.max(BASE_ERROR, movingError / 1.08);
        fastFrames = 0;
      }
    } else if (!moving) {
      movingError = BASE_ERROR;
      fastFrames = 0;
    }
    threshold = moving ? movingError : BASE_ERROR;
    let scale = rasterScale;
    if ((!moving && !pending.size) || profile?.nativePixels) {
      scale = 1;
    } else if (interval > 38 && interval < MOVE_SETTLE && now - lastScaleChange >= 220) {
      scale = Math.max(0.6, scale - 0.15);
    }
    if (scale !== rasterScale) {
      rasterScale = scale;
      lastScaleChange = now;
      renderer.setPixelRatio(window.devicePixelRatio * rasterScale);
    }
    const camera = controls.camera;
    const height = canvas.clientHeight * window.devicePixelRatio;
    const focal = camera.zoom * (camera.isOrthographicCamera ? height / (camera.top - camera.bottom)
      : height / (2 * Math.tan(camera.fov * Math.PI / 360)));
    camera.updateMatrixWorld();
    tools.sectionGizmo.update(camera);
    if (tools.grids.visible || tools.measure.preview || tools.measure.distance !== null) {
      const rect = canvas.getBoundingClientRect();
      tools.grids.update(camera, rect);
      tools.measure.update(camera, rect);
    }
    frustum.setFromProjectionMatrix(matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));
    guard.setFromProjectionMatrix(matrix.premultiply(guardScale));
    const warm = [];
    const uploads = moving ? (interval < 23 ? 3 : interval < 38 ? 2 : 1) : (interval < 38 ? 6 : 3);
    for (const { node, view } of transferred.splice(0, uploads)) {
      try {
        const prepareAt = profile && performance.now();
        const item = stage(node, view);
        if (profile) profile.prepare(performance.now() - prepareAt);
        item.mesh.material = warming;
        item.mesh.frustumCulled = false;
        // Three uploads the full vertex and index buffers on the first draw.
        item.mesh.geometry.setDrawRange(0, 3);
        world.add(item.mesh);
        warm.push(node);
      } catch (error) { fail(node, error); }
    }
    const cut = new Set(), needs = new Map(), protectedNodes = new Set();
    const fill = tools.canFill && tools.sections.fill && clip.planes.length > 0;
    let capPending = false;
    const projectedError = (node) => node.error * focal / (camera.isOrthographicCamera ? 1 : Math.max(0.01, node.box.distanceToPoint(camera.position)));
    const inView = (node, volume) => !scene.fullyHidden(node) && volume.intersectsBox(node.box)
      && (!clip.planes.length || (fill && node.hasClosed) || !tools.sections.isCut(node.box, clip));
    const childrenIn = (node, volume) => node.children.map((id) => nodes[id]).filter((child) => inView(child, volume));
    const viewDistance = camera.position.distanceTo(controls.target);
    const focusRange = Math.max(1, viewDistance / camera.zoom) * 0.3;
    const nearby = viewDistance * 2;
    function queue(children, projected, blocking = false) {
      const ready = children.filter((child) => resident.get(child)?.ready).length;
      for (const child of children) {
        if (blocking) protectedNodes.add(child);
        if (resident.has(child)) continue;
        const focus = 1 / (1 + child.box.distanceToPoint(controls.target) / focusRange);
        const near = child.box.distanceToPoint(camera.position) < nearby;
        const priority = Math.min(projected, 20) + (blocking ? 48 + (near ? 64 : 0) + focus * 40 + ready * 4 : focus * 16);
        if (priority > (needs.get(child)?.priority ?? 0)) needs.set(child, { priority, blocking });
      }
    }
    function prefetch(node) {
      if (!node.children.length) return;
      const projected = projectedError(node);
      if (projected > BASE_ERROR / 2) queue(childrenIn(node, moving ? guard : frustum), projected);
    }
    fallback = exact = coarsePixels = nearbyCoarsePixels = 0;
    function draw(node) {
      cut.add(node);
      style(node, resident.get(node));
      if (!node.children.length) exact++;
      if (profile?.coarseMetrics && node.children.length) {
        const error = projectedError(node);
        coarsePixels = Math.max(coarsePixels, error);
        if (node.box.distanceToPoint(camera.position) < nearby) nearbyCoarsePixels = Math.max(nearbyCoarsePixels, error);
      }
    }
    function visit(node, knownVisible = false) {
      if (!knownVisible && !inView(node, frustum)) {
        if (moving && inView(node, guard)) prefetch(node);
        return;
      }
      protectedNodes.add(node);
      const projected = projectedError(node);
      const forced = scene.affected(node) || (scene.mode === 'textures' && node.hasTexture) || (fill && node.hasClosed);
      if (!node.children.length || (!forced && projected <= (node.split ? MERGE_ERROR : threshold))) {
        if (moving) prefetch(node);
        node.split = false;
        draw(node);
        return;
      }
      const children = childrenIn(node, frustum);
      if (!children.length) return;
      if (moving) queue(childrenIn(node, guard), projected);
      queue(children, projected, true);
      if (children.some((child) => !resident.get(child)?.ready)) {
        children.forEach(prefetch);
        fallback++;
        if (fill && node.hasClosed) capPending = true;
        if (scene.visibilityAffects(node)) {
          for (const child of children) if (resident.get(child)?.ready) visit(child, true);
        } else draw(node);
        return;
      }
      // Commit only a covered cut. Keeping one mesh per branch avoids depth fighting and stipple.
      node.split = true;
      for (const child of children) visit(child, true);
    }
    for (const root of roots) visit(root);
    for (const node of drawn) if (!cut.has(node)) world.remove(resident.get(node).mesh);
    for (const node of cut) if (!drawn.has(node)) world.add(resident.get(node).mesh);
    drawn = cut;
    for (const node of protectedNodes) if (resident.has(node)) resident.get(node).used = now;
    visible = cut.size;
    load(needs, protectedNodes, moving ? 6 : 12);
    const drawWorld = () => {
      if (fill && !capPending) {
        caps ??= new SectionCaps(scene, tools.sections, null, renderStencils);
        caps.render(renderer, world, camera);
      } else renderer.render(world, camera);
    };
    if (profile) profile.draw(context, drawWorld);
    else drawWorld();
    if (cubeDirty) {
      cubeDirty = false;
      viewCube?.update();
    }
    // Upload at a bounded rate before a sibling group can replace its visible parent.
    for (const node of warm) {
      const item = resident.get(node);
      world.remove(item.mesh);
      item.mode = undefined;
      item.mesh.frustumCulled = true;
      item.mesh.geometry.setDrawRange(0, Infinity);
      item.ready = true;
      pending.delete(node);
    }
    resolveReady(performance.now());
    if (transferred.length || warm.length) requestFrame();
    status.textContent = ru ? `${Math.ceil(bytes / MIB)} МиБ · Кластеров ${visible} · Уточняется ${fallback}`
      : `${Math.ceil(bytes / MIB)} MiB · ${visible} clusters · ${fallback} refining`;
    retry.hidden = failed.size === 0;
    if (failed.size) retry.title = [...failed.values()].join('\n');
  }

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    controls.resize();
  }
  controls.addEventListener('change', () => {
    cubeDirty = true;
    lastMove = performance.now();
    clearTimeout(settleTimer);
    settleTimer = setTimeout(requestFrame, MOVE_SETTLE);
    requestFrame();
  });
  window.addEventListener('resize', resize);
  retry.addEventListener('click', () => { failed.clear(); requestFrame(); });
  window.addEventListener('pointerdown', (event) => {
    if (event.target === canvas || viewCube?.element.contains(event.target)) document.activeElement?.blur();
  }, true);
  canvas.addEventListener('dblclick', ({ clientX, clientY }) => {
    pick(clientX, clientY);
    if (pointed) controls.fitBox(pointed.box);
  });
  canvas.addEventListener('webglcontextlost', () => {
    lost = true;
    cancelAnimationFrame(frame);
    clearTimeout(settleTimer);
    show(t('contextLost'));
  });
  resize();
  controls.fitBox(manifest.focus ? box(manifest.focus) : bounds, false);
  viewCube = new ViewCube(document.querySelector('#ioviewer-ui'), camera, controls);
  window.__ioviewerMeshLod.viewCube = viewCube;
}
