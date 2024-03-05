export default interface Book {
  createIterator(): Iterator<string>;
}