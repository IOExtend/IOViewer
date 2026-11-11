import { test } from 'node:test';
import assert from 'node:assert/strict';
import { selectInRect } from '../../src/select/boxSelect.js';
import { Selection } from '../../src/select/selection.js';

const rect = { x: 100, y: 100, width: 200, height: 100 }; // 100..300 x 100..200
const inside = { index: 1, minX: 120, minY: 120, maxX: 180, maxY: 180 };
const partly = { index: 2, minX: 250, minY: 150, maxX: 350, maxY: 190 };
const outside = { index: 3, minX: 400, minY: 120, maxX: 450, maxY: 180 };
const around = { index: 4, minX: 50, minY: 50, maxX: 350, maxY: 250 }; // contains the rect

test('window selects only elements entirely inside the rect', () => {
  assert.deepEqual(selectInRect(rect, 'window', [inside, partly, outside, around]), [1]);
});

test('crossing selects every element the rect touches', () => {
  assert.deepEqual(selectInRect(rect, 'crossing', [inside, partly, outside, around]), [1, 2, 4]);
});

test('an edge on the rect border counts as inside', () => {
  const flush = { index: 5, minX: 100, minY: 100, maxX: 300, maxY: 200 };
  assert.deepEqual(selectInRect(rect, 'window', [flush]), [5]);
});

test('an unknown mode throws', () => {
  assert.throws(() => selectInRect(rect, 'lasso', []), RangeError);
});

test('Selection.toggle twice leaves it empty', () => {
  const selection = new Selection();
  selection.toggle(7);
  assert.equal(selection.has(7), true);
  assert.equal(selection.size, 1);
  selection.toggle(7);
  assert.equal(selection.has(7), false);
  assert.equal(selection.size, 0);
});

test('Selection.set replaces, clear empties, and each change fires one event', () => {
  const selection = new Selection();
  let changes = 0;
  selection.addEventListener('change', () => changes++);
  selection.set([1, 2, 2, 3]);
  assert.deepEqual([...selection.values()], [1, 2, 3]);
  selection.set([4]);
  assert.deepEqual([...selection.values()], [4]);
  selection.clear();
  assert.equal(selection.size, 0);
  selection.clear(); // already empty: nothing changes
  assert.equal(changes, 3);
});
