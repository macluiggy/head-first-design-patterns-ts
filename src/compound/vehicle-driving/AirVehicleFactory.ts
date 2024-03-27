import DummyVehicle from "./DummyVehicle";
import Plane from "./Plane";
import Vehicle from "./Vehicle";
import VehicleFactory from "./VehicleFactory";

export default class AirVehicleFactory extends VehicleFactory {
  createVehicle(type: string): Vehicle {
    return (
      {
        plane: new Plane(),
      }[type] || new DummyVehicle()
    );
  }
}
