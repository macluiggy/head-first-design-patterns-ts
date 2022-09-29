import BlackOlives from "./BlackOlives";
import Cheese from "./Cheese";
import Clams from "./Clams";
import Dough from "./Dough";
import Eggplant from "./Eggplant";
import FrozenClams from "./FrozenClams";
import MozzarellaCheese from "./MozzarellaCheese";
import Pepperoni from "./Pepperoni";
import PizzaIngredientFactory from "./PizzaIngredientFactory";
import PlumTomatoSauce from "./PlumTomatoSauce";
import Sauce from "./Sauce";
import SlicedPepperoni from "./SlicedPepperoni";
import Spinach from "./Spinach";
import ThickCrustDough from "./ThickCrustDough";
import Veggies from "./Veggies";

export default class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    return [new BlackOlives(), new Spinach(), new Eggplant()];
  }

  createClam(): Clams {
    return new FrozenClams();
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
}