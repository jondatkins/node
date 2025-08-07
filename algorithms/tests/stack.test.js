const testStack = require('../modules/stack2')

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
  expect(stack.first.value).toEqual("Pushkin")
  expect(stack.first.next.value).toEqual("Bar")
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
test(`pop 2`, () => {
  let stack = new testStack.Stack();
  stack.push(10);
  stack.push(100);
  stack.push(1000);
  // 10, 100, 1000
  var removed = stack.pop();
  expect(removed).toEqual(1000)
  expect(stack.size).toEqual(2)
  let oneHundred = stack.pop();
  expect(oneHundred).toEqual(100)
  let ten = stack.pop();
  expect(ten).toEqual(10)
  expect(stack.size).toEqual(0)
  stack.size // 0
})
