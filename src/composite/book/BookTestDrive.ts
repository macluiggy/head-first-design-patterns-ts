import Book from "./Book";
import BookComponent from "./BookComponent";
import BookItem from "./BookItem";
import Borrower from "./Borrower";

export default class BookTestDrive {
  static main(): void {
    const fictionBooks = new Book("Fiction");
    const fictionBook1 = new BookItem("Fiction Book 1", "description 1", 10);
    const fictionBook2 = new BookItem("Fiction Book 2", "description 2", 20);
    const subFictionBooks = new Book("Sub Fiction");
    const subFictionBook1 = new BookItem(
      "Sub Fiction Book 1",
      "description 1",
      10
    );
    const subFictionBook2 = new BookItem(
      "Sub Fiction Book 2",
      "description 2",
      20
    );
    subFictionBooks.add(subFictionBook1);
    subFictionBooks.add(subFictionBook2);
    fictionBooks.add(fictionBook1);
    fictionBooks.add(fictionBook2);
    fictionBooks.add(subFictionBooks);

    const subSubFictionBooks = new Book("Sub Sub Fiction");
    const subSubFictionBook1 = new BookItem(
      "Sub Sub Fiction Book 1",
      "description 1",
      10
    );
    const subSubFictionBook2 = new BookItem(
      "Sub Sub Fiction Book 2",
      "description 2",
      20
    );
    subSubFictionBooks.add(subSubFictionBook1);
    subSubFictionBooks.add(subSubFictionBook2);
    subFictionBooks.add(subSubFictionBooks);
    
    const nonFictionBooks = new Book("Non Fiction");
    const nonFictionBook1 = new BookItem(
      "Non Fiction Book 1",
      "description 1",
      10
    );
    const nonFictionBook2 = new BookItem(
      "Non Fiction Book 2",
      "description 2",
      20
    );
    nonFictionBooks.add(nonFictionBook1);
    nonFictionBooks.add(nonFictionBook2);
    const borrower = new Borrower([fictionBooks, nonFictionBooks]);

    borrower.printBooks();
  }
}

BookTestDrive.main();
