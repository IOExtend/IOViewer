// Element with an optional class and text; text always goes in via textContent.
export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Icon-only button; `icon` is a static SVG string from icons.js, `label` is both tooltip and accessible name.
export function iconButton(className, icon, label) {
  const button = el('button', className);
  button.type = 'button';
  button.innerHTML = icon;
  button.title = label;
  button.setAttribute('aria-label', label);
  return button;
}

function swallow(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Swallows the pointerdown, pointerup and resulting click or context menu of a dismissing press.
export function swallowPress(e) {
  swallow(e);
  const context = e.button === 2;
  const release = () => {
    window.removeEventListener('pointerup', swallowUp, true);
    setTimeout(() => {
      window.removeEventListener('click', swallow, true);
      if (context) window.removeEventListener('contextmenu', swallow, true);
    }); // the activation, if any, comes in this task
  };
  const swallowUp = (up) => {
    swallow(up);
    release();
  };
  window.addEventListener('pointerup', swallowUp, true);
  window.addEventListener('click', swallow, true);
  if (context) window.addEventListener('contextmenu', swallow, true);
}

// Puts a screen-space label (position: absolute in the full-window #ioviewer-ui) over the scene point `point`;
// hides it when the point is behind the camera or off the canvas (not for depth: near/far do not matter here).
export function placeLabel(label, point, camera, rect) {
  const inFront = point.clone().applyMatrix4(camera.matrixWorldInverse).z < 0;
  const p = point.clone().project(camera);
  label.hidden = !(inFront && Math.abs(p.x) <= 1 && Math.abs(p.y) <= 1);
  if (label.hidden) return;
  label.style.left = `${rect.left + ((p.x + 1) / 2) * rect.width}px`;
  label.style.top = `${rect.top + ((1 - p.y) / 2) * rect.height}px`;
}
