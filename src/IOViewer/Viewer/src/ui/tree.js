import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el } from './dom.js';
import { isContextMenuKey } from './hotkeys.js';

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
 * matches. Rows in view and the focused row exist in the DOM. Activating an element selects and zooms to it;
 * selecting elsewhere scrolls to and highlights the last selected row, expanding its category. Hidden elements are dimmed.
 */
export function mountTree(container, { elements, selection, scene, zoomToElement, openContextMenu }) {
  const groups = groupByCategory(elements);
  const categoryOf = new Int32Array(elements.length);
  groups.forEach((group, c) => group.indices.forEach((i) => (categoryOf[i] = c)));
  const expanded = new Uint8Array(groups.length);
  const groupRows = new Int32Array(groups.length);
  const selectedCounts = new Uint32Array(groups.length);
  const search = createSearch(elements);
  let query = '';
  let rows = new Int32Array(0); // element index, or -(category + 1) for a category header
  let tabRow = 0;
  let pendingRow = -1; // row to scroll to once the tree has a size (it is laid out only while its panel is open)
  let rangeAnchor = null; // row value, stable across filtering, expansion and scrolling
  let selectingInTree = false;

  const input = el('input', 'ioviewer-tree-search');
  input.type = 'search';
  input.placeholder = t('searchPlaceholder');
  input.setAttribute('aria-label', t('searchPlaceholder'));
  const viewport = el('div', 'ioviewer-tree');
  viewport.setAttribute('role', 'tree');
  viewport.setAttribute('aria-label', t('panel.model'));
  viewport.setAttribute('aria-multiselectable', 'true');
  viewport.tabIndex = -1; // The browser can otherwise put the scroll container itself in the tab order.
  const spacer = el('div', 'ioviewer-tree-spacer');
  spacer.setAttribute('role', 'presentation');
  viewport.append(spacer);
  const empty = el('div', 'ioviewer-tree-empty', t('noMatches'));
  container.append(input, viewport, empty);

  function rebuild() {
    const previous = rows[tabRow];
    if (query) {
      rows = Int32Array.from(search(query));
    } else {
      let count = groups.length;
      groups.forEach((group, c) => expanded[c] && (count += group.indices.length));
      rows = new Int32Array(count);
      let r = 0;
      groups.forEach((group, c) => {
        groupRows[c] = r;
        rows[r++] = -(c + 1);
        if (expanded[c]) for (const i of group.indices) rows[r++] = i;
      });
    }
    const next = rows.indexOf(previous);
    tabRow = next >= 0 ? next : 0;
    spacer.style.height = `${rows.length * ROW_HEIGHT}px`;
    empty.hidden = rows.length > 0 || !query;
    render();
  }

  function render(focus = viewport.contains(document.activeElement)) {
    const height = viewport.clientHeight;
    if (height === 0 || rows.length === 0) {
      spacer.replaceChildren();
      return;
    }
    const top = viewport.scrollTop;
    const { start, end } = visibleRange(top, ROW_HEIGHT, height, rows.length, OVERSCAN);
    if (!focus && (tabRow < start || tabRow >= end)) tabRow = Math.min(rows.length - 1, Math.floor(top / ROW_HEIGHT));
    const nodes = [];
    // A manual scroll can move the keyboard focus outside the rendered range. Keep that one row until it moves.
    if (tabRow < start) nodes.push(row(tabRow));
    for (let r = start; r < end; r++) nodes.push(row(r));
    if (tabRow >= end) nodes.push(row(tabRow));
    spacer.replaceChildren(...nodes);
    if (focus) spacer.querySelector('[tabindex="0"]')?.focus({ preventScroll: true });
  }

  function row(r) {
    const value = rows[r];
    const c = value < 0 ? -value - 1 : categoryOf[value];
    const selected = value < 0 ? selectedCounts[c] === groups[c].indices.length : selection.has(value);
    const node = el('div', 'tree-row');
    node.style.top = `${r * ROW_HEIGHT}px`;
    node.style.height = `${ROW_HEIGHT}px`;
    node.dataset.row = r;
    node.tabIndex = r === tabRow ? 0 : -1;
    node.setAttribute('role', 'treeitem');
    node.classList.toggle('selected', selected);
    node.setAttribute('aria-selected', String(selected));
    if (value < 0) {
      node.classList.add('tree-category');
      node.setAttribute('aria-level', '1');
      node.setAttribute('aria-posinset', String(c + 1));
      node.setAttribute('aria-setsize', String(groups.length));
      node.setAttribute('aria-expanded', String(!!expanded[c]));
      const chevron = el('span', 'tree-chevron');
      chevron.innerHTML = icons.chevron;
      const { name, indices } = groups[c];
      node.append(chevron, el('span', 'tree-name', name || t('noCategory')), el('span', 'tree-count', String(indices.length)));
    } else {
      const element = elements[value];
      node.classList.add('tree-element');
      node.setAttribute('aria-level', query ? '1' : '2');
      node.setAttribute('aria-posinset', String(query ? r + 1 : r - groupRows[c]));
      node.setAttribute('aria-setsize', String(query ? rows.length : groups[c].indices.length));
      node.classList.toggle('tree-child', !query);
      node.classList.toggle('tree-hidden', !scene.isVisible(value));
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

  function focusRow(r) {
    tabRow = r;
    scrollToRow(r);
    render(true);
  }

  function reveal(index) {
    const c = categoryOf[index];
    if (!query && !expanded[c]) {
      expanded[c] = 1;
      rebuild();
    }
    const r = rows.indexOf(index);
    if (r >= 0) {
      if (!viewport.contains(document.activeElement)) tabRow = r;
      scrollToRow(r);
    }
    render();
  }

  function selectInTree(indices) {
    selectingInTree = true;
    try {
      selection.set(indices);
    } finally {
      selectingInTree = false;
    }
  }

  function selectRange(r, additive) {
    let anchor = rows.indexOf(rangeAnchor);
    if (anchor < 0) {
      anchor = r;
      rangeAnchor = rows[r];
    }
    const range = rows.subarray(Math.min(anchor, r), Math.max(anchor, r) + 1).filter((value) => value >= 0);
    if (range.length > 0) selectInTree(additive ? [...selection.values(), ...range] : range);
  }

  function toggleRow(value) {
    rangeAnchor = value;
    const c = -value - 1;
    const targets = value < 0 ? groups[c].indices : [value];
    const remove = value < 0 ? selectedCounts[c] === targets.length : selection.has(value);
    const selected = new Set(selection.values());
    for (const i of targets) {
      if (remove) selected.delete(i);
      else selected.add(i);
    }
    selectInTree(selected);
  }

  function openRowMenu(value, x, y) {
    if (value >= 0 && !selection.has(value)) {
      rangeAnchor = value;
      selectInTree([value]);
    }
    const target = value >= 0 ? value : selection.values().next().value ?? null;
    openContextMenu(x, y, target, () => {
      const current = rows.indexOf(value);
      if (current >= 0) focusRow(current);
      else input.focus();
    });
  }

  // Tab can follow opening the panel before the ResizeObserver delivers its first visible size.
  input.addEventListener('focus', () => {
    if (!spacer.firstElementChild) syncLayout();
  });
  input.addEventListener('input', () => {
    query = input.value.trim();
    viewport.scrollTop = 0;
    pendingRow = -1;
    tabRow = -1;
    rebuild();
  });
  viewport.addEventListener('scroll', () => render());
  viewport.addEventListener('focusin', (e) => {
    const node = e.target.closest('.tree-row');
    if (!node || node.tabIndex === 0) return;
    spacer.querySelector('[tabindex="0"]')?.setAttribute('tabindex', '-1');
    tabRow = Number(node.dataset.row);
    node.tabIndex = 0;
  });
  viewport.addEventListener('keydown', (e) => {
    const node = e.target.closest('.tree-row');
    if (!node || e.ctrlKey || e.altKey || e.metaKey) return;
    const r = Number(node.dataset.row);
    const value = rows[r];
    if (isContextMenuKey(e)) {
      e.preventDefault();
      if (!e.repeat) {
        const { left, bottom } = node.getBoundingClientRect();
        openRowMenu(value, left, bottom);
      }
      return;
    }
    if (e.key === ' ') {
      e.preventDefault();
      if (!e.repeat) {
        if (e.shiftKey) selectRange(r, false);
        else toggleRow(value);
      }
      return;
    }
    if (e.shiftKey) return;
    let next = r;
    switch (e.key) {
      case 'ArrowUp':
        next = Math.max(0, r - 1);
        break;
      case 'ArrowDown':
        next = Math.min(rows.length - 1, r + 1);
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = rows.length - 1;
        break;
      case 'ArrowRight':
        if (value < 0) {
          if (expanded[-value - 1]) next = r + 1;
          else {
            expanded[-value - 1] = 1;
            rebuild();
          }
        }
        break;
      case 'ArrowLeft':
        if (value >= 0 && !query) next = groupRows[categoryOf[value]];
        else if (value < 0 && expanded[-value - 1]) {
          expanded[-value - 1] = 0;
          rebuild();
        }
        break;
      case 'Enter':
        if (!e.repeat) activateRow(value);
        break;
      default:
        return;
    }
    e.preventDefault();
    if (next !== r) focusRow(next);
  });

  function activateRow(value) {
    if (value >= 0) {
      rangeAnchor = value;
      selectInTree([value]);
      zoomToElement(value);
      return;
    }
    expanded[-value - 1] ^= 1;
    rebuild();
  }

  viewport.addEventListener('click', (e) => {
    const node = e.target.closest('.tree-row');
    if (!node) return;
    const r = Number(node.dataset.row);
    const additive = e.ctrlKey || e.metaKey;
    if (e.shiftKey) selectRange(r, additive);
    else if (additive) toggleRow(rows[r]);
    else activateRow(rows[r]);
  });
  viewport.addEventListener('contextmenu', (e) => {
    const node = e.target.closest('.tree-row');
    if (!node) return;
    e.preventDefault();
    openRowMenu(rows[Number(node.dataset.row)], e.clientX, e.clientY);
  });
  function syncLayout() {
    if (pendingRow >= 0 && viewport.clientHeight > 0) {
      scrollToRow(pendingRow);
      pendingRow = -1;
    }
    render();
  }
  new ResizeObserver(syncLayout).observe(viewport);
  selection.addEventListener('change', () => {
    let last = -1;
    selectedCounts.fill(0);
    for (const i of selection.values()) {
      selectedCounts[categoryOf[i]]++;
      last = i;
    }
    if (selectingInTree) {
      render();
      return;
    }
    rangeAnchor = null;
    if (last >= 0) reveal(last);
    else render();
  });
  scene.root.addEventListener('change', (e) => e.detail.kind === 'visibility' && render());

  rebuild();
}
