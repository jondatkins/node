const util = require('util')

class Node<T> {

  value: T | null = null;
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: Node<T> | null = null;

  constructor() {
    this.root = null;
  }

  insert(value: T): this {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (currNode) {
      // ignore duplicate values
      if (currNode.value && value === currNode.value) {
        return this;
      }
      // Look at left child
      if (currNode.value && value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }
        else {
          currNode = currNode.left;
        }
      }
      else {
        //look at right child
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }
        else {
          currNode = currNode.right;
        }
      }
    }
    return this;
  }

  // This is the same as 'insert', but uses recursion
  insert2(value: T) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    function insertHelper(currNode: Node<T>) {
      // if (currNode.value && value === currNode.value) {
      //   return undefined;
      // }
      if (currNode.value && value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return true;
        }
        else {
          // currNode = currNode.left;
          insertHelper(currNode.left);
        }
      }
      else {
        //look at right child
        if (!currNode.right) {
          currNode.right = newNode;
          return true;
        }
        else {
          // currNode = currNode.right;
          insertHelper(currNode.right);
        }
      }
    }
    insertHelper(this.root);
    return false;
  }

  find(value: T): Node<T> | undefined {
    if (!this.root) {
      return undefined;
    }
    let current: Node<T> | null = this.root;
    while (current) {
      if (!current) {
        return undefined;
      }
      if (current.value && value < current.value) {
        current = current.left;
      }
      else if (current.value && value > current.value) {
        current = current.right;
      }
      else {
        return current;
      }
    }
    return undefined;
  }

  // find with recursion
  find2(value: T): Node<T> | undefined {
    if (!this.root) {
      return undefined;
    }
    let current: Node<T> = this.root;

    function findHelper(current: Node<T> | null): Node<T> | undefined {
      if (!current) {
        return undefined;
      }
      if (current.value && value < current.value) {
        return findHelper(current.left)
      }
      else if (current.value && value > current.value) {
        return findHelper(current.right)
      }
      else {
        return current;
      }
    }
    return findHelper(current);
  }

  find3(value: T): Node<T> | false {
    if (this.root === null) {
      return false;
    }
    let current: Node<T> | null = this.root;
    let found = false;
    while (current && !found) {
      if (current.value && value < current.value) {
        current = current.left;
      }
      else if (current.value && value > current.value) {
        current = current.right;
      }
      else {
        found = true;
      }
    }
    if (!found || !current) {
      return false;
    }
    return current;
  }

  findParent(value: T): Node<T> | null {
    if (!this.root) {
      return null;
    }
    let current: Node<T> = this.root;
    let currentParent: Node<T> | null = null;

    function findHelper(currentParent: Node<T> | null, current: Node<T> | null): Node<T> | null {
      if (!current) {
        return null;
      }
      if (current.value && value < current.value) {
        currentParent = current;
        return findHelper(currentParent, current.left)
      }
      else if (current.value && value > current.value) {
        currentParent = current;
        return findHelper(currentParent, current.right)
      }
      else {
        return currentParent;
      }
    }
    let parent = findHelper(currentParent, current);
    if (parent) {
      return parent;
    }
    return null;
  }

  remove(value: T): Node<T> | null {
    if (this.root === null) {
      return null;
    }
    let node = this.find(value);
    if (!node) {
      return null;
    }
    // save node to return it.
    let returnNode = node;
    // Find the parent node
    let parentNode = this.findParent(value);
    let parentNodeNewChild = null;
    // Node to remove is left child of parent
    if (parentNode && parentNode.left == node) {
    }
    // The node to remove has no children, so just remove the parent's link
    if (node.left === null && node.right === null) {
      // if you're removing a root node
      if (!parentNode) { // could do 'node === this.root'
        this.root = null;
        return node;
      }
      if (parentNode.left === node) {
        parentNode.left = null;
        return node;
      }
      parentNode.right = null;
      return node;
    }
    // The node has a single child, so just make it's child the child of it's parent.
    if (node.left !== null && node.right == null) {
      // we're removing the root node, so make it's child the root.
      if (!parentNode) {
        this.root = node.left;
        node.left = null;
        return node;
      }
      if (parentNode && parentNode.left === node) {
        parentNode.left = node.left;
        node.left = null;
        return node;
      }
      else if (parentNode && parentNode.right === node) {
        parentNode.right = node.left;
        node.left = null;
        return node;
      }
    }
    else if (node.right !== null && node.left == null) {
      if (!parentNode) {
        this.root = node.right;
        node.right = null;
        return node;
      }
      if (parentNode && parentNode.left === node) {
        parentNode.left = node.right;
        node.right = null;
        return node;
      }
      else if (parentNode && parentNode.right === node) {
        parentNode.right = node.right;
        node.right = null;
        return node;
      }
    }
    // In the case where you have  
    // two children, find the lowest value node in the subtree
    // of your node to delete. Swap the values, and remove
    // the lowest value node.
    if (node.left !== null && node.right !== null) {
      let minNode = this.minValue(node);
      if (!minNode || !minNode.value) {
        return null;
      }
      let parentMin: Node<T> | null = this.findParent(minNode.value);
      let returnNode = node;
      node.value = minNode.value;
      if (parentMin && parentMin.left === minNode) {
        parentMin.left = null;
      }
      if (parentMin && parentMin.right === minNode) {
        parentMin.right = null;
      }
      returnNode.left = null;
      returnNode.right = null;
      return returnNode;
    }
    return null;
  }

  minValue(node = this.root) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  minValue2(node = this.root): Node<T> | undefined {
    if (!node) {
      return undefined;
    }
    if (!node.left) {
      return node;
    }
    return this.minValue2(node.left);
  }

  print() {
    let currNode = this.root;
    if (currNode) {
      console.log(currNode.value);
    }
    else {
      return;
    }

    function printHelper(aNode: Node<T> | null) {
      if (!aNode) {
        return;
      }
      if (aNode.left) {
        console.log(aNode.left.value);
      }
      if (aNode.right) {
        console.log(aNode.right.value);
      }
      printHelper(aNode.left);
      printHelper(aNode.right);
    }
    printHelper(currNode);
  }

  printInOrder(node = this.root) {
    if (!node) {
      return;
    }
    this.printInOrder(node.left);
    console.log(node.value);
    this.printInOrder(node.right);
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

let binarySearchTree = new BinarySearchTree();

binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
// remove node with single child.
binarySearchTree.prettyPrint();
// let ten = binarySearchTree.remove(10);
// binarySearchTree.prettyPrint();
binarySearchTree.printInOrder();
module.exports = { BinarySearchTree, Node };
