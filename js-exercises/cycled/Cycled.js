/* eslint-disable no-underscore-dangle */
class Cycled {
  constructor(array) {
    this.array = array;
    this._currentIndex = 0;
  }

  get index() {
    return this._currentIndex;
  }

  set index(value) {
    const { length } = this.array;
    this._currentIndex = Math.abs(((value % length) + length) % length);
  }

  * [Symbol.iterator]() {
    for (let i = this._currentIndex; i <= this.array.length - 1; i += 1) {
      yield this.array[i];
    }
    if (this._currentIndex) yield this.array[this._currentIndex - 1];
  }

  resetIndex() {
    if (this._currentIndex === this.array.length) {
      this._currentIndex = 0;
    }
  }

  next() {
    this._currentIndex += 1;
    this.resetIndex();
    return this[Symbol.iterator]().next().value;
  }

  current() {
    return this.array[this._currentIndex];
  }

  previous() {
    this._currentIndex -= 1;
    if (this._currentIndex >= 0) {
      return this.current();
    }
    this._currentIndex = this.array.length - 1;
    return this.current();
  }

  step(val) {
    let step = val;
    if (step > 0) {
      while (step > 0) {
        this.next();
        step -= 1;
      }
    } else {
      while (step < 0) {
        this.previous();
        // eslint-disable-next-line no-unused-vars
        step += 1;
      }
    }
    return this.current();
  }

  indexOf(val) {
    return this.array.indexOf(val);
  }

  // reversed() {
  // }
}

export { Cycled };
