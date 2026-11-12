import { t } from '../i18n.js';
import { prepareSchedule, scheduleState } from '../model/schedule.js';
import { icons } from './icons.js';
import { el, iconButton } from './dom.js';
import { segmented } from './sectionsPanel.js';

const DAY_MS = 86400000;
const SPEEDS = ['1', '5', '15']; // schedule days per second
const COLORS = { construct: '#22c55e', demolish: '#ef4444', temporary: '#a855f7' };
const PLAYER_SPACE = '156px'; // --toolbar-space while the player bar is open: panels end above it

/**
 * «4D-график»: the task list and the 4D player, a bar above the toolbar with play/pause, a date slider across the
 * schedule, speed 1×/5×/15× (1× = one schedule day per second) and the current date. At a date the schedule
 * (scheduleState) hides and tints the elements attached to tasks; other elements are left alone. Malformed tasks are
 * left out (prepareSchedule).
 *
 * The schedule hides elements only in the scene's 'schedule' visibility layer, so the user's Hide/Isolate/Show all and
 * the links (their own layers) stay as they are and combine with it; closing the player clears that layer and its
 * tints. Dates are shown in UTC: exporters write the schedule's wall-clock times with a 'Z'. Returns the player, or
 * null without a usable 4D schedule.
 */
export function mountTimeliner({ root, shell, timeliner, elements, scene }) {
  const schedule = prepareSchedule(timeliner, elements);
  if (schedule.tasks.length === 0) {
    shell.registerPanel('timeliner', { icon: icons.timeliner, title: t('panel.timeliner'), visible: false, render: () => {} });
    return null;
  }
  const dayFormat = new Intl.DateTimeFormat(undefined, { dateStyle: 'short', timeZone: 'UTC' });
  const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeZone: 'UTC' });
  let date = schedule.start;
  let speed = 1;
  let frame = 0; // requestAnimationFrame id while playing
  let last = 0;
  let isOpen = false;
  let hidden = new Set(); // elements in the 'schedule' layer
  let tinted = new Map(); // element -> task type

  const bar = el('div', 'ioviewer-player ioviewer-floating');
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', t('player.title'));
  bar.hidden = true;
  const playButton = iconButton('ioviewer-icon-button ioviewer-player-play', icons.play, t('player.play'));
  playButton.addEventListener('click', () => (frame ? pause() : play()));
  const label = el('output', 'ioviewer-player-date');
  const slider = el('input', 'ioviewer-player-slider');
  Object.assign(slider, { type: 'range', min: String(schedule.start), max: String(schedule.end), step: 'any' });
  slider.setAttribute('aria-label', t('player.date'));
  slider.addEventListener('input', () => setDate(Number(slider.value)));
  const speeds = segmented(t('player.speed'), SPEEDS.map((s) => [s, `${s}×`]), (s) => {
    speed = Number(s);
    speeds.update(s);
  });
  speeds.update(String(speed));
  const close = iconButton('ioviewer-panel-close', icons.close, t('close'));
  close.addEventListener('click', closePlayer);
  bar.append(playButton, label, slider, speeds.element, close);
  root.append(bar);

  function apply() {
    const state = scheduleState(schedule.tasks, date);
    const show = [...hidden].filter((i) => !state.hidden.has(i));
    const hide = [...state.hidden].filter((i) => !hidden.has(i));
    hidden = state.hidden;
    const clear = [...tinted.keys()].filter((i) => state.active.get(i) !== tinted.get(i));
    const paint = new Map(); // type -> elements to tint with it
    for (const [i, type] of state.active) {
      if (tinted.get(i) === type) continue;
      if (!paint.has(type)) paint.set(type, []);
      paint.get(type).push(i);
    }
    tinted = state.active;
    if (show.length) scene.setLayerHidden('schedule', show, false);
    if (hide.length) scene.setLayerHidden('schedule', hide, true);
    if (clear.length) scene.setTint(clear, null);
    for (const [type, list] of paint) scene.setTint(list, COLORS[type]);
  }

  function setDate(value) {
    date = Math.min(Math.max(value, schedule.start), schedule.end);
    slider.value = String(date);
    label.textContent = dateFormat.format(date);
    if (isOpen) apply();
  }

  function open() {
    if (isOpen) return;
    isOpen = true;
    bar.hidden = false;
    root.style.setProperty('--toolbar-space', PLAYER_SPACE);
    setDate(schedule.start);
  }

  function closePlayer() {
    if (!isOpen) return;
    pause();
    isOpen = false;
    scene.setTint([...tinted.keys()], null);
    tinted = new Map();
    hidden = new Set();
    scene.clearLayer('schedule');
    bar.hidden = true;
    root.style.removeProperty('--toolbar-space');
  }

  function tick(now) {
    setDate(date + (Math.max(now - last, 0) / 1000) * speed * DAY_MS);
    last = now;
    if (date >= schedule.end) pause();
    else frame = requestAnimationFrame(tick);
  }

  function play() {
    open();
    if (frame) return;
    if (date >= schedule.end) setDate(schedule.start);
    last = performance.now();
    frame = requestAnimationFrame(tick);
    showPlaying();
  }

  function pause() {
    cancelAnimationFrame(frame);
    frame = 0;
    showPlaying();
  }

  function showPlaying() {
    const text = t(frame ? 'player.pause' : 'player.play');
    playButton.innerHTML = frame ? icons.pause : icons.play; // static icon markup
    playButton.title = text;
    playButton.setAttribute('aria-label', text);
  }

  shell.registerPanel('timeliner', {
    icon: icons.timeliner,
    title: t('panel.timeliner'),
    render: (body) => {
      const start = el('button', 'ioviewer-text-button ioviewer-player-open');
      start.type = 'button';
      start.insertAdjacentHTML('afterbegin', icons.play); // static icon markup
      start.append(el('span', '', t('player.play')));
      start.addEventListener('click', play);
      const list = el('div', 'ioviewer-row-list');
      for (const task of schedule.tasks) {
        const name = String(task.name ?? '');
        const row = el('div', 'ioviewer-row ioviewer-task');
        row.dataset.type = task.type;
        row.setAttribute('title', `${name} · ${t(`task.${task.type}`)}`);
        const dates = `${dayFormat.format(task.start)} – ${dayFormat.format(task.end)}`;
        row.append(el('span', 'ioviewer-row-name', name), el('span', 'ioviewer-task-dates', dates));
        list.append(row);
      }
      body.append(start, list);
    },
  });

  return {
    open,
    close: closePlayer,
    play,
    pause,
    setDate,
    get date() {
      return date;
    },
    get isOpen() {
      return isOpen;
    },
  };
}
