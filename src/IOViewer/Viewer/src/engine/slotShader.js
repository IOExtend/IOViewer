// GLSL shared by the model material and the picking pass. Every vertex carries q (xyz: position steps, w: its slot
// within the chunk) and its octahedral normal (snorm16 pair) in three's own `normal` attribute, read as normal.xy:
// three declares `attribute vec3 normal` itself and shades a Lambert material flat, from screen derivatives, when the
// geometry has no attribute of that name (which would also turn wireframe lines into NaN). slotBase (one per chunk, an
// instanced attribute) + q.w is the slot, whose origin and step are in the slotInfo texture and whose sRGB colour and
// shown flag (alpha) are in slotState.

export const SLOT_PARS = /* glsl */ `
attribute vec4 q;
attribute float slotBase;
uniform highp sampler2D slotInfo;
uniform highp sampler2D slotState;
varying vec3 vTint;
// Octahedral decode without a branch (z < 0 folds x, y to (1 - |y|, 1 - |x|) with their signs, as quantize.js), not
// normalized: three's normal_vertex normalizes after the normal matrix.
vec3 ioOct( vec2 e ) {
  vec3 n = vec3( e, 1.0 - abs( e.x ) - abs( e.y ) );
  float t = max( - n.z, 0.0 );
  n.xy += vec2( n.x >= 0.0 ? - t : t, n.y >= 0.0 ? - t : t );
  return n;
}`;

// Defines slot, info, state and slotPosition (2048 slots per texture row).
export const SLOT_DECODE = /* glsl */ `
int slot = int( slotBase ) + int( q.w );
ivec2 st = ivec2( slot & 2047, slot >> 11 );
vec4 info = texelFetch( slotInfo, st, 0 );
vec4 state = texelFetch( slotState, st, 0 );
vec3 slotPosition = info.xyz + q.xyz * info.w;`;

// Hides the triangles of a hidden slot inside a drawn span: the slot is the same for a whole triangle, so all of it
// leaves the clip volume. Measured on an integrated AMD GPU (ANGLE/D3D11, 200k elements), the branch itself costs
// ~0.7 ms of a ~30 ms frame. The unexplained effect on that GPU sits on the data-dependent slotState fetch above, not
// on this branch: with the fetch replaced by a constant the frame takes ~50 ms instead of ~30. IO_NO_HIDE_BRANCH exists
// only for the performance harness (its nohidebranch variant).
export const HIDE_BRANCH = /* glsl */ `
#ifndef IO_NO_HIDE_BRANCH
if ( state.a < 0.5 ) gl_Position = vec4( 0.0, 0.0, 2.0, 1.0 );
#endif`;

// three's defaultnormal_vertex divides an instance normal by the squared column lengths, which is wrong under shear.
// Instanced cells (USE_INSTANCING; merged chunks are plain meshes) use the cofactor matrix times sign(det) instead, the
// inverse transpose up to scale, as chunks.js bakes merged normals: right for scale, mirroring and shear. As there,
// det == 0 counts as positive (GLSL sign(0.0) is 0 and would zero a flattened instance's normal into NaN). three's
// USE_TANGENT (needs a normal map) and USE_BATCHING (BatchedMesh) branches never apply to these materials.
export const DEFAULT_NORMAL = /* glsl */ `
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
mat3 im = mat3( instanceMatrix );
transformedNormal = mat3( cross( im[ 1 ], im[ 2 ] ), cross( im[ 2 ], im[ 0 ] ), cross( im[ 0 ], im[ 1 ] ) ) * transformedNormal
  * ( dot( im[ 0 ], cross( im[ 1 ], im[ 2 ] ) ) < 0.0 ? -1.0 : 1.0 );
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
transformedNormal = - transformedNormal;
#endif`;

// The MeshLambertMaterial includes replaced (each must occur exactly once; three is pinned, a change fails loudly).
export const REPLACED_INCLUDES = [
  '#include <color_vertex>',
  '#include <beginnormal_vertex>',
  '#include <defaultnormal_vertex>',
  '#include <begin_vertex>',
  '#include <clipping_planes_vertex>',
  '#include <color_fragment>',
];

function swap(source, include, code) {
  const at = source.indexOf(include);
  if (at < 0 || source.indexOf(include, at + 1) >= 0) throw new Error(`The shader must contain '${include}' exactly once.`);
  return source.slice(0, at) + code + source.slice(at + include.length);
}

// One shared function for every model material, so three keeps one program (its cache key is this source); the
// slot textures come from the material's userData.
function compileSlots(shader) {
  Object.assign(shader.uniforms, this.userData.slotUniforms);
  let vertex = swap(shader.vertexShader, '#include <common>', `#include <common>\n${SLOT_PARS}`);
  vertex = swap(vertex, '#include <color_vertex>', `${SLOT_DECODE}\nvTint = state.rgb;`);
  // Merged chunks are in world space (identity model matrix), so the normal matrix is the view rotation.
  vertex = swap(vertex, '#include <beginnormal_vertex>', 'vec3 objectNormal = ioOct( normal.xy );');
  vertex = swap(vertex, '#include <defaultnormal_vertex>', DEFAULT_NORMAL);
  vertex = swap(vertex, '#include <begin_vertex>', 'vec3 transformed = slotPosition;');
  vertex = swap(vertex, '#include <clipping_planes_vertex>', `#include <clipping_planes_vertex>\n${HIDE_BRANCH}`);
  shader.vertexShader = vertex;
  let fragment = swap(shader.fragmentShader, '#include <common>', '#include <common>\nvarying vec3 vTint;');
  fragment = swap(fragment, '#include <color_fragment>', 'diffuseColor.rgb *= vTint;'); // white material x slot colour
  shader.fragmentShader = fragment;
}

/**
 * Makes a MeshLambertMaterial draw slot geometry: position, normal and colour from q, o and the slot textures
 * (`uniforms` = { slotInfo, slotState }, shared). Lights, map, opacity, clipping and face direction stay three's.
 * noHideBranch (performance harness only) drops the hide branch.
 */
export function patchLambert(material, uniforms, noHideBranch = false) {
  material.userData.slotUniforms = uniforms;
  material.onBeforeCompile = compileSlots;
  material.index0AttributeName = 'q'; // attribute 0 must not be the instanced slotBase (ANGLE)
  if (noHideBranch) material.defines = { IO_NO_HIDE_BRANCH: '' };
  return material;
}
