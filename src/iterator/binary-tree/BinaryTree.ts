import BinaryTreeIterator from "./BinaryTreeIterator";
import Iterator from "./Iterator";
import TreeNode from "./TreeNode";

export default class BinaryTree<T> {
  private root: TreeNode<T> | null = null;

  constructor() {
    this.root = null;
  }

  public getRoot(): TreeNode<T> | null {
    return this.root;
  }

  public createIterator(): Iterator<T> {
    return new BinaryTreeIterator(this.root);
  }
}
