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

test('prepareSchedule leaves out malformed tasks and spans the range of the good ones', () => {
  const good = (id, start, end) => ({ id, name: id, type: 'construct', start, end, attachedElements: [5] });
  const schedule = prepareSchedule(
    {
      start: '0001-01-01T00:00:00Z', // the exporter's overall range includes the bad tasks
      end: '2027-01-01T00:00:00Z',
      tasks: [
        { id: 'no dates', name: 'x', type: 'construct', attachedElements: [5] },
        { ...good('invalid'), start: 'soon', end: '2026-03-12T08:00:00Z' },
        { ...good('reversed'), start: '2026-03-12T08:00:00Z', end: '2026-03-02T08:00:00Z' },
        { ...good('default year'), start: '0001-01-01T00:00:00Z', end: '2026-03-12T08:00:00Z' },
        { ...good('unknown type'), type: 'build', start: '2026-03-02T08:00:00Z', end: '2026-03-12T08:00:00Z' },
        { id: 'no ids', name: 'n', type: 'demolish', start: '2026-04-01T00:00:00Z', end: '2026-04-02T00:00:00Z' },
        { ...good('unknown ids'), start: '2026-03-05T00:00:00Z', end: '2026-03-06T00:00:00Z', attachedElements: [99, 5, 'x'] },
        null,
        good('ok', '2026-03-02T08:00:00Z', '2026-03-12T08:00:00Z'),
      ],
    },
    [{ id: 5 }],
  );
  assert.deepEqual(schedule.tasks.map((task) => [task.name, task.elements]), [['n', []], ['unknown ids', [0]], ['ok', [0]]]);
  assert.equal(schedule.start, Date.UTC(2026, 2, 2, 8));
  assert.equal(schedule.end, Date.UTC(2026, 3, 2));
  // The good tasks still drive the 4D state.
  assert.deepEqual([...scheduleState(schedule.tasks, Date.UTC(2026, 2, 1)).hidden], [0]);
  assert.deepEqual([...scheduleState(schedule.tasks, Date.UTC(2026, 2, 5, 12)).active], [[0, 'construct']]);
});

test('prepareSchedule without a schedule or without good tasks has no tasks', () => {
  for (const timeliner of [null, {}, { tasks: 'none' }, { tasks: [{ type: 'construct' }] }]) {
    assert.deepEqual(prepareSchedule(timeliner, []).tasks, []);
  }
});

test('prepareSchedule never attaches a per-mesh stand-in element by Id', () => {
  const timeliner = { tasks: [{ name: 'A', type: 'construct', start: '2026-01-01T00:00:00Z', end: '2026-01-02T00:00:00Z', attachedElements: [7, 8] }] };
  const elements = [{ id: 7, mesh: true }, { id: 8 }, { id: 7 }];
  assert.deepEqual(prepareSchedule(timeliner, elements).tasks[0].elements, [2, 1]);
});
