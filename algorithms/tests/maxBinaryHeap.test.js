const heap = require('../modules/maxBinaryHeap.ts')
// 55
// 39 41
// 18 27 12 33
//
// 55 39 41 18 27 12 33
test(`test heap iterative insert method`, () => {
  let testData = [41, 39, 33, 18, 27, 12, 55];
  let binHeap = new heap.BinaryHeap();
  for (const val of testData) {
    binHeap.insert(val);
  }
  expect(binHeap.values[0]).toEqual(55)
  expect(binHeap.values[1]).toEqual(39)
})
test(`test heap recursive insert method`, () => {
  let testData = [41, 39, 33, 18, 27, 12, 55];
  let binHeap = new heap.BinaryHeap();
  for (const val of testData) {
    binHeap.insert2(val);
  }
  expect(binHeap.values[0]).toEqual(55)
  expect(binHeap.values[1]).toEqual(39)
})
