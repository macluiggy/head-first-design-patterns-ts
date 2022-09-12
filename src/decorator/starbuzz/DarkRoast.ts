import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
    this.size = 'TALL'
  }

  public cost(): number {
    return .99;
  }
}