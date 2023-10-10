'use strict';

const { BinaryTree } = require('../../trees/trees.js');
const breadthFirst = require('../trees-breadth-first.js');

describe('Test Trees Breadth First Method', () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  // Test 1: Can successfully return an empty array when tree is empty
  test('Can successfully return an empty array when tree is empty', () => {
    expect(breadthFirst(null)).toEqual([]);
  });

  // Test 2: Can successfully return list of all values in the tree
  test('Can successfully return list of all values in the tree', () => {
    binaryTree.root = {
      value: 10,
      left: {
        value: 5,
        left: { value: 3, left: null, right: null },
        right: { value: 7, left: null, right: null },
      },
      right: {
        value: 15,
        left: { value: 12, left: null, right: null },
        right: { value: 20, left: null, right: null },
      },
    };

    expect(breadthFirst(binaryTree.root)).toEqual([10, 5, 15, 3, 7, 12, 20]);
  });
});
