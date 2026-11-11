import { t } from '../i18n.js';
import { el } from './dom.js';

function group(title, rows) {
  const table = el('table');
  for (const [name, value] of rows) {
    const row = table.insertRow();
    row.append(el('th', '', name), el('td', '', String(value ?? '')));
  }
  const section = el('section');
  section.append(el('h3', '', title), table);
  return section;
}

/**
 * Properties of the selection inside `container`: one element shows its fields and PROPS groups, several show
 * only their count, none hides the panel. The close button clears the selection. Text goes in via textContent only.
 * data: { meta: { elements }, props(elementId) } from loadModelData.
 */
export function mountProperties(container, selection, data) {
  const title = el('h2', 'ioviewer-properties-title');
  const close = el('button', 'ioviewer-properties-close', '×');
  close.type = 'button';
  close.title = t('close');
  close.setAttribute('aria-label', t('close'));
  close.addEventListener('click', () => selection.clear());
  const header = el('header');
  header.append(title, close);
  const body = el('div', 'ioviewer-properties-body');
  container.replaceChildren(header, body);
  container.hidden = true;

  selection.addEventListener('change', () => {
    container.hidden = selection.size === 0;
    body.replaceChildren();
    if (selection.size !== 1) {
      title.textContent = `${t('selected')}: ${selection.size}`;
      return;
    }
    const [index] = selection.values();
    const element = data.meta.elements[index];
    title.textContent = element.name || `#${element.id}`;
    const fields = [[t('id'), element.id], [t('category'), element.category], [t('type'), element.type], [t('level'), element.level]];
    if (element.link) fields.push([t('link'), element.link]);
    body.append(group(t('elementGroup'), fields));
    for (const [name, values] of Object.entries(data.props(element.id) ?? {})) body.append(group(name, Object.entries(values)));
  });
}
