import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class QuackCounter implements Quackable {
  duck: Quackable;
  static numberOfQuacks: number = 0;
  constructor(duck: Quackable) {
    this.duck = duck;
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++
  }

  static getQuacks(): number {
    return QuackCounter.numberOfQuacks;
  }

  registerObserver(observer: Observer): void {
    this.duck.registerObserver(observer);
  }
  notifyObservers(): void {
    this.duck.notifyObservers();
  }
}
