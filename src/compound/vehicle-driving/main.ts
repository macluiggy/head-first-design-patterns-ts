import FastDrivingStrategy from "./FastDrivingStrategy";
import LandVehicleFactory from "./LandVehicleFactory";
import SafeDrivingStrategy from "./SafeDrivingStrategy";

const factory = new LandVehicleFactory();
const car = factory.createVehicle("car");
car.drive();
car.stop();
car.honk();
car.setDrivingStrategy(new FastDrivingStrategy("car"));
car.drive();

const truck = factory.createVehicle("truck");
truck.drive();
truck.stop();
truck.honk();
truck.setDrivingStrategy(new FastDrivingStrategy("Truck"));
truck.drive();
truck.setDrivingStrategy(new SafeDrivingStrategy("Truck"));
truck.drive();
