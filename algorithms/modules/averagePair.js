const averagePair = (intArray, targetAverage) => {
  let i = 0;
  let j = intArray.length - 1;
  while (i < j) {
    let average = (intArray[i] + intArray[j]) / 2
    if (average > targetAverage) {
      j--;
    }
    else if (average < targetAverage) {
      i++;
    }
    else {
      return true;
    }
  }
  return false;
}
console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false

module.exports = { averagePair };
