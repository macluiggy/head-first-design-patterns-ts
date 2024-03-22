import Observer from "./Observer";
import Subject from "./Subject";

export default class MessageService implements Subject {
  private observers: Observer[] = [];

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(msg: string, sender: string): void {
    this.observers.forEach((observer) => observer.update(msg, sender));
  }

  public sendMessage(msg: string, sender: string): void {
    this.notifyObservers(msg, sender);
  }
}
