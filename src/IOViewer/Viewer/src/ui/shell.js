import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el, iconButton } from './dom.js';

// Rail order is fixed, so a panel registered later (sections, by its own task) still lands in its place.
const ORDER = ['model', 'views', 'sections', 'clashes', 'timeliner', 'links'];

/**
 * Left icon rail with floating panels; one panel is open at a time and its active rail icon closes it.
 * registerPanel(name, { icon, title, render(body), visible = true }): `icon` is an SVG string from icons.js,
 * `render` fills the panel body once at registration, `visible: false` leaves the rail icon out (no data),
 * `onClose()` runs whenever the panel closes (its icon, its ×, or another panel opening).
 */
export function createShell(root) {
  const rail = el('nav', 'ioviewer-rail ioviewer-floating');
  rail.setAttribute('aria-label', t('panels'));
  root.append(rail);
  const panels = new Map(); // name -> { button, panel, onClose }
  let open = null;

  function get(name) {
    const entry = panels.get(name);
    if (!entry) throw new RangeError(`Unknown panel: ${name}`);
    return entry;
  }

  function closePanel(name) {
    const { button, panel, onClose } = get(name);
    if (open !== name) return;
    panel.hidden = true;
    button.classList.remove('active');
    button.setAttribute('aria-expanded', 'false');
    open = null;
    onClose?.();
  }

  function openPanel(name) {
    const { button, panel } = get(name);
    if (button.hidden || open === name) return;
    if (open) closePanel(open);
    panel.hidden = false;
    button.classList.add('active');
    button.setAttribute('aria-expanded', 'true');
    open = name;
  }

  function registerPanel(name, { icon, title, render, visible = true, onClose }) {
    const rank = ORDER.indexOf(name);
    if (rank < 0) throw new RangeError(`Unknown panel: ${name}`);
    if (panels.has(name)) throw new Error(`Panel ${name} is already registered.`);

    const button = iconButton('ioviewer-rail-button', icon, title);
    button.dataset.panel = name;
    button.hidden = !visible;
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => (open === name ? closePanel(name) : openPanel(name)));
    const next = [...rail.children].find((b) => ORDER.indexOf(b.dataset.panel) > rank);
    rail.insertBefore(button, next ?? null);

    const panel = el('section', 'ioviewer-side-panel ioviewer-floating');
    panel.dataset.panel = name;
    panel.hidden = true;
    panel.setAttribute('aria-label', title);
    const close = iconButton('ioviewer-panel-close', icons.close, t('close'));
    close.addEventListener('click', () => closePanel(name));
    const header = el('header', 'ioviewer-panel-header');
    header.append(el('h2', '', title), close);
    const body = el('div', 'ioviewer-panel-body');
    panel.append(header, body);
    root.append(panel);
    panels.set(name, { button, panel, onClose });
    render(body);
  }

  return { rail, openPanel, closePanel, registerPanel };
}
