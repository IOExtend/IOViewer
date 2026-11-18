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
  constructor(scene, modelBox, initial) {
    super();
    this.scene = scene;
    this.modelBox = modelBox.clone();
    this.center = modelBox.getCenter(new THREE.Vector3());
    this.planes = [];
    this.active = -1; // plane that carries the gizmo
    this.box = null;
    this.boxYaw = 0;
    this.boxMode = 'keepInside';
    this.fill = false;
    this.gizmoVisible = true;
    this._mode = 'off';
    if (initial) this.restore(initial);
  }

  // Replace the clipping snapshot from the same format as the initial section.
  restore({ planes, box, cutInside }) {
    if (this.modelBox.isEmpty()) return;
    this.planes = planes.map(({ axis, normal: components, offset, flipped }) => {
      const normal = new THREE.Vector3().fromArray(components);
      const quaternion = new THREE.Quaternion().setFromUnitVectors(Z, normal);
      // The payload measures from the RTC origin. The controls measure from the model centre.
      return { axis, quaternion, offset: offset - normal.dot(this.center), flipped, enabled: true, rotated: false };
    });
    this.active = this.planes.length ? 0 : -1;
    this.box = box ? new THREE.Box3(new THREE.Vector3().fromArray(box.min), new THREE.Vector3().fromArray(box.max)) : null;
    this.boxYaw = 0;
    this.boxMode = cutInside ? 'cutInside' : 'keepInside';
    this.gizmoVisible = false;
    this.setMode(this.box ? 'box' : this.planes.length ? 'planes' : 'off');
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
      plane.rotated = plane.axis !== 'custom' && this.normal(i).angleTo(axisVector(plane.axis)) > 1e-6;
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

  // Bounds describe the unrotated dimensions about the box centre. Explicit fits start on the world axes.
  setBox(box, yaw = 0) {
    if (box.isEmpty()) throw new RangeError('The section box is empty.');
    yaw = normalizeYaw(yaw);
    this.box = box.clone();
    this.boxYaw = yaw;
    this._mode = 'box';
    this._changed(true);
  }

  setBoxYaw(yaw) {
    if (!this.box) return;
    this.boxYaw = normalizeYaw(yaw);
    this._changed(this.mode === 'box');
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

  setFill(enabled) {
    this.fill = !!enabled;
    this._changed(false);
  }

  reset() {
    this.planes = [];
    this.active = -1;
    this.box = null;
    this.boxYaw = 0;
    this._mode = 'off';
    this._changed(true);
  }

  // The planes and rule handed to ModelScene.setClipping for the current mode.
  clipping() {
    if (this._mode === 'planes') {
      const planes = this.planes.flatMap((plane, i) => (plane.enabled ? [this.clipPlane(i)] : []));
      return { planes, intersection: false };
    }
    if (this._mode === 'box' && this.box) {
      const clip = boxPlanes(this.box, this.boxMode, this.boxYaw);
      if (!clip.intersection && this.boxYaw !== 0) {
        // The rotated box's axes and the world axes are all the separating axes for this Z-only rotation.
        const center = this.box.getCenter(new THREE.Vector3());
        const half = this.box.getSize(new THREE.Vector3()).multiplyScalar(0.5);
        const c = Math.abs(Math.cos(this.boxYaw)), s = Math.abs(Math.sin(this.boxYaw));
        half.set(c * half.x + s * half.y, s * half.x + c * half.y, half.z);
        clip.bounds = new THREE.Box3(center.clone().sub(half), center.add(half));
      }
      return clip;
    }
    return { planes: [], intersection: false };
  }

  // True when the current section cuts the whole of `box` (an element's box) away.
  isCut(box, { planes, intersection, bounds } = this.clipping()) {
    return (bounds && !box.isEmpty() && !bounds.intersectsBox(box)) || boxFullyClipped(box, planes, intersection);
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

function normalizeYaw(yaw) {
  if (!Number.isFinite(yaw)) throw new RangeError('The section box angle must be finite.');
  return yaw >= -Math.PI && yaw <= Math.PI ? yaw : THREE.MathUtils.euclideanModulo(yaw + Math.PI, 2 * Math.PI) - Math.PI;
}
