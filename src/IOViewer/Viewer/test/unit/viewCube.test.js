import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { viewDirection, regionAt, alignedFace, arrowView } from '../../src/nav/viewCube.js';

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const close = (a, b, eps = 1e-9) => assert.ok(a.distanceTo(b) < eps, `${a.toArray()} != ${b.toArray()}`);

test('viewDirection points from the target to the camera for the six faces (Z up)', () => {
  close(viewDirection('front'), v(0, -1, 0));
  close(viewDirection('back'), v(0, 1, 0));
  close(viewDirection('right'), v(1, 0, 0));
  close(viewDirection('left'), v(-1, 0, 0));
  close(viewDirection('top'), v(0, 0, 1));
  close(viewDirection('bottom'), v(0, 0, -1));
});

test('viewDirection of an edge or a corner is the normalized sum of its faces', () => {
  close(viewDirection('front-right'), v(1, -1, 0).divideScalar(Math.SQRT2));
  close(viewDirection('top-front-right'), v(1, -1, 1).normalize());
  close(viewDirection('bottom-back-left'), v(-1, 1, -1).normalize());
});

test('viewDirection rejects unknown or opposite faces', () => {
  assert.throws(() => viewDirection('side'), RangeError);
  assert.throws(() => viewDirection('front-back'), RangeError);
  assert.throws(() => viewDirection('front-front'), RangeError);
});

test('regionAt names the face, edge or corner under a point of the cube surface', () => {
  assert.equal(regionAt(v(0, -1, 0)), 'front');
  assert.equal(regionAt(v(0.3, 0.2, 1)), 'top');
  assert.equal(regionAt(v(0.9, -1, 0.1)), 'front-right');
  assert.equal(regionAt(v(-0.9, 0.95, 1)), 'top-back-left');
  for (const name of ['front-right', 'top-front-right', 'bottom-left', 'top-back']) {
    assert.equal(regionAt(viewDirection(name).multiplyScalar(Math.sqrt(3))), name);
  }
});

test('alignedFace finds a face within about one degree, otherwise null', () => {
  assert.equal(alignedFace(v(0, -1, 0)), 'front');
  assert.equal(alignedFace(v(Math.sin(0.01), 0, Math.cos(0.01))), 'top'); // animateTo keeps 0.01 rad off the pole
  assert.equal(alignedFace(v(Math.sin(0.03), -Math.cos(0.03), 0)), null);
  assert.equal(alignedFace(v(1, -1, 0).normalize()), null);
});

test('arrow right from front gives right; left gives left; up and down go to top and bottom', () => {
  const up = v(0, 0, 1);
  close(arrowView(v(0, -1, 0), up, 'right'), viewDirection('right'));
  close(arrowView(v(0, -1, 0), up, 'left'), viewDirection('left'));
  close(arrowView(v(1, 0, 0), up, 'right'), viewDirection('back'));
  close(arrowView(v(0, -1, 0), up, 'up'), viewDirection('top'));
  close(arrowView(v(0, -1, 0), up, 'down'), viewDirection('bottom'));
});

test('arrows from the top view: up and down go to the side face in that screen direction, left and right turn it', () => {
  // Top view reached from the front: the camera sits 0.01 rad towards -Y and the back is at the top of the screen.
  const offset = v(0, -Math.sin(0.01), Math.cos(0.01));
  const screenUp = v(0, 1, 0);
  close(arrowView(offset, screenUp, 'up'), viewDirection('back'));
  close(arrowView(offset, screenUp, 'down'), viewDirection('front'));
  const turned = arrowView(offset, screenUp, 'right');
  assert.equal(alignedFace(turned), 'top');
  close(turned, v(Math.sin(0.01), 0, Math.cos(0.01)));
  // Bottom view seen from the front: the front is at the top of the screen.
  close(arrowView(v(0, -Math.sin(0.01), -Math.cos(0.01)), v(0, -1, 0), 'up'), viewDirection('front'));
});

test('arrowView is null when the view is not aligned with a face', () => {
  assert.equal(arrowView(v(1, -1, 0.8).normalize(), v(0, 0, 1), 'right'), null);
});
