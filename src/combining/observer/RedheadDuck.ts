import Duck from "./Duck";
import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class RedheadDuck extends Duck implements Quackable {
  observable: Observable;
  constructor() {
    super();
    this.observable = new Observable(this);
  }
  quack(): void {
    console.log('Quack');
    super.notifyObservers();
  }
}