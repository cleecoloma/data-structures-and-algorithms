'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let current = this.head;
    let newNode = new Node(value);
    newNode.next = current;
  }

  include(value) {
    let current = this.head;
    let isValueIncluded = false;
    while (current.next) {
      current = current.next
      if (current.value === value) {
        isValueIncluded = true;
        break;
      }
    }
    return isValueIncluded;
  }

  toString() {
    let current = this.head;
    let stringToLog = '';
    while (current) {
      stringToLog.concat(`{ ${current.value} } -> `);
    }
    stringToLog.concat('NULL');
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


module.exports = LinkedList;
