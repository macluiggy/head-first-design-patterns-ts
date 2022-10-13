import Observer from "./Oberver";
import Subject from "./Subject";

export default class GodOfWar implements Subject {
  private observers: Observer[] = [];
  private price: number;
  private hasDiscount: boolean;
  private discount: number = 0;

  constructor() {
    this.price = 60;
    this.hasDiscount = false;
    this.discount = 0.5;
  }
  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  updatePrice(price: number): void {
    this.price = this.hasDiscount ? price - price * this.discount : price;
    this.notifyObservers();
  }

  applyDiscount(discount: number): void {
    this.hasDiscount = true;
    this.discount = discount;
    this.updatePrice(this.price);
  }
  disableDiscount(): void {
    this.hasDiscount = false;
    this.updatePrice(this.price);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.hasDiscount, this.price);
    }
  }
}
