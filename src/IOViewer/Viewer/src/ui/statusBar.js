import { t } from '../i18n.js';
import { icons } from './icons.js';
import { el, iconButton } from './dom.js';

const TOAST_MS = 1600;

// «Выбрано: N · Элементов: M» in `status`, kept in step with the selection.
export function mountStatusBar(status, selection, elementCount) {
  const update = () => (status.textContent = `${t('selected')}: ${selection.size} · ${t('elements')}: ${elementCount}`);
  selection.addEventListener('change', update);
  update();
}

// Dismissible banner for meta.truncated = { meshes, totalMeshes }; nothing when the model is complete.
export function mountTruncationBanner(root, truncated) {
  if (!truncated) return;
  const banner = el('div', 'ioviewer-banner ioviewer-floating');
  banner.setAttribute('role', 'status');
  const text = t('truncated').replace('{meshes}', truncated.meshes).replace('{total}', truncated.totalMeshes);
  const close = iconButton('ioviewer-panel-close', icons.close, t('close'));
  close.addEventListener('click', () => banner.remove());
  banner.append(el('span', '', text), close);
  root.append(banner);
}

// Short message above the toolbar that fades by itself.
export function showToast(root, text) {
  const toast = el('div', 'ioviewer-toast', text);
  toast.setAttribute('role', 'status');
  root.append(toast);
  setTimeout(() => toast.remove(), TOAST_MS);
}
