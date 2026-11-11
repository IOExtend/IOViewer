const TARGET_MS = 1000 / 30; // frame interval to keep while the camera moves
const SETTLE_MS = 200; // after the last change, the full model is drawn again

/**
 * Keeps the viewer responsive on weak GPUs: a frame is drawn within a cost budget (see ModelScene.detailThreshold),
 * leaving out what is smallest on screen, and once nothing has changed for SETTLE_MS one more frame draws everything.
 * So camera motion stays smooth and a click, hide or isolate shows at once; a model within the budget is always
 * drawn in full. The budget adapts to the frame intervals seen while the camera moves, so a fast GPU soon draws the
 * full model even in motion. Call begin(camera, viewHeight, now) right before rendering and end() right after.
 */
export class MotionDetail {
  constructor(scene, requestRender, budget = 10e6) {
    this.scene = scene;
    this.budget = budget;
    this._requestRender = requestRender;
    this._last = new Float64Array(32); // camera world and projection matrices of the previous frame
    this._seen = false;
    this._lastMotion = -Infinity; // time of the previous frame drawn while the camera moved
    this._interval = 0; // smoothed interval between those frames
    this._full = true; // the next still frame draws everything (the first one, and the one after things settle)
    this._settle = 0;
  }

  begin(camera, viewHeight, now) {
    camera.updateMatrixWorld();
    if (this._moved(camera)) {
      this._adapt(now - this._lastMotion);
      this._lastMotion = now;
    } else if (this._full) {
      this._full = false;
      return this.scene.setDetail(0);
    }
    const minPixels = this.scene.detailThreshold(camera, viewHeight, this.budget);
    this.scene.setDetail(minPixels, viewHeight);
    clearTimeout(this._settle);
    if (minPixels > 0) {
      this._settle = setTimeout(() => {
        this._full = true;
        this._requestRender();
      }, SETTLE_MS);
    }
  }

  end() {
    this.scene.setDetail(0);
  }

  // While the smoothed frame interval is slower than the target the budget shrinks, while clearly faster it grows;
  // single intervals are too noisy (the GPU queues frames), and a gap means the camera stood still, not a slow GPU.
  _adapt(interval) {
    if (interval > 500) return;
    this._interval = this._interval ? this._interval * 0.8 + interval * 0.2 : interval;
    if (this._interval > TARGET_MS * 1.1) this.budget *= 0.9;
    else if (this._interval < TARGET_MS * 0.7) this.budget = Math.min(this.budget * 1.05, 1e12);
  }

  _moved(camera) {
    const last = this._last;
    const now = [...camera.matrixWorld.elements, ...camera.projectionMatrix.elements];
    const moved = this._seen && now.some((v, k) => v !== last[k]);
    this._seen = true;
    last.set(now);
    return moved;
  }
}
