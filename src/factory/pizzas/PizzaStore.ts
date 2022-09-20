import Pizza from "./Pizza";
import PizzaFactory from "./SimplePizzaFactory";

export default abstract class PizzaStore {
  // factory: PizzaFactory;
  // public constructor(factory: PizzaFactory) {
  //   this.factory = factory;
  // }

  public orderPizza(type: string): Pizza | null {
    let pizza : Pizza | null;
    pizza  = this.createPizza(type);
    pizza!.prepare();
    pizza!.bake();
    pizza!.cut();
    pizza!.box();
    return pizza;
  }

  protected abstract createPizza(type: string): Pizza | null;
}