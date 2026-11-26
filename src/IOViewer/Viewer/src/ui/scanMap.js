import * as THREE from 'three';
import { lang, t } from '../i18n.js';
import { detectScanLevels, levelContains, mapZoom } from './scanLevels.js';
import { createPanoramaPoints } from './panoramaPoints.js';

const elevationFormat = new Intl.NumberFormat(lang, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
const elevation = (z) => `${elevationFormat.format(z)} ${t('scanMap.metres')}`;

function mapButton(label, text, action) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = text;
  button.title = label;
  button.setAttribute('aria-label', label);
  button.addEventListener('click', action);
  return button;
}

export function photoDrag(deltaX, deltaY) {
  return [deltaX * .005, deltaY * .005];
}

export function photoDirection(target, yaw, pitch) {
  return target.set(Math.cos(pitch) * Math.cos(yaw), Math.cos(pitch) * Math.sin(yaw), Math.sin(pitch));
}

export function pickPhotoElevation(camera, origin, objects, x, y, width, height) {
  const ray = new THREE.Raycaster();
  ray.setFromCamera(new THREE.Vector2(x, y), camera);
  ray.ray.origin.copy(origin);
  ray.near = .05;
  ray.params.Points.threshold = .12;
  const surface = new THREE.Vector3();
  const image = new THREE.Vector3();
  for (const hit of ray.intersectObjects(objects, false)) {
    // Three reports a point on the ray. Use the actual scan vertex for the height.
    surface.fromBufferAttribute(hit.object.geometry.attributes.position, hit.index).applyMatrix4(hit.object.matrixWorld);
    image.copy(surface).sub(origin).project(camera);
    if (Math.hypot((image.x - x) * width / 2, (image.y - y) * height / 2) <= 14) return surface.z;
  }
  return undefined;
}

