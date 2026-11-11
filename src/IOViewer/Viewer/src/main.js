import * as THREE from 'three';
import { loadModelData } from './data.js';
import { ModelScene } from './engine/modelScene.js';
import { lang, t } from './i18n.js';

const VIEW_DIRECTION = new THREE.Vector3(1, -1, 0.8).normalize(); // front-right, from above

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
    renderer.render(world, camera);
    resolveReady();
  });
}
scene.root.addEventListener('change', requestRender);

const target = new THREE.Vector3();
function fitAll() {
  const box = scene.visibleBox();
  if (box.isEmpty()) return;
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const radius = Math.max(sphere.radius, 1e-3);
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  const fitAngle = Math.min(halfFov, Math.atan(Math.tan(halfFov) * camera.aspect));
  const distance = radius / Math.sin(fitAngle);
  target.copy(sphere.center);
  camera.position.copy(target).addScaledVector(VIEW_DIRECTION, distance);
  camera.near = radius / 1000;
  camera.far = distance + radius * 100;
  camera.lookAt(target);
  camera.updateProjectionMatrix();
  requestRender();
}

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / Math.max(window.innerHeight, 1);
  camera.updateProjectionMatrix();
  requestRender();
}
window.addEventListener('resize', resize);
resize();
fitAll();
installTemporaryOrbit();

// Temporary orbit (drag = rotate around the model centre, wheel = zoom); replaced by the navigation module.
function installTemporaryOrbit() {
  let last = null;
  canvas.addEventListener('pointerdown', (e) => {
    last = { x: e.clientX, y: e.clientY };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointerup', () => (last = null));
  canvas.addEventListener('pointermove', (e) => {
    if (!last) return;
    const offset = camera.position.clone().sub(target);
    const r = offset.length();
    const azimuth = Math.atan2(offset.y, offset.x) - (e.clientX - last.x) * 0.005;
    const polar = THREE.MathUtils.clamp(Math.acos(offset.z / r) - (e.clientY - last.y) * 0.005, 0.01, Math.PI - 0.01);
    offset.set(Math.sin(polar) * Math.cos(azimuth), Math.sin(polar) * Math.sin(azimuth), Math.cos(polar));
    camera.position.copy(target).addScaledVector(offset, r);
    camera.lookAt(target);
    last = { x: e.clientX, y: e.clientY };
    requestRender();
  });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    camera.position.sub(target).multiplyScalar(e.deltaY > 0 ? 1.1 : 1 / 1.1).add(target);
    requestRender();
  }, { passive: false });
}

window.__ioviewer = { scene, camera, ready };
