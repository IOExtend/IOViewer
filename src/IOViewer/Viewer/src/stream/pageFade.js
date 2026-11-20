export function applyPageFade(shader, fade, inverse) {
  if (!fade) return;
  shader.uniforms.pageFade = fade;
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', '#include <common>\nuniform float pageFade;')
    .replace('#include <alphatest_fragment>', `#include <alphatest_fragment>
      float pattern = fract(52.9829189 * fract(dot(floor(gl_FragCoord.xy), vec2(0.06711056, 0.00583715))));
      if (pattern ${inverse ? '<' : '>='} pageFade) discard;`);
}
