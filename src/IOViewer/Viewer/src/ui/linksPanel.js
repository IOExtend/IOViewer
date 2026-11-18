import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el } from './dom.js';

/**
 * «Связанные файлы»: a checkbox per linked file. A file's elements are those whose `link` equals the file's name or
 * its path in older payloads. All unchecked files contribute to the links visibility layer, independently of the
 * user's Hide/Isolate/Show all and the 4D schedule. Returns a function to restore the checkboxes from saved model keys.
 */
export function mountLinks({ shell, files, elements, scene }) {
  const links = files.map((file) => ({
    file,
    members: file.members ?? elements.flatMap((e, i) =>
      (e.link != null && (e.link === file.name || e.link === file.path) ? [i] : [])),
    input: el('input'),
  }));
  const apply = () => scene.replaceLayerHidden('links',
    links.flatMap(({ input, members }) => input.checked ? [] : members));

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
        const { input } = link;
        input.type = 'checkbox';
        input.checked = link.members.length === 0 || link.file.visible !== false;
        input.disabled = link.members.length === 0;
        input.addEventListener('change', apply);
        row.append(input, el('span', 'ioviewer-row-name', name), el('span', 'ioviewer-row-count', String(link.members.length)));
        list.append(row);
      }
      body.append(list);
      apply();
    },
  });
  return (hiddenKeys) => {
    const hidden = new Set(hiddenKeys);
    for (const { file, input } of links) input.checked = input.disabled || !hidden.has(file.key);
    apply();
  };
}
