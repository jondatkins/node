class Node<T> {
  public value: T;
  public next: Node<T> | null;
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

  print(): this {
    let currNode = this.first;
    let arr = [];
    while (currNode) {
      arr.push(currNode.value + ` ->`);
      currNode = currNode.next;
    }
    console.log(arr);
    return this;
  }

}

let stack = new Stack();
stack.push("Foo");
stack.push("Bar")
stack.push("Pushkin")
stack.print();
module.exports = { Node, Stack };
