const FIELDS = 'input, textarea, select, [contenteditable]';

// Action for a keydown, or null. Keys are matched by physical position (KeyboardEvent.code), so H/I/F work in any
// layout, e.g. Russian. Ignored with Ctrl/Alt/Meta (browser shortcuts), on auto-repeat and while typing in a field.
export function hotkeyAction(e) {
  if (e.ctrlKey || e.altKey || e.metaKey || e.repeat || e.target?.closest?.(FIELDS)) return null;
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

// Calls actions[hotkeyAction(e)] for keydowns on `target` (window).
export function installHotkeys(target, actions) {
  target.addEventListener('keydown', (e) => {
    const action = hotkeyAction(e);
    if (!action) return;
    e.preventDefault();
    actions[action]();
  });
}
