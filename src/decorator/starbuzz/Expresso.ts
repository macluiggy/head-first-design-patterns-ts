import Beverage, { SizeCosts } from "./Beverage";

export default class Expresso extends Beverage {
  private prices: SizeCosts;
  constructor() {
    super();
    this.description = "Expresso";
    this.prices = {
      TALL: 1.99,
      GRANDE: 2.09,
      VENTI: 2.19,
    };
  }

  public cost(): number {
    return this.prices[this.getSize()];
  }
}
