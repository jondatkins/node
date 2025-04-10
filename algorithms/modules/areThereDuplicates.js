// Count the unique values in a sorted array, and return that value
const areThereDuplicates = (...theArgs) => {
  let argsFrequency = {};
  for (const arg of theArgs) {
    if (argsFrequency[arg]) {
      return true;
    }
    else {
      argsFrequency[arg] = arg;
    }
  }
  return false;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 

module.exports = { areThereDuplicates };
