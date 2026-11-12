import * as THREE from 'three';
import { MAX_PLANES } from './sections.js';
import { closestOnLine, planeRect } from './sectionMath.js';

const GIZMO_PX = 80; // plane gizmo: arrow length on screen
const HANDLE_PX = 8; // box handle radius on screen
const COLOR = { x: '#ef4444', y: '#22c55e', z: '#3b82f6', centre: '#e2e8f0', hover: '#facc15', frame: '#93c5fd', fill: '#60a5fa' };
const AXIS_KEYS = ['x', 'y', 'z'];
// An arrow or face handle whose axis is within 12 degrees of the line of sight is hidden: it would sit on top of the
// box centre handle, and dragging along it would be ill-conditioned (sectionMath.closestOnLine refuses under ~10 deg).
const SIGHT_COS = Math.cos(THREE.MathUtils.degToRad(12));
const Z = new THREE.Vector3(0, 0, 1);

const solid = (color) => new THREE.MeshBasicMaterial({ color, depthTest: false, depthWrite: false, transparent: true, opacity: 0.9 });
const HIT = new THREE.MeshBasicMaterial({ visible: false }); // invisible, still hit by the raycaster

// A handle: visible meshes plus a fatter invisible mesh that takes the pointer; drawn on top of the model.
function handle(kind, color, visuals, hit) {
  const group = new THREE.Group();
  const material = solid(color);
  for (const geometry of visuals) group.add(new THREE.Mesh(geometry, material));
  const proxy = new THREE.Mesh(hit, HIT);
  proxy.userData.handle = group;
  group.add(proxy);
  group.userData = { kind, color, material, proxy };
  group.traverse((o) => (o.renderOrder = 1000));
  return group;
}

/**
 * The sections in the scene, kept in `group` (an overlay outside ModelScene.root, so the picking id pass never sees
 * it): a translucent framed rectangle per enabled plane, a gizmo on the active plane (arrow: move along the normal;
 * red/green rings: turn about the plane's own axes), the section box wireframe with a handle on each face and one
 * in the centre (moves the whole box). A press on a handle is taken before NavigationControls sees it; anything else
 * (the rectangles included) goes on to orbit and pick. Call update(camera) before each render: handles keep their
 * size on screen. Dispatches 'change' when only the hover highlight changed.
 */
export class SectionGizmo extends EventTarget {
  constructor(sections, dom) {
    super();
    this.sections = sections;
    this.dom = dom;
    this.camera = null;
    this.group = new THREE.Group();
    this.group.name = 'sections';
    this._raycaster = new THREE.Raycaster();
    this._drag = null;
    this._hovered = null;
    this._buildPlanes();
    this._buildPlaneGizmo();
    this._buildBox();
    sections.addEventListener('change', () => this._sync());
    // Capture on the parent: runs before the canvas listeners of NavigationControls, so a handle press never orbits.
    (dom.parentElement ?? dom).addEventListener('pointerdown', (e) => this._down(e), true);
    dom.addEventListener('pointermove', (e) => this._move(e));
    dom.addEventListener('pointerup', (e) => this._up(e));
    dom.addEventListener('pointercancel', () => this._end());
    dom.addEventListener('lostpointercapture', () => this._end());
    this._sync();
  }

  get dragging() {
    return this._drag !== null;
  }

  // Keeps handles a constant size on screen for `camera` (the one about to render) and hides the ones that point
  // along the line of sight.
  update(camera) {
    this.camera = camera;
    const gizmo = this.planeGizmo;
    if (gizmo.visible) {
      gizmo.scale.setScalar(this._worldPerPixel(gizmo.position) * GIZMO_PX);
      this.arrow.visible = this._across(Z.clone().applyQuaternion(gizmo.quaternion), gizmo.position);
    }
    for (const h of this.boxHandles) {
      const { shown, axis } = h.userData;
      h.visible = shown && (!axis || this._across(new THREE.Vector3().setComponent(AXIS_KEYS.indexOf(axis), 1), h.position));
      if (h.visible) h.scale.setScalar(this._worldPerPixel(h.position) * HANDLE_PX);
    }
  }

  // True when `axis` at `point` is not within 12 degrees of the line of sight.
  _across(axis, point) {
    const cam = this.camera;
    const sight = cam.isOrthographicCamera ? cam.getWorldDirection(new THREE.Vector3()) : point.clone().sub(cam.position).normalize();
    return Math.abs(axis.dot(sight)) < SIGHT_COS;
  }

