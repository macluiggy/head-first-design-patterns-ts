import Iterator from "./Iterator";
import MenuItem from "./MenuItem";

export default class DinerMenuIterator implements Iterator<MenuItem> {
  items: (MenuItem | null)[];
  position: number = 0;

  constructor(items: MenuItem[]) {
    this.items = items;
  }

  next(): IteratorResult<MenuItem> {
    const menuItem: MenuItem = this.items[this.position] as MenuItem;
    this.position++;
    return { value: menuItem, done: this.position > this.items.length };
  }

  hasNext(): boolean {
    return (
      this.position < this.items.length && this.items[this.position] !== null
    );
  }

  remove(): void {
    if (this.position <= 0) {
      throw new Error(
        "You can't remove an item until you've done at least one next()"
      );
    }
    if (this.items[this.position - 1] !== null) {
      for (let i = this.position - 1; i < this.items.length - 1; i++) {
        this.items[i] = this.items[i + 1];
      }
      this.items[this.items.length - 1] = null;
    }
  }
}
