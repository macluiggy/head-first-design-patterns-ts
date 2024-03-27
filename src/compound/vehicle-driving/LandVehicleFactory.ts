import DummyVehicle from "./DummyVehicle";
import VehicleFactory from "./VehicleFactory";
import Vehicle from "./Vehicle";
import Car from "./Car";
import Truck from "./Truck";

export default class LandVehicleFactory extends VehicleFactory {
  createVehicle(type: string): Vehicle {
    return (
      {
        car: new Car(),
        truck: new Truck(),
      }[type] || new DummyVehicle()
    );
  }
}