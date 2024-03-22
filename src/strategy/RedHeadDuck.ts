import Duck from "./Duck";
import FlyWithWings from "./FlyWithWings";
import Quack from "./Quack";

export default class RedHeadDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }
  display() {
    console.log("I'm a real Red Headed duck");
  }
}
