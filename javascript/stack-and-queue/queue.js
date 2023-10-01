"use strict";

const { Node } = require("../linked-list/index.js");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front === null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    newNode.next = this.rear;
    this.rear = newNode;

    if (this.front === null) {
      this.front = this.rear;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const oldFront = this.front.value;
    this.front = this.front.next;

    return oldFront;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    return this.front.value;
  }
}

module.exports = Queue;
