const heightGap = 2;

export function detectScanLevels(stations, min, max) {
  const sorted = stations.filter(Number.isFinite).sort((a, b) => a - b);
  const groups = [];
  for (const z of sorted) {
    const group = groups.at(-1);
    if (!group || z - group.at(-1) > heightGap) groups.push([z]);
    else group.push(z);
  }
  // A lone station or a connected ramp does not provide evidence for a distinct storey.
  if (groups.length < 2 || groups.some((g) => g.length < 2 || g.at(-1) - g[0] > heightGap)) return [];
  const boundaries = [Math.min(min, sorted[0])];
  for (let i = 1; i < groups.length; i++) {
    boundaries.push((groups[i - 1].at(-1) + groups[i][0]) / 2);
  }
  boundaries.push(Math.max(max, sorted.at(-1)));
  return boundaries.slice(1).map((upper, i) => ({ min: boundaries[i], max: upper }));
}

export function levelContains(level, z) {
  return !level || z >= level.min && z <= level.max;
}

export function mapZoom(view, factor, x, y) {
  const zoom = Math.min(16, Math.max(.5, view.zoom * factor));
  const shift = 1 / view.zoom - 1 / zoom;
  return { ...view, zoom, x: view.x + x * view.side * shift, y: view.y - y * view.side * shift };
}
