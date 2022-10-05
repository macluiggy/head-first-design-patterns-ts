import ItemsFactory from "../cars-abstract-factory/ItemsFactory";
import Stickers from "../cars-factory-method/Stickers";
import TeslaCarsFactory from "../cars-factory-method/TeslaCarsFactory";
import Turbo from "../cars-factory-method/Turbo";
import Car from "./Car";
import CarStore from "./CarStore";

export default class Main {
  public static main(): void {
    const teslaFactory: CarStore = new TeslaCarsFactory();
    let car: Car = teslaFactory.orderCar("Model S");
    console.log(`Car name: ${car.getName()}`);
    console.log(car.getDescription() + " and it costs $" + car.getCost());

    car = new Stickers(car);
    // console.log(`Car name: ${car.getName()}`);
    // console.log(car2.getDescription() + " and it costs $" + car2.getCost());
    // car.addDecoration();
    // car = new Stickers(car);
    // car.addDecoration();
    // console.log(`Car name: ${car.getName()}`);
    // console.log(car.getDescription() + " and it costs $" + car.getCost());
    car = new Turbo(car);
    // console.log(`Car name: ${car.getName()}`);
    console.log(car.getDescription() + " and it costs $" + car.getCost());

    car  = new ItemsFactory(car)
    console.log(car.getDescription() + " and it costs $" + car.getCost());
    
  }
}

Main.main();