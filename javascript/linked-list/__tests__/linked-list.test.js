"use strict";

const { LinkedList, Node } = require("../index.js");

describe("Testing the Linked List class", () => {
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

  test("The head property will properly point to the first node in the linked list", () => {
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
    expect(linkedList.toString()).toBe("{ node4 } -> { node3 } -> { node2 } -> { node1 } -> NULL");
  });
});
