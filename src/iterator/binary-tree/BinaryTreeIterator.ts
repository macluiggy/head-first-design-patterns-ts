import Iterator from "./Iterator";
import TreeNode from "./TreeNode";

export default class BinaryTreeIterator<T> implements Iterator<T> {
  private index = 0;
  private nodes: TreeNode<T>[] = [];

  constructor(root: TreeNode<T> | null) {
    this.traverse(root);
  }

  private traverse(node: TreeNode<T> | null): void {
    if (!node) {
      return;
    }
    this.traverse(node.left);
    this.nodes.push(node);
    this.traverse(node.right);
  }

  public next(): IteratorResult<T> {
    if (this.hasNext()) {
      const value = this.nodes[this.index].value;
      this.index += 1;
      return { value, done: false };
    }
    return { value: null, done: true };
  }

  public hasNext(): boolean {
    return this.index < this.nodes.length;
  }
}