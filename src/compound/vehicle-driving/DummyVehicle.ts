import DrivingStrategy from "./DrivingStrategy";
import Vehicle from "./Vehicle";

export default class DummyVehicle implements Vehicle {
  drivingStrategy: DrivingStrategy;
  constructor(drivingStrategy: DrivingStrategy) {
    this.drivingStrategy = drivingStrategy;
  }
  setDrivingStrategy(drivingStrategy: DrivingStrategy): void {
    this.drivingStrategy = drivingStrategy;
  }
  
  drive(): void {
    console.log("DummyVehicle is driving");
  }

  stop(): void {
    console.log("DummyVehicle is stopping");
  }

  honk(): void {
    console.log("DummyVehicle is honking");
  }
}