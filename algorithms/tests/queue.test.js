const testQueue = require('../modules/queue')

test(`enqueue`, () => {
  let queue = new testQueue.Queue();
  queue.enqueue("Foo");
  expect(queue.first.value).toEqual("Foo")
  expect(queue.last.value).toEqual("Foo")
  queue.enqueue("Bar")
  expect(queue.first.value).toEqual("Foo")
  expect(queue.last.value).toEqual("Bar")
  queue.enqueue("Pushkin")
  expect(queue.first.value).toEqual("Foo")
  expect(queue.first.next.value).toEqual("Bar")
  expect(queue.last.value).toEqual("Pushkin")
})
test(`enqueue 2`, () => {
  var queue = new testQueue.Queue();
  let one = queue.enqueue(10);    // returns 1, size becomes 1
  expect(one).toEqual(1);
  expect(queue.size).toEqual(1);
  let two = queue.enqueue(100);   // returns 2, size becomes 2
  expect(two).toEqual(2);
  expect(queue.size).toEqual(2);
  let three = queue.enqueue(1000);  // returns 3, size becomes 3
  expect(three).toEqual(3);
  expect(queue.size).toEqual(3);
})
test(`dequeue`, () => {
  let queue = new testQueue.Queue();
  queue.enqueue("Foo");
  queue.enqueue("Bar")
  queue.enqueue("Pushkin")
  // Pushkin, Bar, Foo
  let foo = queue.dequeue();
  expect(foo).toEqual("Foo")
  let bar = queue.dequeue();
  expect(bar).toEqual("Bar")
  let pushkin = queue.dequeue();
  expect(pushkin).toEqual("Pushkin")
})
test(`dequeue 2`, () => {
  var queue = new testQueue.Queue();
  queue.enqueue(10);    // returns 1, size becomes 1
  queue.enqueue(100);   // returns 2, size becomes 2
  queue.enqueue(1000);  // returns 3, size becomes 3
  let ten = queue.dequeue();      // returns 10, size becomes 2
  expect(ten).toEqual(10);
  expect(queue.size).toEqual(2);
  let hundred = queue.dequeue();      // returns 10, size becomes 2
  expect(hundred).toEqual(100);
  expect(queue.size).toEqual(1);
  expect(queue.first.value).toEqual(1000);
  let thousand = queue.dequeue();      // returns 10, size becomes 2
  expect(thousand).toEqual(1000);
  expect(queue.size).toEqual(0);
  expect(queue.first).toEqual(null);
  expect(queue.last).toEqual(null);
  let nullVal = queue.dequeue();      // returns 10, size becomes 2
  expect(nullVal).toEqual(null);
  expect(queue.size).toEqual(0);
})
