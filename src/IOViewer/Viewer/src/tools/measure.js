import * as THREE from 'three';
import { lang, t } from '../i18n.js';
import { el, placeLabel } from '../ui/dom.js';

const COLOR = '#facc15';
const MARKER_PX = 9;

// «12,35 м» / "12.35 m": metres with 2 decimals, no thousands separator.
export function formatDistance(meters, language = lang) {
  const number = new Intl.NumberFormat(language, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
  return `${number.format(meters)} ${t('unit.m', language)}`;
}

/**
 * Distance tool. While `active`, add(point) places points on the model: the first starts a measurement, the second
 * ends it (a line with end markers and a label in metres at its midpoint), the next one starts a new measurement.
 * The visuals live in `group`, an overlay outside ModelScene.root drawn on top of the model; the label is a DOM
 * element in `root`, placed by update(camera, rect) before each render. Dispatches 'change' after every change.
 */
export class Measure extends EventTarget {
  constructor(root) {
    super();
    this.active = false;
    this.points = [];
    this.group = new THREE.Group();
    this.group.name = 'measure';
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const overlay = { color: COLOR, depthTest: false, depthWrite: false, transparent: true };
    this._line = new THREE.Line(geometry, new THREE.LineBasicMaterial(overlay));
    this._markers = new THREE.Points(geometry, new THREE.PointsMaterial({ ...overlay, size: MARKER_PX, sizeAttenuation: false }));
    for (const object of [this._line, this._markers]) {
      object.frustumCulled = false; // the points move; the bounds are never recomputed
      object.renderOrder = 1001;
      this.group.add(object);
    }
    this.label = el('div', 'ioviewer-measure-label');
    this.label.hidden = true;
    root.prepend(this.label); // under the panels and the toolbar
    this._sync();
  }

  // Distance between the two points of a finished measurement, else null.
  get distance() {
    return this.points.length === 2 ? this.points[0].distanceTo(this.points[1]) : null;
  }

  // Turning the tool off clears the measurement.
  setActive(active) {
    this.active = !!active;
    if (!this.active) this.points = [];
    this._sync();
  }

  add(point) {
    if (!this.active) return;
    this.points = this.points.length === 1 ? [this.points[0], point.clone()] : [point.clone()];
    this._sync();
  }

  // True when there was something to clear.
  clear() {
    if (this.points.length === 0) return false;
    this.points = [];
    this._sync();
    return true;
  }

  update(camera, rect) {
    if (this.distance === null) return;
    placeLabel(this.label, this.points[0].clone().lerp(this.points[1], 0.5), camera, rect);
  }

  _sync() {
    const position = this._line.geometry.attributes.position;
    this.points.forEach((p, i) => position.setXYZ(i, p.x, p.y, p.z));
    position.needsUpdate = true;
    this._line.geometry.setDrawRange(0, this.points.length);
    this._line.visible = this.points.length === 2;
    this._markers.visible = this.points.length > 0;
    this.label.hidden = this.distance === null;
    if (this.distance !== null) this.label.textContent = formatDistance(this.distance);
    this.dispatchEvent(new Event('change'));
  }
}
