import Observer from "./Observer";
import QuackObservable from "./QuackObservable";

export default class Quackologist implements Observer {
  update(duck: QuackObservable): void {
    console.log(`Quackologist: ${duck} just quacked.`);
  }
}