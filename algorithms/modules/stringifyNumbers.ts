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

const access = (str: keyof typeof obj) => {
  return obj[str];
};

function stringifyNumbers(obj: any): any {
  var newObj: Record<string, any> = {}
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}
console.log(obj);
console.log(stringifyNumbers(obj));
// Obj should not have changed here.
console.log(obj);
module.exports = { stringifyNumbers };
