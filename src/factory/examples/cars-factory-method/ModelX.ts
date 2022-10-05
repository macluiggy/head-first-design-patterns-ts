import Car from "../cars/Car";

export default class ModelX extends Car {
  constructor() {
    super("Model X");
  }

  public addWheels(): void {
    console.log("Adding wheels");
  }

  public addTurbo(): void {
    console.log("Adding turbo");
  }
  getDescription(): string {
    return `Your car is ${this.getName()}`;
  }
  getCost(): number {
    return 45000;
  }
}
