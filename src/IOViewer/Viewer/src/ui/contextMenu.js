import { t } from '../i18n.js';
import { el, swallowPress } from './dom.js';

// Menu layouts: item ids in order, '-' is a separator. Labels come from t('menu.<id>').
export const menus = {
  element: ['properties', 'hide', 'isolate', 'showAll', '-', 'zoomTo', 'sectionBox', '-', 'copyId'],
  empty: ['showAll', 'fitAll', 'resetSections'],
};
const shortcuts = { hide: 'H', isolate: 'I', showAll: 'Shift+H', zoomTo: 'F' };
const MARGIN = 4; // px kept free between the menu and the window edge

/**
 * Context menu. open(kind, x, y, target) shows menus[kind] at client (x, y), kept inside the window;
 * an item calls its handler with `target` and closes the menu. setItem(id, { enabled, handler }) configures
 * an item; items without a handler are shown disabled. Closes on wheel, resize, page scroll (not on scrolling inside
 * the UI panels, which cannot move the menu) and on a press outside it; that press only dismisses the menu,
 * so it never reaches the model or the panels (no pick, no selection change).
 */
export function createContextMenu(root) {
  const menu = el('div', 'ioviewer-context-menu');
  menu.setAttribute('role', 'menu');
  menu.setAttribute('aria-label', t('contextMenu'));
  menu.hidden = true;
  root.append(menu);
  const items = new Map(Object.values(menus).flat().filter((id) => id !== '-').map((id) => [id, { enabled: false, handler: null }]));
  let returnFocus = null;

  function close() {
    if (menu.hidden) return;
    const restore = menu.contains(document.activeElement) ? returnFocus : null;
    returnFocus = null;
    menu.hidden = true;
    menu.replaceChildren();
    window.removeEventListener('pointerdown', outside, true);
    window.removeEventListener('wheel', close, true);
    window.removeEventListener('scroll', pageScroll, true);
    window.removeEventListener('resize', close);
    restore?.();
  }

  function pageScroll(e) {
    if (!root.contains(e.target)) close();
  }

  // The dismissing press only closes the menu.
  function outside(e) {
    if (menu.contains(e.target)) return;
    close();
    swallowPress(e);
  }

  function open(kind, x, y, target, restoreFocus = null) {
    const layout = menus[kind];
    if (!layout) throw new RangeError(`Unknown menu: ${kind}`);
    close();
    returnFocus = restoreFocus;
    for (const id of layout) {
      if (id === '-') {
        const separator = el('div', 'ioviewer-menu-separator');
        separator.setAttribute('role', 'separator');
        menu.append(separator);
        continue;
      }
      const item = items.get(id);
      const button = el('button', 'ioviewer-menu-item');
      button.type = 'button';
      button.tabIndex = -1;
      button.dataset.item = id;
      button.setAttribute('role', 'menuitem');
      button.setAttribute('aria-disabled', String(!item.enabled));
      button.append(el('span', '', t(`menu.${id}`)), el('kbd', '', shortcuts[id] ?? ''));
      button.addEventListener('click', () => {
        if (!item.enabled) return;
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
    window.addEventListener('scroll', pageScroll, true);
    window.addEventListener('resize', close);
    if (restoreFocus) menu.querySelector('button')?.focus({ preventScroll: true });
  }

  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      close();
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    const buttons = [...menu.querySelectorAll('button')];
    const current = buttons.indexOf(document.activeElement);
    let next;
    switch (e.key) {
      case 'ArrowDown':
        next = (current + 1) % buttons.length;
        break;
      case 'ArrowUp':
        next = (current + buttons.length - 1) % buttons.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = buttons.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    buttons[next]?.focus({ preventScroll: true });
  });

  function setItem(id, { enabled = true, handler }) {
    const item = items.get(id);
    if (!item) throw new RangeError(`Unknown menu item: ${id}`);
    if (handler) item.handler = handler;
    item.enabled = enabled && !!item.handler;
  }

  return { element: menu, open, close, setItem, get isOpen() { return !menu.hidden; } };
}
