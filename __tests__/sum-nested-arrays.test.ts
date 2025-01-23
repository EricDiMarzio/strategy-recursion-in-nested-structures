import { sumNestedArrays } from "../solutions/sum-nested-arrays";

describe("sumNestedArrays", () => {
  it("should return the sum of all elements in a flat array", () => {
    expect(sumNestedArrays([1, 2, 3, 4, 5])).toBe(15);
  });

  it("should return the sum of all elements in a nested array", () => {
    expect(sumNestedArrays([1, [2, 3, [4]]])).toBe(10);
  });

  it("should handle deeply nested arrays", () => {
    expect(sumNestedArrays([1, [2, [3, [4, [5, 6, 7, [8, [9]]]]]]])).toBe(45);
  });

  it("should return 0 for an empty array", () => {
    expect(sumNestedArrays([])).toBe(0);
  });

  it("should return the sum of all elements in an array with negative numbers", () => {
    expect(sumNestedArrays([1, [-2, 3, [-4]]])).toBe(-2);
  });

  it("should handle arrays with a single element", () => {
    expect(sumNestedArrays([5])).toBe(5);
    expect(sumNestedArrays([[5]])).toBe(5);
  });
});