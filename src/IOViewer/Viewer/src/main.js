import * as THREE from 'three';
import { loadModelData } from './data.js';
import { ModelScene } from './engine/modelScene.js';
import { lang, t } from './i18n.js';
import { NavigationControls } from './nav/controls.js';
import { ViewCube } from './nav/viewCube.js';
import { Picker } from './engine/picking.js';
import { Selection } from './select/selection.js';
import { selectInRect, screenBoxes } from './select/boxSelect.js';
import { mountUI } from './ui/app.js';

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

const scene = new ModelScene(data);
world.add(scene.root);
const options = data.meta.options ?? {};
scene.setDisplayMode(options.initialWireframe ? 'wireframe' : options.initialWhiteMode ? 'white' : 'materials');

if (data.meta.instances.count === 0) {
  const message = document.getElementById('ioviewer-message');
  message.textContent = t('noGeometry');
  message.hidden = false;
}

let resolveReady;
const ready = new Promise((resolve) => (resolveReady = resolve));
let frameRequested = false;
function requestRender() {
  if (frameRequested) return;
  frameRequested = true;
  requestAnimationFrame(() => {
    frameRequested = false;
    renderer.render(world, controls.camera);
    viewCube.update();
    resolveReady();
  });
}
scene.root.addEventListener('change', requestRender);

const picker = new Picker(renderer, scene, camera);
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
const ui = mountUI({ root: document.getElementById('ioviewer-ui'), data, scene, controls, picker, selection });

// Click selects, Ctrl+click toggles; a click on nothing clears unless a modifier is held.
controls.addEventListener('click', (e) => {
  const { x, y, ctrl, shift } = e.detail;
  const hit = picker.pick(x, y);
  if (ctrl) {
    if (hit) selection.toggle(hit.element);
  } else if (hit) selection.set([hit.element]);
  else if (!shift) selection.clear();
});
// Box select replaces the selection, Ctrl+box adds to it; a sliver (< 4 px either way) counts as a click on nothing.
controls.addEventListener('boxselect', (e) => {
  const { rect, mode, ctrl, shift } = e.detail;
  if (rect.width < 4 || rect.height < 4) {
    if (!ctrl && !shift) selection.clear();
    return;
  }
  const found = selectInRect(rect, mode, screenBoxes(scene, controls.camera, canvas.getBoundingClientRect()));
  selection.set(ctrl ? [...selection.values(), ...found] : found);
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  controls.resize();
});
renderer.setSize(window.innerWidth, window.innerHeight, false);
controls.resize(); // also schedules the first frame for an empty model
controls.fitBox(scene.visibleBox(), false);
const viewCube = new ViewCube(document.getElementById('ioviewer-ui'), camera, controls); // home = this load view

window.__ioviewer = { scene, controls, picker, selection, ui, viewCube, ready, get camera() { return controls.camera; } };
