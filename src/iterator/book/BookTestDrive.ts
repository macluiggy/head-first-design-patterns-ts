import Book from "./Book";
import BookItem from "./BookItem";
import Borrower from "./Borrower";
import FictionBook from "./FictionBooks";
import NonFictionBooks from "./NonFictionBooks";

export default class BookTestDrive {
  static main(): void {
    const fictionBooks = new FictionBook();
    const fictionBook1 = new BookItem("Fiction Book 1", 'description 1');
    const fictionBook2 = new BookItem("Fiction Book 2", 'description 2');
    fictionBooks.addBook(fictionBook1);
    fictionBooks.addBook(fictionBook2);
    const nonFictionBooks = new NonFictionBooks();
    const nonFictionBook1 = new BookItem("Non Fiction Book 1", 'description 1');
    const nonFictionBook2 = new BookItem("Non Fiction Book 2", 'description 2');
    nonFictionBooks.addBook(nonFictionBook1);
    nonFictionBooks.addBook(nonFictionBook2);
    const borrower = new Borrower([fictionBooks, nonFictionBooks]);

    borrower.printBooks();
  }
}

BookTestDrive.main();