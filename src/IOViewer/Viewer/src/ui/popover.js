import { el, swallowPress } from './dom.js';

const GAP = 8; // px between the popover and its button
const MARGIN = 4; // px kept free between the popover and the window edge

/**
 * Small panel that opens above a toolbar button. Closes on Esc (close() from the hotkeys, or a keydown inside it)
 * and on a press outside it; that press only dismisses the popover, like the context menu, so it never reaches the
 * model, the panels or another tool (a press on its own button just closes it).
 */
export function createPopover(root, anchor, label, role = 'dialog') {
  const element = el('div', 'ioviewer-popover ioviewer-floating');
  element.setAttribute('role', role);
  element.setAttribute('aria-label', label);
  element.hidden = true;
  anchor.setAttribute('aria-haspopup', role);
  anchor.setAttribute('aria-expanded', 'false');
  root.append(element);

  function outside(e) {
    if (element.contains(e.target)) return;
    close();
    swallowPress(e);
  }

  // Esc on a focused field inside (the slider) never reaches the hotkeys, which ignore fields.
  element.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    e.preventDefault();
    close();
    anchor.focus();
  });

  function open() {
    element.hidden = false;
    anchor.setAttribute('aria-expanded', 'true');
    const a = anchor.getBoundingClientRect();
    const { width } = element.getBoundingClientRect();
    element.style.left = `${Math.max(MARGIN, Math.min(a.left + a.width / 2 - width / 2, innerWidth - width - MARGIN))}px`;
    element.style.bottom = `${innerHeight - a.top + GAP}px`;
    window.addEventListener('pointerdown', outside, true);
    window.addEventListener('resize', close);
  }

  // True when it was open.
  function close() {
    if (element.hidden) return false;
    element.hidden = true;
    anchor.setAttribute('aria-expanded', 'false');
    window.removeEventListener('pointerdown', outside, true);
    window.removeEventListener('resize', close);
    return true;
  }

  return {
    element,
    close,
    toggle: () => (element.hidden ? open() : close()),
    get isOpen() {
      return !element.hidden;
    },
  };
}
