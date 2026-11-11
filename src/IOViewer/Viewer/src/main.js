import * as THREE from 'three';
import { loadModelData } from './data.js';
import { ModelScene, ModelTooLargeError } from './engine/modelScene.js';
import { lang, t } from './i18n.js';
import { NavigationControls } from './nav/controls.js';
import { ViewCube } from './nav/viewCube.js';
import { Picker } from './engine/picking.js';
import { MotionDetail } from './engine/motionDetail.js';
import { Selection } from './select/selection.js';
import { selectInRect, screenBoxes } from './select/boxSelect.js';
import { mountUI } from './ui/app.js';
import { Sections } from './tools/sections.js';
import { SectionGizmo } from './tools/sectionGizmo.js';
import { boxFullyClipped } from './tools/sectionMath.js';
import { mountSections } from './ui/sectionsPanel.js';
import { Measure } from './tools/measure.js';
import { GridAxes } from './tools/grids.js';
import { mountDisplay } from './tools/display.js';
import { mountViews } from './ui/viewsPanel.js';
import { mountClashes } from './ui/clashesPanel.js';
import { mountTimeliner } from './ui/timeliner.js';
import { mountLinks } from './ui/linksPanel.js';

const data = loadModelData();
document.documentElement.lang = lang;
if (data.meta.title) document.title = data.meta.title;

