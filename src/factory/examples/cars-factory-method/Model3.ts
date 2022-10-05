import Car from "../cars/Car";

export default class Model3 extends Car {
  constructor() {
    super("Model 3");
  }

  public addWheels(): void {
    console.log("Adding wheels");
  }

  public addAutopilot(): void {
    console.log("Adding autopilot");
  }

  getDescription(): string {
    return `Your car is ${this.getName()}`;
  }
  getCost(): number {
    return 35000;
  }
}