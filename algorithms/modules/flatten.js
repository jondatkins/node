var flatten = function (arr, n) {
  const res = [];
  // If n is not passed to the function, assume that you want a wholly flattened array.
  if (typeof n === 'undefined') {
    n = Number.MAX_VALUE;
  }
  function helper(arr, depth) {
    for (const val of arr) {
      if (Array.isArray(val) && depth < n) {
        helper(val, depth + 1)
      }
      else {
        res.push(val);
      }
    }
    return res;
  }
  return helper(arr, 0);
}
// console.log(flatten([1, 2, 3, [4, 5]], 0)) // [1, 2, 3, 4, 5]; 
// console.log(flatten([1, [2, [3, 4], [[5]]]], 5)) // [1, 2, 3, 4, 5]; 
// console.log(flatten([[1], [2], [3]], 1)) // [1,2,3]; 
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3; 
module.exports = { flatten };
