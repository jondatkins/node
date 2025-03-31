function add(numbers) {
  return numbers
    .split(',')
    .map(x => parseInt(x))
    .filter((element) => !isNaN(element))
    .reduce((a, b) => a + b)
}

exports.add = add;
