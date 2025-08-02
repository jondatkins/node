class Node<T> {
  public val: T;
  public prev: Node<T> | null = null;
  public next: Node<T> | null = null;
  constructor(val: T) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add node to end of list
  push(val: T) {
    let node = new Node<T>(val);
    // list is empty, so just add new node as head and tail.
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = this.head;
    }
    // New node is 'next' of current tail, then make tail 'prev'
    // of new node, then set new node as this.tail.
    else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // remove node from end of list and return it
  pop(): Node<T> | undefined | null {
    // Return undefined for an empty list
    if (this.length < 1) {
      return undefined;
    }
    // Make the new tail the current tail's previous value
    // Set the next value for the new tail to null.
    if (this.tail) {
      let returnTail = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.length--;
      // Set head and tail to null if the list is now empty
      if (this.length < 1) {
        this.head = null;
        this.tail = null;
      }
      return returnTail;
    }
  }

  // Remove first item in list and return it.
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
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
    let node = new Node<T>(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    }
    else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  rotate(num: number): void {
    if (this.length < 1 || num == 0) {
      return undefined;
    }
    // if num is positive
    if (num > 0) {
      while (num > 0) {
        let poppedNode = this.shift();
        if (poppedNode) {
          this.push(poppedNode.val);
        }
        num--;
      }
    }
    if (num < 0) {
      num = Math.abs(num);
      while (num > 0) {
        let poppedNode = this.pop();
        if (poppedNode) {
          this.unshift(poppedNode.val);
        }
        num--;
      }
    }
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

  set(index: number, val: T) {
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
  insert(index: number, val: T) {
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
    if (prevNode) {
      let prevNext = prevNode.next;
      prevNode.next = newNode;
      newNode.next = prevNext;
      newNode.prev = prevNode;
      if (prevNext) {
        prevNext.prev = newNode;
      }
      this.length++;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) {
      return undefined;
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
    let removedNode = prevNode?.next;
    if (prevNode) {
      // prevNode.next points to prevNode.next.next
      if (prevNode.next) {
        prevNode.next = prevNode.next.next;
        if (prevNode.next) {
          prevNode.next.prev = prevNode;
        }
      }
      this.length--;
      return removedNode;
    }
    return undefined;
  }

  reverse(): this {
    let prev = null;
    let next;
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;

    while (currNode) {
      next = currNode.next;
      currNode.next = prev;
      prev = currNode;
      currNode = next;
    }
    return this;
  }

  print(): this {
    let currNode = this.head;
    let arr = [];
    while (currNode) {
      let prevVal = currNode.prev?.val;
      let nextVal = currNode.next?.val;
      arr.push(`${currNode.val} prev: ${prevVal} curr: ${nextVal}`);
      currNode = currNode.next;
    }
    console.log(arr);
    return this;
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

}

let list = new DoublyLinkedList();

list.push("I")
list.push("met")
list.push("a")
list.push("traveller")
let met = list.remove(1);
// [ 'I', 'a', 'traveller' ]
list.print();
// [ 'I', 'a', 'traveller' ]
module.exports = { Node, DoublyLinkedList };
