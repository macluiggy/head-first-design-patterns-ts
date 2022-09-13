import Beverage, { SizeCosts } from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  public beverage: Beverage;
  private prices: SizeCosts;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.prices = {
      TALL: 0.2,
      GRANDE: 0.3,
      VENTI: 0.4,
    };
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }
  public cost(): number {
    return this.beverage.cost() + this.prices[this.beverage.getSize()];
  }
}
