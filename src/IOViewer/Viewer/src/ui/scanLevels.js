const heightGap = 2;

export function detectScanLevels(stations, min, max) {
  const sorted = stations.filter(Number.isFinite).sort((a, b) => a - b);
  const candidates = [];
  for (const z of sorted) {
    const group = candidates.at(-1);
    if (!group || z - group.at(-1) > heightGap / 2) candidates.push([z]);
    else group.push(z);
  }
  // Ignore isolated stations on stairs, and join bands whose typical heights are still too close.
  const groups = [];
  for (const group of candidates) {
    if (group.length < 2) continue;
    const previous = groups.at(-1);
    if (previous && group[Math.floor(group.length / 2)] - previous[Math.floor(previous.length / 2)] < heightGap)
      previous.push(...group);
    else groups.push(group);
  }
  if (groups.length < 2) return [];
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
