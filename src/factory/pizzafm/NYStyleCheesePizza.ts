import Pizza from "../pizzas/Pizza";

export default class NYStyleCheesePizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];
  constructor() {
    super();
    this.name = "NY Style Sauce and Cheese Pizza";
    this.dough = "Thin Crust Dough";
    this.sauce = "Marinara Sauce";
    
    this.toppings.push("Grated Reggiano Cheese");
  }
}