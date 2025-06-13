const copyObject = (anObj: any): any => {
  var newObject: Record<string, any> = {}
  for (const [key, value] of Object.entries(anObj)) {
    // If it's an array, just do a shallow copy
    if (Array.isArray(value)) {
      newObject[key] = [...value];
    }
    // If it's an object, do the recursive call
    else if (isObject(value)) {
      newObject[key] = copyObject(value);
    }
    // If it's a primitive, add it to our new object.
    else {
      newObject[key] = value;
    }
  }
  return newObject;
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}
let arr3 = ['x', 'y', [7, 8, 9], ['a', 'b', 'c'], obj1]

function arrayDeepCopy(arr: any[]): any[] {
  var newArray: any = [];
  arr.forEach((elem: any, index: number) => {

    if (Array.isArray(elem)) {
      // newObject[key] = [...elem];
      newArray[index] = arrayDeepCopy(elem);
      // newArray[index] = [...elem];
    }
    // If it's an object, do the recursive call
    else if (isObject(elem)) {
      // newObject[key] = copyObject(elem);
      newArray[index] = copyObject(elem);
    }
    // If it's a primitive, add it to our new object.
    else {
      newArray[index] = elem;
    }

  })
  return newArray;
}
console.log(`arr3 is:`);
console.log(arr3);
let arr4 = arrayDeepCopy(arr3);
console.log(`arr4 is:`);
console.log(arr4);
console.log(`changing arr3 array value to 77`);
arr3[2][0] = 77;
console.log(`changing arr3 object value to {}`);
arr3[4] = {};
console.log(`arr3 is:`);
console.log(arr3);
console.log(`arr4 is:`);
console.log(arr4);
module.exports = { arrayDeepCopy, copyObject };
