let obj = {
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

const stringifyNumbers = (anObj: any): any => {
  var newObject: Record<string, any> = {}
  for (const [key, value] of Object.entries(anObj)) {
    // If it's an array, just do a shallow copy
    if (Array.isArray(value)) {
      newObject[key] = [...value];
    }
    // If it's an object, do the recursive call
    else if (isObject(value)) {
      newObject[key] = stringifyNumbers(value);
    }
    // If it's a primitive, add it to our new object.
    else {
      if (typeof value === 'number') {
        newObject[key] = value.toString();
      }
      else {
        newObject[key] = value;
      }
    }
  }
  return newObject;
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}
console.log(obj);
console.log(stringifyNumbers(obj));
// Obj should not have changed here.
console.log(obj);
module.exports = { stringifyNumbers };
