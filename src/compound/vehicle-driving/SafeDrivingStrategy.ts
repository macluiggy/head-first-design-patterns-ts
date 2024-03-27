import DrivingStrategy from "./DrivingStrategy";

export default class SafeDrivingStrategy implements DrivingStrategy {
  drive(): void {
    console.log("Safe driving");
  }
}
