import Beverage, { SizeCosts } from "./Beverage";

export default class DarkRoast extends Beverage {
  private prices: SizeCosts    
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
    this.prices = {
      TALL: 0.89,
      GRANDE: 0.99,
      VENTI: 1.09,
    }
  }

  public cost(): number {
    return this.prices[this.getSize()];
  }
}