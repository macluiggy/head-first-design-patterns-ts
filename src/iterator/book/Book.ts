import BookItem from "./BookItem";

export default interface Book {
  createIterator(): Iterator<BookItem>;
}