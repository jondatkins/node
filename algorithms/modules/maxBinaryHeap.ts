class BinaryHeap<T> {

  values: T[];

  constructor() {
    this.values = [];
  }

  insert(value: T) {
    this.values.push(value);
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)

    while (parentIndex >= 0 && value > this.values[parentIndex]) {
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2)
    }
  }


  insert2(value: T) {
    this.values.push(value);
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)
    const insertHelper = () => {
      if (parentIndex < 0 || value < this.values[parentIndex]) {
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

  printParent(value: T) {
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)
    console.log(`parent of ${value} : ${this.values[parentIndex]}`);
  }

  print() {
    let valueString = '';
    let valueRange = 1;
    let index = 0;
    while (index < this.values.length) {
      while (index < valueRange && index < this.values.length) {
        valueString += this.values[index] + ' ';
        index++
      }
      console.log(`${valueString}`);
      valueString = '';
      valueRange *= 2;
      valueRange += index;
    }
  }
}

let testHeap = new BinaryHeap();
let testData = [41, 39, 33, 18, 27, 12, 55];
for (const val of testData) {
  testHeap.insert(val);
}
// for (const val of testHeap.values) {
//   console.log(val);
// }
testHeap.print();
testHeap.printParent(18)

module.exports = { BinaryHeap }
