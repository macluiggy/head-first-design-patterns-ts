import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import ChicagoStyleCheezePizza from "./ChicagoStyleCheesePizza";
import ChicagoPizzaIngredientFactory from "../pizzaaf/ChicagoPizzaIngredientFactory";
import CheezePizza from "../pizzas/CheesePizza";

export default class ChicagoPizzaStore extends PizzaStore {
  pizza: Pizza
  ingredientFactory = new ChicagoPizzaIngredientFactory();
  constructor() {
    super();
    this.pizza = 0 as unknown as Pizza;
  }
  createPizza(type: string): Pizza {
    if (type === "cheese") {
      this.pizza = new CheezePizza(this.ingredientFactory);
      this.pizza.setName("Chicago Style Deep Dish Cheese Pizza");
    }
    // else if (type === "veggie") {
    //   // return new ChicagoStyleVeggiePizza();
    // } else if (type === "clam") {
    //   // return new ChicagoStyleClamPizza();
    // } else if (type === "pepperoni") {
    //   // return new ChicagoStylePepperoniPizza();
    // }
    // else {
    //   throw new Error("Unknown type of pizza");
    // }
    return this.pizza;
  }
}