export function mountScanMap(root, data, points, scene, controls, requestRender) {
  if (!points.count) return;
  const bounds = new THREE.Box3().setFromObject(points.root);
  if (bounds.isEmpty()) return;
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const initial = { x: center.x, y: center.y, side: Math.max(size.x, size.y, 0.01) * 1.12, zoom: 1 };
  let viewport = { ...initial };
  const xOnMap = (x) => 50 + 100 * (x - viewport.x) * viewport.zoom / viewport.side;
  const yOnMap = (y) => 50 - 100 * (y - viewport.y) * viewport.zoom / viewport.side;
  const limit = (v) => Math.min(96, Math.max(4, v));
  const locate = (node, position, clamp = false) => {
    const x = xOnMap(position.x), y = yOnMap(position.y);
    node.style.left = `${clamp ? limit(x) : x}%`;
    node.style.top = `${clamp ? limit(y) : y}%`;
    return x >= 0 && x <= 100 && y >= 0 && y <= 100;
  };
  const offsetZ = data.meta.rtcOffset?.[2] ?? 0;
  const panoramas = data.meta.panoramas ?? [];
  const positions = panoramas.map((photo) => new THREE.Vector3(...photo.position));
  const storageKey = `ioviewer.scan-levels.v1:${location.pathname}`;
  const autoLevels = () => detectScanLevels(positions.map((p) => p.z + offsetZ), bounds.min.z + offsetZ, bounds.max.z + offsetZ);
  let saved = null;
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(parsed)) saved = parsed.filter((level) => Number.isFinite(level?.min) && Number.isFinite(level.max) && level.max > level.min);
  } catch {
    // Storage can be unavailable for local HTML files. The map remains usable in memory.
    saved = null;
  }
  let levels = saved ?? autoLevels();
  let selectedLevel = -1;
  let showSpheres = true;
  const inLevel = (z) => levelContains(levels[selectedLevel], z + offsetZ);

  const panel = document.createElement('details');
  panel.className = 'ioviewer-floating ioviewer-scan-map';
  panel.open = !matchMedia('(max-width: 600px)').matches;
  const summary = document.createElement('summary');
  summary.textContent = t('scanMap.title');
  const map = document.createElement('div');
  map.className = 'scan-map-plot';
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 300;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', t('scanMap.plan'));
  canvas.tabIndex = 0;
  const marker = document.createElement('span');
  marker.className = 'scan-map-camera';
  marker.setAttribute('aria-hidden', 'true');
  const axes = document.createElement('span');
  axes.className = 'scan-map-axes';
  axes.textContent = 'Y ↑';
  const ruler = document.createElement('span');
  ruler.className = 'scan-map-scale';
  map.append(canvas, marker, axes, ruler);
  panel.append(summary, map);
  root.append(panel);

  const total = points.root.children.reduce((sum, object) => sum + object.geometry.attributes.position.count, 0);
  const step = Math.max(1, Math.ceil(total / 60000));
  const samples = points.root.children.map((object) => {
    const vertices = object.geometry.attributes.position;
    const xyz = new Float32Array(Math.ceil(vertices.count / step) * 3);
    const point = new THREE.Vector3();
    for (let i = 0, j = 0; i < vertices.count; i += step, j += 3) {
      point.fromBufferAttribute(vertices, i).applyMatrix4(object.matrixWorld).toArray(xyz, j);
    }
    return xyz;
  });
  let frame = 0;
  const drawPlan = () => {
    frame = 0;
    if (!panel.open) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, 300, 300);
    ctx.fillStyle = 'rgba(160, 185, 201, .33)';
    for (const [index, xyz] of samples.entries()) {
      if (!points.root.children[index].visible) continue;
      for (let i = 0; i < xyz.length; i += 3) {
        if (inLevel(xyz[i + 2])) ctx.fillRect(xOnMap(xyz[i]) * 3, yOnMap(xyz[i + 1]) * 3, 2, 2);
      }
    }
    const width = viewport.side / viewport.zoom;
    const metres = 10 ** Math.floor(Math.log10(width / 3));
    ruler.style.width = `${metres / width * 100}%`;
    ruler.textContent = `${metres.toLocaleString(lang)} ${t('scanMap.metres')}`;
    for (const [i, position] of positions.entries()) {
      stationMarkers[i].hidden = !locate(stationMarkers[i], position) || !inLevel(position.z);
    }
    updateCamera();
  };
  const redraw = () => { if (!frame) frame = requestAnimationFrame(drawPlan); };
  const direction = new THREE.Vector3();
  let photoPose = null;
  const updateCamera = () => {
    if (photoPose) {
      marker.hidden = !inLevel(photoPose.position.z);
      locate(marker, photoPose.position, true);
      marker.style.rotate = `${Math.PI / 2 - photoPose.yaw}rad`;
      return;
    }
    marker.hidden = false;
    locate(marker, controls.camera.position, true);
    controls.camera.getWorldDirection(direction);
    marker.style.rotate = `${Math.atan2(direction.x, direction.y)}rad`;
  };
  panel.addEventListener('toggle', redraw);
  scene.root.addEventListener('change', (e) => {
    if (e.detail.kind === 'visibility') redraw();
  });
  controls.addEventListener('change', updateCamera);
  const mapNav = document.createElement('div');
  mapNav.className = 'scan-map-controls';
  const mapSize = document.createElement('select');
  mapSize.setAttribute('aria-label', t('scanMap.size'));
  for (const size of ['small', 'medium', 'large']) mapSize.add(new Option(t(`scanMap.${size}`), size));
  mapSize.value = matchMedia('(max-width: 600px)').matches ? 'small' : 'medium';
  root.dataset.scanMapSize = mapSize.value;
  mapSize.addEventListener('change', () => { root.dataset.scanMapSize = mapSize.value; });
  const zoom = (factor, x = 0, y = 0) => {
    viewport = mapZoom(viewport, factor, x, y);
    redraw();
  };
  const reset = () => { viewport = { ...initial }; redraw(); };
  mapNav.append(mapSize, mapButton(t('scanMap.zoomOut'), '−', () => zoom(.8)),
    mapButton(t('scanMap.zoomIn'), '+', () => zoom(1.25)), mapButton(t('scanMap.reset'), '↺', reset));
  panel.insertBefore(mapNav, map);
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    zoom(e.deltaY < 0 ? 1.15 : 1 / 1.15, (e.clientX - rect.left) / rect.width - .5, (e.clientY - rect.top) / rect.height - .5);
  }, { passive: false });
  let mapDrag;
  canvas.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || mapDrag) return;
    canvas.setPointerCapture(e.pointerId);
    mapDrag = { id: e.pointerId, x: e.clientX, y: e.clientY };
  });
  canvas.addEventListener('pointermove', (e) => {
    if (mapDrag?.id !== e.pointerId) return;
    const factor = viewport.side / (viewport.zoom * Math.max(1, canvas.clientWidth));
    viewport.x -= (e.clientX - mapDrag.x) * factor;
    viewport.y += (e.clientY - mapDrag.y) * factor;
    mapDrag.x = e.clientX;
    mapDrag.y = e.clientY;
    redraw();
  });
  canvas.addEventListener('lostpointercapture', (e) => {
    if (e.pointerId === mapDrag?.id) mapDrag = undefined;
  });
  canvas.addEventListener('keydown', (e) => {
    const pan = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] }[e.key];
    if (pan) {
      const step = viewport.side / viewport.zoom / 10;
      viewport.x += pan[0] * step;
      viewport.y += pan[1] * step;
      redraw();
    } else if (e.key === '+' || e.key === '=' || e.key === '-') zoom(e.key === '-' ? .8 : 1.25);
    else if (e.key === '0') reset();
    else return;
    e.preventDefault();
    e.stopPropagation();
  });

  const levelControls = document.createElement('div');
  levelControls.className = 'scan-map-controls';
  const levelSelect = document.createElement('select');
  levelSelect.setAttribute('aria-label', t('scanMap.levels'));
  const levelStatus = document.createElement('p');
  levelStatus.className = 'scan-map-feedback';
  levelStatus.setAttribute('role', 'status');
  function saveLevels() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(levels));
    } catch {
      levelStatus.textContent = t('scanMap.levelTemporary');
    }
  }
  function refreshLevels() {
    levelSelect.replaceChildren(new Option(t('scanMap.allLevels'), '-1'));
    levels.forEach((level, i) => levelSelect.add(new Option(
      `${t('scanMap.level').replace('{n}', i + 1)} · ${elevation(level.min)} – ${elevation(level.max)}`, String(i))));
    levelSelect.value = String(selectedLevel);
    removeLevel.disabled = selectedLevel < 0;
    for (const [i, position] of positions.entries()) selector.options[i + 1].hidden = !inLevel(position.z);
    redraw();
    requestRender();
  }
  levelSelect.addEventListener('change', () => {
    selectedLevel = Number(levelSelect.value);
    levelStatus.textContent = '';
    refreshLevels();
  });
  const addLevel = mapButton(t('scanMap.addLevel'), '+', () => {
    if (photo.isClosed()) {
      const station = positions.findIndex((p) => inLevel(p.z));
      show(Math.max(0, station));
    }
    photo.pickLevel();
  });
  addLevel.disabled = !panoramas.length;
  const auto = mapButton(t('scanMap.autoLevels'), t('scanMap.autoButton'), () => {
    const found = autoLevels();
    const added = found.filter((level) => !levels.some((old) => old.min < level.max && level.min < old.max));
    levelStatus.textContent = t(found.length ? (added.length ? 'scanMap.levelsAdded' : 'scanMap.levelsExist') : 'scanMap.noLevels');
    if (added.length) {
      levels.push(...added);
      saveLevels();
      refreshLevels();
    }
  });
  auto.disabled = positions.length < 2;
  const removeLevel = mapButton(t('scanMap.removeLevel'), '×', () => {
    if (selectedLevel < 0) return;
    levels.splice(selectedLevel, 1);
    selectedLevel = -1;
    levelStatus.textContent = '';
    saveLevels();
    refreshLevels();
  });
  levelControls.append(levelSelect, addLevel, auto, removeLevel);
  if (panoramas.length) {
    const spheres = mapButton(t('scanMap.spheres'), '◉', () => {
      showSpheres = !showSpheres;
      spheres.setAttribute('aria-pressed', String(showSpheres));
      requestRender();
    });
    spheres.setAttribute('aria-pressed', 'true');
    levelControls.append(spheres);
  }
  panel.append(levelControls, levelStatus);
  const photo = panoramas.length ? photoPanel(root, data, points, show, (pose) => {
    photoPose = pose;
    if (!pose) stationMarkers.forEach((button) => button.classList.remove('current'));
    updateCamera();
  }, (level) => {
    selectedLevel = levels.push(level) - 1;
    levelStatus.textContent = t('scanMap.levelAdded');
    saveLevels();
    refreshLevels();
  }) : null;
  const selector = document.createElement('select');
  selector.setAttribute('aria-label', t('scanMap.choosePhoto'));
  const placeholder = new Option(t('scanMap.choosePhoto'), '');
  placeholder.disabled = true;
  selector.add(placeholder);
  const stationMarkers = [];
  for (const [i, photo] of panoramas.entries()) {
    const name = photo.name || data.meta.elements[photo.element].name || String(i + 1);
    selector.add(new Option(name, String(i)));
    const station = document.createElement('button');
    station.type = 'button';
    station.className = 'scan-map-station';
    station.title = name;
    station.setAttribute('aria-label', `${t('scanMap.photo')} · ${name}`);
    station.addEventListener('click', () => show(i));
    stationMarkers.push(station);
    map.append(station);
  }
  selector.value = '';
  selector.addEventListener('change', () => show(Number(selector.value)));
  selector.hidden = !panoramas.length;
  panel.append(selector);
  refreshLevels();
  if (!saved && levels.length) saveLevels();
  function show(i, keepDirection = false) {
    panel.open = true;
    selector.value = String(i);
    stationMarkers.forEach((button, j) => button.classList.toggle('current', i === j));
    photo.open(i, keepDirection);
    // Selecting the same station again should open its photo.
    selector.value = '';
  }
  return { open: show, showSphere: (element, z) => showSpheres && inLevel(z) && scene.isVisible(element) };
}

