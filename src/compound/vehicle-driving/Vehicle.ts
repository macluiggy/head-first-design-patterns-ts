import DrivingStrategy from "./DrivingStrategy";

export default interface Vehicle {
  drivingStrategy: DrivingStrategy;
  drive(): void;
  stop(): void;
  honk(): void;
  setDrivingStrategy(drivingStrategy: DrivingStrategy): void;
}