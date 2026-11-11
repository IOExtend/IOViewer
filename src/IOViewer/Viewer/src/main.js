import * as THREE from 'three';
import { loadModelData } from './data.js';
import { ModelScene } from './engine/modelScene.js';
import { lang, t } from './i18n.js';
import { NavigationControls } from './nav/controls.js';

const data = loadModelData();
document.documentElement.lang = lang;
if (data.meta.title) document.title = data.meta.title;

const canvas = document.getElementById('ioviewer-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.localClippingEnabled = true;

const world = new THREE.Scene();
world.background = new THREE.Color('#e6eaef');
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

document.getElementById('ioviewer-status').textContent = `${t('elements')}: ${scene.elementCount}`;
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
    resolveReady();
  });
}
scene.root.addEventListener('change', requestRender);

const controls = new NavigationControls(camera, canvas, { visibleBox: () => scene.visibleBox() });
controls.addEventListener('change', requestRender);
scene.root.addEventListener('change', () => {
  controls.invalidateBounds();
  controls.resize();
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  controls.resize();
});
renderer.setSize(window.innerWidth, window.innerHeight, false);
controls.resize(); // also schedules the first frame for an empty model
controls.fitBox(scene.visibleBox(), false);

window.__ioviewer = { scene, controls, ready, get camera() { return controls.camera; } };
