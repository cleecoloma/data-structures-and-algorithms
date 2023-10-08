const { BinaryTree, BinarySearchTree } = require("./your-binary-tree-file"); // Import your BinaryTree and BinarySearchTree classes here

describe("BinaryTree and BinarySearchTree Tests", () => {
  let binaryTree;
  let binarySearchTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
    binarySearchTree = new BinarySearchTree();
  });

  // Test 1: Can successfully instantiate an empty tree
  test("Can successfully instantiate an empty tree", () => {
    expect(binaryTree.root).toBeNull();
    expect(binarySearchTree.root).toBeNull();
  });

  // Test 2: Can successfully instantiate a tree with a single root node
  test("Can successfully instantiate a tree with a single root node", () => {
    binaryTree.root = { value: 10, left: null, right: null };
    binarySearchTree.root = { value: 20, left: null, right: null };

    expect(binaryTree.root.value).toBe(10);
    expect(binarySearchTree.root.value).toBe(20);
  });

  // Test 3: For a Binary Search Tree, can successfully add a left child and right child properly to a node
  test("For a Binary Search Tree, can successfully add left and right children", () => {
    binarySearchTree.add(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);

    expect(binarySearchTree.root.value).toBe(10);
    expect(binarySearchTree.root.left.value).toBe(5);
    expect(binarySearchTree.root.right.value).toBe(15);
  });

  // Test 4: Can successfully return a collection from a pre-order traversal
  test("Can successfully return a collection from a pre-order traversal", () => {
    binaryTree.root = {
      value: 10,
      left: { value: 5, left: null, right: null },
      right: { value: 15, left: null, right: null },
    };

    expect(binaryTree.preOrder()).toEqual([10, 5, 15]);
  });

  // Test 5: Can successfully return a collection from an in-order traversal
  test("Can successfully return a collection from an in-order traversal", () => {
    binaryTree.root = {
      value: 10,
      left: { value: 5, left: null, right: null },
      right: { value: 15, left: null, right: null },
    };

    expect(binaryTree.inOrder()).toEqual([5, 10, 15]);
  });

  // Test 6: Can successfully return a collection from a post-order traversal
  test("Can successfully return a collection from a post-order traversal", () => {
    binaryTree.root = {
      value: 10,
      left: { value: 5, left: null, right: null },
      right: { value: 15, left: null, right: null },
    };

    expect(binaryTree.postOrder()).toEqual([5, 15, 10]);
  });

  // Test 7: Can successfully return true or false for contains method
  test("Can successfully return true or false for contains method", () => {
    binarySearchTree.add(10);
    binarySearchTree.add(5);
    binarySearchTree.add(15);

    expect(binarySearchTree.contains(10)).toBe(true);
    expect(binarySearchTree.contains(5)).toBe(true);
    expect(binarySearchTree.contains(15)).toBe(true);
    expect(binarySearchTree.contains(20)).toBe(false);
  });
});
