const tree_intersection= require("../tree-intersection.js");
const { Node } = require("../../trees/trees.js")

// Helper function to create a binary tree from an array of values
function createBinaryTree(values) {
  if (!values.length) return null;
  const root = new Node(values.shift());
  const queue = [root];
  while (values.length) {
    const node = queue.shift();
    const leftValue = values.shift();
    if (leftValue !== null) {
      node.left = new Node(leftValue);
      queue.push(node.left);
    }
    const rightValue = values.shift();
    if (rightValue !== null) {
      node.right = new Node(rightValue);
      queue.push(node.right);
    }
  }
  return root;
}

describe("tree_intersection", () => {
  it("should return common values for two identical trees", () => {
    const tree1 = createBinaryTree([1, 2, 3, 4, 5]);
    const tree2 = createBinaryTree([1, 2, 3, 4, 5]);
    const commonValues = tree_intersection(tree1, tree2);
    expect([...commonValues]).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an empty set for two trees with no common values", () => {
    const tree1 = createBinaryTree([1, 2, 3]);
    const tree2 = createBinaryTree([4, 5, 6]);
    const commonValues = tree_intersection(tree1, tree2);
    expect([...commonValues]).toEqual([]);
  });

  it("should return common values for two different trees", () => {
    const tree1 = createBinaryTree([1, 2, 3, 4, 5]);
    const tree2 = createBinaryTree([3, 4, 5, 6, 7]);
    const commonValues = tree_intersection(tree1, tree2);
    expect([...commonValues]).toEqual([3, 4, 5]);
  });
});
