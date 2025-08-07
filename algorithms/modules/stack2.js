class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    var node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      var tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    return ++this.size;
  }
  pop() {
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
}

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
// 10, 100, 1000
var removed = stack.pop();
console.log(removed); // 1000
console.log(stack.size); // 2
let oneHundred = stack.pop();
console.log(oneHundred);
let ten = stack.pop();
console.log(ten);
console.log(stack.size);
stack.size // 0
module.exports = { Node, Stack };
