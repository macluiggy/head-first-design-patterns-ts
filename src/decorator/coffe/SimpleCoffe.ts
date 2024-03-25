import Coffe from "./Coffe";

export default class SimpleCoffe implements Coffe {
  cost(): number {
    return 1;
  }

  description(): string {
    return "Simple coffe";
  }
}
