const recursiveRange = (num: number) => {
  if (num === 0) {
    return 0;
  }
  return recursiveRange(num - 1) + num;
}
console.log(recursiveRange(6)) // 21; 
console.log(recursiveRange(10)) // 55; 
module.exports = { recursiveRange };
