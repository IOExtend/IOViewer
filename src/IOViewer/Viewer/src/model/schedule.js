export const TASK_TYPES = ['construct', 'demolish', 'temporary'];

function time(text, taskId) {
  const ms = Date.parse(text);
  if (Number.isNaN(ms)) throw new Error(`4D task '${taskId}' has an invalid date '${text}'.`);
  return ms;
}

/**
 * META `timeliner` with dates as epoch ms and attached element Ids as indices in META `elements` (Ids not in the
 * model are dropped): { start, end, tasks: [{ name, type, start, end, elements }] }.
 */
export function prepareSchedule(timeliner, elements) {
  const indexOf = new Map(elements.map((e, i) => [e.id, i]));
  const tasks = timeliner.tasks.map((task) => {
    if (!TASK_TYPES.includes(task.type)) throw new Error(`4D task '${task.id}' has an unknown type '${task.type}'.`);
    return {
      name: task.name,
      type: task.type,
      start: time(task.start, task.id),
      end: time(task.end, task.id),
      elements: task.attachedElements.filter((id) => indexOf.has(id)).map((id) => indexOf.get(id)),
    };
  });
  return { start: time(timeliner.start, 'schedule'), end: time(timeliner.end, 'schedule'), tasks };
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
