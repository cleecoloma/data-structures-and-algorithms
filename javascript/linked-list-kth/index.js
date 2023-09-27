"use strict";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let current = this.head;
    let newNode = new Node(value);
    if (!current) {
      this.head = newNode;
      return;
    }
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  kthFromEnd(k) {
    let current = this.head;
    let pointer = this.head;

    // if k is less than 0, it returns -1
    if (k < 0) {
      return -1;
    }

    // checks if k is 0, it would return the value of last node
    if (k === 0) {
      while (current.next) {
        current = current.next;
      }
      return current.value;
    }

    //  moves pointer to k nodes ahead of current
    while (k) {
      // returns -1 if pointer.next is null
      if (!pointer.next) {
        return -1;
      }
      pointer = pointer.next;
      k--;
    }

    // iterates until pointer.next is null
    while (pointer.next) {
      current = current.next;
      pointer = pointer.next;
    }

    return current.value;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  LinkedList,
  Node,
};
