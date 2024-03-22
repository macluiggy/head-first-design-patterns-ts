import Observer from "./Observer";

export default interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(msg: string, sender: string): void;
}
