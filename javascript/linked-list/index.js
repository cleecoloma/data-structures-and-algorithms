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

  append(value) {
    let current = this.head;
    let newNode = new Node(value);

    // checks to see if there's initial node. If not, adds newNode as head
    if (!current) {
      this.head = newNode;
      return;
    }

    // iterates until next node is null
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    let newNode = new Node(newValue);

    // checks if theres no node, then add new node
    if (!current) {
      this.head = newNode;
      return;
    }

    // inserts newNode before head if head.value is equals to value
    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
      return;
    }

    // traverse linked list if next node is not null
    while (current.next !== null) {
      // inserts newNode if next node value is equals to value
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    let newNode = new Node(newValue);

    // traverse linked list if current node is not null
    while (current !== null) {
      // inserts newNode if next node value is equals to value
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
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
