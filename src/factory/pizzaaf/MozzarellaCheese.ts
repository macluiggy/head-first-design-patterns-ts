import Cheese from "./Cheese";

export default class MozzarellaCheese implements Cheese {
  toString(): string {
    return "Shredded Mozzarella";
  }
}