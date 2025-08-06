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
      return null;
    }
    if (this.first.next === null) {
      let oldFirst = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      oldFirst.next = null;
      return oldFirst;
    }
    else {
      let oldFirst = this.first;
      this.first = oldFirst.next;
      oldFirst.next = null;
      this.size--;
      oldFirst.next = null;
      return oldFirst;
    }
  }

}

let stack = new Stack();
stack.push("Foo");
stack.push("Bar")
stack.push("Pushkin")
// foo, bar, pushkin <- Head
let pushkin = stack.pop();
// foo, bar <- Head
console.log(pushkin);
console.log(stack.first)
module.exports = { Node, Stack };
