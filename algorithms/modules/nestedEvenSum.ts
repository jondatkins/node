var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' }
};

const nestedEvenSum = (obj: any, sum: number = 0): number => {
  for (var key in obj) {
    // if (typeof obj[key] === 'object') {
    if (isObject(obj[key])) {
      sum += nestedEvenSum(obj[key]);
    }
    else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

function isObject(obj: any): boolean {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null
}

console.log(nestedEvenSum(obj1)) // 6; 
console.log(nestedEvenSum(obj2)) // 10; 
module.exports = { nestedEvenSum };
