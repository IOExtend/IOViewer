import * as THREE from 'three';

const HIGHLIGHT = new THREE.Color('#f59e0b');

export function meshScene(elements, nodes, bounds, context, setClipping, render) {
  const root = new EventTarget();
  const parents = new Int32Array(nodes.length).fill(-1);
  const leaves = Array.from({ length: elements.length }, () => []);
  const limit = context.getParameter(context.MAX_TEXTURE_SIZE);
  const width = Math.min(Math.max(elements.length, 1), limit);
  const height = Math.max(1, Math.ceil(elements.length / width));
  if (height > limit) throw new Error('Model exceeds the element state texture limit.');
  const rgba = new Uint8Array(width * height * 4);
  const texture = new THREE.DataTexture(rgba, width, height);
  const hidden = new Set(), layers = new Map(), tinted = new Map();
  let highlighted = new Set(), changedElements = 0, hiddenElements = 0, visibleBounds;
  let mode = 'materials', opacity = 1;
  const indexed = nodes.every((node) => !node.pick || node.members);
  const legacy = [0];
  for (const node of nodes) {
    node.affected = node.hidden = 0;
    node.total = node.members?.length ?? 0;
    node.hasTexture = node.groups?.some(({ texture }) => texture !== undefined) ?? !!node.uv;
    node.hasClosed = node.groups?.some((group) => group.closed) ?? false;
    for (const child of node.children) {
      parents[child] = node.id;
      node.total += nodes[child].total;
      node.hasTexture ||= nodes[child].hasTexture;
      node.hasClosed ||= nodes[child].hasClosed;
    }
    for (const index of node.members ?? []) leaves[index].push(node.id);
  }
  texture.needsUpdate = true;

  const event = (kind) => {
    if (kind === 'visibility') visibleBounds = undefined;
    root.dispatchEvent(new CustomEvent('change', { detail: { kind } }));
    render();
  };
  const state = (i) => rgba[i * 4 + 3];
  const isVisible = (i) => !!elements[i] && state(i) !== 255 && !elements[i].noGeometry;
  function update(indices, kind) {
    for (const i of indices) {
      if (!elements[i]) continue;
      const previous = state(i);
      const color = highlighted.has(i) ? HIGHLIGHT : tinted.get(i);
      const next = hidden.has(i) || [...layers.values()].some((items) => items.has(i)) ? 255 : color ? 128 : 0;
      if (color) rgba.set([color.r * 255, color.g * 255, color.b * 255], i * 4);
      rgba[i * 4 + 3] = next;
      const appearanceDelta = Number(next !== 0) - Number(previous !== 0);
      const hiddenDelta = Number(next === 255) - Number(previous === 255);
      changedElements += appearanceDelta;
      hiddenElements += hiddenDelta;
      if (!appearanceDelta && !hiddenDelta) continue;
      for (const leaf of leaves[i]) for (let node = leaf; node >= 0; node = parents[node]) {
        nodes[node].affected += appearanceDelta;
        nodes[node].hidden += hiddenDelta;
      }
    }
    texture.needsUpdate = true;
    event(kind);
  }
  const replace = (set, indices, kind) => {
    const previous = [...set];
    set.clear();
    for (const i of indices) set.add(i);
    update(new Set([...previous, ...set]), kind);
  };
  const selectionComplement = (selection) => {
    const keep = new Set(selection);
    return elements.flatMap((_, i) => keep.has(i) ? [] : [i]);
  };

  const scene = {
    root, elementCount: elements.length, setClipping, isVisible,
    elementBox(i, box = new THREE.Box3()) {
      const element = elements[i];
      if (!element || element.noGeometry) return box.makeEmpty();
      return box.set(box.min.fromArray(element.min), box.max.fromArray(element.max));
    },
    visibleBox() {
      if (!hiddenElements) return bounds.clone();
      if (!visibleBounds) {
        visibleBounds = new THREE.Box3();
        const box = new THREE.Box3();
        for (let i = 0; i < elements.length; i++) if (isVisible(i)) visibleBounds.union(scene.elementBox(i, box));
      }
      return visibleBounds.clone();
    },
    instancesOf(i) { return indexed ? leaves[i] : elements[i]?.noGeometry ? [] : legacy; },
    showAll() { replace(hidden, [], 'visibility'); },
    isolate(indices) { replace(hidden, selectionComplement(indices), 'visibility'); },
    setHiddenElements(indices) { replace(hidden, indices, 'visibility'); },
    setVisible(indices, visible) {
      for (const i of indices) visible ? hidden.delete(i) : hidden.add(i);
      update(indices, 'visibility');
    },
    setLayerHidden(layer, indices, hide) {
      if (!layers.has(layer)) layers.set(layer, new Set());
      const items = layers.get(layer);
      for (const i of indices) hide ? items.add(i) : items.delete(i);
      update(indices, 'visibility');
    },
    replaceLayerHidden(layer, indices) {
      const before = layers.get(layer) ?? [];
      layers.set(layer, new Set(indices));
      update(new Set([...before, ...indices]), 'visibility');
    },
    clearLayer(layer) { scene.replaceLayerHidden(layer, []); },
    setHighlighted(indices) {
      const before = highlighted;
      highlighted = new Set(indices);
      update(new Set([...before, ...highlighted]), 'appearance');
    },
    setTint(indices, color) {
      const tint = color == null ? null : new THREE.Color(color);
      for (const i of indices) tint ? tinted.set(i, tint) : tinted.delete(i);
      update(indices, 'appearance');
    },
    get mode() { return mode; },
    get opacity() { return opacity; },
    setDisplayMode(value) { mode = value; event('appearance'); },
    setOpacity(value) { opacity = value; event('appearance'); },
    affected(node) { return indexed ? node.affected > 0 : changedElements > 0; },
    visibilityAffects(node) { return indexed ? node.hidden > 0 : hiddenElements > 0; },
    fullyHidden(node) { return node.total > 0 && node.total === node.hidden; },
    patchMaterial(material, { stencil = false, white = false, placed = false, tagged = true } = {}) {
      const key = material.customProgramCacheKey();
      material.customProgramCacheKey = () => `${key}-element-${stencil}-${white}-${placed}-${tagged}`;
      material.onBeforeCompile = (shader) => {
        if (placed) {
          shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
            attribute vec3 placementOffset;
            attribute vec4 placementColor;`);
          shader.vertexShader = shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\ntransformed += placementOffset;');
          if (!stencil) shader.vertexShader = shader.vertexShader.replace('#include <color_vertex>',
            `#include <color_vertex>\nvColor = placementColor; ${white ? 'vColor.rgb = vec3(0.95);' : ''}`);
        }
        if (tagged) {
          shader.uniforms.elementState = { value: texture };
          shader.uniforms.elementWidth = { value: width };
          shader.vertexShader = shader.vertexShader.replace('#include <common>', `#include <common>
            attribute float elementIndex;
            uniform highp sampler2D elementState;
            uniform int elementWidth;`);
          shader.vertexShader = shader.vertexShader.replace('#include <project_vertex>', `
            int iovElement = int(elementIndex);
            vec4 iovState = texelFetch(elementState, ivec2(iovElement % elementWidth, iovElement / elementWidth), 0);
            #include <project_vertex>
            if (iovState.a > 0.9) gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
            ${stencil ? '' : `${white && !placed ? 'vColor.rgb = vec3(0.95);' : ''} if (iovState.a > 0.25) vColor.rgb = iovState.rgb;`}`);
        }
      };
    },
  };
  // Geometry-only packages have no element visibility actions.
  if (!elements.length) {
    delete scene.setVisible;
    delete scene.showAll;
    delete scene.isolate;
  }
  return scene;
}
