import Observer from "./Observer";
import Subject from "./Subject";

export default class TextEditor implements Subject {
  private text: string = "";
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer.update(this.text);
    }
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
    this.notify();
  }
}