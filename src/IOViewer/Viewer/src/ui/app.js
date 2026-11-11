import { t } from '../i18n.js';
import { icons } from './icons.js';
import { createShell, nameList } from './shell.js';
import { createToolbar, toolbarGroups } from './toolbar.js';
import { mountTree } from './tree.js';
import { createContextMenu } from './contextMenu.js';
import { installHotkeys } from './hotkeys.js';
import { mountStatusBar, mountTruncationBanner, showToast } from './statusBar.js';
import { mountProperties } from './properties.js';

// Copies text; the async clipboard API is missing or refused on some file:// pages, so it falls back to execCommand.
async function copyText(text) {
  if (await navigator.clipboard?.writeText(text).then(() => true, () => false)) return true;
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.className = 'ioviewer-offscreen';
  document.body.append(area);
  area.select();
  try {
    return document.execCommand('copy');
  } finally {
    area.remove();
  }
}

/**
 * Builds the viewer UI inside `root` (#ioviewer-ui) and wires it to the model.
 * Returns { shell, toolbar, contextMenu, onEscape } so features can register panels, enable tools and menu items;
 * onEscape(handler) adds a handler that Esc tries, in order, after closing the context menu and before clearing the
 * selection: it returns true when it used the key.
 */
export function mountUI({ root, data, scene, controls, picker, selection }) {
  const { meta } = data;
  const fitAll = () => controls.fitBox(scene.visibleBox());
  const actions = {
    hide: () => selection.size && scene.setVisible([...selection.values()], false),
    isolate: () => selection.size && scene.isolate([...selection.values()]),
    showAll: () => scene.showAll(),
    // Selection's combined box; nothing selected fits everything shown.
    zoomTo: () => {
      if (!selection.size) return fitAll();
      const [first, ...rest] = selection.values();
      const box = scene.elementBox(first);
      for (const i of rest) box.union(scene.elementBox(i));
      controls.zoomToBox(box);
    },
    fitAll,
  };

  const shell = createShell(root);
  shell.registerPanel('model', {
    icon: icons.model,
    title: t('panel.model'),
    render: (body) =>
      mountTree(body, {
        elements: meta.elements,
        selection,
        scene,
        activate: (i) => {
          selection.set([i]);
          controls.zoomToBox(scene.elementBox(i));
        },
      }),
  });
  // Panels shown only when the document has their data; until their full versions exist they list the names.
  const listPanel = (name, items, nameOf) =>
    shell.registerPanel(name, {
      icon: icons[name],
      title: t(`panel.${name}`),
      visible: items.length > 0,
      render: (body) => body.append(nameList(items.map(nameOf))),
    });
  listPanel('views', meta.viewpoints ?? [], (view) => view.name);
  listPanel('clashes', meta.clashTests ?? [], (test) => `${test.name} (${test.clashes.length})`);
  listPanel('timeliner', meta.timeliner?.tasks ?? [], (task) => task.name);
  listPanel('links', meta.linkedFiles ?? [], (file) => file.name);

  const properties = document.createElement('aside');
  properties.id = 'ioviewer-properties';
  properties.className = 'ioviewer-floating';
  root.append(properties);
  mountProperties(properties, selection, data);

  const toolbar = createToolbar(root, toolbarGroups);
  const setLeftMode = (mode) => {
    controls.setLeftButtonMode(mode);
    toolbar.setActive('orbit', mode === 'orbit');
    toolbar.setActive('pan', mode === 'pan');
  };
  toolbar.setHandler('orbit', () => setLeftMode('orbit'));
  toolbar.setHandler('pan', () => setLeftMode('pan'));
  setLeftMode(controls.leftButtonMode);
  toolbar.setHandler('fit', fitAll);
  toolbar.setHandler('projection', () => {
    const orthographic = !controls.camera.isOrthographicCamera;
    controls.setProjection(orthographic ? 'orthographic' : 'perspective');
    toolbar.setActive('projection', orthographic);
  });
  toolbar.setActive('projection', false);
  if (document.fullscreenEnabled) {
    toolbar.setHandler('fullscreen', () => {
      const request = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
      request.catch(() => {
        toolbar.setActive('fullscreen', !!document.fullscreenElement);
        showToast(root, t('fullscreenUnavailable'));
      });
    });
    document.addEventListener('fullscreenchange', () => toolbar.setActive('fullscreen', !!document.fullscreenElement));
  }

  const contextMenu = createContextMenu(root);
  contextMenu.setItem('properties', { handler: (i) => selection.set([i]) });
  for (const id of ['hide', 'isolate', 'showAll', 'zoomTo', 'fitAll']) contextMenu.setItem(id, { handler: actions[id] });
  contextMenu.setItem('copyId', {
    handler: (i) =>
      copyText(String(meta.elements[i].id)).then(
        (copied) => showToast(root, t(copied ? 'idCopied' : 'copyFailed')),
        () => showToast(root, t('copyFailed')),
      ),
  });
  // Right click on an element that is not selected selects it first, as in Navisworks.
  controls.addEventListener('contextmenu', (e) => {
    const { x, y } = e.detail;
    const hit = picker.pick(x, y);
    if (!hit) return contextMenu.open('empty', x, y, null);
    if (!selection.has(hit.element)) selection.set([hit.element]);
    contextMenu.open('element', x, y, hit.element);
  });

  const escapeHandlers = [];
  installHotkeys(window, {
    ...actions,
    // Esc closes an open menu and keeps the selection; otherwise a feature may use it; otherwise it clears the selection.
    escape: () => {
      if (contextMenu.isOpen) return contextMenu.close();
      if (!escapeHandlers.some((handle) => handle())) selection.clear();
    },
  });
  mountStatusBar(document.getElementById('ioviewer-status'), selection, scene.elementCount);
  mountTruncationBanner(root, meta.truncated);

  return { shell, toolbar, contextMenu, onEscape: (handler) => escapeHandlers.push(handler) };
}
