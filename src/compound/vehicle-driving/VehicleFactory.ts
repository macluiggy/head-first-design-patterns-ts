import Vehicle from "./Vehicle";
/**
 * kind of vehicle factories
 * AirVehicleFactory, LandVehicleFactory, WaterVehicleFactory
 */
export default abstract class VehicleFactory {
  abstract createVehicle(type: string): Vehicle;
}