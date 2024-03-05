import Book from "./Book";
import BookItem from "./BookItem";

export default class NonFictionBooks implements Book {
  private books: Set<BookItem> = new Set();

  addBook(book: BookItem): void {
    this.books.add(book);
  }

  createIterator(): Iterator<BookItem> {
    return this.books.values();
  }
}