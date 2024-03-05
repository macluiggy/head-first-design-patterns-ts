import Book from "./Book";
import BookItem from "./BookItem";

export default class Borrower {
  private name: string;
  private books: Book[] = [];

  constructor(books: Book[]) {
    this.books = books;
  }

  printBooks(): void {
    for (let book of this.books) {
      let iterator = book.createIterator();
      this.printBookItems(iterator);
    }
  }

  printBookItems(iterator: Iterator<BookItem>): void {
    let result = iterator.next();
    while (!result.done) {
      const bookItem: BookItem = result.value;
      console.log(`${bookItem.getTitle()}, ${bookItem.getDescription()}`);
      result = iterator.next();
    }
  }
}
