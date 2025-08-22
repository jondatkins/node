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

  insert(value: T) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    let currNode = this.root;
    while (currNode) {
      // ignore duplicate values
      if (currNode.value && value === currNode.value) {
        return undefined;
      }
      // Look at left child
      if (currNode.value && value < currNode.value) {
        if (!currNode.left) {
          currNode.left = newNode;
          return true;
        }
        else {
          currNode = currNode.left;
        }
      }
      else {
        //look at right child
        if (!currNode.right) {
          currNode.right = newNode;
          return true;
        }
        else {
          currNode = currNode.right;
        }
      }
    }
    return false;
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

  find(value: T) {
    if (!this.root) {
      return false;
    }
    let current: Node<T> | null = this.root;
    while (current) {
      if (!current) {
        return false;
      }
      if (current.value && value < current.value) {
        current = current.left;
      }
      else if (current.value && value > current.value) {
        current = current.right;
      }
      else {
        return true;
      }
    }
    return false;
  }

  // find with recursion
  find2(value: T) {
    if (!this.root) {
      return false;
    }
    let current: Node<T> = this.root;

    function findHelper(current: Node<T> | null): boolean {
      if (!current) {
        return false;
      }
      if (current.value && value < current.value) {
        return findHelper(current.left)
      }
      else if (current.value && value > current.value) {
        return findHelper(current.right)
      }
      else {
        return true;
      }
    }
    return findHelper(current);
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

  printInOrder(node: Node<T> | null) {
    if (!node) {
      return;
    }
    this.printInOrder(node.left);
    console.log(node.value);
    this.printInOrder(node.right);
  }

  prettyPrint(node: any, prefix = '', isLeft = true): void {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      // if (isLeft) {
      //   // prefix += '|   '
      //   prefix += `${prefix}${'│   '}`
      // }
      // else {
      //   prefix += `${prefix}${'    '}`
      // }
      // this.prettyPrint(node.right, prefix, false);
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

let tree = new BinarySearchTree();
// tree.insert(46)
// tree.insert(8)
// tree.insert(71)
// tree.insert(35)
// tree.insert(88)
// tree.insert(48)
// tree.insert(70)
// tree.insert(24)
// tree.insert(85)
// tree.insert(89)
// tree.insert(8)
// tree.insert(91)
// tree.insert(75)
// tree.insert(80)
// tree.insert(76)
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(7)
// tree.insert(2)
// tree.insert(16)
// tree.insert(11);
// tree.insert(10)
// tree.prettyPrint(tree.root);

tree.insert(41)
tree.insert(20)
tree.insert(65)
tree.insert(11)
tree.insert(29)
tree.insert(50)
tree.insert(91)
tree.insert(7)
tree.insert(12)
tree.insert(32)
tree.insert(72)
tree.insert(99)
tree.insert(68)
console.log(tree.find2(7));
console.log(tree.find2(75));
module.exports = { BinarySearchTree, Node };
