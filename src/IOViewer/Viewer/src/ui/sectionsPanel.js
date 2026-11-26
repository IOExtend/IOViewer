import { t } from '../i18n.js';
import { MAX_PLANES } from '../tools/sections.js';
import { icons } from './icons.js';
import { el, iconButton } from './dom.js';
import { showToast } from './statusBar.js';

// Row of toggle buttons; select(value) is called on click, update(value) marks the pressed one.
export function segmented(label, options, select) {
  const group = el('div', 'ioviewer-segmented');
  group.setAttribute('role', 'group');
  group.setAttribute('aria-label', label);
  const buttons = options.map(([value, text]) => {
    const button = el('button', '', text);
    button.type = 'button';
    button.dataset.value = value;
    button.addEventListener('click', () => select(value));
    group.append(button);
    return button;
  });
  const update = (value) => buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.value === value)));
  return { element: group, update };
}

function checkbox(text, change) {
  const label = el('label', 'ioviewer-check');
  const input = el('input');
  input.type = 'checkbox';
  input.addEventListener('change', () => change(input.checked));
  label.append(input, el('span', '', text));
  return { element: label, input };
}

// One plane: name (axis, "rotated"), flip, on/off, delete, and a position slider across the model along its normal.
function planeRow(sections, i) {
  const row = el('li', 'ioviewer-section-plane');
  row.addEventListener('pointerdown', () => sections.active !== i && sections.setActivePlane(i));
  const name = el('span', 'ioviewer-section-name');
  const flip = iconButton('ioviewer-icon-button', icons.flip, t('sections.flip'));
  flip.addEventListener('click', () => sections.updatePlane(i, { flipped: !sections.planes[i].flipped }));
  const enabled = checkbox(t('sections.enabled'), (on) => sections.updatePlane(i, { enabled: on }));
  const remove = iconButton('ioviewer-icon-button', icons.remove, t('sections.delete'));
  remove.addEventListener('click', () => sections.removePlane(i));
  const slider = el('input', 'ioviewer-section-slider');
  slider.type = 'range';
  slider.step = 'any';
  slider.setAttribute('aria-label', t('sections.position'));
  slider.addEventListener('input', () => sections.updatePlane(i, { offset: Number(slider.value) }));
  const head = el('div', 'ioviewer-section-head');
  head.append(name, flip, enabled.element, remove);
  row.append(head, slider);
  const update = () => {
    const plane = sections.planes[i];
    const rotated = plane.rotated ? ` (${t('sections.rotated')})` : '';
    const axis = plane.axis === 'custom' ? t('sections.custom') : plane.axis.toUpperCase();
    name.textContent = `${i + 1}. ${axis}${rotated}`;
    row.classList.toggle('active', sections.active === i);
    flip.setAttribute('aria-pressed', String(plane.flipped));
    enabled.input.checked = plane.enabled;
    const extent = sections.extent(i);
    slider.min = String(Math.min(-extent, plane.offset));
    slider.max = String(Math.max(extent, plane.offset));
    slider.value = String(plane.offset);
  };
  return { element: row, update };
}

/**
 * The «Сечения» panel and the section tools: toolbar `plane` / `box` / `resetSections`, context menu
 * «Бокс сечения по объекту» / «Сбросить сечения». Tools and panel stay off for a model with no geometry.
 */
