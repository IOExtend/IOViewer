import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el } from './dom.js';

/**
 * «Связанные файлы»: a checkbox per linked file. A file's elements are those whose `link` equals the file's name or
 * its path (exporters write either). Unchecking hides them in the file's own visibility layer ('link:<n>') and checking
 * clears that layer, so the user's Hide/Isolate/Show all and the 4D schedule (their own layers) are untouched and
 * combine with it; the box shows only the file's own state. «Показать всё» does not re-check a file. A file listed as
 * not visible starts unchecked.
 */
export function mountLinks({ shell, files, elements, scene }) {
  const links = files.map((file, n) => ({
    file,
    layer: `link:${n}`,
    members: elements.flatMap((e, i) => (e.link != null && (e.link === file.name || e.link === file.path) ? [i] : [])),
  }));
  const setShown = (link, shown) =>
    shown ? scene.clearLayer(link.layer) : scene.setLayerHidden(link.layer, link.members, true);

  shell.registerPanel('links', {
    icon: icons.links,
    title: t('panel.links'),
    visible: links.length > 0,
    render: (body) => {
      const list = el('div', 'ioviewer-row-list');
      for (const link of links) {
        const name = String(link.file.name ?? '');
        const row = el('label', 'ioviewer-row ioviewer-check ioviewer-link');
        row.setAttribute('title', `${name} (${link.file.path ?? ''})`);
        const input = el('input');
        input.type = 'checkbox';
        input.checked = link.members.length === 0 || link.file.visible !== false;
        input.disabled = link.members.length === 0;
        input.addEventListener('change', () => setShown(link, input.checked));
        if (!input.checked) setShown(link, false);
        row.append(input, el('span', 'ioviewer-row-name', name), el('span', 'ioviewer-row-count', String(link.members.length)));
        list.append(row);
      }
      body.append(list);
    },
  });
}
