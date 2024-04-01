import Coffe from "./Coffe";

export default interface CoffeeDecorator {
  decoratedCoffee: Coffe;
  cost(): number;
  description(): string;
}
