import * as THREE from 'three';
import { gridPoints } from '../data.js';
import { el, placeLabel } from '../ui/dom.js';

/**
 * Grid axes from META grids (endpoint pairs or paths in RTC): thin lines at their own elevation in `group` (an overlay
 * outside ModelScene.root, so never picked), drawn over the model, and a round label with the axis name at both ends
 * of each line, placed by update(camera, rect) before each render. Shown from the start when there are any.
 * Dispatches 'change' when shown or hidden.
 */
export class GridAxes extends EventTarget {
  constructor(root, grids) {
    super();
    const positions = [];
    this._labels = [];
    this.count = 0;
    for (const grid of grids) {
      const points = gridPoints(grid);
      if (points.length < 2) continue;
      this.count++;
      for (let i = 1; i < points.length; i++) positions.push(...points[i - 1], ...points[i]);
      for (const point of [points[0], points[points.length - 1]])
        this._labels.push({ element: el('div', 'ioviewer-grid-label', grid.name), point: new THREE.Vector3(...point) });
    }
    this.group = new THREE.LineSegments(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)),
      new THREE.LineBasicMaterial({ color: '#93c5fd', transparent: true, opacity: 0.55, depthTest: false, depthWrite: false }),
    );
    this.group.name = 'grids';
    this.group.geometry.computeBoundingBox();
    this.box = this.group.geometry.boundingBox; // all the lines; empty without grids
    this.group.renderOrder = 999;
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
