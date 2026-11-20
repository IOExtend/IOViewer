import * as THREE from 'three';
import { t } from '../i18n.js';
import { screenBoxes, selectInRect } from '../select/boxSelect.js';
import { Selection } from '../select/selection.js';
import { Measure } from '../tools/measure.js';
import { SNAP_RADIUS } from '../tools/measureSnap.js';
import { GridAxes } from '../tools/grids.js';
import { mountDisplay } from '../tools/display.js';
import { SectionGizmo } from '../tools/sectionGizmo.js';
import { isClipped } from '../tools/sectionMath.js';
import { Sections } from '../tools/sections.js';
import { mountUI } from '../ui/app.js';
import { el } from '../ui/dom.js';
import { mountSections } from '../ui/sectionsPanel.js';
import { mountViews } from '../ui/viewsPanel.js';
import { mountClashes } from '../ui/clashesPanel.js';
import { mountLinks } from '../ui/linksPanel.js';
import { mountTimeliner } from '../ui/timeliner.js';
import { meshSnapCandidates } from './meshSnap.js';

// Trace the original leaves independently of the cut on screen. The nearest hit gives the same element at every LOD.
export async function pickMeshSurface(ray, roots, nodes, getPage, sections, signal, visible = () => true) {
  const queue = [], p = new THREE.Vector3(), a = p.clone(), b = p.clone(), c = p.clone();
  const localRay = ray.clone(), shift = new THREE.Vector3(), base = new THREE.Vector3();
  const clip = sections.clipping();
  const enqueue = (node) => {
    if (sections.isCut(node.box, clip)) return;
    if (node.box.containsPoint(ray.origin)) queue.push({ node, distance: 0 });
    else if (ray.intersectBox(node.box, p)) queue.push({ node, distance: p.distanceToSquared(ray.origin) });
  };
  for (const root of roots) enqueue(root);
  let hit = null, best = Infinity;
  while (queue.length) {
    signal?.throwIfAborted();
    queue.sort((u, v) => v.distance - u.distance);
    const { node, distance } = queue.pop();
    if (distance > best) break;
    if (node.children.length) {
      for (const id of node.children) enqueue(nodes[id]);
      continue;
    }
    const view = await getPage(node, signal);
    const { position, index, color, tags, placements } = view;
    if (index.some((i) => i >= position.length / 3) || position.some((value) => !Number.isFinite(value))) {
      throw new Error('Invalid pick page geometry.');
    }
    base.fromArray(node.shift ?? [0, 0, 0]);
    if (placements) {
      const bounds = new THREE.Box3().setFromArray(position);
      for (let slot = 0; slot < node.count; slot++) {
        signal?.throwIfAborted();
        const element = placements.elements?.[slot] ?? null;
        if (!placements.rgba[slot * 4 + 3] || (element !== null && !visible(element))) continue;
        shift.fromArray(placements.offset, slot * 3).add(base);
        localRay.origin.copy(ray.origin).sub(shift);
        if (localRay.intersectsBox(bounds)) trace(element);
      }
    } else {
      shift.copy(base);
      localRay.origin.copy(ray.origin).sub(shift);
      trace(null);
    }
    function trace(placementElement) {
      for (let i = 0; i < index.length; i += 3) {
        const element = placements ? placementElement : tags?.[i / 3] ?? null;
        if (!placements && element !== null && !visible(element)) continue;
        const x = index[i], y = index[i + 1], z = index[i + 2];
        if (!placements && !color[x * 4 + 3] && !color[y * 4 + 3] && !color[z * 4 + 3]) continue;
        a.fromArray(position, x * 3);
        b.fromArray(position, y * 3);
        c.fromArray(position, z * 3);
        if (!localRay.intersectTriangle(a, b, c, true, p)) continue;
        p.add(shift);
        const d = p.distanceToSquared(ray.origin);
        if (d >= best || isClipped(p, clip.planes, clip.intersection)) continue;
        best = d;
        hit = { element, point: p.clone(), shift: shift.clone(), view, node };
      }
    }
  }
  return hit;
}

