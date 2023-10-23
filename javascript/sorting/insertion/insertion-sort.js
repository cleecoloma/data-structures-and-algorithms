'use strict';

function Insert(sorted, value) {
  let i = 0;

  while (value > sorted[i]) {
    i++;
  }

  while (i < sorted.length) {
    const temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  sorted.push(value);
}

function InsertionSort(input) {
  const sorted = [input[0]];

  for (let i = 1; i < input.length; i++) {
    Insert(sorted, input[i]);
  }

  return sorted;
}

module.exports = {
  Insert,
  InsertionSort,
};
