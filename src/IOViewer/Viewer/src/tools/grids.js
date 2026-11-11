import * as THREE from 'three';
import { el, placeLabel } from '../ui/dom.js';

/**
 * Grid axes from META grids ([{name, start, end}] in RTC): thin lines at their own elevation in `group` (an overlay
 * outside ModelScene.root, so never picked), drawn over the model, and a round label with the axis name at both ends
 * of each line, placed by update(camera, rect) before each render. Shown from the start when there are any.
 * Dispatches 'change' when shown or hidden.
 */
export class GridAxes extends EventTarget {
  constructor(root, grids) {
    super();
    this.count = grids.length;
    this.group = new THREE.LineSegments(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(grids.flatMap((g) => [...g.start, ...g.end]), 3)),
      new THREE.LineBasicMaterial({ color: '#93c5fd', transparent: true, opacity: 0.55, depthTest: false, depthWrite: false }),
    );
    this.group.name = 'grids';
    this.group.geometry.computeBoundingBox();
    this.box = this.group.geometry.boundingBox; // all the lines; empty without grids
    this.group.renderOrder = 999;
    this._labels = grids.flatMap((g) =>
      [g.start, g.end].map((p) => ({ element: el('div', 'ioviewer-grid-label', g.name), point: new THREE.Vector3(...p) })),
    );
    const layer = el('div', 'ioviewer-grid-labels');
    layer.append(...this._labels.map((l) => l.element));
    root.prepend(layer); // under the panels and the toolbar
    this._layer = layer;
    this.setVisible(this.count > 0);
  }

  get visible() {
    return this.group.visible;
  }

  setVisible(visible) {
    this.group.visible = !!visible;
    this._layer.hidden = !visible;
    this.dispatchEvent(new Event('change'));
  }

  update(camera, rect) {
    if (!this.visible) return;
    for (const { element, point } of this._labels) placeLabel(element, point, camera, rect);
  }
}
