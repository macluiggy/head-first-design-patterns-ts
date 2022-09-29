import Dough from "./Dough";
import Sauce from "./Sauce";
import Cheese from "./Cheese";
import Veggies from "./Veggies.js";

export default interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
  // createPepperoni(): Pepperoni;
  // createClam(): Clams;
}
