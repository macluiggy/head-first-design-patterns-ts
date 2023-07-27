// Define an interface Observer with a method update(stockName: string, stockPrice: number): void.

export default interface Observer {
  update(stockName: string, stockPrice: number): void;
}
