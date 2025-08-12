const testStack = require('../modules/stackQueue.ts')

test(`push`, () => {
  let stack = new testStack.Stack();
  stack.push("Foo");
  expect(stack.first.value).toEqual("Foo")
  expect(stack.last.value).toEqual("Foo")
  stack.push("Bar")
  expect(stack.first.value).toEqual("Bar")
  expect(stack.first.next.value).toEqual("Foo")
  expect(stack.last.value).toEqual("Foo")
  stack.push("Pushkin")
  // Pushkin, Bar, Foo
  expect(stack.first.value).toEqual("Pushkin")
  expect(stack.first.next.value).toEqual("Bar")
  expect(stack.first.next.next.value).toEqual("Foo")
  expect(stack.last.value).toEqual("Foo")
})
test(`pop`, () => {
  let stack = new testStack.Stack();
  stack.push("Foo");
  stack.push("Bar")
  stack.push("Pushkin")
  // foo, bar, pushkin <- first
  let pushkin = stack.pop();
  // foo, bar <- first
  expect(pushkin).toEqual("Pushkin")
  expect(stack.first.value).toEqual("Bar")
  expect(stack.last.value).toEqual("Foo")
  let bar = stack.pop();
  // foo
  expect(bar).toEqual("Bar")
  expect(stack.first.value).toEqual("Foo")
  expect(stack.last.value).toEqual("Foo")
  let foo = stack.pop();
  expect(foo).toEqual("Foo")
  let nullvalue = stack.pop();
  expect(nullvalue).toEqual(null)
})
