import Coffe from "./Coffe";

export default class Espresso implements Coffe {
  cost(): number {
    return 1.99;
  }

  description(): string {
    return "Espresso";
  }
}