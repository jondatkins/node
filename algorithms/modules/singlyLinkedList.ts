const repl = require('node:repl');

// repl.start();
class Node<T> {

  public val: T;
  public next: Node<T> | null = null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

// class Node<T> {
//   public next: Node<T> | null = null;
//   public prev: Node<T> | null = null;
//   constructor(public data: T) { }
// }

var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("there");

class SinglyLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T) {
    let node = new Node<T>(val);

    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = this.head;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(): Node<T> | null {
    if (!this.head) {
      return null;
    }
    let prev = this.head;
    let next = this.head.next;
    if (!next) {
      this.head = null;
      this.tail = null;
      // Just set to 0?
      this.length--;
      return prev;
    }
    while (next.next) {
      prev = next;
      next = next.next;
    }
    let returnNode = this.tail;
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    // console.log(prev);
    return returnNode;
  }

  pop2() {
    let curr = this.head;
    let prev = null;
    if (!curr) {
      return undefined;
    }
    if (!curr.next) {
      this.head = null;
      this.tail = null;
      // Just set to 0?
      this.length--;
      return curr;
    }
    while (curr.next) {
      // console.log(curr.val);
      prev = curr;
      curr = curr.next;
    }
    // console.log(curr);
    // console.log(`previous node is`);
    // console.log(prev);
    let returnNode = this.tail;
    this.tail = prev;
    if (this.tail) {
      this.tail.next = null;
    }
    this.length--;
    // console.log(prev);
    return returnNode;
  }

  traverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      // console.log(curr.val);
      prev = curr;
      curr = curr.next;
    }
    // console.log(curr);
    // console.log(`previous node is`);
    // console.log(prev);
  }

}

let list = new SinglyLinkedList();
list.push("Foo");
// console.log(`Pushing 'Foo'`);
// console.log(JSON.stringify(list));
// list.traverse();
list.push("Bar");
// console.log(`Pushing 'Bar'`);
// console.log(JSON.stringify(list));
// list.traverse();
list.push("Pushkin");
// console.log(`Pushing 'Pushkin'`);
// list.traverse();
// console.log(JSON.stringify(list));
let pushkin = list.pop();
// console.log(`Popping 'Pushkin'`);
// console.log(pushkin);
// list.traverse();
console.log(list);
let bar = list.pop();
// console.log(JSON.stringify(list));
// console.log(`Popping 'Bar'`);
// console.log(bar);
// console.log(list);
// console.log(JSON.stringify(list));
// list.traverse();
let foo = list.pop();
// console.log(`Popping 'Foo'`);
// console.log(foo);
// list.traverse();
// console.log(JSON.stringify(list));

module.exports = { Node, SinglyLinkedList };
