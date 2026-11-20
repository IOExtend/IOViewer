import * as THREE from 'three';
import { PROFILE, vesselIndices } from './clusters.js';
import { applyPageFade } from './pageFade.js';

const levels = [
  { sides: 4, rings: [0, 16] },
  { sides: 8, rings: [0, 3, 8, 13, 16] },
  { sides: 16, rings: PROFILE.map((_, i) => i) },
];

// Conservative world-space displacement of each simplified vessel surface from its source mesh, in metres.
export const LOD_ERROR = [1.55, 0.66, 0.047];
export const ENTER_PX = 1.25;
const EXIT_PX = 0.95;

export function chooseLevel(pixelScale, previous) {
  let level = 0;
  while (level < LOD_ERROR.length && pixelScale * LOD_ERROR[level] > (level < previous ? EXIT_PX : ENTER_PX)) level++;
  return level;
}

function radial(sides, side) {
  return [Math.cos(side * Math.PI * 2 / sides), Math.sin(side * Math.PI * 2 / sides)];
}

export function makeTemplates() {
  return levels.map(({ sides, rings }, level) => {
    const position = [], from = [];
    const old = levels[Math.max(0, level - 1)];
    for (const ring of rings) {
      const hi = old.rings.findIndex((value) => value >= ring);
      const a = old.rings[Math.max(0, hi - 1)], b = old.rings[hi];
      const r = a === b ? PROFILE[a] : THREE.MathUtils.lerp(PROFILE[a], PROFILE[b], (ring - a) / (b - a));
      for (let side = 0; side < sides; side++) {
        const [x, y] = radial(sides, side);
        position.push(x * PROFILE[ring], y * PROFILE[ring], ring / 16);
        const at = side * old.sides / sides;
        const [x0, y0] = radial(old.sides, Math.floor(at)), [x1, y1] = radial(old.sides, Math.ceil(at));
        const k = at % 1;
        from.push(r * THREE.MathUtils.lerp(x0, x1, k), r * THREE.MathUtils.lerp(y0, y1, k), ring / 16);
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));
    geometry.setAttribute('previousPosition', new THREE.Float32BufferAttribute(from, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(position.length).fill(1), 3));
    geometry.setIndex(new THREE.BufferAttribute(vesselIndices(sides, rings.length), 1));
    geometry.computeVertexNormals();
    return geometry;
  });
}

export function clusterMaterial({ palette, focal, level, color, fade, inverse = false }) {
  const coarse = level !== undefined;
  const material = new THREE.MeshLambertMaterial(coarse ? { vertexColors: true } : { color });
  material.customProgramCacheKey = () => `clusters-${coarse}-${Boolean(fade)}-${inverse}`;
  material.onBeforeCompile = (shader) => {
    if (coarse) {
      Object.assign(shader.uniforms, { palette: { value: palette }, focal, oldError: { value: LOD_ERROR[level - 1] ?? 0 } });
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>
          attribute vec3 shift;
          attribute vec3 extent;
          attribute float styleIndex;
          attribute vec3 previousPosition;
          uniform vec3 palette[3];
          uniform float focal;
          uniform float oldError;`)
        .replace('#include <color_vertex>', `#include <color_vertex>
          vColor.rgb = palette[int(styleIndex + 0.5)];`)
        .replace('#include <beginnormal_vertex>', `#include <beginnormal_vertex>
          objectNormal /= max(extent, vec3(0.000001));`)
        .replace('#include <begin_vertex>', `#include <begin_vertex>
          float errorPx = oldError * focal / max(distance(cameraPosition, shift + vec3(0.0, 0.0, extent.z * 0.5)), 0.01);
          vec3 local = mix(previousPosition, position, smoothstep(1.25, 2.25, errorPx));
          transformed = shift + extent * local;`);
    }
    applyPageFade(shader, fade, inverse);
  };
  return material;
}
