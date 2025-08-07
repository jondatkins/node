class Node<T> {
  public value: T;
  public next: Node<T> | null = null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class Queue<T> {
  public first: Node<T> | null;
  public last: Node<T> | null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // This is just the push method from singly linked list
  enqueue(value: T): number {
    let node = new Node<T>(value);
    if (!this.first || !this.last) {
      this.first = node;
      this.last = node;
    }
    else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  // Remove from start of queue, just like shift
  dequeue(): T | null {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }

}

let queue = new Queue();
queue.enqueue("Foo");
queue.enqueue("Bar")
queue.enqueue("Pushkin")
// Pushkin, Bar, Foo
let foo = queue.dequeue();
console.log(foo.value)
let bar = queue.dequeue();
console.log(bar.value)
let pushkin = queue.dequeue();
console.log(pushkin.value)
module.exports = { Node, Queue };
