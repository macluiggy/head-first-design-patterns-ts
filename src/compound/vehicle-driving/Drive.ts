import DrivingStrategy from "./DrivingStrategy";

export default class Drive {
  private drivingStrategy: DrivingStrategy;

  constructor(drivingStrategy: DrivingStrategy) {
    this.drivingStrategy = drivingStrategy;
  }

  public drive(): void {
    this.drivingStrategy.drive();
  }
}