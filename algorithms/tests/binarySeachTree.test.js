const testStack = require('../modules/binarySearch.ts')

test(`push`, () => {
  let tree = new BinarySearchTree();
  tree.root = new Node(10);
  tree.root.right = new Node(15);
  tree.root.left = new Node(7);
  tree.root.left.right = new Node(9);
})
test(`pop`, () => {

})
