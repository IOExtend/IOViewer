import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el } from './dom.js';

export const ROW_HEIGHT = 24; // px, every row; the list is virtualized on this fixed height
const OVERSCAN = 8;

// Rows [start, end) to draw for a list of `total` rows scrolled to `scrollTop`, with `overscan` extra rows each way.
export function visibleRange(scrollTop, rowHeight, viewportHeight, total, overscan) {
  const start = Math.min(total, Math.max(0, Math.floor(scrollTop / rowHeight) - overscan));
  const end = Math.min(total, Math.ceil((scrollTop + viewportHeight) / rowHeight) + overscan);
  return { start, end: Math.max(start, end) };
}

// search(query) -> indices of elements whose name, type, Id or source id contains the query, case-insensitively.
export function createSearch(elements) {
  let texts = null; // lower-cased once, on the first search
  return (query) => {
    const q = query.trim().toLowerCase();
    texts ??= elements.map((e) => `${e.name ?? ''}\n${e.type ?? ''}\n${e.id}\n${e.sourceId ?? ''}`.toLowerCase());
    const found = [];
    for (let i = 0; i < texts.length; i++) if (texts[i].includes(q)) found.push(i);
    return found;
  };
}

// [{ name, indices }] by category name (sorted); elements keep their order inside a category.
export function groupByCategory(elements) {
  const byName = new Map();
  elements.forEach((element, i) => {
    const name = element.category ?? '';
    if (!byName.has(name)) byName.set(name, []);
    byName.get(name).push(i);
  });
  return [...byName].map(([name, indices]) => ({ name, indices })).sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Model tree in `container`: collapsed categories with counts, then elements (name, muted type); a search flattens
 * matches. Only rows in view exist in the DOM. A click on an element calls activate(index); selecting elsewhere
 * scrolls to and highlights the last selected row, expanding its category. Hidden elements are dimmed.
 */
export function mountTree(container, { elements, selection, scene, activate }) {
  const groups = groupByCategory(elements);
  const categoryOf = new Int32Array(elements.length);
  groups.forEach((group, c) => group.indices.forEach((i) => (categoryOf[i] = c)));
  const expanded = new Uint8Array(groups.length);
  const search = createSearch(elements);
  let query = '';
  let rows = new Int32Array(0); // element index, or -(category + 1) for a category header
  let pendingRow = -1; // row to scroll to once the tree has a size (it is laid out only while its panel is open)

  const input = el('input', 'ioviewer-tree-search');
  input.type = 'search';
  input.placeholder = t('searchPlaceholder');
  input.setAttribute('aria-label', t('searchPlaceholder'));
  const viewport = el('div', 'ioviewer-tree');
  viewport.setAttribute('role', 'tree');
  viewport.setAttribute('aria-label', t('panel.model'));
  const spacer = el('div', 'ioviewer-tree-spacer');
  viewport.append(spacer);
  const empty = el('div', 'ioviewer-tree-empty', t('noMatches'));
  container.append(input, viewport, empty);

  function rebuild() {
    if (query) {
      rows = Int32Array.from(search(query));
    } else {
      let count = groups.length;
      groups.forEach((group, c) => expanded[c] && (count += group.indices.length));
      rows = new Int32Array(count);
      let r = 0;
      groups.forEach((group, c) => {
        rows[r++] = -(c + 1);
        if (expanded[c]) for (const i of group.indices) rows[r++] = i;
      });
    }
    spacer.style.height = `${rows.length * ROW_HEIGHT}px`;
    empty.hidden = rows.length > 0 || !query;
    render();
  }

  function render() {
    const { start, end } = visibleRange(viewport.scrollTop, ROW_HEIGHT, viewport.clientHeight, rows.length, OVERSCAN);
    const nodes = [];
    for (let r = start; r < end; r++) nodes.push(row(r));
    spacer.replaceChildren(...nodes);
  }

  function row(r) {
    const value = rows[r];
    const node = el('div', 'tree-row');
    node.style.top = `${r * ROW_HEIGHT}px`;
    node.style.height = `${ROW_HEIGHT}px`;
    node.dataset.row = r;
    node.setAttribute('role', 'treeitem');
    if (value < 0) {
      const c = -value - 1;
      node.classList.add('tree-category');
      node.setAttribute('aria-expanded', String(!!expanded[c]));
      const chevron = el('span', 'tree-chevron');
      chevron.innerHTML = icons.chevron;
      const { name, indices } = groups[c];
      node.append(chevron, el('span', 'tree-name', name || t('noCategory')), el('span', 'tree-count', String(indices.length)));
    } else {
      const element = elements[value];
      const selected = selection.has(value);
      node.classList.add('tree-element');
      node.classList.toggle('tree-child', !query);
      node.classList.toggle('selected', selected);
      node.classList.toggle('tree-hidden', !scene.isVisible(value));
      node.setAttribute('aria-selected', String(selected));
      node.append(el('span', 'tree-name', element.name || `#${element.id}`), el('span', 'tree-type', element.type ?? ''));
    }
    return node;
  }

  function scrollToRow(r) {
    const height = viewport.clientHeight;
    if (height === 0) {
      pendingRow = r;
      return;
    }
    const top = r * ROW_HEIGHT;
    if (top < viewport.scrollTop) viewport.scrollTop = top;
    else if (top + ROW_HEIGHT > viewport.scrollTop + height) viewport.scrollTop = top + ROW_HEIGHT - height;
  }

  function reveal(index) {
    const c = categoryOf[index];
    if (!query && !expanded[c]) {
      expanded[c] = 1;
      rebuild();
    }
    const r = rows.indexOf(index);
    if (r >= 0) scrollToRow(r);
    render();
  }

  input.addEventListener('input', () => {
    query = input.value.trim();
    viewport.scrollTop = 0;
    rebuild();
  });
  viewport.addEventListener('scroll', render);
  viewport.addEventListener('click', (e) => {
    const node = e.target.closest('.tree-row');
    if (!node) return;
    const value = rows[Number(node.dataset.row)];
    if (value >= 0) {
      activate(value);
      return;
    }
    expanded[-value - 1] ^= 1;
    rebuild();
  });
  new ResizeObserver(() => {
    if (pendingRow >= 0 && viewport.clientHeight > 0) {
      scrollToRow(pendingRow);
      pendingRow = -1;
    }
    render();
  }).observe(viewport);
  selection.addEventListener('change', () => {
    let last = -1;
    for (const i of selection.values()) last = i;
    if (last >= 0) reveal(last);
    else render();
  });
  scene.root.addEventListener('change', (e) => e.detail.kind === 'visibility' && render());

  rebuild();
}
