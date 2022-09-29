import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import NYStyleCheesePizza from "./NYStyleCheesePizza";
import NYPizzaIngredientFactory from "../pizzaaf/NYPizzaIngredientFactory";
import CheezePizza from "../pizzas/CheesePizza";
import VeggiePizza from "../pizzas/VeggiePizza";
import ClamPizza from "../pizzas/ClamPizza";
import PepperoniPizza from "../pizzas/PepperoniPizza";

export default class NYPizzaStore extends PizzaStore {
  pizza: Pizza | null = null;
  ingredientFactory = new NYPizzaIngredientFactory();
  createPizza(type: string): Pizza {
    if (type === "cheese") {
      this.pizza = new CheezePizza(this.ingredientFactory);
      this.pizza.setName("New York Style Cheese Pizza");
    } else if (type === "veggie") {
      this.pizza = new VeggiePizza(this.ingredientFactory);
      this.pizza.setName("New York Style Veggie Pizza");
    } else if (type === "clam") {
      this.pizza = new ClamPizza(this.ingredientFactory);
      this.pizza.setName("New York Style Clam Pizza");
    } else if (type === "pepperoni") {
      this.pizza = new PepperoniPizza(this.ingredientFactory)
    } else {
      throw new Error("Unknown type of pizza");
    }
    return this.pizza;
  }
}
