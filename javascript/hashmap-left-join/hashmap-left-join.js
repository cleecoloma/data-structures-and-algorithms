"use strict";

const HashTable = require("../hash-table/hash-table.js");

function leftJoin(leftMap, rightMap) {
  const result = new HashTable(1024);

  Array.from(leftMap.keys()).forEach((key) => {
    const leftValue = leftMap.get(key);
    const rightValue = rightMap.get(key);
    result.set(key, [leftValue, rightValue || null]);
  });

  return result;
}

module.exports = leftJoin;
