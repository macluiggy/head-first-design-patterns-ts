/**
 * Implement the Subject interface in a class StockMarket. This class should have methods to set the prices of different stocks and when the prices are set, it should notify all the observers.

 */
import Observer from "./Observer";

export default interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(stockName: string, stockPrice: number): void;

  
}