"use strict";

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  include(value) {
    let current = this.head;
    let isValueIncluded = false;
    while (current.next) {
      current = current.next;
      if (current.value === value) {
        isValueIncluded = true;
        break;
      }
    }
    return isValueIncluded;
  }

  toString() {
    let current = this.head;
    let stringToLog = "";
    while (current) {
      stringToLog = stringToLog.concat(`{ ${current.value} } -> `);
      current = current.next;
    }
    stringToLog = stringToLog.concat("NULL");
    return stringToLog;
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
