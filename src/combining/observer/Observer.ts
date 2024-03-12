import QuackObservable from "./QuackObservable";

export default class Observer {
  update(duck: QuackObservable): void {
    console.log('Quackologist: ' + duck + ' just quacked.');
  }
}