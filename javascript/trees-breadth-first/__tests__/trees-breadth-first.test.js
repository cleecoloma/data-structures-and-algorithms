'use strict';

const { BinaryTree } = require("../../trees/trees.js");
const breadthFirst = require('../trees-breadth-first.js');

describe("Test Trees Breadth First Method", () => {
  let binaryTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  // Test 1: Can successfully instantiate an empty tree
  test("Can successfully read Null when tree is empty", () => {
    expect(breadthFirst(binaryTree)).toBeNull();
  });

  // Test 2: Can successfully return max value for findMax method
  test("Can successfully return max value for findMax method", () => {
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

    expect(binaryTree.findMax()).toEqual(20);
  });
});
