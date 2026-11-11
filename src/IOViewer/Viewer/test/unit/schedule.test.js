import { test } from 'node:test';
import assert from 'node:assert/strict';
import { prepareSchedule, scheduleState } from '../../src/model/schedule.js';

const DAY = 86400000;
const task = (type, start, end, elements) => ({ type, start: start * DAY, end: end * DAY, elements });
const state = (tasks, day) => {
  const { hidden, active } = scheduleState(tasks, day * DAY);
  return { hidden: [...hidden].sort(), active: Object.fromEntries(active) };
};

test('construct: hidden before its start, tinted while active, shown after', () => {
  const tasks = [task('construct', 10, 20, [1])];
  assert.deepEqual(state(tasks, 9), { hidden: [1], active: {} });
  assert.deepEqual(state(tasks, 10), { hidden: [], active: { 1: 'construct' } });
  assert.deepEqual(state(tasks, 20), { hidden: [], active: { 1: 'construct' } });
  assert.deepEqual(state(tasks, 21), { hidden: [], active: {} });
});

test('demolish: shown before, tinted while active, hidden after its end', () => {
  const tasks = [task('demolish', 10, 20, [1])];
  assert.deepEqual(state(tasks, 5), { hidden: [], active: {} });
  assert.deepEqual(state(tasks, 15), { hidden: [], active: { 1: 'demolish' } });
  assert.deepEqual(state(tasks, 21), { hidden: [1], active: {} });
});

test('temporary: shown only between start and end', () => {
  const tasks = [task('temporary', 10, 20, [1])];
  assert.deepEqual(state(tasks, 5), { hidden: [1], active: {} });
  assert.deepEqual(state(tasks, 15), { hidden: [], active: { 1: 'temporary' } });
  assert.deepEqual(state(tasks, 21), { hidden: [1], active: {} });
});

test('an element in several tasks is hidden when any of them hides it; the later active task tints it', () => {
  const tasks = [task('construct', 0, 10, [1, 2]), task('demolish', 30, 40, [1]), task('construct', 5, 15, [2])];
  assert.deepEqual(state(tasks, 20), { hidden: [], active: {} });
  assert.deepEqual(state(tasks, 41), { hidden: [1], active: {} });
  assert.deepEqual(state(tasks, 2), { hidden: [2], active: { 1: 'construct' } }); // task 3 has not started: 2 stays hidden
  assert.deepEqual(state(tasks, 7), { hidden: [], active: { 1: 'construct', 2: 'construct' } });
});

test('prepareSchedule maps attached Ids to element indices and parses the dates', () => {
  const elements = [{ id: 5 }, { id: 6 }, { id: 7 }];
  const schedule = prepareSchedule(
    {
      start: '2026-03-02T08:00:00Z',
      end: '2026-03-12T08:00:00Z',
      tasks: [{ id: 'T1', name: 'Slab', type: 'construct', start: '2026-03-02T08:00:00Z', end: '2026-03-12T08:00:00Z', attachedElements: [7, 99, 5] }],
    },
    elements,
  );
  assert.equal(schedule.start, Date.UTC(2026, 2, 2, 8));
  assert.equal(schedule.end, Date.UTC(2026, 2, 12, 8));
  assert.deepEqual(schedule.tasks, [{ name: 'Slab', type: 'construct', start: Date.UTC(2026, 2, 2, 8), end: Date.UTC(2026, 2, 12, 8), elements: [2, 0] }]);
});

test('prepareSchedule rejects a bad date or an unknown task type', () => {
  const base = { start: '2026-03-02T08:00:00Z', end: '2026-03-12T08:00:00Z' };
  const one = (t) => prepareSchedule({ ...base, tasks: [{ id: 'T1', name: 'x', attachedElements: [], ...t }] }, []);
  assert.throws(() => one({ type: 'construct', start: 'soon', end: base.end }), /T1/);
  assert.throws(() => one({ type: 'build', start: base.start, end: base.end }), /build/);
});
