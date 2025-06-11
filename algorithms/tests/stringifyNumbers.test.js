const stringifyNumbers = require('../modules/stringifyNumbers')

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

let obj2 = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}

test(`testDescription`, () => {
  expect(stringifyNumbers.stringifyNumbers(obj)).toEqual(obj2)
})
