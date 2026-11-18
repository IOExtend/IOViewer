import { t } from '../i18n.js';
import { el } from '../ui/dom.js';
import { createPopover } from '../ui/popover.js';
import { DISPLAY_MODES } from '../engine/modelScene.js';

// Display mode on open, from META options.
export function initialDisplayMode(options) {
  return options?.initialWireframe ? 'wireframe' : options?.initialWhiteMode ? 'white' : 'materials';
}

/**
 * Display tools: `displayMode` opens the mode choices and the viewport background setting, `grids` shows or hides
 * the grid axes and their labels (off when there are none), `opacity` opens a
 * 10–100 % slider for the whole model. Returns the popovers, for Esc.
 */
export function mountDisplay({ root, toolbar, scene, meta, grids, initialBackground, setBackground }) {
  const anchor = (id) => toolbar.element.querySelector(`[data-tool="${id}"]`);

  const displayButton = anchor('displayMode');
  const modes = createPopover(root, displayButton, t('group.display'));
  modes.element.classList.add('ioviewer-display-modes');
  const menu = el('div');
  menu.setAttribute('role', 'menu');
  menu.setAttribute('aria-label', t('tool.displayMode'));
  modes.element.append(menu);
  const hasTextures = (meta.textures ?? []).length > 0;
  const items = DISPLAY_MODES.map((mode) => {
    const item = el('button', 'ioviewer-menu-item', t(`display.${mode}`));
    item.type = 'button';
    item.dataset.mode = mode;
    item.setAttribute('role', 'menuitemradio');
    item.disabled = mode === 'textures' && !hasTextures;
    item.addEventListener('click', () => {
      setMode(mode);
      modes.close();
      displayButton.focus();
    });
    menu.append(item);
    return item;
  });
  const setMode = (mode) => {
    scene.setDisplayMode(mode);
    for (const item of items) item.setAttribute('aria-checked', String(item.dataset.mode === mode));
  };
  setMode(initialDisplayMode(meta.options));
  toolbar.setHandler('displayMode', () => {
    modes.toggle();
    if (modes.isOpen) menu.querySelector('[aria-checked="true"]')?.focus();
  });

  const background = el('div', 'ioviewer-background-setting');
  const label = el('label', '', t('display.background'));
  const color = el('input');
  Object.assign(color, { type: 'color', value: initialBackground });
  label.append(color);
  const reset = el('button', 'ioviewer-text-button', t('display.backgroundReset'));
  reset.type = 'button';
  reset.disabled = true;
  const applyBackground = () => {
    setBackground(color.value);
    reset.disabled = color.value === initialBackground;
  };
  color.addEventListener('input', applyBackground);
  reset.addEventListener('click', () => {
    color.value = initialBackground;
    color.focus();
    applyBackground();
  });
  background.append(label, reset);
  modes.element.append(background);

  toolbar.setActive('grids', grids.visible);
  if (grids.count > 0) {
    toolbar.setHandler('grids', () => {
      grids.setVisible(!grids.visible);
      toolbar.setActive('grids', grids.visible);
    });
  }

  const opacity = createPopover(root, anchor('opacity'), t('tool.opacity'));
  opacity.element.classList.add('ioviewer-opacity');
  const slider = el('input', 'ioviewer-opacity-slider');
  Object.assign(slider, { type: 'range', min: '10', max: '100', step: '1', value: '100' });
  slider.setAttribute('aria-label', t('opacity.label'));
  const value = el('output', 'ioviewer-opacity-value');
  const show = () => (value.textContent = t('opacity.value').replace('{value}', slider.value));
  slider.addEventListener('input', () => {
    scene.setOpacity(Number(slider.value) / 100);
    show();
  });
  show();
  const head = el('div', 'ioviewer-opacity-head');
  head.append(el('span', '', t('opacity.label')), value);
  opacity.element.append(head, slider);
  toolbar.setHandler('opacity', opacity.toggle);

  return [modes, opacity];
}
