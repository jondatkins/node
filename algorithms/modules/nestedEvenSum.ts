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

const nestedEvenSum = (obj: any): number => {
  let evenSum = 0;
  function helper(obj: any): number {
    for (const [key, value] of Object.entries(obj)) {
      if (isObject(value)) {
        helper(value);
      }
      else {
        if (typeof value === 'number' && value % 2 === 0) {
          evenSum += value;
        }
      }
    }
    return evenSum
  }
  return helper(obj);
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}

console.log(nestedEvenSum(obj1)) // 6; 
console.log(nestedEvenSum(obj2)) // 10; 
module.exports = { nestedEvenSum };
