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

function wordCountAndMostFrequentWords(str, topN) {
  const words = str.toLowerCase().split(/\W+/); // Split the input string into an array of words
  const hashTable = new HashTable(100); // Create a new HashTable with an appropriate size

  for (const word of words) {
    if (word !== "") {
      // Skip empty words
      if (hashTable.has(word)) {
        // If the word is already in the hash table, increment the count
        const count = hashTable.get(word);
        hashTable.set(word, count + 1);
      } else {
        // Otherwise, add the word to the hash table with a count of 1
        hashTable.set(word, 1);
      }
    }
  }

  const wordCounts = [];
  hashTable.keys().forEach((word) => {
    wordCounts.push({ word, count: hashTable.get(word) });
  });

  // Sort wordCounts by count in descending order
  // wordCounts.sort((a, b) => b.count - a.count);

  // Get the top N most frequent words
  const mostFrequentWords = wordCounts.sort((a, b) => b.count - a.count).slice(0, topN);

  return {
    wordCounts,
    mostFrequentWords,
  };
}

module.exports = {
  repeatedWord,
  wordCountAndMostFrequentWords,
};
