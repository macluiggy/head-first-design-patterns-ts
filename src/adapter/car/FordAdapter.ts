import Ford from "./Ford";
import Tesla from "./Tesla";

export default class FordAdapter implements Tesla {
  private ford: Ford;
  constructor(ford: Ford) {
    this.ford = ford;
  }

  powerOnEngine(): void {
    this.ford.startEngine();
  }
  turnOffEngine(): void {
    this.ford.stopEngine();
  }
  speedUp(): void {
    this.ford.accelerate();
  }
  applyBrakeSystem(): void {
    this.ford.brake();
  }
  makeSound(): void {
    this.ford.honk();
  }
}
