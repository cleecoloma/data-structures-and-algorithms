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

  zipLists(list1, list2) {
    const result = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    let currentResult = null;

    while (current1 || current2) {
      if (current1) {
        if (!currentResult) {
          currentResult = new Node(current1.value);
          result.head = currentResult;
        } else {
          currentResult.next = new Node(current1.value);
          currentResult = currentResult.next;
        }
        current1 = current1.next;
      }

      if (current2) {
        if (!currentResult) {
          currentResult = new Node(current2.value);
          result.head = currentResult;
        } else {
          currentResult.next = new Node(current2.value);
          currentResult = currentResult.next;
        }
        current2 = current2.next;
      }
    }

    return result;
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