const canvas = document.getElementById('ioviewer-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.localClippingEnabled = true;

const world = new THREE.Scene();
world.background = new THREE.Color('#1f2228');
const sky = new THREE.HemisphereLight('#ffffff', '#8a8f99', 1.6);
sky.position.set(0, 0, 1);
world.add(sky);

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
camera.up.set(0, 0, 1);
camera.position.set(1, -1, 0.8); // initial view direction: front-right, from above; fitBox keeps it
const headlight = new THREE.DirectionalLight('#ffffff', 1.4);
headlight.position.set(0.3, 0.6, 0);
camera.add(headlight, headlight.target);
headlight.target.position.set(0, 0, -1);
world.add(camera);

// Test-only engine options (e2e and the performance harness): chunkVertices, noHideBranch, pickFloat, slotLimit,
// mergedCap, minRepeats.
const testOptions = window.IOVIEWER_TEST ?? {};
const scene = createScene();
data.releaseBinary(); // the scene has copied what it needs
// Starting at the whole model's cost, a GPU that draws it in time orbits at full detail; a slower one shrinks it.
const motionDetail = new MotionDetail(scene, requestRender, scene.totalCost);
world.add(scene.root);
// Sections never change which elements are shown, so they leave the bounds (orbit pivot, near/far) as they are.
const sections = new Sections(scene, scene.visibleBox());
const sectionGizmo = new SectionGizmo(sections, canvas);
world.add(sectionGizmo.group); // outside scene.root: the picking id pass renders only the model
const uiRoot = document.getElementById('ioviewer-ui');
const measure = new Measure(uiRoot);
const grids = new GridAxes(uiRoot, data.meta.grids ?? []);
world.add(measure.group, grids.group); // overlays too

function showMessage(text) {
  const message = document.getElementById('ioviewer-message');
  message.textContent = text;
  message.hidden = false;
}
// A model over what the viewer can draw opens without geometry and says why; the tree and properties still work.
function createScene() {
  try {
    return new ModelScene(data, { ...testOptions, maxTextureSize: renderer.capabilities.maxTextureSize });
  } catch (error) {
    if (!(error instanceof ModelTooLargeError)) throw error;
    showMessage(t('tooLarge').replace('{count}', error.count).replace('{limit}', error.limit));
    const none = (type) => ({ o: 0, n: 0, t: type });
    const instances = { count: 0, geometry: none('u32'), material: none('u32'), element: none('i32'), matrix: none('f32') };
    return new ModelScene({ ...data, meta: { ...data.meta, instances } });
  }
}
if (data.meta.instances.count === 0) showMessage(t('noGeometry'));
// The model's GPU buffers keep no CPU copy, so a lost context cannot be rebuilt, not even when the browser restores
// it: say so instead of a blank page, and draw nothing more (the picker stops too).
let contextLost = false;
canvas.addEventListener('webglcontextlost', () => {
  contextLost = true;
  showMessage(t('contextLost'));
});

let resolveReady;
const ready = new Promise((resolve) => (resolveReady = resolve));
let frameRequested = false;
function requestRender() {
  if (frameRequested || contextLost) return;
  frameRequested = true;
  motionDetail.requested(performance.now());
  requestAnimationFrame(() => {
    frameRequested = false;
    if (contextLost) return;
    const rect = canvas.getBoundingClientRect();
    controls.camera.updateMatrixWorld(); // the screen labels project with it before render() would update it
    sectionGizmo.update(controls.camera);
    measure.update(controls.camera, rect);
    grids.update(controls.camera, rect);
    motionDetail.begin(controls.camera, rect.height, performance.now());
    renderer.render(world, controls.camera);
    motionDetail.end(performance.now());
    viewCube.update();
    resolveReady();
  });
}
scene.root.addEventListener('change', requestRender);
sections.addEventListener('change', requestRender);
sectionGizmo.addEventListener('change', requestRender);
measure.addEventListener('change', requestRender);
grids.addEventListener('change', requestRender);

const picker = new Picker(renderer, scene, camera, { pickFloat: testOptions.pickFloat });
const controls = new NavigationControls(camera, canvas, {
  pick: (x, y) => picker.pick(x, y)?.point ?? null,
  visibleBox: () => scene.visibleBox(),
});
controls.addEventListener('change', () => {
  picker.camera = controls.camera; // swaps with the projection
  requestRender();
});
scene.root.addEventListener('change', (e) => {
  if (e.detail.kind !== 'visibility') return; // a highlight must not walk every instance for the bounds
  controls.invalidateBounds();
  controls.resize();
});

const selection = new Selection();
selection.addEventListener('change', () => scene.setHighlighted([...selection.values()]));
const ui = mountUI({ root: uiRoot, data, scene, controls, picker, selection, measure });
mountSections({ root: uiRoot, ...ui, sections, selection });
const { meta } = data;
mountViews({ ...ui, controls, views: meta.viewpoints ?? [] });
const clashes = mountClashes({ ...ui, tests: meta.clashTests ?? [], elements: meta.elements, scene, controls, selection });
world.add(clashes.group); // overlay, like the measure
const timeliner = mountTimeliner({ root: uiRoot, ...ui, timeliner: meta.timeliner, elements: meta.elements, scene });
mountLinks({ ...ui, files: meta.linkedFiles ?? [], elements: meta.elements, scene });
for (const popover of mountDisplay({ root: uiRoot, toolbar: ui.toolbar, scene, meta: data.meta, grids })) ui.onEscape(popover.close);
ui.toolbar.setHandler('distance', () => {
  measure.setActive(!measure.active);
  ui.toolbar.setActive('distance', measure.active);
});
ui.toolbar.setActive('distance', false);
ui.onEscape(() => measure.clear());
// The overlays stay within the camera's near/far even when what is shown shrinks (isolate, hide).
const overlayBounds = () => {
  controls.setExtraBounds('grids', grids.visible ? grids.box : null);
  controls.setExtraBounds('measure', measure.box);
};
grids.addEventListener('change', overlayBounds);
measure.addEventListener('change', overlayBounds);
overlayBounds();

// Click selects, Ctrl+click toggles; a click on nothing clears unless a modifier is held.
// With the distance tool on, a click on the model places a measure point instead and the selection stays.
controls.addEventListener('click', (e) => {
  const { x, y, ctrl, shift } = e.detail;
  const hit = picker.pick(x, y);
  if (measure.active) {
    if (hit) measure.add(hit.point);
  } else if (ctrl) {
    if (hit) selection.toggle(hit.element);
  } else if (hit) selection.set([hit.element]);
  else if (!shift) selection.clear();
});
// Box select replaces the selection, Ctrl+box adds to it; a sliver (< 4 px either way) counts as a click on nothing.
// Elements the section cuts away entirely are not selected. With the distance tool on, the selection stays.
controls.addEventListener('boxselect', (e) => {
  if (measure.active) return;
  const { rect, mode, ctrl, shift } = e.detail;
  if (rect.width < 4 || rect.height < 4) {
    if (!ctrl && !shift) selection.clear();
    return;
  }
  const box = new THREE.Box3();
  const found = selectInRect(rect, mode, screenBoxes(scene, controls.camera, canvas.getBoundingClientRect()));
  const { planes, intersection } = sections.clipping(); // once, not per element
  const shown = found.filter((i) => !boxFullyClipped(scene.elementBox(i, box), planes, intersection));
  selection.set(ctrl ? [...selection.values(), ...shown] : shown);
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  controls.resize();
});
renderer.setSize(window.innerWidth, window.innerHeight, false);
controls.resize(); // also schedules the first frame for an empty model
controls.fitBox(scene.visibleBox(), false);
const viewCube = new ViewCube(document.getElementById('ioviewer-ui'), camera, controls); // home = this load view

window.__ioviewer = { scene, motionDetail, controls, picker, selection, ui, viewCube, sections, sectionGizmo, measure, grids, clashes, timeliner, ready, get camera() { return controls.camera; } };
