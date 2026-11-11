import { test } from 'node:test';
import assert from 'node:assert/strict';
import { initialDisplayMode } from '../../src/tools/display.js';

test('initialDisplayMode: wireframe wins over white, materials by default', () => {
  assert.equal(initialDisplayMode({ initialWireframe: true, initialWhiteMode: true }), 'wireframe');
  assert.equal(initialDisplayMode({ initialWireframe: false, initialWhiteMode: true }), 'white');
  assert.equal(initialDisplayMode({ initialWireframe: false, initialWhiteMode: false }), 'materials');
  assert.equal(initialDisplayMode(undefined), 'materials');
});
