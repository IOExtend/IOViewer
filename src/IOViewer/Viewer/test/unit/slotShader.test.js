import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { REPLACED_INCLUDES, patchLambert } from '../../src/engine/slotShader.js';

const count = (source, text) => source.split(text).length - 1;

// The shader as three would compile it for the material: onBeforeCompile is called as a method of the material.
function compiled(material) {
  const { vertexShader, fragmentShader } = THREE.ShaderLib.lambert;
  const shader = { vertexShader, fragmentShader, uniforms: {} };
  material.onBeforeCompile(shader);
  return shader;
}

// The source with `#ifndef NAME ... #endif` blocks dropped for each NAME in `defines`.
function active(source, defines) {
  return Object.keys(defines).reduce((s, name) => s.replace(new RegExp(`#ifndef ${name}\\n[\\s\\S]*?#endif`, 'g'), ''), source);
}

test('each of the 5 replaced includes occurs exactly once in ShaderLib.lambert', () => {
  const { vertexShader, fragmentShader } = THREE.ShaderLib.lambert;
  assert.equal(REPLACED_INCLUDES.length, 5);
  for (const include of REPLACED_INCLUDES) assert.equal(count(vertexShader + fragmentShader, include), 1, include);
});

test('patched source contains the hide branch unless IO_NO_HIDE_BRANCH', () => {
  const uniforms = { slotInfo: { value: null }, slotState: { value: null } };
  const material = patchLambert(new THREE.MeshLambertMaterial(), uniforms);
  const shader = compiled(material);
  assert.equal(shader.uniforms.slotInfo, uniforms.slotInfo);
  assert.equal(shader.uniforms.slotState, uniforms.slotState);
  for (const include of REPLACED_INCLUDES.filter((i) => i !== '#include <clipping_planes_vertex>')) {
    assert.equal(count(shader.vertexShader + shader.fragmentShader, include), 0, include);
  }
  assert.equal(count(shader.vertexShader, '#include <clipping_planes_vertex>'), 1);
  assert.equal(material.index0AttributeName, 'q');
  // The octahedral normal comes in three's own `normal` attribute: without one three shades Lambert flat.
  assert.match(shader.vertexShader, /ioOct\( normal\.xy \)/);
  const hide = 'if ( state.a < 0.5 ) gl_Position';
  assert.equal(count(active(shader.vertexShader, material.defines ?? {}), hide), 1);

  const without = patchLambert(new THREE.MeshLambertMaterial(), uniforms, true);
  assert.deepEqual(Object.keys(without.defines), ['IO_NO_HIDE_BRANCH']);
  assert.equal(count(active(compiled(without).vertexShader, without.defines), hide), 0);
  // One shared function: three keys its program cache on it, so every model material shares one program.
  assert.equal(without.onBeforeCompile, material.onBeforeCompile);
});
