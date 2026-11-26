import * as THREE from 'three';
import { loadModelData, ModelDataError, readModelMeta } from './data.js';
import { ModelScene, ModelTooLargeError } from './engine/modelScene.js';
import { PointScene } from './engine/pointScene.js';
import { lang, t } from './i18n.js';
import { NavigationControls, needsLogarithmicDepth } from './nav/controls.js';
import { ViewCube } from './nav/viewCube.js';
import { Picker } from './engine/picking.js';
import { MotionDetail } from './engine/motionDetail.js';
import { Selection } from './select/selection.js';
import { selectInRect, screenBoxes } from './select/boxSelect.js';
import { mountUI } from './ui/app.js';
import { Sections } from './tools/sections.js';
import { SectionGizmo } from './tools/sectionGizmo.js';
import { SectionCaps } from './tools/sectionCaps.js';
import { mountSections } from './ui/sectionsPanel.js';
import { Measure } from './tools/measure.js';
import { MeasureSnap } from './tools/measureSnap.js';
import { GridAxes } from './tools/grids.js';
import { mountDisplay } from './tools/display.js';
import { mountViews } from './ui/viewsPanel.js';
import { mountClashes } from './ui/clashesPanel.js';
import { mountTimeliner } from './ui/timeliner.js';
import { mountLinks } from './ui/linksPanel.js';
import { mountScanMap } from './ui/scanMap.js';
import { createPanoramaSpheres } from './ui/panoramaSpheres.js';

document.documentElement.lang = lang;
const canvas = document.getElementById('ioviewer-canvas');
const testOptions = window.IOVIEWER_TEST ?? {};
const startup = testOptions.startup;

function showMessage(text) {
  const message = document.getElementById('ioviewer-message');
  message.textContent = text;
  message.hidden = false;
}

// The context is asked for here, with the attributes three would ask for, so that without WebGL 2 the page says so
// instead of three logging an error; damaged model data is reported on the page too.
try {
  const meta = readModelMeta(document, startup);
  if (meta.title) document.title = meta.title;
  const context = canvas.getContext('webgl2', { antialias: true, stencil: true });
  if (context) start(loadModelData(document, startup, meta), context);
  else showMessage(t('noWebGL'));
} catch (error) {
  if (!(error instanceof ModelDataError)) throw error;
  showMessage(t('badData'));
}

