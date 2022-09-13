import Beverage, { SizeCosts } from "./Beverage";

export default class HouseBlend extends Beverage {
  private prices: SizeCosts
  constructor() {
    super();
    this.description = "House Blend Coffee";
    this.prices = {
      TALL: 0.89,
      GRANDE: 0.99,
      VENTI: 1.09,
    }
  }

  public cost(): number {
    console.log(this.getSize());
    
    return this.prices[this.getSize()];
  }
}