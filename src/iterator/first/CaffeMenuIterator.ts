import Iterator from "./Iterator";
import MenuItem from "./MenuItem";

export default class CaffeMenuIterator implements Iterator<MenuItem> {
  items: Map<string, MenuItem>;
  position = 0;
  constructor(items: Map<string, MenuItem>) {
    this.items = items;
  }
  next(): IteratorResult<MenuItem> {
    const value = Array.from(this.items.values())[this.position];
    this.position += 1;
    return {
      value,
      done: this.position > this.items.size
    };
  }

  hasNext(): boolean {
    return this.position < this.items.size;
  }
}