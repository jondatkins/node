const tree = require('../modules/breadthFirstSearch.ts')

test(`Breadth first search`, () => {
  let binarySearchTree2 = new tree.BinaryTree();
  binarySearchTree2.insert(10);
  binarySearchTree2.insert(6);
  binarySearchTree2.insert(15);
  binarySearchTree2.root.left.left = new tree.Node(3);
  binarySearchTree2.root.left.right = new tree.Node(8);
  binarySearchTree2.root.right.right = new tree.Node(20);
  let test = binarySearchTree2.breadthFirstSearch();
  expect(test).toEqual([10, 6, 15, 3, 8, 20])
})
test(`Depth first seach pre order`, () => {
  let binarySearchTree2 = new tree.BinaryTree();
  binarySearchTree2.insert(10);
  binarySearchTree2.insert(6);
  binarySearchTree2.insert(15);
  binarySearchTree2.root.left.left = new tree.Node(3);
  binarySearchTree2.root.left.right = new tree.Node(8);
  binarySearchTree2.root.right.right = new tree.Node(20);
  let test = binarySearchTree2.depthFirstSearchPostOrder();
  expect(test).toEqual([3, 8, 6, 20, 15, 10])
})
test(`Depth first seach in order`, () => {
  let binarySearchTree2 = new tree.BinaryTree();
  binarySearchTree2.insert(10);
  binarySearchTree2.insert(6);
  binarySearchTree2.insert(15);
  binarySearchTree2.root.left.left = new tree.Node(3);
  binarySearchTree2.root.left.right = new tree.Node(8);
  binarySearchTree2.root.right.right = new tree.Node(20);
  let test = binarySearchTree2.depthFirstSearchInOrder();
  expect(test).toEqual([3, 6, 8, 10, 15, 20])
})
