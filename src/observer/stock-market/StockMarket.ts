/**
 * Define an interface Subject with the following methods:

registerObserver(o: Observer): void
removeObserver(o: Observer): void
notifyObservers(): void
 */

import Observer from "./Observer";
import Subject from "./Subject";

export default class StockMarket implements Subject {
  private observers: Observer[] = [];

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter((observer) => observer !== o);
  }

  notifyObservers(stockName: string, stockPrice: number): void {
    this.observers.forEach((observer) =>
      observer.update(stockName, stockPrice)
    );
  }

  setStockPrice(stockName: string, stockPrice: number): void {
    this.notifyObservers(stockName, stockPrice);
  }
}
