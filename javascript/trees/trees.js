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
        traverse(current.right);
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

  findMax() {
    if (!this.root) {
      return null;
    }

    let maxValue = this.root.value;

    const traverse = (current) => {
      if (current.value > maxValue) {
        maxValue = current.value;
      }

      if (current.left) {
        traverse(current.left);
      }

      if (current.right) {
        traverse(current.right);
      }
    };

    traverse(this.root);

    return maxValue;
  }
}


class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left. newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  contains(value) {
    return this.search(this.root, value);
  }

  search(node, value) {
    if (!node) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this.search(node.left, value);
    }

    return this.search(node.right, value);
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
}
