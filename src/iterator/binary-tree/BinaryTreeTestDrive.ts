import BinaryTree from "./BinaryTree";

export default class BinaryTreeTest {
  public static main(): void {
    const binaryTree = new BinaryTree<number>();
    binaryTree.add(1);
    binaryTree.add(2);
    binaryTree.getRoot();
    const iterator = binaryTree.createIterator();
    // console.log(iterator);
    
   
    while (iterator.hasNext()) {
      // iterator.next();
      console.log(iterator.next());
    }
  }
}

BinaryTreeTest.main();
