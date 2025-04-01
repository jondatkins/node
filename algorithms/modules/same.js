var _ = require('lodash');

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

module.exports = { same, same2 };
