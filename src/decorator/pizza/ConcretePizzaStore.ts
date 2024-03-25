import Margherita from "./Margherita";
import Pizza from "./Pizza";

enum PizzaType {
  Margherita = "Margherita",
  Pepperoni = "Pepperoni",
  Hawaiian = "Hawaiian",
}
export default class ConcretePizzaStore {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }

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
