import Duck from "./Duck";
import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class DuckCall extends Duck implements Quackable {
  constructor() {
    super();
  }
  quack(): void {
    console.log('Kwak');
    super.notifyObservers();
  }
}
