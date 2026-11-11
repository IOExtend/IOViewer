import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el } from './dom.js';

/**
 * «Связанные файлы»: a checkbox per linked file. A file's elements are those whose `link` equals the file's name or
 * its path (exporters write either). Unchecking hides the ones shown and remembers them; checking shows those again
 * (or all of the file's elements when it hid none), so elements the user hid otherwise stay hidden. A box shows
 * whether any of its elements is shown, so «Показать всё», Isolate or the 4D player keep it true. A file listed as
 * not visible starts unchecked.
 */
export function mountLinks({ shell, files, elements, scene }) {
  const links = files.map((file) => {
    const members = elements.flatMap((e, i) => (e.link != null && (e.link === file.name || e.link === file.path) ? [i] : []));
    return { file, members, hidden: [], input: null };
  });

  function setShown(link, shown) {
    if (shown) {
      scene.setVisible(link.hidden.length ? link.hidden : link.members, true);
      link.hidden = [];
    } else {
      link.hidden = link.members.filter((i) => scene.isVisible(i));
      scene.setVisible(link.hidden, false);
    }
  }

  let refresh = 0;
  scene.root.addEventListener('change', (e) => {
    if (e.detail.kind !== 'visibility' || refresh) return;
    refresh = requestAnimationFrame(() => {
      refresh = 0;
      for (const link of links) {
        if (link.members.length === 0) continue;
        link.input.checked = link.members.some((i) => scene.isVisible(i));
        if (link.input.checked) link.hidden = [];
      }
    });
  });

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
        link.input = el('input');
        link.input.type = 'checkbox';
        link.input.checked = link.members.length === 0 || link.file.visible !== false;
        link.input.disabled = link.members.length === 0;
        link.input.addEventListener('change', () => setShown(link, link.input.checked));
        row.append(link.input, el('span', 'ioviewer-row-name', name), el('span', 'ioviewer-row-count', String(link.members.length)));
        list.append(row);
      }
      body.append(list);
    },
  });
  for (const link of links) if (!link.input.checked) setShown(link, false);
}
