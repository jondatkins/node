// Return the nth number in the fibonacci sequence
const fibonacci = (num: number, isUseMemo = true): number => {
  let numCalls = 0;
  let fibNums: Record<number, number> = {} as Record<number, number>;

  const fibonacciHelper = (num: number): number => {
    if (num <= 2) {
      return 1;
    }
    numCalls++;

    if (!isUseMemo) {
      return fibonacciHelper(num - 1) + fibonacciHelper(num - 2);
    }
    else {
      if (fibNums[num]) {
        return fibNums[num]
      }
      numCalls++;
      let result = fibonacciHelper(num - 1) + fibonacciHelper(num - 2);
      fibNums[num] = result;
      return result;
    }
  }
  let fibNum = fibonacciHelper(num);
  // console.log(numCalls);
  return fibNum;
}

let numCalls = 0;
function fib(n: number, memo: number[] = []): number {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  numCalls++;
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// console.log(fibonacci(4)) // 3; 
// console.log(fibonacci(10)) // 55; 
// console.log(fibonacci(28)) // 317811; 
// console.log(fibonacci(35, false)) // 9227465; 
console.log(fibonacci(100)) // 9227465; 
console.log(numCalls);

module.exports = { fibonacci };
