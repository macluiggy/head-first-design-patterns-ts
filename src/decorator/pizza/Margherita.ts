import Pizza from "./Pizza";

export default class Margherita implements Pizza {
  getDescription(): string {
    return "Margherita";
  }

  cost(): number {
    return 10;
  }
}