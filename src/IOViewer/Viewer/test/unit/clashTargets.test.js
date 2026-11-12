import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveClashElements } from '../../src/model/clashTargets.js';

const elements = [
  { id: 10, name: 'Duct' },
  { id: 11, name: 'Beam' },
  { id: 12, name: 'Wall' },
  { id: 13, name: 'Wall' },
];

test('resolveClashElements finds both elements by Id', () => {
  const clash = { element1Id: 13, element2Id: 10, element1Name: 'Wall', element2Name: 'Duct' };
  assert.deepEqual(resolveClashElements(clash, elements), [3, 0]);
});

test('resolveClashElements falls back to names when they are unique', () => {
  const clash = { element1Id: null, element2Id: null, element1Name: 'Duct', element2Name: 'Beam' };
  assert.deepEqual(resolveClashElements(clash, elements), [0, 1]);
});

test('resolveClashElements gives nothing for a repeated name', () => {
  const clash = { element1Id: null, element2Id: null, element1Name: 'Wall', element2Name: 'Wall' };
  assert.deepEqual(resolveClashElements(clash, elements), []);
  const mixed = { element1Id: null, element2Id: null, element1Name: 'Wall', element2Name: 'Beam' };
  assert.deepEqual(resolveClashElements(mixed, elements), [1]);
});

test('resolveClashElements trusts an Id over the name and drops an unknown Id', () => {
  const clash = { element1Id: 99, element2Id: 11, element1Name: 'Duct', element2Name: 'Beam' };
  assert.deepEqual(resolveClashElements(clash, elements), [1]);
});

test('resolveClashElements lists an element once and accepts missing fields', () => {
  assert.deepEqual(resolveClashElements({ element1Id: 10, element2Id: 10 }, elements), [0]);
  assert.deepEqual(resolveClashElements({}, elements), []);
});

test('resolveClashElements never matches a per-mesh stand-in element by Id', () => {
  const withMesh = [{ id: 7, name: 'Mesh 7', mesh: true }, { id: 7, name: 'Pipe' }];
  assert.deepEqual(resolveClashElements({ element1Id: 7, element2Id: null }, withMesh), [1]);
  assert.deepEqual(resolveClashElements({ element1Id: 7, element2Id: null }, [withMesh[0]]), []);
});
