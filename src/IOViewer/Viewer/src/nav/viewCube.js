import * as THREE from 'three';
import { t } from '../i18n.js';
import { el, iconButton } from '../ui/dom.js';
import { icons } from '../ui/icons.js';

const Z = new THREE.Vector3(0, 0, 1);
// Face normals of the cube = view directions from the target to the camera (Z up; "front" looks along +Y).
const FACES = {
  right: new THREE.Vector3(1, 0, 0),
  left: new THREE.Vector3(-1, 0, 0),
  back: new THREE.Vector3(0, 1, 0),
  front: new THREE.Vector3(0, -1, 0),
  top: new THREE.Vector3(0, 0, 1),
  bottom: new THREE.Vector3(0, 0, -1),
};
// Upright direction of each label: side faces read with +Z up, top and bottom as seen from the front.
const LABEL_UP = { right: Z, left: Z, back: Z, front: Z, top: FACES.back, bottom: FACES.front };
const INNER = 0.7; // a hit farther than this from the centre along an axis also takes that axis' face (edge/corner)
const ALIGNED = THREE.MathUtils.degToRad(1);
const SIZE = 96; // CSS px of the cube canvas
const HALF = 1.75; // half size of the cube camera's view; the cube's half diagonal is sqrt(3)

// Direction from the target to the camera for a region: a face ('front'), an edge ('front-right') or a corner
// ('top-front-right'); edges and corners are the normalized sum of their faces.
export function viewDirection(region) {
  const names = region.split('-');
  const sum = new THREE.Vector3();
  for (const name of names) {
    if (!Object.hasOwn(FACES, name)) throw new RangeError(`Unknown view cube region: ${region}`);
    sum.add(FACES[name]);
  }
  if (new Set(names).size !== names.length || sum.lengthSq() !== names.length) {
    throw new RangeError(`Unknown view cube region: ${region}`);
  }
  return sum.normalize();
}

// Region under a point of the cube surface (cube spans -1..1): faces in the order vertical, front/back, left/right.
export function regionAt(point) {
  const parts = [];
  if (Math.abs(point.z) >= INNER) parts.push(point.z > 0 ? 'top' : 'bottom');
  if (Math.abs(point.y) >= INNER) parts.push(point.y > 0 ? 'back' : 'front');
  if (Math.abs(point.x) >= INNER) parts.push(point.x > 0 ? 'right' : 'left');
  return parts.join('-');
}

// The face the view (target to camera) looks from, within about one degree; null when between faces.
export function alignedFace(offset, tolerance = ALIGNED) {
  const direction = offset.clone().normalize();
  const limit = Math.cos(tolerance);
  return Object.keys(FACES).find((name) => direction.dot(FACES[name]) >= limit) ?? null;
}

// Next view direction for an arrow, from a view aligned with a face (null otherwise). `screenUp` is the camera's
// up axis in the world. Left/right turn the view 90 degrees about +Z (from a side face: the face on that side of
// the screen); up/down go from a side face to the top/bottom, and from the top/bottom to the side face in that
// screen direction. A top/bottom view keeps its small tilt so its heading survives (animateTo never sits on a pole).
export function arrowView(offset, screenUp, arrow) {
  const face = alignedFace(offset);
  if (!face) return null;
  const pole = face === 'top' || face === 'bottom';
  if (arrow === 'left' || arrow === 'right') {
    const base = pole ? offset.clone().normalize() : viewDirection(face);
    return base.applyAxisAngle(Z, arrow === 'right' ? Math.PI / 2 : -Math.PI / 2);
  }
  if (arrow !== 'up' && arrow !== 'down') throw new RangeError(`Unknown arrow: ${arrow}`);
  if (!pole) return viewDirection(arrow === 'up' ? 'top' : 'bottom');
  const towards = screenUp.clone().setZ(0).multiplyScalar(arrow === 'up' ? 1 : -1);
  const sides = ['right', 'left', 'back', 'front'];
  const side = sides.reduce((best, name) => (towards.dot(FACES[name]) > towards.dot(FACES[best]) ? name : best));
  return viewDirection(side);
}

