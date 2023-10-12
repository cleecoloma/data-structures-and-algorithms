"use strict";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(root) {
  if (!root) {
    return null;
  }

  const fizzBuzzValue = (value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      return "FizzBuzz";
    } else if (value % 3 === 0) {
      return "Fizz";
    } else if (value % 5 === 0) {
      return "Buzz";
    } else {
      return value.toString();
    }
  };

  const traverse = (node) => {
    const newNode = new TreeNode(fizzBuzzValue(node.value));
    for (const child of node.children) {
      newNode.children.push(traverse(child));
    }
    return newNode;
  };

  return traverse(root);
}

module.exports = { fizzBuzzTree, TreeNode };
