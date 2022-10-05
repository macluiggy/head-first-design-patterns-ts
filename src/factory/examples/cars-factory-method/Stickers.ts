import Car from "../cars/Car";
import Decorator from "./Decorator";

export default class Stickers extends Decorator {
  public car: Car;
  constructor(car: Car) {
    super();
    this.car = car;
  }
  public getDescription(): string {
    return `${this.car.getDescription()} stickers,`;
  }

  public getCost(): number {
    return this.car.getCost() + 100;
  }
}