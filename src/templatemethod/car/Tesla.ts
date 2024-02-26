import Car from "./Car";

export default class Tesla extends Car {
  addEngine(): void {
    console.log("Adding Tesla engine");
  }
  addWheels(): void {
    console.log("Adding Tesla wheels");
  }
  addBody(): void {
    console.log("Adding Tesla body");
  }
  addFuel(): void {
    console.log("Electric car, no fuel needed");
  }
}