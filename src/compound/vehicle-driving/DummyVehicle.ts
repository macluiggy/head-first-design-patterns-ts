import Vehicle from "./Vehicle";

export default class DummyVehicle implements Vehicle {
  drive(): void {
    console.log("DummyVehicle is driving");
  }

  stop(): void {
    console.log("DummyVehicle is stopping");
  }

  honk(): void {
    console.log("DummyVehicle is honking");
  }
}