  _buildPlanes() {
    const square = new THREE.PlaneGeometry(1, 1);
    const outline = new THREE.BufferGeometry().setFromPoints([[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => new THREE.Vector3(x / 2, y / 2, 0)));
    const fill = new THREE.MeshBasicMaterial({ color: COLOR.fill, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false });
    const frame = new THREE.LineBasicMaterial({ color: COLOR.frame });
    this.planeVisuals = Array.from({ length: MAX_PLANES }, () => {
      const visual = new THREE.Group();
      visual.add(new THREE.Mesh(square, fill), new THREE.LineLoop(outline, frame));
      this.group.add(visual);
      return visual;
    });
  }

  // Local frame: Z is the plane normal; unit size, scaled to GIZMO_PX in update().
  _buildPlaneGizmo() {
    const along = (geometry, z) => geometry.rotateX(Math.PI / 2).translate(0, 0, z);
    const arrow = handle('move', COLOR.z,
      [along(new THREE.CylinderGeometry(0.025, 0.025, 1), 0.5), along(new THREE.ConeGeometry(0.08, 0.25), 1.125)],
      along(new THREE.CylinderGeometry(0.12, 0.12, 1.25), 0.625));
    arrow.name = 'arrow';
    this.arrow = arrow;
    const ring = (name, axis, turn) => {
      const r = handle('rotate', COLOR[axis], [turn(new THREE.TorusGeometry(0.8, 0.018, 8, 64))], turn(new THREE.TorusGeometry(0.8, 0.09, 8, 48)));
      r.name = name;
      r.userData.axis = axis;
      return r;
    };
    this.planeGizmo = new THREE.Group();
    this.planeGizmo.add(
      arrow,
      ring('ringX', 'x', (g) => g.rotateY(Math.PI / 2)),
      ring('ringY', 'y', (g) => g.rotateX(Math.PI / 2)),
    );
    this.group.add(this.planeGizmo);
  }

  _buildBox() {
    this.boxWire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), new THREE.LineBasicMaterial({ color: COLOR.frame }));
    this.group.add(this.boxWire);
    const sphere = new THREE.SphereGeometry(1, 16, 12);
    const hit = new THREE.SphereGeometry(1.6, 8, 6);
    this.boxHandles = [];
    for (const axis of AXIS_KEYS) {
      for (const sign of [-1, 1]) {
        const h = handle('face', COLOR[axis], [sphere], hit);
        h.name = `face${sign > 0 ? '+' : '-'}${axis}`;
        Object.assign(h.userData, { axis, sign });
        this.boxHandles.push(h);
      }
    }
    const centre = handle('centre', COLOR.centre, [new THREE.BoxGeometry(1.4, 1.4, 1.4)], hit);
    centre.name = 'centre';
    this.boxHandles.push(centre);
    this.group.add(...this.boxHandles);
  }

  // Places the visuals for the current section state.
  _sync() {
    const s = this.sections;
    const planes = s.mode === 'planes';
    this.planeVisuals.forEach((visual, i) => {
      const plane = s.planes[i];
      visual.visible = planes && !!plane?.enabled;
      if (!visual.visible) return;
      const rect = planeRect(s.modelBox, plane.quaternion, s.origin(i));
      visual.position.copy(rect.center);
      visual.quaternion.copy(plane.quaternion);
      visual.scale.set(rect.width, rect.height, 1);
    });
    const active = s.planes[s.active];
    this.planeGizmo.visible = planes && s.gizmoVisible && !!active?.enabled;
    if (this.planeGizmo.visible) {
      this.planeGizmo.position.copy(s.origin(s.active));
      this.planeGizmo.quaternion.copy(active.quaternion);
    }
    const box = s.mode === 'box' ? s.box : null;
    this.boxWire.visible = !!box;
    for (const h of this.boxHandles) h.visible = h.userData.shown = !!box && s.gizmoVisible; // update() refines
    if (box) {
      const centre = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      this.boxWire.position.copy(centre);
      this.boxWire.scale.copy(size).max(new THREE.Vector3(1e-6, 1e-6, 1e-6));
      for (const h of this.boxHandles) {
        h.position.copy(centre);
        const { axis, sign } = h.userData;
        if (axis) h.position[axis] = sign > 0 ? box.max[axis] : box.min[axis];
      }
    }
  }

  _worldPerPixel(point) {
    const cam = this.camera;
    const height = Math.max(this.dom.clientHeight, 1);
    if (cam.isOrthographicCamera) return (cam.top - cam.bottom) / cam.zoom / height;
    const depth = point.clone().sub(cam.position).dot(cam.getWorldDirection(new THREE.Vector3()));
    return (2 * Math.max(depth, cam.near) * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2))) / height;
  }

  _ray(e) {
    const rect = this.dom.getBoundingClientRect();
    const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, 1 - ((e.clientY - rect.top) / rect.height) * 2);
    this.camera.updateMatrixWorld();
    this._raycaster.setFromCamera(ndc, this.camera);
    return this._raycaster.ray.clone();
  }

  // The shown handle under the pointer, or null.
  _hit(e) {
    if (!this.camera) return null;
    this.update(this.camera);
    this.group.updateMatrixWorld(true);
    const shown = (o) => {
      for (; o && o !== this.group; o = o.parent) if (!o.visible) return false;
      return true;
    };
    const proxies = [];
    this.group.traverse((o) => o.userData.handle && shown(o) && proxies.push(o));
    this._ray(e);
    const hit = this._raycaster.intersectObjects(proxies, false)[0];
    return hit ? hit.object.userData.handle : null;
  }

  _down(e) {
    if (e.target !== this.dom || e.button !== 0) return;
    const h = this._hit(e);
    const start = h && this._start(h, this._ray(e));
    if (!start) return; // nothing to drag: the press goes on to the navigation
    e.stopPropagation();
    e.preventDefault();
    this.dom.setPointerCapture(e.pointerId);
    this._drag = { id: e.pointerId, handle: h, ...start };
    this._highlight(h);
  }

  // What a drag of handle h needs from its start, or null when the ray gives no usable start.
  _start(h, ray) {
    const s = this.sections;
    const { kind } = h.userData;
    if (kind === 'move' || kind === 'rotate') {
      const index = s.active;
      const origin = s.origin(index);
      const quaternion = s.planes[index].quaternion.clone();
      if (kind === 'move') {
        const normal = s.normal(index);
        const s0 = closestOnLine(ray, origin, normal);
        return s0 === null ? null : { index, origin, normal, offset: s.planes[index].offset, s0 };
      }
      const axis = new THREE.Vector3().setComponent(AXIS_KEYS.indexOf(h.userData.axis), 1).applyQuaternion(quaternion);
      const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(axis, origin);
      const from = ray.intersectPlane(plane, new THREE.Vector3())?.sub(origin);
      return from ? { index, origin, quaternion, axis, plane, from } : null;
    }
    const box = s.box.clone();
    if (kind === 'face') {
      const { axis, sign } = h.userData;
      const normal = new THREE.Vector3().setComponent(AXIS_KEYS.indexOf(axis), sign);
      const at = h.position.clone();
      const s0 = closestOnLine(ray, at, normal);
      return s0 === null ? null : { box, normal, at, s0 };
    }
    const facing = this.camera.getWorldDirection(new THREE.Vector3());
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(facing, box.getCenter(new THREE.Vector3()));
    const from = ray.intersectPlane(plane, new THREE.Vector3());
    return from ? { box, plane, from } : null;
  }

  _move(e) {
    const d = this._drag;
    if (!d) return this._hover(e);
    if (e.pointerId !== d.id) return;
    if (e.buttons === 0) return this._end();
    const ray = this._ray(e);
    const s = this.sections;
    const { kind } = d.handle.userData;
    if (kind === 'move') {
      const along = closestOnLine(ray, d.origin, d.normal);
      if (along !== null) s.updatePlane(d.index, { offset: d.offset + along - d.s0 });
    } else if (kind === 'rotate') {
      const to = ray.intersectPlane(d.plane, new THREE.Vector3())?.sub(d.origin);
      if (!to) return;
      const angle = Math.atan2(d.axis.dot(new THREE.Vector3().crossVectors(d.from, to)), d.from.dot(to));
      const quaternion = new THREE.Quaternion().setFromAxisAngle(d.axis, angle).multiply(d.quaternion);
      // Turn about the gizmo point: the plane keeps passing through it.
      const normal = Z.clone().applyQuaternion(quaternion);
      s.updatePlane(d.index, { quaternion, offset: normal.dot(d.origin.clone().sub(s.center)) });
    } else if (kind === 'face') {
      const along = closestOnLine(ray, d.at, d.normal);
      if (along === null) return;
      const { axis, sign } = d.handle.userData;
      const box = d.box.clone();
      const least = 1e-3 * Math.max(...s.modelBox.getSize(new THREE.Vector3()).toArray(), 1e-3);
      const moved = (sign > 0 ? d.box.max[axis] : d.box.min[axis]) + sign * (along - d.s0);
      if (sign > 0) box.max[axis] = Math.max(moved, box.min[axis] + least);
      else box.min[axis] = Math.min(moved, box.max[axis] - least);
      s.setBox(box);
    } else {
      const to = ray.intersectPlane(d.plane, new THREE.Vector3());
      if (to) s.setBox(d.box.clone().translate(to.sub(d.from)));
    }
  }

  _up(e) {
    if (this._drag && e.pointerId === this._drag.id) this._end();
  }

  _end() {
    if (!this._drag) return;
    this._drag = null;
    this._highlight(null);
  }

  _hover(e) {
    if (e.buttons !== 0) return;
    this._highlight(this._hit(e));
  }

  _highlight(h) {
    if (this._hovered === h) return;
    for (const g of [this._hovered, h]) if (g) g.userData.material.color.set(g === h ? COLOR.hover : g.userData.color);
    this._hovered = h;
    this.dom.style.cursor = h ? 'grab' : '';
    this.dispatchEvent(new Event('change'));
  }
}
