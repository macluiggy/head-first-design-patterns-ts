import Margherita from "./Margherita";
import Pizza from "./Pizza";
import { PizzaType } from "./PizzaType";

export default class ConcretePizzaStore {
  public createPizza(type: string): Pizza {
    let pizza: Pizza;
    switch (type) {
      case PizzaType.Margherita:
        pizza = new Margherita();
        break;
      default:
        throw new Error("Invalid pizza type");
    }

    return pizza;
  }
}
