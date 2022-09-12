import Beverage from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Whip extends CondimentDecorator {
  public beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  public cost(): number {
    return this.beverage.cost() + .10;
  }
}