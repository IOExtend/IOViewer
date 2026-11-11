import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { boxPlanes, planeFromAxis, isClipped, boxFullyClipped, extentAlong, planeRect, closestOnLine } from '../../src/tools/sectionMath.js';
import { Sections, MAX_PLANES } from '../../src/tools/sections.js';

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const box = (min, max) => new THREE.Box3(v(...min), v(...max));
const model = box([0, 0, 0], [10, 20, 8]); // centre (5, 10, 4)

// Records what Sections hands to ModelScene.setClipping.
function fakeScene(elementBoxes = []) {
  return {
    clipping: null,
    calls: 0,
    setClipping(planes, intersection) {
      this.clipping = { planes, intersection };
      this.calls++;
    },
    visibleBox: () => model.clone(),
    elementBox: (i) => elementBoxes[i].clone(),
  };
}

test('three semantics: union cuts what any plane has behind it, intersection only what all planes have behind them', () => {
  const below = new THREE.Plane(v(0, 0, -1), 4); // keeps z <= 4
  const left = new THREE.Plane(v(-1, 0, 0), 5); // keeps x <= 5
  assert.equal(isClipped(v(0, 0, 5), [below, left], false), true);
  assert.equal(isClipped(v(0, 0, 5), [below, left], true), false);
  assert.equal(isClipped(v(6, 0, 5), [below, left], true), true);
  assert.equal(isClipped(v(0, 0, 0), [below, left], false), false);
  assert.equal(isClipped(v(0, 0, 0), [], false), false);
});

test('boxPlanes keepInside: the centre is behind no plane, a point outside is cut by at least one, union', () => {
  const { planes, intersection } = boxPlanes(model, 'keepInside');
  assert.equal(planes.length, 6);
  assert.equal(intersection, false);
  const centre = model.getCenter(new THREE.Vector3());
  assert.ok(planes.every((p) => p.distanceToPoint(centre) > 0));
  assert.equal(isClipped(centre, planes, intersection), false);
  const outside = v(5, 10, 9);
  assert.ok(planes.some((p) => p.distanceToPoint(outside) < 0));
  assert.equal(isClipped(outside, planes, intersection), true);
});

test('boxPlanes cutInside: the centre is behind every plane and cut, a point outside is kept, intersection', () => {
  const { planes, intersection } = boxPlanes(model, 'cutInside');
  assert.equal(planes.length, 6);
  assert.equal(intersection, true);
  const centre = model.getCenter(new THREE.Vector3());
  assert.ok(planes.every((p) => p.distanceToPoint(centre) < 0));
  assert.equal(isClipped(centre, planes, intersection), true);
  for (const outside of [v(5, 10, 9), v(-1, 10, 4), v(5, 21, 4)]) assert.equal(isClipped(outside, planes, intersection), false);
  assert.throws(() => boxPlanes(model, 'inside'), RangeError);
});

test('planeFromAxis cuts above the centre plus offset by default; flipped turns the normal round and cuts below', () => {
  const plain = planeFromAxis('z', model, 1, false);
  const flipped = planeFromAxis('z', model, 1, true);
  assert.deepEqual(plain.normal.toArray().map((c) => c + 0), [0, 0, -1]);
  assert.deepEqual(flipped.normal.toArray().map((c) => c + 0), [0, 0, 1]);
  assert.equal(plain.distanceToPoint(v(5, 10, 5)), 0); // passes through the centre + 1 along Z
  assert.equal(isClipped(v(5, 10, 7), [plain], false), true);
  assert.equal(isClipped(v(5, 10, 2), [plain], false), false);
  assert.equal(isClipped(v(5, 10, 7), [flipped], false), false);
  assert.equal(isClipped(v(5, 10, 2), [flipped], false), true);
  assert.deepEqual(planeFromAxis('x', model, 0, false).normal.toArray().map((c) => c + 0), [-1, 0, 0]);
  assert.throws(() => planeFromAxis('w', model, 0, false), RangeError);
});