function labelTexture(text, fontFamily) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const g = canvas.getContext('2d');
  g.fillStyle = '#2a2f38';
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#cbd5e1';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.font = `600 26px ${fontFamily}`;
  const width = g.measureText(text).width;
  if (width > 112) g.font = `600 ${Math.floor((26 * 112) / width)}px ${fontFamily}`;
  g.fillText(text, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * View cube in the top-right corner: its own small renderer, scene and camera, turned like the main camera.
 * Faces, edges and corners are clickable (hover highlights them); arrows show only while the view is aligned with
 * a face; "home" returns to the view at construction. `controls.camera` is followed, so projection swaps work.
 * Call `update()` after every main frame.
 */
export class ViewCube {
  constructor(container, camera, controls) {
    this.controls = controls;
    this.home = { position: camera.position.clone(), target: controls.target.clone() };
    this.element = el('div', 'ioviewer-viewcube');
    this.canvas = el('canvas', 'ioviewer-viewcube-canvas');
    this.canvas.title = t('cube.title');
    this.canvas.setAttribute('aria-label', t('cube.title'));
    this.element.append(this.canvas);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(SIZE, SIZE);
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-HALF, HALF, HALF, -HALF, 0.1, 10);
    this.faces = new THREE.Group();
    const fontFamily = getComputedStyle(container).fontFamily;
    for (const [name, normal] of Object.entries(FACES)) {
      const label = t(`face.${name}`);
      const face = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.MeshBasicMaterial({ map: labelTexture(label, fontFamily) }));
      const up = LABEL_UP[name];
      face.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(up.clone().cross(normal), up, normal));
      face.position.copy(normal);
      face.name = name;
      face.userData.label = label;
      this.faces.add(face);
    }
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(2, 2, 2)),
      new THREE.LineBasicMaterial({ color: '#5b6575' }),
    );
    this.highlight = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: '#2563eb', transparent: true, opacity: 0.6 }),
    );
    this.highlight.visible = false;
    this.scene.add(this.faces, edges, this.highlight);
    this._raycaster = new THREE.Raycaster();
    this.hovered = null;

    this.canvas.addEventListener('pointermove', (e) => this._hover(this.regionAtClient(e.clientX, e.clientY)));
    this.canvas.addEventListener('pointerleave', () => this._hover(null));
    this.canvas.addEventListener('click', (e) => {
      const region = this.regionAtClient(e.clientX, e.clientY);
      if (region) this._look(viewDirection(region));
    });

    this.arrows = ['up', 'down', 'left', 'right'].map((arrow) => {
      const button = iconButton('ioviewer-viewcube-arrow', icons.chevron, t(`cube.${arrow}`));
      button.dataset.arrow = arrow;
      button.addEventListener('click', () => this._arrow(arrow));
      return button;
    });
    const home = iconButton('ioviewer-viewcube-home', icons.home, t('cube.home'));
    home.addEventListener('click', () =>
      controls.animateTo({ position: this.home.position.clone(), target: this.home.target.clone() }),
    );
    this.element.append(...this.arrows, home);
    container.append(this.element);
    this.update();
  }

  update() {
    const main = this.controls.camera;
    this.camera.quaternion.copy(main.quaternion);
    this.camera.position.set(0, 0, 5).applyQuaternion(main.quaternion);
    this.camera.updateMatrixWorld();
    const aligned = alignedFace(main.position.clone().sub(this.controls.target)) !== null;
    for (const button of this.arrows) button.hidden = !aligned;
    this.renderer.render(this.scene, this.camera);
  }

  // Region of the cube under a client point, or null.
  regionAtClient(x, y) {
    const r = this.canvas.getBoundingClientRect();
    const ndc = new THREE.Vector2(((x - r.left) / r.width) * 2 - 1, 1 - ((y - r.top) / r.height) * 2);
    this._raycaster.setFromCamera(ndc, this.camera);
    const hit = this._raycaster.intersectObjects(this.faces.children)[0];
    return hit ? regionAt(hit.point) : null;
  }

  _hover(region) {
    if (region === this.hovered) return;
    this.hovered = region;
    this.highlight.visible = !!region;
    if (region) {
      // A slab just over the region: across the face for a free axis, from INNER to the surface for a face's axis.
      const signs = region.split('-').reduce((sum, name) => sum.add(FACES[name]), new THREE.Vector3());
      const range = (s) => (s === 0 ? [-INNER, INNER] : s > 0 ? [INNER, 1.02] : [-1.02, -INNER]);
      const [x, y, z] = signs.toArray().map(range);
      this.highlight.scale.set(x[1] - x[0], y[1] - y[0], z[1] - z[0]);
      this.highlight.position.set((x[0] + x[1]) / 2, (y[0] + y[1]) / 2, (z[0] + z[1]) / 2);
    }
    this.renderer.render(this.scene, this.camera);
  }

  _arrow(arrow) {
    const main = this.controls.camera;
    const offset = main.position.clone().sub(this.controls.target);
    const direction = arrowView(offset, new THREE.Vector3(0, 1, 0).applyQuaternion(main.quaternion), arrow);
    if (direction) this._look(direction);
  }

  // Looks at the target from `direction`, at the current distance.
  _look(direction) {
    const { controls } = this;
    const distance = controls.camera.position.distanceTo(controls.target);
    controls.animateTo({ position: direction.clone().multiplyScalar(distance).add(controls.target), target: controls.target.clone() });
  }
}
