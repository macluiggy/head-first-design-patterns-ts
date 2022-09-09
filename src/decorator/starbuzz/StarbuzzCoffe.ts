import Beverage from "./Beverage";
import DarkRoast from "./DarkRoast";
import Expresso from "./Expresso";
import Mocha from "./Mocha";
// import Whip from "./Whip";

export default class StarbuzzCoffee {
  constructor() {
    let beverage: Beverage = new Expresso();
    console.log(beverage.getDescription() + " $" + beverage.cost());

    let beverage2: Beverage = new DarkRoast();
    console.log(beverage2.getDescription() + " $" + beverage2.cost());
    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);
    // beverage2 = new Whip(beverage2);
    console.log(beverage2.getDescription() + " $" + beverage2.cost());
  }
}

new StarbuzzCoffee();