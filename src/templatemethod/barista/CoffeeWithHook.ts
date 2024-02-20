import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class CoffeeWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log("Dripping Coffee through filter");
  }
  addCondiments(): void {
    console.log("Adding Sugar and Milk");
  }
  customerWantsCondiments(): boolean {
    return Math.random() < 0.5;
  }
}
