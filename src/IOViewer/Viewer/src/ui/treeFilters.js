import { t } from '../i18n.js';
import { el } from './dom.js';

// The select values are option positions. Model and level keys keep their original types for exact matching.
export function createTreeFilters(elements, models, search, onChange, onIsolate) {
  const details = el('details', 'ioviewer-tree-filters');
  details.hidden = elements.length === 0;
  const summary = el('summary', '', t('filters.title'));
  const body = el('div', 'ioviewer-filter-fields');
  const names = new Map(models.map(({ id, name }) => [id, name || `#${id}`]));
  const modelOf = (element) => element.modelId ?? models[0]?.id ?? null;
  const levelOf = (element) => element.levelId ?? (element.level || null);
  const categoryOf = (element) => element.category ?? '';
  const fields = [
    { name: t('filters.model'), key: modelOf, labels: new Map() },
    { name: t('level'), key: levelOf, labels: new Map() },
    { name: t('category'), key: categoryOf, labels: new Map() },
  ];
  const [model, level, category] = fields;
  const actions = el('div', 'ioviewer-filter-actions');
  const clear = el('button', 'ioviewer-text-button', t('filters.clear'));
  clear.type = 'button';
  clear.addEventListener('click', () => {
    for (const field of fields) if (field.select) field.select.selectedIndex = 0;
    search.value = '';
    onChange();
    search.focus();
  });
  const isolate = el('button', 'ioviewer-text-button', t('filters.isolate'));
  isolate.type = 'button';
  isolate.addEventListener('click', onIsolate);
  actions.append(clear, isolate);
  details.append(summary, body, actions);

  // Build the option lists only when a user opens the filters, even for very large models.
  function populate() {
    if (!details.open) return;
    details.removeEventListener('toggle', populate);
    for (const element of elements) {
      const id = modelOf(element);
      const modelName = names.get(id) ?? (id == null ? '' : `#${id}`);
      if (id != null) model.labels.set(id, modelName);
      const key = levelOf(element);
      if (!level.labels.has(key)) {
        const name = element.level || (key == null ? t('filters.noLevel') : `#${key}`);
        level.labels.set(key, key != null && models.length > 1 && modelName ? `${name} · ${modelName}` : name);
      }
      const group = categoryOf(element);
      category.labels.set(group, group || t('noCategory'));
    }
    for (const field of fields) {
      if (!field.labels.size) continue;
      const counts = new Map();
      for (const label of field.labels.values()) counts.set(label, (counts.get(label) ?? 0) + 1);
      const options = [...field.labels].map(([key, label]) => [key, counts.get(label) > 1 ? `${label} (#${key})` : label]);
      options.sort((a, b) => a[1].localeCompare(b[1]));
      field.keys = options.map(([key]) => key);
      const select = field.select = el('select');
      select.append(new Option(t('filters.all'), ''));
      for (const [index, [, label]] of options.entries()) select.append(new Option(label, String(index + 1)));
      select.addEventListener('change', onChange);
      const row = el('label', 'ioviewer-filter-field');
      row.append(el('span', '', field.name), select);
      body.append(row);
    }
  }
  details.addEventListener('toggle', populate);

  function activeFields() {
    return fields.filter((field) => field.select?.selectedIndex > 0);
  }

  return {
    element: details,
    predicate() {
      const rules = activeFields().map(({ select, keys, key }) => ({ key, value: keys[select.selectedIndex - 1] }));
      return rules.length ? (element) => rules.every(({ key, value }) => key(element) === value) : null;
    },
    update(query, canIsolate) {
      const count = activeFields().length;
      summary.textContent = count ? `${t('filters.title')} (${count})` : t('filters.title');
      clear.disabled = !count && !query;
      isolate.disabled = !canIsolate;
    },
  };
}
