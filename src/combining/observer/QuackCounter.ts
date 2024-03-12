import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class QuackCounter implements Quackable {
  duck: Quackable;
  static numberOfQuacks: number = 0;
  observable: Observable;
  constructor(duck: Quackable) {
    this.duck = duck;
    this.observable = new Observable(this);
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++
  }

  static getQuacks(): number {
    return QuackCounter.numberOfQuacks;
  }

  registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }
  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
