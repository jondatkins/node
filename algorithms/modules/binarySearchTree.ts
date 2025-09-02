const util = require('util')

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

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

class BinarySearchTree<T> {
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
  insert2(value: number) {
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

  find(value: number): Node<number> | undefined {
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
  find2(value: number): Node<number> | undefined {
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

  find3(value: number): Node<number> | false {
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

  findParent(value: number): Node<number> | null {
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

  remove(key: number, root = this.root): Node<T> | null {
    if (root === null) {
      return root;
    }
    if (key > root.value) {
      root.right = this.remove(key, root.right);
    }
    else if (key < root.value) {
      root.left = this.remove(key, root.left);
    }
    else {
      // Special case for deleting a root node with one or no children
      if (root === this.root) {
        if (!root.left && !root.right) {
          this.root = null;
          return this.root;
        }
        if (root.left && !root.right) {
          this.root = root.left;
          return this.root;
        }
        if (!root.left && root.right) {
          this.root = root.right;
          return this.root;
        }
      }
      if (!root.left) {
        return root.right;
      }
      else if (!root.right) {
        return root.left;
      }
      let cur = root.right;
      while (cur.left) {
        cur = cur.left;
      }
      root.value = cur.value;
      root.right = this.remove(root.value, root.right);
    }
    return root;
  }

  findSecondLargest2(root = this.root): number | undefined {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      return;
    }
    let parent = root;
    while (root.right) {
      parent = root;
      root = root.right;
    }
    return parent.value;
  }

  findSecondLargest3(root = this.root, parent = this.root): number | undefined {
    if (!root) {
      return undefined;
    }
    if (root.left === null && root.right === null) {
      return;
    }
    parent = root;
    function helper(node: Node<number> | null) {
      if (node && node.right) {
        parent = node;
        return helper(node.right);
      }
    }
    helper(root);
    return parent.value;
  }


  findSecondLargest(root = this.root) {
    if (!root) return;
    if (root.left === null && root.right === null) {
      return;
    }
    let count = 0;
    let result = -1;

    function reverseInOrder(node: Node<number> | null) {
      if (!node) {
        return;
      }
      reverseInOrder(node.right);
      // Increment the count of visited nodes
      count++;
      // If count becomes 2, then this is
      // the second largest element
      if (count === 2) {
        result = node.value;
        return;
      }
      reverseInOrder(node.left);
    }
    // Start reverse inorder traversal
    reverseInOrder(root);

    return result;
  }

  minValue(node: Node<T>): Node<T> {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }

  // A balanced tree is defined as a tree where the depth of all
  // leaf nodes or nodes with single children differ by no more than one.
  isBalancedOld(root = this.root): boolean {
    let leftTreeHeight = 0;
    let rightTreeHeight = 0;
    function balanceHelper(root: Node<number> | null) {
      if (!root) {
        return;
      }
      leftTreeHeight++;
      balanceHelper(root.left)
      balanceHelper(root.right)
      // rightTreeHeight++;
    }
    balanceHelper(root);
    console.log(`left tree is ${leftTreeHeight}`);
    console.log(`right tree is ${rightTreeHeight}`);
    return true;
  }

  findHeight(node = this.root): number {
    if (!node) {
      return -1;
    }
    let lefth = this.findHeight(node.left);
    let righth = this.findHeight(node.right);

    if (lefth > righth) {
      return lefth + 1;
    } else {
      return righth + 1;
    }
  }

  checkHeightAndBalance(node: Node<T> | null): number {
    if (!node) {
      return 0;
    }
    let leftHeight = this.checkHeightAndBalance(node.left);

    if (leftHeight === -1) {
      return -1;
    }
    let rightHeight = this.checkHeightAndBalance(node.right);

    if (rightHeight === -1) {
      return -1;
    }
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    // console.log(`${Math.max(leftHeight, rightHeight) + 1}`);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced() {
    if (!this.root) {
      return true;
    }
    let heightAndBalance = this.checkHeightAndBalance(this.root);
    return this.checkHeightAndBalance(this.root) != -1;
  }

  // A recursive alternative
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

let binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
binarySearchTree2.prettyPrint();
let bal = binarySearchTree2.isBalanced(); // true
console.log(`should be true: ${bal}`);
binarySearchTree2.insert(6);
binarySearchTree2.prettyPrint();
let bal2 = binarySearchTree2.isBalanced(); // true
console.log(`should be true: ${bal2}`);
binarySearchTree2.insert(7);
binarySearchTree2.prettyPrint();
let bal3 = binarySearchTree2.isBalanced(); // false
console.log(`should be false: ${bal3}`);
module.exports = { BinarySearchTree, Node };
