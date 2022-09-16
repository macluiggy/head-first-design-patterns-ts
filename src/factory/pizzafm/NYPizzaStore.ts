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
    return this.NYTypes[type] || null;
  }
}