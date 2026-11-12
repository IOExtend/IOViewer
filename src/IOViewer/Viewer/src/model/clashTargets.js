/**
 * Element indices (in META `elements`) of the two elements of a clash. Each side is found by its Id when the clash
 * has one (an unknown Id finds nothing; a per-mesh stand-in element, `mesh: true`, has no element Id to match);
 * without an Id, by its name, but only when exactly one element has that name.
 */
export function resolveClashElements(clash, elements) {
  const found = [];
  for (const [id, name] of [[clash.element1Id, clash.element1Name], [clash.element2Id, clash.element2Name]]) {
    const index = id != null ? elements.findIndex((e) => e.id === id && !e.mesh) : uniqueName(elements, name);
    if (index >= 0 && !found.includes(index)) found.push(index);
  }
  return found;
}

function uniqueName(elements, name) {
  if (name == null) return -1;
  const first = elements.findIndex((e) => e.name === name);
  return first >= 0 && elements.findIndex((e, i) => i > first && e.name === name) < 0 ? first : -1;
}
