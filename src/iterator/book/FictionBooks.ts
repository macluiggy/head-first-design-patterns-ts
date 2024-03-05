import Book from "./Book";

export default class FictionBook implements Book {
  private books: string[] = [];

  addBook(book: string): void {
    this.books.push(book);
  }

  createIterator(): Iterator<string> {
    return this.books.values();
  }
}