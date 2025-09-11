const queue = require('../modules/PriorityQueue.ts')
test(`priority queue enqueue`, () => {
  let priorityQueue = new queue.PriorityQueue();
  priorityQueue.enqueue("low fever", 3);
  // low fever is min value at root.
  expect(priorityQueue.values[0].value).toEqual("low fever");
  // expect(binHeap.values[0]).toEqual(55)
  priorityQueue.enqueue("concussion", 2);
  // should replace low fever at root
  expect(priorityQueue.values[0].value).toEqual("concussion");
  priorityQueue.enqueue("drunk", 3);
  // concussion
  // low fever  drunk
  priorityQueue.enqueue("exploded head", 1);
  // explodedHead
  // concussion  drunk
  // low fever
  expect(priorityQueue.values[0].value).toEqual("exploded head");
  priorityQueue.enqueue("flu", 2);
  // explodedHead
  // concussion  drunk
  // lowFever flu
  let explodedHead = priorityQueue.dequeue();
  // concussion
  // flu drunk
  // lowFever
  expect(explodedHead.value).toEqual("exploded head");
  expect(priorityQueue.values[3].value).toEqual("low fever");
  // console.log(`${explodedHead2.value}`);
})
