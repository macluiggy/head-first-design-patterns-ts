import Pizza from "./Pizza";
import PizzaFactory from "./SimplePizzaFactory";

export default abstract class PizzaStore {
  // factory: PizzaFactory;
  // public constructor(factory: PizzaFactory) {
  //   this.factory = factory;
  // }

  public orderPizza(type: string): Pizza  {
    let pizza : Pizza
    pizza  = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza;
}