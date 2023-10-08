"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let order = [];

    const traverse = (current) => {
      order.push(current.value);

      if (current.left) {
        traverse(current.left);
      }

      if (current.right) {
        traverse(current.right);
      }
    };

    traverse(this.root);

    return order;
  }

  inOrder() {
    let order = [];

    const traverse = (current) => {
      if (current.left) {
        traverse(current.left);
      }

      order.push(current.value);

      if (current.right) {
        traverse(this.right);
      }
    };

    traverse(this.root);

    return order;
  }

  postOrder() {
    let order = [];

    const traverse = (current) => {
      if (current.left) {
        traverse(current.left);
      }

      if (current.right) {
        traverse(current.right);
      }

      order.push(current.value);
    };

    traverse(this.root);

    return order;
  }
}
