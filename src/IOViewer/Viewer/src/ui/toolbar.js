import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el, iconButton } from './dom.js';

// Groups and their order; labels come from t('group.<id>'), tooltips from t('tool.<id>'), icons from icons[<id>].
export const toolbarGroups = [
  { id: 'navigation', items: ['orbit', 'pan', 'fit', 'projection'] },
  { id: 'sections', items: ['plane', 'box', 'resetSections'] },
  { id: 'measure', items: ['distance'] },
  { id: 'display', items: ['displayMode', 'grids', 'opacity'] },
  { id: 'view', items: ['fullscreen', 'settings'] },
];

/**
 * Bottom toolbar of labelled groups. Every button starts disabled; setHandler(id, fn) enables it,
 * setEnabled(id, bool) toggles it, setActive(id, bool) paints it as the active tool.
 * Disabled buttons use aria-disabled so their tooltip still shows.
 */
export function createToolbar(root, groups) {
  const bar = el('div', 'ioviewer-toolbar ioviewer-floating');
  bar.setAttribute('role', 'toolbar');
  const buttons = new Map(); // id -> { button, handler }

  for (const group of groups) {
    const box = el('div', 'ioviewer-toolbar-group');
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', t(`group.${group.id}`));
    const row = el('div', 'ioviewer-toolbar-row');
    for (const id of group.items) {
      const button = iconButton('ioviewer-tool', icons[id], t(`tool.${id}`));
      button.dataset.tool = id;
      button.setAttribute('aria-disabled', 'true');
      const entry = { button, handler: null };
      button.addEventListener('click', () => {
        if (button.getAttribute('aria-disabled') !== 'true') entry.handler?.();
      });
      buttons.set(id, entry);
      row.append(button);
    }
    box.append(row, el('div', 'ioviewer-toolbar-label', t(`group.${group.id}`)));
    bar.append(box);
  }
  root.append(bar);

  function get(id) {
    const entry = buttons.get(id);
    if (!entry) throw new RangeError(`Unknown tool: ${id}`);
    return entry;
  }

  function setEnabled(id, enabled) {
    get(id).button.setAttribute('aria-disabled', String(!enabled));
  }

  return {
    element: bar,
    setHandler(id, handler) {
      get(id).handler = handler;
      setEnabled(id, true);
    },
    setEnabled,
    setActive(id, active) {
      const { button } = get(id);
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    },
  };
}
