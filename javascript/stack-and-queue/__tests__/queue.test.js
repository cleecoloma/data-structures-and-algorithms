"use strict";

const Queue = require("../queue.js");

describe("Queue", () => {
  // it(`enqueues one item to empty`, () => {
  //   const queue = new Queue();
  //   queue.enqueue("apples");
  //   const actual = queue.peek();
  //   const expected = "apples";
  //   expect(actual).toEqual(expected);
  // });

  // it(`enqueues two item to empty`, () => {
  //   const queue = new Queue();
  //   queue.enqueue("apples");
  //   queue.enqueue("bananas");
  //   const actual = queue.peek();
  //   const expected = "apples";
  //   expect(actual).toEqual(expected);
  // });

  // it(`implements first in last out functionality`, () => {
  //   let queue = new Queue();
  //   queue.enqueue("apples");
  //   queue.enqueue("bananas");
  //   queue.enqueue("cucumbers");
  //   expect(queue.dequeue()).toEqual("apples");
  //   expect(queue.dequeue()).toEqual("bananas");
  //   expect(queue.dequeue()).toEqual("cucumbers");
  // });

  // xit(`throws error when calling peek on empty`, () => {
  //   const queue = new Queue();
  //   expect(() => queue.peek()).toThrow(UnsupportedMethodError);
  // });

  // xit(`throws error when calling dequeue on empty`, () => {
  //   const queue = new Queue();
  //   expect(() => queue.dequeue()).toThrow(UnsupportedMethodError);
  // });

  // xit(`correctly reports that collection is empty`, () => {
  //   const queue = new Queue();
  //   const actual = queue.isEmpty();
  //   const expected = true;
  //   expect(actual).toEqual(expected);
  // });

  // xit(`correctly reports that collection is not empty`, () => {
  //   const queue = new Queue();
  //   queue.enqueue("apples");
  //   const actual = queue.isEmpty();
  //   const expected = false;
  //   expect(actual).toEqual(expected);
  // });
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    expect(queue.peek()).toEqual("apple");
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    queue.enqueue("orange");
    expect(queue.peek()).toEqual("apple");
    expect(queue.rear.value).toEqual("orange");
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    queue.enqueue("banana");
    queue.enqueue("orange");
    expect(queue.dequeue()).toEqual("apple");
    expect(queue.peek()).toEqual("banana");
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    queue.enqueue("blueberry");
    expect(queue.peek()).toEqual("apple");
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    queue.enqueue("blueberry");
    queue.enqueue("banana");
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow("Queue is empty");
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow("Queue is empty");
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });
});
