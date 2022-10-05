import { Items } from "./Items";

export default class ItemsFactory implements Items {
  addItem1(): void {
    console.log("Adding item1");
  }
  addItem2(): void {
    console.log("Adding item2");
  }
  addItem3(): void {
    console.log("Adding item3");
  }
}
