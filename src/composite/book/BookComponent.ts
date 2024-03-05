export default abstract class BookComponent {
  add(bookComponent: BookComponent): void {
    throw new Error("Unsupported Operation");
  }

  remove(bookComponent: BookComponent): void {
    throw new Error("Unsupported Operation");
  }

  getChild(i: number): BookComponent {
    throw new Error("Unsupported Operation");
  }

  getTitle(): string {
    throw new Error("Unsupported Operation");
  }

  getDescription(): string {
    throw new Error("Unsupported Operation");
  }

  getPrice(): number {
    throw new Error("Unsupported Operation");
  }

  print(tab = `\t`): void {
    throw new Error("Unsupported Operation");
  }

  createIterator(): Iterator<BookComponent> {
    throw new Error("Unsupported Operation");
  }
}
