import DummyVehicle from "./DummyVehicle";
import Plane from "./Plane";
import SafeDrivingStrategy from "./SafeDrivingStrategy";
import Vehicle from "./Vehicle";
import VehicleFactory from "./VehicleFactory";

export default class AirVehicleFactory extends VehicleFactory {
  createVehicle(type: string): Vehicle {
    return (
      {
        plane: new Plane(new SafeDrivingStrategy()),
      }[type] || new DummyVehicle(new SafeDrivingStrategy())
    );
  }
}
