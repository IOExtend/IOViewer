import { test } from 'node:test';
import assert from 'node:assert/strict';
import { visibleRange, createSearch, groupByCategory } from '../../src/ui/tree.js';

test('visibleRange covers the viewport plus overscan', () => {
  // Rows of 20 px, a 100 px viewport scrolled to 210 px shows rows 10..15; 3 rows of overscan each way.
  assert.deepEqual(visibleRange(210, 20, 100, 1000, 3), { start: 7, end: 19 });
});

test('visibleRange clamps to the list at both ends', () => {
  assert.deepEqual(visibleRange(0, 20, 100, 1000, 3), { start: 0, end: 8 });
  assert.deepEqual(visibleRange(19900, 20, 100, 1000, 3), { start: 992, end: 1000 });
  assert.deepEqual(visibleRange(0, 20, 100, 4, 3), { start: 0, end: 4 });
  assert.deepEqual(visibleRange(0, 20, 100, 0, 3), { start: 0, end: 0 });
});

test('visibleRange stays empty and in range when scrolled past the end (list shrank)', () => {
  assert.deepEqual(visibleRange(5000, 20, 100, 10, 3), { start: 10, end: 10 });
});

const elements = [
  { id: 300001, name: 'Ground Slab', category: 'Floors', type: 'Concrete 300' },
  { id: 300002, name: 'Column A1', category: 'Structural Columns', type: 'Concrete 400x400' },
  { id: 300063, name: 'Supply Duct SA-1', category: 'Ducts', type: 'Rectangular 600x400', sourceId: '2xQ$n5SLP5MBLyL442paFx' },
  { id: 7, name: '', category: '', type: null },
];

test('search finds by exact and partial Id', () => {
  const search = createSearch(elements);
  assert.deepEqual(search('300063'), [2]);
  assert.deepEqual(search('3000'), [0, 1, 2]);
  assert.deepEqual(search('7'), [3]);
});

test('search finds by type and name, ignoring case and surrounding spaces', () => {
  const search = createSearch(elements);
  assert.deepEqual(search('  RECTANGULAR '), [2]);
  assert.deepEqual(search('X400'), [1, 2]);
  assert.deepEqual(search('column a1'), [1]);
  assert.deepEqual(search('missing'), []);
});

test('search finds by source id, ignoring case; elements without one never match "undefined"', () => {
  const search = createSearch(elements);
  assert.deepEqual(search('2XQ$N5'), [2]);
  assert.deepEqual(search('undefined'), []);
});

test('groupByCategory sorts categories by name and keeps element order inside', () => {
  const groups = groupByCategory([...elements, { id: 9, name: 'Slab 2', category: 'Floors' }]);
  assert.deepEqual(groups.map((g) => [g.name, g.indices]), [
    ['', [3]],
    ['Ducts', [2]],
    ['Floors', [0, 4]],
    ['Structural Columns', [1]],
  ]);
});
