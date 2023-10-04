'use strict';

const StackQueueAnimalShelter = require("../stack-queue-animal-shelter.js");

describe("StackQueueAnimalShelter", () => {
  let shelter;

  beforeEach(() => {
    shelter = new StackQueueAnimalShelter();
  });

  it("should enqueue and dequeue dogs and cats correctly", () => {
    shelter.enqueue({ species: "dog", name: "Buddy" });
    shelter.enqueue({ species: "cat", name: "Whiskers" });
    shelter.enqueue({ species: "dog", name: "Rex" });

    expect(shelter.dequeue("cat")).toEqual({
      species: "cat",
      name: "Whiskers",
    });
    expect(shelter.dequeue("dog")).toEqual({ species: "dog", name: "Buddy" });
    expect(shelter.dequeue("dog")).toEqual({ species: "dog", name: "Rex" });
  });

  it("should handle enqueuing after dequeuing", () => {
    shelter.enqueue({ species: "dog", name: "Buddy" });
    expect(shelter.dequeue("dog")).toEqual({ species: "dog", name: "Buddy" });

    shelter.enqueue({ species: "cat", name: "Whiskers" });
    shelter.enqueue({ species: "dog", name: "Rex" });

    expect(shelter.dequeue("cat")).toEqual({
      species: "cat",
      name: "Whiskers",
    });
    expect(shelter.dequeue("dog")).toEqual({ species: "dog", name: "Rex" });
  });

  it("should return null when dequeuing from an empty queue", () => {
    expect(shelter.dequeue("cat")).toBeNull();
    expect(shelter.dequeue("dog")).toBeNull();
  });

  it("should return null when dequeuing with an invalid preference", () => {
    shelter.enqueue({ species: "dog", name: "Buddy" });
    shelter.enqueue({ species: "cat", name: "Whiskers" });

    expect(shelter.dequeue("rabbit")).toBeNull();
  });
});