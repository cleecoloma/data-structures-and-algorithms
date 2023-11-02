"use strict";

const HashTable = require("../hash-table/hash-table.js");

function rightJoin(leftMap, rightMap) {
  const result = new HashTable(1024);

  Array.from(rightMap.keys()).forEach((key) => {
    const leftValue = leftMap.get(key);
    const rightValue = rightMap.get(key);
    result.set(key, [leftValue || null, rightValue]);
  });

  return result;
}

module.exports = rightJoin;
