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

const linkedListLength = (node: Node | null): number => {
  // return statement given to satisfy type checking. You can change/delete.
  return -1;
};

export { linkedListLength };
