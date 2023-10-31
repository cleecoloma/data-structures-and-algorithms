"use strict";
const HashTable = require("../hash-table/hash-table.js");

function repeatedWord(str) {
  const words = str.toLowerCase().split(/\W+/); // Split the input string into an array of words
  const hashTable = new HashTable(512);

  for (const word of words) {
    if (word !== "") {
      // Skip empty words
      if (hashTable.has(word)) {
        return word; // Return the first repeated word
      } else {
        hashTable.set(word, true);
      }
    }
  }

  return "No repeated word found";
}

module.exports = repeatedWord;