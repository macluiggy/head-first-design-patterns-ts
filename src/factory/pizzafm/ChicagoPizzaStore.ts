import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import ChicagoStyleCheezePizza from "./ChicagoStyleCheesePizza";

export default class ChicagoPizzaStore extends PizzaStore {
  ChicagoTypes = {
    cheese: new ChicagoStyleCheezePizza(),
    // veggie: new ChicagoStyleVeggiePizza(),
    // clam: new ChicagoStyleClamPizza(),
    // pepperoni: new ChicagoStylePepperoniPizza(),
  };
  createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new ChicagoStyleCheezePizza();
    }
    // else if (type === "veggie") {
    //   // return new ChicagoStyleVeggiePizza();
    // } else if (type === "clam") {
    //   // return new ChicagoStyleClamPizza();
    // } else if (type === "pepperoni") {
    //   // return new ChicagoStylePepperoniPizza();
    // }
    else {
      throw new Error("Unknown type of pizza");
    }
  }
}
