const linearSearch = (arr: number[], num: number): number => {
  let index = 0;
  function helper(arr: number[], num: number): number {
    if (arr.length === 1) {
      if (num === arr[0]) {
        return index;
      }
      else {
        return -1;
      }
    }
    if (arr[0] === num) {
      return index;
    }
    else {
      index++;
      return helper(arr.slice(1), num)
    }
  }
  return helper(arr, num);
}
console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1; 
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5; 
console.log(linearSearch([100], 100)) // 0; 
console.log(linearSearch([1, 2, 3, 4, 5], 6)) // -1; 
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)) // -1; 
console.log(linearSearch([100], 200)) // -1; 
module.exports = { linearSearch };
