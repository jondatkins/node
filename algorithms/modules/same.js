function same(array1, array2) {
  if (array1.length !== array2.length) return false;
  array1 = array1.sort();
  array2 = array2.sort();
  // let array3 = array1.map((item) => item * item));
  const array3 = array1.map((x) => x * x);
  let arraysMatch = false;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] != array3[i]) {
      return false;
    }
  }
  return true;
}

// export { same };
exports.same = same;
