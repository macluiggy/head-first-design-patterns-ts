import Car from "../cars/Car";

export default class ModelS extends Car {
  constructor() {
    super("Model S");
  }

  public addWheels(): void {
    console.log("Adding wheels");
  }

  public addSensors(): void {
    console.log("Adding sensors");
  }
  getDescription(): string {
    return `Your car is ${this.getName()} and is decorated with: `;
  }
  getCost(): number {
    return 50000;
  }
}
