import { bstHeight } from '../solutions/bst-height';

class BinarySearchTree {
  value: number;
  left: BinarySearchTree | null;
  right: BinarySearchTree | null;

  constructor(value: number) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  add(value: number): void {
    if (value > this.value) {
      this.right
        ? this.right.add(value)
        : (this.right = new BinarySearchTree(value));
    } else if (value < this.value) {
      this.left
        ? this.left.add(value)
        : (this.left = new BinarySearchTree(value));
    }
  }
}

describe('bstHeight', () => {
  it('should return -1 for an empty tree', () => {
    expect(bstHeight(null)).toBe(-1);
  });

  it('should return 0 for a tree with only one node', () => {
    const tree = new BinarySearchTree(10);
    expect(bstHeight(tree)).toBe(0);
  });

  it('should return the correct height for a balanced tree', () => {
    const tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);
    expect(bstHeight(tree)).toBe(2);
  });

  it('should return the correct height for an unbalanced tree', () => {
    const tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(3);
    tree.add(2);
    tree.add(1);
    expect(bstHeight(tree)).toBe(4);
  });

  it('should return the correct height for a tree with multiple levels', () => {
    const tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(18);
    tree.add(1);
    tree.add(4);
    tree.add(6);
    tree.add(8);
    expect(bstHeight(tree)).toBe(3);
  });
});