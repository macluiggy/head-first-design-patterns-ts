import BookComponent from "./BookComponent";

export default class Book extends BookComponent {
  private books: BookComponent[] = [];
  private title: string;

  constructor(title: string) {
    super();
    this.title = title;
  }

  add(bookComponent: BookComponent): void {
    this.books.push(bookComponent);
  }

  remove(bookComponent: BookComponent): void {
    const index = this.books.indexOf(bookComponent);
    if (index > -1) {
      this.books.splice(index, 1);
    }
  }

  getChild(i: number): BookComponent {
    return this.books[i];
  }

  getTitle(): string {
    return this.title;
  }

  print(
    tab = ``
  ): void {
    let recursiveTab = `${tab}\t`;
    console.log(`${recursiveTab}${this.getTitle()}`);
    console.log(`${recursiveTab}---------------------`);
    for (let book of this.books) {
      book.print(recursiveTab);
    }
  }

  createIterator(): Iterator<BookComponent> {
    return this.books[Symbol.iterator]();
  }
}