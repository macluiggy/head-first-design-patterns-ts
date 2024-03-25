import Coffe from "./Coffee";

export default abstract class CoffeeDecorator implements Coffe {
  abstract decoratedCoffee: Coffe;
  abstract cost(): number;
  abstract description(): string;
}