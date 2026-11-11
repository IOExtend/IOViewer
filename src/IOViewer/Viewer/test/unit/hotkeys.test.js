import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hotkeyAction } from '../../src/ui/hotkeys.js';

const key = (code, extra = {}) => ({ code, shiftKey: false, ctrlKey: false, altKey: false, metaKey: false, repeat: false, target: null, ...extra });
const field = { closest: (selector) => (selector.includes('input') ? {} : null) };

test('H, I, Shift+H, F and Esc map to their actions by physical key, so any keyboard layout works', () => {
  assert.equal(hotkeyAction(key('KeyH')), 'hide');
  assert.equal(hotkeyAction(key('KeyI')), 'isolate');
  assert.equal(hotkeyAction(key('KeyH', { shiftKey: true })), 'showAll');
  assert.equal(hotkeyAction(key('KeyF')), 'zoomTo');
  assert.equal(hotkeyAction(key('Escape')), 'escape');
  assert.equal(hotkeyAction(key('KeyX')), null);
});

test('modified keys, auto-repeat and typing in a field are ignored', () => {
  assert.equal(hotkeyAction(key('KeyF', { ctrlKey: true })), null); // browser find
  assert.equal(hotkeyAction(key('KeyH', { altKey: true })), null);
  assert.equal(hotkeyAction(key('KeyH', { metaKey: true })), null);
  assert.equal(hotkeyAction(key('KeyI', { shiftKey: true })), null);
  assert.equal(hotkeyAction(key('KeyF', { repeat: true })), null);
  assert.equal(hotkeyAction(key('KeyH', { target: field })), null);
  assert.equal(hotkeyAction(key('Escape', { target: field })), null);
});
