import Coffe from "./Coffe";
import Espresso from "./Espresso";
import Latte from "./Latte";

export default class CoffeeFactory {
  public static createCoffee(type: string): Coffe {
    switch (type) {
      case "Espresso":
        return new Espresso();
      case "Latte":
        return new Latte();
      default:
        throw new Error("Invalid coffee type");
    }
  }
}