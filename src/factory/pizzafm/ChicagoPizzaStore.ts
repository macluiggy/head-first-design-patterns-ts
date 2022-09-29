import Pizza from "../pizzas/Pizza";
import PizzaStore from "../pizzas/PizzaStore";
import ChicagoStyleCheezePizza from "./ChicagoStyleCheesePizza";
import ChicagoPizzaIngredientFactory from "../pizzaaf/ChicagoPizzaIngredientFactory";
import CheezePizza from "../pizzas/CheesePizza";
import VeggiePizza from "../pizzas/VeggiePizza";
import ClamPizza from "../pizzas/ClamPizza";
import PepperoniPizza from "../pizzas/PepperoniPizza";

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
    else if (type === "veggie") {
      this.pizza = new VeggiePizza(this.ingredientFactory);
      this.pizza.setName("Chicago Deep Dish Veggie Pizza");
    } else if (type === "clam") {
      this.pizza = new ClamPizza(this.ingredientFactory);
      this.pizza.setName("Chicago Deep Dish Clam Pizza");
    } else if (type === "pepperoni") {
      this.pizza = new PepperoniPizza(this.ingredientFactory)
      this.pizza.setName("Chicago Deep Dish Pepperoni Pizza");
    } 
    return this.pizza;
  }
}
