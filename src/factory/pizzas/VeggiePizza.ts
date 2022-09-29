import PizzaIngredientFactory from "../pizzaaf/PizzaIngredientFactory";
import Veggies from "../pizzaaf/Veggies";
import Pizza from "./Pizza";

export default class VeggiePizza extends Pizza {
  veggies: Veggies[];
  ingredientFactory: PizzaIngredientFactory
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
    this.veggies = [];
  }
  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    this.veggies = this.ingredientFactory.createVeggies();
  }
}