const power = (base: number, exponent: number) => {
  if (exponent === 1) {
    return base;
  }
  return power(base, exponent - 1) * base;
}
// console.log(power(2, 2)) // 4; 
// console.log(power(4, 2)) // 16; 
// console.log(power(1, 10)) // 1; 
// console.log(power(3, 2)) // 9; 
module.exports = { power };
