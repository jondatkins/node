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

test(`push`, () => {
  expect(list.push("Foo")).toEqual(push1)
})
test(`push`, () => {
  expect(list.push("Bar")).toEqual(push2)
})
test(`push`, () => {
  expect(list.push("Pushkin")).toEqual(push3)
})
test(`pop`, () => {
  let pushkin = list.pop3();
  expect(pushkin.val).toBe("Pushkin")
  expect(list.tail.val).toBe("Bar")
  expect(list.length).toEqual(2)
})
test(`pop`, () => {
  let bar = list.pop3();
  expect(bar.val).toBe("Bar")
  expect(list.tail.val).toBe("Foo")
  expect(list.length).toEqual(1)
})
test(`pop`, () => {
  let foo = list.pop3();
  expect(foo.val).toBe("Foo")
  expect(list.tail).toBe(null)
  expect(list.head).toBe(null)
  expect(list.length).toEqual(0)
})
test(`pop`, () => {
  let undef = list.pop3();
  expect(undef).toBe(undefined)
  expect(list.tail).toBe(null)
  expect(list.head).toBe(null)
  expect(list.length).toEqual(0)
})
test(`shift`, () => {
  list.push("I");
  list.push("have");
  list.push("of");
  list.push("late");
  expect(list.length).toBe(4)
  let i = list.shift();
  expect(i.val).toBe("I")
  expect(list.head.val).toBe("have")
})
test(`testing shift`, () => {
  let have = list.shift();
  let of = list.shift();
  let late = list.shift();
  let undef = list.shift();
  expect(have.val).toBe("have")
  expect(of.val).toBe("of")
  expect(late.val).toBe("late")
  expect(undef).toBe(undefined)
  expect(list.length).toBe(0)
  expect(list.tail).toBe(null)
})
test(`testing unshift`, () => {
  list.unshift("Once")
  expect(list.head.val).toBe("Once")
  expect(list.tail.val).toBe("Once")
  expect(list.head.next).toBe(null)
  expect(list.length).toBe(1)
  list.unshift("more")
  expect(list.head.val).toBe("more")
  expect(list.head.next.val).toBe("Once")
  expect(list.length).toBe(2)
})
test(`get test`, () => {
  let list2 = new singlyLinkedList.SinglyLinkedList();
  list2.push("I")
  list2.push("met")
  list2.push("a")
  list2.push("traveller")
  expect(list2.get(8)).toBe(null)
  expect(list2.get(3).val).toBe("traveller")
})
test(`set test`, () => {
  let list2 = new singlyLinkedList.SinglyLinkedList();
  list2.push("I")
  list2.push("met")
  list2.push("a")
  list2.push("traveller")
  list2.set("encountered", 1);
  expect(list2.get(1).val).toBe("encountered")
  expect(list2.get(2).val).toBe("a")
  let retFalse = list2.set("shouldBeFalse", -1);
  expect(retFalse).toBe(false)
})
test(`insert test`, () => {
  let list2 = new singlyLinkedList.SinglyLinkedList();
  list2.push("I")
  list2.push("met")
  list2.push("a")
  list2.push("traveller")
  list2.set("encountered", 1);
  list2.insert("Ozymandias", 0);
  expect(list2.get(0).val).toBe("Ozymandias")
  list2.insert("from", 4);
  expect(list2.get(4).val).toBe("from")
  list2.insert("A", 2);
  expect(list2.get(2).val).toBe("A")
})
