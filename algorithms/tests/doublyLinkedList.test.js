const doublyLinkedList = require('../modules/doublyLinkedList')

test(`push`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push("Foo");
  expect(list.tail.val).toEqual("Foo")
  list.push("Bar")
  expect(list.tail.val).toEqual("Bar")
  expect(list.tail.prev.val).toEqual("Foo")
  list.push("Pushkin")
  expect(list.tail.val).toEqual("Pushkin")
})
test(`pop`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push("Foo");
  list.push("Bar")
  list.push("Pushkin")
  list.print()
  console.log(list.length)
  let pushkin = list.pop();
  // list.print()
  expect(pushkin.val).toBe("Pushkin")
  expect(list.tail.val).toBe("Bar")
  expect(list.length).toEqual(2)
  let bar = list.pop();
  expect(bar.val).toBe("Bar")
  expect(list.tail.val).toBe("Foo")
  expect(list.length).toEqual(1)
  let foo = list.pop();
  expect(foo.val).toBe("Foo")
  expect(list.tail).toBe(null)
  expect(list.head).toBe(null)
  expect(list.length).toEqual(0)

  let undef = list.pop();
  expect(undef).toBe(undefined)
  expect(list.tail).toBe(null)
  expect(list.head).toBe(null)
  expect(list.length).toEqual(0)
})
test(`shift`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push("I");
  list.push("have");
  list.push("of");
  list.push("late");
  expect(list.length).toBe(4)
  let i = list.shift();
  expect(i.val).toBe("I")
  expect(list.head.val).toBe("have")
  expect(list.head.prev).toBe(null)
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
  let list = new doublyLinkedList.DoublyLinkedList();
  list.unshift("Once")
  expect(list.head.val).toBe("Once")
  expect(list.tail.val).toBe("Once")
  expect(list.head.next).toBe(null)
  expect(list.length).toBe(1)
  // list will be "more","Once"
  list.unshift("more")
  expect(list.head.val).toBe("more")
  expect(list.head.next.val).toBe("Once")
  // Once's prev should be "more"
  expect(list.head.next.prev.val).toBe("more")
  expect(list.length).toBe(2)
})
test(`get test`, () => {
  let list2 = new doublyLinkedList.DoublyLinkedList();
  list2.push("I")
  list2.push("met")
  list2.push("a")
  list2.push("traveller")
  expect(list2.get(8)).toBe(null)
  expect(list2.get(3).val).toBe("traveller")
})
test(`set test`, () => {
  let list2 = new doublyLinkedList.DoublyLinkedList();
  list2.push("I")
  list2.push("met")
  list2.push("a")
  list2.push("traveller")
  list2.set(1, "encountered");
  list2.set(0, "one");
  expect(list2.get(1).val).toBe("encountered")
  expect(list2.get(0).val).toBe("one")
  expect(list2.get(2).val).toBe("a")
  let retFalse = list2.set("shouldBeFalse", -1);
  expect(retFalse).toBe(false)
})
test(`insert test`, () => {
  let list2 = new doublyLinkedList.DoublyLinkedList();
  list2.push("I")
  list2.push("met")
  list2.push("a")
  list2.push("traveller")
  list2.set("encountered", 1);
  list2.insert(0, "Ozymandias");
  expect(list2.get(0).val).toBe("Ozymandias")
  list2.insert(5, "from");
  expect(list2.get(5).val).toBe("from")
  expect(list2.get(5).prev.val).toBe("traveller")
  list2.insert(2, "A");
  expect(list2.get(2).val).toBe("A")
  // [ 'Ozymandias', 'I', 'A', 'met', 'a', 'traveller', 'from' ]
  expect(list2.get(2).prev.val).toBe("I")
})
test(`remove test`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push("I")
  list.push("met")
  list.push("a")
  list.push("traveller")
  expect(list.remove(100)).toBe(undefined)
  let met = list.remove(1);
  expect(met.val).toBe("met")
  expect(list.get(1).val).toBe("a")
  // [ 'I', 'a', 'traveller' ]
  expect(list.get(1).prev.val).toBe("I")
})
test(`reverse test`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push("I")
  list.push("met")
  list.push("a")
  list.push("traveller")
  list.reverse();
  expect(list.get(0).val).toBe("traveller")
  expect(list.get(1).val).toBe("a")
  expect(list.get(2).val).toBe("met")
  expect(list.get(3).val).toBe("I")
})
test(`rotate by 3`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push(5).push(10).push(15).push(20).push(25);
  expect(list.head.val).toEqual(5)
  expect(list.tail.val).toEqual(25)
  list.rotate(3);
  expect(list.head.val).toEqual(20)
  expect(list.head.next.val).toEqual(25)
  expect(list.head.next.next.val).toEqual(5)
  expect(list.head.next.next.next.val).toEqual(10)
  expect(list.head.next.next.next.next.val).toEqual(15)
  expect(list.tail.val).toEqual(15)
  expect(list.tail.next).toEqual(null)
})
test(`rotate by -1`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push(5).push(10).push(15).push(20).push(25);
  expect(list.head.val).toEqual(5)
  expect(list.tail.val).toEqual(25)
  list.rotate(-1);
  expect(list.head.val).toEqual(25)
  expect(list.head.next.val).toEqual(5)
  expect(list.head.next.next.val).toEqual(10)
  expect(list.head.next.next.next.val).toEqual(15)
  expect(list.head.next.next.next.next.val).toEqual(20)
  expect(list.tail.val).toEqual(20)
  expect(list.tail.next).toEqual(null)
})
test(`rotate by 1000`, () => {
  let list = new doublyLinkedList.DoublyLinkedList();
  list.push(5).push(10).push(15).push(20).push(25);
  expect(list.head.val).toEqual(5)
  expect(list.tail.val).toEqual(25)
  list.rotate(1000);
  expect(list.head.val).toEqual(5)
  expect(list.head.next.val).toEqual(10)
  expect(list.head.next.next.val).toEqual(15)
  expect(list.head.next.next.next.val).toEqual(20)
  expect(list.head.next.next.next.next.val).toEqual(25)
  expect(list.tail.val).toEqual(25)
  expect(list.tail.next).toEqual(null)
})
