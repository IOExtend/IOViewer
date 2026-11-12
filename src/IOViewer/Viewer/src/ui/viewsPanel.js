import * as THREE from 'three';
import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el } from './dom.js';

const TOUR_PAUSE_MS = 3000;

// Row button showing `text` on one line (ellipsis); the full text is its tooltip.
export function rowButton(className, text) {
  const button = el('button', className);
  button.type = 'button';
  button.setAttribute('title', text);
  button.append(el('span', 'ioviewer-row-name', text));
  return button;
}

/**
 * «Виды»: the saved viewpoints. A click flies the camera there (its stored `up` is ignored: up stays +Z; the
 * projection becomes orthographic only for a viewpoint marked so). «Тур по видам» flies through all of them in turn,
 * pausing 3 s at each, round and round, until stopped by its button or by any press, wheel or key.
 */
export function mountViews({ shell, toolbar, controls, views }) {
  let tour = null; // { next, frame, timer }
  const tourButton = el('button', 'ioviewer-text-button ioviewer-tour');
  tourButton.type = 'button';

  function go(view) {
    const orthographic = view.camera.projection === 'orthographic';
    controls.setProjection(orthographic ? 'orthographic' : 'perspective');
    toolbar.setActive('projection', orthographic);
    controls.animateTo({
      position: new THREE.Vector3(...view.camera.position),
      target: new THREE.Vector3(...view.camera.target),
    });
  }

  // Next stop once the flight there has ended and the pause is over.
  function step() {
    go(views[tour.next]);
    tour.next = (tour.next + 1) % views.length;
    const wait = () => {
      if (controls.animating) tour.frame = requestAnimationFrame(wait);
      else tour.timer = setTimeout(step, TOUR_PAUSE_MS);
    };
    tour.frame = requestAnimationFrame(wait);
  }

  // A press on the tour button, or Enter/Space on it, is left to its click, which toggles the tour.
  const onButton = (e) => tourButton.contains(e.target);
  const stopOnPress = (e) => !onButton(e) && stopTour();
  const stopOnKey = (e) => !(onButton(e) && (e.key === 'Enter' || e.key === ' ')) && stopTour();

  function stopTour() {
    if (!tour) return;
    cancelAnimationFrame(tour.frame);
    clearTimeout(tour.timer);
    tour = null;
    window.removeEventListener('pointerdown', stopOnPress, true);
    window.removeEventListener('wheel', stopTour, true);
    window.removeEventListener('keydown', stopOnKey, true);
    showTourState();
  }

  function startTour() {
    tour = { next: 0, frame: 0, timer: 0 };
    window.addEventListener('pointerdown', stopOnPress, true);
    window.addEventListener('wheel', stopTour, true);
    window.addEventListener('keydown', stopOnKey, true);
    showTourState();
    step();
  }

  function showTourState() {
    const label = t(tour ? 'views.stop' : 'views.tour');
    tourButton.replaceChildren();
    tourButton.insertAdjacentHTML('afterbegin', tour ? icons.pause : icons.play); // static icon markup
    tourButton.append(el('span', '', label));
    tourButton.setAttribute('aria-pressed', String(!!tour));
  }
  tourButton.addEventListener('click', () => (tour ? stopTour() : startTour()));
  showTourState();

  shell.registerPanel('views', {
    icon: icons.views,
    title: t('panel.views'),
    visible: views.length > 0,
    render: (body) => {
      const list = el('div', 'ioviewer-row-list');
      for (const view of views) {
        const row = rowButton('ioviewer-row ioviewer-view', String(view.name ?? ''));
        row.addEventListener('click', () => go(view));
        list.append(row);
      }
      body.append(tourButton, list);
    },
  });
}
