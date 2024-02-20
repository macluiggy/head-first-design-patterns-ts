import CaffeineBeverageWithHook from "./CaffeineBeverageWithHook";

export default class TeaWithHook extends CaffeineBeverageWithHook {
  brew(): void {
    console.log("Steeping the tea");
  }
  addCondiments(): void {
    console.log("Adding Lemon");
  }
  customerWantsCondiments(): boolean {
    return window.confirm("Do you want lemon?");
  }
}
