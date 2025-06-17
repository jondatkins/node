const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

const collectStrings = (anObj: any) => {
  let strArray: string[] = [];
  for (var key in anObj)
    // If it's an object, do the recursive call
    if (isObject(anObj[key])) {
      strArray = [...strArray, ...collectStrings(anObj[key])];
    }
    // If it's a string, add it to our new array.
    else {
      if (typeof anObj[key] === 'string') {
        strArray.push(anObj[key]);
      }
    }
  return strArray;
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"]); 
module.exports = { collectStrings };
