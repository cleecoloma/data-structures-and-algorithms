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
    const stack = new Stack();
    stack.push("apple");
    stack.push("orange");
    expect(stack.peek()).toEqual("orange");
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("orange");
    expect(stack.pop()).toEqual("orange");
    expect(stack.peek()).toEqual("apple");
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("banana");
    stack.push("orange");
    stack.push("strawberry");
    expect(stack.pop()).toEqual("strawberry");
    expect(stack.pop()).toEqual("orange");
    expect(stack.pop()).toEqual("banana");
    expect(stack.pop()).toEqual("apple");
    expect(stack.isEmpty()).toEqual(true);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("blueberry");
    expect(stack.peek()).toEqual("blueberry");
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it("Can successfully instantiate an empty queue", () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow("Stack is empty");
    expect(() => stack.pop()).toThrow("Stack is empty");
  });
});
