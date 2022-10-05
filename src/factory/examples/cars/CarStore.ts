import Car from "./Car";

export default abstract class CarStore {
  // name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }

  public orderCar(model: string): Car {
    let car: Car;
    car = this.createCar(model);
    car.addWheels();
    car.addEngine();
    return car;
  }
  abstract createCar(model: string): Car;
}
