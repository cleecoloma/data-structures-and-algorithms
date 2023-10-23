'use strict';

const { InsertionSort } = require('../insertion-sort.js');

test('Insertion Sort should sort an array in ascending order', () => {
  const unsortedArray = [5, 12, 7, 5, 5, 7];
  const sortedArray = InsertionSort(unsortedArray);
  const expectedArray = [5, 5, 5, 7, 7, 12];

  expect(sortedArray).toEqual(expectedArray);
});

test('Insertion Sort should handle an empty array', () => {
  const unsortedArray = [];
  const sortedArray = InsertionSort(unsortedArray);
  const expectedArray = [];

  expect(sortedArray).toEqual(expectedArray);
});

test('Insertion Sort should handle an array with a single element', () => {
  const unsortedArray = [42];
  const sortedArray = InsertionSort(unsortedArray);
  const expectedArray = [42];

  expect(sortedArray).toEqual(expectedArray);
});
