import Coffe from "./Coffe";

export default abstract class CoffeeDecorator implements Coffe {
  protected decoratedCoffe: Coffe;

  constructor(coffe: Coffe) {
    this.decoratedCoffe = coffe;
  }

  cost(): number {
    return this.decoratedCoffe.cost();
  }

  description(): string {
    return this.decoratedCoffe.description();
  }
}