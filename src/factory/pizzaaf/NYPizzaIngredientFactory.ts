import Cheese from "./Cheese";
import Dough from "./Dough";
import Garlic from "./Garlic";
import MarinaraSauce from "./MarinaraSauce";
import Mushroom from "./Mushroom";
import Onion from "./Onion";
import PizzaIngredientFactory from "./PizzaIngredientFactory";
import RedPepper from "./RedPepper";
import ReggianoCheese from "./ReggianoCheese";
import Sauce from "./Sauce";
import ThinCrustDough from "./ThinCrustDough";
import Veggies from "./Veggies";

export default class NYPizzaIngredientFactory
  implements PizzaIngredientFactory
{
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }
}
