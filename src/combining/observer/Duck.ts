import Observable from "./Observable";
import Observer from "./Observer";

export default class Duck {
  observable: Observable;
  constructor() {
    this.observable = new Observable(this);
  }

  registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }
  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
