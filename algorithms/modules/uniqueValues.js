// Count the unique values in a sorted array, and return that value
const countUniqueValues = (intArray) => {
  if (intArray.length === 0) {
    return 0;
  }
  let i = 0;
  let count = 1;
  let j = 1;
  while (j < intArray.length) {
    if (intArray[i] == intArray[j]) {
      j++;
    }
    else {
      i = j;
      j = i + 1;
      count++;
    }
  }
  return count;
}

const countUniqueValues2 = (intArray) => {
  if (intArray.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (j < intArray.length) {
    if (intArray[i] == intArray[j]) {
      j++;
    }
    else {
      i++;
      intArray[i] = intArray[j];
    }
  }
  return i + 1;
}
module.exports = { countUniqueValues, countUniqueValues2 };
