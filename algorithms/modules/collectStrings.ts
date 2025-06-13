
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
  for (const [key, value] of Object.entries(anObj)) {
    // If it's an object, do the recursive call
    if (isObject(value)) {
      strArray = [...strArray, ...collectStrings(value)];
    }
    // If it's a string, add it to our new array.
    else {
      if (typeof value === 'string') {
        strArray.push(value);
      }
    }
  }
  return strArray;
}

function isObject(obj: any): boolean {
  return obj === Object(obj);
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"]); 
module.exports = { collectStrings };
