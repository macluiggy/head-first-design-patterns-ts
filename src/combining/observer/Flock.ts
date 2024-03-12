import Observable from "./Observable";
import Observer from "./Observer";
import Quackable from "./Quackable";

export default class Flock implements Quackable {
  quackers: (Quackable | Flock)[] | Array<Quackable | Flock> = [];
  observable: Observable;

  constructor() {
    this.observable = new Observable(this);
  }

  add(quacker: Quackable | Flock): void {
    this.quackers.push(quacker);
  }

  // quack(): void {
  //  let iterator = this.quackers.values();
  //   let next = iterator.next();
  //   while (!next.done) {
  //     let quacker = next.value;
  //     quacker.quack();
  //     next = iterator.next();
  //   }
  // }
  quack(): void {
    for (let quacker of this.quackers) {
      quacker.quack();
    }
  }

  registerObserver(observer: Observer): void {
    for (let quacker of this.quackers) {
      quacker.registerObserver(observer);
    }
  }

  notifyObservers(): void {
    for (let quacker of this.quackers) {
      quacker.notifyObservers();
    }
  }
}
