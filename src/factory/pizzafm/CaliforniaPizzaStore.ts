import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import CaliforniaStyleCheezePizza from "./CaliforniaStyleCheezePizza";

export default class CaliforniaPizzaStore extends PizzaStore {
  CaliforniaTypes = { 
    cheese: new CaliforniaStyleCheezePizza(),
    // veggie: new CaliforniaStyleVeggiePizza(),
    // clam: new CaliforniaStyleClamPizza(),
    // pepperoni: new CaliforniaStylePepperoniPizza(),
  }
  createPizza(type: string): Pizza {
    return this.CaliforniaTypes[type] || null;
  }
}