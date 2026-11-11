import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatDistance } from '../../src/tools/measure.js';

test('formatDistance rounds to 2 decimals in the UI language', () => {
  assert.equal(formatDistance(12.345, 'en'), '12.35 m');
  assert.equal(formatDistance(12.345, 'ru'), '12,35 м');
});

test('formatDistance keeps trailing zeros and has no thousands separator', () => {
  assert.equal(formatDistance(6, 'en'), '6.00 m');
  assert.equal(formatDistance(0.004, 'ru'), '0,00 м');
  assert.equal(formatDistance(1234.5, 'ru'), '1234,50 м');
});
