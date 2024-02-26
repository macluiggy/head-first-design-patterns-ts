export default abstract class Car {
  buildCar(): void {
    this.contructEsqueleton();
    this.addEngine();
    this.addWheels();
    this.addBody();
    this.addFuel();
    this.addElectronics();
    this.addAccessories();
  }
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