export function mountSections({ root, shell, toolbar, contextMenu, sections, selection, canFill, hasMeshes = true }) {
  let axis = 'z'; // axis for new planes, chosen in the panel
  const addPlane = () => {
    if (sections.addPlane(axis) !== null) return;
    sections.setMode('planes');
    showToast(root, t('sections.maxPlanes'));
  };
  const selected = () => [...selection.values()];
  const fitSelection = () => sections.fitBoxToElements(selected());

  const mode = segmented(t('sections.mode'), [['planes', t('sections.planes')], ['box', t('sections.box')], ['off', t('sections.off')]],
    (value) => sections.setMode(value));
  const axes = segmented(t('sections.axis'), ['x', 'y', 'z'].map((a) => [a, a.toUpperCase()]), (value) => axes.update((axis = value)));
  axes.update(axis);
  const add = el('button', 'ioviewer-text-button', t('sections.addPlane'));
  add.type = 'button';
  add.addEventListener('click', addPlane);
  const list = el('ul', 'ioviewer-section-list');
  const empty = el('div', 'ioviewer-section-empty', t('sections.noPlanes'));
  const planesBlock = el('div', 'ioviewer-section-block');
  const axisRow = el('div', 'ioviewer-section-row');
  axisRow.append(el('span', '', t('sections.axis')), axes.element, add);
  planesBlock.append(axisRow, list, empty);

  const boxMode = segmented(t('sections.box'), [['keepInside', t('sections.keepInside')], ['cutInside', t('sections.cutInside')]],
    (value) => sections.setBoxMode(value));
  const fit = el('button', 'ioviewer-text-button', t('sections.fitSelection'));
  fit.type = 'button';
  fit.addEventListener('click', fitSelection);
  const angle = el('input', 'ioviewer-section-slider');
  Object.assign(angle, { type: 'range', min: '-180', max: '180', step: '1' });
  angle.addEventListener('input', () => sections.setBoxYaw(Number(angle.value) * Math.PI / 180));
  const degrees = el('span');
  degrees.setAttribute('aria-hidden', 'true');
  const yaw = el('label', 'ioviewer-section-row');
  yaw.append(el('span', '', t('sections.boxYaw')), angle, degrees);
  const boxBlock = el('div', 'ioviewer-section-block');
  boxBlock.append(boxMode.element, yaw, fit);
  const gizmo = checkbox(t('sections.showGizmo'), (on) => sections.setGizmoVisible(on));
  const fill = checkbox(t('sections.fill'), (on) => sections.setFill(on));
  if (!canFill) fill.element.title = t(hasMeshes ? 'sections.fillUnavailable' : 'sections.fillNeedsMeshes');

  let rows = [];
  const update = () => {
    mode.update(sections.mode);
    planesBlock.hidden = sections.mode !== 'planes';
    boxBlock.hidden = sections.mode !== 'box';
    add.disabled = sections.planes.length >= MAX_PLANES;
    if (rows.length !== sections.planes.length) {
      rows = sections.planes.map((_, i) => planeRow(sections, i));
      list.replaceChildren(...rows.map((r) => r.element));
    }
    rows.forEach((r) => r.update());
    empty.hidden = rows.length > 0;
    boxMode.update(sections.boxMode);
    angle.value = String(Math.round(sections.boxYaw * 180 / Math.PI));
    degrees.textContent = `${angle.value}°`;
    angle.setAttribute('aria-valuetext', degrees.textContent);
    gizmo.input.checked = sections.gizmoVisible;
    fill.input.checked = sections.fill;
    const cuts = sections.mode === 'box' || (sections.mode === 'planes' && sections.planes.some((plane) => plane.enabled));
    fill.input.disabled = !canFill || !cuts;
    toolbar.setActive('plane', sections.mode === 'planes');
    toolbar.setActive('box', sections.mode === 'box');
  };
  const updateFit = () => (fit.disabled = selection.size === 0);

  shell.registerPanel('sections', {
    icon: icons.sections,
    title: t('panel.sections'),
    visible: !sections.modelBox.isEmpty(),
    render: (body) => body.append(mode.element, planesBlock, boxBlock, fill.element, gizmo.element),
  });
  sections.addEventListener('change', update);
  selection.addEventListener('change', updateFit);
  update();
  updateFit();

  if (sections.modelBox.isEmpty()) return;
  const open = () => shell.openPanel('sections');
  toolbar.setHandler('plane', () => {
    addPlane();
    open();
  });
  toolbar.setHandler('box', () => {
    if (sections.mode === 'box' || (selection.size && fitSelection()) || sections.fitBoxToShown()) open();
  });
  toolbar.setHandler('resetSections', () => sections.reset());
  contextMenu.setItem('sectionBox', {
    handler: (i) => {
      sections.fitBoxToElements(selection.has(i) ? selected() : [i]);
      open();
    },
  });
  contextMenu.setItem('resetSections', { handler: () => sections.reset() });
}
