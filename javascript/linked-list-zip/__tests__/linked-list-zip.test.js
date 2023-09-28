"use strict";

const { LinkedList } = require("../index.js");

describe("Testing the zipLists function", () => {
  test("Zip two empty lists", () => {
     let linkedList = new LinkedList();
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const zippedList = linkedList.zipLists(list1, list2);

    expect(zippedList.head).toBeNull();
  });

  test("Zip one empty list with a non-empty list", () => {
    let linkedList = new LinkedList();
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list2.append("node1");
    list2.append("node2");
    const zippedList = linkedList.zipLists(list1, list2);

    expect(zippedList.head.value).toEqual("node1");
    expect(zippedList.head.next.value).toEqual("node2");
  });

  test("Zip two lists of equal length", () => {
    let linkedList = new LinkedList();
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append("a");
    list1.append("b");
    list1.append("c");
    list2.append(1);
    list2.append(2);
    list2.append(3);

    const zippedList = linkedList.zipLists(list1, list2);

    // The zipped list should be: "a" -> 1 -> "b" -> 2 -> "c" -> 3
    expect(zippedList.head.value).toEqual("a");
    expect(zippedList.head.next.value).toEqual(1);
    expect(zippedList.head.next.next.value).toEqual("b");
    expect(zippedList.head.next.next.next.value).toEqual(2);
    expect(zippedList.head.next.next.next.next.value).toEqual("c");
    expect(zippedList.head.next.next.next.next.next.value).toEqual(3);
  });

  test("Zip two lists with different lengths", () => {
    let linkedList = new LinkedList();
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append("x");
    list1.append("y");
    list2.append("1");
    list2.append("2");
    list2.append("3");
    list2.append("4");

    const zippedList = linkedList.zipLists(list1, list2);

    // The zipped list should be: "x" -> "1" -> "y" -> "2" -> "3" -> "4"
    expect(zippedList.head.value).toEqual("x");
    expect(zippedList.head.next.value).toEqual("1");
    expect(zippedList.head.next.next.value).toEqual("y");
    expect(zippedList.head.next.next.next.value).toEqual("2");
    expect(zippedList.head.next.next.next.next.value).toEqual("3");
    expect(zippedList.head.next.next.next.next.next.value).toEqual("4");
  });
});
