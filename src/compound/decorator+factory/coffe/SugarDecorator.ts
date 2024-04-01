import Coffe from "./Coffe";
import CoffeeDecorator from "./CoffeDecorator";

export default class SugarDecorator implements CoffeeDecorator {
  decoratedCoffee: Coffe;

  constructor(decoratedCoffee: Coffe) {
    this.decoratedCoffee = decoratedCoffee;
  }

  cost(): number {
    return this.decoratedCoffee.cost() + 0.5;
  }

  description(): string {
    return this.decoratedCoffee.description() + ", Sugar";
  }
}