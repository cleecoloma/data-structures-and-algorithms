"use strict";

const { HashTable } = require("../hash-table/hash-table.js");

// Function to find tree intersection
function tree_intersection(tree1, tree2) {
  const hashTable = new HashTable();

  // Helper function to traverse a binary tree and add its values to the hash table
  function addToHashTable(node) {
    if (node) {
      hashTable.set(node.value, true);
      addToHashTable(node.left);
      addToHashTable(node.right);
    }
  }

  // Add values from the first tree to the hash table
  addToHashTable(tree1);

  const commonValues = new Set();

  // Helper function to traverse the second tree and check for common values
  function findCommonValues(node) {
    if (node) {
      if (hashTable.has(node.value)) {
        commonValues.add(node.value);
      }
      findCommonValues(node.left);
      findCommonValues(node.right);
    }
  }

  // Find common values in the second tree
  findCommonValues(tree2);

  return commonValues;
}

module.exports = tree_intersection;
