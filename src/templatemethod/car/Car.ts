export default abstract class Car {
  create(): void {}
  contructEsqueleton(): void {
    console.log("Building car esqueleton");
  }
  abstract addEngine(): void;
  abstract addWheels(): void;
  abstract addBody(): void;
  abstract addFuel(): void;

  addElectronics(): void {
    console.log("Adding electronics");
  }
  addAccessories(): void {
    console.log("Adding accessories");
  }
}
