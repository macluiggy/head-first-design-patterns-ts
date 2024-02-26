import Car, { ElectricCar } from "./Car";

export default class Tesla extends Car implements ElectricCar {
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
  addBattery(): void {
    console.log("Adding Tesla battery");
  }
}
