const flattenOld = (array: any): number[] => {
  if (array.length === 1 && !Array.isArray(array[0])) {
    return [array[0]];
  }
  let flatArray: number[] = [];
  for (const i in array) {
    let foo = flattenOld([array[i]]);
    flatArray = [...flatArray, ...foo];
  }
  return flatArray;
}

console.log(flattenOld([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]; 
// console.log(flattenOld([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]; 
// console.log(flattenOld([[1], [2], [3]])) // [1,2,3]; 
// console.log(flattenOld([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3; 
module.exports = { flattenOld };
