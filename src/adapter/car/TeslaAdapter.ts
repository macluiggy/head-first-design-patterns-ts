import Ford from "./Ford";
import Tesla from "./Tesla";

export default class TeslaAdapter implements Ford {
  private tesla: Tesla;
  constructor(tesla: Tesla) {
    this.tesla = tesla;
  }

  startEngine(): void {
    this.tesla.powerOnEngine();
  }
  stopEngine(): void {
    this.tesla.turnOffEngine();
  }
  accelerate(): void {
    this.tesla.speedUp();
  }
  brake(): void {
    this.tesla.applyBrakeSystem();
  }
  honk(): void {
    this.tesla.makeSound();
  }
}
