import * as THREE from 'three';
import { axisVector, boxPlanes, boxFullyClipped, extentAlong, sectionPlane } from './sectionMath.js';

export const MAX_PLANES = 6;
const MODES = ['off', 'planes', 'box'];
const BOX_MARGIN = 0.05; // of the largest dimension of the elements' box
const Z = new THREE.Vector3(0, 0, 1);

/**
 * Section state, applied to ModelScene.setClipping. Modes are exclusive: 'off', 'planes' (up to 6 planes, an element
 * part is shown when no enabled plane cuts it) or 'box' ('keepInside' shows what is in the box, 'cutInside' hides it).
 * A plane is { axis, quaternion (local Z = normal), offset, flipped, enabled, rotated }: it passes through the model
 * box centre + normal * offset and cuts the side its normal points to (the other side when flipped).
 * Dispatches 'change' after every change.
 */
export class Sections extends EventTarget {
  constructor(scene, modelBox) {
    super();
    this.scene = scene;
    this.modelBox = modelBox.clone();
    this.center = modelBox.getCenter(new THREE.Vector3());
    this.planes = [];
    this.active = -1; // plane that carries the gizmo
    this.box = null;
    this.boxMode = 'keepInside';
    this.gizmoVisible = true;
    this._mode = 'off';
  }

  get mode() {
    return this._mode;
  }

  // 'box' without a box yet takes the box of what is shown.
  setMode(mode) {
    if (!MODES.includes(mode)) throw new RangeError(`Unknown section mode: ${mode}`);
    if (mode === 'box' && !this.box && this.fitBoxToShown()) return;
    this._mode = mode;
    this._changed(true);
  }

  // Index of the new plane through the model centre, or null when there are already 6 or the model is empty.
  addPlane(axis) {
    const normal = axisVector(axis);
    if (this.planes.length >= MAX_PLANES || this.modelBox.isEmpty()) return null;
    const quaternion = new THREE.Quaternion().setFromUnitVectors(Z, normal);
    this.planes.push({ axis, quaternion, offset: 0, flipped: false, enabled: true, rotated: false });
    this.active = this.planes.length - 1;
    this._mode = 'planes';
    this._changed(true);
    return this.active;
  }

  removePlane(i) {
    this._plane(i);
    this.planes.splice(i, 1);
    if (this.active >= this.planes.length || this.active > i) this.active--;
    this._changed(true);
  }

  // { offset, flipped, enabled, quaternion }; the quaternion turns the plane freely (local Z = new normal).
  updatePlane(i, { offset, flipped, enabled, quaternion }) {
    const plane = this._plane(i);
    if (offset !== undefined) {
      if (!Number.isFinite(offset)) throw new RangeError(`Offset must be a finite number, got ${offset}.`);
      plane.offset = offset;
    }
    if (flipped !== undefined) plane.flipped = !!flipped;
    if (enabled !== undefined) plane.enabled = !!enabled;
    if (quaternion) {
      plane.quaternion.copy(quaternion).normalize();
      plane.rotated = this.normal(i).angleTo(axisVector(plane.axis)) > 1e-6;
    }
    this._changed(true);
  }

  setActivePlane(i) {
    this._plane(i);
    this.active = i;
    this._changed(false);
  }

  normal(i) {
    return Z.clone().applyQuaternion(this._plane(i).quaternion);
  }

  // Half the model's size along the plane normal: the range of its offset that still crosses the model.
  extent(i) {
    return extentAlong(this.modelBox, this.normal(i));
  }

  // Point of the plane nearest to the model centre (where the gizmo sits).
  origin(i) {
    return this.center.clone().addScaledVector(this.normal(i), this._plane(i).offset);
  }

  clipPlane(i) {
    const plane = this._plane(i);
    return sectionPlane(this.normal(i), this.center, plane.offset, plane.flipped);
  }

  setBox(box) {
    if (box.isEmpty()) throw new RangeError('The section box is empty.');
    this.box = box.clone();
    this._mode = 'box';
    this._changed(true);
  }

  setBoxMode(mode) {
    if (mode !== 'keepInside' && mode !== 'cutInside') throw new RangeError(`Unknown box mode: ${mode}`);
    this.boxMode = mode;
    this._changed(true);
  }

  // Box around the elements plus 5 % of its largest dimension on every side; false when there is nothing to fit.
  fitBoxToElements(indices) {
    const box = new THREE.Box3();
    for (const i of indices) box.union(this.scene.elementBox(i));
    if (box.isEmpty()) return false;
    const size = box.getSize(new THREE.Vector3());
    this.setBox(box.expandByScalar(BOX_MARGIN * Math.max(size.x, size.y, size.z)));
    return true;
  }

  // Box of what is shown, a hair larger so faces lying on it are not cut by rounding; false when nothing is shown.
  fitBoxToShown() {
    const box = this.scene.visibleBox();
    if (box.isEmpty()) return false;
    const size = box.getSize(new THREE.Vector3());
    this.setBox(box.expandByScalar(1e-3 * Math.max(size.x, size.y, size.z)));
    return true;
  }

  setGizmoVisible(visible) {
    this.gizmoVisible = !!visible;
    this._changed(false);
  }

  reset() {
    this.planes = [];
    this.active = -1;
    this.box = null;
    this._mode = 'off';
    this._changed(true);
  }

  // The planes and rule handed to ModelScene.setClipping for the current mode.
  clipping() {
    if (this._mode === 'planes') {
      const planes = this.planes.flatMap((plane, i) => (plane.enabled ? [this.clipPlane(i)] : []));
      return { planes, intersection: false };
    }
    if (this._mode === 'box' && this.box) return boxPlanes(this.box, this.boxMode);
    return { planes: [], intersection: false };
  }

  // True when the current section cuts the whole of `box` (an element's box) away.
  isCut(box) {
    const { planes, intersection } = this.clipping();
    return boxFullyClipped(box, planes, intersection);
  }

  _plane(i) {
    const plane = this.planes[i];
    if (!Number.isInteger(i) || !plane) throw new RangeError(`Plane index ${i} is out of range 0..${this.planes.length - 1}.`);
    return plane;
  }

  _changed(clipping) {
    if (clipping) {
      const { planes, intersection } = this.clipping();
      this.scene.setClipping(planes, intersection);
    }
    this.dispatchEvent(new Event('change'));
  }
}
