import BookComponent from "./BookComponent";

export default class BookItem extends BookComponent {
  private title: string;
  private description: string;
  private price: number;

  constructor(
    title: string,
    description: string,
    price: number
  ) {
    super();
    this.title = title;
    this.description = description;
    this.price = price;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  print(
    tab: string = ``
  ): void {
    console.log(
      `${tab}${this.getTitle()}, ${this.getPrice()} -- ${this.getDescription()}`
    );
  }
  
  // createIterator(): Iterator<BookComponent> {
  //   return new NullIterator();
  // }
}