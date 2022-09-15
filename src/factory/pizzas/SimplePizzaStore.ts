import Pizza from "./Pizza";
import SimplePizzaFactory from "./SimplePizzaFactory";

export default class SimplePizzaStore {
  factory: SimplePizzaFactory;
  public constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string): Pizza {
    let pizza: Pizza;
    pizza  = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}