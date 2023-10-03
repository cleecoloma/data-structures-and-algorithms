'use strict';

const StackQueuePseudo = require("../stack-queue-pseudo.js");

describe("StackQueuePseudo", () => {
  let stackQueuePseudo;

  beforeEach(() => {
    stackQueuePseudo = new StackQueuePseudo();
  });

  it("should enqueue and dequeue elements correctly", () => {
    stackQueuePseudo.enqueue(1);
    stackQueuePseudo.enqueue(2);
    stackQueuePseudo.enqueue(3);

    expect(stackQueuePseudo.dequeue()).toBe(1);
    expect(stackQueuePseudo.dequeue()).toBe(2);
    expect(stackQueuePseudo.dequeue()).toBe(3);
  });

  it("should handle enqueuing after dequeuing", () => {
    stackQueuePseudo.enqueue(1);
    expect(stackQueuePseudo.dequeue()).toBe(1);

    stackQueuePseudo.enqueue(2);
    stackQueuePseudo.enqueue(3);

    expect(stackQueuePseudo.dequeue()).toBe(2);
    expect(stackQueuePseudo.dequeue()).toBe(3);
  });

  it("should throw an error when dequeuing from an empty queue", () => {
    expect(() => {
      stackQueuePseudo.dequeue();
    }).toThrow("Stack is empty");
  });
});
