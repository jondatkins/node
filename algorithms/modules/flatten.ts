const flatten = (array: any) => {
  // if (array.length === 1 && !Array.isArray(array)) {
  if (array.length === 1) {
    if (!Array.isArray(array)) {
      return array[0];
    }
    else {
      return flatHelper(array);
    }
  }
  return flatHelper(array);
}

const flatHelper = (array) => {
  let firstElem = flatten([array[0]]);
  let restOfArray = array.splice(1);
  let flatRest = flatten(restOfArray);
  return [...firstElem, ...flatRest];
}
console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]; 
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]; 
// console.log(flatten([[1], [2], [3]])) // [1,2,3]; 
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3; 
module.exports = { flatten };
