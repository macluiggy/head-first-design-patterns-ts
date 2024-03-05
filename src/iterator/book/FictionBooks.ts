import Book from "./Book";
import BookItem from "./BookItem";

export default class FictionBook implements Book {
  private books: BookItem[] = [];

  addBook(book: BookItem): void {
    this.books.push(book);
  }

  createIterator(): Iterator<BookItem> {
    return this.books.values();
  }
}