// interface QueueNode<T> {
//   value: T;
//   next?: QueueNode<T> | null;
// }

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node<T> {
  public value: T;
  public next: Node<T> | null = null;
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class Stack<T> {

  public first: Node<T> | null = null;
  public last: Node<T> | null = null;
  public size: number;
  private queue1: Queue<T>;
  private queue2: Queue<T>;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  push(val: T): this {
    this.queue1.enqueue(val);
    this.queue2 = this.copy(this.queue1);
    this.queue2 = this.reverse(this.queue2);
    this.first = this.queue2.first;
    this.last = this.queue2.last;
    return this;
  }

  pop(): T | null {
    let returnValue = this.queue2.dequeue();
    this.queue1 = this.copy(this.queue2);
    this.queue1 = this.reverse(this.queue1);
    this.first = this.queue2.first;
    this.last = this.queue2.last;
    return returnValue;
  }

  copy(queue: Queue<T>): Queue<T> {
    let copyQueue: Queue<T> = new Queue();
    let currNode = queue.first;
    while (currNode) {
      copyQueue.enqueue(currNode.value)
      currNode = currNode.next;
    }
    return copyQueue;
  }

  reverse(queue: Queue<T>): Queue<T> {
    let prev = null;
    let next;
    let currNode = queue.first;
    queue.first = queue.last;
    queue.last = currNode;

    while (currNode) {
      next = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }
    return queue;
  }

  print1() {
    this.queue1.print();
  }

  print2() {
    this.queue2.print();
  }

}

class Queue<T> {

  public first: Node<T> | null = null;
  public last: Node<T> | null = null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data: T) {
    var node = new Node(data);

    if (!this.first || !this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
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
stack.print1();
stack.print2();
module.exports = { Stack };
