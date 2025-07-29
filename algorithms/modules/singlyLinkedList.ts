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
      console.log(curr);
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
  // assign the current 'head' to the next prop of the new node.
  // Now just make your new node the head prop of the list.
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
      node.next = this.head;
      this.head = node;
    }
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let node = this.head;

    while (count != index && node) {
      node = node.next;
      count++;
    }
    return node;
  }

  set(val: T, index: number) {
    let node: Node<T> | null = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // make the node at this index the 'next' node of the 
  // inserted node. Make the next ref of the previous node
  // point to the inserted node
  // Use push and unshift to insert at the beginning or end.
  insert(val: T, index: number) {
    if (index < -1 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    // get the previous node. Make the previous node's next point to the new node.
    // set the new node's next as the previous node's next
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    // let nextNode = prevNode?.next;
    if (prevNode) {
      let prevNext = prevNode.next;
      prevNode.next = newNode;
      newNode.next = prevNext;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length) {
      this.pop();
      return true;
    }
    // get the previous node. Make the previous node's next point to the new node.
    // set the new node's next as the previous node's next
    let prevNode = this.get(index - 1);
    let nextNode = prevNode?.next;
    if (prevNode) {
      // prevNode.next points to prevNode.next.next
      if (prevNode.next) {
        prevNode.next = prevNode.next.next;
      }
      this.length--;
      return nextNode;
    }
    return false;
  }

  reverse(): this {
    let prev = null;
    let currNode = this.head;
    if (!currNode) {
      return this;
    }
    let next = currNode.next;

    while (currNode) {
      next = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }

    let temp = this.head;
    this.head = this.tail;
    if (this.head && temp) {
      this.tail = temp;
    }
    return this;
  }

  print(): this {
    let currNode = this.head;

    while (currNode) {
      console.log(currNode.val);
      currNode = currNode.next;
    }
    return this;
  }
}


let list = new SinglyLinkedList();
list.push("I")
list.push("met")
list.push("a")
list.push("traveller")
list.reverse();

module.exports = { Node, SinglyLinkedList };
