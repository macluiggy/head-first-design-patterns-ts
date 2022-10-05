import Car from "../cars/Car";
import Decorator from "./Decorator"

export default class Turbo extends Decorator {
  public car: Car;
  constructor(car: Car) {
    super();
    this.car = car;
  }
  public getDescription(): string {
    return this.car.getDescription() + " turbo,";
  }

  public getCost(): number {
    return this.car.getCost() + 1500;
  }
}