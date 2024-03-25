import Coffee from "./Coffee";
import CoffeeDecorator from "./CoffeeDecorator";

export default class MilkDecorator extends CoffeeDecorator {
  decoratedCoffee: Coffee;
  constructor(coffee: Coffee) {
    super();
    this.decoratedCoffee = coffee;
  }

  cost(): number {
    return this.decoratedCoffee.cost() + 2;
  }

  description(): string {
    return this.decoratedCoffee.description() + ", with milk";
  }
}
