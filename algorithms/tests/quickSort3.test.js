const quickSort3 = require('../modules/quickSort')


var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
}
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];


var moarKittyData2 = [{
  name: "Heathcliff",
  age: 45
}, {
  name: "Garfield",
  age: 40
}, {
  name: "LilBub",
  age: 7
}, {
  name: "Grumpy",
  age: 6
}, {
  name: "Blue",
  age: 1
}];


function oldestToYoungest(a, b) {
  return b.age - a.age;
}

test(`[4, 20, 12, 10, 7, 9] should be [4, 7, 9, 10, 12, 20]`, () => {
  expect(quickSort3.quickSort([4, 20, 12, 10, 7, 9])).toEqual([4, 7, 9, 10, 12, 20])
})
test(`[0, -10, 7, 4] should be [-10, 0, 4, 7]`, () => {
  expect(quickSort3.quickSort([0, -10, 7, 4])).toEqual([-10, 0, 4, 7])
})
test(`[1, 2, 3] should be [1, 2, 3]`, () => {
  expect(quickSort3.quickSort([1, 2, 3])).toEqual([1, 2, 3])
})
test(`${nums} should equal [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]`, () => {
  expect(quickSort3.quickSort(nums)).toEqual([2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342])
})
test(`${kitties} should be ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]`, () => {
  expect(quickSort3.quickSort(kitties, strComp)).toEqual(["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"])
})
test(`${JSON.stringify(moarKittyData)} should be ${JSON.stringify(moarKittyData2)}`, () => {
  expect(quickSort3.quickSort(moarKittyData, oldestToYoungest)).toEqual(moarKittyData2)
})
