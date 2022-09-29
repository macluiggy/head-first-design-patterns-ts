import PizzaIngredientFactory from "../pizzaaf/PizzaIngredientFactory";
import Pizza from "./Pizza";

export default class PepperoniPizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}