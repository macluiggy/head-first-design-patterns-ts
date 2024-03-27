import BinaryTreeIterator from "./BinaryTreeIterator";
import Iterator from "./Iterator";
import TreeNode from "./TreeNode";

export default class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  constructor() {
    this.root = null;
  }

  add(value: T): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  public getRoot(): TreeNode<T> | null {
    return this.root;
  }

  public createIterator(): Iterator<T> {
    return new BinaryTreeIterator(this.root);
  }
}
