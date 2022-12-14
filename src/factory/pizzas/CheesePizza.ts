import Pizza from "./Pizza";
import PizzaIngredientFactory from "../pizzaaf/PizzaIngredientFactory";

export default class CheezePizza extends Pizza {
  // name: string;
  // dough: string;
  // sauce: string;
  //  toppings: string[] = [];
  ingredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
    this.name = "Cheese Pizza";
    this.dough = "Regular Crust";
    this.sauce = "Marinara Pizza Sauce";
    this.toppings.push("Fresh Mozzarella");
    this.toppings.push("Parmesan");
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }
}
