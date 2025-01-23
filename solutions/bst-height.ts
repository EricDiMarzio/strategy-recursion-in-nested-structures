/*
 * Create a function that returns the height of a Binary Search Tree. A tree's height refers to the length of the longest path from the root node to any given leaf node. Height is counted from 0, meaning a tree with only one node - a root - will has a height of 0.
 * Knowing the height of a tree is useful for analyzing the performance of operations like search or insertion whose time complexity is dependent on the height of the tree.
 *
 */

// First, we utilize ES6 class syntax to create our class and assign typing. This is in place of declaring a 'type' or 'interface'. Notice that our class also has a method called 'add' which allows us to add nodes to a BST.

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

const tree = new BinarySearchTree(10);
tree.add(5);
tree.add(12);
tree.add(2);
tree.add(7);
tree.add(3);
tree.add(11);
tree.add(1);
tree.add(15);
// console.log(tree);

// SOLUTION
// // Here the height is calculated by the number of return statements. Remember that a BST with only one node will return a height of 0. Using that logic, we recursively call bstHeight in a depth-first manner, comparing the depth of each path and continuing with the greater depth until we return out of the original function call.

const bstHeight = (node: BinarySearchTree | null): number => {
  if (!node) return -1;
  return 1 + Math.max(bstHeight(node.left), bstHeight(node.right));
};
// console.log(bstHeight(tree)); // -> 3

//Time Complexity: O(n) where n is the number of nodes in the binary search tree.
// Space Complexity: O(h) where h is the height of the tree - at maximum, O(n).

export { bstHeight };
