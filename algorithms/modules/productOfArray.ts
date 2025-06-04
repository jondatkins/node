const productOfArray = (array: number[]) => {
  if (array.length === 0) {
    // return array[0];
    return 1;
  }
  return productOfArray(array.slice(1)) * array[0];
}
console.log(productOfArray([1, 2, 3])) // 6; 
console.log(productOfArray([1, 2, 3, 10])) // 60; 
module.exports = { productOfArray };
