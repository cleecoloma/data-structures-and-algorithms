"use strict";

const { fizzBuzzTree, TreeNode } = require("../tree-fizz-buzz.js");

describe("FizzBuzz Tree", () => {
  test("should return null for null root", () => {
    const root = null;
    const fizzBuzzRoot = fizzBuzzTree(root);
    expect(fizzBuzzRoot).toBeNull();
  });

  test("should correctly transform the tree in the happy path", () => {
    // Create a sample k-ary tree
    const root = new TreeNode(1);
    const node2 = new TreeNode(3);
    const node3 = new TreeNode(5);
    const node4 = new TreeNode(15);
    const node5 = new TreeNode(7);

    root.children.push(node2);
    root.children.push(node3);
    root.children.push(node4);
    node3.children.push(node5);

    const fizzBuzzRoot = fizzBuzzTree(root);

    // Define a helper function to traverse the tree and collect values
    const collectTreeValues = (node) => {
      if (!node) return [];
      const values = [node.value];
      for (const child of node.children) {
        values.push(...collectTreeValues(child));
      }
      return values;
    };

    // Verify the transformed values in the FizzBuzz tree
    const expectedValues = ["1", "Fizz", "Buzz", "7", "FizzBuzz"];
    const actualValues = collectTreeValues(fizzBuzzRoot);
    expect(actualValues).toEqual(expectedValues);
  });
});
