export const TASK_TYPES = ['construct', 'demolish', 'temporary'];

// DateTimeOffset's default value (year 1) is how an exporter writes "no date".
const MIN_TIME = Date.parse('0002-01-01T00:00:00Z');

// Epoch ms of an ISO date, or NaN when it is missing, invalid or the default year 1.
function time(text) {
  const ms = typeof text === 'string' ? Date.parse(text) : NaN;
  return ms >= MIN_TIME ? ms : NaN;
}

/**
 * META `timeliner` with dates as epoch ms and attached element Ids as indices in META `elements`:
 * { start, end, tasks: [{ name, type, start, end, elements }] }. A malformed task (missing or invalid dates, end before
 * start, an unknown type) is left out, and Ids not in the model are dropped, so a bad schedule never stops the viewer.
 * The range spans the tasks kept (start = Infinity, end = -Infinity without any).
 */
export function prepareSchedule(timeliner, elements) {
  // A per-mesh stand-in element (`mesh: true`) carries a mesh id, which no task refers to.
  const indexOf = new Map(elements.flatMap((e, i) => (e.mesh ? [] : [[e.id, i]])));
  const tasks = [];
  for (const task of Array.isArray(timeliner?.tasks) ? timeliner.tasks : []) {
    const start = time(task?.start);
    const end = time(task?.end);
    if (!TASK_TYPES.includes(task?.type) || !(start <= end)) continue;
    const ids = Array.isArray(task.attachedElements) ? task.attachedElements : [];
    tasks.push({ name: task.name, type: task.type, start, end, elements: ids.filter((id) => indexOf.has(id)).map((id) => indexOf.get(id)) });
  }
  const start = tasks.reduce((min, task) => Math.min(min, task.start), Infinity);
  const end = tasks.reduce((max, task) => Math.max(max, task.end), -Infinity);
  return { start, end, tasks };
}

/**
 * What the schedule shows at `time` (epoch ms), for elements attached to tasks; other elements are not in it.
 * Construct hides its elements before its start, demolish after its end, temporary outside [start, end]; an element
 * is hidden when any of its tasks hides it. `active` maps a shown element to the type of its active task (the later
 * task in the list when several are active).
 */
export function scheduleState(tasks, time) {
  const hidden = new Set();
  const active = new Map();
  for (const task of tasks) {
    const before = time < task.start;
    const after = time > task.end;
    const hide = task.type === 'construct' ? before : task.type === 'demolish' ? after : before || after;
    for (const i of task.elements) {
      if (hide) hidden.add(i);
      else if (!before && !after) active.set(i, task.type);
    }
  }
  for (const i of hidden) active.delete(i);
  return { hidden, active };
}
