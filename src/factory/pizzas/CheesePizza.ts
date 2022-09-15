import Pizza from "./Pizza";

export default class CheezePizza extends Pizza {
  private name: string;
  private dough: string;
  private sauce: string;
  private toppings: string[] = [];
  constructor() {
    super();
    this.name = "Cheese Pizza";
    this.dough = "Regular Crust";
    this.sauce = "Marinara Pizza Sauce";
    this.toppings.push("Fresh Mozzarella");
    this.toppings.push("Parmesan");
  }
}