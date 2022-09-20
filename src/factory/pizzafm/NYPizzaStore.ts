import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import NYStyleCheesePizza from "./NYStyleCheesePizza";

export default class NYPizzaStore extends PizzaStore {
  NYTypes = {
    cheese: new NYStyleCheesePizza(),
    // veggie: new NYStyleVeggiePizza(),
    // clam: new NYStyleClamPizza(),
    // pepperoni: new NYStylePepperoniPizza(),
  }
  createPizza(type: string): Pizza {
    if (type === "cheese") {
      return new NYStyleCheesePizza();
    }
    // else if (type === "veggie") {
    //   // return new NYStyleVeggiePizza();
    // } else if (type === "clam") {
    //   // return new NYStyleClamPizza();
    // } else if (type === "pepperoni") {
    //   // return new NYStylePepperoniPizza();
    // }
     else {
      throw new Error("Unknown type of pizza");
    }
  }
}