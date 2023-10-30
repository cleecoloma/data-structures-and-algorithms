'use strict';
const HashTable = require("../hash-table.js");

describe("Hash Table class", () => {
  test("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    const myHashTable = new HashTable(100);
    myHashTable.set("name", "John");
    expect(myHashTable.get("name")).toBe("John");
  });

  test("Retrieving based on a key returns the value stored", () => {
    const myHashTable = new HashTable(100);
    myHashTable.set("age", 30);
    expect(myHashTable.get("age")).toBe(30);
  });

  test("Successfully returns null for a key that does not exist in the hashtable", () => {
    const myHashTable = new HashTable(100);
    expect(myHashTable.get("nonexistent")).toBe(null);
  });

  test("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    const myHashTable = new HashTable(100);
    myHashTable.set("name", "John");
    myHashTable.set("age", 30);
    myHashTable.set("city", "New York");
    expect(myHashTable.keys()).toEqual(["name", "age", "city"]);
  });

  test("Successfully handle a collision within the hashtable", () => {
    const myHashTable = new HashTable(100);
    myHashTable.set("a", "value1");
    myHashTable.set("b", "value2");
    expect(myHashTable.get("a")).toBe("value1");
    expect(myHashTable.get("b")).toBe("value2");
  });

  test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const myHashTable = new HashTable(100);
    myHashTable.set("a", "value1");
    myHashTable.set("b", "value2");
    expect(myHashTable.get("a")).toBe("value1");
    expect(myHashTable.get("b")).toBe("value2");
  });

  test("Successfully hash a key to an in-range value", () => {
    const myHashTable = new HashTable(100);
    const hash = myHashTable.hash("exampleKey");
    expect(hash).toBeGreaterThanOrEqual(0);
    expect(hash).toBeLessThan(100);
  });
});
