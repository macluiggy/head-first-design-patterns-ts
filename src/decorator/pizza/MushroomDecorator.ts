import Pizza from "./Pizza";

export default class MushroomDecorator implements Pizza {
  private pizza: Pizza;

  constructor(pizza: Pizza) {
    this.pizza = pizza;
  }

  getDescription(): string {
    return `${this.pizza.getDescription()}, Mushroom`;
  }

  cost(): number {
    return this.pizza.cost() + 2;
  }
}