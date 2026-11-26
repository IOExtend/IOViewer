import * as THREE from 'three';

export function createPanoramaPoints() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(72, 1, .15, 20);
  camera.up.set(0, 0, 1);
  const target = new THREE.Vector3();
  const material = new THREE.ShaderMaterial({
    uniforms: { size: { value: 1 } },
    vertexShader: [
      'attribute float intensity;',
      'varying float signal;',
      'uniform float size;',
      'void main() {',
      '  signal = intensity;',
      '  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
      '  gl_PointSize = size;',
      '}',
    ].join('\n'),
    fragmentShader: [
      'varying float signal;',
      'void main() {',
      '  vec2 offset = gl_PointCoord - 0.5;',
      '  if (signal == 0.0 || dot(offset, offset) > 0.25) discard;',
      '  gl_FragColor = vec4(vec3(0.12 + 0.88 * signal), 1.0);',
      '}',
    ].join('\n'),
  });
  const buffer = new THREE.WebGLRenderTarget(1, 1, { depthTexture: new THREE.DepthTexture(1, 1) });
  const bufferSize = new THREE.Vector2();
  const screen = new THREE.Scene();
  const screenCamera = new THREE.Camera();
  const composite = new THREE.ShaderMaterial({
    depthTest: false,
    depthWrite: false,
    uniforms: {
      levels: { value: buffer.texture },
      depth: { value: buffer.depthTexture },
      sampleStep: { value: new THREE.Vector2() },
      range: { value: new THREE.Vector2() },
    },
    vertexShader: [
      'varying vec2 uvScreen;',
      'void main() { uvScreen = uv; gl_Position = vec4(position, 1.0); }',
    ].join('\n'),
    fragmentShader: [
      'uniform sampler2D levels, depth;',
      'uniform vec2 sampleStep, range;',
      'varying vec2 uvScreen;',
      'float distanceAt(float z) { return range.x * range.y / mix(range.y, range.x, z); }',
      'void main() {',
      '  float center = texture2D(depth, uvScreen).r;',
      '  float anchor = center;',
      '  if (center >= 1.0) {',
      '    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++)',
      '      anchor = min(anchor, texture2D(depth, uvScreen + vec2(float(x), float(y)) * sampleStep).r);',
      '  }',
      '  float total = 0.0, weight = 0.0;',
      '  if (anchor < 1.0) {',
      '    float d = distanceAt(anchor);',
      '    for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {',
      '      vec2 p = uvScreen + vec2(float(x), float(y)) * sampleStep;',
      '      float z = texture2D(depth, p).r;',
      '      if (z >= 1.0 || abs(distanceAt(z) - d) > max(0.08, d * 0.015)) continue;',
      '      float w = 1.0 / (1.0 + float(x * x + y * y));',
      '      total += texture2D(levels, p).r * w;',
      '      weight += w;',
      '    }',
      '  }',
      '  gl_FragColor = vec4(weight > 0.0 ? vec3(total / weight) : vec3(0.063, 0.075, 0.094), 1.0);',
      '}',
    ].join('\n'),
  });
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), composite);
  quad.frustumCulled = false;
  screen.add(quad);
  return {
    setScan(scan, position) {
      scene.clear();
      for (const source of scan) {
        if (!source.geometry.getAttribute('intensity')) continue;
        const points = new THREE.Points(source.geometry, material);
        points.matrixAutoUpdate = false;
        points.matrix.copy(source.matrixWorld);
        scene.add(points);
      }
      camera.position.copy(position);
      const bounds = new THREE.Box3().setFromObject(scene);
      const extent = bounds.getSize(target).length();
      camera.far = Math.max(20, extent + position.distanceTo(bounds.getCenter(target)));
    },
    draw(renderer, view, direction) {
      camera.aspect = view.aspect;
      camera.fov = view.fov;
      camera.updateProjectionMatrix();
      camera.lookAt(target.copy(camera.position).add(direction));
      const pixelRatio = renderer.getPixelRatio();
      material.uniforms.size.value = 5.5 * pixelRatio;
      renderer.getDrawingBufferSize(bufferSize);
      buffer.setSize(bufferSize.x, bufferSize.y);
      // Filter only nearby returns on the same surface, keeping doorways and depth breaks intact.
      composite.uniforms.sampleStep.value.set(2 * pixelRatio / bufferSize.x, 2 * pixelRatio / bufferSize.y);
      composite.uniforms.range.value.set(camera.near, camera.far);
      renderer.setRenderTarget(buffer);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(screen, screenCamera);
    },
  };
}
