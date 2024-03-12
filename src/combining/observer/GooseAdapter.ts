import Goose from "./Goose";
import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class GooseAdapter implements Quackable {
  private goose: Goose;
  observable: Observable;
  constructor(goose: Goose) {
    this.goose = goose;
    this.observable = new Observable(this);
  }

  quack(): void {
    this.goose.honk();
  }

  registerObserver(observer: Observer): void {
    this.observable.registerObserver(observer);
  }
  notifyObservers(): void {
    this.observable.notifyObservers();
  }
}
