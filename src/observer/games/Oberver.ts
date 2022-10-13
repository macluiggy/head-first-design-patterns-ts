export default interface Observer {
  update(hasDiscount: boolean, price?: number, name?: string): void;
}
