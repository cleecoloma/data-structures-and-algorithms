"use strict";

const Stack = require("../stack-and-queue/stack.js");

class StackQueueAnimalShelter {
  constructor() {
    this.dogEnqueueStack = new Stack();
    this.dogDequeueStack = new Stack();
    this.catEnqueueStack = new Stack();
    this.catDequeueStack = new Stack();
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogEnqueueStack.push(animal);
    } else if (animal.species === "cat") {
      this.catEnqueueStack.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === "dog") {
      if (this.dogDequeueStack.isEmpty()) {
        while (!this.dogEnqueueStack.isEmpty()) {
          this.dogDequeueStack.push(this.dogEnqueueStack.pop());
        }
      }
      return this.dogDequeueStack.pop();
    } else if (pref === "cat") {
      if (this.catDequeueStack.isEmpty()) {
        while (!this.catEnqueueStack.isEmpty()) {
          this.catDequeueStack.push(this.catEnqueueStack.pop());
        }
      }
      return this.catDequeueStack.pop();
    } else {
      return null;
    }
  }
}

module.exports = StackQueueAnimalShelter;