export function mountMeshTools({ manifest, roots, nodes, bounds, world, controls, canvas, scene, fetchPage, setBackground, canFill, render, ru }) {
  const selection = new Selection();
  const root = document.querySelector('#ioviewer-ui');
  const elements = manifest.elements ?? [];
  const meta = { ...manifest.review, elements };
  const sections = new Sections(scene, bounds, meta.sections);
  const sectionGizmo = new SectionGizmo(sections, canvas);
  const measure = new Measure(root);
  const grids = new GridAxes(root, meta.grids ?? []);
  world.add(sectionGizmo.group, measure.group, grids.group);
  sectionGizmo.addEventListener('change', render);
  measure.addEventListener('change', render);
  const note = el('span');
  note.id = 'stream-pick-status';
  note.setAttribute('role', 'status');
  note.hidden = true;
  document.querySelector('#stream-controls').append(note);
  const data = { meta, async loadProperties(index, signal) {
    const entry = elements[index];
    if (!entry.size) return null;
    const response = await fetch(`/elements/${index}`, { signal });
    if (!response.ok || Number(response.headers.get('content-length')) !== entry.size) throw new Error('Invalid element response.');
    const loaded = await response.json();
    if (loaded?.id !== entry.id || !loaded.properties || typeof loaded.properties !== 'object' || Array.isArray(loaded.properties)
      || Object.values(loaded.properties).some((group) => !group || typeof group !== 'object' || Array.isArray(group))) {
      throw new Error('Invalid element data.');
    }
    return loaded;
  } };
  const outline = new THREE.Box3Helper(new THREE.Box3(), 0xf59e0b);
  outline.visible = false;
  world.add(outline);
  const updateOutline = () => {
    outline.box.makeEmpty();
    const clip = sections.clipping();
    const bounds = new THREE.Box3();
    for (const i of selection.values()) {
      if (scene.isVisible(i) && !sections.isCut(scene.elementBox(i, bounds), clip)) outline.box.union(bounds);
    }
    outline.visible = !outline.box.isEmpty();
    outline.material.clippingPlanes = clip.planes;
    outline.material.clipIntersection = clip.intersection;
    render();
  };
  selection.addEventListener('change', () => {
    scene.setHighlighted(selection.values());
    updateOutline();
  });
  let controller, previewTimer;
  const cancel = () => {
    controller?.abort();
    clearTimeout(previewTimer);
    measure.setPreview(null);
  };
  const measurePages = new Map();
  async function getPage(node, signal) {
    if (!measure.active) return fetchPage(node, signal);
    if (measurePages.has(node.id)) return measurePages.get(node.id);
    const view = await fetchPage(node, signal);
    signal.throwIfAborted();
    if (measurePages.size === 4) measurePages.delete(measurePages.keys().next().value);
    measurePages.set(node.id, view);
    return view;
  }
  async function pick(x, y, preview = false) {
    if (!elements.length && !measure.active) return null;
    controller?.abort();
    const current = new AbortController();
    controller = current;
    let failed = false;
    if (!preview) {
      note.hidden = false;
      note.textContent = ru ? 'Поиск элемента…' : 'Finding element…';
    }
    try {
      const rect = canvas.getBoundingClientRect();
      const cursor = new THREE.Vector2();
      const picker = new THREE.Raycaster();
      const camera = controls.camera;
      camera.updateMatrixWorld();
      const trace = (ndc) => {
        picker.setFromCamera(ndc, camera);
        return pickMeshSurface(picker.ray, roots, nodes, getPage, sections, current.signal, scene.isVisible);
      };
      const at = (cx, cy) => trace(cursor.set((cx - rect.left) / rect.width * 2 - 1, 1 - (cy - rect.top) / rect.height * 2));
      const hit = await at(x, y);
      current.signal.throwIfAborted();
      if (hit?.element != null && !elements[hit.element]) throw new Error('Invalid mesh element index.');
      if (measure.active) {
        let near = hit;
        for (let direction = 0; !near && direction < 8; direction++) {
          const angle = direction * Math.PI / 4;
          near = await at(x + Math.cos(angle) * SNAP_RADIUS, y + Math.sin(angle) * SNAP_RADIUS);
          current.signal.throwIfAborted();
        }
        if (!near) return null;
        for (const target of meshSnapCandidates(near, camera, rect, x, y, sections)) {
          const obstruction = await trace(target.point.clone().project(camera));
          current.signal.throwIfAborted();
          if (!obstruction || obstruction.point.distanceTo(picker.ray.origin) + 0.002 >= target.point.distanceTo(picker.ray.origin)) return target;
        }
        return hit ? { kind: 'surface', point: hit.point } : null;
      }
      return hit?.element != null ? hit : null;
    } catch (error) {
      if (!current.signal.aborted) {
        failed = true;
        note.textContent = `${t('badData')}. ${error.message}`;
        note.hidden = false;
      }
    } finally {
      if (controller === current) {
        controller = undefined;
        note.hidden = !failed;
      }
    }
  }
  const ui = mountUI({ root, data, scene, controls, picker: { pick }, selection, measure });
  mountSections({ root, ...ui, sections, selection, canFill });
  const restoreLinkedModels = mountLinks({ ...ui, files: meta.linkedFiles ?? [], elements, scene });
  mountViews({ ...ui, controls, scene, sections, selection, restoreLinkedModels,
    views: meta.viewpoints ?? [], bcfTopics: meta.bcfTopics ?? [] });
  const clashes = mountClashes({ ...ui, tests: meta.clashTests ?? [], elements, scene, controls, selection });
  world.add(clashes.group);
  const timeliner = mountTimeliner({ root, ...ui, timeliner: meta.timeliner, elements, scene });
  const initialBackground = '#1f2228';
  const background = new THREE.Color(initialBackground);
  for (const popover of mountDisplay({ root, toolbar: ui.toolbar, scene, meta, grids, initialBackground, setBackground(color) {
    setBackground(background.set(color));
    const { r, g, b } = background;
    const light = 0.2126 * r + 0.7152 * g + 0.0722 * b > Math.sqrt(0.0525) - 0.05;
    root.style.setProperty('--viewport-text', color === initialBackground ? '' : light ? '#000' : '#fff');
    render();
  } })) ui.onEscape(popover.close);
  grids.addEventListener('change', () => controls.setExtraBounds('grids', grids.visible ? grids.box : null));
  if (grids.visible) controls.setExtraBounds('grids', grids.box);
  measure.addEventListener('change', () => controls.setExtraBounds('measure', measure.box));
  measure.addEventListener('previewchange', render);
  sections.addEventListener('change', () => { cancel(); updateOutline(); });
  scene.root.addEventListener('change', (event) => {
    if (event.detail.kind === 'visibility') { cancel(); updateOutline(); }
  });
  controls.addEventListener('change', cancel);
  window.addEventListener('pointerdown', cancel, true);
  canvas.addEventListener('pointerleave', cancel);
  canvas.addEventListener('pointermove', (event) => {
    if (!measure.active || event.buttons) return;
    cancel();
    previewTimer = setTimeout(async () => {
      const target = await pick(event.clientX, event.clientY, true);
      if (target !== undefined && measure.active) measure.setPreview(target);
    }, 80);
  });
  ui.toolbar.setHandler('distance', () => {
    cancel();
    measure.setActive(!measure.active);
    if (!measure.active) measurePages.clear();
    ui.toolbar.setActive('distance', measure.active);
  });
  ui.toolbar.setActive('distance', false);
  ui.onEscape(() => { cancel(); note.hidden = true; return measure.clear(); });
  controls.addEventListener('click', async ({ detail: { x, y, ctrl, shift } }) => {
    const hit = await pick(x, y);
    if (hit === undefined) return;
    if (measure.active) {
      if (hit) measure.add(hit.point);
      return;
    }
    if (ctrl) {
      if (hit) selection.toggle(hit.element);
    } else if (hit) selection.set([hit.element]);
    else if (!shift) selection.clear();
  });
  controls.addEventListener('boxselect', ({ detail: { rect, mode, ctrl, shift } }) => {
    if (measure.active || !elements.length) return;
    if (rect.width < 4 || rect.height < 4) {
      if (!ctrl && !shift) selection.clear();
      return;
    }
    controls.camera.updateMatrixWorld();
    const found = selectInRect(rect, mode, screenBoxes(scene, controls.camera, canvas.getBoundingClientRect()));
    const clip = sections.clipping(), bounds = new THREE.Box3();
    const shown = found.filter((i) => !sections.isCut(scene.elementBox(i, bounds), clip));
    selection.set(ctrl ? [...selection.values(), ...shown] : shown);
  });
  return { sections, selection, ui, sectionGizmo, measure, grids, canFill, scene, clashes, timeliner };
}
