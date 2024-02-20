import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class TeaWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log("Steeping the tea");
  }
  addCondiments(): void {
    console.log("Adding Lemon");
  }
  customerWantsCondiments(): boolean {
    return Math.random() < 0.5;
  }
}
