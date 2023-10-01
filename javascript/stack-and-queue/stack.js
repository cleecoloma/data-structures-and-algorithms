'use strict';

const { Node } = require('../linked-list/index.js');

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const oldTop = this.top.value;
    this.top = this.top.next;

    return oldTop;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.top.value;
  }
}

module.exports = Stack;
