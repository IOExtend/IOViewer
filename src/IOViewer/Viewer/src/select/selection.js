// The set of selected element indices; fires `change` after every modification.
export class Selection extends EventTarget {
  #items = new Set();

  get size() {
    return this.#items.size;
  }

  has(index) {
    return this.#items.has(index);
  }

  values() {
    return this.#items.values();
  }

  set(indices) {
    this.#items = new Set(indices);
    this.#changed();
  }

  toggle(index) {
    if (!this.#items.delete(index)) this.#items.add(index);
    this.#changed();
  }

  clear() {
    if (this.#items.size === 0) return;
    this.#items.clear();
    this.#changed();
  }

  #changed() {
    this.dispatchEvent(new Event('change'));
  }
}
