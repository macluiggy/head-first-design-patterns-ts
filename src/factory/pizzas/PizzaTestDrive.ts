import NYPizzaStore from "../pizzafm/NYPizzaStore";
import ChicagoPizzaStore from "../pizzafm/ChicagoPizzaStore";
import PizzaStore from "./PizzaStore";
import Pizza from "./Pizza";

export default class PizzaTestDrive {
  public static main(): void {
    let nyStore: PizzaStore = new NYPizzaStore();
    let chicagoStore: PizzaStore = new ChicagoPizzaStore();

    let pizza: Pizza  = nyStore.orderPizza("cheese");
    console.log("Ethan ordered a " + pizza.getName() + "\n");

    pizza = chicagoStore.orderPizza("cheese");
    console.log("Joel ordered a " + pizza.getName() + "\n");
  }
}

PizzaTestDrive.main();