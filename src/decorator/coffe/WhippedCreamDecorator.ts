import Coffe from "./Coffee";
import CoffeeDecorator from "./CoffeeDecorator";

export default class WhippedCreamDecorator extends CoffeeDecorator {
  decoratedCoffee: Coffe;
  constructor(coffee: Coffe) {
    super();
    this.decoratedCoffee = coffee;
  }

  cost(): number {
      return this.decoratedCoffee.cost() + 2;
  }

  description(): string {
    return this.decoratedCoffee.description() + ", with whipped cream";
  }
}