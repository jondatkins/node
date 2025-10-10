// Return the nth number in the fibonacci sequence
const minCoinChange = (coins: number[], amount: number): number[] => {
  let result = [];
  let sum = 0;
  let index = coins.length - 1;

  while (index >= 0) {
    sum += coins[index];
    if (sum <= amount) {
      result.push(coins[index]);
    }
    else {
      sum -= coins[index];
      index--;
    }
  }
  return result;
}


// To make 10, use 10 1s. Use 4 2s and 2 1s. Use 2 2s, 1 1 and 1 5. And use 2 5s.
const coinChange = (coins: number[], amount: number): number => {
  let dp = Array.apply(null, Array(amount + 1)).map(function () { return amount + 1 });
  dp[0] = 0;

  for (let i = 0; i < amount + 1; i++) {
    for (let coin of coins) {
      if (a - coin >= 0) { }

    }
  }

  // let x = minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
  // console.log(x);
  // let y = minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
  // console.log(y);
  // let z = minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]
  // console.log(z);

  const denominations = [1, 5, 10, 25]
  // let a = coinChange(denominations, 1) // 1
  // console.log(a);
  // let b = coinChange(denominations, 2) // 1
  // console.log(b);
  // let c = coinChange(denominations, 5) // 2
  // console.log(c);
  // let d = coinChange(denominations, 10) // 4
  // console.log(d);
  let e = coinChange(denominations, 25) // 13
  console.log(e);
  // let f = coinChange(denominations, 45) // 39
  // console.log(f);
  // let g = coinChange(denominations, 100) // 242
  // console.log(g);
  // let h = coinChange(denominations, 145) // 622
  // console.log(h);
  // let i = coinChange(denominations, 1451) // 425663
  // console.log(i);
  // let k = coinChange(denominations, 14511) // 409222339
  // console.log(k);
  module.exports = { minCoinChange, coinChange };
