const util = require('util')

class Node<T> {

  value: number;
  left: Node<number> | null = null;
  right: Node<number> | null = null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree<T> {
  root: Node<T> | null = null;

  constructor() {
    this.root = null;
  }

  insert(value: number): this {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      // ignore duplicate values
      if (current.value && value === current.value) {
        return this;
      }
      // Look at left child
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        else {
          current = current.left;
        }
      } else if (value > current.value) {
        //look at right child
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        else {
          current = current.right;
        }
      }
    }
    return this;
  }

  breadthFirstSearch() {
    // use push and shift to simulate a queue
    let node: Node<T> | null | undefined = this.root,
      queue = [],
      data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      if (node) {
        data.push(node.value);
      }
      if (node && node.left) {
        queue.push(node.left);
      }
      if (node && node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  // * Create an array to store visited nodes
  // * Put the root node into a variable 'current'
  // * Write a helper function which takes a node param
  //   * Push your node onto your data array
  //   * If there's a node.left, do the recursive call with that
  //   * Ditto for node.right
  // * Return your data array
  depthFirstSearchPreOrder(root = this.root): number[] | null {
    let data: number[] = [],
      current = root;
    if (!current) {
      return null;
    }
    const traverse = (node: Node<T>) => {
      if (node) {
        data.push(node.value);
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

  depthFirstSearchPostOrder(root = this.root): number[] | null {
    let data: number[] = [],
      current = root;
    if (!current) {
      return null;
    }
    const traverse = (node: Node<T>) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  depthFirstSearchInOrder(root = this.root): number[] | null {
    let data: number[] = [],
      current = root;
    if (!current) {
      return null;
    }
    const traverse = (node: Node<T>) => {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true): void {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

}

let binarySearchTree2 = new BinaryTree();
binarySearchTree2.insert(10);
binarySearchTree2.insert(6);
binarySearchTree2.insert(15);
binarySearchTree2.insert(3);
binarySearchTree2.insert(8);
binarySearchTree2.insert(20);
binarySearchTree2.prettyPrint();
let test = binarySearchTree2.depthFirstSearchPreOrder();
for (const x of test) {
  // console.log(x.value);
}
module.exports = { BinaryTree, Node };
