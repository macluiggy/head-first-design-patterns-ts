import Observer from "./Observer";

export default class Blog {
  private subscribers: Observer[] = [];

  public subscribe(observer: Observer): void {
    this.subscribers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const index = this.subscribers.indexOf(observer);
    this.subscribers.splice(index, 1);
  }

  public addPost(...args: any[]): void {
    this.notify(...args);
  }

  public notify(...args: any[]): void {
    this.subscribers.forEach((observer: Observer) => {
      observer.update(...args);
    });
  }
}