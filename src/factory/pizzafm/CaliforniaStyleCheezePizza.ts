import Pizza from "../pizzas/Pizza";

export default class CaliforniaStyleCheezePizza extends Pizza {
  private name: string;
  private dough: string;
  private sauce: string;
  private toppings: string[] = [];
  constructor() {
    super();
    this.name = "California Style Deep Dish Cheese Pizza";
    this.dough = "Extra Thick Crust Dough";
    this.sauce = "Plum Tomato Sauce";
    
    this.toppings.push("Shredded Mozzarella Cheese");
  }

  cut() {
    console.log("Cutting the pizza into square slices");
  }
}