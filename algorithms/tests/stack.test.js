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
test(`pop`, () => {
  let stack = new testStack.Stack();
  stack.push("Foo");
  stack.push("Bar")
  stack.push("Pushkin")
  // foo, bar, pushkin <- first
  let pushkin = stack.pop();
  // foo, bar <- first
  expect(pushkin.val).toEqual("Pushkin")
  expect(stack.first.val).toEqual("Bar")
  expect(stack.last.val).toEqual("Foo")
  let bar = stack.pop();
  // foo
  expect(bar.val).toEqual("Bar")
  expect(bar.next).toEqual(null)
  expect(stack.first.val).toEqual("Foo")
  expect(stack.last.val).toEqual("Foo")
  let foo = stack.pop();
  expect(foo.val).toEqual("Foo")
  let nullVal = stack.pop();
  expect(nullVal).toEqual(null)
})
