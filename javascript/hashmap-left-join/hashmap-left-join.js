"use strict";

const { LinkedList } = require('../linked-list');

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

  set(key, value) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index][i].value = value;
        return;
      }
    }
    this.buckets[index].push({ key, value });
  }

  get(key) {
    let hash = this.hash(key);
    if (!this.buckets[hash]) {
      console.log("NO VALUES PRESENT FOR GIVEN KEY");
      return null;
    }

    for (let item of this.buckets[hash].values()) {
      if (item.key === key) {
        return item.value;
      }
    }

    console.log("NO VALUES PRESENT FOR GIVEN KEY");
    return null;
  }

  has(key) {
    let hash = this.hash(key);
    let list = this.buckets[hash];
    return list ? true : false;
  }

  keys() {
    const allKeys = [];
    for (let index = 0; index < this.size; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          allKeys.push(this.buckets[index][i].key);
        }
      }
    }
    return allKeys;
  }

  logAll() {
    for (let index = 0; index < this.size; index++) {
      if (this.buckets[index]) {
        for (let i = 0; i < this.buckets[index].length; i++) {
          const { key, value } = this.buckets[index][i];
          console.log(`Key: ${key}, Value: ${value}`);
        }
      }
    }
  }
}

module.exports = HashTable;
