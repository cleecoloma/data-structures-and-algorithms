"use strict";

const Stack = require("../stack-and-queue/stack.js");

function validateBrackets(str) {
  const stack = new Stack();
  const bracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (bracketsMap[char]) {
      stack.push(char);
    } else if (Object.values(bracketsMap).includes(char)) {
      const topOfStack = stack.pop();

      if (bracketsMap[topOfStack] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

module.exports = validateBrackets;
