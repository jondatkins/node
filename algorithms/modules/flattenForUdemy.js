var flatten = function (arr) {
  const res = [];
  function helper(arr) {
    for (const val of arr) {
      if (Array.isArray(val)) {
        helper(val);
      }
      else {
        res.push(val);
      }
    }
    return res;
  }
  return helper(arr, 0);
};
console.log(flatten([1, 2, 3, [4, 5]], 0)); // [1, 2, 3, 4, 5]; 
console.log(flatten([1, [2, [3, 4], [[5]]]], 5)); // [1, 2, 3, 4, 5]; 
console.log(flatten([[1], [2], [3]], 1)); // [1,2,3]; 
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]], Number.MAX_VALUE)); // [1,2,3; 
module.exports = { flatten };
