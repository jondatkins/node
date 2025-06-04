const factorial = (num) => {
  if (num < 0) {
    return 0;
  }
  if (num <= 1) {
    return 1;
  }
  return factorial(num - 1) * num;
}
console.log(factorial(0)) // 0; 
console.log(factorial(1)) // 1; 
console.log(factorial(2)) // 2; 
console.log(factorial(4)) // 24; 
console.log(factorial(7)) // 5040; 
module.exports = { factorial };
