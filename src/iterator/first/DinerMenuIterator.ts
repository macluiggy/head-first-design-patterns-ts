import MenuItem from "./MenuItem";

export default class DinerMenuIterator implements Iterator<MenuItem> {
  list: (MenuItem | null)[];
  position: number = 0;

  constructor(list: MenuItem[]) {
    this.list = list;
  }

  next(): IteratorResult<MenuItem> {
    const menuItem: MenuItem = this.list[this.position] as MenuItem;
    this.position++;
    return { value: menuItem, done: this.position > this.list.length };
  }

  hasNext(): boolean {
    return (
      this.position < this.list.length && this.list[this.position] !== null
    );
  }

  remove(): void {
    if (this.position <= 0) {
      throw new Error(
        "You can't remove an item until you've done at least one next()"
      );
    }
    if (this.list[this.position - 1] !== null) {
      for (let i = this.position - 1; i < this.list.length - 1; i++) {
        this.list[i] = this.list[i + 1];
      }
      this.list[this.list.length - 1] = null;
    }
  }
}
