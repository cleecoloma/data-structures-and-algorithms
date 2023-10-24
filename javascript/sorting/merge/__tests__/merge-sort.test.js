'use strict';

const mergeSort = require('../merge-sort.js');

test('Merge Sort should sort an array in ascending order', () => {
  const unsortedArray = [12, 11, 13, 5, 6, 7];
  const sortedArray = mergeSort(unsortedArray);
  const expectedArray = [5, 6, 7, 11, 12, 13];

  expect(sortedArray).toEqual(expectedArray);
});

test('Merge Sort should handle an empty array', () => {
  const unsortedArray = [];
  const sortedArray = mergeSort(unsortedArray);
  const expectedArray = [];

  expect(sortedArray).toEqual(expectedArray);
});

test('Merge Sort should handle an array with a single element', () => {
  const unsortedArray = [42];
  const sortedArray = mergeSort(unsortedArray);
  const expectedArray = [42];

  expect(sortedArray).toEqual(expectedArray);
});
