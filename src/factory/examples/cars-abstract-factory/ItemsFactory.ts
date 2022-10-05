import Car from "../cars/Car";
import { Items } from "./Items";

export default class ItemsFactory extends Car implements Items {
  items: string[];
  car: Car;
  cost = 0;
  constructor(car: Car) {
    super();
    this.car = car;
    this.items = [];
    // this.cost
  }
  public addItem1(): void {
    this.items.push("item1");
    this.cost += 100;
  }
  addItem2(): void {
    this.items.push("item2");
    this.cost += 200;
  }
  addItem3(): void {
    this.items.push("item3");
    this.cost += 300;
  }
  getItems(): string {
    return this.items.join(", ");
  }
  public getDescription(): string {
    this.addItem1();
    this.addItem2();
    this.addItem3();
    return `${this.car.getDescription()} ${this.getItems()}`;
  }

  public getCost(): number {
    return this.car.getCost() + this.cost;
  }
}
