import Duck from "./Duck";
import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class QuackCounter extends Duck implements Quackable {
  duck: Quackable;
  static numberOfQuacks: number = 0;
  constructor(duck: Quackable) {
    super();
    this.duck = duck;
  }

  quack(): void {
    this.duck.quack();
    QuackCounter.numberOfQuacks++
    super.notifyObservers();
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
