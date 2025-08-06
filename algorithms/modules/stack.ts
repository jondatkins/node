class Node<T> {
  public val: T;
  public next: Node<T> | null = null;
  constructor(val: T) {
    this.val = val;
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
  push(val: T) {
    let node = new Node<T>(val);

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

  pop(): Node<T> | undefined | null {
    if (!this.first) {
      return undefined;
    }
    if (this.first.next === null) {
      let oldFirst = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return oldFirst;
    }
    else {
      let oldFirst = this.first;
      this.first = oldFirst.next;
      oldFirst.next = null;
      this.size--;
      return oldFirst;
    }
  }

}

let testStack = new Stack();
// console.log(testStack.push("I"));
// console.log(testStack.push("am"));
// console.log(testStack.push("the"));
// console.log(testStack.push("very"));
// console.log(testStack.push("model"));

module.exports = { Node, Stack };
