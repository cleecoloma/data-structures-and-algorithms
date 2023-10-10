'use strict';

function breadthFirst(tree) {
  if (!tree) {
    return [];
  }

  const result = [];
  const queue = [tree];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return result;
}

module.exports = breadthFirst;
