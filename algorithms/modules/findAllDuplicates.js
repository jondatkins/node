const findAllDuplicates = (anArray) => {
  let numFreq = {};
  let dupeArray = [];
  anArray.forEach(element => {
    numFreq[element] = ++numFreq[element] || 1;
    if (numFreq[element] === 2) {
      dupeArray.push(element);
    }
  });
  return dupeArray;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]) // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]) // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1

module.exports = { findAllDuplicates };
