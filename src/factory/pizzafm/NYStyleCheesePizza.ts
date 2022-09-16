import Pizza from "../pizzas/Pizza";

export default class NYStyleCheesePizza extends Pizza {
  private name: string;
  private dough: string;
  private sauce: string;
  private toppings: string[] = [];
  constructor() {
    super();
    this.name = "NY Style Sauce and Cheese Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";
    
    this.toppings.push("Grated Reggiano Cheese");
  }
}