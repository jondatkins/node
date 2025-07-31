const singlyLinkedListRotate = require('../modules/singlyLinkedListRotate')

let list = new singlyLinkedList.SinglyLinkedList();
list.push(5).push(10).push(15).push(20).push(25);

test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.val).toEqual(5)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.val).toEqual(25)
})
list.rotate(3);
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.val).toEqual(20)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.val).toEqual(25)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.val).toEqual(5)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.next.val).toEqual(10)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.next.next.val).toEqual(15)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.val).toEqual(15)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.next).toEqual(null)
})


list = new singlyLinkedList.SinglyLinkedList();
list.push(5).push(10).push(15).push(20).push(25);
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.val).toEqual(5)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.val).toEqual(25)
})

list.rotate(-1);
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.val).toEqual(25)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.val).toEqual(5)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.val).toEqual(10)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.next.val).toEqual(15)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.next.next.val).toEqual(20)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.val).toEqual(20)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.next).toEqual(null)
})

list = new singlyLinkedList.SinglyLinkedList();
list.push(5).push(10).push(15).push(20).push(25);
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.val).toEqual(5)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.val).toEqual(25)
})
list.rotate(1000);
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.val).toEqual(5)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.val).toEqual(10)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.val).toEqual(15)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.next.val).toEqual(20)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.head.next.next.next.next.val).toEqual(25)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.val).toEqual(25)
})
test(`testDescription`, () => {
  expect(singlyLinkedListRotate.list.tail.next).toEqual(null)
})
