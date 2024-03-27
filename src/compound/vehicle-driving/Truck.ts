import DrivingStrategy from "./DrivingStrategy";
import Vehicle from "./Vehicle";

export default class Car implements Vehicle {
  drivingStrategy: DrivingStrategy;
  constructor(drivingStrategy: DrivingStrategy) {
    this.drivingStrategy = drivingStrategy;
  }
  drive(): void {
    // console.log("Car is driving");
    this.drivingStrategy.drive();
  }

  stop(): void {
    console.log("Car is stopped");
  }

  honk(): void {
    console.log("Car is honking");
  }

  setDrivingStrategy(drivingStrategy: DrivingStrategy): void {
    this.drivingStrategy = drivingStrategy;
  }
}
