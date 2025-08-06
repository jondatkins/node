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
  // Keep the previous ref for the returned node for the rotate method.
  pop(isKeepPrev?: boolean): Node<T> | undefined | null {
    if (!this.head) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      if (poppedNode) {
        this.tail = poppedNode.prev;
        if (!isKeepPrev) {
          poppedNode.prev = null;
        }
      }
      if (this.tail) {
        this.tail.next = null;
      }
    }
    this.length--;
    return poppedNode;
  }

  // Remove first item in list and return it.
  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      if (this.head) {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        }
      }
    }
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  // Add a node to beginning of list.
  // assign the current 'head' to the next prop of the new node.
  // Now just make your new node the head prop of the list.
  unshift(val: T) {
    if (!val) {
      return undefined;
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
        let poppedNode = this.pop(true);
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
    if (index <= Math.floor(this.length / 2)) {
      let count = 0;
      let node = this.head;
      while (count != index && node) {
        node = node.next;
        count++;
      }
      return node;
    }
    else {
      let count = this.length - 1;
      let node = this.tail;
      while (count != index && node) {
        node = node.prev;
        count--;
      }
      return node;
    }
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
      return !!this.unshift(val);
    }
    if (index === this.length) {
      return !!this.push(val);
    }
    // I need the node before and after the node to insert.
    // The before node's next should be set to the new node.
    // The new node's prev should be set to the before node.
    // The new node's next is set to the after node.
    // The after node's prev is set to the new node
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    if (beforeNode) {
      let afterNode = beforeNode.next;
      beforeNode.next = newNode;
      newNode.next = afterNode;
      newNode.prev = beforeNode;
      if (afterNode) {
        afterNode.prev = newNode;
      }
      this.length++;
      return true;
    }
    return false;
  }

  // Remove a node from a given index, and return that 
  // node.
  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length) {
      return this.pop();
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
      if (removedNode) {
        removedNode.next = null;
        removedNode.prev = null;
      }
      return removedNode;
    }
    return undefined;
  }

  reverse(): this {
    let currNode = this.head;
    // Save the node's next link
    // Swap the node prev and next links.
    // Set current node to the new 'prev' lin
    while (currNode) {
      let tempNext = currNode.next;
      currNode.next = currNode.prev;
      currNode.prev = tempNext;
      currNode = currNode.prev;
    }
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
    return this;
  }

  print(): this {
    let currNode = this.head;
    let arr = [];
    while (currNode) {
      let prevVal = currNode.prev?.val;
      let nextVal = currNode.next?.val;
      arr.push(`val: ${currNode.val} prev: ${prevVal} next: ${nextVal}`);
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
list.reverse();
let traveller = list.get(0).val;
let a = list.get(1).val;
let met = list.get(2).val;
let I = list.get(3).val;
// let doublyLinkedList = new DoublyLinkedList;
// doublyLinkedList.push(5).push(10).push(15).push(20)
// doublyLinkedList.print();
// doublyLinkedList.reverse(); // singlyLinkedList;
// doublyLinkedList.length; // 4
// doublyLinkedList.print();
// if (doublyLinkedList.head) {
//   let twenty = doublyLinkedList.head.val; // 20
//   if (doublyLinkedList.head.next) {
//     let fifteen = doublyLinkedList.head.next.val; // 15
//
//     if (doublyLinkedList.head.next.next) {
//       let ten = doublyLinkedList.head.next.next.val; // 10
//
//       if (doublyLinkedList.head.next.next.next) {
//         let five = doublyLinkedList.head.next.next.next.val; // 5
//       }
//     }
//   }
// }
module.exports = { Node, DoublyLinkedList };
