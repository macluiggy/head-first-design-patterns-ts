import Iterator from "./Iterator";
import MenuItem from "./MenuItem";

export default class PancakeHouseMenuIterator implements Iterator<MenuItem> {
  items: Set<MenuItem>;
  position = 0;
  constructor(items: Set<MenuItem>) {
    this.items = items;
  }
  next(): IteratorResult<MenuItem> {
    const value = Array.from(this.items)[this.position];
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