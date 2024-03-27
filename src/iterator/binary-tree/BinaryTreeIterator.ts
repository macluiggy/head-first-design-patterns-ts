import Iterator from "./Iterator";

export default class BinaryTreeIterator<T> implements Iterator<T> {
  private index = 0;
  private nodes: T[] = [];

  constructor(nodes: T[]) {
    this.nodes = nodes;
  }

  next(): IteratorResult<T> {
    return {
      value: this.nodes[this.index++],
      done: this.index >= this.nodes.length,
    };
  }

  hasNext(): boolean {
    return this.index < this.nodes.length;
  }
}