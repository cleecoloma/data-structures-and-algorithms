'use strict';

const Stack = require('../stack-and-queue/stack.js');

class StackQueuePseudo {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    if (this.stack2.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stack2.pop();
  }
}

module.exports = StackQueuePseudo;
