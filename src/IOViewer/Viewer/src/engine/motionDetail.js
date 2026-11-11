const TARGET_MS = 1000 / 30; // frame time to keep while the camera moves
const SETTLE_MS = 200; // after the last camera move, the full model is drawn again
const MIN_BUDGET = 1e6; // about 12 000 draws: the largest objects always stay in view

/**
 * Keeps camera motion smooth on weak GPUs: while the camera moves, a frame is drawn within a cost budget (see
 * ModelScene.detailThreshold), leaving out what is smallest on screen; frames without camera motion (a click, hide,
 * isolate, a 4D step) and the frame SETTLE_MS after the last move always draw everything.
 *
 * The budget follows the cost of the frames drawn while moving, measured as the time the browser made the frame wait
 * after it was requested (a busy GPU delays the next animation frame) plus the frame's own script time; time spent
 * waiting for input is never counted. Slow frames shrink the budget (never below MIN_BUDGET); fast frames grow it only
 * while detail is being left out, and never past the cost of everything in view.
 * Call requested(now) when a frame is requested, begin(camera, viewHeight, now) right before rendering and end(now)
 * right after.
 */
export class MotionDetail {
  constructor(scene, requestRender, budget = 10e6) {
    this.scene = scene;
    this.budget = budget;
    this.minPixels = 0; // the threshold of the last frame (0 = drawn in full)
    this._requestRender = requestRender;
    this._last = new Float64Array(32); // camera world and projection matrices of the previous frame
    this._seen = false;
    this._requestedAt = null;
    this._frame = null; // { start, waited } of a frame drawn while the camera moved
    this._cost = 0; // smoothed frame cost (ms) while moving
    this._settle = 0;
  }

  requested(now) {
    this._requestedAt ??= now;
  }

  begin(camera, viewHeight, now) {
    camera.updateMatrixWorld();
    const waited = this._requestedAt === null ? 0 : Math.max(now - this._requestedAt, 0);
    this._requestedAt = null;
    const moved = this._moved(camera);
    this._frame = moved ? { start: now, waited } : null;
    this.minPixels = moved ? this.scene.detailThreshold(camera, viewHeight, this.budget) : 0;
    this.scene.setDetail(this.minPixels, viewHeight);
    if (moved) {
      clearTimeout(this._settle);
      if (this.minPixels > 0) this._settle = setTimeout(this._requestRender, SETTLE_MS);
    }
  }

  end(now) {
    this.scene.setDetail(0);
    if (this._frame) this._adapt(this._frame.waited + (now - this._frame.start));
    this._frame = null;
  }

  _adapt(frameMs) {
    this._cost = this._cost ? this._cost * 0.8 + frameMs * 0.2 : frameMs;
    if (this._cost > TARGET_MS * 1.1) this.budget = Math.max(this.budget * 0.9, MIN_BUDGET);
    else if (this._cost < TARGET_MS * 0.7 && this.minPixels > 0) {
      this.budget = Math.max(Math.min(this.budget * 1.05, this.scene.visibleCost), MIN_BUDGET);
    }
  }

  // True when the view changed since the previous frame. Near/far (projection elements 10 and 14) are left out: they
  // follow what is shown (hide, isolate, show all), which is no camera motion; the other projection elements are
  // recomputed from near too, so they are compared with a tolerance for rounding.
  _moved(camera) {
    const last = this._last;
    const now = [...camera.matrixWorld.elements, ...camera.projectionMatrix.elements];
    const differs = (v, k) => k !== 26 && k !== 30 && Math.abs(v - last[k]) > 1e-9 * Math.max(1, Math.abs(v));
    const moved = this._seen && now.some(differs);
    this._seen = true;
    last.set(now);
    return moved;
  }
}
