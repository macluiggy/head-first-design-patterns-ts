import BinaryTree from "./BinaryTree";

export default class BinaryTreeTest {
  public static main(): void {
    const binaryTree = new BinaryTree<number>();
    binaryTree.getRoot();
    const iterator = binaryTree.createIterator();
    console.log(iterator);
    
    iterator.hasNext();
    iterator.next();
  }
}

BinaryTreeTest.main();
