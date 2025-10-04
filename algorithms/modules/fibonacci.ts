// Return the nth number in the fibonacci sequence
const fibonacci = (num: number): number => {
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4)) // 3; 
console.log(fibonacci(10)) // 55; 
console.log(fibonacci(28)) // 317811; 
console.log(fibonacci(35)) // 9227465; 

module.exports = { fibonacci };
