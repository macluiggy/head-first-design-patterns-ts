import MenuItem from "./MenuItem";

export default interface Menu {
  createIterator(): Iterator<MenuItem>;
}
