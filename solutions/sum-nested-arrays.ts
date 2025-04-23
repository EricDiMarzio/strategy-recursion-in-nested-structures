/**
 * Create a function that takes in a nested array of integers and uses rcursion to return the sum of all elements.
 * sumNestedArrays([1, [2, 3, [4]]]); → 10
 */

// The type NestedArray is an array made up of either numbers or elements that are nested arrays themselves.
type NestedArray = (number | NestedArray)[];

// SOLUTION
// Since we are iterating over the array and returning a single value based on each element, this is an excellent use case for the reduce method. Taking advantage of the reduce method's special parameters - accumulator and current - we check if the current element is an array. If it is NOT then we add the current value to the accumulator. If it IS an array, we recursively call sumeNestedArray on the element before adding it to our accumulator.

// Reduce is a very powerful array method. If the syntax of this solution is unfamiliar, take this time to visit the documentation.

const sumNestedArrays = (array: NestedArray): number => {
  return array.reduce<number>(
    (acc, curr) =>
      Array.isArray(curr) ? (acc += sumNestedArrays(curr)) : (acc += curr),
    0
  );
};

const array = [1, 2, 3, 4, 5];

console.log(array.reduce((acc, curr) =>  acc + curr));
console.log(sumNestedArrays([1, [2, 3, [4]]])); // -> 10

// Time Complexity: O(n) where n is the number of total elements in the nested array.
// Space Complexity: O(n + d) where n is the total number of nested elements and d is the maximum depth of the recursive stack required to store and return the final array. However, since d cannot exceed n, this complexity simplifies to O(n).

export { sumNestedArrays };