test('boxFullyClipped: entirely on the cut side of one plane (union) or inside every plane (intersection)', () => {
  const plane = planeFromAxis('z', model, 0, false); // cuts z > 4
  assert.equal(boxFullyClipped(box([1, 1, 5], [2, 2, 6]), [plane], false), true);
  assert.equal(boxFullyClipped(box([1, 1, 3], [2, 2, 6]), [plane], false), false);
  assert.equal(boxFullyClipped(box([1, 1, 5], [2, 2, 6]), [], false), false);
  const cut = boxPlanes(box([0, 0, 0], [4, 4, 4]), 'cutInside');
  assert.equal(boxFullyClipped(box([1, 1, 1], [2, 2, 2]), cut.planes, cut.intersection), true);
  assert.equal(boxFullyClipped(box([3, 3, 3], [5, 5, 5]), cut.planes, cut.intersection), false);
  const keep = boxPlanes(box([0, 0, 0], [4, 4, 4]), 'keepInside');
  assert.equal(boxFullyClipped(box([5, 5, 5], [6, 6, 6]), keep.planes, keep.intersection), true);
  assert.equal(boxFullyClipped(box([3, 3, 3], [5, 5, 5]), keep.planes, keep.intersection), false);
});

test('extentAlong is the half size of the box along a direction', () => {
  assert.equal(extentAlong(model, v(0, 0, 1)), 4);
  assert.equal(extentAlong(model, v(0, -1, 0)), 10);
  assert.ok(Math.abs(extentAlong(model, v(1, 0, 1).normalize()) - 9 / Math.SQRT2) < 1e-12);
});

test('closestOnLine finds where a ray passes nearest to an axis line; parallel gives null', () => {
  const ray = new THREE.Ray(v(5, -10, 3), v(0, 1, 0)); // passes x = 5, z = 3
  assert.ok(Math.abs(closestOnLine(ray, v(5, 0, 0), v(0, 0, 1)) - 3) < 1e-12);
  assert.ok(Math.abs(closestOnLine(ray, v(1, 0, 3), v(-1, 0, 0)) + 4) < 1e-12);
  assert.equal(closestOnLine(ray, v(0, 0, 0), v(0, -1, 0)), null);
});

test('planeRect covers the model box projected on the plane, plus 10 %', () => {
  const q = new THREE.Quaternion(); // Z plane: in-plane axes X and Y
  const r = planeRect(model, q, v(5, 10, 4));
  assert.deepEqual(r.center.toArray(), [5, 10, 4]);
  assert.ok(Math.abs(r.width - 11) < 1e-12 && Math.abs(r.height - 22) < 1e-12);
});

test('Sections: a seventh plane is refused; adding a plane enters planes mode and clips with the union rule', () => {
  const scene = fakeScene();
  const sections = new Sections(scene, model);
  assert.equal(sections.mode, 'off');
  for (let i = 0; i < MAX_PLANES; i++) assert.equal(sections.addPlane('z'), i);
  assert.equal(sections.addPlane('x'), null);
  assert.equal(sections.planes.length, 6);
  assert.equal(sections.mode, 'planes');
  assert.equal(scene.clipping.planes.length, 6);
  assert.equal(scene.clipping.intersection, false);
  assert.throws(() => sections.addPlane('q'), RangeError);
});

test('Sections: only enabled planes clip; flip, offset and removal update the clipping', () => {
  const scene = fakeScene();
  const sections = new Sections(scene, model);
  sections.addPlane('z');
  sections.addPlane('x');
  sections.updatePlane(1, { enabled: false });
  assert.equal(scene.clipping.planes.length, 1);
  assert.deepEqual(scene.clipping.planes[0].normal.toArray().map((c) => c + 0), [0, 0, -1]);
  sections.updatePlane(0, { flipped: true, offset: 2 });
  assert.deepEqual(scene.clipping.planes[0].normal.toArray().map((c) => c + 0), [0, 0, 1]);
  assert.equal(scene.clipping.planes[0].distanceToPoint(v(0, 0, 6)), 0);
  sections.removePlane(0);
  assert.equal(sections.planes.length, 1);
  assert.equal(sections.planes[0].axis, 'x');
  assert.equal(scene.clipping.planes.length, 0);
  assert.throws(() => sections.removePlane(5), RangeError);
});

