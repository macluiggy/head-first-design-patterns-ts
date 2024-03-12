import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class DuckCall implements Quackable {
  observable: Observable  
  constructor() {
    this.observable = new Observable(this);
  }
  quack(): void {
    console.log('Kwak');
  }
  registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }
  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
