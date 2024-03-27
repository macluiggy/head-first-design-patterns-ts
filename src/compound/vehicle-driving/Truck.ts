import Vehicle from "./Vehicle";

export default class Car implements Vehicle {
  drive(): void {
    console.log("Car is driving");
  }

  stop(): void {
    console.log("Car is stopped");
  }

  honk(): void {
    console.log("Car is honking");
  }
}
