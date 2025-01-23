// Create a function that takes in a nested array of numbers and returns a flattened array.
// Avoid using the built in method Array.prototype.flat() for the purposes of this exercise.

/* SOLUTION
 * First, we declare a variable called 'results'. This will be used throughout our recursive logic, but ultimately returns a flattened array of numbers.
 * Next, we iterate over our 'array' with a for...of loop. I prefer this over a traditional for-loop because we get to reference the element directly.
 * For each element, we'll first use a ternary operator to check if the element is an array by using the Array.isArray() method.
 * If the element is NOT an array, we'll push the element to our 'results' array.
 * But if the element IS an array, we'll use the spread operator to push the returned value of flattenDeep(el) (which will be a flattened array). Here is where the recursion comes in.
 * Due to the nature of JavaScript's call stack, we're utilizing Depth First Search recursion to dig into the deepest level of nesting before we begin returning flattened arrays. Once our recursive function calls resolve, we return a completely flattened array at the initial function call.
 */

type NestedArray = (number | NestedArray)[];

const flattenDeep = (array: NestedArray): number[] => {
  const results: number[] = [];
  for (let el of array) {
    Array.isArray(el) ? results.push(...flattenDeep(el)) : results.push(el);
  }
  return results;
};

// console.log(flattenDeep([1, [2, [3, [4, [5, 6, 7, [8, [9]]]]]]])); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flattenDeep([1, [2, 3, [4]]])); // -> [1, 2, 3, 4]

// Time Complexity: O(n) where n is the total number of elements in the array - including nested elements.
// Space Complexity: O(n + d) where n is the total number of nested elements and d is the maximum depth of the recursive stack required to store and return the final array. However, since d cannot exceed n, this complexity simplifies to O(n).

export { flattenDeep };
