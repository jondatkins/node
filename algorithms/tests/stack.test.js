const testStack = require('../modules/stack')

test(`push`, () => {
  let stack = new testStack.Stack();
  stack.push("Foo");
  expect(stack.first.val).toEqual("Foo")
  expect(stack.last.val).toEqual("Foo")
  stack.push("Bar")
  expect(stack.first.val).toEqual("Bar")
  expect(stack.first.next.val).toEqual("Foo")
  expect(stack.last.val).toEqual("Foo")
  stack.push("Pushkin")
  expect(stack.first.val).toEqual("Pushkin")
  expect(stack.first.next.val).toEqual("Bar")
  expect(stack.last.val).toEqual("Foo")
})
