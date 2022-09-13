import Beverage, { SizeCosts } from "./Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Whip extends CondimentDecorator {
  public beverage: Beverage;
  private prices: SizeCosts
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
    this.prices = {
      TALL: 0.1,
      GRANDE: 0.15,
      VENTI: 0.2,
    };
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  public cost(): number {
    return this.beverage.cost() + this.prices[this.beverage.getSize()];
  }
}