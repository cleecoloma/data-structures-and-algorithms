"use strict";

const Stack = require("../stack.js");

describe("Stack", () => {
  // it('can be created', () => {
  //   const stack = new Stack();
  //   expect(stack).toBeTruthy();
  // });
  // it('should be empty at the start', () => {
  //   const stack = new Stack();
  //   const actual = stack.isEmpty();
  //   const expected = true;
  //   expect(actual).toEqual(expected);
  // });
  // it('should NOT be empty when not empty', () => {
  //   const stack = new Stack();
  //   stack.push('apple');
  //   const actual = stack.isEmpty();
  //   const expected = false;
  //   expect(actual).toEqual(expected);
  // });
  // it('should add value to top', () => {
  //   const stack = new Stack();
  //   stack.push('apple');
  //   const actual = stack.peek();
  //   const expected = 'apple';
  //   expect(actual).toEqual(expected);
  // });
  // it('should raise exception when peeking empty', () => {
  //   const stack = new Stack();
  //   expect(() => stack.peek()).toThrow('Stack is empty, silly');
  // });
  it("Can successfully push onto a stack", () => {
    const stack = new Stack();
    stack.push("apple");
    expect(stack.peek()).toEqual("apple");
  });

  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("orange");
    expect(stack.peek()).toEqual("orange");
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("orange");
    expect(stack.pop()).toEqual("orange");
    expect(stack.peek()).toEqual("apple");
  });

  it("Can successfully empty a stack after multiple pops", () => {
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

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("blueberry");
    expect(stack.peek()).toEqual("blueberry");
  });

  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow("Stack is empty");
    expect(() => stack.pop()).toThrow("Stack is empty");
  });
});
