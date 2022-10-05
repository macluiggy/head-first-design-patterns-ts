import Car from "../cars/Car";
import CarStore from "../cars/CarStore";
import Model3 from "./Model3";
import ModelS from "./ModelS";
import ModelX from "./ModelX";

export default class TeslaCarsFactory extends CarStore {
  createCar(model: string): Car {
    if (model === "Model S") {
      return new ModelS();
    } else if (model === "Model X") {
      return new ModelX();
    } else {
      return new Model3();
    }
  }
}