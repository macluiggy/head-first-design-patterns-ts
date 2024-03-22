import Quack from "./Quack";
import FlyWithWings from "./FlyWithWings";

export default class MallardDuck {
  quackBehavior = new Quack();
  flyBehavior = new FlyWithWings();

  public display() {
    console.log("I'm a real Mallard duck");
  }
}