function start(data, context) {
  const renderer = new THREE.WebGLRenderer({
    canvas, context, antialias: true, stencil: true, logarithmicDepthBuffer: needsLogarithmicDepth(data.meta),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.autoClearStencil = false; // the cap pass clears its stencil per face
  renderer.localClippingEnabled = true;

  const world = new THREE.Scene();
  const initialBackground = '#1f2228';
  const background = new THREE.Color(initialBackground);
  renderer.setClearColor(background, 1);
  const sky = new THREE.HemisphereLight('#ffffff', '#8a8f99', 1.6);
  sky.position.set(0, 0, 1);
  world.add(sky);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
  camera.up.set(0, 0, 1);
  camera.position.set(1, -1, 0.8); // initial view direction: front-right, from above; fitBox keeps it
  const headlight = new THREE.DirectionalLight('#ffffff', 1.4);
  headlight.position.set(0.3, 0.6, 0);
  camera.add(headlight, headlight.target);
  headlight.target.position.set(0, 0, -1);
  world.add(camera);

  // Test-only engine options (e2e and the performance harness): chunkVertices, noHideBranch, pickFloat, slotLimit,
  // mergedCap, minRepeats, cellExtent, startup (optional phase samples).
  // A model over what the viewer can draw opens without geometry and says why; the tree and properties still work.
  let tooLarge = false;
  startup?.('sceneStart');
  const scene = createScene();
  const points = new PointScene(data);
  startup?.('sceneEnd');
  data.releaseBinary(); // the scene has copied what it needs
  if (!tooLarge && scene.totalCost === 0 && points.count === 0) showMessage(t('noGeometry'));
  // Starting at the whole model's cost, a GPU that draws it in time orbits at full detail; a slower one shrinks it.
  // Larger models start at about what an integrated GPU draws at 30 fps (a 200k-element model, 19.2e6): from a 1M one's
  // 134e6 the first gesture would take some 20 frames of 200 ms to shrink. A faster GPU grows the budget.
  const motionDetail = new MotionDetail(scene, requestRender, Math.min(scene.totalCost, 20e6));
  world.add(scene.root);
  world.add(points.root);
  const panoramaSpheres = points.count ? createPanoramaSpheres(data.meta.panoramas) : null;
  if (panoramaSpheres) world.add(panoramaSpheres.mesh);
  const visibleBox = () => scene.visibleBox();
  // Sections never change which elements are shown, so they leave the bounds (orbit pivot, near/far) as they are.
  const sections = new Sections(scene, visibleBox(), data.meta.sections);
  points.syncVisibility(scene);
  points.syncAppearance(scene);
  const syncPointClipping = () => {
    const { planes, intersection } = sections.clipping();
    points.setClipping(planes, intersection);
  };
  syncPointClipping();
  const hasMeshes = scene.slotCount > 0;
  const canFillSections = hasMeshes && context.getContextAttributes()?.stencil === true;
  let sectionCaps;
  const sectionGizmo = new SectionGizmo(sections, canvas);
  world.add(sectionGizmo.group); // outside scene.root: the picking id pass renders only the model
  const uiRoot = document.getElementById('ioviewer-ui');
  const measure = new Measure(uiRoot);
  const grids = new GridAxes(uiRoot, data.meta.grids ?? []);
  world.add(measure.group, grids.group); // overlays too

  // A model over what the viewer can draw opens without geometry and says why; the tree and properties still work.
  function createScene() {
    try {
      const model = new ModelScene(data, { ...testOptions, maxTextureSize: renderer.capabilities.maxTextureSize });
      return model;
    } catch (error) {
      if (!(error instanceof ModelTooLargeError)) throw error;
      tooLarge = true;
      showMessage(t('tooLarge').replace('{count}', error.count).replace('{limit}', error.limit));
      const none = (type) => ({ o: 0, n: 0, t: type });
      const instances = { count: 0, geometry: none('u32'), material: none('u32'), element: none('i32'), matrix: none('f32') };
      return new ModelScene({ ...data, meta: { ...data.meta, instances } });
    }
  }
  // The model's GPU buffers keep no CPU copy, so a lost context cannot be rebuilt, not even when the browser restores
  // it: say so instead of a blank page, and draw nothing more (the picker stops too).
  let contextLost = false;
  canvas.addEventListener('webglcontextlost', () => {
    contextLost = true;
    showMessage(t('contextLost'));
  });

  let resolveReady;
  const ready = new Promise((resolve) => (resolveReady = resolve));
  let firstRender = startup;
  let frameRequested = false;
  function requestRender() {
    if (frameRequested || contextLost) return;
    frameRequested = true;
    motionDetail.requested(performance.now());
    requestAnimationFrame(() => {
      frameRequested = false;
      if (contextLost) return;
      const rect = canvas.getBoundingClientRect();
      controls.camera.updateMatrixWorld(); // the screen labels project with it before render() would update it
      if (scanMap) panoramaSpheres?.update(controls.camera, rect, scanMap.showSphere);
      sectionGizmo.update(controls.camera);
      measure.update(controls.camera, rect);
      grids.update(controls.camera, rect);
      motionDetail.begin(controls.camera, rect.height, performance.now());
      firstRender?.('renderStart');
      if (sections.fill && canFillSections) {
        sectionCaps ??= new SectionCaps(scene, sections, data);
        sectionCaps.render(renderer, world, controls.camera);
      } else renderer.render(world, controls.camera);
      if (firstRender) {
        firstRender('renderEnd');
        firstRender = undefined;
      }
      motionDetail.end(performance.now());
      viewCube.update();
      resolveReady();
    });
  }
  scene.root.addEventListener('change', requestRender);
  sections.addEventListener('change', () => {
    syncPointClipping();
    requestRender();
  });
  sectionGizmo.addEventListener('change', requestRender);
  measure.addEventListener('change', requestRender);
  measure.addEventListener('previewchange', requestRender);
  grids.addEventListener('change', requestRender);

  const picker = new Picker(renderer, scene, camera, { points, pickFloat: testOptions.pickFloat });
  const measureSnap = new MeasureSnap(picker, sections, data);
  let measureFrame = 0, measureHover = null;
  function clearMeasurePreview() {
    cancelAnimationFrame(measureFrame);
    measureFrame = 0;
    measureHover = null;
    measure.setPreview(null);
  }
  function updateMeasurePreview() {
    measureFrame = 0;
    if (measureHover) measure.setPreview(measureSnap.target(...measureHover));
  }
  function refreshMeasurePreview() {
    if (!measureHover) return;
    measure.setPreview(null);
    cancelAnimationFrame(measureFrame);
    // Wait for a frame without another view change before reading the pick tile.
    measureFrame = requestAnimationFrame(() => {
      measureFrame = requestAnimationFrame(updateMeasurePreview);
    });
  }
  canvas.addEventListener('pointermove', (e) => {
    if (!measure.active || e.buttons) return clearMeasurePreview();
    measureHover = [e.clientX, e.clientY];
    if (!measureFrame) measureFrame = requestAnimationFrame(updateMeasurePreview);
  });
  for (const event of ['pointerdown', 'pointerleave', 'pointercancel', 'webglcontextlost'])
    canvas.addEventListener(event, clearMeasurePreview);
  scene.root.addEventListener('change', (e) => {
    if (e.detail.kind !== 'appearance') refreshMeasurePreview();
  });
  const controls = new NavigationControls(camera, canvas, {
    pick: (x, y) => picker.pick(x, y)?.point ?? null,
    visibleBox,
  });
  controls.addEventListener('change', () => {
    picker.camera = controls.camera; // swaps with the projection
    refreshMeasurePreview();
    requestRender();
  });
  scene.root.addEventListener('change', (e) => {
    if (e.detail.kind === 'appearance') points.syncAppearance(scene);
    if (e.detail.kind !== 'visibility') return; // a highlight must not walk every instance for the bounds
    points.syncVisibility(scene);
    controls.invalidateBounds();
    controls.resize();
  });

  const selection = new Selection();
  selection.addEventListener('change', () => scene.setHighlighted([...selection.values()]));
  const ui = mountUI({ root: uiRoot, data, scene, controls, picker, selection, measure });
  mountSections({ root: uiRoot, ...ui, sections, selection, canFill: canFillSections, hasMeshes });
  const { meta } = data;
  const restoreLinkedModels = mountLinks({ ...ui, files: meta.linkedFiles ?? [], elements: meta.elements, scene });
  mountViews({ ...ui, controls, scene, sections, selection, restoreLinkedModels,
    views: meta.viewpoints ?? [], bcfTopics: meta.bcfTopics ?? [] });
  const clashes = mountClashes({ ...ui, tests: meta.clashTests ?? [], elements: meta.elements, scene, controls, selection });
  world.add(clashes.group); // overlay, like the measure
  const timeliner = mountTimeliner({ root: uiRoot, ...ui, timeliner: meta.timeliner, elements: meta.elements, scene });
  const setBackground = (color) => {
    renderer.setClearColor(background.set(color), 1);
    const { r, g, b } = background;
    // The equality point of the white and black contrast ratios against a linear sRGB background.
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const text = luminance > Math.sqrt(0.0525) - 0.05 ? '#000' : '#fff';
    uiRoot.style.setProperty('--viewport-text', color === initialBackground ? '' : text);
    requestRender();
  };
  for (const popover of mountDisplay({ root: uiRoot, toolbar: ui.toolbar, scene, meta, grids, initialBackground, setBackground, hasMeshes }))
    ui.onEscape(popover.close);
  ui.toolbar.setHandler('distance', () => {
    clearMeasurePreview();
    measure.setActive(!measure.active);
    if (!measure.active) measureSnap.release();
    ui.toolbar.setActive('distance', measure.active);
  });
  ui.toolbar.setActive('distance', false);
  ui.onEscape(() => {
    clearMeasurePreview();
    return measure.clear();
  });
  // The overlays stay within the camera's near/far even when what is shown shrinks (isolate, hide).
  const overlayBounds = () => {
    controls.setExtraBounds('grids', grids.visible ? grids.box : null);
    controls.setExtraBounds('measure', measure.box);
  };
  grids.addEventListener('change', overlayBounds);
  measure.addEventListener('change', overlayBounds);
  overlayBounds();

  // Click selects, Ctrl+click toggles; a click on nothing (or on a mesh without an element) clears unless a modifier is
  // held. With the distance tool on, a click on the model places a measure point instead and the selection stays.
  controls.addEventListener('click', (e) => {
    const { x, y, ctrl, shift } = e.detail;
    if (measure.active) {
      const target = measureSnap.target(x, y);
      if (target) measure.add(target.point);
      return;
    }
    const station = !ctrl && !shift ? panoramaSpheres?.pick(x, y) : undefined;
    if (station !== undefined) {
      scanMap.open(station);
      return;
    }
    const hit = picker.pick(x, y);
    const element = hit?.element ?? -1;
    if (ctrl) {
      if (element >= 0) selection.toggle(element);
    } else if (element >= 0) selection.set([element]);
    else if (!shift) selection.clear();
  });
  // Box select replaces the selection, Ctrl+box adds to it; a sliver (< 4 px either way) counts as a click on nothing.
  // Elements the section cuts away entirely are not selected. With the distance tool on, the selection stays.
  controls.addEventListener('boxselect', (e) => {
    if (measure.active) return;
    const { rect, mode, ctrl, shift } = e.detail;
    if (rect.width < 4 || rect.height < 4) {
      if (!ctrl && !shift) selection.clear();
      return;
    }
    const box = new THREE.Box3();
    const found = selectInRect(rect, mode, screenBoxes(scene, controls.camera, canvas.getBoundingClientRect()));
    const clip = sections.clipping(); // once, not per element
    const shown = found.filter((i) => !sections.isCut(scene.elementBox(i, box), clip));
    selection.set(ctrl ? [...selection.values(), ...shown] : shown);
  });

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    controls.resize();
  });
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  controls.resize(); // also schedules the first frame for an empty model
  controls.fitBox(visibleBox(), false);
  const scanMap = mountScanMap(uiRoot, data, points, scene, controls, requestRender);
  const viewCube = new ViewCube(document.getElementById('ioviewer-ui'), camera, controls); // home = this load view

  // The canvas and the view cube take no focus, so a press on them takes it from a panel field or a toolbar button:
  // the hotkeys work again and Space or Enter does not repeat the last tool.
  window.addEventListener('pointerdown', (e) => {
    if (e.target === canvas || viewCube.element.contains(e.target)) document.activeElement?.blur();
  }, true);

  window.__ioviewer = { scene, points, motionDetail, controls, picker, selection, ui, viewCube, sections, sectionGizmo,
    measure, measureSnap, grids, clashes, timeliner, ready, get camera() { return controls.camera; } };
}
