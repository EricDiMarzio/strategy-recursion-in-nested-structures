// Create a function that takes in a nested array of numbers and returns a flattened array.
// Avoid using the built in method Array.prototype.flat() for the purposes of this exercise.

type NestedArray = (number | NestedArray)[];

const flattenDeep = (array: NestedArray): number[] => {
  return [];
};

export { flattenDeep };
