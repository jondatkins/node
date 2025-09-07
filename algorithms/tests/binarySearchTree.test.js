const searchTree = require('../modules/binarySearchTree.ts')

test(`insert 13 into pre-existing tree`, () => {
  let tree = new searchTree.BinarySearchTree();
  tree.root = new searchTree.Node(10);
  tree.root.right = new searchTree.Node(15);
  tree.root.left = new searchTree.Node(6);
  tree.root.left.right = new searchTree.Node(8);
  tree.root.left.left = new searchTree.Node(3);
  tree.root.right.right = new searchTree.Node(20);
  tree.insert(13);
  expect(tree.root.right.left.value).toEqual(13)
})
test(`insert all values`, () => {
  let tree = new searchTree.BinarySearchTree();
  tree.insert(10)
  expect(tree.root.value).toEqual(10)
  tree.insert(5)
  expect(tree.root.left.value).toEqual(5)
  tree.insert(13)
  expect(tree.root.right.value).toEqual(13)
  tree.insert(7)
  expect(tree.root.left.right.value).toEqual(7)
  tree.insert(2)
  expect(tree.root.left.left.value).toEqual(2)
  tree.insert(16)
  expect(tree.root.right.right.value).toEqual(16)
  tree.insert(11);
  expect(tree.root.right.left.value).toEqual(11)
  tree.insert(10)
  expect(tree.root.right.left.left).toEqual(null)
})
test(`find test`, () => {
  let tree = new searchTree.BinarySearchTree();
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
  expect(tree.find(7).value).toEqual(7)
  expect(tree.find(77)).toEqual(undefined)
  expect(tree.find2(7).value).toEqual(7)
  expect(tree.find2(77)).toEqual(undefined)
})
test(`find3 test`, () => {
  let tree = new searchTree.BinarySearchTree();
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
  expect(tree.find3(7).value).toEqual(7)
  expect(tree.find3(77).value).toEqual(undefined)
})
test(`remove leaf node test`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.insert(12)
  binarySearchTree.insert(1)
  binarySearchTree.insert(5)
  binarySearchTree.insert(50);
  // remove leaf nodes
  binarySearchTree.remove(50, binarySearchTree.root);
  binarySearchTree.remove(5, binarySearchTree.root);
  expect(binarySearchTree.root.right.right).toEqual(null)
  expect(binarySearchTree.root.left.left.right).toEqual(null)
})
test(`remove single child test`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.insert(12)
  binarySearchTree.insert(1)
  binarySearchTree.insert(5)
  binarySearchTree.insert(50);
  // remove node with single child.
  binarySearchTree.remove(20, binarySearchTree.root);
  expect(binarySearchTree.root.right.value).toEqual(50)
})
test(`remove root with two child test`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.remove(15, binarySearchTree.root);
  expect(binarySearchTree.root.value).toEqual(20)
  expect(binarySearchTree.root.left.value).toEqual(10)
})
test(`remove root with single child test`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  // remove node with single child.
  binarySearchTree.remove(15, binarySearchTree.root);
  expect(binarySearchTree.root.value).toEqual(20)
})
test(`remove root with no child test`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree
    .insert(15)
  binarySearchTree.remove(15, binarySearchTree.root);
  expect(binarySearchTree.root).toEqual(null)
})
test(`remove non root node with single child test`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.insert(12)
  binarySearchTree.insert(1)
  binarySearchTree.insert(5)
  binarySearchTree.insert(50);
  // remove node with single child.
  binarySearchTree.remove(20, binarySearchTree.root);
  expect(binarySearchTree.root.right.value).toEqual(50)
})
test(`remove node with two children`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.insert(12)
  binarySearchTree.insert(1)
  binarySearchTree.insert(5)
  binarySearchTree.insert(50);
  // remove node with single child.
  let ten = binarySearchTree.remove(10, binarySearchTree.root);
  expect(binarySearchTree.root.left.value).toEqual(12)
  expect(binarySearchTree.root.left.right).toEqual(null)
})
test(`find min`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.insert(12)
  binarySearchTree.insert(1)
  binarySearchTree.insert(5)
  binarySearchTree.insert(50);
  expect(binarySearchTree.minValue(binarySearchTree.root).value).toEqual(1);
  let ten = binarySearchTree.find(10);
  expect(binarySearchTree.minValue(ten).value).toEqual(1);
  expect(binarySearchTree.minValue2().value).toEqual(1);
  expect(binarySearchTree.minValue2(ten).value).toEqual(1);
})
test(`find parent`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);

  binarySearchTree.insert(15)
  binarySearchTree.insert(20)
  binarySearchTree.insert(10)
  binarySearchTree.insert(12)
  binarySearchTree.insert(1)
  binarySearchTree.insert(5)
  binarySearchTree.insert(50);
  let fifteen = binarySearchTree.findParent(10)
  let nullValue = binarySearchTree.findParent(15)
  let twenty = binarySearchTree.findParent(50)
  expect(fifteen.value).toEqual(15);
  expect(nullValue).toEqual(null);
  expect(twenty.value).toEqual(20);
})
test(`find second largest`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree();
  binarySearchTree.insert(15);
  binarySearchTree.insert(20);
  binarySearchTree.insert(10);
  binarySearchTree.insert(12);
  binarySearchTree.insert(16);
  let secondLargest = binarySearchTree.findSecondLargest(); // returns 15
  expect(secondLargest).toEqual(16);
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  binarySearchTree2.insert(10);
  let secondLargest2 = binarySearchTree2.findSecondLargest(); // returns undefined
  expect(secondLargest2).toEqual(undefined);
})
test(`isBalanced`, () => {
  let binarySearchTree = new searchTree.BinarySearchTree(false);
  binarySearchTree.insert(15);
  binarySearchTree.insert(20);
  binarySearchTree.insert(10);
  binarySearchTree.insert(12);
  let bal = binarySearchTree.isBalanced(); // true
  expect(bal).toEqual(true)
  let binarySearchTree2 = new searchTree.BinarySearchTree(false);
  binarySearchTree2.insert(5);
  let bal2 = binarySearchTree2.isBalanced(); // true
  expect(bal2).toEqual(true)
  binarySearchTree2.insert(6);
  binarySearchTree2.isBalanced(); // true
  expect(bal2).toEqual(true)
  binarySearchTree2.insert(7);
  let bal3 = binarySearchTree2.isBalanced(); // false
  expect(bal3).toEqual(false)
})
test(`insert unbalanced`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree(false);
  let letters = ['C', 'B', 'E', 'A', 'D', 'H', 'G', 'F']
  letters.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  // tree should look like this when unbalanced
  // │       ┌── H
  // │       │   └── G
  // │       │       └── F
  // │   ┌── E
  // │   │   └── D
  // └── C
  //     └── B
  //         └── A
  expect(binarySearchTree2.root.right.right.left.value).toEqual('G');
  expect(binarySearchTree2.root.right.right.left.left.value).toEqual('F');
})
test(`insert balanced`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let letters = ['C', 'B', 'E', 'A', 'D', 'H', 'G', 'F']
  letters.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  // Balanced tree should look like this.
  // │           ┌── H
  // │       ┌── G
  // │       │   └── F
  // │   ┌── E
  // │   │   └── D
  // └── C
  //     └── B
  //         └── A
  expect(binarySearchTree2.root.right.right.value).toEqual('G');
  expect(binarySearchTree2.root.right.right.right.value).toEqual('H');
  expect(binarySearchTree2.root.right.right.left.value).toEqual('F');
})
test(`rotate left left`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let leftLeft = ['Q', 'P', 'D']
  // unbalanced leftLeft should look like this:
  //
  // └── Q
  //     └── P
  //         └── D
  // balanced leftLeft looks like:
  //
  // │   ┌── Q
  // └── P
  //     └── D
  //
  leftLeft.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  expect(binarySearchTree2.root.value).toEqual('P');
  expect(binarySearchTree2.root.left.value).toEqual('D');
  expect(binarySearchTree2.root.right.value).toEqual('Q');
})
test(`rotate right right`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let rightRight = ['A', 'B', 'D']
  // when balanced it should be:
  // │   ┌── D
  // └── B
  //     └── A
  rightRight.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  expect(binarySearchTree2.root.value).toEqual('B');
  expect(binarySearchTree2.root.left.value).toEqual('A');
  expect(binarySearchTree2.root.right.value).toEqual('D');
})
test(`rotate left right`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let leftRight = ['Q', 'E', 'K']
  // balanced :
  // │   ┌── Q
  // └── K
  //     └── E
  leftRight.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  expect(binarySearchTree2.root.value).toEqual('K');
  expect(binarySearchTree2.root.left.value).toEqual('E');
  expect(binarySearchTree2.root.right.value).toEqual('Q');
})
test(`rotate right left`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let rightRight = ['A', 'B', 'D']
  // when balanced it should be:
  // │   ┌── D
  // └── B
  //     └── A
  rightRight.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  expect(binarySearchTree2.root.value).toEqual('B');
  expect(binarySearchTree2.root.left.value).toEqual('A');
  expect(binarySearchTree2.root.right.value).toEqual('D');
})
test(`rotate left right`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let leftRight = ['Q', 'E', 'K']
  // balanced :
  // │   ┌── Q
  // └── K
  //     └── E
  leftRight.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  expect(binarySearchTree2.root.value).toEqual('K');
  expect(binarySearchTree2.root.left.value).toEqual('E');
  expect(binarySearchTree2.root.right.value).toEqual('Q');
})
test(`rotate right left`, () => {
  let binarySearchTree2 = new searchTree.BinarySearchTree();
  let rightLeft = ['A', 'F', 'B'];
  // unbalanced
  // │   ┌── F
  // └── B
  //     └── A
  rightLeft.forEach(letter => {
    binarySearchTree2.insert(letter);
  })
  expect(binarySearchTree2.root.value).toEqual('B');
  expect(binarySearchTree2.root.left.value).toEqual('A');
  expect(binarySearchTree2.root.right.value).toEqual('F');
})
