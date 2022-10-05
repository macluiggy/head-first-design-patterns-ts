import Car from "../cars/Car";

export default abstract class Decorator extends Car {
  public abstract car: Car;
  public abstract getDescription(): string;
}