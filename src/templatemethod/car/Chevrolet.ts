import Car from "./Car";

export default class Chevrolet extends Car {
  addEngine(): void {
    console.log("Adding Chevrolet engine");
  }
  addWheels(): void {
    console.log("Adding Chevrolet wheels");
  }
  addBody(): void {
    console.log("Adding Chevrolet body");
  }
  addFuel(): void {
    console.log("Adding Chevrolet fuel");
  }
}