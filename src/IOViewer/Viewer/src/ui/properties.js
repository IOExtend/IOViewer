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
 * data supplies indexed elements and either local props(elementId) or loadProperties(index, signal).
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

  const fieldsOf = (element) => {
    const fields = [[t('id'), element.id], [t('category'), element.category], [t('type'), element.type], [t('level'), element.level]];
    if (element.sourceId) fields.push([t('sourceId'), element.sourceId]);
    if (element.link) fields.push([t('link'), element.link]);
    return group(t('elementGroup'), fields);
  };
  const appendGroups = (properties) => {
    for (const [name, values] of Object.entries(properties ?? {})) body.append(group(name, Object.entries(values)));
  };
  let pending;
  selection.addEventListener('change', () => {
    pending?.abort();
    pending = undefined;
    body.removeAttribute('aria-busy');
    container.hidden = selection.size === 0;
    body.replaceChildren();
    if (selection.size !== 1) {
      title.textContent = `${t('selected')}: ${selection.size}`;
      return;
    }
    const [index] = selection.values();
    const element = data.meta.elements[index];
    title.textContent = element.name || `#${element.id}`;
    body.append(fieldsOf(element));
    if (!data.loadProperties) {
      appendGroups(data.props(element.id));
      return;
    }
    const controller = new AbortController();
    pending = controller;
    body.setAttribute('aria-busy', 'true');
    data.loadProperties(index, controller.signal).then((loaded) => {
      if (controller.signal.aborted || !loaded) return;
      title.textContent = loaded.name || element.name || `#${element.id}`;
      body.replaceChildren(fieldsOf({ ...element, ...loaded }));
      appendGroups(loaded.properties);
    }).catch(() => {
      if (!controller.signal.aborted) body.append(el('p', '', t('badData')));
    }).finally(() => {
      if (pending === controller) body.removeAttribute('aria-busy');
    });
  });
}
