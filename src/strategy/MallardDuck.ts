import Quack from "./Quack";
import FlyWithWings from "./FlyWithWings";
import Duck from "./Duck";

export default class MallardDuck extends Duck {
  quackBehavior: Quack = new Quack();
  flyBehavior = new FlyWithWings();

  constructor(
    flyBehavior: FlyWithWings = new FlyWithWings(),
    quackBehavior: Quack = new Quack()
  ) {
    super(flyBehavior, quackBehavior);
  }

  public display() {
    console.log("I'm a real Mallard duck");
  }
}
