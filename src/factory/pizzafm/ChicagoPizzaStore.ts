import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import ChicagoStyleCheezePizza from "./ChicagoStyleCheesePizza";

export default class ChicagoPizzaStore extends PizzaStore {
  ChicagoTypes = {
    cheese: new ChicagoStyleCheezePizza(),
    // veggie: new ChicagoStyleVeggiePizza(),
    // clam: new ChicagoStyleClamPizza(),
    // pepperoni: new ChicagoStylePepperoniPizza(),
  }
  createPizza(type: string): Pizza {
    return this.ChicagoTypes[type] || null;
  }
}