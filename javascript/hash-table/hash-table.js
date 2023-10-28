"use strict";

const LinkedList = require('../linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  hash(key) {
    let string = JSON.stringify(key);
    let sum = 0;
    for (let char of string) {
      sum += char.charCodeAt(0);
    }
    let largeNum = sum * 599;
    let hash = largeNum % this.size;
    return hash;
  }
}
