var _ = require('lodash');

// Create a third array from array1 with all the values squared.
// Sort both arrays, and then they should match at each index.
const same = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  array1 = array1.sort();
  array2 = array2.sort();
  // let array3 = array1.map((item) => item * item));
  const array3 = array1.map((x) => x * x);
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] != array3[i]) {
      return false;
    }
  }
  return true;
}

// Create two objects from our arrays, getting the square
// of each value for array1, and just the value for array2.
// Objects should then be equal.
const same2 = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let obj1 = {};
  let obj2 = {};
  array1.forEach(element => {
    obj1[element * element] = ++obj1[element * element] || 1;
  });

  array2.forEach(element => {
    obj2[element] = ++obj2[element] || 1;
  });
  if (_.isEqual(obj1, obj2)) {
    return true;
  }
  return false;
}

// for each element in array1, see if it occurs in array2. If it does, remove that element from array2
const same3 = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    let correctIndex = array2.indexOf(array1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1)
  }
  return true;
}


const same4 = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  let freqCount1 = {};
  let freqCount2 = {};
  for (let val of array1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }
  for (let val of array2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }
  for (let key in freqCount1) {
    if (!(key ** 2 in freqCount2)) {
      return false;
    }
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return false;
    }
  }
  return true;
}

module.exports = { same, same2, same3, same4 };
