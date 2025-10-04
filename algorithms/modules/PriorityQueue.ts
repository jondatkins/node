class Node<T> {
  value: T;
  priority: number;

  constructor(val: T, priority: number) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue<T> {
  values: Node<T>[];

  constructor() {
    this.values = [];
  }

  enqueue(value: T, priority: number) {
    let node = new Node(value, priority);
    this.values.push(node);
    let index = this.values.length - 1;

    let parentIndex = Math.floor((index - 1) / 2)

    while (index > 0 && node.priority <= this.values[parentIndex].priority) {
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2)
    }
  }

  // A recursive alternative
  enqueue2(value: T, priority: number) {
    let node = new Node(value, priority);
    this.values.push(node);
    let index = this.values.indexOf(node);
    let parentIndex = Math.floor((index - 1) / 2)
    const insertHelper = () => {
      if (index < 1 || node < this.values[parentIndex]) {
        return;
      }
      [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2)
      insertHelper();
    }
    insertHelper();
  }

  getParentIndex(value: Node<T>): number {
    let index = this.values.indexOf(value);
    let parentIndex = Math.floor((index - 1) / 2)
    return parentIndex;
  }

  dequeue() {
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
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

  dequeue2() {
    if (this.values.length < 1) {
      return;
    }
    if (this.values.length === 1) {
      return this.values.pop();
    }
    let max = this.values[0];
    let lastValue = this.values.pop();
    if (!lastValue) {
      return;
    }
    this.values[0] = lastValue;
    let index = 0;
    const element = this.values[index];

    while (true) {
      let leftChild, rightChild;
      let swap = null;
      let leftChildIndex = (index * 2) + 1;
      let rightChildIndex = (index * 2) + 2;

      leftChild = this.values[leftChildIndex];
      rightChild = this.values[rightChildIndex];

      if (leftChild) {
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChild) {
        if (swap === null && rightChild.priority < element.priority) {
          swap = rightChildIndex;
        }
        else if (swap !== null && rightChild.priority < leftChild.priority) {
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


  length() {
    return this.values.length;
  }

  printParent(value: Node<T>) {
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
        valueString += this.values[index].value + ' ';
        index++
      }
      console.log(`${valueString}`);
      valueString = '';
      valueRange *= 2;
      endIndex = index + valueRange;
    }
  }
}

// let ER = new PriorityQueue();
// ER.enqueue("common cold", 5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever", 4)
// ER.enqueue("broken arm", 2)
// ER.enqueue("glass in foot", 3)
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());
// let testHeap = new PriorityQueue();
// testHeap.enqueue("low fever", 3);
// // low fever is min value at root.
// testHeap.enqueue("concussion", 2);
// // should replace low fever at root
// testHeap.enqueue("drunk", 3);
// // concussion
// // low fever  drunk
// testHeap.enqueue("exploded head", 1);
// // explodedHead
// // concussion  drunk
// // low fever
// testHeap.enqueue("flu", 3);
// // explodedHead
// // concussion  drunk
// // lowFever flu
// console.log(testHeap.values)
// let explodedHead2 = testHeap.dequeue();
// // console.log(`${explodedHead2.value}`);
// // testHeap.print();
// console.log(testHeap.values)
module.exports = { PriorityQueue, Node }
