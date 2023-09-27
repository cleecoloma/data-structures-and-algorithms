"use strict";

class LinkedList {
  constructor() {
    this.head = null;
  }

  kthFromEnd(k) {
    let current = this.head;
    let pointer = this.head;

    // checks if k is 0, it would return the value of last node
    if (k === 0) {
      while (current.next) {
        current = current.next;
      }
      return current.value;
    }

    //  moves pointer to k nodes ahead of current
    while (k) {
      if (!pointer) {
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
