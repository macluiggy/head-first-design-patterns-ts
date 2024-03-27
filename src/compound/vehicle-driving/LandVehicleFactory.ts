import DummyVehicle from "./DummyVehicle";
import VehicleFactory from "./VehicleFactory";
import Vehicle from "./Vehicle";
import Car from "./Car";
import Truck from "./Truck";
import SafeDrivingStrategy from "./SafeDrivingStrategy";

export default class LandVehicleFactory extends VehicleFactory {
  createVehicle(type: 'car' | 'truck'): Vehicle {
    return (
      {
        car: new Car(new SafeDrivingStrategy(type)),
        truck: new Truck(new SafeDrivingStrategy(type)),
      }[type] || new DummyVehicle(new SafeDrivingStrategy(type))
    );
  }
}
