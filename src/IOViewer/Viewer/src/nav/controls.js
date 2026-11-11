import * as THREE from 'three';
import { isClick, orbit, zoomTowards, boxSelectMode, interpolateView } from './math.js';

const ORBIT_SPEED = 0.005; // radians per pixel
const WHEEL_STEP = 0.85;
const DEFAULT_DIRECTION = new THREE.Vector3(1, -1, 0.8).normalize();

const detail = (type, d) => new CustomEvent(type, { detail: d });

// Navisworks-style camera: left drag orbits (or pans), middle/right drag pans, wheel zooms to the cursor.
// Pointer coordinates in events and in `pick(x, y)` are client pixels; `pick` returns a Vector3 or null.
// `visibleBox()` gives the box of what is shown; it drives the orbit pivot fallback and near/far.
// setExtraBounds(key, box) adds overlay boxes (grids, a measurement) that near/far must also cover.
export class NavigationControls extends EventTarget {
  constructor(camera, dom, { pick = () => null, visibleBox = () => new THREE.Box3() } = {}) {
    super();
    this.dom = dom;
    this.pick = pick;
    this.visibleBox = visibleBox;
    this.target = new THREE.Vector3();
    this.leftButtonMode = 'orbit';
    this._perspective = camera;
    this._orthographic = new THREE.OrthographicCamera(-1, 1, 1, -1);
    this.camera = camera;
    this._drag = null;
    this._animation = 0;
    this._overlay = null;
    this._bounds = null;
    this._extraBounds = new Map(); // key -> Box3
    dom.style.touchAction = 'none';
    dom.addEventListener('pointerdown', (e) => this._down(e));
    dom.addEventListener('pointermove', (e) => this._move(e));
    dom.addEventListener('pointerup', (e) => this._up(e));
    dom.addEventListener('pointercancel', () => this._end());
    dom.addEventListener('lostpointercapture', (e) => this._lostCapture(e));
    window.addEventListener('blur', () => this._end());
    dom.addEventListener('wheel', (e) => this._wheel(e), { passive: false });
    dom.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  setLeftButtonMode(mode) {
    if (mode !== 'orbit' && mode !== 'pan') throw new RangeError(`Unknown left button mode: ${mode}`);
    this.leftButtonMode = mode;
  }

  setProjection(kind) {
    if (kind !== 'perspective' && kind !== 'orthographic') throw new RangeError(`Unknown projection: ${kind}`);
    const next = kind === 'perspective' ? this._perspective : this._orthographic;
    const previous = this.camera;
    if (next === previous) return;
    next.position.copy(previous.position);
    next.quaternion.copy(previous.quaternion);
    next.up.copy(previous.up);
    previous.parent?.add(next);
    previous.parent?.remove(previous);
    for (const child of [...previous.children]) next.add(child); // headlight
    this.camera = next;
    this.resize();
  }

  // Re-derives aspect, the orthographic frustum and near/far from the current camera and canvas size.
  resize() {
    const cam = this.camera;
    const aspect = this.dom.clientWidth / Math.max(this.dom.clientHeight, 1);
    const distance = Math.max(cam.position.distanceTo(this.target), 1e-6);
    if (cam.isPerspectiveCamera) {
      cam.aspect = aspect;
    } else {
      // Same visible size at the target as the perspective view, so switching projection does not jump.
      const half = distance * Math.tan(THREE.MathUtils.degToRad(this._perspective.fov / 2));
      Object.assign(cam, { top: half, bottom: -half, left: -half * aspect, right: half * aspect });
    }
    const sphere = this._rangeSphere();
    if (sphere) {
      const toCentre = cam.position.distanceTo(sphere.center);
      cam.far = (toCentre + sphere.radius) * 1.05;
      cam.near = Math.max((toCentre - sphere.radius) * 0.95, cam.far / 5000);
    }
    cam.updateProjectionMatrix();
    this.dispatchEvent(new Event('change'));
  }

  // Box (or null to remove it) that near/far keep in range besides the model; it never moves the orbit pivot or a fit.
  setExtraBounds(key, box) {
    if (box && !box.isEmpty()) this._extraBounds.set(key, box.clone());
    else this._extraBounds.delete(key);
    this.resize();
  }

  // Sphere around what is shown plus the extra bounds, or null when all are empty.
  _rangeSphere() {
    const sphere = this._visibleBounds()?.sphere ?? null;
    if (this._extraBounds.size === 0) return sphere;
    const box = sphere ? this._bounds.box.clone() : new THREE.Box3();
    for (const extra of this._extraBounds.values()) box.union(extra);
    return box.getBoundingSphere(new THREE.Sphere());
  }

  // Call when the visible set changes: the box is cached because computing it walks every instance.
  invalidateBounds() {
    this._bounds = null;
  }

  _visibleBounds() {
    if (!this._bounds) {
      const box = this.visibleBox();
      this._bounds = { box, sphere: box.isEmpty() ? null : box.getBoundingSphere(new THREE.Sphere()) };
    }
    return this._bounds.sphere && this._bounds;
  }

  fitBox(box, animate = true) {
    if (box.isEmpty()) return;
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const radius = Math.max(sphere.radius, 1e-3);
    const halfFov = THREE.MathUtils.degToRad(this._perspective.fov / 2);
    const aspect = this.dom.clientWidth / Math.max(this.dom.clientHeight, 1);
    const distance = radius / Math.sin(Math.min(halfFov, Math.atan(Math.tan(halfFov) * aspect)));
    const direction = this.camera.position.clone().sub(this.target);
    if (direction.lengthSq() < 1e-12) direction.copy(DEFAULT_DIRECTION);
    const position = direction.normalize().multiplyScalar(distance).add(sphere.center);
    if (animate) this.animateTo({ position, target: sphere.center });
    else this._set(position, sphere.center);
  }

  zoomToBox(box) {
    this.fitBox(box, true);
  }

  // Swings the camera round the target (see interpolateView); `up` stays +Z, so it is accepted and ignored.
  animateTo({ position, target }, ms = 400) {
    this._stopAnimation();
    const from = { position: this.camera.position.clone(), target: this.target.clone() };
    const to = { position: position ?? from.position, target: target ?? from.target };
    const start = performance.now();
    const step = (now) => {
      const k = Math.min((now - start) / ms, 1);
      const r = interpolateView(from, to, k * k * (3 - 2 * k));
      this._set(r.position, r.target);
      this._animation = k < 1 ? requestAnimationFrame(step) : 0;
    };
    this._animation = requestAnimationFrame(step);
  }

  // True while an animateTo is running.
  get animating() {
    return this._animation !== 0;
  }

  _stopAnimation() {
    cancelAnimationFrame(this._animation);
    this._animation = 0;
  }

  _set(position, target) {
    this.camera.position.copy(position);
    this.target.copy(target);
    this.camera.lookAt(target);
    this.resize();
  }

  _down(e) {
    this._end(); // a release can be lost (focus change, capture stolen); never stay stuck
    this._stopAnimation();
    this.dom.setPointerCapture(e.pointerId);
    e.preventDefault(); // middle button autoscroll
    const mode = e.button === 0 && e.shiftKey ? 'box' : e.button === 0 && this.leftButtonMode === 'orbit' ? 'orbit' : 'pan';
    const point = { x: e.clientX, y: e.clientY };
    let pivot = null;
    if (mode === 'orbit') {
      pivot = this.pick(point.x, point.y);
      if (!pivot) {
        pivot = this._visibleBounds()?.sphere.center.clone() ?? this.target.clone();
      }
    }
    this._drag = { id: e.pointerId, button: e.button, mode, pivot, down: point, last: point, moved: false };
  }

  _move(e) {
    const d = this._drag;
    if (!d || e.pointerId !== d.id) return;
    if (e.buttons === 0) return this._end();
    const point = { x: e.clientX, y: e.clientY };
    if (!d.moved && isClick(d.down, point)) return;
    d.moved = true;
    const dx = point.x - d.last.x;
    const dy = point.y - d.last.y;
    d.last = point;
    if (d.mode === 'box') this._drawRect(d.down, point);
    else if (d.mode === 'orbit') {
      const r = orbit(this.camera.position, this.target, d.pivot, dx, dy, ORBIT_SPEED);
      this._set(r.position, r.target);
    } else this._pan(dx, dy);
  }

  _pan(dx, dy) {
    const cam = this.camera;
    const height = Math.max(this.dom.clientHeight, 1);
    const worldPerPixel = cam.isPerspectiveCamera
      ? (2 * cam.position.distanceTo(this.target) * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2))) / height
      : (cam.top - cam.bottom) / height;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(cam.quaternion);
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(cam.quaternion);
    // The model follows the hand, so the camera moves the other way.
    const shift = right.multiplyScalar(-dx * worldPerPixel).addScaledVector(up, dy * worldPerPixel);
    this._set(cam.position.clone().add(shift), this.target.clone().add(shift));
  }

  _up(e) {
    const d = this._drag;
    if (!d || e.pointerId !== d.id || e.button !== d.button) return;
    const point = { x: e.clientX, y: e.clientY };
    this._end();
    if (d.mode === 'box' && d.moved) {
      const rect = {
        x: Math.min(d.down.x, point.x), y: Math.min(d.down.y, point.y),
        width: Math.abs(point.x - d.down.x), height: Math.abs(point.y - d.down.y),
      };
      const mode = boxSelectMode(d.down.x, point.x);
      this.dispatchEvent(detail('boxselect', { rect, mode, ctrl: e.ctrlKey, shift: e.shiftKey }));
    } else if (!d.moved && d.button === 0) {
      this.dispatchEvent(detail('click', { x: point.x, y: point.y, button: 0, ctrl: e.ctrlKey, shift: e.shiftKey }));
    } else if (!d.moved && d.button === 2) {
      this.dispatchEvent(detail('contextmenu', { x: point.x, y: point.y }));
    }
  }

  // Chromium drops the capture when a second button is released mid-drag while the first is still held: keep going.
  _lostCapture(e) {
    if (this._drag && e.buttons) this.dom.setPointerCapture(this._drag.id);
    else this._end();
  }

  _end() {
    this._drag = null;
    this._overlay?.remove();
    this._overlay = null;
  }

  _drawRect(a, b) {
    if (!this._overlay) {
      this._overlay = document.createElement('div');
      Object.assign(this._overlay.style, {
        position: 'fixed', pointerEvents: 'none', border: '1px solid #2563eb', background: 'rgba(37,99,235,0.12)',
      });
      (this.dom.parentElement ?? document.body).appendChild(this._overlay);
    }
    // Solid border for window (left to right), dashed for crossing.
    Object.assign(this._overlay.style, {
      borderStyle: boxSelectMode(a.x, b.x) === 'window' ? 'solid' : 'dashed',
      left: `${Math.min(a.x, b.x)}px`, top: `${Math.min(a.y, b.y)}px`,
      width: `${Math.abs(b.x - a.x)}px`, height: `${Math.abs(b.y - a.y)}px`,
    });
  }

  _wheel(e) {
    e.preventDefault();
    this._stopAnimation();
    const point = this.pick(e.clientX, e.clientY) ?? this.target;
    const r = zoomTowards(this.camera.position, this.target, point, e.deltaY > 0 ? 1 / WHEEL_STEP : WHEEL_STEP);
    this._set(r.position, r.target);
  }
}
