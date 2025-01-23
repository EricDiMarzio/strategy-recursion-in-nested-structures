import { linkedListLength } from '../solutions/linked-list-length';

class Node {
  value: string;
  next: Node | null;

  constructor(val: string) {
    this.value = val;
    this.next = null;
  }
}

describe('linkedListLength', () => {
  it('should return 0 for an empty list', () => {
    expect(linkedListLength(null)).toBe(0);
  });

  it('should return the correct length for a list with one node', () => {
    const node = new Node('A');
    expect(linkedListLength(node)).toBe(1);
  });

  it('should return the correct length for a list with multiple nodes', () => {
    const node = new Node('A');
    node.next = new Node('B');
    node.next.next = new Node('C');
    expect(linkedListLength(node)).toBe(3);
  });

  it('should return the correct length for a longer list', () => {
    const node = new Node('A');
    node.next = new Node('B');
    node.next.next = new Node('C');
    node.next.next.next = new Node('D');
    node.next.next.next.next = new Node('E');
    node.next.next.next.next.next = new Node('F');
    expect(linkedListLength(node)).toBe(6);
  });
});
