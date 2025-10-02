export interface INode<T> {
  value: T;
  priority: number;
}

class Node<T> implements INode<T> {
  value: T;
  priority: number;

  constructor(val: T, priority: number) {
    this.value = val;
    this.priority = priority;
  }
}

class SimplePriorityQueue<T> {
  values: Node<T>[];
  constructor() {
    this.values = [];
  }
  enqueue(val: T, priority: number) {
    let node = new Node(val, priority);
    this.values.push(node);
    this.sort();
  };
  dequeue(): Node<T> | undefined {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
  length() {
    return this.values.length;
  }
}

module.exports = { SimplePriorityQueue, Node }
