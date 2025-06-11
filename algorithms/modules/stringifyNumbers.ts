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
  let newObject = {};
  function helper(obj: any): any {
    for (const [key, value] of Object.entries(obj)) {
      if (isObject(value)) {
        helper(value);
      }
      else {
        if (typeof value === 'number') {
          // evenSum += value;
          let StringNum = '' + value;
          newObject[key] = StringNum;
        }
      }
    }
    return newObject;
  }
  return helper(obj);
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}
console.log(stringifyNumbers(obj));
module.exports = { stringifyNumbers };
