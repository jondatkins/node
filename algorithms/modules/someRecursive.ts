interface myCallbackType { (myArgument: number): boolean }

const isOdd = (val: number): boolean => val % 2 !== 0;

const someRecursive = (numArray: number[], callback: myCallbackType) => {
  if (numArray.length === 0) {
    return false;
  }
  if (callback(numArray[0])) {
    return true;
  }
  return someRecursive(numArray.slice(1), callback);
}
console.log(`Should be true`)
console.log(someRecursive([1, 2, 3, 4], isOdd)) // true; 
console.log(`Should be true`)
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true; 
console.log(`Should be false`)
console.log(someRecursive([4, 6, 8], isOdd)) // false; 
console.log(`Should be false`)
console.log(someRecursive([4, 6, 8], val => val > 10)) // false
module.exports = { someRecursive };
