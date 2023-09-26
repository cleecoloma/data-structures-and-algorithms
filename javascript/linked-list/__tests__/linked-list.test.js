"use strict";

const { LinkedList, Node } = require("../index.js");

xdescribe("Testing the Linked List class", () => {
  test("Can successfully instantiate an empty linked list", () => {
    let linkedList = new LinkedList();

    expect(linkedList.head).toEqual(null);
  });

  test("Can properly insert into the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");

    expect(linkedList.head.value).toEqual("node2");
  });

  test("The head property will properly poiint to the first node in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");

    expect(linkedList.head.value).toEqual("node1");
    expect(linkedList.head.next).toEqual(null);
  });

  test("Can properly insert multiple nodes into the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    expect(linkedList.head.value).toEqual("node4");
    expect(linkedList.head.next.value).toEqual("node3");
  });

  test("Will return true when finding a value within the linked list that exists", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    expect(linkedList.include("node2")).toBe(true);
  });

  test("Will return false when searching for a value in the linked list that does not exist", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    expect(linkedList.include("node5")).toBe(false);
  });

  test("Can properly return a collection of all the values that exist in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    console.log("Log: ", linkedList, linkedList.toString());
    expect(linkedList.toString()).toBe(
      "{ node4 } -> { node3 } -> { node2 } -> { node1 } -> NULL"
    );
  });
});

describe("Testing the Linked List insertion implementation", () => {
  test("Can successfully add a node to the end of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");

    expect(linkedList.toString()).toBe("{ node1 } -> NULL");
  });

  test("Can successfully add multiple nodes to the end of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");
    linkedList.append("node2");

    expect(linkedList.toString()).toBe("{ node1 } -> { node2 } -> NULL");
  });

  test("Can successfully insert a n0de before a node located in the middle of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");
    linkedList.append("node2");
    linkedList.insertBefore("node1", "node3");

    // expect(linkedList.head.value).toEqual("node3");
    expect(linkedList.toString()).toBe(
      "{ node3 } -> { node1 } -> { node2 } -> NULL"
    );
  });

  xtest("Can successfully insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    expect(linkedList.head.value).toEqual("node4");
    expect(linkedList.head.next.value).toEqual("node3");
  });

  xtest("Can successfully insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    expect(linkedList.include("node2")).toBe(true);
  });

  xtest("Can successfully insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    expect(linkedList.include("node5")).toBe(false);
  });

  xtest("Can properly return a c0llection of all the values that exist in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert("node1");
    linkedList.insert("node2");
    linkedList.insert("node3");
    linkedList.insert("node4");

    console.log("Log: ", linkedList, linkedList.toString());
    expect(linkedList.toString()).toBe(
      "{ node4 } -> { node3 } -> { node2 } -> { node1 } -> NULL"
    );
  });
});
