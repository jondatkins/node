class Node<T> {
  public val: T;
  public next: Node<T> | null = null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

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

  pop(): Node<T> | undefined | null {
    if (!this.head) {
      return undefined;
    }
    let prev = this.head;
    let next = this.head.next;
    if (!next) {
      this.head = null;
      this.tail = null;
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
    return returnNode;
  }

  pop2() {
    if (!this.head) {
      return undefined;
    }
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
      prev = curr;
      curr = curr.next;
    }
    let returnNode = this.tail;
    this.tail = prev;
    if (this.tail) {
      this.tail.next = null;
    }
    this.length--;
    return returnNode;
  }

  traverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      prev = curr;
      curr = curr.next;
    }
  }

  pop3() {
    if (!this.head) {
      return undefined;
    }
    let curr = this.head;
    let newTail = this.head;
    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return curr;
    }
    this.tail = newTail;
    this.tail.next = null;
    return curr;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  // Add a node to beginning of list.
  // Point new head to old head. Set new head to be head.
  unshift(val: T) {
    if (!val) {
      return;
    }
    this.length++;
    let node = new Node<T>(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.head = node;
      node.next = this.head;
    }
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let node = this.head;
    // while (node) {
    //   if (count === index) {
    //     return node;
    //   }
    //   node = node.next;
    //   count++;
    // }
    while (count != index && node) {
      node = node.next;
      count++;
    }
    return node;
  }

}


let list = new SinglyLinkedList();
list.unshift("FooBar")
console.log(list);
module.exports = { Node, SinglyLinkedList };
