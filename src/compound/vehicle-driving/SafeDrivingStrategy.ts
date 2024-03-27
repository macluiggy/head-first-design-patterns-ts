import DrivingStrategy from "./DrivingStrategy";
import Vehicle from "./Vehicle";

export default class SafeDrivingStrategy implements DrivingStrategy {
  constructor(type: string) {
    this.type = type;
  }
  type: string;
  drive(): void {
    // console.log(`${this.vehicle.constructor.name} is driving safely`);
    console.log(`${this.type} is driving safely`);
  }
}
