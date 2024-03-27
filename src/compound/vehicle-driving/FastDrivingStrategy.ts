import DrivingStrategy from "./DrivingStrategy";

export default class FastDrivingStrategy implements DrivingStrategy {
  drive(): void {
    console.log("Fast driving");
  }
}
