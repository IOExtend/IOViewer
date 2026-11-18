import * as THREE from 'three';
import { positionsView } from '../engine/quantize.js';
import { HIDE_BRANCH, SLOT_DECODE, SLOT_PARS } from '../engine/slotShader.js';
import { extentAlong, planeRect } from './sectionMath.js';

const Z = new THREE.Vector3(0, 0, 1);
const CAP_COLOR = '#e9ad68';

// Tessellation duplicates vertices at normal or UV seams. Weld exact exported positions and require every
// undirected edge to have one triangle in each direction. Open sheets cannot leave stray stencil counts.
export function isClosedGeometry(positions, indices) {
  const vertex = new Uint32Array(positions.length / 3);
  const points = new Map();
  for (let i = 0; i < vertex.length; i++) {
    const x = positions[i * 3], y = positions[i * 3 + 1], z = positions[i * 3 + 2];
    if (!Number.isFinite(x) || !Number.isFinite(y) || !Number.isFinite(z)) return false;
    const key = `${x},${y},${z}`;
    if (!points.has(key)) points.set(key, points.size);
    vertex[i] = points.get(key);
  }
  if (points.size < 4 || indices.length % 3) return false;
  const edges = new Map();
  let open = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const corners = [vertex[indices[i]], vertex[indices[i + 1]], vertex[indices[i + 2]]];
    const [a, b, c] = corners;
    if (a === undefined || b === undefined || c === undefined) return false;
    if (a === b || b === c || c === a) continue;
    for (let j = 0; j < 3; j++) {
      const a = corners[j], b = corners[(j + 1) % 3];
      const direction = a < b ? 1 : -1;
      const key = a < b ? `${a},${b}` : `${b},${a}`;
      const seen = edges.get(key);
      if (seen !== undefined && seen !== -direction) return false;
      edges.set(key, seen === undefined ? direction : 0);
      open += seen === undefined ? 1 : -1;
    }
  }
  return edges.size > 0 && open === 0;
}

// The standalone page keeps the binary available for sparse reads after upload. Classification and GPU storage
// are deferred to the first filled section, once per shared shape and one byte per slot.
function closedSlots(model, data) {
  const { instances, geometries } = data.meta;
  const geometryOf = data.readView(instances.geometry);
  const { width, height } = model.slotUniforms.slotState.value.image;
  const mask = new Uint8Array(width * height);
  const classified = new Map();
  for (let slot = 0; slot < model.slotCount; slot++) {
    const g = geometryOf[model.slotInstance(slot)];
    if (!classified.has(g)) {
      const geometry = geometries[g];
      const closed = isClosedGeometry(positionsView({ view: data.readView }, geometry), data.readView(geometry.indices));
      classified.set(g, closed ? 255 : 0);
    }
    mask[slot] = classified.get(g);
  }
  const texture = new THREE.DataTexture(mask, width, height, THREE.RedFormat);
  texture.needsUpdate = true;
  return texture;
}

function stencilMaterial(uniforms, plane, side, stencilZPass) {
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: /* glsl */ `
#include <common>
${SLOT_PARS}
#include <clipping_planes_pars_vertex>
uniform highp sampler2D closedSlots;
void main() {
  ${SLOT_DECODE}
  vec3 transformed = slotPosition;
  #include <project_vertex>
  #include <clipping_planes_vertex>
  ${HIDE_BRANCH}
  if ( texelFetch( closedSlots, st, 0 ).r < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
}`,
    fragmentShader: /* glsl */ `
#include <clipping_planes_pars_fragment>
void main() {
  #include <clipping_planes_fragment>
  gl_FragColor = vec4( 0.0 );
}`,
    side, stencilZPass, stencilWrite: true, clipping: true, clippingPlanes: [plane],
    colorWrite: false, depthTest: false, depthWrite: false,
  });
  material.index0AttributeName = 'q';
  return material;
}

export class SectionCaps {
  constructor(model, sections, data) {
    this.model = model;
    this.sections = sections;
    this.data = data;
    this._farSide = new THREE.Plane();
    this._surface = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({
      color: CAP_COLOR, side: THREE.DoubleSide, forceSinglePass: true,
      stencilWrite: true, stencilFunc: THREE.NotEqualStencilFunc, stencilWriteMask: 0,
    }));
  }

  render(renderer, world, camera) {
    const { sections, model } = this;
    const { planes, intersection } = sections.clipping();
    const faces = intersection ? planes.map((plane) => plane.clone().negate()) : planes;
    const crosses = (plane) => Math.abs(plane.distanceToPoint(sections.center)) < extentAlong(sections.modelBox, plane.normal);
    if (model.opacity === 0 || !faces.some(crosses)) return renderer.render(world, camera);

    if (!this._stencils) {
      const uniforms = { ...model.slotUniforms, closedSlots: { value: closedSlots(model, this.data) } };
      this._stencils = [
        stencilMaterial(uniforms, this._farSide, THREE.BackSide, THREE.IncrementWrapStencilOp),
        stencilMaterial(uniforms, this._farSide, THREE.FrontSide, THREE.DecrementWrapStencilOp),
      ];
    }
    const material = this._surface.material;
    material.opacity = model.opacity;
    if (material.transparent !== (model.opacity < 1)) {
      material.transparent = model.opacity < 1;
      material.depthWrite = !material.transparent;
      material.needsUpdate = true;
    }

    const autoClear = renderer.autoClear;
    renderer.autoClear = false;
    try {
      renderer.clear();
      const viewDirection = camera.isOrthographicCamera ? camera.getWorldDirection(new THREE.Vector3()) : null;
      faces.forEach((plane, index) => {
        if (!crosses(plane)) return;
        const facing = viewDirection ? -plane.normal.dot(viewDirection) : plane.distanceToPoint(camera.position);
        if (facing === 0) return;
        this._farSide.copy(plane);
        if (facing > 0) this._farSide.negate();
        renderer.clearStencil();
        // Count signed crossings behind the cap. Outside the solid, front and back cancel.
        for (const stencil of this._stencils)
          model.withMaterial(stencil, () => renderer.render(model.root, camera), { section: true });

        this._surface.quaternion.setFromUnitVectors(Z, plane.normal);
        const rect = planeRect(sections.modelBox, this._surface.quaternion, plane.coplanarPoint(new THREE.Vector3()));
        this._surface.position.copy(rect.center);
        this._surface.scale.set(rect.width, rect.height, 1);
        // Both box modes close the same six face rectangles; the other five inward planes bound each face.
        material.clippingPlanes = faces.filter((_, i) => i !== index);
        renderer.render(this._surface, camera);
      });
      renderer.render(world, camera);
    } finally {
      renderer.autoClear = autoClear;
    }
  }
}