test('Sections: a rotated plane is marked rotated and clips along its new normal', () => {
  const scene = fakeScene();
  const sections = new Sections(scene, model);
  sections.addPlane('z');
  assert.equal(sections.planes[0].rotated, false);
  const tilt = new THREE.Quaternion().setFromAxisAngle(v(1, 0, 0), Math.PI / 2); // Z normal turns to -Y
  sections.updatePlane(0, { quaternion: tilt });
  assert.equal(sections.planes[0].rotated, true);
  const n = sections.normal(0);
  assert.ok(n.distanceTo(v(0, -1, 0)) < 1e-12);
  assert.equal(sections.extent(0), 10);
  assert.ok(scene.clipping.planes[0].normal.distanceTo(v(0, 1, 0)) < 1e-12);
});

test('Sections: modes are exclusive; box modes; reset clears everything', () => {
  const scene = fakeScene();
  const sections = new Sections(scene, model);
  sections.addPlane('z');
  sections.setBox(box([1, 1, 1], [3, 3, 3]));
  assert.equal(sections.mode, 'box');
  assert.equal(scene.clipping.planes.length, 6);
  assert.equal(scene.clipping.intersection, false);
  sections.setBoxMode('cutInside');
  assert.equal(scene.clipping.intersection, true);
  sections.setMode('planes');
  assert.equal(scene.clipping.planes.length, 1);
  sections.setMode('off');
  assert.deepEqual(scene.clipping, { planes: [], intersection: false });
  assert.equal(sections.planes.length, 1); // off keeps the planes for later
  sections.setMode('box');
  assert.equal(scene.clipping.planes.length, 6);
  sections.reset();
  sections.setMode('box'); // no box yet: the box of what is shown, a hair larger
  assert.ok(sections.box.containsBox(model) && Math.abs(sections.box.max.z - model.max.z - 0.02) < 1e-12);
  sections.reset();
  assert.equal(sections.mode, 'off');
  assert.equal(sections.planes.length, 0);
  assert.equal(sections.box, null);
  assert.deepEqual(scene.clipping, { planes: [], intersection: false });
  assert.throws(() => sections.setMode('all'), RangeError);
  assert.throws(() => sections.setBoxMode('both'), RangeError);
});

test('Sections: the box around elements gets a margin of 5 % of its largest dimension', () => {
  const scene = fakeScene([box([0, 0, 0], [1, 2, 10]), box([4, 0, 0], [5, 1, 4])]);
  const sections = new Sections(scene, model);
  assert.equal(sections.fitBoxToElements([0, 1]), true);
  assert.deepEqual(sections.box.min.toArray(), [-0.5, -0.5, -0.5]);
  assert.deepEqual(sections.box.max.toArray(), [5.5, 2.5, 10.5]);
  assert.equal(sections.mode, 'box');
  assert.equal(sections.fitBoxToElements([]), false);
});

test('Sections: isCut tells whether an element box is entirely cut away by the active section', () => {
  const scene = fakeScene();
  const sections = new Sections(scene, model);
  const high = box([1, 1, 6], [2, 2, 7]);
  assert.equal(sections.isCut(high), false);
  sections.addPlane('z');
  assert.equal(sections.isCut(high), true);
  assert.equal(sections.isCut(box([1, 1, 3], [2, 2, 7])), false);
  sections.setBox(box([0, 0, 0], [3, 3, 8]));
  sections.setBoxMode('cutInside');
  assert.equal(sections.isCut(high), true);
  sections.setBoxMode('keepInside');
  assert.equal(sections.isCut(high), false);
  assert.equal(sections.isCut(box([5, 5, 5], [6, 6, 6])), true);
});

test('Sections: every change is announced; gizmo visibility does not touch the clipping', () => {
  const scene = fakeScene();
  const sections = new Sections(scene, model);
  let changes = 0;
  sections.addEventListener('change', () => changes++);
  sections.addPlane('y');
  const calls = scene.calls;
  sections.setGizmoVisible(false);
  assert.equal(sections.gizmoVisible, false);
  assert.equal(scene.calls, calls);
  assert.equal(changes, 2);
});
