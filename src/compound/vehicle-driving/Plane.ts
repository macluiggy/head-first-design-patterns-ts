import Vehicle from "./Vehicle";

export default class Plane implements Vehicle {
  drive(): void {
    console.log("Plane is flying");
  }

  stop(): void {
    console.log("Plane is landing");
  }

  honk(): void {
    console.log("Plane is honking");
  }
}
