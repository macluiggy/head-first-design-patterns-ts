import BookComponent from "./BookComponent";

export default class Borrower {
  private books: BookComponent[];

  constructor(books: BookComponent[]) {
    this.books = books;
  }

  // here is where the iterator pattern is used if the books were of different types of collections
  // we should implement a method to get or transform the books into an iterator and then use the same method to iterate over the books

  printBooks(): void {
    for (let book of this.books) {
      let iterator = book.createIterator();
      this.printBookItems(iterator);
    }
  }
  
  printBookItems(iterator: Iterator<BookComponent>): void {
    let result = iterator.next();
    while (!result.done) {
      const book: BookComponent = result.value;
      book.print();
      result = iterator.next();
    }
  }

  // printBooks(): void {
  //   this.books.forEach((book) => book.print());
  // }
}