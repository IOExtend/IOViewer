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
    name.textContent = `${i + 1}. ${plane.axis.toUpperCase()}${rotated}`;
    row.classList.toggle('active', sections.active === i);
    flip.setAttribute('aria-pressed', String(plane.flipped));
    enabled.input.checked = plane.enabled;
    const extent = sections.extent(i);
    slider.min = String(-extent);
    slider.max = String(extent);
    slider.value = String(plane.offset);
  };
  return { element: row, update };
}

/**
 * The «Сечения» panel and the section tools: toolbar `plane` / `box` / `resetSections`, context menu
 * «Бокс сечения по объекту» / «Сбросить сечения». Tools and panel stay off for a model with no geometry.
 */
export function mountSections({ root, shell, toolbar, contextMenu, sections, selection }) {
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
  const boxBlock = el('div', 'ioviewer-section-block');
  boxBlock.append(boxMode.element, fit);
  const gizmo = checkbox(t('sections.showGizmo'), (on) => sections.setGizmoVisible(on));

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
    gizmo.input.checked = sections.gizmoVisible;
    toolbar.setActive('plane', sections.mode === 'planes');
    toolbar.setActive('box', sections.mode === 'box');
  };
  const updateFit = () => (fit.disabled = selection.size === 0);

  shell.registerPanel('sections', {
    icon: icons.sections,
    title: t('panel.sections'),
    visible: !sections.modelBox.isEmpty(),
    render: (body) => body.append(mode.element, planesBlock, boxBlock, gizmo.element),
  });
  sections.addEventListener('change', update);
  selection.addEventListener('change', updateFit);
  update();
  updateFit();

  toolbar.setActive('plane', false);
  toolbar.setActive('box', false);
  if (sections.modelBox.isEmpty()) return;
  const open = () => shell.openPanel('sections');
  toolbar.setHandler('plane', () => {
    addPlane();
    open();
  });
  toolbar.setHandler('box', () => {
    if (!(selection.size && fitSelection()) && !sections.fitBoxToShown()) return;
    open();
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
