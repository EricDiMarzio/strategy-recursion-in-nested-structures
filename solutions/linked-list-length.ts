//Create a function that returns the number of nodes in a linked list.

// Just as we did with BSTs, we utilize ES6 class syntax to create our class and assign typing. This is in place of declaring a 'type' or 'interface'.

class Node {
  value: string;
  next: Node | null;

  constructor(val: string) {
    this.value = val;
    this.next = null;
  }
}
// Instead of creating and using an add method, we manually assign the position of each node in our test case.
const train = new Node('A');
train.next = new Node('B');
train.next.next = new Node('C');
train.next.next.next = new Node('D');
train.next.next.next.next = new Node('E');
train.next.next.next.next.next = new Node('F');
// console.log(train);

// Here are two equally viably solutions. The first determines the length of the linked list by incrementing a count from every return statement. The second includes the count as a parameter of the function with a default value of zero and prefix increments it with each recursive function call. The ultimate incremented value then bubbles up to our initiial function call.

const linkedListLength = (node: Node | null): number => {
  if (!node) return 0;
  return 1 + linkedListLength(node.next);
};
// console.log(linkedListLength(train)); // -> 6

const linkedListLength2 = (node: Node | null, count = 0) => {
  if (!node) return count;
  return linkedListLength2(node.next, ++count);
};
// console.log(linkedListLength2(train)); // -> 6

// Time Complexity O(n) where n is the number of nodes in the linked list.
// Space Complexity O(n) where n is the number of nodes in the linked list.

export { linkedListLength };
