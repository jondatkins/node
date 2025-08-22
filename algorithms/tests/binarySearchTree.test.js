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
test(`insert2 with recursion`, () => {
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
  expect(tree.find(7)).toEqual(true)
  expect(tree.find(77)).toEqual(false)
  expect(tree.find2(7)).toEqual(true)
  expect(tree.find2(77)).toEqual(false)
})
