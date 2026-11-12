import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { viewDirection, regionAt, alignedFace, arrowView, headingSide, poleView } from '../../src/nav/viewCube.js';
import { interpolateView } from '../../src/nav/math.js';

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

test('arrow right from front gives right; left gives left; up and down go to top and bottom facing that side', () => {
  close(arrowView(v(0, -1, 0), 'right'), viewDirection('right'));
  close(arrowView(v(0, -1, 0), 'left'), viewDirection('left'));
  close(arrowView(v(1, 0, 0), 'right'), viewDirection('back'));
  close(arrowView(v(0, -1, 0), 'up'), v(0, -Math.sin(0.01), Math.cos(0.01)));
  close(arrowView(v(1, 0, 0), 'down'), v(Math.sin(0.01), 0, -Math.cos(0.01)));
});

test('arrows from the top view: down goes to the heading side, up to the opposite side, left and right turn it', () => {
  // Top view reached from the front: the camera sits 0.01 rad towards -Y and the back is at the top of the screen.
  const offset = v(0, -Math.sin(0.01), Math.cos(0.01));
  close(arrowView(offset, 'up'), viewDirection('back'));
  close(arrowView(offset, 'down'), viewDirection('front'));
  const turned = arrowView(offset, 'right');
  assert.equal(alignedFace(turned), 'top');
  close(turned, v(Math.sin(0.01), 0, Math.cos(0.01)));
  // Bottom view seen from the front: the front is at the top of the screen.
  close(arrowView(v(0, -Math.sin(0.01), -Math.cos(0.01)), 'up'), viewDirection('front'));
  close(arrowView(v(0, -Math.sin(0.01), -Math.cos(0.01)), 'down'), viewDirection('back'));
});

test('arrowView is null when the view is not aligned with a face', () => {
  assert.equal(arrowView(v(1, -1, 0.8).normalize(), 'right'), null);
});

test('headingSide snaps to the nearest side; a 45 degree or vertical heading goes to front, then right, back, left', () => {
  assert.equal(headingSide(v(0.2, -1, 5)), 'front');
  assert.equal(headingSide(v(1, 0.3, -2)), 'right');
  assert.equal(headingSide(v(1, -1, 0.8)), 'front');
  assert.equal(headingSide(v(1 + 1e-13, -1, 0.8)), 'front'); // float noise does not flip a tie
  assert.equal(headingSide(v(1, 1, 0)), 'right');
  assert.equal(headingSide(v(-1, 1, 0)), 'back');
  assert.equal(headingSide(v(0, 0, 3)), 'front');
});

test('load view -> top -> up lands on the same face for any target and distance', () => {
  const load = v(1, -1, 0.8).normalize(); // main.js initial view direction
  const cases = [
    [v(0, 0, 0), 7.3],
    [v(0.3, 0.7, 1.1), 41.9],
    [v(-1234.5, 987.25, 3.3), 0.37],
    [v(1e5, -2e5, 50), 1234.5],
  ];
  for (const [target, distance] of cases) {
    const from = { position: load.clone().multiplyScalar(distance).add(target), target: target.clone() };
    const top = poleView('top', from.position.clone().sub(target));
    const to = { position: top.multiplyScalar(distance).add(target), target: target.clone() };
    const end = interpolateView(from, to, 1); // where animateTo stops
    const offset = end.position.clone().sub(end.target);
    assert.equal(alignedFace(offset), 'top');
    assert.equal(headingSide(offset), 'front');
    close(arrowView(offset, 'up'), viewDirection('back'));
    close(arrowView(offset, 'down'), viewDirection('front'));
  }
});

test('a diagonal top view (reached by orbiting) still gives whole faces for every arrow', () => {
  const diagonal = v(Math.sin(0.01) * Math.SQRT1_2, -Math.sin(0.01) * Math.SQRT1_2, Math.cos(0.01));
  close(arrowView(diagonal, 'up'), viewDirection('back'));
  close(arrowView(diagonal, 'right'), v(Math.sin(0.01), 0, Math.cos(0.01))); // the front heading turned to right
});
