const tree_intersection = require("../tree-intersection.js");
const { Node } = require("../../trees/trees.js");

describe("tree_intersection", () => {
  it("should return common values for two identical trees", () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);
    tree1.left.left = new Node(4);
    tree1.left.right = new Node(5);

    const tree2 = new Node(1);
    tree2.left = new Node(2);
    tree2.right = new Node(3);
    tree2.left.left = new Node(4);
    tree2.left.right = new Node(5);

    const commonValues = tree_intersection(tree1, tree2);
    expect(commonValues).toEqual([1, 2, 4, 5, 3]);
  });

  it("should return an empty array for two trees with no common values", () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);

    const tree2 = new Node(4);
    tree2.left = new Node(5);
    tree2.right = new Node(6);

    const commonValues = tree_intersection(tree1, tree2);
    console.log("HERE'S MY COMMON VALUES #2 ", commonValues);
    expect(commonValues).toEqual([]);
  });

  it("should return common values for two different trees", () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);
    tree1.left.left = new Node(4);
    tree1.left.right = new Node(5);

    const tree2 = new Node(3);
    tree2.left = new Node(4);
    tree2.right = new Node(5);
    tree2.left.left = new Node(6);
    tree2.left.right = new Node(7);

    const commonValues = tree_intersection(tree1, tree2);
    expect(commonValues).toEqual([3, 4, 5]);
  });
});