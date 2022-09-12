import Beverage from "./Beverage";
import DarkRoast from "./DarkRoast";
import Expresso from "./Expresso";
import Mocha from "./Mocha";
import Whip from "./Whip";
import HouseBlend from "./HouseBlend";
import Soy from "./Soy";

export default class StarbuzzCoffee {
  constructor() {
    let beverage: Beverage = new Expresso();
    console.log(beverage.getDescription() + " $" + beverage.cost());

    let beverage2: Beverage = new DarkRoast();
    console.log(beverage2.getDescription() + " $" + beverage2.cost());
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription() + " $" + beverage2.cost());

    let beverage3: Beverage = new HouseBlend();
    beverage3.setSize("GRANDE");
    console.log(beverage3.getDescription() + " $" + beverage3.cost());
    beverage3 = new Soy(beverage3);
    // beverage3 = new Mocha(beverage3);
    // beverage3 = new Whip(beverage3);
    console.log(beverage3.getDescription() + " $" + beverage3.cost());
  }
}

new StarbuzzCoffee();