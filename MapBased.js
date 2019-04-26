class RangeList {
  constructor() {
    this.list = new Map();
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    const [start, end] = range;

    for (let i = start; i < end; i++) {
      this.list.set(i, i);
    }

    this._sort();
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    const [start, end] = range;

    for (let i = start; i < end; i++) {
      this.list.delete(i, i);
    }
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    console.log(Array.from(this.list.keys()));
  }

  /**
   * sort list ascending
   */
  _sort() {
    this.list = new Map([...this.list].sort(([a], [b]) => a - b));
  }
}

// Example run
const rl = new RangeList();

rl.add([1, 5]);
rl.print();
// Should display: [1, 5)

rl.add([10, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 20]);
rl.print();
// Should display: [1, 5) [10, 20)

rl.add([20, 21]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([2, 4]);
rl.print();
// Should display: [1, 5) [10, 21)

rl.add([3, 8]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 10]);
rl.print();
// Should display: [1, 8) [10, 21)

rl.remove([10, 11]);
rl.print();
// Should display: [1, 8) [11, 21)

rl.remove([15, 17]);
rl.print();
// Should display: [1, 8) [11, 15) [17, 21)

rl.remove([3, 19]);
rl.print();
// Should display: [1, 3) [19, 21)
