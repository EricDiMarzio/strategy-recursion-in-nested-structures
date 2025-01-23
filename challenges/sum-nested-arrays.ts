/**
 * Create a function that takes in a nested array of integers and uses rcursion to return the sum of all elements.
 * sumNestedArrays([1, [2, 3, [4]]]); → 10
 */

// The type NestedArray is an array made up of either numbers or elements that are nested arrays themselves.
type NestedArray = (number | NestedArray)[];

const sumNestedArrays = (array: NestedArray): number => {
  // return statement given to satisfy type checking. You can change/delete.
  return -1;
};

export { sumNestedArrays };
