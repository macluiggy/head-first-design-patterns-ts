import Pizza from "./Pizza";

export default abstract class PizzaDecorator implements Pizza {
  prepare?(): void {
    throw new Error("Method not implemented.");
  }
  bake?(): void {
    throw new Error("Method not implemented.");
  }
  cut?(): void {
    throw new Error("Method not implemented.");
  }
  box?(): void {
    throw new Error("Method not implemented.");
  }
  abstract getDescription(): string;
  abstract cost(): number;
}
