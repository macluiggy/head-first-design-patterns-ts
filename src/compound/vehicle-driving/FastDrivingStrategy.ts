import DrivingStrategy from "./DrivingStrategy";
import Vehicle from "./Vehicle";

export default class FastDrivingStrategy implements DrivingStrategy {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  drive(): void {
    // console.log(`${this.vehicle.constructor.name} is driving fast`);
    console.log(`${this.type} is driving fast`);
  }
}
