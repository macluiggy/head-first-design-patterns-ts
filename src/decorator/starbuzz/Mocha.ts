import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  public beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }
  public cost(): number {
    return this.beverage.cost() + .20;
  }
}