function photoPanel(root, data, points, show, onPose, onLevel) {
  const panel = document.createElement('section');
  panel.className = 'ioviewer-floating scan-photo';
  panel.setAttribute('aria-label', t('scanMap.photo'));
  panel.hidden = true;
  const header = document.createElement('header');
  const title = document.createElement('span');
  const actions = document.createElement('div');
  actions.className = 'scan-photo-actions';
  const resize = mapButton(t('scanMap.enlargePhoto'), t('scanMap.enlargePhoto'), () => {
    const expanded = panel.classList.toggle('is-expanded');
    const label = t(expanded ? 'scanMap.shrinkPhoto' : 'scanMap.enlargePhoto');
    resize.textContent = resize.title = label;
    resize.setAttribute('aria-label', label);
    resize.setAttribute('aria-pressed', String(expanded));
  });
  resize.setAttribute('aria-pressed', 'false');
  const close = document.createElement('button');
  close.type = 'button';
  close.textContent = t('close');
  close.addEventListener('click', hide);
  let prefersIntensity = false;
  const intensity = mapButton(t('scanMap.intensity'), t('scanMap.intensity'), () => {
    prefersIntensity = !prefersIntensity;
    loadPhoto(false);
  });
  intensity.className = 'scan-photo-intensity';
  intensity.hidden = true;
  actions.append(intensity, resize, close);
  header.append(title, actions);
  const canvas = document.createElement('canvas');
  canvas.tabIndex = 0;
  canvas.setAttribute('aria-label', t('scanMap.photoControls'));
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  const view = document.createElement('div');
  view.className = 'scan-photo-view';
  const crosshair = document.createElement('span');
  crosshair.className = 'scan-photo-crosshair';
  crosshair.setAttribute('aria-hidden', 'true');
  const editBar = document.createElement('div');
  editBar.className = 'scan-photo-level';
  editBar.hidden = true;
  const instructions = document.createElement('span');
  instructions.setAttribute('role', 'status');
  editBar.append(instructions, mapButton(t('scanMap.cancel'), t('scanMap.cancel'), stopPicking));
  view.append(canvas, crosshair, status);
  panel.append(header, editBar, view);
  root.append(panel);

  const stations = data.meta.panoramas.map((photo, index) => {
    const name = photo.name || data.meta.elements[photo.element].name || String(index + 1);
    const button = document.createElement('button');
    button.className = 'scan-photo-link';
    button.type = 'button';
    button.title = name;
    button.setAttribute('aria-label', t('scanMap.goToStation').replace('{name}', name));
    button.hidden = true;
    button.addEventListener('click', () => show(index, true));
    view.append(button);
    return { photo, name, button, position: new THREE.Vector3(...photo.position) };
  });
  const scanElements = data.readView(data.meta.points.element);
  const ray = new THREE.Raycaster();
  // The cloud is sampled. Check a small corridor along the sightline to reject observed obstructions.
  ray.params.Points.threshold = 0.12;
  ray.near = 0.25;
  const forward = new THREE.Vector3();
  const projected = new THREE.Vector3();
  const heading = new THREE.Vector3();
  let neighbours = [];
  let activeScan = [];
  let picking = false, lower;
  const offsetZ = data.meta.rtcOffset?.[2] ?? 0;

  let renderer, texture, pointView, revision = 0;
  let hasPointIntensity = false, showPointIntensity = false;
  let yaw = 0, pitch = 0, drag = null;
  let active, returnFocus;
  const world = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(72, 1, 0.1, 20);
  camera.up.set(0, 0, 1);
  const geometry = new THREE.SphereGeometry(10, 56, 28);
  geometry.rotateX(Math.PI / 2);
  const material = new THREE.MeshBasicMaterial({ side: THREE.BackSide });
  const sphere = new THREE.Mesh(geometry, material);
  world.add(sphere);
  const draw = () => {
    if (panel.hidden || (!texture && !showPointIntensity)) return;
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    camera.aspect = canvas.clientWidth / Math.max(1, canvas.clientHeight);
    camera.updateProjectionMatrix();
    camera.lookAt(photoDirection(forward, yaw, pitch));
    if (showPointIntensity) pointView.draw(renderer, camera, forward);
    else renderer.render(world, camera);
    camera.getWorldDirection(forward);
    for (const station of neighbours) {
      if (picking) { station.button.hidden = true; continue; }
      heading.copy(station.position).sub(active.position).normalize();
      projected.copy(heading).project(camera);
      const visible = heading.dot(forward) > 0 && Math.abs(projected.x) < .92 && Math.abs(projected.y) < .88;
      station.button.hidden = !visible;
      if (visible) {
        station.button.style.left = `${(1 + projected.x) * 50}%`;
        station.button.style.top = `${(1 - projected.y) * 50}%`;
      }
    }
    onPose({ position: active.position, yaw });
  };
  const turn = (x, y) => {
    yaw += x;
    pitch = THREE.MathUtils.clamp(pitch + y, -1.55, 1.55);
    draw();
  };
  const observer = new ResizeObserver(draw);
  observer.observe(canvas);
  canvas.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || drag) return;
    canvas.setPointerCapture(e.pointerId);
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
  });
  canvas.addEventListener('pointermove', (e) => {
    if (drag?.id !== e.pointerId) return;
    if (picking && !drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 5) return;
    drag.moved = true;
    turn(...photoDrag(e.clientX - drag.x, e.clientY - drag.y));
    drag.x = e.clientX;
    drag.y = e.clientY;
  });
  canvas.addEventListener('pointerup', (e) => {
    if (drag?.id !== e.pointerId || drag.moved || !picking) return;
    const rect = canvas.getBoundingClientRect();
    pickAt((e.clientX - rect.left) * 2 / rect.width - 1, 1 - (e.clientY - rect.top) * 2 / rect.height);
  });
  canvas.addEventListener('lostpointercapture', (e) => {
    if (drag?.id === e.pointerId) drag = null;
  });
  canvas.addEventListener('keydown', (e) => {
    if (picking && e.key === 'Enter') {
      e.preventDefault();
      pickAt(0, 0);
      return;
    }
    const motion = { ArrowLeft: [.12, 0], ArrowRight: [-.12, 0], ArrowUp: [0, .12], ArrowDown: [0, -.12] }[e.key];
    if (!motion) return;
    e.preventDefault();
    e.stopPropagation();
    turn(...motion);
  });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    camera.fov = THREE.MathUtils.clamp(camera.fov + Math.sign(e.deltaY) * 5, 32, 95);
    draw();
  }, { passive: false });
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (picking) stopPicking();
      else hide();
    }
    e.stopPropagation();
  });
  function hide() {
    panel.hidden = true;
    stopPicking();
    revision++;
    drag = null;
    clearPhoto();
    onPose(null);
    returnFocus?.focus();
  }
  function clearPhoto() {
    showPointIntensity = false;
    texture?.dispose();
    texture = undefined;
    material.map = null;
    for (const station of neighbours) station.button.hidden = true;
    neighbours = [];
  }
  function stopPicking() {
    picking = false;
    lower = undefined;
    panel.classList.remove('is-picking');
    editBar.hidden = true;
    draw();
  }
  function pickLevel() {
    picking = true;
    lower = undefined;
    panel.classList.add('is-picking');
    instructions.textContent = t('scanMap.pickLower');
    editBar.hidden = false;
    draw();
    if (texture || showPointIntensity) canvas.focus();
  }
  function pickAt(x, y) {
    if (!texture && !showPointIntensity) return;
    const hit = pickPhotoElevation(camera, active.position, activeScan, x, y, canvas.clientWidth, canvas.clientHeight);
    if (hit === undefined) {
      instructions.textContent = t(lower === undefined ? 'scanMap.noLowerHit' : 'scanMap.noUpperHit');
      return;
    }
    const z = hit + offsetZ;
    if (lower === undefined) {
      lower = z;
      instructions.textContent = t('scanMap.pickUpper').replace('{z}', elevation(z));
    } else if (z <= lower) {
      instructions.textContent = t('scanMap.upperAboveLower').replace('{z}', elevation(lower));
    } else {
      onLevel({ min: lower, max: z });
      stopPicking();
    }
  }
  function open(index, keepDirection) {
    const opening = panel.hidden;
    if (opening) returnFocus = document.activeElement;
    clearPhoto();
    active = stations[index];
    panel.hidden = false;
    title.textContent = active.name;
    sphere.rotation.z = THREE.MathUtils.degToRad(active.photo.yaw);
    activeScan = points.root.children.filter((_, i) => scanElements[i] === active.photo.element);
    hasPointIntensity = activeScan.some(object => object.geometry.getAttribute('intensity'));
    intensity.hidden = !hasPointIntensity && !active.photo.intensity;
    neighbours = stations.filter((station) => {
      if (station === active) return false;
      const distance = heading.copy(station.position).sub(active.position).length();
      if (distance <= .25) return false;
      ray.set(active.position, heading.multiplyScalar(1 / distance));
      ray.far = distance - .25;
      return !ray.intersectObjects(activeScan, false).length;
    });
    if (opening || !keepDirection) {
      const nearest = neighbours.reduce((best, station) => !best
        || station.position.distanceToSquared(active.position) < best.position.distanceToSquared(active.position)
        ? station : best, null);
      if (nearest) {
        heading.copy(nearest.position).sub(active.position);
        yaw = Math.atan2(heading.y, heading.x);
        pitch = THREE.MathUtils.clamp(Math.atan2(heading.z, Math.hypot(heading.x, heading.y)), -1.55, 1.55);
      } else {
        yaw = sphere.rotation.z;
        pitch = 0;
      }
      camera.fov = 72;
    }
    loadPhoto(true);
  }
  function loadPhoto(focusCanvas) {
    const load = ++revision;
    const useIntensity = prefersIntensity && (hasPointIntensity || Boolean(active.photo.intensity));
    showPointIntensity = false;
    intensity.setAttribute('aria-pressed', String(useIntensity));
    canvas.style.visibility = 'hidden';
    status.textContent = t('scanMap.loading');
    const error = () => { if (load === revision) status.textContent = t('scanMap.photoError'); };
    let url;
    try {
      renderer ??= new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      if (useIntensity && hasPointIntensity) {
        pointView ??= createPanoramaPoints();
        pointView.setScan(activeScan, active.position);
        showPointIntensity = true;
        status.textContent = '';
        canvas.style.visibility = 'visible';
        draw();
        if (focusCanvas) canvas.focus();
        return;
      }
      const image = useIntensity ? active.photo.intensity : active.photo.image;
      url = URL.createObjectURL(new Blob([data.readView(image)], { type: 'image/jpeg' }));
    } catch {
      error();
      return;
    }
    new THREE.TextureLoader().load(url, (next) => {
      URL.revokeObjectURL(url);
      if (load !== revision || next.image.width !== 2 * next.image.height) {
        next.dispose();
        error();
        return;
      }
      texture?.dispose();
      texture = next;
      texture.colorSpace = THREE.SRGBColorSpace;
      material.map = texture;
      material.needsUpdate = true;
      status.textContent = '';
      canvas.style.visibility = 'visible';
      draw();
      if (focusCanvas) canvas.focus();
    }, undefined, () => {
      URL.revokeObjectURL(url);
      error();
    });
  }
  return { open, pickLevel, isClosed: () => panel.hidden };
}
