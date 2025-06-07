var flatten = function (arr, n) {
  const res = [];

  function helper(arr, depth) {
    for (const val of arr) {
      // if (typeof val === 'object' && depth < n) {
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
console.log(flatten([1, 2, 3, [4, 5]], 0)) // [1, 2, 3, 4, 5]; 
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]; 
// console.log(flatten([[1], [2], [3]])) // [1,2,3]; 
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3; 
module.exports = { flatten };
