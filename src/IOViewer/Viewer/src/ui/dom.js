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
