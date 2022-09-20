import CheesePizza from "./CheesePizza";
export type Types = {
  cheese: CheesePizza;
  // pepperoni: PepperoniPizza;
  // clam: ClamPizza;
  // veggie: VeggiePizza;
};

export default class Pizza {
  protected name: string;
  protected dough: string;
  protected sauce: string;
  protected toppings: string[] = [];
  constructor() {
    this.name = "";
    this.dough = "";
    this.sauce = "";
    this.toppings = [];
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log("Tossing dough...");
    console.log("Adding sauce...");
    console.log("Adding toppings: ");
    for (let topping of this.toppings) {
      console.log(`   ${topping}`);
    }
  }
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
}
