export default interface Observer {
  update(hasDiscount: boolean, price?: number): void;
}
