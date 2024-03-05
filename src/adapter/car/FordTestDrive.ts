import Ford from "./Ford";
import Ford2024 from "./Ford2024";
import FordAdapter from "./FordAdapter";
import TeslaAdapter from "./TeslaAdapter";
import TeslaXModel from "./TexlaXModel";

export default class FordTestDrive {
  static main(): void {
    const ford2024 = new Ford2024();

    console.log("The Ford 2024 says...");
    FordTestDrive.testFord(ford2024);

    const tesla = new TeslaXModel();
    console.log("\nThe Ford 2024 adapted to a Tesla says...");
    FordTestDrive.testFord(new TeslaAdapter(tesla));
  }

  static testFord(ford2024: Ford): void {
    ford2024.startEngine();
    ford2024.accelerate();
    ford2024.brake();
    ford2024.honk();
    ford2024.stopEngine();
  }
}

FordTestDrive.main();

