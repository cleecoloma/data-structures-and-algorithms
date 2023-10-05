"use strict";

const validateBrackets = require("../stack-queue-brakets.js"); // Update the path to match your file structure

describe("validateBrackets", () => {
  it("should return true for valid brackets: ()", () => {
    expect(validateBrackets("()")).toBe(true);
  });

  it("should return true for valid brackets: ()[]{}", () => {
    expect(validateBrackets("()[]{}")).toBe(true);
  });

  it("should return false for invalid brackets: (]", () => {
    expect(validateBrackets("(]")).toBe(false);
  });

  it("should return false for invalid brackets: ([)]", () => {
    expect(validateBrackets("([)]")).toBe(false);
  });

  it("should return true for valid brackets: {[]}", () => {
    expect(validateBrackets("{[]}")).toBe(true);
  });
});
