import { flattenDeep } from '../solutions/flatten-deep';

describe('sumNestedArrays', () => {
  it('should accept an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });
  it('should accept an array with one element', () => {
    expect(flattenDeep([1])).toEqual([1]);
  });
  it('should accept an array with no nesting', () => {
    expect(flattenDeep([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('should accept an array with one level of nesting', () => {
    expect(flattenDeep([1, 2, [3, 4, 5]])).toEqual([1, 2, 3, 4, 5]);
  });
  it('should accept an array with multiple levels of nesting', () => {
    expect(flattenDeep([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });
  it('should accept negative numbers', () => {
    expect(flattenDeep([[-1, -2], -3, -4, -5])).toEqual([-1, -2, -3, -4, -5]);
  });
});
