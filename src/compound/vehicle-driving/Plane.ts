import DrivingStrategy from "./DrivingStrategy";
import Vehicle from "./Vehicle";

export default class Plane implements Vehicle {
  drivingStrategy: DrivingStrategy;
  constructor(drivingStrategy: DrivingStrategy) {
    this.drivingStrategy = drivingStrategy;
  }
  setDrivingStrategy(drivingStrategy: DrivingStrategy): void {
    this.drivingStrategy = drivingStrategy;
  }
  drive(): void {
    console.log("Plane is flying");
  }

  stop(): void {
    console.log("Plane is landing");
  }

  honk(): void {
    console.log("Plane is honking");
  }
}
