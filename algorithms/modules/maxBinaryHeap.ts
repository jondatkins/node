class BinaryHeap<T> {

  values: T[];

  constructor() {
    this.values = [];
  }

  insert(value: T) {
    this.values.push(value);
    let index = this.values.length - 1;

    let parentIndex = Math.floor((index - 1) / 2)

    while (index > 0 && value > this.values[parentIndex]) {
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  // A recursive alternative
  insert2(value: T) {
    this.values.push(value);
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)
    const insertHelper = () => {
      if (index < 1 || value < this.values[parentIndex]) {
        return;
      }
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2)
      insertHelper();
    }
    insertHelper();
  }

  getParentIndex(value: T): number {
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)
    return parentIndex;
  }

  extractMax() {
    if (this.values.length < 1) {
      return;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    let max = this.values[0];
    let lastValue = this.values.pop();
    this.values[0] = lastValue;
    let index = 0;
    const length = this.values.length;
    let leftChildIndex = (index * 2) + 1;
    let rightChildIndex = (index * 2) + 2;
    const element = this.values[index];
    while (true) {
      let leftChild, rightChild;
      let swap = null;
      leftChildIndex = (index * 2) + 1;
      rightChildIndex = (index * 2) + 2;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      }
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
    return max;
  }

  printParent(value: T) {
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)
    console.log(`parent of ${value} : ${this.values[parentIndex]}`);
  }

  print() {
    let valueString = '';
    let valueRange = 1;
    let endIndex = valueRange;
    let index = 0;
    while (index < this.values.length) {
      while (index < endIndex && index < this.values.length) {
        valueString += this.values[index] + ' ';
        index++
      }
      console.log(`${valueString}`);
      valueString = '';
      valueRange *= 2;
      endIndex = index + valueRange;
    }
  }
}

let testHeap = new BinaryHeap();
let testData = [41, 39, 33, 18, 27, 12, 55];
let testData2 = [41, 39, 33, 18, 27, 12, 55, 1, 45, 199, 77, 22, 13, 0, 42, 11];
let testData3 = [41, 39, 33, 18, 27, 12];
let testData4 = [41, 39, 33, 18, 27, 12, 55];
let testData5 = [41];

for (const val of testData5) {
  testHeap.insert2(val);
}
testHeap.print();
let max = testHeap.extractMax();
console.log(`max should be 41 ${max}`);

let undef = testHeap.extractMax();
console.log(`max should be undefined ${undef}`);

module.exports = { BinaryHeap }
