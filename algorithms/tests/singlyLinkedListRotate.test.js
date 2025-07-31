const singlyLinkedList = require('../modules/singlyLinkedList')


test(`rotate by 3`, () => {
  let list = new singlyLinkedList.SinglyLinkedList();
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
  let list = new singlyLinkedList.SinglyLinkedList();
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
  let list = new singlyLinkedList.SinglyLinkedList();
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
