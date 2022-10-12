import Observer from "./Oberver";
import Subject from "./Subject";

export default class SimpleSubject implements Subject {
  private observers: Observer[] = [];
  private value: number = 0;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.value);
    }
  }

  setValue(value: number): void {
    this.value = value;
    this.notifyObservers();
  }
}