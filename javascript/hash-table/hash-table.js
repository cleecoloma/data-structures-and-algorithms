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
    let hash = this.hash(key);
    let payload = `${key}:${value}`;
    let values = this.buckets[hash];
    if (!values) {
      let list = new LinkedList();
      list.append(payload);
      this.buckets[hash] = list;
    } else {
      values.add(payload);
    }
  }

  get(key) {
    let hash = this.hash(key);
    let list = this.buckets[hash];
    if (!list) {
      console.log("NO VALUES PRESENT FOR GIVEN KEY");
      return;
    } else {
      return list.values();
    }
  }

  has(key) {
    let hash = this.hash(key);
    let list = this.buckets[hash];
    return list ? true : false;
  }

  keys() {
    let allKeys = [];
    this.buckets.forEach((list) => {
      if (list) {
        list.each((node) => {
          let [key, value] = node.split(":");
          allKeys.push(key);
        });
      }
    });
    return allKeys;
  }
}

module.exports = HashTable;
