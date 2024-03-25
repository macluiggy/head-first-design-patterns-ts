import Pizza from "./Pizza";
import PizzaDecorator from "./PizzaDecorator";

export default class ExtraCheeseDecorator extends PizzaDecorator{
  private pizza: Pizza;
  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  getDescription(): string {
    return this.pizza.getDescription() + ", Extra Cheese";
  }

  cost(): number {
    return this.pizza.cost() + 1.5;
  }
}