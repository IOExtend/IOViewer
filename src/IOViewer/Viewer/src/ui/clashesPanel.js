import * as THREE from 'three';
import { t } from '../i18n.js';
import { resolveClashElements } from '../model/clashTargets.js';
import { formatDistance } from '../tools/measure.js';
import { icons } from './icons.js';
import { el } from './dom.js';
import { rowButton } from './viewsPanel.js';
import { visibleRange } from './tree.js';

const STATUSES = ['New', 'Active', 'Reviewed', 'Approved', 'Resolved'];
const ROW_STRIDE = 27; // 26 px row plus the panel's 1 px gap
const OVERSCAN = 8;
const MARKER_PX = 14;
const MIN_DISTANCE = 2; // m from the clash point
const FALLBACK_DIRECTION = new THREE.Vector3(1, -1, 0.8).normalize();

/**
 * «Коллизии»: clashes grouped by test (collapsible), each with its status and distance. A click selects the two
 * elements (resolveClashElements; none found clears the selection), flies the camera to the clash point from the
 * current direction at 3× the larger element's size (at least 2 m), and marks the point until another clash is
 * chosen or the panel closes. The marker is in `group`, an overlay outside ModelScene.root.
 */
export function mountClashes({ shell, tests, elements, scene, controls, selection }) {
  const group = new THREE.Group();
  group.name = 'clash-marker';
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3));
  const overlay = { color: '#ef4444', depthTest: false, depthWrite: false, transparent: true };
  const marker = new THREE.Points(geometry, new THREE.PointsMaterial({ ...overlay, size: MARKER_PX, sizeAttenuation: false }));
  marker.frustumCulled = false; // the point moves; the bounds are never recomputed
  marker.renderOrder = 1002;
  group.add(marker);
  group.visible = false;
  let activeRow = null;
  let activeClash = null;

  function hideMarker() {
    group.visible = false;
    activeRow?.removeAttribute('aria-current');
    activeRow = null;
    activeClash = null;
    controls.setExtraBounds('clash', null); // also renders
  }

  function show(clash, row) {
    const found = resolveClashElements(clash, elements);
    if (found.length) selection.set(found);
    else selection.clear();

    const point = new THREE.Vector3(...clash.point);
    let size = 0;
    for (const i of found) {
      const box = scene.elementBox(i);
      if (!box.isEmpty()) size = Math.max(size, ...box.getSize(new THREE.Vector3()).toArray());
    }
    const direction = controls.camera.position.clone().sub(controls.target);
    if (direction.lengthSq() < 1e-12) direction.copy(FALLBACK_DIRECTION);
    const distance = Math.max(3 * size, MIN_DISTANCE);
    controls.animateTo({ position: direction.normalize().multiplyScalar(distance).add(point), target: point });

    geometry.attributes.position.setXYZ(0, point.x, point.y, point.z);
    geometry.attributes.position.needsUpdate = true;
    group.visible = true;
    activeRow?.removeAttribute('aria-current');
    activeRow = row;
    activeClash = clash;
    row.setAttribute('aria-current', 'true');
    controls.setExtraBounds('clash', new THREE.Box3(point.clone(), point.clone()));
  }

  function clashRow(clash) {
    const row = rowButton('ioviewer-row ioviewer-clash', String(clash.name ?? ''));
    row.setAttribute('title', `${clash.name ?? ''}: ${clash.element1Name ?? ''} — ${clash.element2Name ?? ''}`);
    const known = STATUSES.includes(clash.status);
    const status = el('span', 'ioviewer-clash-status', known ? t(`clash.${clash.status}`) : String(clash.status ?? ''));
    if (known) status.dataset.status = clash.status;
    // A distance the source does not report is null: nothing is shown.
    const distance = typeof clash.distance === 'number' ? formatDistance(clash.distance) : '';
    row.append(status, el('span', 'ioviewer-clash-distance', distance));
    if (clash === activeClash) {
      activeRow = row;
      row.setAttribute('aria-current', 'true');
    }
    row.addEventListener('click', () => show(clash, row));
    return row;
  }

  function testGroup(test, refresh) {
    const box = el('div', 'ioviewer-clash-test');
    const header = el('button', 'ioviewer-row ioviewer-clash-header');
    header.type = 'button';
    header.setAttribute('aria-expanded', 'true');
    const title = `${test.name ?? ''} (${test.clashes.length})`;
    header.setAttribute('title', title);
    header.insertAdjacentHTML('afterbegin', icons.chevron); // static icon markup
    header.append(el('span', 'ioviewer-row-name', title));
    const list = el('div', 'ioviewer-clash-list');
    list.style.height = `${Math.max(0, test.clashes.length * ROW_STRIDE - 1)}px`;
    header.addEventListener('click', () => {
      list.hidden = !list.hidden;
      header.setAttribute('aria-expanded', String(!list.hidden));
      refresh();
    });
    box.append(header, list);
    return { box, list, clashes: test.clashes, rows: new Map() };
  }

  function renderRows({ list, clashes, rows }, { start, end }) {
    for (const [index, row] of rows) {
      if (index < start || index >= end) {
        row.remove();
        rows.delete(index);
      }
    }
    let next = null;
    for (let i = end - 1; i >= start; i--) {
      let row = rows.get(i);
      if (!row) {
        row = clashRow(clashes[i]);
        row.style.top = `${i * ROW_STRIDE}px`;
        list.insertBefore(row, next);
        rows.set(i, row);
      }
      next = row;
    }
  }

  function renderPanel(body) {
    if (!tests.length) return;
    body.classList.add('ioviewer-clashes-body');
    const groups = tests.map((test) => testGroup(test, refresh));
    for (const entry of groups) body.append(entry.box);

    function refresh() {
      const top = body.scrollTop;
      const height = body.clientHeight;
      // Read every offset before replacing any rows so each scroll has one layout read.
      const ranges = groups.map(({ list, clashes }) => height && !list.hidden
        ? visibleRange(top - list.offsetTop, ROW_STRIDE, height, clashes.length, OVERSCAN)
        : { start: 0, end: 0 });
      groups.forEach((entry, i) => renderRows(entry, ranges[i]));
    }

    body.addEventListener('scroll', refresh);
    // Native focus scrolls a row into view before the queued scroll event runs.
    body.addEventListener('focusin', refresh);
    new ResizeObserver(refresh).observe(body);
  }

  shell.registerPanel('clashes', {
    icon: icons.clashes,
    title: t('panel.clashes'),
    visible: tests.length > 0,
    render: renderPanel,
    onClose: () => group.visible && hideMarker(),
  });

  return { group };
}
