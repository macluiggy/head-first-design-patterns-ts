import Cheese from "../pizzaaf/Cheese";
import Clams from "../pizzaaf/Clams";
import Dough from "../pizzaaf/Dough";
import Pepperoni from "../pizzaaf/Pepperoni";
import Sauce from "../pizzaaf/Sauce";
import CheesePizza from "./CheesePizza";
export type Types = {
  cheese: CheesePizza;
  // pepperoni: PepperoniPizza;
  // clam: ClamPizza;
  // veggie: VeggiePizza;
};

export default abstract class Pizza {
  protected name: string;
  // protected dough: string;
  // protected sauce: string;
  protected toppings: string[] = [];

  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  pepperoni: Pepperoni;
  clam: Clams;

  constructor() {
    this.name = "";
    this.dough = "";
    this.sauce = "";
    this.cheese = "";
    this.pepperoni = "";
    this.clam = "";
    this.toppings = [];
  }

  // public prepare(): void {
  //   console.log(`Preparing ${this.name}`);
  //   console.log("Tossing dough...");
  //   console.log("Adding sauce...");
  //   console.log("Adding toppings: ");
  //   for (let topping of this.toppings) {
  //     console.log(`   ${topping}`);
  //   }
  // }

  abstract prepare(): void;
  public bake(): void {
    console.log("Bake for 25 minutes at 350");
  }
  public cut(): void {
    console.log("Cutting the pizza into diagonal slices");
  }
  public box(): void {
    console.log("Place pizza in official PizzaStore box");
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public toString(): string {
    // code to display pizza name and ingredients
    let display: string = "";
    display += `---- ${this.name} ----`
    return display;
  }
}
