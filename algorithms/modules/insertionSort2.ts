type CallBackFunc = (a: any, b: any) => number;

interface Kitty {
  name: string;
  age: number;
}

const insertionSort = <Type>(arr: Type[], callback?: CallBackFunc): Type[] => {
  for (let i = 1; i < arr.length; i++) {
    let itemToInsert = arr[i];
    let j = i - 1;

    let isJgreaterThanItem = compareItems(arr[j], itemToInsert, callback);
    while (j >= 0 && isJgreaterThanItem) {
      // move j elements up one
      arr[j + 1] = arr[j];
      j--
      if (j > -1) {
        isJgreaterThanItem = compareItems(arr[j], itemToInsert, callback);
      }
    }
    // insert item at j+1
    arr[j + 1] = itemToInsert;
  }
  return arr;
}

function compareItems<Type>(elem1: Type, elem2: Type, callback?: CallBackFunc): boolean {
  let isJgreaterThanItem = elem1 > elem2;
  if (callback) {
    isJgreaterThanItem = callback(elem1, elem2) > 0;
  }
  return isJgreaterThanItem;
}


console.log(insertionSort([5, 3, 4, 1, 2])); // [1,2,3,4,5]
console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
console.log(insertionSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a: string, b: string) {
  if (a < b) { return -1; }
  else if (a > b) { return 1; }
  return 0;
}

console.log(insertionSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

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

function oldestToYoungest(a: Kitty, b: Kitty) {
  return b.age - a.age;
}

console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
module.exports = { insertionSort };
