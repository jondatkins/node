const sumZero = (intArray) => {
  for (let i = 0; i < intArray.length; i++) {
    for (let j = i + 1; j < intArray.length; j++) {
      if (intArray[i] + intArray[j] == 0) {
        return [intArray[i], intArray[j]];
      }

    }
  }
  return undefined;
}

const sumZero2 = (intArray) => {
  i = 0;
  j = intArray.length - 1;
  while (i < j) {
    let sum = intArray[i] + intArray[j];
    if (sum == 0) {
      return [intArray[i], intArray[j]];
    }
    else if (sum < 0) {
      i++;
    }
    else {
      j--;
    }
  }
  return undefined;
}
module.exports = { sumZero, sumZero2 };
