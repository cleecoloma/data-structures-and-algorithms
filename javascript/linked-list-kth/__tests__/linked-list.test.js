"use strict";

const { LinkedList, Node } = require("../index.js");

describe("Testing the Linked List class", () => {
  test("Where k is greater than the length of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");
    linkedList.append("node2");

    expect(linkedList.kthFromEnd(5)).toEqual(-1);
  });

  test("Where k and the length of the list are the same", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");
    linkedList.append("node2");
    expect(linkedList.kthFromEnd(2)).toEqual(-1);
  });

  test("Where k is not a positive integer", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");
    linkedList.append("node2");

    expect(linkedList.kthFromEnd(-9000)).toEqual(-1);
  });

  test("Where the linked list is of a size 1", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");

    expect(linkedList.kthFromEnd(1)).toEqual(-1);
  });

  test("Happy Path where k is not at the end, but somewhere in the middle of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.append("node1");
    linkedList.append("node2");
    linkedList.append("node3");
    linkedList.append("node4");

    expect(linkedList.kthFromEnd(2)).toEqual("node2");
  });
});
