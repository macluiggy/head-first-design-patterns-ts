import Ford2024 from "./Ford2024";
import FordAdapter from "./FordAdapter";
import TeslaXModel from "./TexlaXModel";
export default class TeslaTestDrive {
  static main(): void {
    // create two instances for a tesla car and a ford adapted to a tesla
    const ford = new Ford2024();
    const fordAdaptedToTesla = new FordAdapter(ford);
    const tesla = new TeslaXModel();

    // test the tesla car
    console.log("The Tesla car says...");
    TeslaTestDrive.testTesla(tesla);

    // test the ford car adapted to a tesla
    console.log("\nThe Ford car adapted to a Tesla says...");
    TeslaTestDrive.testTesla(fordAdaptedToTesla);
  }
  static testTesla(tesla: TeslaXModel): void {
    tesla.powerOnEngine();
    tesla.speedUp();
    tesla.applyBrakeSystem();
    tesla.makeSound();
    tesla.turnOffEngine();
  }
}

TeslaTestDrive.main();
