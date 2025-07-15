const singlyLinkedList = require('../modules/singlyLinkedList')
let list = new singlyLinkedList.SinglyLinkedList();

let push1 = {
  head: { val: 'Foo', next: null },
  tail: { val: 'Foo', next: null },
  length: 1
}

let push2 = {
  head: { val: 'Foo', next: { val: 'Bar', next: null } },
  tail: { val: 'Bar', next: null },
  length: 2
}

let push3 = {
  "head": {
    "val": "Foo",
    "next": {
      "val": "Bar",
      "next": {
        "val": "Pushkin",
        "next": null
      }
    }
  },
  "tail": {
    "val": "Pushkin",
    "next": null
  },
  "length": 3
}
// pop 3 times
let pop1 = {
  "head": {
    "val": "Foo",
    "next": {
      "val": "Bar",
      "next": null
    }
  },
  "tail": {
    "val": "Bar",
    "next": null
  },
  "length": 2
}

let pop2 = {
  "head": {
    "val": "Foo",
    "next": null
  },
  "tail": {
    "val": "Foo",
    "next": null
  },
  "length": 1
}

let pop3 = {
  "head": null,
  "tail": null,
  "length": 0
}

test(`testDescription`, () => {
  expect(list.push("Foo")).toEqual(push1)
})
test(`testDescription`, () => {
  expect(list.push("Bar")).toEqual(push2)
})
test(`testDescription`, () => {
  expect(list.push("Pushkin")).toEqual(push3)
})
test(`testDescription`, () => {
  let pushkin = list.pop2();
  expect(list.tail.val).toBe("Bar")
  expect(list.length).toEqual(2)
})
test(`testDescription`, () => {
  let bar = list.pop2();
  expect(list.tail.val).toBe("Foo")
  expect(list.length).toEqual(1)
})
test(`testDescription`, () => {
  let foo = list.pop2();
  expect(list.tail).toBe(null)
  expect(list.head).toBe(null)
  expect(list.length).toEqual(0)
})
