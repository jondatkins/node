const collectStrings = require('../modules/collectStrings')

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

test(`testDescription`, () => {
  expect(collectStrings.collectStrings(obj)).toEqual(["foo", "bar", "baz"])
})
