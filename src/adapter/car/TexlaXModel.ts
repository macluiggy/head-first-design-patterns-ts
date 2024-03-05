import Tesla from "./Tesla";

export default class TeslaXModel implements Tesla {
  powerOnEngine(): void {
    console.log('Tesla X Model is starting');
  }
  turnOffEngine(): void {
    console.log('Tesla X Model is stopping');
  }
  speedUp(): void {
    console.log('Tesla X Model is speeding up');
  }
  applyBrakeSystem(): void {
    console.log('Tesla X Model is applying brake system');
  }
  makeSound(): void {
    console.log('Tesla X Model is making sound');
  }
}