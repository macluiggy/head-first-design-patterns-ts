import Observer from "./Oberver";
import Subject from "./Subject";

export default class Game implements Subject {
  private observers: Observer[] = [];
  private price: number;
  private hasDiscount: boolean;
  private discount: number = 0;
  private name: string;

  constructor(price: number, discount: number, name: string) {
    this.price = price;
    this.hasDiscount = false;
    this.discount = discount;
    this.name = name;
  }
  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  private updatePrice(price: number): void {
    this.price = this.hasDiscount ? price - price * this.discount : price;
    this.notifyObservers();
  }

  applyDiscount(discount: number): void {
    this.hasDiscount = true;
    this.discount = discount;
    this.price = discount == 1 ? 0 : this.price;
    this.updatePrice(this.price);
  }
  disableDiscount(): void {
    this.hasDiscount = false;
    this.updatePrice(this.price);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.hasDiscount, this.price, this.name);
    }
  }
}
