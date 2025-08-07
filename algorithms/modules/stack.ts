class Node<T> {
  public value: T;
  public next: Node<T> | null = null;
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class Stack<T> {
  public first: Node<T> | null;
  public last: Node<T> | null;
  public size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add a node to start of stack
  push(value: T) {
    let node = new Node<T>(value);

    if (!this.first || !this.last) {
      this.first = node;
      this.last = node;
    }
    else {
      let oldFirst = this.first;
      this.first = node;
      node.next = oldFirst;
    }
    // this.size++;
    return ++this.size;
  }

  pop(): T | undefined | null {
    if (!this.first) {
      return null;
    }
    let oldFirst = this.first;
    if (this.first.next === null) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.value;
  }

}

// var stack = new Stack();
//
// stack.push(10);
// stack.push(100);
// stack.push(1000);
// // 10, 100, 1000
// var removed = stack.pop();
// console.log(removed); // 1000
// console.log(stack.size); // 2
// let oneHundred = stack.pop();
// console.log(oneHundred);
// let ten = stack.pop();
// console.log(ten);
// console.log(stack.size);
// stack.size // 0
module.exports = { Node, Stack };
