import Duck from "./Duck";
import FlyNoWay from "./FlyNoWay";
import Quack from "./Quack";

export default class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }
  display() {
    console.log("I'm a model duck");
  }
}
