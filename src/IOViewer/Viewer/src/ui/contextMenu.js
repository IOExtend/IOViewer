import { t } from '../i18n.js';
import { el } from './dom.js';

// Menu layouts: item ids in order, '-' is a separator. Labels come from t('menu.<id>').
export const menus = {
  element: ['properties', 'hide', 'isolate', 'showAll', '-', 'zoomTo', 'sectionBox', '-', 'copyId'],
  empty: ['showAll', 'fitAll', 'resetSections'],
};
const shortcuts = { hide: 'H', isolate: 'I', showAll: 'Shift+H', zoomTo: 'F' };
const MARGIN = 4; // px kept free between the menu and the window edge

/**
 * Right-click menu. open(kind, x, y, target) shows menus[kind] at client (x, y), kept inside the window;
 * an item calls its handler with `target` and closes the menu. setItem(id, { enabled, handler }) configures
 * an item; items without a handler are shown disabled. Closes on outside press, wheel, scroll and resize.
 */
export function createContextMenu(root) {
  const menu = el('div', 'ioviewer-context-menu');
  menu.setAttribute('role', 'menu');
  menu.hidden = true;
  root.append(menu);
  const items = new Map(Object.values(menus).flat().filter((id) => id !== '-').map((id) => [id, { enabled: false, handler: null }]));

  function close() {
    if (menu.hidden) return;
    menu.hidden = true;
    menu.replaceChildren();
    window.removeEventListener('pointerdown', outside, true);
    window.removeEventListener('wheel', close, true);
    window.removeEventListener('scroll', close, true);
    window.removeEventListener('resize', close);
  }

  function outside(e) {
    if (!menu.contains(e.target)) close();
  }

  function open(kind, x, y, target) {
    const layout = menus[kind];
    if (!layout) throw new RangeError(`Unknown menu: ${kind}`);
    close();
    for (const id of layout) {
      if (id === '-') {
        menu.append(el('div', 'ioviewer-menu-separator'));
        continue;
      }
      const item = items.get(id);
      const button = el('button', 'ioviewer-menu-item');
      button.type = 'button';
      button.dataset.item = id;
      button.setAttribute('role', 'menuitem');
      button.disabled = !item.enabled;
      button.append(el('span', '', t(`menu.${id}`)), el('kbd', '', shortcuts[id] ?? ''));
      button.addEventListener('click', () => {
        close();
        item.handler(target);
      });
      menu.append(button);
    }
    menu.hidden = false;
    const { width, height } = menu.getBoundingClientRect();
    menu.style.left = `${Math.max(MARGIN, Math.min(x, innerWidth - width - MARGIN))}px`;
    menu.style.top = `${Math.max(MARGIN, Math.min(y, innerHeight - height - MARGIN))}px`;
    window.addEventListener('pointerdown', outside, true);
    window.addEventListener('wheel', close, true);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
  }

  function setItem(id, { enabled = true, handler }) {
    const item = items.get(id);
    if (!item) throw new RangeError(`Unknown menu item: ${id}`);
    if (handler) item.handler = handler;
    item.enabled = enabled && !!item.handler;
  }

  return { element: menu, open, close, setItem, get isOpen() { return !menu.hidden; } };
}
