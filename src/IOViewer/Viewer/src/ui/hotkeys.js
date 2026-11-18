const FIELDS = 'input, textarea, select, [contenteditable]';

export function isContextMenuKey(e) {
  return e.key === 'ContextMenu' || e.code === 'ContextMenu' || (e.shiftKey && (e.key === 'F10' || e.code === 'F10'));
}

// Action for a keydown, or null. Keys are matched by physical position (KeyboardEvent.code), so H/I/F work in any
// layout, e.g. Russian. Ignored with Ctrl/Alt/Meta (browser shortcuts), on auto-repeat and while typing in a field.
export function hotkeyAction(e) {
  if (e.ctrlKey || e.altKey || e.metaKey || e.repeat || e.target?.closest?.(FIELDS)) return null;
  if (isContextMenuKey(e)) return 'contextMenu';
  switch (e.code) {
    case 'KeyH':
      return e.shiftKey ? 'showAll' : 'hide';
    case 'KeyI':
      return e.shiftKey ? null : 'isolate';
    case 'KeyF':
      return e.shiftKey ? null : 'zoomTo';
    case 'Escape':
      return 'escape';
    default:
      return null;
  }
}
