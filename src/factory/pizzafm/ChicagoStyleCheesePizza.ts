import Pizza from "../pizzas/Pizza";

export default class ChicagoStyleCheezePizza extends Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];
  constructor() {
    super();
    this.name = "Chicago Style Deep Dish Cheese Pizza";
    this.dough = "Extra Thick Crust Dough";
    this.sauce = "Plum Tomato Sauce";

    this.toppings.push("Shredded Mozzarella Cheese");
  }

  cut() {
    console.log("Cutting the pizza into square slices");
  }
}
